(function(){

  // Dữ liệu 60 Unit lấy từ js/vocab-data.js (biến VOCAB_UNITS)
  const UNITS = VOCAB_UNITS.map(function(u){
    return { id: u.id, title: u.title, wordCount: u.words.length };
  });

  const STORAGE_PREFIX = "chuchieng:unit:";

  function learnedCountForUnit(unit){
    try{
      const raw = localStorage.getItem(STORAGE_PREFIX + unit.id + ":learned");
      if(!raw) return 0;
      const data = JSON.parse(raw);
      return Object.keys(data).filter(function(w){ return data[w]; }).length;
    }catch(e){
      return 0;
    }
  }

  function renderHeader(){
    const totalWords = UNITS.reduce(function(sum,u){ return sum + u.wordCount; }, 0);
    const learnedWords = UNITS.reduce(function(sum,u){ return sum + learnedCountForUnit(u); }, 0);
    const percent = totalWords > 0 ? Math.round((learnedWords / totalWords) * 100) : 0;

    document.getElementById("courseWordsBadge").textContent = totalWords > 0
      ? totalWords + " từ vựng"
      : "Đang cập nhật từ vựng";

    document.getElementById("coursePercentBadge").textContent = percent + "% hoàn thành";

    document.getElementById("courseProgressLabel").textContent = totalWords > 0
      ? "Tiến độ: " + learnedWords + "/" + totalWords + " từ"
      : "Tiến độ: sẽ hiển thị khi có danh sách từ vựng";

    document.getElementById("courseProgressFill").style.width = percent + "%";
  }

  function renderUnits(){
    const grid = document.getElementById("unitsGrid");
    grid.innerHTML = "";

    UNITS.forEach(function(unit){
      const hasWords = unit.wordCount > 0;
      const learned = hasWords ? learnedCountForUnit(unit) : 0;
      const percent = hasWords ? Math.round((learned / unit.wordCount) * 100) : 0;

      const card = document.createElement(hasWords ? "a" : "div");
      card.className = "unit-card";
      if(hasWords) card.href = "unit.html?unit=" + unit.id;

      const middle = hasWords
        ? '<div class="unit-words-row"><span>' + learned + '/' + unit.wordCount + ' từ</span><span>' + percent + '%</span></div>' +
          '<div class="unit-track"><div class="unit-fill" style="width:' + percent + '%"></div></div>'
        : '<div class="unit-pending">🕊️ Sẽ cập nhật từ vựng</div>';

      card.innerHTML =
        '<div class="unit-top">' +
          '<div class="unit-icon">📁</div>' +
          '<div class="unit-info">' +
            '<div class="unit-title">Unit ' + unit.id + '. ' + unit.title + '</div>' +
            '<div class="unit-index">#' + unit.id + '</div>' +
          '</div>' +
        '</div>' +
        middle +
        '<div class="unit-bottom">' +
          '<span></span>' +
          '<span class="unit-play" aria-hidden="true">▶</span>' +
        '</div>';

      grid.appendChild(card);
    });
  }

  renderHeader();
  renderUnits();

})();
