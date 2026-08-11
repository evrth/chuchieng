(function(){

  // ---------- lấy unit từ URL ?unit=id ----------
  const params = new URLSearchParams(window.location.search);
  const unitId = parseInt(params.get("unit"), 10) || 1;
  const unit = VOCAB_UNITS.find(function(u){ return u.id === unitId; }) || VOCAB_UNITS[0];
  const ALL_WORDS = unit.words; // nguồn dữ liệu gốc, không đổi thứ tự

  const STORAGE_KEY = "chuchieng:unit:" + unit.id + ":learned";

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
    quantitySelect.value = opts.length ? opts[opts.length - 1] : "all";
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

  // ---------- chế độ học: Flashcard ----------
  const overlay = document.getElementById("fcOverlay");
  const fcCard = document.getElementById("fcCard");
  const fcProgressText = document.getElementById("fcProgressText");
  const fcFill = document.getElementById("fcFill");
  const fcActions = document.getElementById("fcActions");
  const fcDone = document.getElementById("fcDone");
  const fcBody = document.getElementById("fcBody");

  let session = [];
  let sessionIndex = 0;
  let flipped = false;

  function startFlashcards(){
    session = getWorkingSet();
    if(session.length === 0){
      showToast("Không có từ nào phù hợp với bộ lọc hiện tại");
      return;
    }
    sessionIndex = 0;
    flipped = false;
    overlay.classList.remove("hidden");
    fcBody.style.display = "";
    fcDone.style.display = "none";
    renderCard();
  }

  function renderCard(){
    const w = session[sessionIndex];
    fcProgressText.textContent = (sessionIndex + 1) + "/" + session.length;
    fcFill.style.width = Math.round(((sessionIndex) / session.length) * 100) + "%";
    flipped = false;
    renderCardFace(w);
  }

  function renderCardFace(w){
    if(!flipped){
      fcCard.innerHTML =
        '<span class="fc-type">' + w.type + '</span>' +
        '<div class="fc-word">' + w.word + '</div>' +
        '<div class="fc-ipa">' + w.ipa + '</div>' +
        '<div class="fc-hint">Chạm để xem nghĩa</div>';
    }else{
      fcCard.innerHTML =
        '<div class="fc-meaning">' + w.meaning + '</div>' +
        '<div class="fc-example">' + w.example + '<br>' + w.exampleVi + '</div>' +
        '<div class="fc-hint">Chạm để xem lại từ</div>';
    }
  }

  fcCard.addEventListener("click", function(){
    flipped = !flipped;
    renderCardFace(session[sessionIndex]);
  });

  fcActions.addEventListener("click", function(e){
    const btn = e.target.closest(".fc-btn");
    if(!btn) return;
    const w = session[sessionIndex];
    setLearned(w.word, btn.classList.contains("yes"));
    renderTable();
    updateSelectedBadge();

    if(sessionIndex < session.length - 1){
      sessionIndex++;
      renderCard();
    }else{
      finishSession();
    }
  });

  function finishSession(){
    fcFill.style.width = "100%";
    fcBody.style.display = "none";
    fcDone.style.display = "block";
  }

  document.getElementById("fcClose").addEventListener("click", function(){
    overlay.classList.add("hidden");
  });
  document.getElementById("fcDoneClose").addEventListener("click", function(){
    overlay.classList.add("hidden");
  });

  // ---------- các chế độ khác: sắp ra mắt ----------
  function showToast(msg){
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function(){ toast.classList.remove("show"); }, 2200);
  }

  document.querySelectorAll(".mode-card").forEach(function(card){
    card.addEventListener("click", function(){
      const mode = card.dataset.mode;
      if(mode === "flashcard"){
        startFlashcards();
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

})();
