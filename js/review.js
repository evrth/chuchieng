(function(){

  const params = new URLSearchParams(window.location.search);
  const dateStr = params.get("date") || (window.ChuchiSRS ? ChuchiSRS.todayStr() : "");

  function formatDateVi(dStr){
    const parts = dStr.split("-");
    if(parts.length !== 3) return dStr;
    return "ngày " + parts[2] + "/" + parts[1] + "/" + parts[0];
  }

  document.getElementById("reviewTitle").textContent = "Ôn tập " + formatDateVi(dateStr);

  if(!window.ChuchiSRS){
    document.getElementById("reviewEmpty").style.display = "block";
    document.getElementById("reviewSub").textContent = "Không tải được dữ liệu ôn tập.";
    return;
  }

  const items = ChuchiSRS.dueItemsForDate(dateStr);
  document.getElementById("reviewSub").textContent = items.length + " mục cần ôn.";

  if(items.length === 0){
    document.getElementById("reviewEmpty").style.display = "block";
    return;
  }

  // gộp Flashcard theo Unit — chỉ cần tên bài, không cần liệt kê từng từ
  const flashcardGroups = {}; // unitId -> { unitTitle, count }
  const otherItems = [];

  items.forEach(function(it){
    if(it.mode === "flashcard"){
      if(!flashcardGroups[it.unitId]){
        flashcardGroups[it.unitId] = { unitId: it.unitId, unitTitle: it.unitTitle, count: 0 };
      }
      flashcardGroups[it.unitId].count++;
    }else{
      otherItems.push(it);
    }
  });

  const flashcardList = document.getElementById("reviewFlashcardList");
  const flashcardGroupsArr = Object.keys(flashcardGroups).map(function(k){ return flashcardGroups[k]; });
  if(flashcardGroupsArr.length){
    document.getElementById("reviewFlashcardSection").style.display = "";
    flashcardGroupsArr.forEach(function(g){
      const el = document.createElement("div");
      el.className = "review-item-card";
      el.innerHTML =
        '<div class="review-item-icon">📇</div>' +
        '<div class="review-item-body">' +
          '<div class="review-item-title">Unit ' + g.unitId + ': ' + g.unitTitle + '</div>' +
          '<div class="review-item-meta">' + g.count + ' từ cần ôn · Flashcard</div>' +
        '</div>' +
        '<a class="review-item-link" href="unit.html?unit=' + g.unitId + '&mode=flashcard&status=all&qty=all&order=random">Ôn ngay →</a>';
      flashcardList.appendChild(el);
    });
  }

  const otherList = document.getElementById("reviewOtherList");
  if(otherItems.length){
    document.getElementById("reviewOtherSection").style.display = "";
    otherItems.forEach(function(it){
      const el = document.createElement("div");
      el.className = "review-item-card";
      el.innerHTML =
        '<div class="review-item-icon">✍️</div>' +
        '<div class="review-item-body">' +
          '<div class="review-item-title">' + it.word + '</div>' +
          '<div class="review-item-meta">Unit ' + it.unitId + ': ' + it.unitTitle + ' · ' + it.modeLabel + '</div>' +
        '</div>' +
        '<a class="review-item-link" href="unit.html?unit=' + it.unitId + '&mode=' + it.mode + '&status=all&qty=all&order=random">Ôn ngay →</a>';
      otherList.appendChild(el);
    });
  }

})();
