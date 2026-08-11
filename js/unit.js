(function(){

  // ---------- lấy unit từ URL ?unit=id ----------
  const params = new URLSearchParams(window.location.search);
  const unitId = parseInt(params.get("unit"), 10) || 1;
  const unit = VOCAB_UNITS.find(function(u){ return u.id === unitId; }) || VOCAB_UNITS[0];
  const ALL_WORDS = unit.words; // nguồn dữ liệu gốc, không đổi thứ tự

  const STORAGE_KEY = "chuchieng:unit:" + unit.id + ":learned";
  const EXIT_URL = "unit.html?unit=" + unit.id;

  // ---------- learned state ----------
  function loadLearned(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    }catch(e){ return {}; }
  }
  function saveLearned(state){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
  }
  let learned = loadLearned(); // { word: true/false }

  function isLearned(word){ return !!learned[word]; }
  function setLearned(word, val){
    learned[word] = val;
    saveLearned(learned);
    renderHero();
  }

  // ---------- header / hero ----------
  function renderHero(){
    document.getElementById("unitHeroTitle").textContent = "Unit " + unit.id + ". " + unit.title;
    const total = ALL_WORDS.length;
    const learnedCount = ALL_WORDS.filter(function(w){ return isLearned(w.word); }).length;
    const percent = total > 0 ? Math.round((learnedCount / total) * 100) : 0;

    document.getElementById("unitTotalBadge").textContent = total + " từ vựng";
    document.getElementById("unitLearnedBadge").textContent = learnedCount + "/" + total + " đã học (" + percent + "%)";
    document.getElementById("unitHeroFill").style.width = percent + "%";
  }

  // ---------- Tùy chỉnh: trạng thái / số lượng / thứ tự ----------
  const statusSelect = document.getElementById("statusSelect");
  const quantitySelect = document.getElementById("quantitySelect");
  const orderSelect = document.getElementById("orderSelect");
  const selectedCountBadge = document.getElementById("selectedCountBadge");

  function fillQuantityOptions(){
    const total = ALL_WORDS.length;
    const opts = [5, 10, 20].filter(function(n){ return n < total; });
    quantitySelect.innerHTML = "";
    opts.forEach(function(n){
      const o = document.createElement("option");
      o.value = n; o.textContent = n + " từ";
      quantitySelect.appendChild(o);
    });
    const allOpt = document.createElement("option");
    allOpt.value = "all";
    allOpt.textContent = "Tất cả (" + total + " từ)";
    quantitySelect.appendChild(allOpt);
    quantitySelect.value = "all";
  }

  function getWorkingSet(){
    let list = ALL_WORDS.slice();

    // lọc theo trạng thái
    const status = statusSelect.value;
    if(status === "learned"){
      list = list.filter(function(w){ return isLearned(w.word); });
    }else if(status === "not-learned"){
      list = list.filter(function(w){ return !isLearned(w.word); });
    }

    // sắp xếp theo thứ tự
    if(orderSelect.value === "az"){
      list.sort(function(a,b){ return a.word.localeCompare(b.word); });
    }else{
      // ngẫu nhiên (Fisher–Yates)
      for(let i = list.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = list[i]; list[i] = list[j]; list[j] = tmp;
      }
    }

    // giới hạn số lượng
    const qty = quantitySelect.value;
    if(qty !== "all"){
      list = list.slice(0, parseInt(qty, 10));
    }

    return list;
  }

  function updateSelectedBadge(){
    const set = getWorkingSet();
    selectedCountBadge.textContent = set.length + "/" + ALL_WORDS.length + " từ";
  }

  [statusSelect, quantitySelect, orderSelect].forEach(function(el){
    el.addEventListener("change", updateSelectedBadge);
  });

  // ---------- phát âm ----------
  function speak(word){
    try{
      if(!("speechSynthesis" in window)) return;
      const u = new SpeechSynthesisUtterance(word);
      u.lang = "en-US";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }catch(e){}
  }

  // ---------- phát âm câu (Listening) — giọng Anh-Mỹ, chậm rãi, dễ nghe cho A1-A2 ----------
  let cachedVoice = null;
  function pickVoice(){
    if(!("speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if(!voices.length) return null;
    // ưu tiên các giọng tự nhiên, rõ ràng thường có sẵn trên Chrome/Edge/macOS
    const preferredNames = [
      "Google US English",
      "Microsoft Aria Online (Natural) - English (United States)",
      "Microsoft Jenny Online (Natural) - English (United States)",
      "Samantha",
      "Alex"
    ];
    for(let i = 0; i < preferredNames.length; i++){
      const v = voices.find(function(v){ return v.name === preferredNames[i]; });
      if(v) return v;
    }
    const usFemale = voices.find(function(v){ return v.lang === "en-US"; });
    if(usFemale) return usFemale;
    const anyEn = voices.find(function(v){ return v.lang && v.lang.indexOf("en") === 0; });
    return anyEn || voices[0] || null;
  }
  if("speechSynthesis" in window){
    cachedVoice = pickVoice();
    window.speechSynthesis.onvoiceschanged = function(){ cachedVoice = pickVoice(); };
  }

  function speakSentence(text){
    try{
      if(!("speechSynthesis" in window)) return;
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = 0.82;   // chậm hơn bình thường một chút, dễ nghe cho người mới học
      u.pitch = 1.05;  // giọng tươi, tự nhiên hơn, gần với phong cách Duolingo
      const v = cachedVoice || pickVoice();
      if(v) u.voice = v;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }catch(e){}
  }

  // ---------- bảng từ vựng ----------
  const searchInput = document.getElementById("vocabSearch");
  const tableFilter = document.getElementById("tableFilterSelect");
  const tbody = document.getElementById("vocabTableBody");

  function renderTable(){
    const q = searchInput.value.trim().toLowerCase();
    const filterVal = tableFilter.value;

    let rows = ALL_WORDS.filter(function(w){
      const matchesSearch = !q || w.word.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q);
      const matchesFilter =
        filterVal === "all" ? true :
        filterVal === "learned" ? isLearned(w.word) :
        !isLearned(w.word);
      return matchesSearch && matchesFilter;
    });

    tbody.innerHTML = "";

    if(rows.length === 0){
      const tr = document.createElement("tr");
      tr.className = "empty-row";
      tr.innerHTML = '<td colspan="5">Không tìm thấy từ vựng phù hợp</td>';
      tbody.appendChild(tr);
      return;
    }

    rows.forEach(function(w){
      const tr = document.createElement("tr");

      const tdWord = document.createElement("td");
      tdWord.innerHTML =
        '<div class="word-cell">' +
          '<button class="speak-btn" type="button" aria-label="Phát âm ' + w.word + '">🔊</button>' +
          '<div><div class="word-main">' + w.word + '</div><div class="word-ipa">' + w.ipa + '</div></div>' +
        '</div>';
      tdWord.querySelector(".speak-btn").addEventListener("click", function(){ speak(w.word); });

      const tdMeaning = document.createElement("td");
      tdMeaning.textContent = w.meaning;

      const tdType = document.createElement("td");
      tdType.innerHTML = '<span class="type-tag">' + w.type + '</span>';

      const tdExample = document.createElement("td");
      tdExample.innerHTML = '<div class="example-en">' + w.example + '</div><div class="example-vi">' + w.exampleVi + '</div>';

      const tdToggle = document.createElement("td");
      const checked = isLearned(w.word) ? "checked" : "";
      tdToggle.innerHTML =
        '<label class="toggle-switch">' +
          '<input type="checkbox" ' + checked + '>' +
          '<span class="toggle-slider"></span>' +
        '</label>';
      tdToggle.querySelector("input").addEventListener("change", function(e){
        setLearned(w.word, e.target.checked);
        updateSelectedBadge();
      });

      tr.appendChild(tdWord);
      tr.appendChild(tdMeaning);
      tr.appendChild(tdType);
      tr.appendChild(tdExample);
      tr.appendChild(tdToggle);
      tbody.appendChild(tr);
    });
  }

  searchInput.addEventListener("input", renderTable);
  tableFilter.addEventListener("change", renderTable);

  // ---------- nhãn loại từ tiếng Việt ----------
  const TYPE_VI = {
    "Noun": "Danh từ", "Verb": "Động từ", "Adjective": "Tính từ", "Adverb": "Trạng từ",
    "Preposition": "Giới từ", "Conjunction": "Liên từ", "Pronoun": "Đại từ",
    "Phrasal verb": "Cụm động từ", "Determiner": "Từ hạn định", "Interjection": "Thán từ"
  };
  function typeVi(t){ return TYPE_VI[t] || t; }

  // ---------- xu (coin) ----------
  const COIN_KEY = "chuchieng:coins";
  function getCoins(){
    try{ return parseInt(localStorage.getItem(COIN_KEY), 10) || 0; }catch(e){ return 0; }
  }
  function addCoins(n){
    const total = getCoins() + n;
    try{ localStorage.setItem(COIN_KEY, String(total)); }catch(e){}
    return total;
  }

  // ---------- chế độ học: Flashcard ----------
  const overlay = document.getElementById("fcOverlay");
  const fcCard = document.getElementById("fcCard");
  const fcProgressNum = document.getElementById("fcProgressNum");
  const fcFill = document.getElementById("fcFill");
  const fcCoin = document.getElementById("fcCoin");
  const fcDone = document.getElementById("fcDone");
  const fcDoneText = document.getElementById("fcDoneText");
  const fcBody = document.getElementById("fcBody");
  const fcDirectionToggle = document.getElementById("fcDirectionToggle");
  const fcPrevBtn = document.getElementById("fcPrev");
  const fcNextBtn = document.getElementById("fcNext");

  let session = [];
  let sessionIndex = 0;
  let flipped = false;

  function startFlashcards(){
    session = getWorkingSet();
    if(session.length === 0){
      // không có từ phù hợp bộ lọc — quay lại trang Unit và báo cho người dùng
      sessionStorage.setItem("chuchieng:fc:empty", "1");
      window.location.href = EXIT_URL;
      return;
    }
    sessionIndex = 0;
    flipped = false;
    fcBody.style.display = "";
    fcDone.style.display = "none";
    fcCoin.textContent = getCoins();
    document.addEventListener("keydown", onFcKeydown);
    renderCard();
  }

  function closeFlashcards(e){
    if(e) e.preventDefault();
    window.location.href = EXIT_URL;
  }

  function renderCard(){
    const w = session[sessionIndex];
    fcProgressNum.textContent = (sessionIndex + 1) + " / " + session.length;
    fcFill.style.width = Math.round((sessionIndex / session.length) * 100) + "%";
    fcPrevBtn.disabled = sessionIndex === 0;
    flipped = false;
    renderCardFace(w);
  }

  // showWordFirst: true = mặt trước hiện Từ, mặt sau hiện Nghĩa (mặc định)
  //                false = đảo ngược (khi bật toggle "Từ → Nghĩa")
  function frontIsWord(){ return !fcDirectionToggle.checked; }

  function renderCardFace(w){
    const wordFirst = frontIsWord();
    const showingWord = flipped ? !wordFirst : wordFirst;

    if(showingWord){
      fcCard.className = "fc-card";
      fcCard.innerHTML =
        '<span class="fc-type-pill">' + typeVi(w.type).toUpperCase() + '</span>' +
        '<div class="fc-word-big">' + w.word + '</div>' +
        '<div class="fc-ipa-big">' + w.ipa + '</div>' +
        '<button class="fc-card-speak" id="fcCardSpeak" type="button" aria-label="Phát âm">🔊</button>' +
        '<div class="fc-hint-bottom">Nhấn Space hoặc click để lật</div>';
    }else{
      fcCard.className = "fc-card back";
      fcCard.innerHTML =
        '<div class="fc-answer-label">ĐÁP ÁN ĐẦY ĐỦ</div>' +
        '<div class="fc-meaning-box">' + w.meaning + '</div>' +
        '<div class="fc-example-box">' +
          '<button class="example-speak" id="fcExampleSpeak" type="button" aria-label="Nghe ví dụ">🔊</button>' +
          '<div><div>Ví dụ: ' + w.example + '</div><div class="fc-example-vi">' + w.exampleVi + '</div></div>' +
        '</div>' +
        '<div class="fc-hint-bottom">Nhấn Space hoặc click để lật lại</div>';

      const exSpeakBtn = document.getElementById("fcExampleSpeak");
      if(exSpeakBtn) exSpeakBtn.addEventListener("click", function(e){
        e.stopPropagation();
        speak(w.example);
      });
    }

    const cardSpeakBtn = document.getElementById("fcCardSpeak");
    if(cardSpeakBtn) cardSpeakBtn.addEventListener("click", function(e){
      e.stopPropagation();
      speak(w.word);
    });

    // tự động phát âm mỗi khi lật thẻ
    speak(w.word);
  }

  function flipCard(){
    flipped = !flipped;
    renderCardFace(session[sessionIndex]);
  }

  fcCard.addEventListener("click", flipCard);

  function goPrev(){
    if(sessionIndex > 0){
      sessionIndex--;
      renderCard();
    }
  }
  function goNext(){
    if(sessionIndex < session.length - 1){
      sessionIndex++;
      renderCard();
    }else{
      finishSession();
    }
  }

  fcPrevBtn.addEventListener("click", goPrev);
  fcNextBtn.addEventListener("click", goNext);

  fcDirectionToggle.addEventListener("change", function(){
    if(session.length) renderCard();
  });

  function markCard(known){
    const w = session[sessionIndex];
    setLearned(w.word, known);
    renderTable();
    updateSelectedBadge();
    if(known){
      fcCoin.textContent = addCoins(1);
    }
  }

  document.getElementById("fcForget").addEventListener("click", function(){ markCard(false); });
  document.getElementById("fcKnown").addEventListener("click", function(){ markCard(true); });

  document.getElementById("fcSpeak").addEventListener("click", function(){
    speak(session[sessionIndex].word);
  });

  document.getElementById("fcRestart").addEventListener("click", function(){
    sessionIndex = 0;
    flipped = false;
    renderCard();
  });

  function onFcKeydown(e){
    if(e.code === "Space"){ e.preventDefault(); flipCard(); }
    else if(e.code === "ArrowLeft"){ goPrev(); }
    else if(e.code === "ArrowRight"){ goNext(); }
    else if(e.key === "s" || e.key === "S"){ speak(session[sessionIndex].word); }
    else if(e.key === "1" || e.key === "x" || e.key === "X"){ markCard(false); }
    else if(e.key === "2" || e.key === "c" || e.key === "C"){ markCard(true); }
  }

  function finishSession(){
    fcFill.style.width = "100%";
    fcBody.style.display = "none";
    fcDone.style.display = "block";
    const learnedCount = session.filter(function(w){ return isLearned(w.word); }).length;
    fcDoneText.textContent = "Bạn đã ôn " + session.length + " từ, thuộc " + learnedCount + " từ.";
  }

  document.getElementById("fcExit").href = EXIT_URL;
  document.getElementById("fcExit").addEventListener("click", closeFlashcards);
  document.getElementById("fcDoneClose").href = EXIT_URL;
  document.getElementById("fcDoneClose").addEventListener("click", closeFlashcards);

  // ---------- chế độ học: Quiz ----------
  const quizOverlay = document.getElementById("quizOverlay");
  const quizProgressNum = document.getElementById("quizProgressNum");
  const quizFill = document.getElementById("quizFill");
  const quizCoin = document.getElementById("quizCoin");
  const quizTimerText = document.getElementById("quizTimerText");
  const quizTimerFill = document.getElementById("quizTimerFill");
  const quizBody = document.getElementById("quizBody");
  const quizSentence = document.getElementById("quizSentence");
  const quizTypeTag = document.getElementById("quizTypeTag");
  const quizOptionsEl = document.getElementById("quizOptions");
  const quizDone = document.getElementById("quizDone");
  const quizDoneText = document.getElementById("quizDoneText");

  const QUIZ_TIME = 30;
  let quizQuestions = [];
  let quizIndex = 0;
  let quizCorrectCount = 0;
  let quizTimerInterval = null;
  let quizAnswered = false;

  function escapeRegExp(s){
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function blankExample(w){
    const re = new RegExp("\\b" + escapeRegExp(w.word) + "\\b", "i");
    if(re.test(w.example)){
      return w.example.replace(re, '<span class="blank">_____</span>');
    }
    const re2 = new RegExp(escapeRegExp(w.word), "i");
    return w.example.replace(re2, '<span class="blank">_____</span>');
  }

  function pickDistractors(target, count){
    const pool = ALL_WORDS.filter(function(w){ return w.word !== target.word; }).slice();
    for(let i = pool.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
    }
    return pool.slice(0, count);
  }

  function buildQuizQuestions(words){
    return words.map(function(w){
      const distractors = pickDistractors(w, 3);
      const options = distractors.concat([w]);
      for(let i = options.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = options[i]; options[i] = options[j]; options[j] = tmp;
      }
      return { target: w, options: options };
    });
  }

  function startQuiz(){
    const words = getWorkingSet();
    if(words.length === 0){
      sessionStorage.setItem("chuchieng:fc:empty", "1");
      window.location.href = EXIT_URL;
      return;
    }
    quizQuestions = buildQuizQuestions(words);
    quizIndex = 0;
    quizCorrectCount = 0;
    quizBody.style.display = "";
    quizDone.style.display = "none";
    quizCoin.textContent = getCoins();
    document.addEventListener("keydown", onQuizKeydown);
    renderQuizQuestion();
  }

  function closeQuiz(e){
    if(e) e.preventDefault();
    clearInterval(quizTimerInterval);
    window.location.href = EXIT_URL;
  }

  function renderQuizQuestion(){
    quizAnswered = false;
    const q = quizQuestions[quizIndex];
    quizProgressNum.textContent = "Câu " + (quizIndex + 1) + " / " + quizQuestions.length;
    quizFill.style.width = Math.round((quizIndex / quizQuestions.length) * 100) + "%";

    quizSentence.innerHTML = blankExample(q.target);
    document.getElementById("quizSentenceVi").textContent = q.target.exampleVi;
    quizTypeTag.textContent = typeVi(q.target.type);

    quizOptionsEl.innerHTML = "";
    q.options.forEach(function(opt, i){
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.type = "button";
      btn.innerHTML = '<span class="num">' + (i + 1) + '</span><span class="word">' + opt.word + '</span>';
      btn.addEventListener("click", function(){ answerQuiz(opt, btn); });
      quizOptionsEl.appendChild(btn);
    });

    startQuizTimer();
  }

  function startQuizTimer(){
    clearInterval(quizTimerInterval);
    let remaining = QUIZ_TIME;
    quizTimerText.textContent = remaining + "s";
    quizTimerFill.style.width = "100%";
    quizTimerFill.classList.remove("low");

    quizTimerInterval = setInterval(function(){
      remaining--;
      quizTimerText.textContent = Math.max(remaining, 0) + "s";
      quizTimerFill.style.width = Math.max((remaining / QUIZ_TIME) * 100, 0) + "%";
      if(remaining <= 8) quizTimerFill.classList.add("low");
      if(remaining <= 0){
        clearInterval(quizTimerInterval);
        if(!quizAnswered) answerQuiz(null, null);
      }
    }, 1000);
  }

  function answerQuiz(chosen, btnEl){
    if(quizAnswered) return;
    quizAnswered = true;
    clearInterval(quizTimerInterval);

    const q = quizQuestions[quizIndex];
    const isCorrect = chosen && chosen.word === q.target.word;

    setLearned(q.target.word, isCorrect);
    renderTable();
    updateSelectedBadge();

    Array.from(quizOptionsEl.children).forEach(function(el, i){
      el.disabled = true;
      const opt = q.options[i];
      if(opt.word === q.target.word) el.classList.add("correct");
      else if(el === btnEl) el.classList.add("wrong");
    });

    if(isCorrect){
      quizCorrectCount++;
      quizCoin.textContent = addCoins(1);
    }

    setTimeout(function(){
      if(quizIndex < quizQuestions.length - 1){
        quizIndex++;
        renderQuizQuestion();
      }else{
        finishQuiz();
      }
    }, 1100);
  }

  function onQuizKeydown(e){
    if(quizAnswered) return;
    if(["1","2","3","4"].includes(e.key)){
      const i = parseInt(e.key, 10) - 1;
      const btn = quizOptionsEl.children[i];
      if(btn) btn.click();
    }
  }

  function finishQuiz(){
    quizFill.style.width = "100%";
    quizBody.style.display = "none";
    quizDone.style.display = "block";
    quizDoneText.textContent = "Bạn trả lời đúng " + quizCorrectCount + "/" + quizQuestions.length + " câu.";
  }

  document.getElementById("quizRestart").addEventListener("click", function(){
    quizIndex = 0;
    quizCorrectCount = 0;
    renderQuizQuestion();
  });
  document.getElementById("quizExit").href = EXIT_URL;
  document.getElementById("quizExit").addEventListener("click", closeQuiz);
  document.getElementById("quizDoneClose").href = EXIT_URL;
  document.getElementById("quizDoneClose").addEventListener("click", closeQuiz);

  // ---------- chế độ học: Listening ----------
  const listenOverlay = document.getElementById("listenOverlay");
  const listenProgressNum = document.getElementById("listenProgressNum");
  const listenFill = document.getElementById("listenFill");
  const listenBody = document.getElementById("listenBody");
  const listenPlayCount = document.getElementById("listenPlayCount");
  const listenPlayBtn = document.getElementById("listenPlayBtn");
  const listenHintArea = document.getElementById("listenHintArea");
  const listenInput = document.getElementById("listenInput");
  const listenActions = document.getElementById("listenActions");
  const listenShowExample = document.getElementById("listenShowExample");
  const listenHintBtn = document.getElementById("listenHintBtn");
  const listenCheckBtn = document.getElementById("listenCheckBtn");
  const listenFeedback = document.getElementById("listenFeedback");
  const listenNextBtn = document.getElementById("listenNextBtn");
  const listenDone = document.getElementById("listenDone");
  const listenDoneText = document.getElementById("listenDoneText");
  const listenCoin = document.getElementById("listenCoin");

  const LISTEN_MAX_HINTS = 3;
  let listenSession = [];
  let listenIndex = 0;
  let listenCorrectCount = 0;
  let listenPlayCountNum = 0;
  let listenHintsUsed = 0;
  let listenExampleShown = false;
  let listenAnswered = false;

  function normalizeText(s){
    return s.toLowerCase().trim().replace(/[.,!?;:'"()]/g, "").replace(/\s+/g, " ");
  }

  function startListening(){
    listenSession = getWorkingSet();
    if(listenSession.length === 0){
      sessionStorage.setItem("chuchieng:fc:empty", "1");
      window.location.href = EXIT_URL;
      return;
    }
    listenIndex = 0;
    listenCorrectCount = 0;
    listenBody.style.display = "";
    listenDone.style.display = "none";
    listenCoin.textContent = getCoins();
    document.addEventListener("keydown", onListenKeydown);
    renderListenQuestion();
  }

  function closeListening(e){
    if(e) e.preventDefault();
    window.location.href = EXIT_URL;
  }

  function renderListenQuestion(){
    listenAnswered = false;
    listenPlayCountNum = 0;
    listenHintsUsed = 0;
    listenExampleShown = false;

    const w = listenSession[listenIndex];
    listenProgressNum.textContent = "Câu " + (listenIndex + 1) + " / " + listenSession.length;
    listenFill.style.width = Math.round((listenIndex / listenSession.length) * 100) + "%";

    listenHintArea.textContent = "Chưa có gợi ý";
    listenInput.value = "";
    listenInput.className = "listen-input";
    listenInput.disabled = false;
    listenActions.style.display = "";
    listenHintBtn.textContent = "🎯 Gợi ý (" + LISTEN_MAX_HINTS + ")";
    listenHintBtn.disabled = false;
    listenShowExample.disabled = false;
    listenFeedback.style.display = "none";
    listenNextBtn.style.display = "none";

    playListenAudio();
    listenInput.focus();
  }

  function playListenAudio(){
    const w = listenSession[listenIndex];
    speakSentence(w.example);
    listenPlayCountNum++;
    listenPlayCount.textContent = "Nghe: " + listenPlayCountNum + "x | Ctrl+X";
  }

  listenPlayBtn.addEventListener("click", playListenAudio);

  listenShowExample.addEventListener("click", function(){
    if(listenExampleShown) return;
    listenExampleShown = true;
    const w = listenSession[listenIndex];
    listenHintArea.innerHTML = w.exampleVi;
    listenShowExample.disabled = true;
  });

  listenHintBtn.addEventListener("click", function(){
    if(listenHintsUsed >= LISTEN_MAX_HINTS) return;
    listenHintsUsed++;
    const w = listenSession[listenIndex];
    const words = w.example.split(" ");
    const revealCount = Math.min(listenHintsUsed, words.length);
    const revealed = words.slice(0, revealCount).join(" ");
    const remaining = words.length - revealCount;
    listenHintArea.textContent = revealed + (remaining > 0 ? " " + "_____ ".repeat(remaining).trim() : "");
    const left = LISTEN_MAX_HINTS - listenHintsUsed;
    listenHintBtn.textContent = "🎯 Gợi ý (" + left + ")";
    if(left <= 0) listenHintBtn.disabled = true;
  });

  function checkListenAnswer(){
    if(listenAnswered) return;
    if(!listenInput.value.trim()) return;
    listenAnswered = true;

    const w = listenSession[listenIndex];
    const isCorrect = normalizeText(listenInput.value) === normalizeText(w.example);

    setLearned(w.word, isCorrect);
    renderTable();
    updateSelectedBadge();

    listenInput.disabled = true;
    listenActions.style.display = "none";
    listenFeedback.style.display = "block";

    if(isCorrect){
      listenCorrectCount++;
      listenInput.className = "listen-input correct";
      listenFeedback.className = "listen-feedback correct";
      listenFeedback.textContent = "✅ Chính xác!";
      listenCoinBump();
    }else{
      listenInput.className = "listen-input wrong";
      listenFeedback.className = "listen-feedback wrong";
      listenFeedback.innerHTML = "❌ Chưa đúng<span class=\"correct-answer\">Đáp án: " + w.example + "</span>";
    }

    listenNextBtn.style.display = "inline-block";
  }

  function listenCoinBump(){
    listenCoin.textContent = addCoins(1);
  }

  listenCheckBtn.addEventListener("click", checkListenAnswer);
  listenInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      e.preventDefault();
      if(!listenAnswered) checkListenAnswer();
      else goNextListen();
    }
  });

  function goNextListen(){
    if(listenIndex < listenSession.length - 1){
      listenIndex++;
      renderListenQuestion();
    }else{
      finishListening();
    }
  }
  listenNextBtn.addEventListener("click", goNextListen);

  function onListenKeydown(e){
    if(e.ctrlKey && (e.key === "x" || e.key === "X")){
      e.preventDefault();
      playListenAudio();
    }else if(e.ctrlKey && (e.key === "e" || e.key === "E")){
      e.preventDefault();
      listenShowExample.click();
    }else if(e.ctrlKey && e.code === "Space"){
      e.preventDefault();
      listenHintBtn.click();
    }
  }

  function finishListening(){
    listenFill.style.width = "100%";
    listenBody.style.display = "none";
    listenDone.style.display = "block";
    listenDoneText.textContent = "Bạn đã nghe đúng " + listenCorrectCount + "/" + listenSession.length + " câu.";
  }

  document.getElementById("listenRestart").addEventListener("click", function(){
    listenIndex = 0;
    listenCorrectCount = 0;
    renderListenQuestion();
  });
  document.getElementById("listenExit").href = EXIT_URL;
  document.getElementById("listenExit").addEventListener("click", closeListening);
  document.getElementById("listenDoneClose").href = EXIT_URL;
  document.getElementById("listenDoneClose").addEventListener("click", closeListening);

  // ---------- chế độ học: Gõ từ (Type) ----------
  const typeOverlay = document.getElementById("typeOverlay");
  const typeProgressNum = document.getElementById("typeProgressNum");
  const typeFill = document.getElementById("typeFill");
  const typeCoin = document.getElementById("typeCoin");
  const typeTimerText = document.getElementById("typeTimerText");
  const typeTimerFill = document.getElementById("typeTimerFill");
  const typeBody = document.getElementById("typeBody");
  const typeMeaning = document.getElementById("typeMeaning");
  const typeTypeTag = document.getElementById("typeTypeTag");
  const typeHintArea = document.getElementById("typeHintArea");
  const typeInput = document.getElementById("typeInput");
  const typeActions = document.getElementById("typeActions");
  const typeShowExample = document.getElementById("typeShowExample");
  const typeHintBtn = document.getElementById("typeHintBtn");
  const typeCheckBtn = document.getElementById("typeCheckBtn");
  const typeFeedback = document.getElementById("typeFeedback");
  const typeDone = document.getElementById("typeDone");
  const typeDoneText = document.getElementById("typeDoneText");

  const TYPE_TIME = 30;
  const TYPE_MAX_HINTS = 3;
  let typeSession = [];
  let typeIndex = 0;
  let typeCorrectCount = 0;
  let typeTimerInterval = null;
  let typeAnswered = false;
  let typeHintsUsed = 0;
  let typeExampleShown = false;

  function startTypeMode(){
    typeSession = getWorkingSet();
    if(typeSession.length === 0){
      sessionStorage.setItem("chuchieng:fc:empty", "1");
      window.location.href = EXIT_URL;
      return;
    }
    typeIndex = 0;
    typeCorrectCount = 0;
    typeBody.style.display = "";
    typeDone.style.display = "none";
    typeCoin.textContent = getCoins();
    document.addEventListener("keydown", onTypeKeydown);
    renderTypeQuestion();
  }

  function closeTypeMode(e){
    if(e) e.preventDefault();
    clearInterval(typeTimerInterval);
    window.location.href = EXIT_URL;
  }

  function renderTypeQuestion(){
    typeAnswered = false;
    typeHintsUsed = 0;
    typeExampleShown = false;

    const w = typeSession[typeIndex];
    typeProgressNum.textContent = "Câu " + (typeIndex + 1) + " / " + typeSession.length;
    typeFill.style.width = Math.round((typeIndex / typeSession.length) * 100) + "%";

    typeMeaning.textContent = w.meaning;
    typeTypeTag.textContent = typeVi(w.type);
    typeHintArea.textContent = "Chưa có gợi ý";
    typeInput.value = "";
    typeInput.className = "listen-input";
    typeInput.disabled = false;
    typeActions.style.display = "";
    typeHintBtn.textContent = "🎯 Gợi ý (" + TYPE_MAX_HINTS + ")";
    typeHintBtn.disabled = false;
    typeShowExample.disabled = false;
    typeFeedback.style.display = "none";

    startTypeTimer();
    typeInput.focus();
  }

  function startTypeTimer(){
    clearInterval(typeTimerInterval);
    let remaining = TYPE_TIME;
    typeTimerText.textContent = remaining + "s";
    typeTimerFill.style.width = "100%";
    typeTimerFill.classList.remove("low");

    typeTimerInterval = setInterval(function(){
      remaining--;
      typeTimerText.textContent = Math.max(remaining, 0) + "s";
      typeTimerFill.style.width = Math.max((remaining / TYPE_TIME) * 100, 0) + "%";
      if(remaining <= 8) typeTimerFill.classList.add("low");
      if(remaining <= 0){
        clearInterval(typeTimerInterval);
        if(!typeAnswered) checkTypeAnswer();
      }
    }, 1000);
  }

  typeShowExample.addEventListener("click", function(){
    if(typeExampleShown) return;
    typeExampleShown = true;
    const w = typeSession[typeIndex];
    typeHintArea.innerHTML = blankExample(w);
    typeShowExample.disabled = true;
  });

  typeHintBtn.addEventListener("click", function(){
    if(typeHintsUsed >= TYPE_MAX_HINTS) return;
    typeHintsUsed++;
    const w = typeSession[typeIndex];
    const letters = w.word.split("");
    const revealCount = Math.min(typeHintsUsed, letters.length - 1);
    const revealed = letters.map(function(ch, i){ return i < revealCount ? ch : "_"; }).join(" ");
    typeHintArea.textContent = revealed;
    const left = TYPE_MAX_HINTS - typeHintsUsed;
    typeHintBtn.textContent = "🎯 Gợi ý (" + left + ")";
    if(left <= 0) typeHintBtn.disabled = true;
  });

  function checkTypeAnswer(){
    if(typeAnswered) return;
    typeAnswered = true;
    clearInterval(typeTimerInterval);

    const w = typeSession[typeIndex];
    const isCorrect = normalizeText(typeInput.value) === normalizeText(w.word);

    setLearned(w.word, isCorrect);
    renderTable();
    updateSelectedBadge();

    typeInput.disabled = true;
    typeActions.style.display = "none";
    typeFeedback.style.display = "block";

    if(isCorrect){
      typeCorrectCount++;
      typeInput.className = "listen-input correct";
      typeFeedback.className = "listen-feedback correct";
      typeFeedback.textContent = "✅ Chính xác!";
      typeCoin.textContent = addCoins(1);
    }else{
      typeInput.className = "listen-input wrong";
      typeFeedback.className = "listen-feedback wrong";
      typeFeedback.innerHTML = "❌ Chưa đúng<span class=\"correct-answer\">Đáp án: " + w.word + "</span>";
    }

    setTimeout(function(){
      if(typeIndex < typeSession.length - 1){
        typeIndex++;
        renderTypeQuestion();
      }else{
        finishTypeMode();
      }
    }, 1300);
  }

  typeCheckBtn.addEventListener("click", checkTypeAnswer);
  typeInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      e.preventDefault();
      checkTypeAnswer();
    }
  });

  function onTypeKeydown(e){
    if(e.ctrlKey && (e.key === "e" || e.key === "E")){
      e.preventDefault();
      typeShowExample.click();
    }else if(e.ctrlKey && e.code === "Space"){
      e.preventDefault();
      typeHintBtn.click();
    }
  }

  function finishTypeMode(){
    typeFill.style.width = "100%";
    typeBody.style.display = "none";
    typeDone.style.display = "block";
    typeDoneText.textContent = "Bạn đã gõ đúng " + typeCorrectCount + "/" + typeSession.length + " từ.";
  }

  document.getElementById("typeRestart").addEventListener("click", function(){
    typeIndex = 0;
    typeCorrectCount = 0;
    renderTypeQuestion();
  });
  document.getElementById("typeExit").href = EXIT_URL;
  document.getElementById("typeExit").addEventListener("click", closeTypeMode);
  document.getElementById("typeDoneClose").href = EXIT_URL;
  document.getElementById("typeDoneClose").addEventListener("click", closeTypeMode);

  // ---------- các chế độ khác: sắp ra mắt ----------
  function showToast(msg){
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function(){ toast.classList.remove("show"); }, 2200);
  }

  function buildModeUrl(mode){
    const p = new URLSearchParams();
    p.set("unit", unit.id);
    p.set("mode", mode);
    p.set("status", statusSelect.value);
    p.set("qty", quantitySelect.value);
    p.set("order", orderSelect.value);
    return "unit.html?" + p.toString();
  }

  document.querySelectorAll(".mode-card").forEach(function(card){
    card.addEventListener("click", function(){
      const mode = card.dataset.mode;
      if(mode === "flashcard" || mode === "quiz" || mode === "listening" || mode === "type"){
        if(getWorkingSet().length === 0){
          showToast("Không có từ nào phù hợp với bộ lọc hiện tại");
          return;
        }
        window.location.href = buildModeUrl(mode);
      }else{
        showToast("Chế độ này sẽ được cập nhật ở giai đoạn sau 🌿");
      }
    });
  });

  // ---------- khởi tạo ----------
  fillQuantityOptions();
  renderHero();
  renderTable();
  updateSelectedBadge();

  // ---------- chọn view: trang thường, flashcard hay quiz ----------
  const initialMode = params.get("mode");
  if(initialMode === "flashcard" || initialMode === "quiz" || initialMode === "listening" || initialMode === "type"){
    if(params.has("status")) statusSelect.value = params.get("status");
    if(params.has("qty")) quantitySelect.value = params.get("qty");
    if(params.has("order")) orderSelect.value = params.get("order");
    updateSelectedBadge();
    document.getElementById("normalView").style.display = "none";

    if(initialMode === "flashcard"){
      overlay.classList.remove("hidden");
      startFlashcards();
    }else if(initialMode === "quiz"){
      quizOverlay.classList.remove("hidden");
      startQuiz();
    }else if(initialMode === "listening"){
      listenOverlay.classList.remove("hidden");
      startListening();
    }else{
      typeOverlay.classList.remove("hidden");
      startTypeMode();
    }
  }else{
    if(sessionStorage.getItem("chuchieng:fc:empty")){
      sessionStorage.removeItem("chuchieng:fc:empty");
      showToast("Không có từ nào phù hợp với bộ lọc hiện tại");
    }
  }

})();
