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

  // ---------- các chế độ khác: sắp ra mắt ----------
  function showToast(msg){
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function(){ toast.classList.remove("show"); }, 2200);
  }

  function buildFlashcardUrl(){
    const p = new URLSearchParams();
    p.set("unit", unit.id);
    p.set("mode", "flashcard");
    p.set("status", statusSelect.value);
    p.set("qty", quantitySelect.value);
    p.set("order", orderSelect.value);
    return "unit.html?" + p.toString();
  }

  document.querySelectorAll(".mode-card").forEach(function(card){
    card.addEventListener("click", function(){
      const mode = card.dataset.mode;
      if(mode === "flashcard"){
        if(getWorkingSet().length === 0){
          showToast("Không có từ nào phù hợp với bộ lọc hiện tại");
          return;
        }
        window.location.href = buildFlashcardUrl();
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

  // ---------- chọn view: trang thường hay trang flashcard ----------
  const initialMode = params.get("mode");
  if(initialMode === "flashcard"){
    if(params.has("status")) statusSelect.value = params.get("status");
    if(params.has("qty")) quantitySelect.value = params.get("qty");
    if(params.has("order")) orderSelect.value = params.get("order");
    updateSelectedBadge();

    document.getElementById("normalView").style.display = "none";
    overlay.classList.remove("hidden");
    startFlashcards();
  }else{
    if(sessionStorage.getItem("chuchieng:fc:empty")){
      sessionStorage.removeItem("chuchieng:fc:empty");
      showToast("Không có từ nào phù hợp với bộ lọc hiện tại");
    }
  }

})();
