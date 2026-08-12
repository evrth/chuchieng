(function(){

  const params = new URLSearchParams(window.location.search);
  const unitId = parseInt(params.get("unit"), 10) || 1;
  const exerciseId = params.get("exercise");

  document.getElementById("backLink").href = "unit.html?unit=" + unitId;

  const unitData = EXERCISES_DATA[unitId];

  const listView = document.getElementById("exListView");
  const activeView = document.getElementById("exActiveView");
  const allDoneView = document.getElementById("exAllDoneView");

  const TYPE_LABEL = {
    matching: "Nối từ",
    fill_in_the_blank: "Điền từ",
    multiple_choice: "Trắc nghiệm",
    true_false: "Đúng / Sai",
    unscramble: "Sắp xếp chữ cái",
    labeling: "Điền vào sơ đồ",
    cloze_reading: "Đọc & điền từ"
  };
  const TYPE_ICON = {
    matching: "🔗",
    fill_in_the_blank: "✍️",
    multiple_choice: "✅",
    true_false: "⚖️",
    unscramble: "🔤",
    labeling: "🏷️",
    cloze_reading: "📖"
  };

  const STORAGE_KEY = "chuchieng:unit:" + unitId + ":exercises";

  function loadProgress(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    }catch(e){ return {}; }
  }
  function saveProgress(p){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }catch(e){}
  }

  function shuffleArr(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function showToast(msg){
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function(){ toast.classList.remove("show"); }, 2200);
  }

  // ============================================
  // DANH SÁCH BÀI TẬP
  // ============================================
  function renderList(){
    listView.style.display = "";
    activeView.style.display = "none";
    allDoneView.style.display = "none";

    if(!unitData){
      document.getElementById("exList").innerHTML = "<p style='text-align:center;color:var(--ink-soft);font-weight:700;'>Chưa có dữ liệu bài tập cho Unit này.</p>";
      return;
    }

    document.getElementById("exUnitTitle").textContent = "Bài tập nhanh — " + unitData.unit.title;

    const progress = loadProgress();
    const listEl = document.getElementById("exList");
    listEl.innerHTML = "";

    unitData.exercises.forEach(function(ex, i){
      const p = progress[ex.id];
      const card = document.createElement("div");
      card.className = "ex-card";
      card.innerHTML =
        '<div class="ex-card-icon">' + (TYPE_ICON[ex.type] || "📝") + '</div>' +
        '<div class="ex-card-body">' +
          '<div class="ex-card-title">Bài ' + (i + 1) + ': ' + ex.title + '</div>' +
          '<div class="ex-card-sub">' + ex.instructions_vi + '</div>' +
        '</div>' +
        '<div class="ex-card-status' + (p && p.done ? ' done' : '') + '">' +
          (p && p.done ? "Đã làm: " + p.correct + "/" + p.total : "Chưa làm") +
        '</div>' +
        '<div class="ex-card-arrow">›</div>';
      card.addEventListener("click", function(){
        window.location.href = "exercises.html?unit=" + unitId + "&exercise=" + ex.id;
      });
      listEl.appendChild(card);
    });
  }

  // ============================================
  // LÀM BÀI TẬP — điều phối chung
  // ============================================
  let currentExercise = null;
  let currentIndex = -1;
  let currentCheckFn = null; // gọi khi bấm Nộp bài, trả về {correct,total}

  function renderActiveExercise(){
    if(!unitData) { renderList(); return; }
    currentIndex = unitData.exercises.findIndex(function(e){ return e.id === exerciseId; });
    currentExercise = currentIndex >= 0 ? unitData.exercises[currentIndex] : null;

    if(!currentExercise){
      renderList();
      return;
    }

    listView.style.display = "none";
    allDoneView.style.display = "none";
    activeView.style.display = "";

    document.getElementById("exActiveTypeBadge").textContent = TYPE_LABEL[currentExercise.type] || currentExercise.type;
    document.getElementById("exActiveTitle").textContent = "Bài " + (currentIndex + 1) + ": " + currentExercise.title;
    document.getElementById("exActiveInstructions").textContent = currentExercise.instructions_vi;

    document.getElementById("exResult").style.display = "none";
    document.getElementById("exNavButtons").style.display = "none";
    const submitBtn = document.getElementById("exSubmitBtn");
    submitBtn.style.display = "";
    submitBtn.disabled = false;

    const body = document.getElementById("exActiveBody");
    body.innerHTML = "";

    switch(currentExercise.type){
      case "matching": renderMatching(currentExercise, body); break;
      case "fill_in_the_blank": renderFillBlank(currentExercise, body); break;
      case "multiple_choice": renderMultipleChoice(currentExercise, body); break;
      case "true_false": renderTrueFalse(currentExercise, body); break;
      case "unscramble": renderUnscramble(currentExercise, body); break;
      case "labeling": renderLabeling(currentExercise, body); break;
      case "cloze_reading": renderClozeReading(currentExercise, body); break;
      default: body.innerHTML = "<p>Dạng bài chưa được hỗ trợ.</p>";
    }

    document.getElementById("exBackToList").href = "exercises.html?unit=" + unitId;
  }

  function finishExercise(correct, total){
    const progress = loadProgress();
    progress[currentExercise.id] = { done: true, correct: correct, total: total };
    saveProgress(progress);

    document.getElementById("exSubmitBtn").style.display = "none";
    const resultEl = document.getElementById("exResult");
    resultEl.style.display = "block";
    resultEl.textContent = "Bạn đã làm đúng " + correct + "/" + total + " câu.";

    const navEl = document.getElementById("exNavButtons");
    navEl.style.display = "flex";
    const nextBtn = document.getElementById("exNextBtn");

    const hasNext = currentIndex < unitData.exercises.length - 1;
    if(hasNext){
      nextBtn.style.display = "";
      nextBtn.textContent = "Bài tiếp theo →";
      nextBtn.onclick = function(){
        const nextId = unitData.exercises[currentIndex + 1].id;
        window.location.href = "exercises.html?unit=" + unitId + "&exercise=" + nextId;
      };
    }else{
      nextBtn.style.display = "none";
      allDoneAvailable();
    }
  }

  function allDoneAvailable(){
    const navEl = document.getElementById("exNavButtons");
    const doneNote = document.createElement("div");
    doneNote.style.cssText = "flex-basis:100%;text-align:center;font-weight:800;color:var(--forest);margin-top:8px;";
    doneNote.textContent = "🎉 Đây là bài cuối cùng — bạn đã hoàn thành hết!";
    navEl.appendChild(doneNote);
  }

  document.getElementById("exSubmitBtn").addEventListener("click", function(){
    if(!currentCheckFn) return;
    const result = currentCheckFn();
    finishExercise(result.correct, result.total);
  });

  // ============================================
  // 1. MATCHING
  // ============================================
  function renderMatching(ex, body){
    document.getElementById("exSubmitBtn").style.display = "none"; // tự chấm theo từng cặp
    currentCheckFn = null;

    const total = ex.pairs.length;
    let matchedCount = 0;
    let selLeft = null, selRight = null, locked = false;

    const leftItems = shuffleArr(ex.pairs.map(function(p, i){ return { id: i, text: p.left }; }));
    const rightItems = shuffleArr(ex.pairs.map(function(p, i){ return { id: i, text: p.right }; }));

    body.innerHTML =
      '<div class="exq-match-grid">' +
        '<div class="exq-match-col-items" id="exMatchLeft"></div>' +
        '<div class="exq-match-col-items" id="exMatchRight"></div>' +
      '</div>' +
      '<div class="exq-match-progress" id="exMatchProgress">Đã nối: 0/' + total + '</div>';

    const leftCol = document.getElementById("exMatchLeft");
    const rightCol = document.getElementById("exMatchRight");

    leftItems.forEach(function(item){
      const el = document.createElement("div");
      el.className = "exq-match-item";
      el.textContent = item.text;
      el.addEventListener("click", function(){ pick("left", item, el); });
      leftCol.appendChild(el);
    });
    rightItems.forEach(function(item){
      const el = document.createElement("div");
      el.className = "exq-match-item";
      el.textContent = item.text;
      el.addEventListener("click", function(){ pick("right", item, el); });
      rightCol.appendChild(el);
    });

    function pick(side, item, el){
      if(locked || el.classList.contains("matched")) return;
      if(side === "left"){
        if(selLeft && selLeft.el === el){ selLeft.el.classList.remove("selected"); selLeft = null; return; }
        if(selLeft) selLeft.el.classList.remove("selected");
        selLeft = { item: item, el: el };
        el.classList.add("selected");
      }else{
        if(selRight && selRight.el === el){ selRight.el.classList.remove("selected"); selRight = null; return; }
        if(selRight) selRight.el.classList.remove("selected");
        selRight = { item: item, el: el };
        el.classList.add("selected");
      }
      if(selLeft && selRight) evaluate();
    }

    function evaluate(){
      locked = true;
      const correct = selLeft.item.id === selRight.item.id;
      if(correct){
        selLeft.el.classList.add("matched");
        selRight.el.classList.add("matched");
        matchedCount++;
        document.getElementById("exMatchProgress").textContent = "Đã nối: " + matchedCount + "/" + total;
        selLeft = null; selRight = null;
        locked = false;
        if(matchedCount >= total) finishExercise(total, total);
      }else{
        selLeft.el.classList.add("wrong-flash");
        selRight.el.classList.add("wrong-flash");
        setTimeout(function(){
          selLeft.el.classList.remove("selected", "wrong-flash");
          selRight.el.classList.remove("selected", "wrong-flash");
          selLeft = null; selRight = null;
          locked = false;
        }, 500);
      }
    }
  }

  // ============================================
  // 2. FILL IN THE BLANK
  // ============================================
  function renderFillBlank(ex, body){
    const bankOptions = shuffleArr(ex.word_bank);
    let html = "";
    ex.questions.forEach(function(q){
      const parts = q.sentence.split("______");
      html += '<div class="exq" data-qid="' + q.id + '">' +
        '<div class="exq-text">' + parts[0] +
        '<select class="exq-blank-select" data-answer="' + q.answer + '">' +
          '<option value="">— chọn từ —</option>' +
          bankOptions.map(function(w){ return '<option value="' + w + '">' + w + '</option>'; }).join("") +
        '</select>' +
        (parts[1] || "") +
        '<span class="exq-hint">(gợi ý: ' + q.hint_vi + ')</span>' +
        '</div>' +
        '<div class="exq-feedback" style="display:none;"></div>' +
      '</div>';
    });
    body.innerHTML = html;

    currentCheckFn = function(){
      let correct = 0;
      const qs = body.querySelectorAll(".exq");
      qs.forEach(function(qEl){
        const select = qEl.querySelector(".exq-blank-select");
        const feedback = qEl.querySelector(".exq-feedback");
        const answer = select.dataset.answer;
        const isCorrect = select.value === answer;
        select.classList.add(isCorrect ? "correct" : "wrong");
        select.disabled = true;
        feedback.style.display = "block";
        if(isCorrect){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + answer;
        }
      });
      return { correct: correct, total: ex.questions.length };
    };
  }

  // ============================================
  // 3. MULTIPLE CHOICE
  // ============================================
  function renderMultipleChoice(ex, body){
    let html = "";
    ex.questions.forEach(function(q){
      html += '<div class="exq" data-qid="' + q.id + '" data-answer="' + q.answer + '">' +
        '<div class="exq-text">' + q.question + '</div>' +
        '<div class="exq-options">' +
          q.options.map(function(opt){
            return '<button type="button" class="exq-option" data-value="' + opt + '">' + opt + '</button>';
          }).join("") +
        '</div>' +
        '<div class="exq-feedback" style="display:none;"></div>' +
      '</div>';
    });
    body.innerHTML = html;

    body.querySelectorAll(".exq").forEach(function(qEl){
      qEl.querySelectorAll(".exq-option").forEach(function(btn){
        btn.addEventListener("click", function(){
          qEl.querySelectorAll(".exq-option").forEach(function(b){ b.classList.remove("selected"); });
          btn.classList.add("selected");
        });
      });
    });

    currentCheckFn = function(){
      let correct = 0;
      const qs = body.querySelectorAll(".exq");
      qs.forEach(function(qEl){
        const answer = qEl.dataset.answer;
        const selected = qEl.querySelector(".exq-option.selected");
        const feedback = qEl.querySelector(".exq-feedback");
        const isCorrect = selected && selected.dataset.value === answer;
        qEl.querySelectorAll(".exq-option").forEach(function(b){
          b.disabled = true;
          if(b.dataset.value === answer) b.classList.add("correct-answer");
          else if(b.classList.contains("selected")) b.classList.add("wrong-answer");
        });
        feedback.style.display = "block";
        if(isCorrect){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = selected ? "❌ Chưa đúng" : "❌ Bạn chưa chọn đáp án";
        }
      });
      return { correct: correct, total: ex.questions.length };
    };
  }

  // ============================================
  // 4. TRUE / FALSE
  // ============================================
  function renderTrueFalse(ex, body){
    let html = "";
    ex.questions.forEach(function(q){
      html += '<div class="exq" data-qid="' + q.id + '" data-answer="' + q.answer + '">' +
        '<div class="exq-text">' + q.statement + '</div>' +
        '<div class="exq-tf-row">' +
          '<button type="button" class="exq-option" data-value="true">Đúng</button>' +
          '<button type="button" class="exq-option" data-value="false">Sai</button>' +
        '</div>' +
        '<div class="exq-feedback" style="display:none;"></div>' +
      '</div>';
    });
    body.innerHTML = html;

    body.querySelectorAll(".exq").forEach(function(qEl){
      qEl.querySelectorAll(".exq-option").forEach(function(btn){
        btn.addEventListener("click", function(){
          qEl.querySelectorAll(".exq-option").forEach(function(b){ b.classList.remove("selected"); });
          btn.classList.add("selected");
        });
      });
    });

    currentCheckFn = function(){
      let correct = 0;
      const qs = body.querySelectorAll(".exq");
      qs.forEach(function(qEl){
        const answer = qEl.dataset.answer; // "true" / "false"
        const selected = qEl.querySelector(".exq-option.selected");
        const feedback = qEl.querySelector(".exq-feedback");
        const isCorrect = selected && selected.dataset.value === answer;
        qEl.querySelectorAll(".exq-option").forEach(function(b){
          b.disabled = true;
          if(b.dataset.value === answer) b.classList.add("correct-answer");
          else if(b.classList.contains("selected")) b.classList.add("wrong-answer");
        });
        feedback.style.display = "block";
        if(isCorrect){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = selected ? "❌ Chưa đúng" : "❌ Bạn chưa chọn đáp án";
        }
      });
      return { correct: correct, total: ex.questions.length };
    };
  }

  // ============================================
  // 5. UNSCRAMBLE
  // ============================================
  function renderUnscramble(ex, body){
    let html = "";
    ex.questions.forEach(function(q, qi){
      html += '<div class="exq" data-qid="' + q.id + '" data-answer="' + q.answer + '" data-qi="' + qi + '">' +
        '<div class="exq-scramble-slot" id="exScrambleSlot' + qi + '"></div>' +
        '<div class="exq-scramble-tiles" id="exScrambleBank' + qi + '"></div>' +
        '<div class="exq-feedback" style="display:none;"></div>' +
      '</div>';
    });
    body.innerHTML = html;

    const states = ex.questions.map(function(q){
      return {
        letters: q.scrambled.split("").map(function(ch, i){ return { ch: ch, id: i, used: false }; }),
        selected: []
      };
    });

    function renderTiles(qi){
      const st = states[qi];
      const slot = document.getElementById("exScrambleSlot" + qi);
      const bank = document.getElementById("exScrambleBank" + qi);
      slot.innerHTML = "";
      bank.innerHTML = "";

      st.selected.forEach(function(id){
        const t = st.letters.find(function(l){ return l.id === id; });
        const el = document.createElement("div");
        el.className = "letter-tile";
        el.textContent = t.ch;
        el.addEventListener("click", function(){
          st.selected = st.selected.filter(function(sid){ return sid !== id; });
          t.used = false;
          renderTiles(qi);
        });
        slot.appendChild(el);
      });

      st.letters.forEach(function(t){
        if(t.used) return;
        const el = document.createElement("div");
        el.className = "letter-tile";
        el.textContent = t.ch;
        el.addEventListener("click", function(){
          t.used = true;
          st.selected.push(t.id);
          renderTiles(qi);
        });
        bank.appendChild(el);
      });
    }

    states.forEach(function(st, qi){ renderTiles(qi); });

    currentCheckFn = function(){
      let correct = 0;
      const qs = body.querySelectorAll(".exq");
      qs.forEach(function(qEl){
        const qi = parseInt(qEl.dataset.qi, 10);
        const answer = qEl.dataset.answer;
        const st = states[qi];
        const assembled = st.selected.map(function(id){
          return st.letters.find(function(l){ return l.id === id; }).ch;
        }).join("");
        const feedback = qEl.querySelector(".exq-feedback");
        const isCorrect = assembled === answer;
        feedback.style.display = "block";
        if(isCorrect){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác: " + answer;
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + answer;
        }
      });
      return { correct: correct, total: ex.questions.length };
    };
  }

  // ============================================
  // 6. LABELING
  // ============================================
  function renderLabeling(ex, body){
    let html = "";
    ex.questions.forEach(function(q){
      html += '<div class="exq" data-qid="' + q.id + '" data-answer="' + q.answer + '">' +
        '<div class="exq-text">' + q.clue_vi + '</div>' +
        '<input type="text" class="exq-text-input" placeholder="Gõ từ tiếng Anh..." autocomplete="off" autocapitalize="off" spellcheck="false">' +
        '<div class="exq-feedback" style="display:none;"></div>' +
      '</div>';
    });
    body.innerHTML = html;

    currentCheckFn = function(){
      let correct = 0;
      const qs = body.querySelectorAll(".exq");
      qs.forEach(function(qEl){
        const input = qEl.querySelector(".exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");
        const answer = qEl.dataset.answer;
        const isCorrect = input.value.trim().toLowerCase() === answer.toLowerCase();
        input.classList.add(isCorrect ? "correct" : "wrong");
        input.disabled = true;
        feedback.style.display = "block";
        if(isCorrect){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + answer;
        }
      });
      return { correct: correct, total: ex.questions.length };
    };
  }

  // ============================================
  // 7. CLOZE READING
  // ============================================
  function renderClozeReading(ex, body){
    const answerMap = {};
    ex.blanks.forEach(function(b){ answerMap[b.id] = b.answer; });

    const passageHtml = ex.passage.replace(/\{(\d+)\}/g, function(_, id){
      return '<input type="text" class="exq-inline-input" data-blank="' + id + '" autocomplete="off" autocapitalize="off" spellcheck="false">';
    });

    body.innerHTML =
      '<div class="exq-passage" id="exPassage">' + passageHtml + '</div>' +
      '<div class="exq-feedback" id="exClozeFeedback" style="display:none;margin-top:16px;"></div>';

    currentCheckFn = function(){
      let correct = 0;
      const inputs = body.querySelectorAll(".exq-inline-input");
      const total = inputs.length;
      inputs.forEach(function(input){
        const answer = answerMap[input.dataset.blank];
        const isCorrect = input.value.trim().toLowerCase() === answer.toLowerCase();
        input.classList.add(isCorrect ? "correct" : "wrong");
        input.disabled = true;
        if(isCorrect){
          correct++;
        }else{
          input.title = "Đáp án đúng: " + answer;
        }
      });
      const fb = document.getElementById("exClozeFeedback");
      fb.style.display = "block";
      fb.className = "exq-feedback " + (correct === total ? "correct" : "wrong");
      fb.textContent = correct === total ? "✅ Bạn đã điền đúng tất cả!" : "Di chuột vào ô sai (viền đỏ) để xem đáp án đúng.";
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // khởi tạo
  // ============================================
  document.getElementById("exAllDoneBackToList").href = "exercises.html?unit=" + unitId;

  if(exerciseId){
    renderActiveExercise();
  }else{
    renderList();
  }

})();
