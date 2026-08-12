(function(){

  // ============================================
  // Spaced Repetition System (SRS) — dùng chung toàn site
  // Công thức khoảng cách: 1 → 3 → 5 → 7 → 14 → 30 → 60 ngày
  // Trả lời đúng: tiến lên nấc tiếp theo (xa hơn)
  // Trả lời sai: quay về nấc đầu tiên (1 ngày), rồi lặp lại chuỗi
  // ============================================
  const SRS_INTERVALS = [1, 3, 5, 7, 14, 30, 60];
  const MODES = ["flashcard", "quiz", "listening", "type", "match", "translate"];

  function todayStr(){
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10);
  }

  function addDaysStr(days){
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  }

  function srsKey(mode, unitId){
    return "chuchieng:srs:" + mode + ":" + unitId;
  }

  function srsLoad(mode, unitId){
    try{
      const raw = localStorage.getItem(srsKey(mode, unitId));
      return raw ? JSON.parse(raw) : {};
    }catch(e){ return {}; }
  }

  function srsSave(mode, unitId, data){
    try{ localStorage.setItem(srsKey(mode, unitId), JSON.stringify(data)); }catch(e){}
  }

  // Ghi lại kết quả 1 lần trả lời cho 1 từ, trong 1 chế độ học, thuộc 1 Unit
  function srsRecordResult(mode, unitId, word, isCorrect){
    const state = srsLoad(mode, unitId);
    const entry = state[word] || { intervalIndex: -1 };

    if(isCorrect){
      entry.intervalIndex = Math.min(entry.intervalIndex + 1, SRS_INTERVALS.length - 1);
    }else{
      entry.intervalIndex = 0;
    }

    const days = SRS_INTERVALS[Math.max(entry.intervalIndex, 0)];
    entry.nextReview = addDaysStr(days);
    entry.lastResult = isCorrect;
    entry.lastReviewed = todayStr();

    state[word] = entry;
    srsSave(mode, unitId, state);
    return entry;
  }

  // % số từ "đang thuộc" (lần gần nhất trả lời đúng) trong 1 chế độ, gộp mọi Unit đã có dữ liệu
  function srsModeProgress(){
    if(typeof VOCAB_UNITS === "undefined") return {};
    const result = {};
    MODES.forEach(function(mode){
      let learned = 0, total = 0;
      VOCAB_UNITS.forEach(function(u){
        if(!u.words.length) return;
        total += u.words.length;
        const state = srsLoad(mode, u.id);
        u.words.forEach(function(w){
          if(state[w.word] && state[w.word].lastResult === true) learned++;
        });
      });
      result[mode] = { learned: learned, total: total };
    });
    return result;
  }

  // trung bình cộng % tiến độ của tất cả các chế độ
  function srsOverallProgress(){
    const modeStats = srsModeProgress();
    const percents = MODES.map(function(mode){
      const s = modeStats[mode];
      return s.total > 0 ? (s.learned / s.total) * 100 : 0;
    });
    const avg = percents.reduce(function(a, b){ return a + b; }, 0) / MODES.length;
    return Math.round(avg);
  }

  // số từ đã "đã thuộc" ở ít nhất 1 chế độ (không trùng lặp)
  function srsUniqueLearnedCount(){
    if(typeof VOCAB_UNITS === "undefined") return 0;
    let count = 0;
    VOCAB_UNITS.forEach(function(u){
      if(!u.words.length) return;
      u.words.forEach(function(w){
        const learnedSomewhere = MODES.some(function(mode){
          const state = srsLoad(mode, u.id);
          return state[w.word] && state[w.word].lastResult === true;
        });
        if(learnedSomewhere) count++;
      });
    });
    return count;
  }

  // map "YYYY-MM-DD" -> số từ cần ôn vào ngày đó (gộp mọi chế độ + mọi Unit)
  function srsDueCountByDate(){
    const map = {};
    if(typeof VOCAB_UNITS === "undefined") return map;
    VOCAB_UNITS.forEach(function(u){
      if(!u.words.length) return;
      MODES.forEach(function(mode){
        const state = srsLoad(mode, u.id);
        Object.keys(state).forEach(function(word){
          const entry = state[word];
          if(!entry.nextReview) return;
          map[entry.nextReview] = (map[entry.nextReview] || 0) + 1;
        });
      });
    });
    return map;
  }

  const MODE_LABEL_VI = {
    flashcard: "Flashcard",
    quiz: "Quiz",
    listening: "Listening",
    type: "Gõ từ",
    match: "Ghép cặp",
    translate: "Dịch câu"
  };

  // danh sách từ cần ôn vào 1 ngày cụ thể (gộp mọi chế độ + mọi Unit), kèm tên Unit / chế độ
  function srsDueItemsForDate(dateStr){
    const items = [];
    if(typeof VOCAB_UNITS === "undefined") return items;
    VOCAB_UNITS.forEach(function(u){
      if(!u.words.length) return;
      MODES.forEach(function(mode){
        const state = srsLoad(mode, u.id);
        Object.keys(state).forEach(function(word){
          const entry = state[word];
          if(entry.nextReview === dateStr){
            items.push({
              word: word,
              unitId: u.id,
              unitTitle: u.title,
              mode: mode,
              modeLabel: MODE_LABEL_VI[mode] || mode
            });
          }
        });
      });
    });
    return items;
  }

  window.ChuchiSRS = {
    INTERVALS: SRS_INTERVALS,
    MODES: MODES,
    MODE_LABEL_VI: MODE_LABEL_VI,
    todayStr: todayStr,
    recordResult: srsRecordResult,
    modeProgress: srsModeProgress,
    overallProgress: srsOverallProgress,
    uniqueLearnedCount: srsUniqueLearnedCount,
    dueCountByDate: srsDueCountByDate,
    dueItemsForDate: srsDueItemsForDate
  };

})();
