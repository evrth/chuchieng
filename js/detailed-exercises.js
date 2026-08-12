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
    cloze_reading: "Đọc & điền từ"
  };
  const TYPE_ICON = {
    sentence_completion: "🌳",
    cloze_reading: "📖"
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
    if(ex.context && ex.context.family_tree && ex.context.family_tree.people){
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
  // khởi tạo
  // ============================================
  if(exerciseId){
    renderActiveExercise();
  }else{
    renderList();
  }

})();
