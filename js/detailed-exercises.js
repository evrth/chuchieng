(function(){

  const params = new URLSearchParams(window.location.search);
  const unitId = parseInt(params.get("unit"), 10) || 1;
  const exerciseId = params.get("exercise");

  document.getElementById("backLink").href = "unit.html?unit=" + unitId;

  const unitData = DETAILED_EXERCISES_DATA[unitId];

  const listView = document.getElementById("exListView");
  const activeView = document.getElementById("exActiveView");

  const TYPE_LABEL = {
    sentence_completion: "Hoàn thành câu",
    cloze_reading: "Đọc & điền từ",
    word_from_definition: "Đoán từ theo định nghĩa",
    sentence_construction: "Viết câu",
    fill_in_the_blank: "Điền từ",
    error_correction: "Sửa lỗi câu",
    compound_noun: "Ghép danh từ",
    crossword: "Ô chữ",
    matching: "Nối từ",
    labeling: "Điền theo gợi ý",
    question_formation: "Đặt câu hỏi",
    unscramble: "Sắp xếp chữ cái",
    dialogue_completion: "Hoàn thành hội thoại",
    word_association: "Liên tưởng từ",
    open_response: "Trả lời mở",
    situational_expression: "Nói gì trong tình huống",
    multiple_choice: "Trắc nghiệm",
    dialogue_error_correction: "Sửa lỗi hội thoại",
    classification: "Phân loại"
  };
  const TYPE_ICON = {
    sentence_completion: "🌳",
    cloze_reading: "📖",
    word_from_definition: "🔍",
    sentence_construction: "✏️",
    fill_in_the_blank: "✍️",
    error_correction: "🩹",
    compound_noun: "🧩",
    crossword: "🔠",
    matching: "🔗",
    labeling: "🏷️",
    question_formation: "❓",
    unscramble: "🔤",
    dialogue_completion: "💬",
    word_association: "🔍",
    open_response: "📝",
    situational_expression: "🗣️",
    multiple_choice: "✅",
    dialogue_error_correction: "🩹",
    classification: "🗂️"
  };

  const STORAGE_KEY = "chuchieng:unit:" + unitId + ":detailed-exercises";

  function loadProgress(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    }catch(e){ return {}; }
  }
  function saveProgress(p){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }catch(e){}
  }

  // ============================================
  // DANH SÁCH BÀI TẬP
  // ============================================
  function renderList(){
    listView.style.display = "";
    activeView.style.display = "none";

    if(!unitData){
      document.getElementById("exList").innerHTML = "<p style='text-align:center;color:var(--ink-soft);font-weight:700;'>Chưa có dữ liệu bài tập chi tiết cho Unit này.</p>";
      return;
    }

    document.getElementById("exUnitTitle").textContent = "Bài tập chi tiết — " + unitData.unit.title;

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
        window.location.href = "detailed-exercises.html?unit=" + unitId + "&exercise=" + ex.id;
      });
      listEl.appendChild(card);
    });
  }

  // ============================================
  // LÀM BÀI TẬP — điều phối chung
  // ============================================
  let currentExercise = null;
  let currentIndex = -1;
  let currentCheckFn = null;

  function renderActiveExercise(){
    if(!unitData) { renderList(); return; }
    currentIndex = unitData.exercises.findIndex(function(e){ return e.id === exerciseId; });
    currentExercise = currentIndex >= 0 ? unitData.exercises[currentIndex] : null;

    if(!currentExercise){
      renderList();
      return;
    }

    listView.style.display = "none";
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
      case "sentence_completion": renderSentenceCompletion(currentExercise, body); break;
      case "cloze_reading": renderClozeReading(currentExercise, body); break;
      case "unscramble": renderUnscramble(currentExercise, body); break;
      case "word_from_definition": renderWordFromDefinition(currentExercise, body); break;
      case "sentence_construction": renderSentenceConstruction(currentExercise, body); break;
      case "fill_in_the_blank": renderFillInTheBlank(currentExercise, body); break;
      case "error_correction": renderErrorCorrection(currentExercise, body); break;
      case "compound_noun": renderCompoundNoun(currentExercise, body); break;
      case "crossword": renderCrossword(currentExercise, body); break;
      case "matching": renderMatching(currentExercise, body); break;
      case "labeling": renderLabeling(currentExercise, body); break;
      case "question_formation": renderQuestionFormation(currentExercise, body); break;
      case "dialogue_completion": renderDialogueCompletion(currentExercise, body); break;
      case "word_association": renderWordFromDefinition(currentExercise, body); break;
      case "open_response": renderSentenceConstruction(currentExercise, body); break;
      case "situational_expression": renderSituationalExpression(currentExercise, body); break;
      case "multiple_choice": renderDetailedMultipleChoice(currentExercise, body); break;
      case "dialogue_error_correction": renderDialogueErrorCorrection(currentExercise, body); break;
      case "classification": renderClassification(currentExercise, body); break;
      default: body.innerHTML = "<p>Dạng bài chưa được hỗ trợ.</p>";
    }

    document.getElementById("exBackToList").href = "detailed-exercises.html?unit=" + unitId;
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
        window.location.href = "detailed-exercises.html?unit=" + unitId + "&exercise=" + nextId;
      };
    }else{
      nextBtn.style.display = "none";
      const doneNote = document.createElement("div");
      doneNote.style.cssText = "flex-basis:100%;text-align:center;font-weight:800;color:var(--forest);margin-top:8px;";
      doneNote.textContent = "🎉 Đây là bài cuối cùng — bạn đã hoàn thành hết!";
      navEl.appendChild(doneNote);
    }
  }

  document.getElementById("exSubmitBtn").addEventListener("click", function(){
    if(!currentCheckFn) return;
    const result = currentCheckFn();
    finishExercise(result.correct, result.total);
  });

  // ============================================
  // tóm tắt sơ đồ gia đình (tự suy ra từ context.family_tree.people)
  // ============================================
  function buildFamilyTreeSummary(people){
    const byId = {};
    people.forEach(function(p){ byId[p.id] = p; });

    const coupleKeys = {};
    const couples = [];
    people.forEach(function(p){
      if(p.spouse && byId[p.spouse]){
        const key = [p.id, p.spouse].sort().join("-");
        if(!coupleKeys[key]){
          coupleKeys[key] = true;
          couples.push(p.name + " và " + byId[p.spouse].name + " là vợ chồng.");
        }
      }
    });

    const groups = {};
    people.forEach(function(p){
      if(p.parents && p.parents.length){
        const key = p.parents.slice().sort().join("-");
        if(!groups[key]) groups[key] = [];
        groups[key].push(p.name);
      }
    });
    const groupLines = Object.keys(groups).map(function(key){
      const parentNames = key.split("-").map(function(id){ return byId[id] ? byId[id].name : id; }).join(" và ");
      return "Con của " + parentNames + ": " + groups[key].join(", ") + ".";
    });

    return couples.concat(groupLines);
  }

  function renderContextCard(ex, body){
    if(ex.context && ex.context.image){
      const card = document.createElement("div");
      card.className = "ex-context-card ex-context-image-card";
      card.innerHTML =
        '<img class="ex-context-img" src="' + ex.context.image + '" alt="Sơ đồ minh họa">' +
        (ex.context.description ? '<div class="ex-context-caption">' + ex.context.description + '</div>' : "");
      body.appendChild(card);
    }else if(ex.context && ex.context.family_tree && ex.context.family_tree.people){
      const lines = buildFamilyTreeSummary(ex.context.family_tree.people);
      const card = document.createElement("div");
      card.className = "ex-context-card";
      card.innerHTML =
        '<div class="ex-context-title">🌳 Sơ đồ gia đình</div>' +
        '<ul>' + lines.map(function(l){ return "<li>" + l + "</li>"; }).join("") + '</ul>';
      body.appendChild(card);
    }else if(ex.context && ex.context.description){
      const card = document.createElement("div");
      card.className = "ex-context-card";
      card.innerHTML = '<div class="ex-context-title">📌 Bối cảnh</div><div>' + ex.context.description + '</div>';
      body.appendChild(card);
    }
  }

  // ============================================
  // hỗ trợ chấm điểm dùng chung
  // ============================================
  function normalizeAns(s){
    return String(s).trim().toLowerCase().replace(/\s+/g, " ").replace(/[.!?]+$/, "");
  }

  function getAcceptedAnswers(q){
    const list = [];
    if(!Array.isArray(q.answer)) list.push(q.answer);
    if(q.accepted_answers) list.push.apply(list, q.accepted_answers);
    return list;
  }

  function isAnswerCorrect(userValue, q){
    const accepted = getAcceptedAnswers(q);
    const norm = normalizeAns(userValue);
    return accepted.some(function(a){ return normalizeAns(a) === norm; });
  }

  function checkKeywords(userValue, keywords){
    const lower = userValue.toLowerCase();
    return keywords.every(function(k){ return lower.indexOf(k.toLowerCase()) !== -1; });
  }

  function firstAnswerText(q){
    return Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer;
  }

  // ============================================
  // 1. SENTENCE COMPLETION
  // ============================================
  function renderSentenceCompletion(ex, body){
    renderContextCard(ex, body);

    const qWrap = document.createElement("div");
    ex.questions.forEach(function(q){
      const isExample = q.example === true;
      const parts = q.sentence.split("______");
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.qid = q.id;
      qEl.dataset.answer = q.answer;
      qEl.dataset.example = isExample ? "1" : "0";
      qEl.innerHTML =
        '<div class="exq-text">' + parts[0] +
        '<input type="text" class="exq-text-input' + (isExample ? ' example-filled' : '') + '" ' +
          (isExample ? 'value="' + q.answer + '" disabled' : 'placeholder="..." autocomplete="off" autocapitalize="off" spellcheck="false"') +
          '>' +
        (parts[1] || "") +
        (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") +
        '</div>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        if(qEl.dataset.example === "1") return;
        total++;
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
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 2. CLOZE READING (có xử lý câu ví dụ)
  // ============================================
  function renderClozeReading(ex, body){
    renderContextCard(ex, body);

    const answerMap = {};
    const exampleMap = {};
    ex.blanks.forEach(function(b){
      answerMap[b.id] = b.answer;
      exampleMap[b.id] = b.example === true;
    });

    const passageHtml = ex.passage.replace(/\{(\d+)\}/g, function(_, id){
      if(exampleMap[id]){
        return '<input type="text" class="exq-inline-input example-filled" data-blank="' + id + '" data-example="1" value="' + answerMap[id] + '" disabled style="width:' + (answerMap[id].length * 9 + 24) + 'px;">';
      }
      return '<input type="text" class="exq-inline-input" data-blank="' + id + '" data-example="0" autocomplete="off" autocapitalize="off" spellcheck="false">';
    });

    const passageWrap = document.createElement("div");
    passageWrap.className = "exq-passage";
    passageWrap.innerHTML = passageHtml;
    body.appendChild(passageWrap);

    const feedbackEl = document.createElement("div");
    feedbackEl.className = "exq-feedback";
    feedbackEl.style.marginTop = "16px";
    feedbackEl.style.display = "none";
    body.appendChild(feedbackEl);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      const inputs = passageWrap.querySelectorAll(".exq-inline-input");
      inputs.forEach(function(input){
        if(input.dataset.example === "1") return;
        total++;
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
      feedbackEl.style.display = "block";
      feedbackEl.className = "exq-feedback " + (correct === total ? "correct" : "wrong");
      feedbackEl.textContent = correct === total ? "✅ Bạn đã điền đúng tất cả!" : "Di chuột vào ô sai (viền đỏ) để xem đáp án đúng.";
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 12. UNSCRAMBLE (sắp xếp lại chữ cái)
  // ============================================
  function renderUnscramble(ex, body){
    renderContextCard(ex, body);
    const qWrap = document.createElement("div");

    const states = [];
    ex.questions.forEach(function(q, qi){
      const isExample = q.example === true;
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";

      if(isExample){
        qEl.innerHTML =
          '<div class="exq-text">Đáp án: <strong>' + q.answer.toUpperCase() + '</strong> (từ chữ cái: ' + q.scrambled.toUpperCase() + ')' +
          '<span class="exq-example-badge">VÍ DỤ</span></div>';
      }else{
        qEl.innerHTML =
          '<div class="exq-scramble-slot" id="dexScrambleSlot' + qi + '"></div>' +
          '<div class="exq-scramble-tiles" id="dexScrambleBank' + qi + '"></div>' +
          '<div class="exq-feedback" style="display:none;"></div>';
      }
      qWrap.appendChild(qEl);

      if(!isExample){
        states[qi] = {
          letters: q.scrambled.split("").map(function(ch, i){ return { ch: ch, id: i, used: false }; }),
          selected: []
        };
      }
    });
    body.appendChild(qWrap);

    function renderTiles(qi){
      const st = states[qi];
      const slot = document.getElementById("dexScrambleSlot" + qi);
      const bank = document.getElementById("dexScrambleBank" + qi);
      if(!slot || !bank) return;
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

    states.forEach(function(st, qi){ if(st) renderTiles(qi); });

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.questions[qi];
        const st = states[qi];
        const assembled = st.selected.map(function(id){
          return st.letters.find(function(l){ return l.id === id; }).ch;
        }).join("");
        const feedback = qEl.querySelector(".exq-feedback");
        const ok = normalizeAns(assembled) === normalizeAns(q.answer);
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác: " + q.answer;
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + q.answer;
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 3. WORD FROM DEFINITION (đoán từ theo định nghĩa)
  // ============================================
  function renderWordFromDefinition(ex, body){
    renderContextCard(ex, body);
    const qWrap = document.createElement("div");
    ex.questions.forEach(function(q){
      const isExample = q.example === true;
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";
      qEl.innerHTML =
        '<div class="exq-text">' + q.clue +
        (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") + '</div>' +
        '<input type="text" class="exq-text-input' + (isExample ? ' example-filled' : '') + '" ' +
          (isExample ? 'value="' + q.answer + '" disabled' : 'placeholder="Gõ từ tiếng Anh..." autocomplete="off" autocapitalize="off" spellcheck="false"') +
          '>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.questions[qi];
        const input = qEl.querySelector(".exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");
        const ok = isAnswerCorrect(input.value, q);
        input.classList.add(ok ? "correct" : "wrong");
        input.disabled = true;
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + firstAnswerText(q);
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 4. SENTENCE CONSTRUCTION (viết câu hoàn chỉnh)
  // ============================================
  function renderSentenceConstruction(ex, body){
    renderContextCard(ex, body);

    if(ex.pattern){
      const patternCard = document.createElement("div");
      patternCard.className = "ex-context-card";
      patternCard.innerHTML = '<div class="ex-context-title">✏️ Mẫu câu</div><div>' + ex.pattern + '</div>';
      body.appendChild(patternCard);
    }

    const qWrap = document.createElement("div");
    ex.questions.forEach(function(q){
      const isExample = q.example === true;
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";

      let infoLine = "";
      if(q.situation){
        infoLine = q.situation;
      }else if(q.name && q.features){
        infoLine = "<strong>" + q.name + "</strong> — " + q.features.join(", ");
      }else if(q.name && q.birth_year && q.death_year){
        infoLine = "<strong>" + q.name + "</strong> — sinh " + q.birth_year + ", mất " + q.death_year;
      }else if(q.name){
        infoLine = "<strong>" + q.name + "</strong>";
      }

      qEl.innerHTML =
        (q.image ? '<img class="exq-question-img" src="' + q.image + '" alt="' + (q.name || "") + '">' : "") +
        '<div class="exq-text">' + infoLine +
        (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") + '</div>' +
        '<input type="text" class="exq-text-input" style="width:100%;max-width:100%;" ' +
          (isExample ? 'value="' + q.answer + '" disabled' : 'placeholder="Viết câu hoàn chỉnh..." autocomplete="off" spellcheck="false"') +
          '>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      if(isExample) qEl.querySelector(".exq-text-input").classList.add("example-filled");
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.questions[qi];
        const input = qEl.querySelector(".exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");
        const ok = q.required_keywords ? checkKeywords(input.value, q.required_keywords) : isAnswerCorrect(input.value, q);
        input.classList.add(ok ? "correct" : "wrong");
        input.disabled = true;
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Gợi ý đáp án: " + firstAnswerText(q);
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 5. FILL IN THE BLANK (hỗ trợ nhiều chỗ trống / có hoặc không word_bank)
  // ============================================
  function renderFillInTheBlank(ex, body){
    renderContextCard(ex, body);
    const qWrap = document.createElement("div");

    ex.questions.forEach(function(q){
      const isExample = q.example === true;
      const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
      const parts = q.sentence.split("______");

      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";

      let html = '<div class="exq-text">';
      parts.forEach(function(part, i){
        html += part;
        if(i < parts.length - 1){
          const ans = answers[i] !== undefined ? answers[i] : answers[0];
          if(isExample){
            html += '<input type="text" class="exq-text-input example-filled" value="' + ans + '" disabled style="width:auto;min-width:80px;">';
          }else if(ex.word_bank){
            html += '<select class="exq-blank-select" data-blank-index="' + i + '">' +
              '<option value="">— chọn —</option>' +
              ex.word_bank.map(function(w){ return '<option value="' + w + '">' + w + '</option>'; }).join("") +
              '</select>';
          }else{
            html += '<input type="text" class="exq-text-input" data-blank-index="' + i + '" style="width:auto;min-width:100px;" placeholder="..." autocomplete="off" spellcheck="false">';
          }
        }
      });
      if(isExample) html += '<span class="exq-example-badge">VÍ DỤ</span>';
      html += '</div>';
      if(q.letter_hint && !isExample) html += '<div class="exq-hint">Gợi ý: ' + q.letter_hint + '</div>';
      html += '<div class="exq-feedback" style="display:none;"></div>';

      qEl.innerHTML = html;
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.questions[qi];
        const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
        const inputs = qEl.querySelectorAll(".exq-blank-select, .exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");

        let allCorrect = true;
        if(inputs.length === 1 && answers.length === 1){
          const ok = isAnswerCorrect(inputs[0].value, q);
          inputs[0].classList.add(ok ? "correct" : "wrong");
          if(!ok) allCorrect = false;
        }else{
          inputs.forEach(function(input, i){
            const ans = answers[i] !== undefined ? answers[i] : answers[0];
            const ok = normalizeAns(input.value) === normalizeAns(ans);
            input.classList.add(ok ? "correct" : "wrong");
            if(!ok) allCorrect = false;
          });
        }
        inputs.forEach(function(input){ input.disabled = true; });

        feedback.style.display = "block";
        if(allCorrect){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + firstAnswerText(q);
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 6. ERROR CORRECTION (sửa lỗi câu)
  // ============================================
  function renderErrorCorrection(ex, body){
    renderContextCard(ex, body);
    const qWrap = document.createElement("div");
    ex.questions.forEach(function(q){
      const isExample = q.example === true;
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";
      qEl.innerHTML =
        '<div class="exq-text">Câu gốc: <em>"' + q.original + '"</em>' +
        (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") + '</div>' +
        '<input type="text" class="exq-text-input' + (isExample ? ' example-filled' : '') + '" style="width:100%;max-width:100%;" ' +
          (isExample ? 'value="' + q.answer + '" disabled' : 'placeholder="Viết lại câu đã sửa..." autocomplete="off" spellcheck="false"') +
          '>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.questions[qi];
        const input = qEl.querySelector(".exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");
        const ok = isAnswerCorrect(input.value, q);
        input.classList.add(ok ? "correct" : "wrong");
        input.disabled = true;
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + firstAnswerText(q);
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 7. COMPOUND NOUN (ghép danh từ)
  // ============================================
  function renderCompoundNoun(ex, body){
    renderContextCard(ex, body);
    const qWrap = document.createElement("div");
    ex.questions.forEach(function(q){
      const isExample = q.example === true;
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";
      qEl.innerHTML =
        (q.image ? '<img class="exq-question-img" src="' + q.image + '" alt="' + (q.full_word || q.base_word) + '">' : "") +
        '<div class="exq-text">' +
          (isExample
            ? '<input type="text" class="exq-text-input example-filled" value="' + q.answer + '" disabled style="width:90px;">'
            : '<input type="text" class="exq-text-input" style="width:90px;" placeholder="..." autocomplete="off" spellcheck="false">') +
          ' + ' + q.base_word +
          (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") +
        '</div>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.questions[qi];
        const input = qEl.querySelector(".exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");
        const ok = isAnswerCorrect(input.value, q);
        input.classList.add(ok ? "correct" : "wrong");
        input.disabled = true;
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác — " + (q.full_word || (q.answer + q.base_word));
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + firstAnswerText(q) + " (" + (q.full_word || "") + ")";
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 8. CROSSWORD (dạng danh sách gợi ý có đánh số — không có lưới ô chữ thật)
  // ============================================
  function renderCrossword(ex, body){
    renderContextCard(ex, body);
    const qWrap = document.createElement("div");
    ex.clues.forEach(function(q){
      const isExample = q.example === true;
      const dirLabel = q.direction === "across" ? "Ngang" : "Dọc";
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";
      qEl.innerHTML =
        '<div class="exq-text">' + q.number + ' (' + dirLabel + '). ' + q.clue +
        (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") + '</div>' +
        '<input type="text" class="exq-text-input' + (isExample ? ' example-filled' : '') + '" ' +
          (isExample ? 'value="' + q.answer + '" disabled' : 'placeholder="Gõ từ tiếng Anh..." autocomplete="off" autocapitalize="off" spellcheck="false"') +
          '>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.clues[qi];
        const input = qEl.querySelector(".exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");
        const ok = isAnswerCorrect(input.value, q);
        input.classList.add(ok ? "correct" : "wrong");
        input.disabled = true;
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + firstAnswerText(q);
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 9. MATCHING (tự chấm ngay khi nối đúng — không cần nút Nộp bài)
  // ============================================
  function renderMatching(ex, body){
    renderContextCard(ex, body);
    document.getElementById("exSubmitBtn").style.display = "none";
    currentCheckFn = null;

    const total = ex.pairs.length;
    let matchedCount = 0;
    let selLeft = null, selRight = null, locked = false;

    function shuffleArr(arr){
      const a = arr.slice();
      for(let i = a.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
      }
      return a;
    }

    const leftItems = shuffleArr(ex.pairs.map(function(p, i){ return { id: i, text: p.left }; }));
    const rightItems = shuffleArr(ex.pairs.map(function(p, i){ return { id: i, text: p.right, image: p.image }; }));

    const wrap = document.createElement("div");
    wrap.innerHTML =
      '<div class="exq-match-grid">' +
        '<div class="exq-match-col-items" id="dexMatchLeft"></div>' +
        '<div class="exq-match-col-items" id="dexMatchRight"></div>' +
      '</div>' +
      '<div class="exq-match-progress" id="dexMatchProgress">Đã nối: 0/' + total + '</div>';
    body.appendChild(wrap);

    const leftCol = wrap.querySelector("#dexMatchLeft");
    const rightCol = wrap.querySelector("#dexMatchRight");

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
      if(item.image){
        el.innerHTML = '<img class="exq-match-item-img" src="' + item.image + '" alt="' + item.text + '"><span>' + item.text + '</span>';
      }else{
        el.textContent = item.text;
      }
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
        wrap.querySelector("#dexMatchProgress").textContent = "Đã nối: " + matchedCount + "/" + total;
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
  // 10. LABELING (điền theo gợi ý tiếng Việt)
  // ============================================
  function renderLabeling(ex, body){
    renderContextCard(ex, body);
    const qWrap = document.createElement("div");
    ex.questions.forEach(function(q){
      const isExample = q.example === true;
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";
      qEl.innerHTML =
        '<div class="exq-text">' + q.clue_vi +
        (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") + '</div>' +
        '<input type="text" class="exq-text-input' + (isExample ? ' example-filled' : '') + '" ' +
          (isExample ? 'value="' + q.answer + '" disabled' : 'placeholder="Gõ từ tiếng Anh..." autocomplete="off" autocapitalize="off" spellcheck="false"') +
          '>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.questions[qi];
        const input = qEl.querySelector(".exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");
        const ok = isAnswerCorrect(input.value, q);
        input.classList.add(ok ? "correct" : "wrong");
        input.disabled = true;
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + firstAnswerText(q);
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 11. QUESTION FORMATION (đặt câu hỏi)
  // ============================================
  function renderQuestionFormation(ex, body){
    renderContextCard(ex, body);
    const qWrap = document.createElement("div");
    ex.questions.forEach(function(q){
      const isExample = q.example === true;
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";
      let infoLine = q.prompt || "";
      if(q.given_answer) infoLine += '<div class="exq-hint" style="margin-left:0;">Trả lời: ' + q.given_answer + '</div>';
      qEl.innerHTML =
        '<div class="exq-text">' + infoLine +
        (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") + '</div>' +
        '<input type="text" class="exq-text-input' + (isExample ? ' example-filled' : '') + '" style="width:100%;max-width:100%;" ' +
          (isExample ? 'value="' + q.answer + '" disabled' : 'placeholder="Viết câu hỏi..." autocomplete="off" spellcheck="false"') +
          '>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.questions[qi];
        const input = qEl.querySelector(".exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");
        const ok = isAnswerCorrect(input.value, q);
        input.classList.add(ok ? "correct" : "wrong");
        input.disabled = true;
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + firstAnswerText(q);
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 13. SITUATIONAL EXPRESSION (nói gì trong tình huống)
  // ============================================
  function renderSituationalExpression(ex, body){
    renderContextCard(ex, body);
    const qWrap = document.createElement("div");
    ex.questions.forEach(function(q){
      const isExample = q.example === true;
      const promptText = q.clue_vi || q.situation || "";
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";

      let inputHtml;
      if(isExample){
        inputHtml = '<input type="text" class="exq-text-input example-filled" style="width:100%;max-width:100%;" value="' + q.answer + '" disabled>';
      }else if(ex.word_bank){
        inputHtml = '<select class="exq-blank-select">' +
          '<option value="">— chọn —</option>' +
          ex.word_bank.map(function(w){ return '<option value="' + w + '">' + w + '</option>'; }).join("") +
          '</select>';
      }else{
        inputHtml = '<input type="text" class="exq-text-input" style="width:100%;max-width:100%;" placeholder="Bạn sẽ nói gì?..." autocomplete="off" spellcheck="false">';
      }

      qEl.innerHTML =
        '<div class="exq-text">' + promptText +
        (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") + '</div>' +
        inputHtml +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.questions[qi];
        const input = qEl.querySelector(".exq-blank-select, .exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");
        const ok = isAnswerCorrect(input.value, q);
        input.classList.add(ok ? "correct" : "wrong");
        input.disabled = true;
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + firstAnswerText(q);
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 14. MULTIPLE CHOICE (dạng bài tập chi tiết, có xử lý câu ví dụ)
  // ============================================
  function renderDetailedMultipleChoice(ex, body){
    renderContextCard(ex, body);
    const qWrap = document.createElement("div");
    ex.questions.forEach(function(q){
      const isExample = q.example === true;
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";
      qEl.innerHTML =
        '<div class="exq-text">' + q.question +
        (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") + '</div>' +
        '<div class="exq-options">' +
          q.options.map(function(opt){
            const isAnsOpt = isExample && normalizeAns(opt) === normalizeAns(q.answer);
            return '<button type="button" class="exq-option' + (isAnsOpt ? " correct-answer" : "") + '" data-value="' + opt + '"' + (isExample ? " disabled" : "") + '>' + opt + '</button>';
          }).join("") +
        '</div>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    qWrap.querySelectorAll(".exq").forEach(function(qEl){
      if(qEl.dataset.example === "1") return;
      qEl.querySelectorAll(".exq-option").forEach(function(btn){
        btn.addEventListener("click", function(){
          qEl.querySelectorAll(".exq-option").forEach(function(b){ b.classList.remove("selected"); });
          btn.classList.add("selected");
        });
      });
    });

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.questions[qi];
        const selected = qEl.querySelector(".exq-option.selected");
        const feedback = qEl.querySelector(".exq-feedback");
        const isCorrect = selected && normalizeAns(selected.dataset.value) === normalizeAns(q.answer);
        qEl.querySelectorAll(".exq-option").forEach(function(b){
          b.disabled = true;
          if(normalizeAns(b.dataset.value) === normalizeAns(q.answer)) b.classList.add("correct-answer");
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
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 15. DIALOGUE COMPLETION (hội thoại có chỗ trống)
  // ============================================
  function renderDialogueCompletion(ex, body){
    renderContextCard(ex, body);
    const wrap = document.createElement("div");
    const blanks = []; // { el, question }

    const dialogues = ex.dialogues || [];
    dialogues.forEach(function(dlg){
      const dlgCard = document.createElement("div");
      dlgCard.className = "exq";

      dlg.turns.forEach(function(turn){
        const row = document.createElement("div");
        row.style.marginBottom = "8px";

        if(turn.answer !== undefined){
          const isExample = turn.example === true;
          if(isExample){
            row.innerHTML = '<strong>' + turn.speaker + ':</strong> ' + (turn.line || turn.answer) + '<span class="exq-example-badge">VÍ DỤ</span>';
          }else if(turn.line && turn.line.indexOf("______") !== -1){
            const parts = turn.line.split("______");
            row.innerHTML = '<strong>' + turn.speaker + ':</strong> ' + parts[0] +
              '<input type="text" class="exq-text-input" style="width:auto;min-width:140px;" autocomplete="off" spellcheck="false">' +
              (parts[1] || "");
          }else{
            row.innerHTML = '<strong>' + turn.speaker + ':</strong> ' +
              '<input type="text" class="exq-text-input" style="width:70%;max-width:400px;" placeholder="..." autocomplete="off" spellcheck="false">';
          }
          if(!isExample){
            const inputEl = row.querySelector(".exq-text-input");
            blanks.push({ el: inputEl, question: turn });
          }
        }else{
          row.innerHTML = '<strong>' + turn.speaker + ':</strong> ' + turn.line;
        }
        dlgCard.appendChild(row);
      });

      dlgCard.appendChild((function(){
        const fb = document.createElement("div");
        fb.className = "exq-feedback";
        fb.style.display = "none";
        dlgCard._feedback = fb;
        return fb;
      })());

      wrap.appendChild(dlgCard);
    });
    body.appendChild(wrap);

    currentCheckFn = function(){
      let correct = 0;
      const total = blanks.length;
      blanks.forEach(function(b){
        const q = b.question;
        const ok = q.required_keywords ? checkKeywords(b.el.value, q.required_keywords) : isAnswerCorrect(b.el.value, q);
        b.el.classList.add(ok ? "correct" : "wrong");
        b.el.disabled = true;
        if(ok) correct++;
        const fb = document.createElement("span");
        fb.className = "exq-feedback " + (ok ? "correct" : "wrong");
        fb.style.display = "inline-block";
        fb.style.marginLeft = "8px";
        fb.textContent = ok ? "✅" : "❌ (" + firstAnswerText(q) + ")";
        b.el.insertAdjacentElement("afterend", fb);
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 16. DIALOGUE ERROR CORRECTION (sửa lỗi trong hội thoại)
  // ============================================
  function renderDialogueErrorCorrection(ex, body){
    renderContextCard(ex, body);

    const passageCard = document.createElement("div");
    passageCard.className = "ex-context-card";
    passageCard.innerHTML = '<div class="ex-context-title">💬 Đoạn hội thoại gốc</div><div style="white-space:pre-line;">' + ex.original_dialogue + '</div>';
    body.appendChild(passageCard);

    const qWrap = document.createElement("div");
    ex.corrections.forEach(function(q){
      const isExample = q.example === true;
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.example = isExample ? "1" : "0";
      qEl.innerHTML =
        '<div class="exq-text">Sửa: <em>"' + q.wrong + '"</em>' +
        (isExample ? '<span class="exq-example-badge">VÍ DỤ</span>' : "") + '</div>' +
        '<input type="text" class="exq-text-input' + (isExample ? ' example-filled' : '') + '" style="width:100%;max-width:100%;" ' +
          (isExample ? 'value="' + q.correct + '" disabled' : 'placeholder="Viết lại cho đúng..." autocomplete="off" spellcheck="false"') +
          '>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      let qi = -1;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        qi++;
        if(qEl.dataset.example === "1") return;
        total++;
        const q = ex.corrections[qi];
        const input = qEl.querySelector(".exq-text-input");
        const feedback = qEl.querySelector(".exq-feedback");
        const ok = normalizeAns(input.value) === normalizeAns(q.correct);
        input.classList.add(ok ? "correct" : "wrong");
        input.disabled = true;
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + q.correct;
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // 17. CLASSIFICATION (phân loại từ vào nhóm)
  // ============================================
  function renderClassification(ex, body){
    renderContextCard(ex, body);
    const categoryNames = Object.keys(ex.categories);

    const qWrap = document.createElement("div");
    ex.items.forEach(function(item){
      const qEl = document.createElement("div");
      qEl.className = "exq";
      qEl.dataset.item = item;
      qEl.innerHTML =
        '<div class="exq-text">' + item + '</div>' +
        '<select class="exq-blank-select">' +
          '<option value="">— chọn nhóm —</option>' +
          categoryNames.map(function(c){ return '<option value="' + c + '">' + c + '</option>'; }).join("") +
        '</select>' +
        '<div class="exq-feedback" style="display:none;"></div>';
      qWrap.appendChild(qEl);
    });
    body.appendChild(qWrap);

    currentCheckFn = function(){
      let correct = 0, total = 0;
      qWrap.querySelectorAll(".exq").forEach(function(qEl){
        total++;
        const item = qEl.dataset.item;
        const select = qEl.querySelector(".exq-blank-select");
        const feedback = qEl.querySelector(".exq-feedback");
        const correctCategory = categoryNames.find(function(c){ return ex.categories[c].indexOf(item) !== -1; });
        const ok = select.value === correctCategory;
        select.classList.add(ok ? "correct" : "wrong");
        select.disabled = true;
        feedback.style.display = "block";
        if(ok){
          correct++;
          feedback.className = "exq-feedback correct";
          feedback.textContent = "✅ Chính xác";
        }else{
          feedback.className = "exq-feedback wrong";
          feedback.textContent = "❌ Đáp án đúng: " + correctCategory;
        }
      });
      return { correct: correct, total: total };
    };
  }

  // ============================================
  // khởi tạo
  // ============================================
  if(exerciseId){
    renderActiveExercise();
  }else{
    renderList();
  }

})();
