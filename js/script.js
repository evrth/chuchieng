(function(){
  const dowLabels = ['T2','T3','T4','T5','T6','T7','CN'];
  const monthNames = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];

  const today = new Date();
  let viewYear = today.getFullYear();
  let viewMonth = today.getMonth(); // 0-indexed

  const grid = document.getElementById('calGrid');
  const label = document.getElementById('calMonthLabel');
  const calFoot = document.getElementById('calFoot');

  function isoMondayIndex(jsDay){
    // JS: Sun=0..Sat=6  ->  Mon=0..Sun=6
    return (jsDay + 6) % 7;
  }

  function dateToStr(y, m, d){
    const mm = String(m + 1).padStart(2, '0');
    const dd = String(d).padStart(2, '0');
    return y + '-' + mm + '-' + dd;
  }

  function render(){
    grid.innerHTML = '';
    label.textContent = monthNames[viewMonth] + ' ' + viewYear;

    const dueMap = (window.ChuchiSRS ? ChuchiSRS.dueCountByDate() : {});

    dowLabels.forEach(function(d){
      const el = document.createElement('div');
      el.className = 'cal-dow';
      el.textContent = d;
      grid.appendChild(el);
    });

    const firstOfMonth = new Date(viewYear, viewMonth, 1);
    const startOffset = isoMondayIndex(firstOfMonth.getDay());
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    const totalCells = Math.ceil((startOffset + daysInMonth) / 7) * 7;

    for(let i = 0; i < totalCells; i++){
      const dayNum = i - startOffset + 1;
      const cell = document.createElement('button');
      cell.className = 'cal-day';
      cell.type = 'button';

      let cellDate, muted = false;
      if(dayNum < 1){
        cellDate = daysInPrevMonth + dayNum;
        muted = true;
      } else if(dayNum > daysInMonth){
        cellDate = dayNum - daysInMonth;
        muted = true;
      } else {
        cellDate = dayNum;
      }

      cell.textContent = cellDate;
      if(muted){
        cell.classList.add('muted');
      } else {
        const isToday = (viewYear === today.getFullYear() && viewMonth === today.getMonth() && cellDate === today.getDate());
        if(isToday) cell.classList.add('today');

        const dStr = dateToStr(viewYear, viewMonth, cellDate);
        if(dueMap[dStr]){
          const dot = document.createElement('span');
          dot.className = 'cal-due-dot';
          cell.appendChild(dot);
        }

        cell.addEventListener('click', function(){
          window.location.href = 'review.html?date=' + dStr;
        });
      }
      grid.appendChild(cell);
    }
  }

  document.getElementById('prevMonth').addEventListener('click', function(){
    viewMonth--;
    if(viewMonth < 0){ viewMonth = 11; viewYear--; }
    render();
  });
  document.getElementById('nextMonth').addEventListener('click', function(){
    viewMonth++;
    if(viewMonth > 11){ viewMonth = 0; viewYear++; }
    render();
  });

  render();

  // ---------- số liệu trang chủ ----------
  function renderStats(){
    if(!window.ChuchiSRS || typeof VOCAB_UNITS === 'undefined') return;

    const totalWords = VOCAB_UNITS.reduce(function(sum, u){ return sum + u.words.length; }, 0);
    const learned = ChuchiSRS.uniqueLearnedCount();
    const progress = ChuchiSRS.overallProgress();
    const dueMap = ChuchiSRS.dueCountByDate();
    const todayStr = ChuchiSRS.todayStr();

    // "Cần ôn tập" = số từ đến hạn hôm nay hoặc đã quá hạn (chưa ôn)
    let dueCount = 0;
    Object.keys(dueMap).forEach(function(dateStr){
      if(dateStr <= todayStr) dueCount += dueMap[dateStr];
    });

    document.getElementById('statTotalWords').textContent = totalWords;
    document.getElementById('statLearned').textContent = learned;
    document.getElementById('statProgress').textContent = progress + '%';
    document.getElementById('statDueToday').textContent = dueCount;
  }
  renderStats();
})();
