const VOCAB_UNITS = [
  {
    "id": 1,
    "title": "The family",
    "words": [
      {
        "type": "Noun",
        "word": "relative",
        "ipa": "/ˈrelətɪv/",
        "meaning": "người thân, họ hàng",
        "example": "I have many relatives in Hanoi.",
        "exampleVi": "Tôi có nhiều người thân ở Hà Nội."
      },
      {
        "type": "Noun",
        "word": "relation",
        "ipa": "/rɪˈleɪʃn/",
        "meaning": "mối quan hệ; người họ hàng",
        "example": "She is a close relation of mine.",
        "exampleVi": "Cô ấy là một người họ hàng thân thiết của tôi."
      },
      {
        "type": "Noun",
        "word": "children",
        "ipa": "/ˈtʃɪldrən/",
        "meaning": "trẻ em; các con",
        "example": "They have three children.",
        "exampleVi": "Họ có ba người con."
      },
      {
        "type": "Noun",
        "word": "husband",
        "ipa": "/ˈhʌzbənd/",
        "meaning": "chồng",
        "example": "Her husband is a doctor.",
        "exampleVi": "Chồng cô ấy là bác sĩ."
      },
      {
        "type": "Noun",
        "word": "father",
        "ipa": "/ˈfɑːðər/",
        "meaning": "bố, cha",
        "example": "My father works in a bank.",
        "exampleVi": "Bố tôi làm việc ở một ngân hàng."
      },
      {
        "type": "Noun",
        "word": "wife",
        "ipa": "/waɪf/",
        "meaning": "vợ",
        "example": "His wife is very friendly.",
        "exampleVi": "Vợ anh ấy rất thân thiện."
      },
      {
        "type": "Noun",
        "word": "mother",
        "ipa": "/ˈmʌðər/",
        "meaning": "mẹ",
        "example": "My mother cooks dinner every day.",
        "exampleVi": "Mẹ tôi nấu bữa tối mỗi ngày."
      },
      {
        "type": "Noun",
        "word": "parent",
        "ipa": "/ˈperənt/",
        "meaning": "bố hoặc mẹ; phụ huynh",
        "example": "My parents live in the countryside.",
        "exampleVi": "Bố mẹ tôi sống ở nông thôn."
      },
      {
        "type": "Noun",
        "word": "daughter",
        "ipa": "/ˈdɔːtər/",
        "meaning": "con gái",
        "example": "Their daughter is five years old.",
        "exampleVi": "Con gái của họ năm tuổi."
      },
      {
        "type": "Noun",
        "word": "son",
        "ipa": "/sʌn/",
        "meaning": "con trai",
        "example": "Their son goes to school near my house.",
        "exampleVi": "Con trai của họ học ở trường gần nhà tôi."
      },
      {
        "type": "Noun",
        "word": "sister",
        "ipa": "/ˈsɪstər/",
        "meaning": "chị/em gái",
        "example": "My sister is a student.",
        "exampleVi": "Chị/em gái tôi là sinh viên."
      },
      {
        "type": "Noun",
        "word": "brother",
        "ipa": "/ˈbrʌðər/",
        "meaning": "anh/em trai",
        "example": "I have one older brother.",
        "exampleVi": "Tôi có một người anh trai."
      },
      {
        "type": "Noun",
        "word": "grandfather",
        "ipa": "/ˈɡrænˌfɑːðər/",
        "meaning": "ông",
        "example": "My grandfather is 75 years old.",
        "exampleVi": "Ông tôi 75 tuổi."
      },
      {
        "type": "Noun",
        "word": "grandmother",
        "ipa": "/ˈɡrænˌmʌðər/",
        "meaning": "bà",
        "example": "My grandmother makes great cakes.",
        "exampleVi": "Bà tôi làm bánh rất ngon."
      },
      {
        "type": "Noun",
        "word": "grandparent",
        "ipa": "/ˈɡrænˌperənt/",
        "meaning": "ông hoặc bà",
        "example": "I often visit my grandparents.",
        "exampleVi": "Tôi thường đến thăm ông bà."
      },
      {
        "type": "Noun",
        "word": "granddaughter",
        "ipa": "/ˈɡrænˌdɔːtər/",
        "meaning": "cháu gái",
        "example": "Their granddaughter is very cute.",
        "exampleVi": "Cháu gái của họ rất đáng yêu."
      },
      {
        "type": "Noun",
        "word": "grandson",
        "ipa": "/ˈɡrænˌsʌn/",
        "meaning": "cháu trai",
        "example": "His grandson loves playing football.",
        "exampleVi": "Cháu trai của ông ấy thích chơi bóng đá."
      },
      {
        "type": "Noun",
        "word": "uncle",
        "ipa": "/ˈʌŋkl/",
        "meaning": "chú, bác, cậu, dượng",
        "example": "My uncle lives in Canada.",
        "exampleVi": "Chú/bác/cậu của tôi sống ở Canada."
      },
      {
        "type": "Noun",
        "word": "aunt",
        "ipa": "/ænt/",
        "meaning": "cô, dì, bác gái, thím, mợ",
        "example": "My aunt visits us every Sunday.",
        "exampleVi": "Cô/dì của tôi đến thăm chúng tôi mỗi Chủ nhật."
      },
      {
        "type": "Noun",
        "word": "niece",
        "ipa": "/niːs/",
        "meaning": "cháu gái (con của anh/chị/em)",
        "example": "My niece is six years old.",
        "exampleVi": "Cháu gái tôi sáu tuổi."
      },
      {
        "type": "Noun",
        "word": "nephew",
        "ipa": "/ˈnefjuː/",
        "meaning": "cháu trai (con của anh/chị/em)",
        "example": "My nephew likes toy cars.",
        "exampleVi": "Cháu trai tôi thích ô tô đồ chơi."
      },
      {
        "type": "Noun",
        "word": "cousin",
        "ipa": "/ˈkʌzn/",
        "meaning": "anh/chị/em họ",
        "example": "I often play with my cousins.",
        "exampleVi": "Tôi thường chơi với các anh chị em họ."
      }
    ]
  },
  {
    "id": 2,
    "title": "Birth, marriage and death",
    "words": [
      {
        "type": "Noun",
        "word": "birth",
        "ipa": "/bɜːrθ/",
        "meaning": "sự sinh ra; sự ra đời; việc sinh nở",
        "example": "Her birth was in June.",
        "exampleVi": "Cô ấy sinh vào tháng Sáu."
      },
      {
        "type": "Verb phrase",
        "word": "have a baby",
        "ipa": "/hæv ə ˈbeɪbi/",
        "meaning": "sinh em bé; có con",
        "example": "They had a baby last year.",
        "exampleVi": "Họ đã sinh một em bé vào năm ngoái."
      },
      {
        "type": "Verb phrase",
        "word": "be born",
        "ipa": "/biː bɔːrn/",
        "meaning": "được sinh ra; chào đời",
        "example": "I was born in 2000.",
        "exampleVi": "Tôi sinh năm 2000."
      },
      {
        "type": "Verb",
        "word": "weigh",
        "ipa": "/weɪ/",
        "meaning": "cân nặng; có trọng lượng là",
        "example": "The baby weighed three kilos at birth.",
        "exampleVi": "Em bé nặng 3 kg khi chào đời."
      },
      {
        "type": "Phrase",
        "word": "call ... after",
        "ipa": "/kɔːl ... ˈæftər/",
        "meaning": "đặt tên theo tên của ai",
        "example": "They called the baby after his grandfather.",
        "exampleVi": "Họ đặt tên em bé theo tên ông của em."
      },
      {
        "type": "Noun",
        "word": "birthday",
        "ipa": "/ˈbɜːrθdeɪ/",
        "meaning": "sinh nhật",
        "example": "My birthday is in May.",
        "exampleVi": "Sinh nhật của tôi vào tháng Năm."
      },
      {
        "type": "Noun",
        "word": "marriage",
        "ipa": "/ˈmærɪdʒ/",
        "meaning": "hôn nhân; cuộc hôn nhân",
        "example": "Their marriage was very happy.",
        "exampleVi": "Cuộc hôn nhân của họ rất hạnh phúc."
      },
      {
        "type": "Adjective",
        "word": "single",
        "ipa": "/ˈsɪŋɡl/",
        "meaning": "độc thân",
        "example": "She is single.",
        "exampleVi": "Cô ấy độc thân."
      },
      {
        "type": "Adjective",
        "word": "married",
        "ipa": "/ˈmærid/",
        "meaning": "đã kết hôn",
        "example": "My sister is married.",
        "exampleVi": "Chị/em gái tôi đã kết hôn."
      },
      {
        "type": "Adjective",
        "word": "widowed",
        "ipa": "/ˈwɪdoʊd/",
        "meaning": "góa; mất vợ/chồng",
        "example": "She is widowed and lives alone.",
        "exampleVi": "Bà ấy góa chồng và sống một mình."
      },
      {
        "type": "Adjective",
        "word": "separated",
        "ipa": "/ˈsepəreɪtɪd/",
        "meaning": "ly thân",
        "example": "They are separated but still talk to each other.",
        "exampleVi": "Họ đã ly thân nhưng vẫn nói chuyện với nhau."
      },
      {
        "type": "Adjective",
        "word": "divorced",
        "ipa": "/dɪˈvɔːrst/",
        "meaning": "đã ly hôn",
        "example": "Her parents are divorced.",
        "exampleVi": "Bố mẹ cô ấy đã ly hôn."
      },
      {
        "type": "Verb phrase",
        "word": "get married to sb",
        "ipa": "/ɡet ˈmærid tuː/",
        "meaning": "kết hôn với ai",
        "example": "She got married to John last year.",
        "exampleVi": "Cô ấy kết hôn với John năm ngoái."
      },
      {
        "type": "Verb phrase",
        "word": "be married",
        "ipa": "",
        "meaning": "đang/đã kết hôn",
        "example": "They have been married for six years.",
        "exampleVi": "Họ đã kết hôn được sáu năm."
      },
      {
        "type": "Noun",
        "word": "honeymoon",
        "ipa": "/ˈhʌnimuːn/",
        "meaning": "tuần trăng mật",
        "example": "They went to Italy for their honeymoon.",
        "exampleVi": "Họ đến Ý để hưởng tuần trăng mật."
      },
      {
        "type": "Verb phrase",
        "word": "be married",
        "ipa": "/biː ˈmærid/",
        "meaning": "đã kết hôn; kết hôn được...",
        "example": "They were married for ten years.",
        "exampleVi": "Họ đã kết hôn được mười năm."
      },
      {
        "type": "Noun",
        "word": "groom",
        "ipa": "/ɡruːm/",
        "meaning": "chú rể",
        "example": "The groom is wearing a black suit.",
        "exampleVi": "Chú rể đang mặc một bộ vest đen."
      },
      {
        "type": "Noun",
        "word": "bride",
        "ipa": "/braɪd/",
        "meaning": "cô dâu",
        "example": "The bride looks very happy.",
        "exampleVi": "Cô dâu trông rất hạnh phúc."
      },
      {
        "type": "Noun",
        "word": "death",
        "ipa": "/deθ/",
        "meaning": "cái chết; sự qua đời",
        "example": "His death was very sad for the family.",
        "exampleVi": "Cái chết của ông ấy là một điều rất buồn đối với gia đình."
      },
      {
        "type": "Adjective",
        "word": "ill",
        "ipa": "/ɪl/",
        "meaning": "ốm; bệnh",
        "example": "His grandfather is very ill.",
        "exampleVi": "Ông của anh ấy bị bệnh nặng."
      },
      {
        "type": "Verb",
        "word": "die",
        "ipa": "/daɪ/",
        "meaning": "chết; qua đời",
        "example": "His dog died last year.",
        "exampleVi": "Con chó của anh ấy chết năm ngoái."
      },
      {
        "type": "Verb phrase",
        "word": "die of",
        "ipa": "/daɪ əv/",
        "meaning": "chết vì (một căn bệnh/nguyên nhân)",
        "example": "Many people die of heart disease.",
        "exampleVi": "Nhiều người chết vì bệnh tim."
      },
      {
        "type": "Adjective",
        "word": "dead",
        "ipa": "/ded/",
        "meaning": "đã chết; không còn sống",
        "example": "The bird is dead.",
        "exampleVi": "Con chim đã chết."
      },
      {
        "type": "Noun",
        "word": "funeral",
        "ipa": "/ˈfjuːnərəl/",
        "meaning": "đám tang; lễ tang",
        "example": "We went to his funeral yesterday.",
        "exampleVi": "Chúng tôi đã đến dự đám tang của ông ấy hôm qua."
      }
    ]
  },
  {
    "id": 3,
    "title": "Parts of the body",
    "words": [
      {
        "type": "Noun",
        "word": "head",
        "ipa": "/hed/",
        "meaning": "đầu",
        "example": "My head hurts today.",
        "exampleVi": "Hôm nay đầu tôi bị đau."
      },
      {
        "type": "Noun",
        "word": "face",
        "ipa": "/feɪs/",
        "meaning": "mặt, khuôn mặt",
        "example": "She has a beautiful face.",
        "exampleVi": "Cô ấy có một khuôn mặt đẹp."
      },
      {
        "type": "Noun",
        "word": "mouth",
        "ipa": "/maʊθ/",
        "meaning": "miệng",
        "example": "Open your mouth, please.",
        "exampleVi": "Hãy mở miệng ra."
      },
      {
        "type": "Noun",
        "word": "hair",
        "ipa": "/her/",
        "meaning": "tóc",
        "example": "Her hair is very long.",
        "exampleVi": "Tóc cô ấy rất dài."
      },
      {
        "type": "Noun",
        "word": "eye",
        "ipa": "/aɪ/",
        "meaning": "mắt",
        "example": "My left eye is red.",
        "exampleVi": "Mắt trái của tôi bị đỏ."
      },
      {
        "type": "Noun",
        "word": "nose",
        "ipa": "/noʊz/",
        "meaning": "mũi",
        "example": "His nose is very big.",
        "exampleVi": "Mũi của anh ấy rất to."
      },
      {
        "type": "Noun",
        "word": "tooth",
        "ipa": "/tuːθ/",
        "meaning": "răng",
        "example": "I have a bad tooth.",
        "exampleVi": "Tôi có một chiếc răng bị đau."
      },
      {
        "type": "Noun",
        "word": "teeth",
        "ipa": "/tiːθ/",
        "meaning": "răng (số nhiều của tooth)",
        "example": "Brush your teeth every morning.",
        "exampleVi": "Hãy đánh răng mỗi sáng."
      },
      {
        "type": "Noun",
        "word": "ear",
        "ipa": "/ɪr/",
        "meaning": "tai",
        "example": "My ear hurts.",
        "exampleVi": "Tai tôi bị đau."
      },
      {
        "type": "Noun",
        "word": "lip",
        "ipa": "/lɪp/",
        "meaning": "môi",
        "example": "Her lips are red.",
        "exampleVi": "Môi cô ấy màu đỏ."
      },
      {
        "type": "Noun",
        "word": "neck",
        "ipa": "/nek/",
        "meaning": "cổ",
        "example": "He has a long neck.",
        "exampleVi": "Anh ấy có một cái cổ dài."
      },
      {
        "type": "Noun",
        "word": "arm",
        "ipa": "/ɑːrm/",
        "meaning": "cánh tay",
        "example": "She hurt her arm.",
        "exampleVi": "Cô ấy làm đau cánh tay."
      },
      {
        "type": "Noun",
        "word": "leg",
        "ipa": "/leɡ/",
        "meaning": "chân",
        "example": "My leg hurts after the run.",
        "exampleVi": "Chân tôi đau sau khi chạy."
      },
      {
        "type": "Noun",
        "word": "shoulder",
        "ipa": "/ˈʃoʊldər/",
        "meaning": "vai",
        "example": "My bag is on my shoulder.",
        "exampleVi": "Túi của tôi ở trên vai."
      },
      {
        "type": "Noun",
        "word": "nail",
        "ipa": "/neɪl/",
        "meaning": "móng tay; móng chân",
        "example": "Her nails are very short.",
        "exampleVi": "Móng tay của cô ấy rất ngắn."
      },
      {
        "type": "Noun",
        "word": "thumb",
        "ipa": "/θʌm/",
        "meaning": "ngón tay cái",
        "example": "I cut my thumb.",
        "exampleVi": "Tôi bị đứt ngón tay cái."
      },
      {
        "type": "Noun",
        "word": "finger",
        "ipa": "/ˈfɪŋɡər/",
        "meaning": "ngón tay",
        "example": "I hurt my finger.",
        "exampleVi": "Tôi bị đau ngón tay."
      },
      {
        "type": "Noun",
        "word": "hand",
        "ipa": "/hænd/",
        "meaning": "bàn tay",
        "example": "Wash your hands before eating.",
        "exampleVi": "Hãy rửa tay trước khi ăn."
      },
      {
        "type": "Noun",
        "word": "knee",
        "ipa": "/niː/",
        "meaning": "đầu gối",
        "example": "He hurt his knee while playing football.",
        "exampleVi": "Anh ấy bị đau đầu gối khi chơi bóng đá."
      },
      {
        "type": "Noun",
        "word": "foot",
        "ipa": "/fʊt/",
        "meaning": "bàn chân",
        "example": "My foot hurts.",
        "exampleVi": "Bàn chân tôi bị đau."
      },
      {
        "type": "Noun",
        "word": "feet",
        "ipa": "/fiːt/",
        "meaning": "bàn chân (số nhiều của foot)",
        "example": "My feet are cold.",
        "exampleVi": "Chân tôi lạnh."
      },
      {
        "type": "Noun",
        "word": "toe",
        "ipa": "/toʊ/",
        "meaning": "ngón chân",
        "example": "I hurt my big toe.",
        "exampleVi": "Tôi bị đau ngón chân cái."
      },
      {
        "type": "Phrase",
        "word": "the rest of the body",
        "ipa": "/ðə rest əv ðə ˈbɑːdi/",
        "meaning": "phần còn lại của cơ thể",
        "example": "Exercise is good for the rest of your body.",
        "exampleVi": "Tập thể dục tốt cho phần còn lại của cơ thể bạn."
      },
      {
        "type": "Noun",
        "word": "skin",
        "ipa": "/skɪn/",
        "meaning": "da",
        "example": "My skin is very dry.",
        "exampleVi": "Da tôi rất khô."
      },
      {
        "type": "Noun",
        "word": "chest",
        "ipa": "/tʃest/",
        "meaning": "ngực, lồng ngực",
        "example": "He has pain in his chest.",
        "exampleVi": "Anh ấy bị đau ở ngực."
      },
      {
        "type": "Noun",
        "word": "side",
        "ipa": "/saɪd/",
        "meaning": "bên, phía; mạn sườn",
        "example": "I have pain in my left side.",
        "exampleVi": "Tôi bị đau ở bên trái cơ thể."
      },
      {
        "type": "Noun",
        "word": "stomach",
        "ipa": "/ˈstʌmək/",
        "meaning": "dạ dày; bụng",
        "example": "My stomach hurts.",
        "exampleVi": "Tôi bị đau bụng."
      },
      {
        "type": "Noun",
        "word": "back",
        "ipa": "/bæk/",
        "meaning": "lưng",
        "example": "My back hurts after work.",
        "exampleVi": "Lưng tôi bị đau sau khi làm việc."
      },
      {
        "type": "Noun",
        "word": "waist",
        "ipa": "/weɪst/",
        "meaning": "eo, thắt lưng",
        "example": "She has a small waist.",
        "exampleVi": "Cô ấy có vòng eo nhỏ."
      },
      {
        "type": "Noun",
        "word": "hip",
        "ipa": "/hɪp/",
        "meaning": "hông",
        "example": "My hip hurts when I walk.",
        "exampleVi": "Hông tôi bị đau khi đi bộ."
      },
      {
        "type": "Phrase",
        "word": "inside the body",
        "ipa": "/ˌɪnˈsaɪd ðə ˈbɑːdi/",
        "meaning": "bên trong cơ thể",
        "example": "There are many organs inside the body.",
        "exampleVi": "Có nhiều cơ quan bên trong cơ thể."
      },
      {
        "type": "Noun",
        "word": "heart",
        "ipa": "/hɑːrt/",
        "meaning": "tim",
        "example": "The heart pumps blood around the body.",
        "exampleVi": "Tim bơm máu đi khắp cơ thể."
      },
      {
        "type": "Noun",
        "word": "brain",
        "ipa": "/breɪn/",
        "meaning": "não, bộ não",
        "example": "The brain controls the body.",
        "exampleVi": "Bộ não điều khiển cơ thể."
      },
      {
        "type": "Noun",
        "word": "blood",
        "ipa": "/blʌd/",
        "meaning": "máu",
        "example": "The heart pumps blood around the body.",
        "exampleVi": "Tim bơm máu đi khắp cơ thể."
      }
    ]
  },
  {
    "id": 4,
    "title": "Clothes",
    "words": [
      {
        "type": "Noun",
        "word": "clothes",
        "ipa": "/kloʊðz/",
        "meaning": "quần áo",
        "example": "I need some new clothes.",
        "exampleVi": "Tôi cần một ít quần áo mới."
      },
      {
        "type": "Noun",
        "word": "hat",
        "ipa": "/hæt/",
        "meaning": "mũ",
        "example": "He is wearing a hat.",
        "exampleVi": "Anh ấy đang đội mũ."
      },
      {
        "type": "Noun",
        "word": "coat",
        "ipa": "/koʊt/",
        "meaning": "áo khoác dài",
        "example": "Put on your coat.",
        "exampleVi": "Hãy mặc áo khoác vào."
      },
      {
        "type": "Noun",
        "word": "jacket",
        "ipa": "/ˈdʒækɪt/",
        "meaning": "áo khoác ngắn",
        "example": "My jacket is black.",
        "exampleVi": "Áo khoác của tôi màu đen."
      },
      {
        "type": "Noun",
        "word": "scarf",
        "ipa": "/skɑːrf/",
        "meaning": "khăn quàng cổ",
        "example": "She is wearing a warm scarf.",
        "exampleVi": "Cô ấy đang quàng một chiếc khăn ấm."
      },
      {
        "type": "Noun",
        "word": "gloves",
        "ipa": "/ɡlʌvz/",
        "meaning": "găng tay",
        "example": "I wear gloves in winter.",
        "exampleVi": "Tôi đeo găng tay vào mùa đông."
      },
      {
        "type": "Noun",
        "word": "shoes",
        "ipa": "/ʃuːz/",
        "meaning": "giày",
        "example": "My shoes are dirty.",
        "exampleVi": "Giày của tôi bị bẩn."
      },
      {
        "type": "Noun",
        "word": "trainers",
        "ipa": "/ˈtreɪnərz/",
        "meaning": "giày thể thao",
        "example": "I wear trainers when I run.",
        "exampleVi": "Tôi đi giày thể thao khi chạy bộ."
      },
      {
        "type": "Noun",
        "word": "boots",
        "ipa": "/buːts/",
        "meaning": "bốt, ủng",
        "example": "Her boots are brown.",
        "exampleVi": "Đôi bốt của cô ấy màu nâu."
      },
      {
        "type": "Noun",
        "word": "suit",
        "ipa": "/suːt/",
        "meaning": "bộ com-lê, bộ vest",
        "example": "He wears a suit to work.",
        "exampleVi": "Anh ấy mặc vest đi làm."
      },
      {
        "type": "Noun",
        "word": "sweater",
        "ipa": "/ˈswetər/",
        "meaning": "áo len",
        "example": "This sweater is very warm.",
        "exampleVi": "Chiếc áo len này rất ấm."
      },
      {
        "type": "Noun",
        "word": "jumper",
        "ipa": "/ˈdʒʌmpər/",
        "meaning": "áo len chui đầu",
        "example": "I like your new jumper.",
        "exampleVi": "Tôi thích chiếc áo len mới của bạn."
      },
      {
        "type": "Noun",
        "word": "belt",
        "ipa": "/belt/",
        "meaning": "thắt lưng",
        "example": "His belt is brown.",
        "exampleVi": "Thắt lưng của anh ấy màu nâu."
      },
      {
        "type": "Noun",
        "word": "ring",
        "ipa": "/rɪŋ/",
        "meaning": "nhẫn",
        "example": "She has a gold ring.",
        "exampleVi": "Cô ấy có một chiếc nhẫn vàng."
      },
      {
        "type": "Noun",
        "word": "dress",
        "ipa": "/dres/",
        "meaning": "váy liền",
        "example": "She is wearing a red dress.",
        "exampleVi": "Cô ấy đang mặc một chiếc váy đỏ."
      },
      {
        "type": "Noun",
        "word": "shirt",
        "ipa": "/ʃɜːrt/",
        "meaning": "áo sơ mi",
        "example": "He is wearing a white shirt.",
        "exampleVi": "Anh ấy đang mặc áo sơ mi trắng."
      },
      {
        "type": "Noun",
        "word": "watch",
        "ipa": "/wɑːtʃ/",
        "meaning": "đồng hồ đeo tay",
        "example": "My watch is new.",
        "exampleVi": "Đồng hồ của tôi còn mới."
      },
      {
        "type": "Noun",
        "word": "T-shirt",
        "ipa": "/ˈtiː ʃɜːrt/",
        "meaning": "áo phông",
        "example": "I like this blue T-shirt.",
        "exampleVi": "Tôi thích chiếc áo phông màu xanh này."
      },
      {
        "type": "Noun",
        "word": "socks",
        "ipa": "/sɑːks/",
        "meaning": "tất, vớ",
        "example": "I need clean socks.",
        "exampleVi": "Tôi cần đôi tất sạch."
      },
      {
        "type": "Noun",
        "word": "trousers",
        "ipa": "/ˈtraʊzərz/",
        "meaning": "quần dài",
        "example": "These trousers are too big.",
        "exampleVi": "Chiếc quần này quá rộng."
      },
      {
        "type": "Noun",
        "word": "jeans",
        "ipa": "/dʒiːnz/",
        "meaning": "quần jean",
        "example": "I often wear jeans.",
        "exampleVi": "Tôi thường mặc quần jean."
      },
      {
        "type": "Noun",
        "word": "shorts",
        "ipa": "/ʃɔːrts/",
        "meaning": "quần short, quần đùi",
        "example": "He is wearing shorts.",
        "exampleVi": "Anh ấy đang mặc quần short."
      },
      {
        "type": "Noun",
        "word": "tights",
        "ipa": "/taɪts/",
        "meaning": "quần tất",
        "example": "She wears tights in winter.",
        "exampleVi": "Cô ấy mặc quần tất vào mùa đông."
      },
      {
        "type": "Noun",
        "word": "glasses",
        "ipa": "/ˈɡlæsɪz/",
        "meaning": "kính mắt",
        "example": "I wear glasses.",
        "exampleVi": "Tôi đeo kính."
      },
      {
        "type": "Noun",
        "word": "pyjamas",
        "ipa": "/pəˈdʒɑːməz/",
        "meaning": "đồ ngủ",
        "example": "The children are in their pyjamas.",
        "exampleVi": "Những đứa trẻ đang mặc đồ ngủ."
      },
      {
        "type": "Noun",
        "word": "sunglasses",
        "ipa": "/ˈsʌnˌɡlæsɪz/",
        "meaning": "kính râm",
        "example": "Don't forget your sunglasses.",
        "exampleVi": "Đừng quên kính râm của bạn."
      },
      {
        "type": "Phrase",
        "word": "a pair of",
        "ipa": "/ə ˈper əv/",
        "meaning": "một đôi; một cặp",
        "example": "I bought a pair of shoes.",
        "exampleVi": "Tôi đã mua một đôi giày."
      },
      {
        "type": "Verb",
        "word": "wear",
        "ipa": "/wer/",
        "meaning": "mặc, đội, đeo",
        "example": "I wear a uniform at school.",
        "exampleVi": "Tôi mặc đồng phục ở trường."
      },
      {
        "type": "Verb",
        "word": "carry",
        "ipa": "/ˈkæri/",
        "meaning": "mang, xách",
        "example": "She carries a small bag.",
        "exampleVi": "Cô ấy xách một chiếc túi nhỏ."
      },
      {
        "type": "Phrase",
        "word": "have (get) ... on",
        "ipa": "/hæv ... ɑːn/; /ɡet ... ɑːn/",
        "meaning": "đang mặc/đeo; mặc/đeo vào",
        "example": "I have my coat on.",
        "exampleVi": "Tôi đang mặc áo khoác."
      },
      {
        "type": "Noun",
        "word": "bag",
        "ipa": "/bæɡ/",
        "meaning": "túi, cặp, túi xách",
        "example": "My bag is under the table.",
        "exampleVi": "Túi của tôi ở dưới bàn."
      },
      {
        "type": "Noun",
        "word": "umbrella",
        "ipa": "/ʌmˈbrelə/",
        "meaning": "ô, dù",
        "example": "Take an umbrella. It's raining.",
        "exampleVi": "Hãy mang theo ô. Trời đang mưa."
      },
      {
        "type": "Verb phrase",
        "word": "get dressed",
        "ipa": "/ɡet drest/",
        "meaning": "mặc quần áo; thay quần áo",
        "example": "I get dressed at seven.",
        "exampleVi": "Tôi mặc quần áo lúc bảy giờ."
      },
      {
        "type": "Phrasal verb",
        "word": "put on",
        "ipa": "/pʊt ɑːn/",
        "meaning": "mặc, đội, đeo vào",
        "example": "Put on your shoes, please.",
        "exampleVi": "Hãy đi giày vào."
      },
      {
        "type": "Verb phrase",
        "word": "get undressed",
        "ipa": "/ɡet ʌnˈdrest/",
        "meaning": "cởi quần áo; thay đồ",
        "example": "I get undressed before bed.",
        "exampleVi": "Tôi cởi quần áo trước khi đi ngủ."
      },
      {
        "type": "Phrasal verb",
        "word": "take off",
        "ipa": "/teɪk ɔːf/",
        "meaning": "cởi, tháo ra",
        "example": "Take off your shoes, please.",
        "exampleVi": "Hãy cởi giày ra."
      }
    ]
  },
  {
    "id": 5,
    "title": "Describing people",
    "words": [
      {
        "type": "Noun",
        "word": "height",
        "ipa": "/haɪt/",
        "meaning": "chiều cao",
        "example": "What is your height?",
        "exampleVi": "Chiều cao của bạn là bao nhiêu?"
      },
      {
        "type": "Noun",
        "word": "weight",
        "ipa": "/weɪt/",
        "meaning": "cân nặng, trọng lượng",
        "example": "His weight is 70 kilos.",
        "exampleVi": "Cân nặng của anh ấy là 70 kg."
      },
      {
        "type": "Adjective",
        "word": "tall",
        "ipa": "/tɔːl/",
        "meaning": "cao",
        "example": "My brother is very tall.",
        "exampleVi": "Anh trai tôi rất cao."
      },
      {
        "type": "Adverb",
        "word": "quite",
        "ipa": "/kwaɪt/",
        "meaning": "khá, tương đối",
        "example": "She is quite tall.",
        "exampleVi": "Cô ấy khá cao."
      },
      {
        "type": "Adjective",
        "word": "short",
        "ipa": "/ʃɔːrt/",
        "meaning": "thấp; ngắn",
        "example": "My sister is short.",
        "exampleVi": "Em gái tôi thấp."
      },
      {
        "type": "Adjective phrase",
        "word": "medium height",
        "ipa": "/ˌmiːdiəm ˈhaɪt/",
        "meaning": "cao trung bình, tầm trung",
        "example": "He is of medium height.",
        "exampleVi": "Anh ấy có chiều cao trung bình."
      },
      {
        "type": "Adjective",
        "word": "slim",
        "ipa": "/slɪm/",
        "meaning": "thon, mảnh mai",
        "example": "She is tall and slim.",
        "exampleVi": "Cô ấy cao và thon."
      },
      {
        "type": "Adjective",
        "word": "thin",
        "ipa": "/θɪn/",
        "meaning": "gầy, mảnh",
        "example": "He is very thin.",
        "exampleVi": "Anh ấy rất gầy."
      },
      {
        "type": "Adjective",
        "word": "overweight",
        "ipa": "/ˌoʊvərˈweɪt/",
        "meaning": "thừa cân",
        "example": "He is slightly overweight.",
        "exampleVi": "Anh ấy hơi thừa cân."
      },
      {
        "type": "Adjective",
        "word": "fat",
        "ipa": "/fæt/",
        "meaning": "béo, mập",
        "example": "The dog is fat.",
        "exampleVi": "Con chó béo."
      },
      {
        "type": "Adjective phrase",
        "word": "dark skin",
        "ipa": "/dɑːrk skɪn/",
        "meaning": "da sẫm màu, da ngăm",
        "example": "She has dark skin.",
        "exampleVi": "Cô ấy có làn da sẫm màu."
      },
      {
        "type": "Adjective phrase",
        "word": "dark hair",
        "ipa": "/dɑːrk her/",
        "meaning": "tóc sẫm màu",
        "example": "He has dark hair.",
        "exampleVi": "Anh ấy có mái tóc sẫm màu."
      },
      {
        "type": "Adjective phrase",
        "word": "brown eyes",
        "ipa": "/braʊn aɪz/",
        "meaning": "mắt nâu",
        "example": "She has brown eyes.",
        "exampleVi": "Cô ấy có đôi mắt nâu."
      },
      {
        "type": "Adjective phrase",
        "word": "blonde hair",
        "ipa": "/blɑːnd her/",
        "meaning": "tóc vàng",
        "example": "She has long blonde hair.",
        "exampleVi": "Cô ấy có mái tóc vàng dài."
      },
      {
        "type": "Adjective phrase",
        "word": "fair hair",
        "ipa": "/fer her/",
        "meaning": "tóc sáng màu, tóc vàng nhạt",
        "example": "He has fair hair.",
        "exampleVi": "Anh ấy có mái tóc sáng màu."
      },
      {
        "type": "Adjective phrase",
        "word": "fair skin",
        "ipa": "/fer skɪn/",
        "meaning": "da sáng, da trắng",
        "example": "She has fair skin.",
        "exampleVi": "Cô ấy có làn da sáng."
      },
      {
        "type": "Adjective phrase",
        "word": "blue eyes",
        "ipa": "/bluː aɪz/",
        "meaning": "mắt xanh",
        "example": "The girl has blue eyes.",
        "exampleVi": "Cô bé có đôi mắt xanh."
      },
      {
        "type": "Noun",
        "word": "beard",
        "ipa": "/bɪrd/",
        "meaning": "râu (quanh cằm và má)",
        "example": "My father has a beard.",
        "exampleVi": "Bố tôi có râu."
      },
      {
        "type": "Adjective phrase",
        "word": "long hair",
        "ipa": "/lɔːŋ her/",
        "meaning": "tóc dài",
        "example": "She has long hair.",
        "exampleVi": "Cô ấy có mái tóc dài."
      },
      {
        "type": "Adjective phrase",
        "word": "green eyes",
        "ipa": "/ɡriːn aɪz/",
        "meaning": "mắt xanh lá",
        "example": "He has green eyes.",
        "exampleVi": "Anh ấy có đôi mắt xanh lá."
      },
      {
        "type": "Noun",
        "word": "moustache",
        "ipa": "/ˈmʌstæʃ/",
        "meaning": "ria mép",
        "example": "My uncle has a moustache.",
        "exampleVi": "Chú tôi có ria mép."
      },
      {
        "type": "Adjective phrase",
        "word": "short hair",
        "ipa": "/ʃɔːrt her/",
        "meaning": "tóc ngắn",
        "example": "He has short hair.",
        "exampleVi": "Anh ấy có mái tóc ngắn."
      },
      {
        "type": "Adjective",
        "word": "beautiful",
        "ipa": "/ˈbjuːtɪfəl/",
        "meaning": "xinh đẹp, đẹp",
        "example": "She is very beautiful.",
        "exampleVi": "Cô ấy rất xinh đẹp."
      },
      {
        "type": "Adjective",
        "word": "good-looking",
        "ipa": "/ˌɡʊd ˈlʊkɪŋ/",
        "meaning": "đẹp trai, ưa nhìn",
        "example": "He is very good-looking.",
        "exampleVi": "Anh ấy rất đẹp trai."
      },
      {
        "type": "Adjective",
        "word": "pretty",
        "ipa": "/ˈprɪti/",
        "meaning": "xinh xắn, khá đẹp",
        "example": "The girl is very pretty.",
        "exampleVi": "Cô bé rất xinh xắn."
      },
      {
        "type": "Adjective",
        "word": "ugly",
        "ipa": "/ˈʌɡli/",
        "meaning": "xấu",
        "example": "The building is ugly.",
        "exampleVi": "Tòa nhà xấu."
      },
      {
        "type": "Adjective",
        "word": "average-looking",
        "ipa": "/ˌævərɪdʒ ˈlʊkɪŋ/",
        "meaning": "có ngoại hình bình thường, không nổi bật",
        "example": "He is quite average-looking.",
        "exampleVi": "Anh ấy có ngoại hình khá bình thường."
      },
      {
        "type": "Noun",
        "word": "age",
        "ipa": "/eɪdʒ/",
        "meaning": "tuổi",
        "example": "What is your age?",
        "exampleVi": "Bạn bao nhiêu tuổi?"
      },
      {
        "type": "Adjective",
        "word": "old",
        "ipa": "/oʊld/",
        "meaning": "già; lớn tuổi",
        "example": "My grandfather is old.",
        "exampleVi": "Ông tôi đã lớn tuổi."
      },
      {
        "type": "Adjective",
        "word": "young",
        "ipa": "/jʌŋ/",
        "meaning": "trẻ",
        "example": "She is very young.",
        "exampleVi": "Cô ấy còn rất trẻ."
      },
      {
        "type": "Adjective",
        "word": "older",
        "ipa": "/ˈoʊldər/",
        "meaning": "lớn tuổi hơn; già hơn",
        "example": "My brother is older than me.",
        "exampleVi": "Anh trai tôi lớn tuổi hơn tôi."
      },
      {
        "type": "Adjective",
        "word": "middle-aged",
        "ipa": "/ˌmɪdl ˈeɪdʒd/",
        "meaning": "trung niên",
        "example": "My father is middle-aged.",
        "exampleVi": "Bố tôi ở độ tuổi trung niên."
      },
      {
        "type": "Adjective",
        "word": "elderly",
        "ipa": "/ˈeldərli/",
        "meaning": "cao tuổi, lớn tuổi",
        "example": "We should help elderly people.",
        "exampleVi": "Chúng ta nên giúp đỡ người cao tuổi."
      },
      {
        "type": "Question phrase",
        "word": "How tall ...?",
        "ipa": "/haʊ tɔːl/",
        "meaning": "... cao bao nhiêu?",
        "example": "How tall is your brother?",
        "exampleVi": "Anh trai bạn cao bao nhiêu?"
      },
      {
        "type": "Question phrase",
        "word": "How heavy are you?",
        "ipa": "/haʊ ˈhevi ɑːr juː/",
        "meaning": "Bạn nặng bao nhiêu?",
        "example": "How heavy are you?",
        "exampleVi": "Bạn nặng bao nhiêu?"
      },
      {
        "type": "Question phrase",
        "word": "How much do you weigh?",
        "ipa": "/haʊ mʌtʃ də juː weɪ/",
        "meaning": "Bạn cân nặng bao nhiêu?",
        "example": "How much do you weigh?",
        "exampleVi": "Bạn cân nặng bao nhiêu?"
      },
      {
        "type": "Question phrase",
        "word": "How old is he?",
        "ipa": "/haʊ oʊld ɪz hiː/",
        "meaning": "Anh ấy bao nhiêu tuổi?",
        "example": "How old is he?",
        "exampleVi": "Anh ấy bao nhiêu tuổi?"
      },
      {
        "type": "Question phrase",
        "word": "What does ... look like?",
        "ipa": "/wʌt dʌz ... lʊk laɪk/",
        "meaning": "... trông như thế nào?; ngoại hình của ... ra sao?",
        "example": "What does your sister look like?",
        "exampleVi": "Chị/em gái bạn trông như thế nào?"
      }
    ]
  },
  {
    "id": 6,
    "title": "Health and illness",
    "words": [
      {
        "type": "Noun",
        "word": "health",
        "ipa": "/helθ/",
        "meaning": "sức khỏe",
        "example": "Good health is important.",
        "exampleVi": "Sức khỏe tốt rất quan trọng."
      },
      {
        "type": "Question phrase",
        "word": "How are you today?",
        "ipa": "/haʊ ɑːr ju təˈdeɪ/",
        "meaning": "Hôm nay bạn cảm thấy thế nào?",
        "example": "How are you today? — I'm fine, thanks.",
        "exampleVi": "Hôm nay bạn cảm thấy thế nào? — Tôi khỏe, cảm ơn."
      },
      {
        "type": "Adverb phrase",
        "word": "very well",
        "ipa": "/ˈveri wel/",
        "meaning": "rất khỏe, rất tốt",
        "example": "I feel very well today.",
        "exampleVi": "Hôm nay tôi cảm thấy rất khỏe."
      },
      {
        "type": "Adjective",
        "word": "fine",
        "ipa": "/faɪn/",
        "meaning": "khỏe, ổn, tốt",
        "example": "I'm fine, thank you.",
        "exampleVi": "Tôi khỏe, cảm ơn bạn."
      },
      {
        "type": "Phrase",
        "word": "don't feel very well",
        "ipa": "/doʊnt fiːl ˈveri wel/",
        "meaning": "cảm thấy không được khỏe",
        "example": "I don't feel very well today.",
        "exampleVi": "Hôm nay tôi cảm thấy không được khỏe."
      },
      {
        "type": "Verb",
        "word": "rest",
        "ipa": "/rest/",
        "meaning": "nghỉ ngơi",
        "example": "You should rest today.",
        "exampleVi": "Hôm nay bạn nên nghỉ ngơi."
      },
      {
        "type": "Phrase",
        "word": "feel ill",
        "ipa": "/fiːl ɪl/",
        "meaning": "cảm thấy không khỏe, cảm thấy bị bệnh",
        "example": "I feel ill today.",
        "exampleVi": "Hôm nay tôi cảm thấy không khỏe."
      },
      {
        "type": "Noun",
        "word": "doctor",
        "ipa": "/ˈdɑːktər/",
        "meaning": "bác sĩ",
        "example": "You should see a doctor.",
        "exampleVi": "Bạn nên đi khám bác sĩ."
      },
      {
        "type": "Phrase",
        "word": "that fish was bad",
        "ipa": "/ðæt fɪʃ wəz bæd/",
        "meaning": "con cá đó bị hỏng/không còn tươi",
        "example": "I think that fish was bad.",
        "exampleVi": "Tôi nghĩ con cá đó bị hỏng."
      },
      {
        "type": "Adjective",
        "word": "sick",
        "ipa": "/sɪk/",
        "meaning": "ốm, bệnh; cảm thấy buồn nôn",
        "example": "She is sick today.",
        "exampleVi": "Hôm nay cô ấy bị ốm."
      },
      {
        "type": "Noun",
        "word": "aspirin",
        "ipa": "/ˈæsprɪn/",
        "meaning": "thuốc aspirin",
        "example": "I took an aspirin for my headache.",
        "exampleVi": "Tôi uống một viên aspirin vì đau đầu."
      },
      {
        "type": "Noun",
        "word": "headache",
        "ipa": "/ˈhedeɪk/",
        "meaning": "đau đầu",
        "example": "I have a headache.",
        "exampleVi": "Tôi bị đau đầu."
      },
      {
        "type": "Noun",
        "word": "toothache",
        "ipa": "/ˈtuːθeɪk/",
        "meaning": "đau răng",
        "example": "I have a bad toothache.",
        "exampleVi": "Tôi bị đau răng dữ dội."
      },
      {
        "type": "Noun",
        "word": "dentist",
        "ipa": "/ˈdentɪst/",
        "meaning": "nha sĩ",
        "example": "I have an appointment with the dentist.",
        "exampleVi": "Tôi có lịch hẹn với nha sĩ."
      },
      {
        "type": "Noun",
        "word": "cold",
        "ipa": "/koʊld/",
        "meaning": "cảm lạnh",
        "example": "I have a cold.",
        "exampleVi": "Tôi bị cảm lạnh."
      },
      {
        "type": "Noun",
        "word": "hay fever",
        "ipa": "/ˈheɪ fiːvər/",
        "meaning": "bệnh sốt cỏ khô, viêm mũi dị ứng theo mùa",
        "example": "I get hay fever in spring.",
        "exampleVi": "Tôi bị viêm mũi dị ứng vào mùa xuân."
      },
      {
        "type": "Verb",
        "word": "sneeze",
        "ipa": "/sniːz/",
        "meaning": "hắt hơi",
        "example": "I sneeze when I have a cold.",
        "exampleVi": "Tôi hắt hơi khi bị cảm lạnh."
      },
      {
        "type": "Noun",
        "word": "asthma",
        "ipa": "/ˈæzmə/",
        "meaning": "bệnh hen suyễn",
        "example": "He has asthma.",
        "exampleVi": "Anh ấy bị hen suyễn."
      },
      {
        "type": "Verb",
        "word": "breathe",
        "ipa": "/briːð/",
        "meaning": "thở",
        "example": "It is difficult to breathe here.",
        "exampleVi": "Thật khó thở ở đây."
      },
      {
        "type": "Noun",
        "word": "illness",
        "ipa": "/ˈɪlnəs/",
        "meaning": "bệnh tật, sự ốm đau",
        "example": "The illness made her very weak.",
        "exampleVi": "Căn bệnh khiến cô ấy rất yếu."
      },
      {
        "type": "Noun (plural)",
        "word": "illnesses",
        "ipa": "/ˈɪlnəsɪz/",
        "meaning": "các bệnh, những căn bệnh",
        "example": "Some illnesses can be prevented.",
        "exampleVi": "Một số bệnh có thể được phòng ngừa."
      },
      {
        "type": "Phrase",
        "word": "illnesses in hot, tropical countries",
        "ipa": "/ˈɪlnəsɪz ɪn hɑːt ˈtrɑːpɪkəl ˈkʌntriz/",
        "meaning": "các bệnh ở những nước nóng, nhiệt đới",
        "example": "Some illnesses in hot, tropical countries are spread by mosquitoes.",
        "exampleVi": "Một số bệnh ở các nước nóng, nhiệt đới lây lan qua muỗi."
      },
      {
        "type": "Noun",
        "word": "mosquito",
        "ipa": "/məˈskiːtoʊ/",
        "meaning": "muỗi",
        "example": "A mosquito bit me.",
        "exampleVi": "Một con muỗi đã đốt tôi."
      },
      {
        "type": "Noun",
        "word": "malaria",
        "ipa": "/məˈleriə/",
        "meaning": "bệnh sốt rét",
        "example": "Malaria is spread by mosquitoes.",
        "exampleVi": "Bệnh sốt rét lây truyền qua muỗi."
      },
      {
        "type": "Noun",
        "word": "cholera",
        "ipa": "/ˈkɑːlərə/",
        "meaning": "bệnh tả",
        "example": "Clean water can help prevent cholera.",
        "exampleVi": "Nước sạch có thể giúp phòng bệnh tả."
      },
      {
        "type": "Adjective",
        "word": "serious",
        "ipa": "/ˈsɪriəs/",
        "meaning": "nghiêm trọng, nghiêm túc",
        "example": "It is a serious illness.",
        "exampleVi": "Đó là một căn bệnh nghiêm trọng."
      },
      {
        "type": "Noun",
        "word": "cancer",
        "ipa": "/ˈkænsər/",
        "meaning": "bệnh ung thư",
        "example": "Her grandmother had cancer.",
        "exampleVi": "Bà của cô ấy từng bị ung thư."
      },
      {
        "type": "Noun",
        "word": "hospital",
        "ipa": "/ˈhɑːspɪtl/",
        "meaning": "bệnh viện",
        "example": "He is in hospital.",
        "exampleVi": "Anh ấy đang ở bệnh viện."
      },
      {
        "type": "Noun",
        "word": "heart attack",
        "ipa": "/ˈhɑːrt əˌtæk/",
        "meaning": "cơn đau tim, nhồi máu cơ tim",
        "example": "His grandfather had a heart attack.",
        "exampleVi": "Ông của anh ấy bị đau tim."
      },
      {
        "type": "Noun phrase",
        "word": "healthy diet",
        "ipa": "/ˌhelθi ˈdaɪət/",
        "meaning": "chế độ ăn uống lành mạnh",
        "example": "A healthy diet is good for you.",
        "exampleVi": "Một chế độ ăn uống lành mạnh rất tốt cho bạn."
      },
      {
        "type": "Noun",
        "word": "exercise",
        "ipa": "/ˈeksərsaɪz/",
        "meaning": "tập thể dục; sự vận động",
        "example": "Regular exercise is good for your health.",
        "exampleVi": "Tập thể dục thường xuyên tốt cho sức khỏe."
      },
      {
        "type": "Phrase",
        "word": "good for you",
        "ipa": "/ɡʊd fər juː/",
        "meaning": "tốt cho bạn, tốt cho sức khỏe",
        "example": "Walking is good for you.",
        "exampleVi": "Đi bộ tốt cho sức khỏe."
      },
      {
        "type": "Adjective",
        "word": "stressed",
        "ipa": "/strest/",
        "meaning": "căng thẳng, bị áp lực",
        "example": "I feel stressed at work.",
        "exampleVi": "Tôi cảm thấy căng thẳng ở nơi làm việc."
      },
      {
        "type": "Verb",
        "word": "relax",
        "ipa": "/rɪˈlæks/",
        "meaning": "thư giãn, nghỉ ngơi",
        "example": "Try to relax before bed.",
        "exampleVi": "Hãy cố gắng thư giãn trước khi đi ngủ."
      },
      {
        "type": "Verb",
        "word": "panic",
        "ipa": "/ˈpænɪk/",
        "meaning": "hoảng sợ, hoảng loạn",
        "example": "Don't panic. Everything is OK.",
        "exampleVi": "Đừng hoảng sợ. Mọi thứ đều ổn."
      }
    ]
  },
  {
    "id": 7,
    "title": "Feelings",
    "words": [
      {
        "type": "Verb",
        "word": "love",
        "ipa": "/lʌv/",
        "meaning": "yêu; rất thích",
        "example": "I love my family.",
        "exampleVi": "Tôi yêu gia đình mình."
      },
      {
        "type": "Verb",
        "word": "like",
        "ipa": "/laɪk/",
        "meaning": "thích",
        "example": "I like listening to music.",
        "exampleVi": "Tôi thích nghe nhạc."
      },
      {
        "type": "Verb",
        "word": "hate",
        "ipa": "/heɪt/",
        "meaning": "ghét; rất không thích",
        "example": "I hate getting up early.",
        "exampleVi": "Tôi ghét dậy sớm."
      },
      {
        "type": "Adjective",
        "word": "happy",
        "ipa": "/ˈhæpi/",
        "meaning": "vui, hạnh phúc",
        "example": "She is happy today.",
        "exampleVi": "Hôm nay cô ấy rất vui."
      },
      {
        "type": "Adjective",
        "word": "sad",
        "ipa": "/sæd/",
        "meaning": "buồn",
        "example": "He looks sad.",
        "exampleVi": "Anh ấy trông buồn."
      },
      {
        "type": "Adjective",
        "word": "tired",
        "ipa": "/ˈtaɪərd/",
        "meaning": "mệt mỏi",
        "example": "I am tired after work.",
        "exampleVi": "Tôi mệt sau khi làm việc."
      },
      {
        "type": "Adjective",
        "word": "angry",
        "ipa": "/ˈæŋɡri/",
        "meaning": "tức giận",
        "example": "My father is angry with me.",
        "exampleVi": "Bố tôi tức giận với tôi."
      },
      {
        "type": "Adjective",
        "word": "upset",
        "ipa": "/ʌpˈset/",
        "meaning": "buồn bực, khó chịu, phiền lòng",
        "example": "She is upset about the news.",
        "exampleVi": "Cô ấy buồn vì tin tức đó."
      },
      {
        "type": "Adjective",
        "word": "cold",
        "ipa": "/koʊld/",
        "meaning": "lạnh; cảm thấy lạnh",
        "example": "I am cold. Can I close the window?",
        "exampleVi": "Tôi thấy lạnh. Tôi đóng cửa sổ được không?"
      },
      {
        "type": "Adjective",
        "word": "hot",
        "ipa": "/hɑːt/",
        "meaning": "nóng; cảm thấy nóng",
        "example": "I'm hot after running.",
        "exampleVi": "Tôi thấy nóng sau khi chạy."
      },
      {
        "type": "Adjective",
        "word": "thirsty",
        "ipa": "/ˈθɜːrsti/",
        "meaning": "khát nước",
        "example": "I'm thirsty. I need some water.",
        "exampleVi": "Tôi khát. Tôi cần một ít nước."
      },
      {
        "type": "Adjective",
        "word": "hungry",
        "ipa": "/ˈhʌŋɡri/",
        "meaning": "đói",
        "example": "I'm hungry. Let's have lunch.",
        "exampleVi": "Tôi đói. Chúng ta ăn trưa nhé."
      },
      {
        "type": "Adjective",
        "word": "well",
        "ipa": "/wel/",
        "meaning": "khỏe; cảm thấy tốt",
        "example": "I don't feel well today.",
        "exampleVi": "Hôm nay tôi cảm thấy không khỏe."
      },
      {
        "type": "Adjective",
        "word": "ill",
        "ipa": "/ɪl/",
        "meaning": "ốm, không khỏe",
        "example": "She feels ill today.",
        "exampleVi": "Hôm nay cô ấy cảm thấy không khỏe."
      },
      {
        "type": "Adjective",
        "word": "surprised",
        "ipa": "/sərˈpraɪzd/",
        "meaning": "ngạc nhiên, bất ngờ",
        "example": "I was surprised by the gift.",
        "exampleVi": "Tôi rất ngạc nhiên vì món quà."
      },
      {
        "type": "Verb phrase",
        "word": "prefer ... to ...",
        "ipa": "/prɪˈfɜːr ... tuː/",
        "meaning": "thích ... hơn ...",
        "example": "I prefer tea to coffee.",
        "exampleVi": "Tôi thích trà hơn cà phê."
      },
      {
        "type": "Verb",
        "word": "hope",
        "ipa": "/hoʊp/",
        "meaning": "hy vọng",
        "example": "I hope you feel better soon.",
        "exampleVi": "Tôi hy vọng bạn sớm cảm thấy khỏe hơn."
      },
      {
        "type": "Verb",
        "word": "want",
        "ipa": "/wɑːnt/",
        "meaning": "muốn",
        "example": "I want some water.",
        "exampleVi": "Tôi muốn một ít nước."
      },
      {
        "type": "Phrase",
        "word": "a bit",
        "ipa": "/ə bɪt/",
        "meaning": "một chút, hơi",
        "example": "I'm a bit tired.",
        "exampleVi": "Tôi hơi mệt một chút."
      },
      {
        "type": "Phrase",
        "word": "a little",
        "ipa": "/ə ˈlɪtl/",
        "meaning": "một chút, hơi",
        "example": "I'm a little hungry.",
        "exampleVi": "Tôi hơi đói một chút."
      }
    ]
  },
  {
    "id": 8,
    "title": "Conversations 1: Greetings and wishes",
    "words": [
      {
        "type": "Adverb phrase",
        "word": "every day",
        "ipa": "/ˈevri deɪ/",
        "meaning": "mỗi ngày, hằng ngày",
        "example": "I walk to school every day.",
        "exampleVi": "Tôi đi bộ đến trường mỗi ngày."
      },
      {
        "type": "Greeting",
        "word": "good morning",
        "ipa": "/ɡʊd ˈmɔːrnɪŋ/",
        "meaning": "chào buổi sáng",
        "example": "Good morning, Mr. Brown!",
        "exampleVi": "Chào buổi sáng, ông Brown!"
      },
      {
        "type": "Greeting",
        "word": "good afternoon",
        "ipa": "/ɡʊd ˌæftərˈnuːn/",
        "meaning": "chào buổi chiều",
        "example": "Good afternoon, everyone!",
        "exampleVi": "Chào buổi chiều mọi người!"
      },
      {
        "type": "Greeting",
        "word": "good evening",
        "ipa": "/ɡʊd ˈiːvnɪŋ/",
        "meaning": "chào buổi tối",
        "example": "Good evening, Mrs. Smith.",
        "exampleVi": "Chào buổi tối, bà Smith."
      },
      {
        "type": "Expression",
        "word": "goodbye",
        "ipa": "/ˌɡʊdˈbaɪ/",
        "meaning": "tạm biệt",
        "example": "Goodbye! See you tomorrow.",
        "exampleVi": "Tạm biệt! Hẹn gặp bạn ngày mai."
      },
      {
        "type": "Expression",
        "word": "see you soon",
        "ipa": "/ˌsiː juː ˈsuːn/",
        "meaning": "hẹn sớm gặp lại",
        "example": "See you soon!",
        "exampleVi": "Hẹn sớm gặp lại bạn!"
      },
      {
        "type": "Expression",
        "word": "good night",
        "ipa": "/ˌɡʊd ˈnaɪt/",
        "meaning": "chúc ngủ ngon; chào tạm biệt vào ban đêm",
        "example": "Good night, Mum.",
        "exampleVi": "Chúc mẹ ngủ ngon."
      },
      {
        "type": "Expression",
        "word": "sleep well",
        "ipa": "/sliːp wel/",
        "meaning": "ngủ ngon, ngủ thật ngon",
        "example": "Sleep well! See you tomorrow.",
        "exampleVi": "Ngủ ngon nhé! Hẹn gặp bạn ngày mai."
      },
      {
        "type": "Polite expression",
        "word": "please",
        "ipa": "/pliːz/",
        "meaning": "làm ơn, vui lòng",
        "example": "Can I have some water, please?",
        "exampleVi": "Làm ơn cho tôi một ít nước được không?"
      },
      {
        "type": "Expression",
        "word": "thank you",
        "ipa": "/ˈθæŋk juː/",
        "meaning": "cảm ơn",
        "example": "Thank you for your help.",
        "exampleVi": "Cảm ơn bạn đã giúp tôi."
      },
      {
        "type": "Expression",
        "word": "cheers",
        "ipa": "/tʃɪrz/",
        "meaning": "cảm ơn; chúc mừng/chúc sức khỏe",
        "example": "Cheers for the coffee!",
        "exampleVi": "Cảm ơn bạn vì ly cà phê!"
      },
      {
        "type": "Polite expression",
        "word": "excuse me",
        "ipa": "/ɪkˈskjuːz miː/",
        "meaning": "xin lỗi; làm ơn cho hỏi",
        "example": "Excuse me, where is the bank?",
        "exampleVi": "Xin lỗi, ngân hàng ở đâu vậy?"
      },
      {
        "type": "Expression",
        "word": "bless you",
        "ipa": "/bles juː/",
        "meaning": "chúc bạn khỏe; dùng khi ai đó hắt hơi",
        "example": "“Achoo!” — “Bless you!”",
        "exampleVi": "“Hắt xì!” — “Chúc bạn khỏe!”"
      },
      {
        "type": "Wish",
        "word": "happy birthday",
        "ipa": "/ˌhæpi ˈbɜːrθdeɪ/",
        "meaning": "chúc mừng sinh nhật",
        "example": "Happy birthday! I hope you have a great day.",
        "exampleVi": "Chúc mừng sinh nhật! Tôi hy vọng bạn có một ngày tuyệt vời."
      },
      {
        "type": "Wish",
        "word": "Merry Christmas / Happy Christmas",
        "ipa": "/ˌmeri ˈkrɪsməs/; /ˌhæpi ˈkrɪsməs/",
        "meaning": "chúc Giáng sinh vui vẻ",
        "example": "Merry Christmas! Have a great holiday.",
        "exampleVi": "Chúc Giáng sinh vui vẻ! Chúc bạn có một kỳ nghỉ tuyệt vời."
      },
      {
        "type": "Wish",
        "word": "Happy New Year",
        "ipa": "/ˌhæpi nuː ˈjɪr/",
        "meaning": "chúc mừng năm mới",
        "example": "Happy New Year! I wish you happiness.",
        "exampleVi": "Chúc mừng năm mới! Chúc bạn hạnh phúc."
      },
      {
        "type": "Wish",
        "word": "good luck",
        "ipa": "/ɡʊd lʌk/",
        "meaning": "chúc may mắn",
        "example": "Good luck with your exam!",
        "exampleVi": "Chúc bạn may mắn trong kỳ thi!"
      },
      {
        "type": "Expression",
        "word": "congratulations",
        "ipa": "/kənˌɡrætʃəˈleɪʃənz/",
        "meaning": "xin chúc mừng",
        "example": "Congratulations on your new job!",
        "exampleVi": "Chúc mừng bạn với công việc mới!"
      },
      {
        "type": "Expression",
        "word": "well done",
        "ipa": "/ˌwel ˈdʌn/",
        "meaning": "làm tốt lắm; giỏi lắm",
        "example": "Well done! You got the right answer.",
        "exampleVi": "Làm tốt lắm! Bạn đã trả lời đúng."
      }
    ]
  },
  {
    "id": 9,
    "title": "Conversations 2: Useful words and expressions",
    "words": [
      {
        "type": "Adverb",
        "word": "actually",
        "ipa": "/ˈæktʃuəli/",
        "meaning": "thực ra, thật ra",
        "example": "Actually, I don't like coffee.",
        "exampleVi": "Thực ra, tôi không thích cà phê."
      },
      {
        "type": "Adverb",
        "word": "really",
        "ipa": "/ˈriːəli/",
        "meaning": "thực sự, rất",
        "example": "I really like this song.",
        "exampleVi": "Tôi thực sự thích bài hát này."
      },
      {
        "type": "Adverb",
        "word": "else",
        "ipa": "/els/",
        "meaning": "khác, nữa",
        "example": "What else do you want?",
        "exampleVi": "Bạn còn muốn gì khác nữa?"
      },
      {
        "type": "Adverb / Preposition",
        "word": "around",
        "ipa": "/əˈraʊnd/",
        "meaning": "xung quanh; khoảng",
        "example": "There are many shops around here.",
        "exampleVi": "Có nhiều cửa hàng xung quanh đây."
      },
      {
        "type": "Adverb / Discourse marker",
        "word": "anyway",
        "ipa": "/ˈeniweɪ/",
        "meaning": "dù sao đi nữa",
        "example": "Anyway, let's go home.",
        "exampleVi": "Dù sao đi nữa, chúng ta về nhà thôi."
      },
      {
        "type": "Adverb / Discourse marker",
        "word": "anyway",
        "ipa": "/ˈeniweɪ/",
        "meaning": "à mà / trở lại vấn đề chính",
        "example": "Anyway, what time does the film start?",
        "exampleVi": "À mà, bộ phim bắt đầu lúc mấy giờ?"
      },
      {
        "type": "Noun",
        "word": "expression",
        "ipa": "/ɪkˈspreʃn/",
        "meaning": "cách diễn đạt; cụm từ; biểu cảm",
        "example": "“Good morning” is a common expression.",
        "exampleVi": "“Good morning” là một cách diễn đạt phổ biến."
      },
      {
        "type": "Phrase",
        "word": "Why don't ...?",
        "ipa": "/waɪ doʊnt/",
        "meaning": "Tại sao không...?; hay là...?",
        "example": "Why don't we go for a walk?",
        "exampleVi": "Hay là chúng ta đi dạo?"
      },
      {
        "type": "Phrase",
        "word": "Let's ...",
        "ipa": "/lets/",
        "meaning": "Hãy cùng...; chúng ta hãy...",
        "example": "Let's have lunch.",
        "exampleVi": "Chúng ta hãy ăn trưa."
      },
      {
        "type": "Phrase",
        "word": "I don't mind",
        "ipa": "/aɪ doʊnt maɪnd/",
        "meaning": "Tôi không phiền; tôi không ngại",
        "example": "I don't mind waiting.",
        "exampleVi": "Tôi không ngại chờ."
      },
      {
        "type": "Phrase",
        "word": "It's up to you",
        "ipa": "/ɪts ʌp tə juː/",
        "meaning": "Tùy bạn; bạn quyết định",
        "example": "It's up to you where we go.",
        "exampleVi": "Chúng ta đi đâu tùy bạn quyết định."
      },
      {
        "type": "Phrase",
        "word": "How about + V-ing?",
        "ipa": "/haʊ əˈbaʊt/",
        "meaning": "Hay là...?; còn ... thì sao?",
        "example": "How about going by bus?",
        "exampleVi": "Hay là chúng ta đi bằng xe buýt?"
      },
      {
        "type": "Phrase",
        "word": "What about + V-ing?",
        "ipa": "/wʌt əˈbaʊt/",
        "meaning": "Hay là...?; còn ... thì sao?",
        "example": "What about eating at home?",
        "exampleVi": "Hay là ăn ở nhà?"
      },
      {
        "type": "Expression",
        "word": "Oh dear!",
        "ipa": "/oʊ dɪr/",
        "meaning": "Ôi trời!; ôi không!",
        "example": "Oh dear! I forgot my keys.",
        "exampleVi": "Ôi không! Tôi quên chìa khóa rồi."
      },
      {
        "type": "Expression",
        "word": "It doesn't matter",
        "ipa": "/ɪt ˈdʌznt ˈmætər/",
        "meaning": "Không sao; không quan trọng",
        "example": "It doesn't matter if you are late.",
        "exampleVi": "Bạn đến muộn cũng không sao."
      },
      {
        "type": "Expression",
        "word": "What a pity!",
        "ipa": "/wʌt ə ˈpɪti/",
        "meaning": "Thật đáng tiếc!",
        "example": "What a pity! You can't come.",
        "exampleVi": "Thật đáng tiếc! Bạn không thể đến."
      },
      {
        "type": "Expression",
        "word": "Well done!",
        "ipa": "/ˌwel ˈdʌn/",
        "meaning": "Làm tốt lắm!; giỏi lắm!",
        "example": "Well done! You got the answer right.",
        "exampleVi": "Làm tốt lắm! Bạn đã trả lời đúng."
      },
      {
        "type": "Phrasal verb",
        "word": "Hurry up!",
        "ipa": "/ˈhɜːri ʌp/",
        "meaning": "Nhanh lên!",
        "example": "Hurry up! The bus is coming.",
        "exampleVi": "Nhanh lên! Xe buýt sắp đến rồi."
      },
      {
        "type": "Phrasal verb",
        "word": "Look out!",
        "ipa": "/lʊk aʊt/",
        "meaning": "Cẩn thận!; coi chừng!",
        "example": "Look out! There's a car!",
        "exampleVi": "Cẩn thận! Có ô tô kìa!"
      },
      {
        "type": "Phrase",
        "word": "Be careful!",
        "ipa": "/bi ˈkerfəl/",
        "meaning": "Hãy cẩn thận!",
        "example": "Be careful! The floor is wet.",
        "exampleVi": "Cẩn thận! Sàn nhà đang ướt."
      },
      {
        "type": "Adverb",
        "word": "absolutely",
        "ipa": "/ˌæbsəˈluːtli/",
        "meaning": "hoàn toàn; chắc chắn rồi; cực kỳ",
        "example": "“Do you agree?” — “Absolutely!”",
        "exampleVi": "“Bạn có đồng ý không?” — “Chắc chắn rồi!”"
      },
      {
        "type": "Verb",
        "word": "agree",
        "ipa": "/əˈɡriː/",
        "meaning": "đồng ý",
        "example": "I agree with you.",
        "exampleVi": "Tôi đồng ý với bạn."
      }
    ]
  },
  {
    "id": 10,
    "title": "Food and drink",
    "words": [
      {
        "type": "Noun",
        "word": "food",
        "ipa": "/fuːd/",
        "meaning": "thức ăn, thực phẩm",
        "example": "I like Italian food.",
        "exampleVi": "Tôi thích đồ ăn Ý."
      },
      {
        "type": "Noun",
        "word": "bread",
        "ipa": "/bred/",
        "meaning": "bánh mì",
        "example": "I have bread for breakfast.",
        "exampleVi": "Tôi ăn bánh mì vào bữa sáng."
      },
      {
        "type": "Noun",
        "word": "rice",
        "ipa": "/raɪs/",
        "meaning": "cơm, gạo",
        "example": "We eat rice every day.",
        "exampleVi": "Chúng tôi ăn cơm mỗi ngày."
      },
      {
        "type": "Noun",
        "word": "pasta",
        "ipa": "/ˈpɑːstə/",
        "meaning": "mì Ý, pasta",
        "example": "I like pasta with tomato sauce.",
        "exampleVi": "Tôi thích mì Ý với sốt cà chua."
      },
      {
        "type": "Noun",
        "word": "salt",
        "ipa": "/sɔːlt/",
        "meaning": "muối",
        "example": "Please pass me the salt.",
        "exampleVi": "Làm ơn đưa tôi lọ muối."
      },
      {
        "type": "Noun",
        "word": "chips",
        "ipa": "/tʃɪps/",
        "meaning": "khoai tây chiên",
        "example": "I like chips with my burger.",
        "exampleVi": "Tôi thích khoai tây chiên với bánh burger."
      },
      {
        "type": "Noun",
        "word": "pepper",
        "ipa": "/ˈpepər/",
        "meaning": "hạt tiêu; tiêu",
        "example": "Add some pepper to the soup.",
        "exampleVi": "Thêm một ít tiêu vào súp."
      },
      {
        "type": "Noun",
        "word": "meat",
        "ipa": "/miːt/",
        "meaning": "thịt",
        "example": "I don't eat much meat.",
        "exampleVi": "Tôi không ăn nhiều thịt."
      },
      {
        "type": "Noun",
        "word": "fish",
        "ipa": "/fɪʃ/",
        "meaning": "cá; thịt cá",
        "example": "We had fish for dinner.",
        "exampleVi": "Chúng tôi ăn cá vào bữa tối."
      },
      {
        "type": "Adjective / Noun",
        "word": "vegetarian",
        "ipa": "/ˌvedʒəˈteriən/",
        "meaning": "ăn chay; người ăn chay",
        "example": "My sister is vegetarian.",
        "exampleVi": "Chị/em gái tôi ăn chay."
      },
      {
        "type": "Noun",
        "word": "sugar",
        "ipa": "/ˈʃʊɡər/",
        "meaning": "đường",
        "example": "I don't take sugar in my tea.",
        "exampleVi": "Tôi không cho đường vào trà."
      },
      {
        "type": "Noun",
        "word": "tea",
        "ipa": "/tiː/",
        "meaning": "trà",
        "example": "Would you like some tea?",
        "exampleVi": "Bạn có muốn uống trà không?"
      },
      {
        "type": "Noun",
        "word": "coffee",
        "ipa": "/ˈkɔːfi/",
        "meaning": "cà phê",
        "example": "I drink coffee every morning.",
        "exampleVi": "Tôi uống cà phê mỗi sáng."
      },
      {
        "type": "Noun",
        "word": "fast food",
        "ipa": "/ˌfæst ˈfuːd/",
        "meaning": "đồ ăn nhanh",
        "example": "Too much fast food is not healthy.",
        "exampleVi": "Ăn quá nhiều đồ ăn nhanh không tốt cho sức khỏe."
      },
      {
        "type": "Noun",
        "word": "hamburger",
        "ipa": "/ˈhæmbɜːrɡər/",
        "meaning": "bánh hamburger",
        "example": "I want a hamburger, please.",
        "exampleVi": "Cho tôi một chiếc hamburger."
      },
      {
        "type": "Noun",
        "word": "hot dog",
        "ipa": "/ˈhɑːt dɔːɡ/",
        "meaning": "bánh mì xúc xích",
        "example": "He ordered a hot dog.",
        "exampleVi": "Anh ấy gọi một chiếc bánh mì xúc xích."
      },
      {
        "type": "Noun",
        "word": "pizza",
        "ipa": "/ˈpiːtsə/",
        "meaning": "bánh pizza",
        "example": "We had pizza for dinner.",
        "exampleVi": "Chúng tôi ăn pizza vào bữa tối."
      },
      {
        "type": "Noun",
        "word": "fruit",
        "ipa": "/fruːt/",
        "meaning": "trái cây, hoa quả",
        "example": "I eat fruit every day.",
        "exampleVi": "Tôi ăn trái cây mỗi ngày."
      },
      {
        "type": "Noun",
        "word": "vegetables",
        "ipa": "/ˈvedʒtəbəlz/",
        "meaning": "rau củ",
        "example": "You should eat more vegetables.",
        "exampleVi": "Bạn nên ăn nhiều rau củ hơn."
      },
      {
        "type": "Noun",
        "word": "carrot",
        "ipa": "/ˈkærət/",
        "meaning": "cà rốt",
        "example": "Rabbits like carrots.",
        "exampleVi": "Thỏ thích cà rốt."
      },
      {
        "type": "Noun",
        "word": "beans",
        "ipa": "/biːnz/",
        "meaning": "đậu, đỗ",
        "example": "I like beans in my soup.",
        "exampleVi": "Tôi thích đậu trong món súp."
      },
      {
        "type": "Noun",
        "word": "potatoes",
        "ipa": "/pəˈteɪtoʊz/",
        "meaning": "khoai tây",
        "example": "We need some potatoes for dinner.",
        "exampleVi": "Chúng ta cần một ít khoai tây cho bữa tối."
      },
      {
        "type": "Noun",
        "word": "tomatoes",
        "ipa": "/təˈmeɪtoʊz/",
        "meaning": "cà chua",
        "example": "I like tomatoes in my salad.",
        "exampleVi": "Tôi thích cà chua trong món salad."
      },
      {
        "type": "Noun",
        "word": "peas",
        "ipa": "/piːz/",
        "meaning": "đậu Hà Lan",
        "example": "The children don't like peas.",
        "exampleVi": "Những đứa trẻ không thích đậu Hà Lan."
      },
      {
        "type": "Noun",
        "word": "onions",
        "ipa": "/ˈʌnjənz/",
        "meaning": "hành tây",
        "example": "I don't like onions.",
        "exampleVi": "Tôi không thích hành tây."
      },
      {
        "type": "Noun",
        "word": "garlic",
        "ipa": "/ˈɡɑːrlɪk/",
        "meaning": "tỏi",
        "example": "This soup has a lot of garlic.",
        "exampleVi": "Món súp này có nhiều tỏi."
      },
      {
        "type": "Noun",
        "word": "mushrooms",
        "ipa": "/ˈmʌʃruːmz/",
        "meaning": "nấm",
        "example": "I like mushrooms on my pizza.",
        "exampleVi": "Tôi thích nấm trên pizza."
      },
      {
        "type": "Noun",
        "word": "orange",
        "ipa": "/ˈɔːrɪndʒ/",
        "meaning": "quả cam",
        "example": "I eat an orange every morning.",
        "exampleVi": "Tôi ăn một quả cam mỗi sáng."
      },
      {
        "type": "Noun",
        "word": "apple",
        "ipa": "/ˈæpəl/",
        "meaning": "quả táo",
        "example": "She is eating an apple.",
        "exampleVi": "Cô ấy đang ăn một quả táo."
      },
      {
        "type": "Noun",
        "word": "banana",
        "ipa": "/bəˈnænə/",
        "meaning": "quả chuối",
        "example": "I have a banana for breakfast.",
        "exampleVi": "Tôi ăn một quả chuối vào bữa sáng."
      },
      {
        "type": "Noun",
        "word": "pear",
        "ipa": "/per/",
        "meaning": "quả lê",
        "example": "This pear is sweet.",
        "exampleVi": "Quả lê này ngọt."
      },
      {
        "type": "Noun",
        "word": "grapes",
        "ipa": "/ɡreɪps/",
        "meaning": "nho",
        "example": "These grapes are very sweet.",
        "exampleVi": "Những quả nho này rất ngọt."
      },
      {
        "type": "Noun",
        "word": "strawberries",
        "ipa": "/ˈstrɔːberiz/",
        "meaning": "dâu tây",
        "example": "I love strawberries.",
        "exampleVi": "Tôi rất thích dâu tây."
      },
      {
        "type": "Noun",
        "word": "pineapple",
        "ipa": "/ˈpaɪnæpəl/",
        "meaning": "quả dứa, quả thơm",
        "example": "This pineapple is very sweet.",
        "exampleVi": "Quả dứa này rất ngọt."
      },
      {
        "type": "Noun",
        "word": "drink",
        "ipa": "/drɪŋk/",
        "meaning": "đồ uống; thức uống",
        "example": "Would you like a drink?",
        "exampleVi": "Bạn có muốn uống gì không?"
      },
      {
        "type": "Noun",
        "word": "tea",
        "ipa": "/tiː/",
        "meaning": "trà",
        "example": "I usually drink tea after dinner.",
        "exampleVi": "Tôi thường uống trà sau bữa tối."
      },
      {
        "type": "Noun",
        "word": "coffee",
        "ipa": "/ˈkɔːfi/",
        "meaning": "cà phê",
        "example": "My father drinks coffee every morning.",
        "exampleVi": "Bố tôi uống cà phê mỗi sáng."
      },
      {
        "type": "Noun",
        "word": "milk",
        "ipa": "/mɪlk/",
        "meaning": "sữa",
        "example": "Children need to drink milk.",
        "exampleVi": "Trẻ em cần uống sữa."
      },
      {
        "type": "Noun",
        "word": "fruit juice",
        "ipa": "/ˈfruːt dʒuːs/",
        "meaning": "nước ép trái cây",
        "example": "I would like some fruit juice.",
        "exampleVi": "Tôi muốn một ít nước ép trái cây."
      },
      {
        "type": "Noun",
        "word": "beer",
        "ipa": "/bɪr/",
        "meaning": "bia",
        "example": "He sometimes drinks beer.",
        "exampleVi": "Thỉnh thoảng anh ấy uống bia."
      },
      {
        "type": "Noun",
        "word": "wine",
        "ipa": "/waɪn/",
        "meaning": "rượu vang",
        "example": "They drink wine with dinner.",
        "exampleVi": "Họ uống rượu vang trong bữa tối."
      },
      {
        "type": "Noun",
        "word": "mineral water",
        "ipa": "/ˈmɪnərəl ˌwɔːtər/",
        "meaning": "nước khoáng",
        "example": "Can I have some mineral water?",
        "exampleVi": "Cho tôi một ít nước khoáng được không?"
      }
    ]
  },
  {
    "id": 11,
    "title": "In the kitchen",
    "words": [
      {
        "type": "Noun",
        "word": "fridge",
        "ipa": "/frɪdʒ/",
        "meaning": "tủ lạnh",
        "example": "The milk is in the fridge.",
        "exampleVi": "Sữa ở trong tủ lạnh."
      },
      {
        "type": "Noun",
        "word": "freezer",
        "ipa": "/ˈfriːzər/",
        "meaning": "ngăn đá, tủ đông",
        "example": "The ice cream is in the freezer.",
        "exampleVi": "Kem ở trong ngăn đá."
      },
      {
        "type": "Noun",
        "word": "bin",
        "ipa": "/bɪn/",
        "meaning": "thùng rác",
        "example": "Put the paper in the bin.",
        "exampleVi": "Hãy bỏ tờ giấy vào thùng rác."
      },
      {
        "type": "Noun",
        "word": "washing machine",
        "ipa": "/ˈwɑːʃɪŋ məˌʃiːn/",
        "meaning": "máy giặt",
        "example": "The washing machine is in the kitchen.",
        "exampleVi": "Máy giặt ở trong bếp."
      },
      {
        "type": "Noun",
        "word": "sink",
        "ipa": "/sɪŋk/",
        "meaning": "bồn rửa",
        "example": "The plates are in the sink.",
        "exampleVi": "Những cái đĩa ở trong bồn rửa."
      },
      {
        "type": "Noun",
        "word": "tap",
        "ipa": "/tæp/",
        "meaning": "vòi nước",
        "example": "Turn off the tap, please.",
        "exampleVi": "Làm ơn khóa vòi nước."
      },
      {
        "type": "Noun",
        "word": "microwave",
        "ipa": "/ˈmaɪkrəweɪv/",
        "meaning": "lò vi sóng",
        "example": "Heat the food in the microwave.",
        "exampleVi": "Hâm nóng thức ăn trong lò vi sóng."
      },
      {
        "type": "Noun",
        "word": "cupboard",
        "ipa": "/ˈkʌbərd/",
        "meaning": "tủ đựng đồ",
        "example": "The cups are in the cupboard.",
        "exampleVi": "Những chiếc cốc ở trong tủ."
      },
      {
        "type": "Noun",
        "word": "cooker",
        "ipa": "/ˈkʊkər/",
        "meaning": "bếp nấu, bếp lò",
        "example": "The cooker is very hot.",
        "exampleVi": "Bếp rất nóng."
      },
      {
        "type": "Noun",
        "word": "shelf",
        "ipa": "/ʃelf/",
        "meaning": "kệ, giá",
        "example": "The plates are on the shelf.",
        "exampleVi": "Những chiếc đĩa ở trên kệ."
      },
      {
        "type": "Noun",
        "word": "worktop",
        "ipa": "/ˈwɜːrktɑːp/",
        "meaning": "mặt bàn bếp, bề mặt làm việc trong bếp",
        "example": "The knife is on the worktop.",
        "exampleVi": "Con dao ở trên mặt bàn bếp."
      },
      {
        "type": "Noun",
        "word": "dishwasher",
        "ipa": "/ˈdɪʃˌwɑːʃər/",
        "meaning": "máy rửa bát",
        "example": "Put the plates in the dishwasher.",
        "exampleVi": "Hãy cho những chiếc đĩa vào máy rửa bát."
      },
      {
        "type": "Noun",
        "word": "washing-up liquid",
        "ipa": "/ˈwɑːʃɪŋ ʌp ˌlɪkwɪd/",
        "meaning": "nước rửa bát",
        "example": "We need some washing-up liquid.",
        "exampleVi": "Chúng ta cần một ít nước rửa bát."
      },
      {
        "type": "Noun",
        "word": "tea towel",
        "ipa": "/ˈtiː ˌtaʊəl/",
        "meaning": "khăn lau bát/khăn lau bếp",
        "example": "Use the tea towel to dry the cups.",
        "exampleVi": "Dùng khăn lau bếp để lau khô những chiếc cốc."
      },
      {
        "type": "Noun",
        "word": "saucepan",
        "ipa": "/ˈsɔːspən/",
        "meaning": "nồi nhỏ có cán",
        "example": "Put the soup in the saucepan.",
        "exampleVi": "Cho súp vào nồi."
      },
      {
        "type": "Noun",
        "word": "frying pan",
        "ipa": "/ˈfraɪɪŋ pæn/",
        "meaning": "chảo rán",
        "example": "Cook the eggs in the frying pan.",
        "exampleVi": "Nấu trứng trong chảo."
      },
      {
        "type": "Noun",
        "word": "teapot",
        "ipa": "/ˈtiːpɑːt/",
        "meaning": "ấm trà",
        "example": "The tea is in the teapot.",
        "exampleVi": "Trà ở trong ấm trà."
      },
      {
        "type": "Noun",
        "word": "cloth",
        "ipa": "/klɔːθ/",
        "meaning": "khăn lau",
        "example": "Use a cloth to clean the table.",
        "exampleVi": "Dùng khăn để lau bàn."
      },
      {
        "type": "Noun",
        "word": "coffee maker",
        "ipa": "/ˈkɔːfi ˌmeɪkər/",
        "meaning": "máy pha cà phê",
        "example": "The coffee maker is on the worktop.",
        "exampleVi": "Máy pha cà phê ở trên mặt bàn bếp."
      },
      {
        "type": "Noun",
        "word": "kitchen roll",
        "ipa": "/ˈkɪtʃən roʊl/",
        "meaning": "giấy lau bếp",
        "example": "Use some kitchen roll to clean the table.",
        "exampleVi": "Dùng một ít giấy lau bếp để lau bàn."
      },
      {
        "type": "Noun",
        "word": "cup",
        "ipa": "/kʌp/",
        "meaning": "tách, cốc",
        "example": "There is a cup on the table.",
        "exampleVi": "Có một cái cốc trên bàn."
      },
      {
        "type": "Noun",
        "word": "plate",
        "ipa": "/pleɪt/",
        "meaning": "đĩa",
        "example": "Put the food on the plate.",
        "exampleVi": "Đặt thức ăn lên đĩa."
      },
      {
        "type": "Noun",
        "word": "bowl",
        "ipa": "/boʊl/",
        "meaning": "bát, tô",
        "example": "The soup is in the bowl.",
        "exampleVi": "Súp ở trong bát."
      },
      {
        "type": "Noun",
        "word": "fork",
        "ipa": "/fɔːrk/",
        "meaning": "cái nĩa",
        "example": "I eat with a fork.",
        "exampleVi": "Tôi ăn bằng nĩa."
      },
      {
        "type": "Noun",
        "word": "knife",
        "ipa": "/naɪf/",
        "meaning": "con dao",
        "example": "Be careful with the knife.",
        "exampleVi": "Hãy cẩn thận với con dao."
      },
      {
        "type": "Noun",
        "word": "chopsticks",
        "ipa": "/ˈtʃɑːpˌstɪks/",
        "meaning": "đũa",
        "example": "I eat rice with chopsticks.",
        "exampleVi": "Tôi ăn cơm bằng đũa."
      },
      {
        "type": "Noun",
        "word": "spoon",
        "ipa": "/spuːn/",
        "meaning": "cái thìa, muỗng",
        "example": "I need a spoon for my soup.",
        "exampleVi": "Tôi cần một cái thìa để ăn súp."
      },
      {
        "type": "Noun",
        "word": "mug",
        "ipa": "/mʌɡ/",
        "meaning": "cốc có quai, ca",
        "example": "This is my coffee mug.",
        "exampleVi": "Đây là cốc cà phê của tôi."
      },
      {
        "type": "Noun",
        "word": "glass",
        "ipa": "/ɡlæs/",
        "meaning": "cốc thủy tinh; ly",
        "example": "Can I have a glass of water?",
        "exampleVi": "Cho tôi một cốc nước được không?"
      },
      {
        "type": "Question phrase",
        "word": "Where can I find ...?",
        "ipa": "/wer kən aɪ faɪnd/",
        "meaning": "Tôi có thể tìm ... ở đâu?",
        "example": "Where can I find the cups?",
        "exampleVi": "Tôi có thể tìm những cái cốc ở đâu?"
      },
      {
        "type": "Question phrase",
        "word": "Can I help with the ...?",
        "ipa": "/kən aɪ help wɪð ðə/",
        "meaning": "Tôi có thể giúp việc ... không?",
        "example": "Can I help with the washing-up?",
        "exampleVi": "Tôi có thể giúp rửa bát không?"
      },
      {
        "type": "Verb",
        "word": "dry",
        "ipa": "/draɪ/",
        "meaning": "làm khô; lau khô",
        "example": "Please dry the plates.",
        "exampleVi": "Làm ơn lau khô những chiếc đĩa."
      },
      {
        "type": "Verb",
        "word": "cook",
        "ipa": "/kʊk/",
        "meaning": "nấu ăn",
        "example": "I cook dinner every day.",
        "exampleVi": "Tôi nấu bữa tối mỗi ngày."
      },
      {
        "type": "Question phrase",
        "word": "Where does ... go?",
        "ipa": "/wer dʌz ... ɡoʊ/",
        "meaning": "…nên cất ở đâu?",
        "example": "Where does this plate go?",
        "exampleVi": "Cái đĩa này để ở đâu?"
      }
    ]
  },
  {
    "id": 12,
    "title": "In the bedroom and bathroom",
    "words": [
      {
        "type": "Noun",
        "word": "bedroom",
        "ipa": "/ˈbedruːm/",
        "meaning": "phòng ngủ",
        "example": "My bedroom is small.",
        "exampleVi": "Phòng ngủ của tôi nhỏ."
      },
      {
        "type": "Noun",
        "word": "bed",
        "ipa": "/bed/",
        "meaning": "giường",
        "example": "I am in bed.",
        "exampleVi": "Tôi đang ở trên giường."
      },
      {
        "type": "Noun",
        "word": "bedside lamp",
        "ipa": "/ˈbedsaɪd læmp/",
        "meaning": "đèn ngủ, đèn cạnh giường",
        "example": "I turn on the bedside lamp.",
        "exampleVi": "Tôi bật đèn ngủ."
      },
      {
        "type": "Noun",
        "word": "alarm clock",
        "ipa": "/əˈlɑːrm klɑːk/",
        "meaning": "đồng hồ báo thức",
        "example": "My alarm clock rings at seven.",
        "exampleVi": "Đồng hồ báo thức của tôi reo lúc bảy giờ."
      },
      {
        "type": "Noun",
        "word": "dressing table",
        "ipa": "/ˈdresɪŋ ˌteɪbəl/",
        "meaning": "bàn trang điểm",
        "example": "Her mirror is on the dressing table.",
        "exampleVi": "Gương của cô ấy ở trên bàn trang điểm."
      },
      {
        "type": "Noun",
        "word": "comb",
        "ipa": "/koʊm/",
        "meaning": "cái lược",
        "example": "I need a comb.",
        "exampleVi": "Tôi cần một cái lược."
      },
      {
        "type": "Noun",
        "word": "hairbrush",
        "ipa": "/ˈherbrʌʃ/",
        "meaning": "bàn chải tóc, lược chải tóc",
        "example": "She uses a hairbrush every morning.",
        "exampleVi": "Cô ấy dùng lược chải tóc mỗi sáng."
      },
      {
        "type": "Noun",
        "word": "bedside table",
        "ipa": "/ˈbedsaɪd ˌteɪbəl/",
        "meaning": "bàn cạnh giường",
        "example": "My phone is on the bedside table.",
        "exampleVi": "Điện thoại của tôi ở trên bàn cạnh giường."
      },
      {
        "type": "Noun",
        "word": "wardrobe",
        "ipa": "/ˈwɔːrˌdroʊb/",
        "meaning": "tủ quần áo",
        "example": "My clothes are in the wardrobe.",
        "exampleVi": "Quần áo của tôi ở trong tủ quần áo."
      },
      {
        "type": "Noun",
        "word": "mirror",
        "ipa": "/ˈmɪrər/",
        "meaning": "gương",
        "example": "Look in the mirror.",
        "exampleVi": "Hãy nhìn vào gương."
      },
      {
        "type": "Noun",
        "word": "chest of drawers",
        "ipa": "/ˌtʃest əv ˈdrɔːrz/",
        "meaning": "tủ có nhiều ngăn kéo",
        "example": "My socks are in the chest of drawers.",
        "exampleVi": "Tất của tôi ở trong tủ ngăn kéo."
      },
      {
        "type": "Noun",
        "word": "bathroom",
        "ipa": "/ˈbæθruːm/",
        "meaning": "phòng tắm, nhà vệ sinh",
        "example": "The bathroom is upstairs.",
        "exampleVi": "Phòng tắm ở trên tầng."
      },
      {
        "type": "Noun",
        "word": "shower",
        "ipa": "/ˈʃaʊər/",
        "meaning": "vòi sen; vòi tắm; việc tắm vòi sen",
        "example": "I have a shower every morning.",
        "exampleVi": "Tôi tắm vòi sen mỗi sáng."
      },
      {
        "type": "Noun",
        "word": "soap",
        "ipa": "/soʊp/",
        "meaning": "xà phòng",
        "example": "The soap is next to the sink.",
        "exampleVi": "Xà phòng ở cạnh bồn rửa."
      },
      {
        "type": "Noun",
        "word": "toothpaste",
        "ipa": "/ˈtuːθpeɪst/",
        "meaning": "kem đánh răng",
        "example": "I need some toothpaste.",
        "exampleVi": "Tôi cần một ít kem đánh răng."
      },
      {
        "type": "Noun",
        "word": "toothbrush",
        "ipa": "/ˈtuːθbrʌʃ/",
        "meaning": "bàn chải đánh răng",
        "example": "My toothbrush is blue.",
        "exampleVi": "Bàn chải đánh răng của tôi màu xanh."
      },
      {
        "type": "Noun",
        "word": "shelf",
        "ipa": "/ʃelf/",
        "meaning": "kệ, giá",
        "example": "The shampoo is on the shelf.",
        "exampleVi": "Dầu gội ở trên kệ."
      },
      {
        "type": "Noun",
        "word": "basin",
        "ipa": "/ˈbeɪsən/",
        "meaning": "bồn rửa mặt",
        "example": "Wash your hands in the basin.",
        "exampleVi": "Hãy rửa tay trong bồn rửa mặt."
      },
      {
        "type": "Noun",
        "word": "towel",
        "ipa": "/ˈtaʊəl/",
        "meaning": "khăn tắm, khăn lau",
        "example": "I need a clean towel.",
        "exampleVi": "Tôi cần một chiếc khăn sạch."
      },
      {
        "type": "Noun",
        "word": "toilet",
        "ipa": "/ˈtɔɪlət/",
        "meaning": "bồn cầu; nhà vệ sinh",
        "example": "The toilet is in the bathroom.",
        "exampleVi": "Bồn cầu ở trong phòng tắm."
      },
      {
        "type": "Noun",
        "word": "razor",
        "ipa": "/ˈreɪzər/",
        "meaning": "dao cạo",
        "example": "My father uses a razor every morning.",
        "exampleVi": "Bố tôi dùng dao cạo mỗi sáng."
      },
      {
        "type": "Noun",
        "word": "shower gel",
        "ipa": "/ˈʃaʊər dʒel/",
        "meaning": "sữa tắm",
        "example": "The shower gel is in the bathroom.",
        "exampleVi": "Sữa tắm ở trong phòng tắm."
      },
      {
        "type": "Noun",
        "word": "shampoo",
        "ipa": "/ʃæmˈpuː/",
        "meaning": "dầu gội",
        "example": "I use this shampoo.",
        "exampleVi": "Tôi dùng loại dầu gội này."
      },
      {
        "type": "Verb phrase",
        "word": "go to bed",
        "ipa": "/ɡoʊ tə bed/",
        "meaning": "đi ngủ, lên giường",
        "example": "I go to bed at ten.",
        "exampleVi": "Tôi đi ngủ lúc mười giờ."
      },
      {
        "type": "Verb phrase",
        "word": "go upstairs",
        "ipa": "/ɡoʊ ʌpˈsterz/",
        "meaning": "đi lên tầng trên",
        "example": "She goes upstairs to her bedroom.",
        "exampleVi": "Cô ấy đi lên tầng đến phòng ngủ."
      },
      {
        "type": "Phrasal verb",
        "word": "turn off",
        "ipa": "/tɜːrn ɔːf/",
        "meaning": "tắt",
        "example": "Please turn off the light.",
        "exampleVi": "Làm ơn tắt đèn."
      },
      {
        "type": "Verb phrase",
        "word": "fall asleep",
        "ipa": "/fɔːl əˈsliːp/",
        "meaning": "ngủ thiếp đi, chìm vào giấc ngủ",
        "example": "I fall asleep very quickly.",
        "exampleVi": "Tôi ngủ thiếp đi rất nhanh."
      },
      {
        "type": "Phrasal verb",
        "word": "wake up",
        "ipa": "/weɪk ʌp/",
        "meaning": "thức dậy",
        "example": "I wake up at six.",
        "exampleVi": "Tôi thức dậy lúc sáu giờ."
      },
      {
        "type": "Phrasal verb",
        "word": "get up",
        "ipa": "/ɡet ʌp/",
        "meaning": "thức dậy và rời khỏi giường",
        "example": "I get up at seven.",
        "exampleVi": "Tôi ra khỏi giường lúc bảy giờ."
      },
      {
        "type": "Verb phrase",
        "word": "have a shower",
        "ipa": "/hæv ə ˈʃaʊər/",
        "meaning": "tắm vòi sen",
        "example": "I have a shower in the morning.",
        "exampleVi": "Tôi tắm vòi sen vào buổi sáng."
      },
      {
        "type": "Verb phrase",
        "word": "clean her teeth",
        "ipa": "/kliːn hər tiːθ/",
        "meaning": "đánh răng (cô ấy)",
        "example": "She cleans her teeth every morning.",
        "exampleVi": "Cô ấy đánh răng mỗi sáng."
      },
      {
        "type": "Verb phrase",
        "word": "get undressed",
        "ipa": "/ɡet ʌnˈdrest/",
        "meaning": "cởi quần áo, thay đồ",
        "example": "I get undressed before bed.",
        "exampleVi": "Tôi cởi quần áo trước khi đi ngủ."
      },
      {
        "type": "Verb phrase",
        "word": "get dressed",
        "ipa": "/ɡet drest/",
        "meaning": "mặc quần áo, thay đồ",
        "example": "I get dressed after breakfast.",
        "exampleVi": "Tôi mặc quần áo sau bữa sáng."
      },
      {
        "type": "Verb phrase",
        "word": "go downstairs",
        "ipa": "/ɡoʊ ˌdaʊnˈsterz/",
        "meaning": "đi xuống tầng dưới",
        "example": "I go downstairs for breakfast.",
        "exampleVi": "Tôi đi xuống tầng dưới để ăn sáng."
      }
    ]
  },
  {
    "id": 13,
    "title": "In the living room",
    "words": [
      {
        "type": "Noun",
        "word": "living room",
        "ipa": "/ˈlɪvɪŋ ruːm/",
        "meaning": "phòng khách",
        "example": "We watch TV in the living room.",
        "exampleVi": "Chúng tôi xem TV trong phòng khách."
      },
      {
        "type": "Noun",
        "word": "book",
        "ipa": "/bʊk/",
        "meaning": "sách",
        "example": "I am reading a book.",
        "exampleVi": "Tôi đang đọc một quyển sách."
      },
      {
        "type": "Noun",
        "word": "bookshelf",
        "ipa": "/ˈbʊkʃelf/",
        "meaning": "giá sách, kệ sách",
        "example": "The books are on the bookshelf.",
        "exampleVi": "Những quyển sách ở trên giá sách."
      },
      {
        "type": "Noun",
        "word": "light switch",
        "ipa": "/ˈlaɪt swɪtʃ/",
        "meaning": "công tắc đèn",
        "example": "The light switch is next to the door.",
        "exampleVi": "Công tắc đèn ở cạnh cửa."
      },
      {
        "type": "Noun",
        "word": "light",
        "ipa": "/laɪt/",
        "meaning": "đèn; ánh sáng",
        "example": "Turn on the light, please.",
        "exampleVi": "Làm ơn bật đèn."
      },
      {
        "type": "Noun",
        "word": "TV",
        "ipa": "/ˌtiːˈviː/",
        "meaning": "TV, tivi",
        "example": "The TV is on.",
        "exampleVi": "TV đang bật."
      },
      {
        "type": "Noun",
        "word": "picture",
        "ipa": "/ˈpɪktʃər/",
        "meaning": "bức tranh, bức ảnh",
        "example": "There is a picture on the wall.",
        "exampleVi": "Có một bức tranh trên tường."
      },
      {
        "type": "Noun",
        "word": "lamp",
        "ipa": "/læmp/",
        "meaning": "đèn",
        "example": "The lamp is on the table.",
        "exampleVi": "Cái đèn ở trên bàn."
      },
      {
        "type": "Noun",
        "word": "window",
        "ipa": "/ˈwɪndoʊ/",
        "meaning": "cửa sổ",
        "example": "Please open the window.",
        "exampleVi": "Làm ơn mở cửa sổ."
      },
      {
        "type": "Noun",
        "word": "curtain",
        "ipa": "/ˈkɜːrtn/",
        "meaning": "rèm cửa",
        "example": "The curtains are closed.",
        "exampleVi": "Rèm cửa đang đóng."
      },
      {
        "type": "Noun",
        "word": "sofa",
        "ipa": "/ˈsoʊfə/",
        "meaning": "ghế sofa",
        "example": "We sit on the sofa.",
        "exampleVi": "Chúng tôi ngồi trên ghế sofa."
      },
      {
        "type": "Noun",
        "word": "hi-fi",
        "ipa": "/ˈhaɪ faɪ/",
        "meaning": "dàn âm thanh, thiết bị nghe nhạc",
        "example": "The hi-fi is next to the TV.",
        "exampleVi": "Dàn âm thanh ở cạnh TV."
      },
      {
        "type": "Noun",
        "word": "table",
        "ipa": "/ˈteɪbəl/",
        "meaning": "cái bàn",
        "example": "The book is on the table.",
        "exampleVi": "Quyển sách ở trên bàn."
      },
      {
        "type": "Noun",
        "word": "chair",
        "ipa": "/tʃer/",
        "meaning": "cái ghế",
        "example": "She is sitting on a chair.",
        "exampleVi": "Cô ấy đang ngồi trên một cái ghế."
      },
      {
        "type": "Noun",
        "word": "socket",
        "ipa": "/ˈsɑːkɪt/",
        "meaning": "ổ cắm điện",
        "example": "The lamp is plugged into the socket.",
        "exampleVi": "Cái đèn được cắm vào ổ điện."
      },
      {
        "type": "Noun",
        "word": "rug",
        "ipa": "/rʌɡ/",
        "meaning": "tấm thảm nhỏ",
        "example": "There is a rug under the table.",
        "exampleVi": "Có một tấm thảm dưới bàn."
      },
      {
        "type": "Noun",
        "word": "carpet",
        "ipa": "/ˈkɑːrpɪt/",
        "meaning": "thảm trải sàn",
        "example": "The bedroom has a blue carpet.",
        "exampleVi": "Phòng ngủ có một tấm thảm màu xanh."
      },
      {
        "type": "Noun",
        "word": "remote control",
        "ipa": "/rɪˈmoʊt kənˌtroʊl/",
        "meaning": "điều khiển từ xa",
        "example": "Where is the remote control?",
        "exampleVi": "Điều khiển từ xa ở đâu?"
      },
      {
        "type": "Noun",
        "word": "coffee table",
        "ipa": "/ˈkɔːfi ˌteɪbəl/",
        "meaning": "bàn trà, bàn thấp trước sofa",
        "example": "The cups are on the coffee table.",
        "exampleVi": "Những chiếc cốc ở trên bàn trà."
      },
      {
        "type": "Noun",
        "word": "phone",
        "ipa": "/foʊn/",
        "meaning": "điện thoại",
        "example": "My phone is on the sofa.",
        "exampleVi": "Điện thoại của tôi ở trên ghế sofa."
      },
      {
        "type": "Noun",
        "word": "armchair",
        "ipa": "/ˈɑːrmˌtʃer/",
        "meaning": "ghế bành",
        "example": "Grandpa is sitting in the armchair.",
        "exampleVi": "Ông đang ngồi trên ghế bành."
      },
      {
        "type": "Verb phrase",
        "word": "watch television",
        "ipa": "/wɑːtʃ ˈteləˌvɪʒən/",
        "meaning": "xem tivi",
        "example": "We watch television after dinner.",
        "exampleVi": "Chúng tôi xem tivi sau bữa tối."
      },
      {
        "type": "Verb phrase",
        "word": "listen to the radio",
        "ipa": "/ˈlɪsən tə ðə ˈreɪdioʊ/",
        "meaning": "nghe đài",
        "example": "My father listens to the radio in the morning.",
        "exampleVi": "Bố tôi nghe đài vào buổi sáng."
      },
      {
        "type": "Verb phrase",
        "word": "listen to music",
        "ipa": "/ˈlɪsən tə ˈmjuːzɪk/",
        "meaning": "nghe nhạc",
        "example": "I listen to music every day.",
        "exampleVi": "Tôi nghe nhạc mỗi ngày."
      },
      {
        "type": "Verb phrase",
        "word": "read a book",
        "ipa": "/riːd ə bʊk/",
        "meaning": "đọc sách",
        "example": "I read a book before bed.",
        "exampleVi": "Tôi đọc sách trước khi đi ngủ."
      },
      {
        "type": "Verb phrase",
        "word": "just relax",
        "ipa": "/dʒʌst rɪˈlæks/",
        "meaning": "chỉ thư giãn, cứ thư giãn",
        "example": "I sit on the sofa and just relax.",
        "exampleVi": "Tôi ngồi trên sofa và chỉ thư giãn."
      },
      {
        "type": "Verb phrase",
        "word": "close the curtains",
        "ipa": "/kloʊz ðə ˈkɜːrtnz/",
        "meaning": "đóng rèm cửa",
        "example": "Please close the curtains.",
        "exampleVi": "Làm ơn đóng rèm cửa."
      },
      {
        "type": "Verb phrase",
        "word": "switch the light",
        "ipa": "/swɪtʃ ðə laɪt/",
        "meaning": "bật/tắt đèn",
        "example": "Please switch the light on.",
        "exampleVi": "Làm ơn bật đèn."
      },
      {
        "type": "Phrasal verb",
        "word": "turn the radio off",
        "ipa": "/tɜːrn ðə ˈreɪdioʊ ɔːf/",
        "meaning": "tắt radio",
        "example": "Please turn the radio off.",
        "exampleVi": "Làm ơn tắt radio."
      },
      {
        "type": "Phrase",
        "word": "pass me the remote control",
        "ipa": "/pæs mi ðə rɪˈmoʊt kənˌtroʊl/",
        "meaning": "đưa điều khiển từ xa cho tôi",
        "example": "Pass me the remote control, please.",
        "exampleVi": "Làm ơn đưa điều khiển từ xa cho tôi."
      },
      {
        "type": "Phrasal verb",
        "word": "turn on the TV",
        "ipa": "/tɜːrn ɑːn ðə ˌtiːˈviː/",
        "meaning": "bật TV",
        "example": "Please turn on the TV.",
        "exampleVi": "Làm ơn bật TV."
      }
    ]
  },
  {
    "id": 14,
    "title": "Jobs",
    "words": [
      {
        "type": "Noun",
        "word": "job",
        "ipa": "/dʒɑːb/",
        "meaning": "công việc, việc làm",
        "example": "I have a new job.",
        "exampleVi": "Tôi có một công việc mới."
      },
      {
        "type": "Noun",
        "word": "doctor",
        "ipa": "/ˈdɑːktər/",
        "meaning": "bác sĩ",
        "example": "My mother is a doctor.",
        "exampleVi": "Mẹ tôi là bác sĩ."
      },
      {
        "type": "Noun",
        "word": "teacher",
        "ipa": "/ˈtiːtʃər/",
        "meaning": "giáo viên",
        "example": "She is a teacher.",
        "exampleVi": "Cô ấy là giáo viên."
      },
      {
        "type": "Noun",
        "word": "nurse",
        "ipa": "/nɜːrs/",
        "meaning": "y tá, điều dưỡng",
        "example": "The nurse helps the doctor.",
        "exampleVi": "Y tá giúp bác sĩ."
      },
      {
        "type": "Noun",
        "word": "mechanic",
        "ipa": "/məˈkænɪk/",
        "meaning": "thợ sửa chữa, thợ máy",
        "example": "My brother is a mechanic.",
        "exampleVi": "Anh/em trai tôi là thợ máy."
      },
      {
        "type": "Noun",
        "word": "secretary",
        "ipa": "/ˈsekrəteri/",
        "meaning": "thư ký",
        "example": "She works as a secretary.",
        "exampleVi": "Cô ấy làm thư ký."
      },
      {
        "type": "Noun",
        "word": "shop assistant",
        "ipa": "/ˈʃɑːp əˌsɪstənt/",
        "meaning": "nhân viên bán hàng",
        "example": "The shop assistant is very helpful.",
        "exampleVi": "Nhân viên bán hàng rất nhiệt tình."
      },
      {
        "type": "Noun",
        "word": "hairdresser",
        "ipa": "/ˈherdresər/",
        "meaning": "thợ làm tóc",
        "example": "The hairdresser cuts my hair.",
        "exampleVi": "Thợ làm tóc cắt tóc cho tôi."
      },
      {
        "type": "Noun",
        "word": "engineer",
        "ipa": "/ˌendʒɪˈnɪr/",
        "meaning": "kỹ sư",
        "example": "My father is an engineer.",
        "exampleVi": "Bố tôi là một kỹ sư."
      },
      {
        "type": "Noun",
        "word": "farmer",
        "ipa": "/ˈfɑːrmər/",
        "meaning": "nông dân",
        "example": "The farmer works on a farm.",
        "exampleVi": "Người nông dân làm việc ở trang trại."
      },
      {
        "type": "Noun",
        "word": "police officer",
        "ipa": "/pəˈliːs ˌɑːfɪsər/",
        "meaning": "cảnh sát",
        "example": "The police officer helps people.",
        "exampleVi": "Cảnh sát giúp đỡ mọi người."
      },
      {
        "type": "Noun",
        "word": "traffic warden",
        "ipa": "/ˈtræfɪk ˌwɔːrdn/",
        "meaning": "nhân viên kiểm soát giao thông",
        "example": "The traffic warden checks the cars.",
        "exampleVi": "Nhân viên kiểm soát giao thông kiểm tra các xe."
      },
      {
        "type": "Noun",
        "word": "librarian",
        "ipa": "/laɪˈbreriən/",
        "meaning": "thủ thư",
        "example": "The librarian works in a library.",
        "exampleVi": "Thủ thư làm việc trong thư viện."
      },
      {
        "type": "Noun",
        "word": "bank clerk",
        "ipa": "/ˈbæŋk klɜːrk/",
        "meaning": "nhân viên ngân hàng",
        "example": "The bank clerk helps me.",
        "exampleVi": "Nhân viên ngân hàng giúp tôi."
      },
      {
        "type": "Noun",
        "word": "waiter",
        "ipa": "/ˈweɪtər/",
        "meaning": "bồi bàn, nhân viên phục vụ nam",
        "example": "The waiter brings our food.",
        "exampleVi": "Người phục vụ mang đồ ăn cho chúng tôi."
      },
      {
        "type": "Noun",
        "word": "restaurant",
        "ipa": "/ˈrestərɑːnt/",
        "meaning": "nhà hàng",
        "example": "She works in a restaurant.",
        "exampleVi": "Cô ấy làm việc trong một nhà hàng."
      },
      {
        "type": "Noun",
        "word": "taxi driver",
        "ipa": "/ˈtæksi ˌdraɪvər/",
        "meaning": "tài xế taxi",
        "example": "The taxi driver takes me home.",
        "exampleVi": "Tài xế taxi đưa tôi về nhà."
      },
      {
        "type": "Noun",
        "word": "office",
        "ipa": "/ˈɔːfɪs/",
        "meaning": "văn phòng",
        "example": "My father works in an office.",
        "exampleVi": "Bố tôi làm việc trong một văn phòng."
      },
      {
        "type": "Noun",
        "word": "factory",
        "ipa": "/ˈfæktəri/",
        "meaning": "nhà máy",
        "example": "He works in a factory.",
        "exampleVi": "Anh ấy làm việc trong một nhà máy."
      },
      {
        "type": "Noun",
        "word": "shop",
        "ipa": "/ʃɑːp/",
        "meaning": "cửa hàng",
        "example": "She works in a shop.",
        "exampleVi": "Cô ấy làm việc trong một cửa hàng."
      },
      {
        "type": "Noun",
        "word": "beauty salon",
        "ipa": "/ˈbjuːti səˌlɑːn/",
        "meaning": "tiệm làm đẹp, salon",
        "example": "My sister works in a beauty salon.",
        "exampleVi": "Chị/em gái tôi làm việc ở một salon làm đẹp."
      },
      {
        "type": "Noun",
        "word": "hospital",
        "ipa": "/ˈhɑːspɪtl/",
        "meaning": "bệnh viện",
        "example": "The doctor works at a hospital.",
        "exampleVi": "Bác sĩ làm việc tại bệnh viện."
      },
      {
        "type": "Verb phrase",
        "word": "work at",
        "ipa": "/wɜːrk æt/",
        "meaning": "làm việc tại (một địa điểm/cơ quan)",
        "example": "I work at a hospital.",
        "exampleVi": "Tôi làm việc tại một bệnh viện."
      },
      {
        "type": "Verb phrase",
        "word": "work from",
        "ipa": "/wɜːrk frəm/",
        "meaning": "làm việc từ (một địa điểm)",
        "example": "I work from home.",
        "exampleVi": "Tôi làm việc tại nhà."
      }
    ]
  },
  {
    "id": 15,
    "title": "At school and university",
    "words": [
      {
        "type": "Noun",
        "word": "subject",
        "ipa": "/ˈsʌbdʒɪkt/",
        "meaning": "môn học",
        "example": "English is my favorite subject.",
        "exampleVi": "Tiếng Anh là môn học yêu thích của tôi."
      },
      {
        "type": "Noun",
        "word": "English",
        "ipa": "/ˈɪŋɡlɪʃ/",
        "meaning": "môn Tiếng Anh; tiếng Anh",
        "example": "I study English at school.",
        "exampleVi": "Tôi học tiếng Anh ở trường."
      },
      {
        "type": "Noun",
        "word": "maths",
        "ipa": "/mæθs/",
        "meaning": "môn Toán",
        "example": "I like maths.",
        "exampleVi": "Tôi thích môn Toán."
      },
      {
        "type": "Noun",
        "word": "art",
        "ipa": "/ɑːrt/",
        "meaning": "môn Mỹ thuật, nghệ thuật",
        "example": "We have art on Monday.",
        "exampleVi": "Chúng tôi học Mỹ thuật vào thứ Hai."
      },
      {
        "type": "Noun",
        "word": "history",
        "ipa": "/ˈhɪstəri/",
        "meaning": "môn Lịch sử",
        "example": "History is interesting.",
        "exampleVi": "Lịch sử rất thú vị."
      },
      {
        "type": "Noun",
        "word": "geography",
        "ipa": "/dʒiˈɑːɡrəfi/",
        "meaning": "môn Địa lý",
        "example": "I study geography at school.",
        "exampleVi": "Tôi học Địa lý ở trường."
      },
      {
        "type": "Noun",
        "word": "biology",
        "ipa": "/baɪˈɑːlədʒi/",
        "meaning": "môn Sinh học",
        "example": "She studies biology.",
        "exampleVi": "Cô ấy học Sinh học."
      },
      {
        "type": "Noun",
        "word": "ICT (Information and Communication Technology)",
        "ipa": "/ˌaɪ siː ˈtiː/",
        "meaning": "công nghệ thông tin và truyền thông",
        "example": "We study ICT at school.",
        "exampleVi": "Chúng tôi học Công nghệ thông tin ở trường."
      },
      {
        "type": "Noun",
        "word": "PE (Physical Education)",
        "ipa": "/ˌpiː ˈiː/",
        "meaning": "môn Giáo dục thể chất, thể dục",
        "example": "I like PE because I love sports.",
        "exampleVi": "Tôi thích thể dục vì tôi yêu thể thao."
      },
      {
        "type": "Noun",
        "word": "chemistry",
        "ipa": "/ˈkemɪstri/",
        "meaning": "môn Hóa học",
        "example": "Chemistry is difficult for me.",
        "exampleVi": "Hóa học khó đối với tôi."
      },
      {
        "type": "Noun",
        "word": "modern languages",
        "ipa": "/ˌmɑːdərn ˈlæŋɡwɪdʒɪz/",
        "meaning": "các ngoại ngữ hiện đại",
        "example": "We study modern languages at school.",
        "exampleVi": "Chúng tôi học các ngoại ngữ ở trường."
      },
      {
        "type": "Noun",
        "word": "physics",
        "ipa": "/ˈfɪzɪks/",
        "meaning": "môn Vật lý",
        "example": "My brother likes physics.",
        "exampleVi": "Anh/em trai tôi thích Vật lý."
      },
      {
        "type": "Noun",
        "word": "music",
        "ipa": "/ˈmjuːzɪk/",
        "meaning": "môn Âm nhạc; âm nhạc",
        "example": "I have music on Friday.",
        "exampleVi": "Tôi học Âm nhạc vào thứ Sáu."
      },
      {
        "type": "Noun",
        "word": "rubber",
        "ipa": "/ˈrʌbər/",
        "meaning": "cục tẩy",
        "example": "I need a rubber.",
        "exampleVi": "Tôi cần một cục tẩy."
      },
      {
        "type": "Noun",
        "word": "board",
        "ipa": "/bɔːrd/",
        "meaning": "bảng",
        "example": "The teacher writes on the board.",
        "exampleVi": "Giáo viên viết lên bảng."
      },
      {
        "type": "Noun",
        "word": "drawing pin",
        "ipa": "/ˈdrɔːɪŋ pɪn/",
        "meaning": "ghim bảng, đinh ghim",
        "example": "Use a drawing pin to put up the picture.",
        "exampleVi": "Dùng ghim để ghim bức tranh lên."
      },
      {
        "type": "Noun",
        "word": "noticeboard",
        "ipa": "/ˈnoʊtɪsˌbɔːrd/",
        "meaning": "bảng thông báo",
        "example": "The timetable is on the noticeboard.",
        "exampleVi": "Thời khóa biểu ở trên bảng thông báo."
      },
      {
        "type": "Noun",
        "word": "piece of paper",
        "ipa": "/piːs əv ˈpeɪpər/",
        "meaning": "một tờ giấy",
        "example": "I need a piece of paper.",
        "exampleVi": "Tôi cần một tờ giấy."
      },
      {
        "type": "Noun",
        "word": "pencil",
        "ipa": "/ˈpensəl/",
        "meaning": "bút chì",
        "example": "I write with a pencil.",
        "exampleVi": "Tôi viết bằng bút chì."
      },
      {
        "type": "Noun",
        "word": "notebook",
        "ipa": "/ˈnoʊtbʊk/",
        "meaning": "vở, sổ ghi chép",
        "example": "Write it in your notebook.",
        "exampleVi": "Hãy viết nó vào vở của bạn."
      },
      {
        "type": "Noun",
        "word": "textbook",
        "ipa": "/ˈtekstbʊk/",
        "meaning": "sách giáo khoa",
        "example": "This textbook is very useful.",
        "exampleVi": "Cuốn sách giáo khoa này rất hữu ích."
      },
      {
        "type": "Noun",
        "word": "pencil sharpener",
        "ipa": "/ˈpensəl ˌʃɑːrpənər/",
        "meaning": "gọt bút chì",
        "example": "I need a pencil sharpener.",
        "exampleVi": "Tôi cần một cái gọt bút chì."
      },
      {
        "type": "Noun",
        "word": "pen",
        "ipa": "/pen/",
        "meaning": "bút mực",
        "example": "Can I borrow your pen?",
        "exampleVi": "Tôi có thể mượn bút của bạn không?"
      },
      {
        "type": "Noun",
        "word": "OHP (overhead projector)",
        "ipa": "/ˌoʊ eɪtʃ ˈpiː/",
        "meaning": "máy chiếu qua đầu",
        "example": "The teacher uses an OHP.",
        "exampleVi": "Giáo viên sử dụng máy chiếu qua đầu."
      },
      {
        "type": "Noun",
        "word": "board pen",
        "ipa": "/ˈbɔːrd pen/",
        "meaning": "bút viết bảng",
        "example": "The teacher needs a board pen.",
        "exampleVi": "Giáo viên cần một chiếc bút viết bảng."
      },
      {
        "type": "Noun",
        "word": "board rubber",
        "ipa": "/ˈbɔːrd ˌrʌbər/",
        "meaning": "khăn/cục lau bảng",
        "example": "Where is the board rubber?",
        "exampleVi": "Cục lau bảng ở đâu?"
      },
      {
        "type": "Noun",
        "word": "desk",
        "ipa": "/desk/",
        "meaning": "bàn học, bàn làm việc",
        "example": "My books are on the desk.",
        "exampleVi": "Sách của tôi ở trên bàn học."
      },
      {
        "type": "Noun",
        "word": "whiteboard",
        "ipa": "/ˈwaɪtbɔːrd/",
        "meaning": "bảng trắng",
        "example": "The teacher writes on the whiteboard.",
        "exampleVi": "Giáo viên viết trên bảng trắng."
      },
      {
        "type": "Noun",
        "word": "computer",
        "ipa": "/kəmˈpjuːtər/",
        "meaning": "máy tính",
        "example": "We use a computer at school.",
        "exampleVi": "Chúng tôi sử dụng máy tính ở trường."
      },
      {
        "type": "Noun",
        "word": "DVD player",
        "ipa": "/ˈdiːviːdiː ˌpleɪər/",
        "meaning": "đầu phát DVD",
        "example": "There is a DVD player in the classroom.",
        "exampleVi": "Có một đầu DVD trong lớp học."
      },
      {
        "type": "Noun",
        "word": "ruler",
        "ipa": "/ˈruːlər/",
        "meaning": "thước kẻ",
        "example": "I use a ruler to draw a line.",
        "exampleVi": "Tôi dùng thước để kẻ một đường."
      },
      {
        "type": "Phrase",
        "word": "a teacher teaches maths",
        "ipa": "/ə ˈtiːtʃər ˈtiːtʃɪz mæθs/",
        "meaning": "giáo viên dạy môn Toán",
        "example": "My teacher teaches maths.",
        "exampleVi": "Giáo viên của tôi dạy môn Toán."
      },
      {
        "type": "Phrase",
        "word": "students study maths",
        "ipa": "/ˈstuːdənts ˈstʌdi mæθs/",
        "meaning": "học sinh học môn Toán",
        "example": "The students study maths every day.",
        "exampleVi": "Học sinh học Toán mỗi ngày."
      },
      {
        "type": "Verb phrase",
        "word": "go to school",
        "ipa": "/ɡoʊ tə skuːl/",
        "meaning": "đi học, đến trường",
        "example": "I go to school at seven.",
        "exampleVi": "Tôi đi học lúc bảy giờ."
      },
      {
        "type": "Verb phrase",
        "word": "go to university",
        "ipa": "/ɡoʊ tə ˌjuːnəˈvɜːrsəti/",
        "meaning": "học đại học, đến trường đại học",
        "example": "My sister goes to university.",
        "exampleVi": "Chị tôi học đại học."
      },
      {
        "type": "Verb phrase",
        "word": "learn to read and write",
        "ipa": "/lɜːrn tə riːd ənd raɪt/",
        "meaning": "học đọc và viết",
        "example": "Children learn to read and write at school.",
        "exampleVi": "Trẻ em học đọc và viết ở trường."
      },
      {
        "type": "Verb phrase",
        "word": "do an English course",
        "ipa": "/duː ən ˈɪŋɡlɪʃ kɔːrs/",
        "meaning": "học một khóa tiếng Anh",
        "example": "I do an English course online.",
        "exampleVi": "Tôi học một khóa tiếng Anh trực tuyến."
      },
      {
        "type": "Verb phrase",
        "word": "take an exam",
        "ipa": "/teɪk ən ɪɡˈzæm/",
        "meaning": "tham gia/làm một kỳ thi",
        "example": "I take an exam tomorrow.",
        "exampleVi": "Tôi thi vào ngày mai."
      },
      {
        "type": "Verb phrase",
        "word": "do an exam",
        "ipa": "/duː ən ɪɡˈzæm/",
        "meaning": "làm bài thi",
        "example": "We do an exam in the morning.",
        "exampleVi": "Chúng tôi làm bài thi vào buổi sáng."
      },
      {
        "type": "Verb phrase",
        "word": "pass your exams",
        "ipa": "/pæs jʊr ɪɡˈzæmz/",
        "meaning": "thi đỗ, vượt qua các kỳ thi",
        "example": "I hope I pass my exams.",
        "exampleVi": "Tôi hy vọng mình thi đỗ."
      },
      {
        "type": "Verb phrase",
        "word": "fail your exams",
        "ipa": "/feɪl jʊr ɪɡˈzæmz/",
        "meaning": "thi trượt, không đỗ kỳ thi",
        "example": "He failed his exams last year.",
        "exampleVi": "Năm ngoái anh ấy thi trượt."
      },
      {
        "type": "Verb phrase",
        "word": "get a degree",
        "ipa": "/ɡet ə dɪˈɡriː/",
        "meaning": "lấy/bằng đại học",
        "example": "She wants to get a degree.",
        "exampleVi": "Cô ấy muốn lấy bằng đại học."
      },
      {
        "type": "Verb phrase",
        "word": "do homework",
        "ipa": "/duː ˈhoʊmwɜːrk/",
        "meaning": "làm bài tập về nhà",
        "example": "I do my homework every evening.",
        "exampleVi": "Tôi làm bài tập về nhà mỗi tối."
      }
    ]
  },
  {
    "id": 16,
    "title": "Communications",
    "words": [
      {
        "type": "Noun",
        "word": "letter",
        "ipa": "/ˈletər/",
        "meaning": "thư",
        "example": "I got a letter from my friend.",
        "exampleVi": "Tôi nhận được một lá thư từ bạn tôi."
      },
      {
        "type": "Noun",
        "word": "address",
        "ipa": "/əˈdres/",
        "meaning": "địa chỉ",
        "example": "What is your address?",
        "exampleVi": "Địa chỉ của bạn là gì?"
      },
      {
        "type": "Noun",
        "word": "date",
        "ipa": "/deɪt/",
        "meaning": "ngày, ngày tháng",
        "example": "Write the date at the top.",
        "exampleVi": "Hãy viết ngày tháng ở phía trên."
      },
      {
        "type": "Noun",
        "word": "envelope",
        "ipa": "/ˈenvəloʊp/",
        "meaning": "phong bì",
        "example": "Put the letter in an envelope.",
        "exampleVi": "Cho lá thư vào phong bì."
      },
      {
        "type": "Noun",
        "word": "stamp",
        "ipa": "/stæmp/",
        "meaning": "tem thư",
        "example": "Put a stamp on the envelope.",
        "exampleVi": "Dán một con tem lên phong bì."
      },
      {
        "type": "Noun",
        "word": "letter box",
        "ipa": "/ˈletər bɑːks/",
        "meaning": "hòm thư, hộp thư",
        "example": "Put the letter in the letter box.",
        "exampleVi": "Bỏ lá thư vào hòm thư."
      },
      {
        "type": "Noun",
        "word": "email",
        "ipa": "/ˈiːmeɪl/",
        "meaning": "email, thư điện tử",
        "example": "I sent you an email.",
        "exampleVi": "Tôi đã gửi email cho bạn."
      },
      {
        "type": "Noun",
        "word": "internet",
        "ipa": "/ˈɪntərnet/",
        "meaning": "Internet, mạng Internet",
        "example": "I use the internet every day.",
        "exampleVi": "Tôi sử dụng Internet mỗi ngày."
      },
      {
        "type": "Noun",
        "word": "computer",
        "ipa": "/kəmˈpjuːtər/",
        "meaning": "máy tính",
        "example": "I use a computer at work.",
        "exampleVi": "Tôi sử dụng máy tính ở chỗ làm."
      },
      {
        "type": "Noun",
        "word": "screen",
        "ipa": "/skriːn/",
        "meaning": "màn hình",
        "example": "Look at the screen.",
        "exampleVi": "Hãy nhìn vào màn hình."
      },
      {
        "type": "Noun",
        "word": "keyboard",
        "ipa": "/ˈkiːbɔːrd/",
        "meaning": "bàn phím",
        "example": "The keyboard is black.",
        "exampleVi": "Bàn phím màu đen."
      },
      {
        "type": "Noun",
        "word": "mouse",
        "ipa": "/maʊs/",
        "meaning": "chuột máy tính",
        "example": "Move the mouse slowly.",
        "exampleVi": "Di chuyển chuột từ từ."
      },
      {
        "type": "Noun",
        "word": "laptop",
        "ipa": "/ˈlæptɑːp/",
        "meaning": "máy tính xách tay",
        "example": "I have a new laptop.",
        "exampleVi": "Tôi có một chiếc laptop mới."
      },
      {
        "type": "Noun",
        "word": "memory stick",
        "ipa": "/ˈmeməri stɪk/",
        "meaning": "USB, thiết bị lưu trữ USB",
        "example": "I saved the file on a memory stick.",
        "exampleVi": "Tôi đã lưu tệp vào USB."
      },
      {
        "type": "Adjective / Adverb",
        "word": "online",
        "ipa": "/ˌɑːnˈlaɪn/",
        "meaning": "trực tuyến, trên mạng",
        "example": "I buy books online.",
        "exampleVi": "Tôi mua sách trực tuyến."
      },
      {
        "type": "Noun",
        "word": "telephone",
        "ipa": "/ˈteləfoʊn/",
        "meaning": "điện thoại",
        "example": "The telephone is ringing.",
        "exampleVi": "Điện thoại đang reo."
      },
      {
        "type": "Noun",
        "word": "mobile device",
        "ipa": "/ˈmoʊbəl dɪˈvaɪs/",
        "meaning": "thiết bị di động",
        "example": "I use my mobile device every day.",
        "exampleVi": "Tôi sử dụng thiết bị di động mỗi ngày."
      },
      {
        "type": "Noun",
        "word": "mobile",
        "ipa": "/ˈmoʊbəl/",
        "meaning": "điện thoại di động",
        "example": "I left my mobile at home.",
        "exampleVi": "Tôi để quên điện thoại ở nhà."
      },
      {
        "type": "Noun",
        "word": "phone box",
        "ipa": "/ˈfoʊn bɑːks/",
        "meaning": "bốt điện thoại công cộng",
        "example": "There is a phone box near the station.",
        "exampleVi": "Có một bốt điện thoại gần nhà ga."
      },
      {
        "type": "Verb phrase",
        "word": "make a phone call",
        "ipa": "/meɪk ə foʊn kɔːl/",
        "meaning": "gọi điện thoại",
        "example": "I need to make a phone call.",
        "exampleVi": "Tôi cần gọi một cuộc điện thoại."
      },
      {
        "type": "Noun",
        "word": "phone number",
        "ipa": "/ˈfoʊn ˌnʌmbər/",
        "meaning": "số điện thoại",
        "example": "What is your phone number?",
        "exampleVi": "Số điện thoại của bạn là gì?"
      },
      {
        "type": "Noun",
        "word": "voicemail",
        "ipa": "/ˈvɔɪsmeɪl/",
        "meaning": "thư thoại, hộp thư thoại",
        "example": "She left me a voicemail.",
        "exampleVi": "Cô ấy để lại cho tôi một tin nhắn thoại."
      },
      {
        "type": "Verb phrase",
        "word": "text somebody a message",
        "ipa": "/tekst ˈsʌmbədi ə ˈmesɪdʒ/",
        "meaning": "nhắn tin cho ai",
        "example": "I texted him a message yesterday.",
        "exampleVi": "Hôm qua tôi đã nhắn tin cho anh ấy."
      },
      {
        "type": "Verb phrase",
        "word": "send somebody a text",
        "ipa": "/send ˈsʌmbədi ə tekst/",
        "meaning": "gửi tin nhắn cho ai",
        "example": "Send me a text when you arrive.",
        "exampleVi": "Hãy nhắn tin cho tôi khi bạn đến."
      },
      {
        "type": "Phrase",
        "word": "It's somebody here",
        "ipa": "/ɪts ˈsʌmbədi hɪr/",
        "meaning": "Có ai đó đang gọi/đang ở đây",
        "example": "It's John here. Can I speak to Mary?",
        "exampleVi": "John đây. Tôi có thể nói chuyện với Mary không?"
      },
      {
        "type": "Verb phrase",
        "word": "speak to",
        "ipa": "/spiːk tuː/",
        "meaning": "nói chuyện với",
        "example": "Can I speak to Tom?",
        "exampleVi": "Tôi có thể nói chuyện với Tom không?"
      },
      {
        "type": "Verb phrase",
        "word": "take a message",
        "ipa": "/teɪk ə ˈmesɪdʒ/",
        "meaning": "nhận/ghi lại lời nhắn",
        "example": "Can I take a message?",
        "exampleVi": "Tôi có thể nhận lời nhắn không?"
      },
      {
        "type": "Phrase",
        "word": "tell him I called",
        "ipa": "/tel hɪm aɪ kɔːld/",
        "meaning": "nói với anh ấy là tôi đã gọi",
        "example": "Please tell him I called.",
        "exampleVi": "Làm ơn nói với anh ấy là tôi đã gọi."
      },
      {
        "type": "Phrasal verb",
        "word": "call back",
        "ipa": "/kɔːl bæk/",
        "meaning": "gọi lại",
        "example": "I will call you back later.",
        "exampleVi": "Tôi sẽ gọi lại cho bạn sau."
      }
    ]
  },
  {
    "id": 17,
    "title": "Your phone",
    "words": [
      {
        "type": "Noun",
        "word": "camera",
        "ipa": "/ˈkæmərə/",
        "meaning": "máy ảnh, camera",
        "example": "My phone has a good camera.",
        "exampleVi": "Điện thoại của tôi có camera tốt."
      },
      {
        "type": "Noun",
        "word": "screen",
        "ipa": "/skriːn/",
        "meaning": "màn hình",
        "example": "The screen is very bright.",
        "exampleVi": "Màn hình rất sáng."
      },
      {
        "type": "Noun",
        "word": "app",
        "ipa": "/æp/",
        "meaning": "ứng dụng",
        "example": "I use a music app.",
        "exampleVi": "Tôi sử dụng một ứng dụng nghe nhạc."
      },
      {
        "type": "Noun",
        "word": "power button",
        "ipa": "/ˈpaʊər ˌbʌtn/",
        "meaning": "nút nguồn",
        "example": "Press the power button.",
        "exampleVi": "Nhấn nút nguồn."
      },
      {
        "type": "Noun",
        "word": "phone case",
        "ipa": "/ˈfoʊn keɪs/",
        "meaning": "ốp điện thoại",
        "example": "My phone case is blue.",
        "exampleVi": "Ốp điện thoại của tôi màu xanh."
      },
      {
        "type": "Noun",
        "word": "battery",
        "ipa": "/ˈbætəri/",
        "meaning": "pin",
        "example": "My phone battery is low.",
        "exampleVi": "Pin điện thoại của tôi sắp hết."
      },
      {
        "type": "Noun",
        "word": "charger",
        "ipa": "/ˈtʃɑːrdʒər/",
        "meaning": "bộ sạc, cục sạc",
        "example": "Where is my charger?",
        "exampleVi": "Bộ sạc của tôi đâu?"
      },
      {
        "type": "Noun",
        "word": "SIM card",
        "ipa": "/ˈsɪm kɑːrd/",
        "meaning": "thẻ SIM",
        "example": "I need a new SIM card.",
        "exampleVi": "Tôi cần một thẻ SIM mới."
      },
      {
        "type": "Verb phrase",
        "word": "take a selfie",
        "ipa": "/teɪk ə ˈselfi/",
        "meaning": "chụp ảnh selfie",
        "example": "Let's take a selfie.",
        "exampleVi": "Hãy chụp một bức ảnh selfie nào."
      },
      {
        "type": "Verb phrase",
        "word": "leave a voicemail",
        "ipa": "/liːv ə ˈvɔɪsmeɪl/",
        "meaning": "để lại tin nhắn thoại",
        "example": "I left a voicemail for him.",
        "exampleVi": "Tôi đã để lại tin nhắn thoại cho anh ấy."
      },
      {
        "type": "Verb",
        "word": "text",
        "ipa": "/tekst/",
        "meaning": "nhắn tin",
        "example": "I text my friend every day.",
        "exampleVi": "Tôi nhắn tin cho bạn mỗi ngày."
      },
      {
        "type": "Noun",
        "word": "message",
        "ipa": "/ˈmesɪdʒ/",
        "meaning": "tin nhắn, lời nhắn",
        "example": "I got your message.",
        "exampleVi": "Tôi đã nhận được tin nhắn của bạn."
      },
      {
        "type": "Verb phrase",
        "word": "download an app",
        "ipa": "/ˌdaʊnˈloʊd ən æp/",
        "meaning": "tải một ứng dụng",
        "example": "I want to download an app.",
        "exampleVi": "Tôi muốn tải một ứng dụng."
      },
      {
        "type": "Verb",
        "word": "call",
        "ipa": "/kɔːl/",
        "meaning": "gọi điện",
        "example": "I called my mother yesterday.",
        "exampleVi": "Hôm qua tôi đã gọi cho mẹ."
      },
      {
        "type": "Adjective",
        "word": "locked",
        "ipa": "/lɑːkt/",
        "meaning": "bị khóa",
        "example": "My phone is locked.",
        "exampleVi": "Điện thoại của tôi bị khóa."
      },
      {
        "type": "Noun",
        "word": "PIN",
        "ipa": "/pɪn/",
        "meaning": "mã PIN",
        "example": "I forgot my PIN.",
        "exampleVi": "Tôi quên mã PIN."
      },
      {
        "type": "Verb",
        "word": "unlock",
        "ipa": "/ˌʌnˈlɑːk/",
        "meaning": "mở khóa",
        "example": "I use my PIN to unlock my phone.",
        "exampleVi": "Tôi dùng mã PIN để mở khóa điện thoại."
      },
      {
        "type": "Verb",
        "word": "swipe",
        "ipa": "/swaɪp/",
        "meaning": "vuốt màn hình",
        "example": "Swipe left to see the photo.",
        "exampleVi": "Vuốt sang trái để xem ảnh."
      },
      {
        "type": "Verb",
        "word": "save",
        "ipa": "/seɪv/",
        "meaning": "lưu",
        "example": "Please save this photo.",
        "exampleVi": "Hãy lưu bức ảnh này."
      },
      {
        "type": "Noun",
        "word": "memory",
        "ipa": "/ˈmeməri/",
        "meaning": "bộ nhớ",
        "example": "My phone has a lot of memory.",
        "exampleVi": "Điện thoại của tôi có nhiều bộ nhớ."
      },
      {
        "type": "Verb",
        "word": "delete",
        "ipa": "/dɪˈliːt/",
        "meaning": "xóa",
        "example": "I want to delete this photo.",
        "exampleVi": "Tôi muốn xóa bức ảnh này."
      }
    ]
  },
  {
    "id": 18,
    "title": "Holidays",
    "words": [
      {
        "type": "Noun",
        "word": "holiday",
        "ipa": "/ˈhɑːlədeɪ/",
        "meaning": "kỳ nghỉ, kỳ nghỉ lễ",
        "example": "We are going on holiday next week.",
        "exampleVi": "Chúng tôi sẽ đi nghỉ vào tuần tới."
      },
      {
        "type": "Verb phrase",
        "word": "had a holiday",
        "ipa": "/hæd ə ˈhɑːlədeɪ/",
        "meaning": "đã có một kỳ nghỉ",
        "example": "We had a holiday in Spain.",
        "exampleVi": "Chúng tôi đã có một kỳ nghỉ ở Tây Ban Nha."
      },
      {
        "type": "Phrase",
        "word": "I'm on holiday",
        "ipa": "/aɪm ɑːn ˈhɑːlədeɪ/",
        "meaning": "tôi đang đi nghỉ",
        "example": "I'm on holiday this week.",
        "exampleVi": "Tuần này tôi đang đi nghỉ."
      },
      {
        "type": "Verb phrase",
        "word": "going on holiday",
        "ipa": "/ˈɡoʊɪŋ ɑːn ˈhɑːlədeɪ/",
        "meaning": "đi nghỉ, đi du lịch",
        "example": "We are going on holiday in July.",
        "exampleVi": "Chúng tôi sẽ đi nghỉ vào tháng Bảy."
      },
      {
        "type": "Noun",
        "word": "a package holiday",
        "ipa": "/ə ˈpækɪdʒ ˌhɑːlədeɪ/",
        "meaning": "kỳ nghỉ trọn gói",
        "example": "We booked a package holiday to Greece.",
        "exampleVi": "Chúng tôi đã đặt một kỳ nghỉ trọn gói đến Hy Lạp."
      },
      {
        "type": "Noun",
        "word": "flights",
        "ipa": "/flaɪts/",
        "meaning": "các chuyến bay",
        "example": "The flights are very expensive.",
        "exampleVi": "Các chuyến bay rất đắt."
      },
      {
        "type": "Noun",
        "word": "winter holiday",
        "ipa": "/ˈwɪntər ˌhɑːlədeɪ/",
        "meaning": "kỳ nghỉ đông",
        "example": "We went skiing on our winter holiday.",
        "exampleVi": "Chúng tôi đi trượt tuyết trong kỳ nghỉ đông."
      },
      {
        "type": "Noun",
        "word": "camping",
        "ipa": "/ˈkæmpɪŋ/",
        "meaning": "hoạt động cắm trại",
        "example": "We go camping every summer.",
        "exampleVi": "Chúng tôi đi cắm trại mỗi mùa hè."
      },
      {
        "type": "Noun",
        "word": "walking holiday",
        "ipa": "/ˈwɔːkɪŋ ˌhɑːlədeɪ/",
        "meaning": "kỳ nghỉ đi bộ/đi bộ đường dài",
        "example": "We had a walking holiday in the mountains.",
        "exampleVi": "Chúng tôi đã có một kỳ nghỉ đi bộ ở vùng núi."
      },
      {
        "type": "Noun",
        "word": "coach tour",
        "ipa": "/ˈkoʊtʃ tʊr/",
        "meaning": "chuyến du lịch bằng xe khách",
        "example": "We went on a coach tour of Italy.",
        "exampleVi": "Chúng tôi đi tham quan Ý bằng xe khách."
      },
      {
        "type": "Noun",
        "word": "transport",
        "ipa": "/ˈtrænspɔːrt/",
        "meaning": "phương tiện giao thông, giao thông vận tải",
        "example": "Public transport is cheap here.",
        "exampleVi": "Phương tiện giao thông công cộng ở đây rẻ."
      },
      {
        "type": "Phrase",
        "word": "by plane",
        "ipa": "/baɪ pleɪn/",
        "meaning": "bằng máy bay",
        "example": "We travelled by plane.",
        "exampleVi": "Chúng tôi đi bằng máy bay."
      },
      {
        "type": "Phrase",
        "word": "by train",
        "ipa": "/baɪ treɪn/",
        "meaning": "bằng tàu hỏa",
        "example": "I went to London by train.",
        "exampleVi": "Tôi đến London bằng tàu hỏa."
      },
      {
        "type": "Phrase",
        "word": "by car",
        "ipa": "/baɪ kɑːr/",
        "meaning": "bằng ô tô",
        "example": "We went there by car.",
        "exampleVi": "Chúng tôi đến đó bằng ô tô."
      },
      {
        "type": "Phrase",
        "word": "by ferry",
        "ipa": "/baɪ ˈferi/",
        "meaning": "bằng phà",
        "example": "We travelled by ferry.",
        "exampleVi": "Chúng tôi đi bằng phà."
      },
      {
        "type": "Phrase",
        "word": "by coach",
        "ipa": "/baɪ koʊtʃ/",
        "meaning": "bằng xe khách",
        "example": "They travelled by coach.",
        "exampleVi": "Họ đi bằng xe khách."
      },
      {
        "type": "Phrase",
        "word": "don't forget to take...",
        "ipa": "/doʊnt fərˈɡet tə teɪk/",
        "meaning": "đừng quên mang theo...",
        "example": "Don't forget to take your passport.",
        "exampleVi": "Đừng quên mang theo hộ chiếu."
      },
      {
        "type": "Noun",
        "word": "passport",
        "ipa": "/ˈpæspɔːrt/",
        "meaning": "hộ chiếu",
        "example": "I need my passport.",
        "exampleVi": "Tôi cần hộ chiếu của mình."
      },
      {
        "type": "Noun",
        "word": "visa",
        "ipa": "/ˈviːzə/",
        "meaning": "thị thực, visa",
        "example": "Do I need a visa?",
        "exampleVi": "Tôi có cần visa không?"
      },
      {
        "type": "Noun",
        "word": "ticket",
        "ipa": "/ˈtɪkɪt/",
        "meaning": "vé",
        "example": "I have my train ticket.",
        "exampleVi": "Tôi có vé tàu."
      },
      {
        "type": "Noun",
        "word": "currency",
        "ipa": "/ˈkɜːrənsi/",
        "meaning": "tiền tệ",
        "example": "What is the local currency?",
        "exampleVi": "Đơn vị tiền tệ địa phương là gì?"
      },
      {
        "type": "Noun",
        "word": "camera",
        "ipa": "/ˈkæmərə/",
        "meaning": "máy ảnh, camera",
        "example": "Don't forget your camera.",
        "exampleVi": "Đừng quên máy ảnh của bạn."
      },
      {
        "type": "Noun",
        "word": "luggage",
        "ipa": "/ˈlʌɡɪdʒ/",
        "meaning": "hành lý",
        "example": "My luggage is very heavy.",
        "exampleVi": "Hành lý của tôi rất nặng."
      },
      {
        "type": "Noun",
        "word": "suitcase",
        "ipa": "/ˈsuːtkeɪs/",
        "meaning": "va-li",
        "example": "My clothes are in my suitcase.",
        "exampleVi": "Quần áo của tôi ở trong va-li."
      },
      {
        "type": "Noun",
        "word": "rucksack",
        "ipa": "/ˈrʌksæk/",
        "meaning": "ba lô",
        "example": "I put my water in my rucksack.",
        "exampleVi": "Tôi để nước vào ba lô."
      },
      {
        "type": "Verb / Gerund",
        "word": "flying",
        "ipa": "/ˈflaɪɪŋ/",
        "meaning": "việc đi máy bay, bay",
        "example": "Flying is fast.",
        "exampleVi": "Đi máy bay rất nhanh."
      },
      {
        "type": "Verb phrase",
        "word": "try the local food",
        "ipa": "/traɪ ðə ˈloʊkəl fuːd/",
        "meaning": "thử đồ ăn địa phương",
        "example": "We want to try the local food.",
        "exampleVi": "Chúng tôi muốn thử đồ ăn địa phương."
      },
      {
        "type": "Verb phrase",
        "word": "enjoy the nightlife",
        "ipa": "/ɪnˈdʒɔɪ ðə ˈnaɪtlaɪf/",
        "meaning": "tận hưởng cuộc sống về đêm",
        "example": "Young people enjoy the nightlife.",
        "exampleVi": "Những người trẻ thích tận hưởng cuộc sống về đêm."
      },
      {
        "type": "Verb phrase",
        "word": "have a great time",
        "ipa": "/hæv ə ɡreɪt taɪm/",
        "meaning": "có khoảng thời gian tuyệt vời, vui vẻ",
        "example": "We had a great time in Paris.",
        "exampleVi": "Chúng tôi đã có khoảng thời gian tuyệt vời ở Paris."
      },
      {
        "type": "Phrase",
        "word": "send me a postcard",
        "ipa": "/send mi ə ˈpoʊstkɑːrd/",
        "meaning": "gửi cho tôi một tấm bưu thiếp",
        "example": "Send me a postcard from Italy.",
        "exampleVi": "Hãy gửi cho tôi một tấm bưu thiếp từ Ý."
      }
    ]
  },
  {
    "id": 19,
    "title": "Shops and shopping",
    "words": [
      {
        "type": "Noun",
        "word": "shop",
        "ipa": "/ʃɑːp/",
        "meaning": "cửa hàng",
        "example": "I go to the shop every day.",
        "exampleVi": "Tôi đi cửa hàng mỗi ngày."
      },
      {
        "type": "Noun",
        "word": "butcher",
        "ipa": "/ˈbʊtʃər/",
        "meaning": "cửa hàng bán thịt; người bán thịt",
        "example": "We buy meat at the butcher's.",
        "exampleVi": "Chúng tôi mua thịt ở cửa hàng thịt."
      },
      {
        "type": "Noun",
        "word": "post office",
        "ipa": "/ˈpoʊst ˌɔːfɪs/",
        "meaning": "bưu điện",
        "example": "The post office is near my house.",
        "exampleVi": "Bưu điện ở gần nhà tôi."
      },
      {
        "type": "Noun",
        "word": "supermarket",
        "ipa": "/ˈsuːpərˌmɑːrkɪt/",
        "meaning": "siêu thị",
        "example": "I buy food at the supermarket.",
        "exampleVi": "Tôi mua thức ăn ở siêu thị."
      },
      {
        "type": "Noun",
        "word": "bookshop",
        "ipa": "/ˈbʊkʃɑːp/",
        "meaning": "hiệu sách",
        "example": "There is a bookshop near my school.",
        "exampleVi": "Có một hiệu sách gần trường tôi."
      },
      {
        "type": "Noun",
        "word": "baker",
        "ipa": "/ˈbeɪkər/",
        "meaning": "thợ làm bánh; người bán bánh",
        "example": "The baker makes fresh bread.",
        "exampleVi": "Người thợ làm bánh làm bánh mì tươi."
      },
      {
        "type": "Noun",
        "word": "department store",
        "ipa": "/dɪˈpɑːrtmənt stɔːr/",
        "meaning": "cửa hàng bách hóa",
        "example": "We bought a coat at the department store.",
        "exampleVi": "Chúng tôi mua một chiếc áo khoác ở cửa hàng bách hóa."
      },
      {
        "type": "Noun",
        "word": "chemist",
        "ipa": "/ˈkemɪst/",
        "meaning": "hiệu thuốc; dược sĩ",
        "example": "I bought some medicine at the chemist's.",
        "exampleVi": "Tôi mua thuốc ở hiệu thuốc."
      },
      {
        "type": "Noun",
        "word": "newsagent",
        "ipa": "/ˈnuːzˌeɪdʒənt/",
        "meaning": "cửa hàng bán báo và tạp chí",
        "example": "I bought a newspaper at the newsagent's.",
        "exampleVi": "Tôi mua một tờ báo ở cửa hàng bán báo."
      },
      {
        "type": "Noun",
        "word": "gift shop",
        "ipa": "/ˈɡɪft ʃɑːp/",
        "meaning": "cửa hàng quà tặng",
        "example": "There is a gift shop near the museum.",
        "exampleVi": "Có một cửa hàng quà tặng gần bảo tàng."
      },
      {
        "type": "Noun",
        "word": "basement",
        "ipa": "/ˈbeɪsmənt/",
        "meaning": "tầng hầm",
        "example": "The car park is in the basement.",
        "exampleVi": "Bãi đỗ xe ở tầng hầm."
      },
      {
        "type": "Noun",
        "word": "electricals",
        "ipa": "/ɪˈlektrɪkəlz/",
        "meaning": "đồ điện, thiết bị điện",
        "example": "The electricals are on the ground floor.",
        "exampleVi": "Đồ điện ở tầng trệt."
      },
      {
        "type": "Noun",
        "word": "food",
        "ipa": "/fuːd/",
        "meaning": "thực phẩm, đồ ăn",
        "example": "You can buy food here.",
        "exampleVi": "Bạn có thể mua thực phẩm ở đây."
      },
      {
        "type": "Noun",
        "word": "ground floor",
        "ipa": "/ˈɡraʊnd flɔːr/",
        "meaning": "tầng trệt, tầng một theo cách gọi Anh",
        "example": "The café is on the ground floor.",
        "exampleVi": "Quán cà phê ở tầng trệt."
      },
      {
        "type": "Noun",
        "word": "beauty",
        "ipa": "/ˈbjuːti/",
        "meaning": "đồ dùng/sản phẩm làm đẹp; ngành làm đẹp",
        "example": "The beauty department is upstairs.",
        "exampleVi": "Khu đồ làm đẹp ở tầng trên."
      },
      {
        "type": "Noun",
        "word": "first floor",
        "ipa": "/ˌfɜːrst ˈflɔːr/",
        "meaning": "tầng một (trên tầng trệt trong BrE)",
        "example": "The toys are on the first floor.",
        "exampleVi": "Đồ chơi ở tầng một."
      },
      {
        "type": "Noun",
        "word": "women's wear",
        "ipa": "/ˈwɪmɪnz wer/",
        "meaning": "quần áo nữ",
        "example": "Women's wear is on the first floor.",
        "exampleVi": "Quần áo nữ ở tầng một."
      },
      {
        "type": "Noun",
        "word": "men's wear",
        "ipa": "/ˈmenz wer/",
        "meaning": "quần áo nam",
        "example": "Men's wear is downstairs.",
        "exampleVi": "Quần áo nam ở tầng dưới."
      },
      {
        "type": "Noun",
        "word": "children's department",
        "ipa": "/ˈtʃɪldrənz dɪˌpɑːrtmənt/",
        "meaning": "khu đồ trẻ em",
        "example": "The children's department is on the first floor.",
        "exampleVi": "Khu đồ trẻ em ở tầng một."
      },
      {
        "type": "Noun",
        "word": "furniture",
        "ipa": "/ˈfɜːrnɪtʃər/",
        "meaning": "đồ nội thất",
        "example": "The furniture is upstairs.",
        "exampleVi": "Đồ nội thất ở tầng trên."
      },
      {
        "type": "Noun",
        "word": "toys",
        "ipa": "/tɔɪz/",
        "meaning": "đồ chơi",
        "example": "The toys are on the first floor.",
        "exampleVi": "Đồ chơi ở tầng một."
      },
      {
        "type": "Noun",
        "word": "restaurant",
        "ipa": "/ˈrestərɑːnt/",
        "meaning": "nhà hàng",
        "example": "The restaurant is on the top floor.",
        "exampleVi": "Nhà hàng ở tầng trên cùng."
      },
      {
        "type": "Noun",
        "word": "sign in a shop",
        "ipa": "/saɪn ɪn ə ʃɑːp/",
        "meaning": "biển hiệu trong cửa hàng",
        "example": "There is a sign in the shop.",
        "exampleVi": "Có một biển hiệu trong cửa hàng."
      },
      {
        "type": "Adjective",
        "word": "open",
        "ipa": "/ˈoʊpən/",
        "meaning": "mở, đang mở cửa",
        "example": "The shop is open today.",
        "exampleVi": "Cửa hàng mở cửa hôm nay."
      },
      {
        "type": "Verb",
        "word": "close",
        "ipa": "/kloʊz/",
        "meaning": "đóng; đóng cửa",
        "example": "The shop closes at six.",
        "exampleVi": "Cửa hàng đóng cửa lúc sáu giờ."
      },
      {
        "type": "Noun",
        "word": "cash desk",
        "ipa": "/ˈkæʃ desk/",
        "meaning": "quầy thu ngân",
        "example": "Please pay at the cash desk.",
        "exampleVi": "Vui lòng thanh toán tại quầy thu ngân."
      },
      {
        "type": "Verb",
        "word": "push",
        "ipa": "/pʊʃ/",
        "meaning": "đẩy",
        "example": "Push the door.",
        "exampleVi": "Đẩy cửa."
      },
      {
        "type": "Verb",
        "word": "pull",
        "ipa": "/pʊl/",
        "meaning": "kéo",
        "example": "Pull the door.",
        "exampleVi": "Kéo cửa."
      },
      {
        "type": "Verb phrase",
        "word": "try this shirt on",
        "ipa": "/traɪ ðɪs ʃɜːrt ɑːn/",
        "meaning": "thử chiếc áo sơ mi này",
        "example": "Can I try this shirt on?",
        "exampleVi": "Tôi có thể thử chiếc áo sơ mi này không?"
      },
      {
        "type": "Adjective",
        "word": "bigger",
        "ipa": "/ˈbɪɡər/",
        "meaning": "to hơn",
        "example": "Do you have a bigger size?",
        "exampleVi": "Bạn có cỡ lớn hơn không?"
      },
      {
        "type": "Adjective",
        "word": "smaller",
        "ipa": "/ˈsmɔːlər/",
        "meaning": "nhỏ hơn",
        "example": "Do you have a smaller size?",
        "exampleVi": "Bạn có cỡ nhỏ hơn không?"
      },
      {
        "type": "Phrase",
        "word": "different color",
        "ipa": "/ˈdɪfrənt ˈkʌlər/",
        "meaning": "màu khác",
        "example": "Do you have this in a different color?",
        "exampleVi": "Bạn có cái này màu khác không?"
      },
      {
        "type": "Verb",
        "word": "cost",
        "ipa": "/kɔːst/",
        "meaning": "có giá, tốn bao nhiêu tiền",
        "example": "How much does this cost?",
        "exampleVi": "Cái này giá bao nhiêu?"
      },
      {
        "type": "Verb",
        "word": "pay",
        "ipa": "/peɪ/",
        "meaning": "trả tiền, thanh toán",
        "example": "Can I pay by card?",
        "exampleVi": "Tôi có thể thanh toán bằng thẻ không?"
      },
      {
        "type": "Noun",
        "word": "cheque",
        "ipa": "/tʃek/",
        "meaning": "séc",
        "example": "Can I pay by cheque?",
        "exampleVi": "Tôi có thể thanh toán bằng séc không?"
      },
      {
        "type": "Noun",
        "word": "credit card",
        "ipa": "/ˈkredɪt kɑːrd/",
        "meaning": "thẻ tín dụng",
        "example": "Can I pay by credit card?",
        "exampleVi": "Tôi có thể thanh toán bằng thẻ tín dụng không?"
      },
      {
        "type": "Noun",
        "word": "cash",
        "ipa": "/kæʃ/",
        "meaning": "tiền mặt",
        "example": "I don't have any cash.",
        "exampleVi": "Tôi không có tiền mặt."
      },
      {
        "type": "Noun",
        "word": "note",
        "ipa": "/noʊt/",
        "meaning": "tiền giấy",
        "example": "I have a twenty-dollar note.",
        "exampleVi": "Tôi có một tờ tiền 20 đô."
      },
      {
        "type": "Noun",
        "word": "change",
        "ipa": "/tʃeɪndʒ/",
        "meaning": "tiền thừa, tiền trả lại",
        "example": "Here is your change.",
        "exampleVi": "Đây là tiền thừa của bạn."
      },
      {
        "type": "Noun",
        "word": "receipt",
        "ipa": "/rɪˈsiːt/",
        "meaning": "hóa đơn, biên lai",
        "example": "Can I have a receipt, please?",
        "exampleVi": "Cho tôi xin hóa đơn được không?"
      },
      {
        "type": "Noun",
        "word": "(carrier) bag",
        "ipa": "/ˈkæriər bæɡ/",
        "meaning": "túi đựng hàng, túi mua sắm",
        "example": "Do you need a carrier bag?",
        "exampleVi": "Bạn có cần túi đựng hàng không?"
      }
    ]
  },
  {
    "id": 20,
    "title": "Online shopping",
    "words": [
      {
        "type": "Noun",
        "word": "size",
        "ipa": "/saɪz/",
        "meaning": "kích cỡ",
        "example": "What size do you need?",
        "exampleVi": "Bạn cần kích cỡ nào?"
      },
      {
        "type": "Noun",
        "word": "price",
        "ipa": "/praɪs/",
        "meaning": "giá cả",
        "example": "The price is very good.",
        "exampleVi": "Giá rất tốt."
      },
      {
        "type": "Noun",
        "word": "delivery address",
        "ipa": "/dɪˈlɪvəri əˈdres/",
        "meaning": "địa chỉ giao hàng",
        "example": "Please check your delivery address.",
        "exampleVi": "Vui lòng kiểm tra địa chỉ giao hàng của bạn."
      },
      {
        "type": "Noun",
        "word": "postcode",
        "ipa": "/ˈpoʊstkoʊd/",
        "meaning": "mã bưu chính",
        "example": "What is your postcode?",
        "exampleVi": "Mã bưu chính của bạn là gì?"
      },
      {
        "type": "Noun",
        "word": "credit card",
        "ipa": "/ˈkredɪt kɑːrd/",
        "meaning": "thẻ tín dụng",
        "example": "I paid by credit card.",
        "exampleVi": "Tôi đã thanh toán bằng thẻ tín dụng."
      },
      {
        "type": "Noun",
        "word": "order number",
        "ipa": "/ˈɔːrdər ˌnʌmbər/",
        "meaning": "mã số đơn hàng",
        "example": "What is your order number?",
        "exampleVi": "Mã đơn hàng của bạn là gì?"
      },
      {
        "type": "Phrasal verb",
        "word": "search for",
        "ipa": "/sɜːrtʃ fɔːr/",
        "meaning": "tìm kiếm",
        "example": "I search for cheap shoes online.",
        "exampleVi": "Tôi tìm kiếm giày giá rẻ trên mạng."
      },
      {
        "type": "Verb",
        "word": "collect",
        "ipa": "/kəˈlekt/",
        "meaning": "nhận, lấy hàng",
        "example": "I will collect my order tomorrow.",
        "exampleVi": "Tôi sẽ nhận đơn hàng vào ngày mai."
      },
      {
        "type": "Noun / Verb",
        "word": "review",
        "ipa": "/rɪˈvjuː/",
        "meaning": "đánh giá; đánh giá sản phẩm",
        "example": "I read the reviews before I buy.",
        "exampleVi": "Tôi đọc các đánh giá trước khi mua."
      },
      {
        "type": "Verb",
        "word": "add",
        "ipa": "/æd/",
        "meaning": "thêm",
        "example": "Add the shoes to your basket.",
        "exampleVi": "Thêm đôi giày vào giỏ hàng của bạn."
      },
      {
        "type": "Verb",
        "word": "deliver",
        "ipa": "/dɪˈlɪvər/",
        "meaning": "giao, giao hàng",
        "example": "They deliver the food to my home.",
        "exampleVi": "Họ giao thức ăn đến nhà tôi."
      },
      {
        "type": "Verb",
        "word": "delete",
        "ipa": "/dɪˈliːt/",
        "meaning": "xóa",
        "example": "I want to delete this item.",
        "exampleVi": "Tôi muốn xóa sản phẩm này."
      },
      {
        "type": "Noun / Verb",
        "word": "order",
        "ipa": "/ˈɔːrdər/",
        "meaning": "đơn hàng; đặt hàng",
        "example": "I ordered a new shirt online.",
        "exampleVi": "Tôi đã đặt một chiếc áo mới trên mạng."
      },
      {
        "type": "Noun",
        "word": "delivery",
        "ipa": "/dɪˈlɪvəri/",
        "meaning": "việc giao hàng, sự giao hàng",
        "example": "The delivery is free.",
        "exampleVi": "Việc giao hàng được miễn phí."
      },
      {
        "type": "Noun",
        "word": "next day",
        "ipa": "/nekst deɪ/",
        "meaning": "ngày hôm sau",
        "example": "You can get next-day delivery.",
        "exampleVi": "Bạn có thể nhận hàng vào ngày hôm sau."
      },
      {
        "type": "Verb phrase",
        "word": "shop online",
        "ipa": "/ʃɑːp ɑːnˈlaɪn/",
        "meaning": "mua sắm trực tuyến",
        "example": "I often shop online.",
        "exampleVi": "Tôi thường mua sắm trực tuyến."
      },
      {
        "type": "Noun",
        "word": "online review",
        "ipa": "/ˌɑːnˈlaɪn rɪˈvjuː/",
        "meaning": "đánh giá trực tuyến",
        "example": "I read an online review before buying it.",
        "exampleVi": "Tôi đọc một bài đánh giá trực tuyến trước khi mua nó."
      }
    ]
  },
  {
    "id": 21,
    "title": "In a hotel",
    "words": [
      {
        "type": "Noun",
        "word": "key",
        "ipa": "/kiː/",
        "meaning": "chìa khóa",
        "example": "Here is your key.",
        "exampleVi": "Đây là chìa khóa của bạn."
      },
      {
        "type": "Noun",
        "word": "reception",
        "ipa": "/rɪˈsepʃən/",
        "meaning": "quầy lễ tân, khu vực lễ tân",
        "example": "The reception is downstairs.",
        "exampleVi": "Quầy lễ tân ở tầng dưới."
      },
      {
        "type": "Noun",
        "word": "lift",
        "ipa": "/lɪft/",
        "meaning": "thang máy",
        "example": "Take the lift to the second floor.",
        "exampleVi": "Đi thang máy lên tầng hai."
      },
      {
        "type": "Noun",
        "word": "bill",
        "ipa": "/bɪl/",
        "meaning": "hóa đơn",
        "example": "Can I have the bill, please?",
        "exampleVi": "Cho tôi xin hóa đơn được không?"
      },
      {
        "type": "Noun",
        "word": "luggage",
        "ipa": "/ˈlʌɡɪdʒ/",
        "meaning": "hành lý",
        "example": "Your luggage is here.",
        "exampleVi": "Hành lý của bạn ở đây."
      },
      {
        "type": "Noun",
        "word": "form",
        "ipa": "/fɔːrm/",
        "meaning": "biểu mẫu, phiếu",
        "example": "Please fill in this form.",
        "exampleVi": "Vui lòng điền vào biểu mẫu này."
      },
      {
        "type": "Noun",
        "word": "bathroom",
        "ipa": "/ˈbæθruːm/",
        "meaning": "phòng tắm, nhà vệ sinh",
        "example": "The bathroom is very clean.",
        "exampleVi": "Phòng tắm rất sạch."
      },
      {
        "type": "Noun",
        "word": "shower",
        "ipa": "/ˈʃaʊər/",
        "meaning": "vòi sen, phòng tắm vòi sen",
        "example": "The room has a shower.",
        "exampleVi": "Phòng có vòi sen."
      },
      {
        "type": "Noun",
        "word": "phone",
        "ipa": "/foʊn/",
        "meaning": "điện thoại",
        "example": "There is a phone in the room.",
        "exampleVi": "Có một chiếc điện thoại trong phòng."
      },
      {
        "type": "Noun",
        "word": "TV",
        "ipa": "/ˌtiː ˈviː/",
        "meaning": "TV, tivi",
        "example": "There is a TV in my room.",
        "exampleVi": "Có một chiếc TV trong phòng tôi."
      },
      {
        "type": "Noun",
        "word": "mini-bar",
        "ipa": "/ˈmɪni bɑːr/",
        "meaning": "minibar, tủ đồ uống/đồ ăn nhỏ trong phòng",
        "example": "There is a mini-bar in the room.",
        "exampleVi": "Có một minibar trong phòng."
      },
      {
        "type": "Noun",
        "word": "hairdryer",
        "ipa": "/ˈherˌdraɪər/",
        "meaning": "máy sấy tóc",
        "example": "There is a hairdryer in the bathroom.",
        "exampleVi": "Có một máy sấy tóc trong phòng tắm."
      },
      {
        "type": "Noun",
        "word": "single room",
        "ipa": "/ˈsɪŋɡəl ruːm/",
        "meaning": "phòng đơn",
        "example": "I'd like a single room.",
        "exampleVi": "Tôi muốn một phòng đơn."
      },
      {
        "type": "Noun",
        "word": "double room",
        "ipa": "/ˈdʌbəl ruːm/",
        "meaning": "phòng đôi",
        "example": "We booked a double room.",
        "exampleVi": "Chúng tôi đã đặt một phòng đôi."
      },
      {
        "type": "Noun",
        "word": "reservation",
        "ipa": "/ˌrezərˈveɪʃən/",
        "meaning": "sự đặt phòng, đặt chỗ",
        "example": "I have a reservation.",
        "exampleVi": "Tôi có đặt phòng."
      },
      {
        "type": "Noun phrase",
        "word": "room with a view",
        "ipa": "/ruːm wɪð ə vjuː/",
        "meaning": "phòng có tầm nhìn đẹp",
        "example": "I'd like a room with a view.",
        "exampleVi": "Tôi muốn một phòng có tầm nhìn đẹp."
      },
      {
        "type": "Phrase",
        "word": "Here is your key.",
        "ipa": "/hɪr ɪz jʊr kiː/",
        "meaning": "Đây là chìa khóa của bạn.",
        "example": "Here is your key. Room 205.",
        "exampleVi": "Đây là chìa khóa của bạn. Phòng 205."
      },
      {
        "type": "Phrase",
        "word": "on the first floor",
        "ipa": "/ɑːn ðə ˈfɜːrst flɔːr/",
        "meaning": "ở tầng một",
        "example": "Your room is on the first floor.",
        "exampleVi": "Phòng của bạn ở tầng một."
      },
      {
        "type": "Phrase",
        "word": "take the lift",
        "ipa": "/teɪk ðə lɪft/",
        "meaning": "đi thang máy",
        "example": "Take the lift to the first floor.",
        "exampleVi": "Đi thang máy lên tầng một."
      },
      {
        "type": "Phrase",
        "word": "over there",
        "ipa": "/ˈoʊvər ðer/",
        "meaning": "ở đằng kia",
        "example": "The lift is over there.",
        "exampleVi": "Thang máy ở đằng kia."
      },
      {
        "type": "Phrase",
        "word": "Would you like some help with your luggage?",
        "ipa": "/wʊd ju laɪk sʌm help wɪð jʊr ˈlʌɡɪdʒ/",
        "meaning": "Bạn có muốn tôi giúp mang hành lý không?",
        "example": "Would you like some help with your luggage?",
        "exampleVi": "Bạn có muốn tôi giúp mang hành lý không?"
      },
      {
        "type": "Phrase",
        "word": "fill in this form",
        "ipa": "/fɪl ɪn ðɪs fɔːrm/",
        "meaning": "điền vào biểu mẫu này",
        "example": "Please fill in this form.",
        "exampleVi": "Vui lòng điền vào biểu mẫu này."
      },
      {
        "type": "Phrase",
        "word": "sign your name here",
        "ipa": "/saɪn jʊr neɪm hɪr/",
        "meaning": "ký tên vào đây",
        "example": "Please sign your name here.",
        "exampleVi": "Vui lòng ký tên vào đây."
      },
      {
        "type": "Verb phrase",
        "word": "check your bill",
        "ipa": "/tʃek jʊr bɪl/",
        "meaning": "kiểm tra hóa đơn",
        "example": "Please check your bill.",
        "exampleVi": "Vui lòng kiểm tra hóa đơn của bạn."
      },
      {
        "type": "Phrasal verb",
        "word": "check out",
        "ipa": "/tʃek aʊt/",
        "meaning": "trả phòng",
        "example": "We check out at 11 a.m.",
        "exampleVi": "Chúng tôi trả phòng lúc 11 giờ sáng."
      },
      {
        "type": "Question",
        "word": "How much is ...?",
        "ipa": "/haʊ mʌtʃ ɪz/",
        "meaning": "... giá bao nhiêu?",
        "example": "How much is a single room?",
        "exampleVi": "Phòng đơn giá bao nhiêu?"
      },
      {
        "type": "Noun",
        "word": "room service",
        "ipa": "/ˈruːm ˌsɜːrvɪs/",
        "meaning": "dịch vụ phòng",
        "example": "We ordered room service.",
        "exampleVi": "Chúng tôi gọi dịch vụ phòng."
      },
      {
        "type": "Question",
        "word": "How do I get an outside line?",
        "ipa": "/haʊ du aɪ ɡet ən aʊtˈsaɪd laɪn/",
        "meaning": "Làm thế nào để gọi ra ngoài?",
        "example": "How do I get an outside line?",
        "exampleVi": "Làm thế nào để tôi gọi ra ngoài?"
      },
      {
        "type": "Phrase",
        "word": "the code for ...",
        "ipa": "/ðə koʊd fɔːr/",
        "meaning": "mã/số để gọi ...",
        "example": "What is the code for London?",
        "exampleVi": "Mã để gọi London là gì?"
      },
      {
        "type": "Phrase",
        "word": "have breakfast in my room",
        "ipa": "/hæv ˈbrekfəst ɪn maɪ ruːm/",
        "meaning": "ăn sáng trong phòng",
        "example": "I'd like to have breakfast in my room.",
        "exampleVi": "Tôi muốn ăn sáng trong phòng."
      },
      {
        "type": "Phrase",
        "word": "have a wake-up call",
        "ipa": "/hæv ə ˈweɪk ʌp kɔːl/",
        "meaning": "yêu cầu cuộc gọi đánh thức",
        "example": "I'd like to have a wake-up call at 7.",
        "exampleVi": "Tôi muốn có cuộc gọi đánh thức lúc 7 giờ."
      },
      {
        "type": "Question",
        "word": "What time is ...?",
        "ipa": "/wʌt taɪm ɪz/",
        "meaning": "... lúc mấy giờ?",
        "example": "What time is breakfast?",
        "exampleVi": "Bữa sáng lúc mấy giờ?"
      },
      {
        "type": "Verb phrase",
        "word": "change some money",
        "ipa": "/tʃeɪndʒ sʌm ˈmʌni/",
        "meaning": "đổi một ít tiền",
        "example": "I'd like to change some money.",
        "exampleVi": "Tôi muốn đổi một ít tiền."
      }
    ]
  },
  {
    "id": 22,
    "title": "Eating out",
    "words": [
      {
        "type": "Noun phrase",
        "word": "a cup of",
        "ipa": "/ə kʌp əv/",
        "meaning": "một cốc/tách ...",
        "example": "I'd like a cup of tea.",
        "exampleVi": "Tôi muốn một tách trà."
      },
      {
        "type": "Noun",
        "word": "coffee",
        "ipa": "/ˈkɔːfi/",
        "meaning": "cà phê",
        "example": "I drink coffee in the morning.",
        "exampleVi": "Tôi uống cà phê vào buổi sáng."
      },
      {
        "type": "Noun",
        "word": "tea",
        "ipa": "/tiː/",
        "meaning": "trà",
        "example": "Would you like some tea?",
        "exampleVi": "Bạn có muốn uống trà không?"
      },
      {
        "type": "Noun",
        "word": "snack",
        "ipa": "/snæk/",
        "meaning": "đồ ăn nhẹ, món ăn vặt",
        "example": "I have a snack after school.",
        "exampleVi": "Tôi ăn nhẹ sau giờ học."
      },
      {
        "type": "Noun",
        "word": "meals",
        "ipa": "/miːlz/",
        "meaning": "các bữa ăn",
        "example": "We have three meals a day.",
        "exampleVi": "Chúng tôi có ba bữa ăn một ngày."
      },
      {
        "type": "Noun",
        "word": "restaurant",
        "ipa": "/ˈrestərɑːnt/",
        "meaning": "nhà hàng",
        "example": "We eat at a restaurant on Sunday.",
        "exampleVi": "Chúng tôi ăn ở nhà hàng vào Chủ nhật."
      },
      {
        "type": "Noun",
        "word": "bar",
        "ipa": "/bɑːr/",
        "meaning": "quán bar",
        "example": "They are sitting in a bar.",
        "exampleVi": "Họ đang ngồi trong quán bar."
      },
      {
        "type": "Noun",
        "word": "pub",
        "ipa": "/pʌb/",
        "meaning": "quán rượu/quán pub",
        "example": "We met at the pub.",
        "exampleVi": "Chúng tôi gặp nhau ở quán pub."
      },
      {
        "type": "Noun",
        "word": "alcohol",
        "ipa": "/ˈælkəhɔːl/",
        "meaning": "đồ uống có cồn, rượu",
        "example": "I don't drink alcohol.",
        "exampleVi": "Tôi không uống đồ có cồn."
      },
      {
        "type": "Noun",
        "word": "soft drink",
        "ipa": "/ˌsɔːft ˈdrɪŋk/",
        "meaning": "nước ngọt, đồ uống không cồn",
        "example": "I'd like a soft drink, please.",
        "exampleVi": "Tôi muốn một ly nước ngọt."
      },
      {
        "type": "Noun phrase",
        "word": "fast food restaurant",
        "ipa": "/ˌfæst ˈfuːd ˌrestərɑːnt/",
        "meaning": "nhà hàng đồ ăn nhanh",
        "example": "There is a fast food restaurant near here.",
        "exampleVi": "Có một nhà hàng đồ ăn nhanh gần đây."
      },
      {
        "type": "Noun",
        "word": "take-away",
        "ipa": "/ˈteɪkəweɪ/",
        "meaning": "đồ ăn mua mang đi",
        "example": "We ordered a take-away.",
        "exampleVi": "Chúng tôi gọi đồ ăn mang đi."
      },
      {
        "type": "Noun",
        "word": "menu",
        "ipa": "/ˈmenjuː/",
        "meaning": "thực đơn",
        "example": "Can I see the menu, please?",
        "exampleVi": "Cho tôi xem thực đơn được không?"
      },
      {
        "type": "Noun",
        "word": "starter",
        "ipa": "/ˈstɑːrtər/",
        "meaning": "món khai vị",
        "example": "I had soup for my starter.",
        "exampleVi": "Tôi dùng súp làm món khai vị."
      },
      {
        "type": "Noun phrase",
        "word": "soup of the day",
        "ipa": "/suːp əv ðə deɪ/",
        "meaning": "món súp trong ngày",
        "example": "What's the soup of the day?",
        "exampleVi": "Món súp hôm nay là gì?"
      },
      {
        "type": "Noun phrase",
        "word": "mixed salad",
        "ipa": "/mɪkst ˈsæləd/",
        "meaning": "salad trộn",
        "example": "I'd like a mixed salad.",
        "exampleVi": "Tôi muốn một phần salad trộn."
      },
      {
        "type": "Noun phrase",
        "word": "main course",
        "ipa": "/ˌmeɪn ˈkɔːrs/",
        "meaning": "món chính",
        "example": "Fish is my main course.",
        "exampleVi": "Cá là món chính của tôi."
      },
      {
        "type": "Noun phrase",
        "word": "steak with chips or new potatoes",
        "ipa": "/steɪk wɪð tʃɪps ɔːr nuː pəˈteɪtoʊz/",
        "meaning": "bít tết với khoai tây chiên hoặc khoai tây mới",
        "example": "I'll have steak with chips, please.",
        "exampleVi": "Tôi sẽ gọi bít tết với khoai tây chiên."
      },
      {
        "type": "Noun",
        "word": "fish and chips",
        "ipa": "/ˌfɪʃ ən ˈtʃɪps/",
        "meaning": "cá và khoai tây chiên",
        "example": "I like fish and chips.",
        "exampleVi": "Tôi thích món cá và khoai tây chiên."
      },
      {
        "type": "Noun phrase",
        "word": "vegetable curry",
        "ipa": "/ˈvedʒtəbəl ˈkɜːri/",
        "meaning": "cà ri rau củ",
        "example": "She ordered a vegetable curry.",
        "exampleVi": "Cô ấy gọi món cà ri rau củ."
      },
      {
        "type": "Noun phrase",
        "word": "salmon fillet with green beans",
        "ipa": "/ˈsæmən fɪˈleɪ wɪð ɡriːn biːnz/",
        "meaning": "phi lê cá hồi với đậu cô-ve",
        "example": "He ordered salmon fillet with green beans.",
        "exampleVi": "Anh ấy gọi phi lê cá hồi với đậu cô-ve."
      },
      {
        "type": "Noun phrase",
        "word": "burger with chips and mushrooms",
        "ipa": "/ˈbɜːrɡər wɪð tʃɪps ən ˈmʌʃruːmz/",
        "meaning": "burger với khoai tây chiên và nấm",
        "example": "I'd like a burger with chips and mushrooms.",
        "exampleVi": "Tôi muốn một burger với khoai tây chiên và nấm."
      },
      {
        "type": "Noun",
        "word": "dessert",
        "ipa": "/dɪˈzɜːrt/",
        "meaning": "món tráng miệng",
        "example": "Do you want dessert?",
        "exampleVi": "Bạn có muốn món tráng miệng không?"
      },
      {
        "type": "Noun phrase",
        "word": "chocolate ice cream",
        "ipa": "/ˈtʃɑːklət ˌaɪs ˈkriːm/",
        "meaning": "kem sô-cô-la",
        "example": "I'd like chocolate ice cream.",
        "exampleVi": "Tôi muốn kem sô-cô-la."
      },
      {
        "type": "Noun phrase",
        "word": "apple ice",
        "ipa": "/ˈæpəl aɪs/",
        "meaning": "kem đá/vị táo",
        "example": "She had apple ice for dessert.",
        "exampleVi": "Cô ấy dùng kem đá vị táo làm món tráng miệng."
      },
      {
        "type": "Noun phrase",
        "word": "fruit salad",
        "ipa": "/ˈfruːt ˌsæləd/",
        "meaning": "salad trái cây",
        "example": "I'll have a fruit salad.",
        "exampleVi": "Tôi sẽ gọi salad trái cây."
      },
      {
        "type": "Phrase",
        "word": "ready to order",
        "ipa": "/ˈredi tə ˈɔːrdər/",
        "meaning": "sẵn sàng gọi món",
        "example": "Are you ready to order?",
        "exampleVi": "Bạn đã sẵn sàng gọi món chưa?"
      },
      {
        "type": "Phrase",
        "word": "I'd like",
        "ipa": "/aɪd laɪk/",
        "meaning": "tôi muốn gọi/muốn có",
        "example": "I'd like a coffee, please.",
        "exampleVi": "Tôi muốn một ly cà phê."
      },
      {
        "type": "Phrase",
        "word": "Would you like ...?",
        "ipa": "/wʊd ju laɪk/",
        "meaning": "bạn có muốn ... không?",
        "example": "Would you like some tea?",
        "exampleVi": "Bạn có muốn uống trà không?"
      },
      {
        "type": "Phrase",
        "word": "How would you like ...?",
        "ipa": "/haʊ wʊd ju laɪk/",
        "meaning": "bạn muốn ... như thế nào?",
        "example": "How would you like your steak?",
        "exampleVi": "Bạn muốn bít tết được chế biến như thế nào?"
      },
      {
        "type": "Adjective",
        "word": "rare",
        "ipa": "/rer/",
        "meaning": "tái (bít tết)",
        "example": "I'd like my steak rare.",
        "exampleVi": "Tôi muốn bít tết tái."
      },
      {
        "type": "Adjective",
        "word": "medium",
        "ipa": "/ˈmiːdiəm/",
        "meaning": "chín vừa",
        "example": "I'd like my steak medium.",
        "exampleVi": "Tôi muốn bít tết chín vừa."
      },
      {
        "type": "Adjective",
        "word": "well-done",
        "ipa": "/ˌwel ˈdʌn/",
        "meaning": "chín kỹ",
        "example": "I'd like my steak well-done.",
        "exampleVi": "Tôi muốn bít tết chín kỹ."
      },
      {
        "type": "Question",
        "word": "What would you like to drink?",
        "ipa": "/wʌt wʊd ju laɪk tə drɪŋk/",
        "meaning": "Bạn muốn uống gì?",
        "example": "What would you like to drink?",
        "exampleVi": "Bạn muốn uống gì?"
      },
      {
        "type": "Phrase",
        "word": "I'll have ...",
        "ipa": "/aɪl hæv/",
        "meaning": "tôi sẽ gọi/dùng ...",
        "example": "I'll have the fish, please.",
        "exampleVi": "Tôi sẽ gọi món cá."
      },
      {
        "type": "Question",
        "word": "Is everything all right?",
        "ipa": "/ɪz ˈevriθɪŋ ɔːl raɪt/",
        "meaning": "Mọi thứ có ổn không?",
        "example": "Is everything all right?",
        "exampleVi": "Mọi thứ có ổn không?"
      },
      {
        "type": "Adjective",
        "word": "delicious",
        "ipa": "/dɪˈlɪʃəs/",
        "meaning": "ngon, thơm ngon",
        "example": "The food is delicious.",
        "exampleVi": "Đồ ăn rất ngon."
      },
      {
        "type": "Question",
        "word": "Could I have the bill?",
        "ipa": "/kʊd aɪ hæv ðə bɪl/",
        "meaning": "Tôi có thể xin hóa đơn được không?",
        "example": "Could I have the bill, please?",
        "exampleVi": "Cho tôi xin hóa đơn được không?"
      }
    ]
  },
  {
    "id": 23,
    "title": "Sports table",
    "words": [
      {
        "type": "Noun",
        "word": "ball game",
        "ipa": "/ˈbɔːl ɡeɪm/",
        "meaning": "môn thể thao dùng bóng",
        "example": "Football is a popular ball game.",
        "exampleVi": "Bóng đá là một môn thể thao dùng bóng phổ biến."
      },
      {
        "type": "Noun",
        "word": "football",
        "ipa": "/ˈfʊtbɔːl/",
        "meaning": "bóng đá",
        "example": "I play football with my friends.",
        "exampleVi": "Tôi chơi bóng đá với bạn bè."
      },
      {
        "type": "Noun",
        "word": "rugby",
        "ipa": "/ˈrʌɡbi/",
        "meaning": "bóng bầu dục rugby",
        "example": "He plays rugby at school.",
        "exampleVi": "Cậu ấy chơi rugby ở trường."
      },
      {
        "type": "Noun",
        "word": "American football",
        "ipa": "/əˌmerɪkən ˈfʊtbɔːl/",
        "meaning": "bóng bầu dục Mỹ",
        "example": "My brother likes American football.",
        "exampleVi": "Anh trai tôi thích bóng bầu dục Mỹ."
      },
      {
        "type": "Noun",
        "word": "basketball",
        "ipa": "/ˈbæskɪtbɔːl/",
        "meaning": "bóng rổ",
        "example": "We play basketball after school.",
        "exampleVi": "Chúng tôi chơi bóng rổ sau giờ học."
      },
      {
        "type": "Noun",
        "word": "badminton",
        "ipa": "/ˈbædmɪntən/",
        "meaning": "cầu lông",
        "example": "I play badminton every Sunday.",
        "exampleVi": "Tôi chơi cầu lông mỗi Chủ nhật."
      },
      {
        "type": "Noun",
        "word": "baseball",
        "ipa": "/ˈbeɪsbɔːl/",
        "meaning": "bóng chày",
        "example": "They play baseball in the park.",
        "exampleVi": "Họ chơi bóng chày trong công viên."
      },
      {
        "type": "Noun",
        "word": "tennis",
        "ipa": "/ˈtenɪs/",
        "meaning": "quần vợt",
        "example": "She plays tennis very well.",
        "exampleVi": "Cô ấy chơi quần vợt rất giỏi."
      },
      {
        "type": "Noun",
        "word": "volleyball",
        "ipa": "/ˈvɑːlibɔːl/",
        "meaning": "bóng chuyền",
        "example": "We play volleyball at school.",
        "exampleVi": "Chúng tôi chơi bóng chuyền ở trường."
      },
      {
        "type": "Noun",
        "word": "table tennis",
        "ipa": "/ˈteɪbəl ˌtenɪs/",
        "meaning": "bóng bàn",
        "example": "I play table tennis with my father.",
        "exampleVi": "Tôi chơi bóng bàn với bố."
      },
      {
        "type": "Noun",
        "word": "swimming",
        "ipa": "/ˈswɪmɪŋ/",
        "meaning": "môn bơi lội",
        "example": "I like swimming in summer.",
        "exampleVi": "Tôi thích bơi vào mùa hè."
      },
      {
        "type": "Noun",
        "word": "running",
        "ipa": "/ˈrʌnɪŋ/",
        "meaning": "môn chạy bộ",
        "example": "Running is good exercise.",
        "exampleVi": "Chạy bộ là bài tập thể dục tốt."
      },
      {
        "type": "Noun",
        "word": "sailing",
        "ipa": "/ˈseɪlɪŋ/",
        "meaning": "môn chèo/thuyền buồm",
        "example": "We go sailing in summer.",
        "exampleVi": "Chúng tôi đi thuyền buồm vào mùa hè."
      },
      {
        "type": "Noun",
        "word": "motor racing",
        "ipa": "/ˈmoʊtər ˌreɪsɪŋ/",
        "meaning": "đua xe",
        "example": "He likes motor racing.",
        "exampleVi": "Anh ấy thích đua xe."
      },
      {
        "type": "Noun",
        "word": "horse racing",
        "ipa": "/ˈhɔːrs ˌreɪsɪŋ/",
        "meaning": "đua ngựa",
        "example": "They watch horse racing on TV.",
        "exampleVi": "Họ xem đua ngựa trên TV."
      },
      {
        "type": "Noun",
        "word": "judo",
        "ipa": "/ˈdʒuːdoʊ/",
        "meaning": "môn judo, võ nhu đạo",
        "example": "My sister does judo.",
        "exampleVi": "Chị tôi tập judo."
      },
      {
        "type": "Noun",
        "word": "karate",
        "ipa": "/kəˈrɑːti/",
        "meaning": "môn karate",
        "example": "He does karate twice a week.",
        "exampleVi": "Cậu ấy tập karate hai lần một tuần."
      },
      {
        "type": "Noun",
        "word": "snowboarding",
        "ipa": "/ˈsnoʊbɔːrdɪŋ/",
        "meaning": "môn trượt ván trên tuyết",
        "example": "They go snowboarding in winter.",
        "exampleVi": "Họ đi trượt ván trên tuyết vào mùa đông."
      },
      {
        "type": "Noun",
        "word": "skiing",
        "ipa": "/ˈskiːɪŋ/",
        "meaning": "môn trượt tuyết",
        "example": "I like skiing in the mountains.",
        "exampleVi": "Tôi thích trượt tuyết trên núi."
      },
      {
        "type": "Noun",
        "word": "kayaking",
        "ipa": "/ˈkaɪækɪŋ/",
        "meaning": "môn chèo thuyền kayak",
        "example": "We go kayaking on the river.",
        "exampleVi": "Chúng tôi chèo thuyền kayak trên sông."
      },
      {
        "type": "Noun",
        "word": "court",
        "ipa": "/kɔːrt/",
        "meaning": "sân thi đấu (tennis, basketball...)",
        "example": "We play tennis on this court.",
        "exampleVi": "Chúng tôi chơi tennis trên sân này."
      },
      {
        "type": "Noun",
        "word": "pitch",
        "ipa": "/pɪtʃ/",
        "meaning": "sân thi đấu (đặc biệt football, rugby)",
        "example": "The football pitch is very big.",
        "exampleVi": "Sân bóng đá rất rộng."
      },
      {
        "type": "Noun",
        "word": "pool",
        "ipa": "/puːl/",
        "meaning": "hồ bơi",
        "example": "The swimming pool is near my house.",
        "exampleVi": "Hồ bơi ở gần nhà tôi."
      },
      {
        "type": "Noun",
        "word": "sports centre",
        "ipa": "/ˈspɔːrts ˌsentər/",
        "meaning": "trung tâm thể thao",
        "example": "I go to the sports centre every week.",
        "exampleVi": "Tôi đến trung tâm thể thao mỗi tuần."
      },
      {
        "type": "Question",
        "word": "Do you do any sports?",
        "ipa": "/duː ju duː ˈeni spɔːrts/",
        "meaning": "Bạn có chơi/tập môn thể thao nào không?",
        "example": "Do you do any sports?",
        "exampleVi": "Bạn có chơi môn thể thao nào không?"
      },
      {
        "type": "Question",
        "word": "Do you play ...?",
        "ipa": "/duː ju pleɪ/",
        "meaning": "Bạn có chơi ... không?",
        "example": "Do you play tennis?",
        "exampleVi": "Bạn có chơi tennis không?"
      },
      {
        "type": "Question",
        "word": "What's your favourite sport?",
        "ipa": "/wʌts jʊr ˈfeɪvərɪt spɔːrt/",
        "meaning": "Môn thể thao yêu thích của bạn là gì?",
        "example": "What's your favourite sport?",
        "exampleVi": "Môn thể thao yêu thích của bạn là gì?"
      }
    ]
  },
  {
    "id": 24,
    "title": "Cinema",
    "words": [
      {
        "type": "Noun",
        "word": "cinema",
        "ipa": "/ˈsɪnəmə/",
        "meaning": "rạp chiếu phim; điện ảnh",
        "example": "We go to the cinema on Saturday.",
        "exampleVi": "Chúng tôi đi xem phim vào thứ Bảy."
      },
      {
        "type": "Noun",
        "word": "film",
        "ipa": "/fɪlm/",
        "meaning": "bộ phim",
        "example": "I watched a good film last night.",
        "exampleVi": "Tôi đã xem một bộ phim hay tối qua."
      },
      {
        "type": "Noun",
        "word": "a western",
        "ipa": "/ə ˈwestərn/",
        "meaning": "phim cao bồi miền Tây",
        "example": "My father likes westerns.",
        "exampleVi": "Bố tôi thích phim cao bồi miền Tây."
      },
      {
        "type": "Noun",
        "word": "a cartoon",
        "ipa": "/ə kɑːrˈtuːn/",
        "meaning": "phim hoạt hình",
        "example": "The children are watching a cartoon.",
        "exampleVi": "Bọn trẻ đang xem một bộ phim hoạt hình."
      },
      {
        "type": "Noun",
        "word": "a horror film",
        "ipa": "/ə ˈhɔːrər fɪlm/",
        "meaning": "phim kinh dị",
        "example": "I don't like horror films.",
        "exampleVi": "Tôi không thích phim kinh dị."
      },
      {
        "type": "Noun",
        "word": "a comedy",
        "ipa": "/ə ˈkɑːmədi/",
        "meaning": "phim hài",
        "example": "We watched a comedy last night.",
        "exampleVi": "Chúng tôi đã xem một bộ phim hài tối qua."
      },
      {
        "type": "Noun",
        "word": "a thriller",
        "ipa": "/ə ˈθrɪlər/",
        "meaning": "phim ly kỳ, hồi hộp",
        "example": "This is a very exciting thriller.",
        "exampleVi": "Đây là một bộ phim ly kỳ rất hấp dẫn."
      },
      {
        "type": "Noun",
        "word": "an action film",
        "ipa": "/ən ˈækʃən fɪlm/",
        "meaning": "phim hành động",
        "example": "He likes action films.",
        "exampleVi": "Anh ấy thích phim hành động."
      },
      {
        "type": "Noun",
        "word": "a science fiction film",
        "ipa": "/ə ˌsaɪəns ˈfɪkʃən fɪlm/",
        "meaning": "phim khoa học viễn tưởng",
        "example": "I like science fiction films.",
        "exampleVi": "Tôi thích phim khoa học viễn tưởng."
      },
      {
        "type": "Noun",
        "word": "a musical",
        "ipa": "/ə ˈmjuːzɪkəl/",
        "meaning": "phim ca nhạc",
        "example": "She watched a musical with her friends.",
        "exampleVi": "Cô ấy xem một bộ phim ca nhạc với bạn bè."
      },
      {
        "type": "Noun",
        "word": "a romantic comedy",
        "ipa": "/ə roʊˌmæntɪk ˈkɑːmədi/",
        "meaning": "phim hài lãng mạn",
        "example": "My sister likes romantic comedies.",
        "exampleVi": "Chị tôi thích phim hài lãng mạn."
      },
      {
        "type": "Noun",
        "word": "film star",
        "ipa": "/ˈfɪlm stɑːr/",
        "meaning": "ngôi sao điện ảnh",
        "example": "She is a famous film star.",
        "exampleVi": "Cô ấy là một ngôi sao điện ảnh nổi tiếng."
      },
      {
        "type": "Verb",
        "word": "played",
        "ipa": "/pleɪd/",
        "meaning": "đã đóng vai",
        "example": "He played the main character.",
        "exampleVi": "Anh ấy đóng nhân vật chính."
      },
      {
        "type": "Noun",
        "word": "director",
        "ipa": "/dəˈrektər/",
        "meaning": "đạo diễn",
        "example": "The director made a great film.",
        "exampleVi": "Đạo diễn đã làm một bộ phim tuyệt vời."
      },
      {
        "type": "Adjective",
        "word": "boring",
        "ipa": "/ˈbɔːrɪŋ/",
        "meaning": "nhàm chán",
        "example": "The film was boring.",
        "exampleVi": "Bộ phim rất nhàm chán."
      },
      {
        "type": "Question",
        "word": "What's on at the cinema this week?",
        "ipa": "/wʌts ɑːn æt ðə ˈsɪnəmə ðɪs wiːk/",
        "meaning": "Tuần này rạp chiếu những phim gì?",
        "example": "What's on at the cinema this week?",
        "exampleVi": "Tuần này rạp chiếu những phim gì?"
      },
      {
        "type": "Question",
        "word": "Do you go to the cinema often?",
        "ipa": "/duː ju ɡoʊ tə ðə ˈsɪnəmə ˈɔːfən/",
        "meaning": "Bạn có thường đi xem phim không?",
        "example": "Do you go to the cinema often?",
        "exampleVi": "Bạn có thường đi xem phim không?"
      }
    ]
  },
  {
    "id": 25,
    "title": "Free time at home",
    "words": [
      {
        "type": "Noun",
        "word": "TV",
        "ipa": "/ˌtiː ˈviː/",
        "meaning": "TV, tivi",
        "example": "I watch TV every evening.",
        "exampleVi": "Tôi xem TV mỗi tối."
      },
      {
        "type": "Noun",
        "word": "radio",
        "ipa": "/ˈreɪdioʊ/",
        "meaning": "đài radio, máy radio",
        "example": "My father listens to the radio.",
        "exampleVi": "Bố tôi nghe radio."
      },
      {
        "type": "Noun",
        "word": "music",
        "ipa": "/ˈmjuːzɪk/",
        "meaning": "âm nhạc",
        "example": "I like listening to music.",
        "exampleVi": "Tôi thích nghe nhạc."
      },
      {
        "type": "Noun",
        "word": "film",
        "ipa": "/fɪlm/",
        "meaning": "bộ phim",
        "example": "We watched a film last night.",
        "exampleVi": "Chúng tôi đã xem một bộ phim tối qua."
      },
      {
        "type": "Verb",
        "word": "watch",
        "ipa": "/wɑːtʃ/",
        "meaning": "xem",
        "example": "I watch TV after dinner.",
        "exampleVi": "Tôi xem TV sau bữa tối."
      },
      {
        "type": "Verb",
        "word": "see",
        "ipa": "/siː/",
        "meaning": "xem, nhìn; gặp",
        "example": "I want to see a film tonight.",
        "exampleVi": "Tôi muốn xem một bộ phim tối nay."
      },
      {
        "type": "Noun",
        "word": "programme",
        "ipa": "/ˈproʊɡræm/",
        "meaning": "chương trình (TV/radio)",
        "example": "This is my favourite TV programme.",
        "exampleVi": "Đây là chương trình TV yêu thích của tôi."
      },
      {
        "type": "Phrase",
        "word": "watch a DVD",
        "ipa": "/wɑːtʃ ə ˌdiːviːˈdiː/",
        "meaning": "xem DVD",
        "example": "We watch a DVD at home.",
        "exampleVi": "Chúng tôi xem DVD ở nhà."
      },
      {
        "type": "Verb phrase",
        "word": "listen to",
        "ipa": "/ˈlɪsən tuː/",
        "meaning": "nghe",
        "example": "I listen to music every day.",
        "exampleVi": "Tôi nghe nhạc mỗi ngày."
      },
      {
        "type": "Noun",
        "word": "headphones",
        "ipa": "/ˈhedfoʊnz/",
        "meaning": "tai nghe",
        "example": "I use headphones on the bus.",
        "exampleVi": "Tôi dùng tai nghe trên xe buýt."
      },
      {
        "type": "Noun",
        "word": "hobby",
        "ipa": "/ˈhɑːbi/",
        "meaning": "sở thích",
        "example": "Reading is my favourite hobby.",
        "exampleVi": "Đọc sách là sở thích yêu thích của tôi."
      },
      {
        "type": "Verb phrase",
        "word": "play video games",
        "ipa": "/pleɪ ˈvɪdioʊ ɡeɪmz/",
        "meaning": "chơi trò chơi điện tử",
        "example": "I play video games after school.",
        "exampleVi": "Tôi chơi trò chơi điện tử sau giờ học."
      },
      {
        "type": "Verb",
        "word": "download",
        "ipa": "/ˌdaʊnˈloʊd/",
        "meaning": "tải xuống",
        "example": "I download music from the internet.",
        "exampleVi": "Tôi tải nhạc từ Internet."
      },
      {
        "type": "Noun",
        "word": "the internet",
        "ipa": "/ði ˈɪntərnet/",
        "meaning": "Internet, mạng Internet",
        "example": "I use the internet every day.",
        "exampleVi": "Tôi sử dụng Internet mỗi ngày."
      },
      {
        "type": "Phrase",
        "word": "chat to my friend online",
        "ipa": "/tʃæt tə maɪ frend ˌɑːnˈlaɪn/",
        "meaning": "trò chuyện trực tuyến với bạn",
        "example": "I chat to my friend online every evening.",
        "exampleVi": "Tôi trò chuyện trực tuyến với bạn mỗi tối."
      },
      {
        "type": "Noun",
        "word": "cooking",
        "ipa": "/ˈkʊkɪŋ/",
        "meaning": "việc nấu ăn",
        "example": "Cooking is my hobby.",
        "exampleVi": "Nấu ăn là sở thích của tôi."
      },
      {
        "type": "Noun",
        "word": "gardening",
        "ipa": "/ˈɡɑːrdənɪŋ/",
        "meaning": "việc làm vườn",
        "example": "My mother likes gardening.",
        "exampleVi": "Mẹ tôi thích làm vườn."
      },
      {
        "type": "Phrase",
        "word": "grow flowers and vegetables",
        "ipa": "/ɡroʊ ˈflaʊərz ən ˈvedʒtəbəlz/",
        "meaning": "trồng hoa và rau",
        "example": "We grow flowers and vegetables in our garden.",
        "exampleVi": "Chúng tôi trồng hoa và rau trong vườn."
      },
      {
        "type": "Noun",
        "word": "novel",
        "ipa": "/ˈnɑːvəl/",
        "meaning": "tiểu thuyết",
        "example": "I am reading a novel.",
        "exampleVi": "Tôi đang đọc một cuốn tiểu thuyết."
      },
      {
        "type": "Noun",
        "word": "comic",
        "ipa": "/ˈkɑːmɪk/",
        "meaning": "truyện tranh",
        "example": "My brother likes reading comics.",
        "exampleVi": "Em trai tôi thích đọc truyện tranh."
      },
      {
        "type": "Noun phrase",
        "word": "books about",
        "ipa": "/bʊks əˈbaʊt/",
        "meaning": "những cuốn sách về...",
        "example": "I like books about animals.",
        "exampleVi": "Tôi thích những cuốn sách về động vật."
      },
      {
        "type": "Noun",
        "word": "newspaper",
        "ipa": "/ˈnuːzˌpeɪpər/",
        "meaning": "báo, tờ báo",
        "example": "My dad reads the newspaper every morning.",
        "exampleVi": "Bố tôi đọc báo mỗi sáng."
      },
      {
        "type": "Phrase",
        "word": "have friends round",
        "ipa": "/hæv frendz raʊnd/",
        "meaning": "mời bạn bè đến nhà",
        "example": "We have friends round on Saturday.",
        "exampleVi": "Chúng tôi mời bạn bè đến nhà vào thứ Bảy."
      },
      {
        "type": "Phrase",
        "word": "have friends to dinner",
        "ipa": "/hæv frendz tə ˈdɪnər/",
        "meaning": "mời bạn bè đến ăn tối",
        "example": "We have friends to dinner tonight.",
        "exampleVi": "Tối nay chúng tôi mời bạn bè đến ăn tối."
      },
      {
        "type": "Phrase",
        "word": "come to stay",
        "ipa": "/kʌm tə steɪ/",
        "meaning": "đến ở lại",
        "example": "My cousin is coming to stay.",
        "exampleVi": "Anh/chị/em họ của tôi sẽ đến ở lại."
      },
      {
        "type": "Verb phrase",
        "word": "talk to",
        "ipa": "/tɔːk tuː/",
        "meaning": "nói chuyện với",
        "example": "I talk to my sister every day.",
        "exampleVi": "Tôi nói chuyện với chị/em gái mỗi ngày."
      },
      {
        "type": "Phrase",
        "word": "on the phone",
        "ipa": "/ɑːn ðə foʊn/",
        "meaning": "qua điện thoại; đang nói chuyện điện thoại",
        "example": "She is on the phone.",
        "exampleVi": "Cô ấy đang nói chuyện điện thoại."
      },
      {
        "type": "Phrase",
        "word": "do nothing",
        "ipa": "/duː ˈnʌθɪŋ/",
        "meaning": "không làm gì cả",
        "example": "I like to do nothing at the weekend.",
        "exampleVi": "Tôi thích không làm gì vào cuối tuần."
      },
      {
        "type": "Phrase",
        "word": "have a sleep",
        "ipa": "/hæv ə sliːp/",
        "meaning": "ngủ một giấc, chợp mắt",
        "example": "I have a sleep after lunch.",
        "exampleVi": "Tôi ngủ một giấc sau bữa trưa."
      }
    ]
  },
  {
    "id": 26,
    "title": "Music and musical instruments",
    "words": [
      {
        "type": "Noun",
        "word": "music",
        "ipa": "/ˈmjuːzɪk/",
        "meaning": "âm nhạc",
        "example": "I listen to music every day.",
        "exampleVi": "Tôi nghe nhạc mỗi ngày."
      },
      {
        "type": "Adjective",
        "word": "musical",
        "ipa": "/ˈmjuːzɪkəl/",
        "meaning": "thuộc về âm nhạc; có năng khiếu âm nhạc",
        "example": "She is very musical.",
        "exampleVi": "Cô ấy rất có năng khiếu âm nhạc."
      },
      {
        "type": "Noun",
        "word": "musician",
        "ipa": "/mjuˈzɪʃən/",
        "meaning": "nhạc sĩ; người chơi nhạc",
        "example": "My brother is a musician.",
        "exampleVi": "Anh trai tôi là một nhạc sĩ."
      },
      {
        "type": "Noun",
        "word": "musical instrument",
        "ipa": "/ˌmjuːzɪkəl ˈɪnstrəmənt/",
        "meaning": "nhạc cụ",
        "example": "The piano is a musical instrument.",
        "exampleVi": "Đàn piano là một nhạc cụ."
      },
      {
        "type": "Noun",
        "word": "piano",
        "ipa": "/piˈænoʊ/",
        "meaning": "đàn piano",
        "example": "She plays the piano very well.",
        "exampleVi": "Cô ấy chơi đàn piano rất giỏi."
      },
      {
        "type": "Noun",
        "word": "cello",
        "ipa": "/ˈtʃeloʊ/",
        "meaning": "đàn cello",
        "example": "He plays the cello.",
        "exampleVi": "Anh ấy chơi đàn cello."
      },
      {
        "type": "Noun",
        "word": "guitar",
        "ipa": "/ɡɪˈtɑːr/",
        "meaning": "đàn ghi-ta",
        "example": "I play the guitar.",
        "exampleVi": "Tôi chơi đàn ghi-ta."
      },
      {
        "type": "Noun",
        "word": "flute",
        "ipa": "/fluːt/",
        "meaning": "sáo",
        "example": "She plays the flute.",
        "exampleVi": "Cô ấy chơi sáo."
      },
      {
        "type": "Noun",
        "word": "violin",
        "ipa": "/ˌvaɪəˈlɪn/",
        "meaning": "đàn vi-ô-lông",
        "example": "My sister plays the violin.",
        "exampleVi": "Chị/em gái tôi chơi đàn vi-ô-lông."
      },
      {
        "type": "Noun",
        "word": "trumpet",
        "ipa": "/ˈtrʌmpɪt/",
        "meaning": "kèn trumpet",
        "example": "He plays the trumpet.",
        "exampleVi": "Anh ấy chơi kèn trumpet."
      },
      {
        "type": "Noun",
        "word": "clarinet",
        "ipa": "/ˌklærəˈnet/",
        "meaning": "kèn clarinet",
        "example": "She plays the clarinet at school.",
        "exampleVi": "Cô ấy chơi kèn clarinet ở trường."
      },
      {
        "type": "Noun",
        "word": "drums",
        "ipa": "/drʌmz/",
        "meaning": "trống",
        "example": "He plays the drums in a band.",
        "exampleVi": "Anh ấy chơi trống trong một ban nhạc."
      },
      {
        "type": "Noun",
        "word": "flute-player",
        "ipa": "/ˈfluːt ˌpleɪər/",
        "meaning": "người chơi sáo",
        "example": "The flute-player is very good.",
        "exampleVi": "Người chơi sáo rất giỏi."
      },
      {
        "type": "Noun",
        "word": "orchestra",
        "ipa": "/ˈɔːrkɪstrə/",
        "meaning": "dàn nhạc giao hưởng",
        "example": "She plays in an orchestra.",
        "exampleVi": "Cô ấy chơi trong một dàn nhạc."
      },
      {
        "type": "Noun",
        "word": "trumpet-player",
        "ipa": "/ˈtrʌmpɪt ˌpleɪər/",
        "meaning": "người chơi kèn trumpet",
        "example": "The trumpet-player is on stage.",
        "exampleVi": "Người chơi kèn trumpet đang ở trên sân khấu."
      },
      {
        "type": "Noun",
        "word": "classical music",
        "ipa": "/ˌklæsɪkəl ˈmjuːzɪk/",
        "meaning": "nhạc cổ điển",
        "example": "My mother likes classical music.",
        "exampleVi": "Mẹ tôi thích nhạc cổ điển."
      },
      {
        "type": "Noun",
        "word": "opera",
        "ipa": "/ˈɑːprə/",
        "meaning": "nhạc kịch opera",
        "example": "We went to the opera last night.",
        "exampleVi": "Chúng tôi đã đi xem opera tối qua."
      },
      {
        "type": "Noun",
        "word": "pop music",
        "ipa": "/ˈpɑːp ˌmjuːzɪk/",
        "meaning": "nhạc pop",
        "example": "I like pop music.",
        "exampleVi": "Tôi thích nhạc pop."
      },
      {
        "type": "Noun",
        "word": "folk music",
        "ipa": "/ˈfoʊk ˌmjuːzɪk/",
        "meaning": "nhạc dân gian",
        "example": "My grandparents like folk music.",
        "exampleVi": "Ông bà tôi thích nhạc dân gian."
      },
      {
        "type": "Noun",
        "word": "jazz",
        "ipa": "/dʒæz/",
        "meaning": "nhạc jazz",
        "example": "My father listens to jazz.",
        "exampleVi": "Bố tôi nghe nhạc jazz."
      },
      {
        "type": "Noun",
        "word": "rock",
        "ipa": "/rɑːk/",
        "meaning": "nhạc rock",
        "example": "My brother loves rock.",
        "exampleVi": "Anh/em trai tôi rất thích nhạc rock."
      },
      {
        "type": "Phrase",
        "word": "download some new songs",
        "ipa": "/ˌdaʊnˈloʊd səm nuː sɔːŋz/",
        "meaning": "tải một số bài hát mới",
        "example": "I want to download some new songs.",
        "exampleVi": "Tôi muốn tải một số bài hát mới."
      },
      {
        "type": "Noun",
        "word": "band",
        "ipa": "/bænd/",
        "meaning": "ban nhạc",
        "example": "My friend plays in a band.",
        "exampleVi": "Bạn tôi chơi trong một ban nhạc."
      },
      {
        "type": "Noun",
        "word": "concert",
        "ipa": "/ˈkɑːnsɜːrt/",
        "meaning": "buổi hòa nhạc, buổi biểu diễn âm nhạc",
        "example": "We went to a concert last weekend.",
        "exampleVi": "Chúng tôi đã đi xem một buổi hòa nhạc cuối tuần trước."
      }
    ]
  },
  {
    "id": 27,
    "title": "Countries and nationalities",
    "words": [
      {
        "type": "Noun",
        "word": "continent",
        "ipa": "/ˈkɑːntənənt/",
        "meaning": "châu lục",
        "example": "Asia is a large continent.",
        "exampleVi": "Châu Á là một châu lục lớn."
      },
      {
        "type": "Noun",
        "word": "country",
        "ipa": "/ˈkʌntri/",
        "meaning": "đất nước, quốc gia",
        "example": "Vietnam is my country.",
        "exampleVi": "Việt Nam là đất nước của tôi."
      },
      {
        "type": "Proper noun",
        "word": "North America",
        "ipa": "/ˌnɔːrθ əˈmerɪkə/",
        "meaning": "Bắc Mỹ",
        "example": "Canada is in North America.",
        "exampleVi": "Canada nằm ở Bắc Mỹ."
      },
      {
        "type": "Proper noun",
        "word": "South America",
        "ipa": "/ˌsaʊθ əˈmerɪkə/",
        "meaning": "Nam Mỹ",
        "example": "Brazil is in South America.",
        "exampleVi": "Brazil nằm ở Nam Mỹ."
      },
      {
        "type": "Proper noun",
        "word": "Europe",
        "ipa": "/ˈjʊrəp/",
        "meaning": "châu Âu",
        "example": "France is in Europe.",
        "exampleVi": "Pháp nằm ở châu Âu."
      },
      {
        "type": "Proper noun",
        "word": "Australia",
        "ipa": "/ɔːˈstreɪliə/",
        "meaning": "Úc, Australia",
        "example": "Australia is a large country.",
        "exampleVi": "Australia là một quốc gia lớn."
      },
      {
        "type": "Proper noun",
        "word": "Asia",
        "ipa": "/ˈeɪʒə/",
        "meaning": "châu Á",
        "example": "Vietnam is in Asia.",
        "exampleVi": "Việt Nam nằm ở châu Á."
      },
      {
        "type": "Proper noun",
        "word": "Africa",
        "ipa": "/ˈæfrɪkə/",
        "meaning": "châu Phi",
        "example": "Egypt is in Africa.",
        "exampleVi": "Ai Cập nằm ở châu Phi."
      },
      {
        "type": "Proper noun",
        "word": "Antarctica",
        "ipa": "/ænˈtɑːrktɪkə/",
        "meaning": "Nam Cực",
        "example": "Antarctica is very cold.",
        "exampleVi": "Nam Cực rất lạnh."
      },
      {
        "type": "Noun",
        "word": "nationality",
        "ipa": "/ˌnæʃəˈnæləti/",
        "meaning": "quốc tịch",
        "example": "What is your nationality?",
        "exampleVi": "Quốc tịch của bạn là gì?"
      }
    ]
  },
  {
    "id": 28,
    "title": "Weather",
    "words": [
      {
        "type": "Noun",
        "word": "sun",
        "ipa": "/sʌn/",
        "meaning": "mặt trời; ánh nắng",
        "example": "The sun is very bright today.",
        "exampleVi": "Mặt trời hôm nay rất sáng."
      },
      {
        "type": "Noun",
        "word": "rain",
        "ipa": "/reɪn/",
        "meaning": "mưa",
        "example": "We have a lot of rain in summer.",
        "exampleVi": "Chúng tôi có nhiều mưa vào mùa hè."
      },
      {
        "type": "Noun",
        "word": "cloud",
        "ipa": "/klaʊd/",
        "meaning": "đám mây",
        "example": "There is a big cloud in the sky.",
        "exampleVi": "Có một đám mây lớn trên bầu trời."
      },
      {
        "type": "Noun",
        "word": "snow",
        "ipa": "/snoʊ/",
        "meaning": "tuyết",
        "example": "The children are playing in the snow.",
        "exampleVi": "Bọn trẻ đang chơi trong tuyết."
      },
      {
        "type": "Noun",
        "word": "fog",
        "ipa": "/fɑːɡ/",
        "meaning": "sương mù",
        "example": "There is a lot of fog this morning.",
        "exampleVi": "Sáng nay có rất nhiều sương mù."
      },
      {
        "type": "Noun",
        "word": "wind",
        "ipa": "/wɪnd/",
        "meaning": "gió",
        "example": "The wind is very strong today.",
        "exampleVi": "Gió hôm nay rất mạnh."
      },
      {
        "type": "Noun",
        "word": "thunder",
        "ipa": "/ˈθʌndər/",
        "meaning": "sấm",
        "example": "I can hear thunder.",
        "exampleVi": "Tôi có thể nghe thấy tiếng sấm."
      },
      {
        "type": "Noun",
        "word": "lightning",
        "ipa": "/ˈlaɪtnɪŋ/",
        "meaning": "tia chớp, sét",
        "example": "We saw lightning in the sky.",
        "exampleVi": "Chúng tôi nhìn thấy tia chớp trên bầu trời."
      },
      {
        "type": "Adjective",
        "word": "sunny",
        "ipa": "/ˈsʌni/",
        "meaning": "có nắng, trời nắng",
        "example": "It's sunny today.",
        "exampleVi": "Hôm nay trời nắng."
      },
      {
        "type": "Adjective",
        "word": "rainy",
        "ipa": "/ˈreɪni/",
        "meaning": "có mưa, trời mưa",
        "example": "It is a rainy day.",
        "exampleVi": "Hôm nay là một ngày mưa."
      },
      {
        "type": "Adjective",
        "word": "windy",
        "ipa": "/ˈwɪndi/",
        "meaning": "nhiều gió, có gió",
        "example": "It's very windy today.",
        "exampleVi": "Hôm nay trời rất nhiều gió."
      },
      {
        "type": "Adjective",
        "word": "cloudy",
        "ipa": "/ˈklaʊdi/",
        "meaning": "nhiều mây, có mây",
        "example": "It is cloudy today.",
        "exampleVi": "Hôm nay trời nhiều mây."
      },
      {
        "type": "Adjective",
        "word": "snowy",
        "ipa": "/ˈsnoʊi/",
        "meaning": "có tuyết, đầy tuyết",
        "example": "It is snowy in winter.",
        "exampleVi": "Trời có tuyết vào mùa đông."
      },
      {
        "type": "Adjective",
        "word": "foggy",
        "ipa": "/ˈfɑːɡi/",
        "meaning": "có sương mù",
        "example": "It is foggy this morning.",
        "exampleVi": "Sáng nay trời có sương mù."
      },
      {
        "type": "Adjective",
        "word": "thundery",
        "ipa": "/ˈθʌndəri/",
        "meaning": "có sấm, có giông",
        "example": "It is a thundery day.",
        "exampleVi": "Hôm nay trời có giông."
      },
      {
        "type": "Adjective",
        "word": "hot",
        "ipa": "/hɑːt/",
        "meaning": "nóng",
        "example": "It is very hot today.",
        "exampleVi": "Hôm nay trời rất nóng."
      },
      {
        "type": "Noun",
        "word": "degrees",
        "ipa": "/dɪˈɡriːz/",
        "meaning": "độ (nhiệt độ)",
        "example": "It is 30 degrees today.",
        "exampleVi": "Hôm nay nhiệt độ là 30 độ."
      },
      {
        "type": "Adjective",
        "word": "cold",
        "ipa": "/koʊld/",
        "meaning": "lạnh",
        "example": "It is very cold outside.",
        "exampleVi": "Bên ngoài trời rất lạnh."
      },
      {
        "type": "Phrase",
        "word": "minus 50 degrees",
        "ipa": "/ˈmaɪnəs ˈfɪfti dɪˈɡriːz/",
        "meaning": "âm 50 độ",
        "example": "It is minus 50 degrees in winter.",
        "exampleVi": "Mùa đông nhiệt độ là âm 50 độ."
      },
      {
        "type": "Adjective",
        "word": "wet",
        "ipa": "/wet/",
        "meaning": "ẩm ướt; ướt",
        "example": "The ground is wet after the rain.",
        "exampleVi": "Mặt đất ướt sau cơn mưa."
      },
      {
        "type": "Adjective",
        "word": "dry",
        "ipa": "/draɪ/",
        "meaning": "khô",
        "example": "The weather is hot and dry.",
        "exampleVi": "Thời tiết nóng và khô."
      },
      {
        "type": "Noun",
        "word": "hurricane",
        "ipa": "/ˈhɜːrəkeɪn/",
        "meaning": "bão lớn, bão nhiệt đới",
        "example": "The hurricane is very strong.",
        "exampleVi": "Cơn bão rất mạnh."
      },
      {
        "type": "Noun",
        "word": "storm",
        "ipa": "/stɔːrm/",
        "meaning": "bão, giông bão",
        "example": "There is a big storm tonight.",
        "exampleVi": "Tối nay có một cơn bão lớn."
      },
      {
        "type": "Noun",
        "word": "thunderstorm",
        "ipa": "/ˈθʌndərstɔːrm/",
        "meaning": "bão có sấm sét, giông",
        "example": "We had a thunderstorm last night.",
        "exampleVi": "Tối qua chúng tôi có một trận giông."
      },
      {
        "type": "Phrase",
        "word": "It's a sunny day",
        "ipa": "/ɪts ə ˈsʌni deɪ/",
        "meaning": "Hôm nay là một ngày nắng",
        "example": "It's a sunny day today.",
        "exampleVi": "Hôm nay là một ngày nắng."
      },
      {
        "type": "Verb",
        "word": "shine",
        "ipa": "/ʃaɪn/",
        "meaning": "chiếu sáng, tỏa sáng",
        "example": "The sun is shining.",
        "exampleVi": "Mặt trời đang chiếu sáng."
      },
      {
        "type": "Question",
        "word": "What's the weather like in your country in June?",
        "ipa": "/wʌts ðə ˈweðər laɪk ɪn jʊr ˈkʌntri ɪn dʒuːn/",
        "meaning": "Thời tiết ở đất nước bạn vào tháng Sáu như thế nào?",
        "example": "What's the weather like in your country in June?",
        "exampleVi": "Thời tiết ở đất nước bạn vào tháng Sáu như thế nào?"
      }
    ]
  },
  {
    "id": 29,
    "title": "In the town",
    "words": [
      {
        "type": "Noun",
        "word": "train station",
        "ipa": "/ˈtreɪn ˌsteɪʃən/",
        "meaning": "ga tàu hỏa",
        "example": "The train station is near my house.",
        "exampleVi": "Ga tàu hỏa ở gần nhà tôi."
      },
      {
        "type": "Noun",
        "word": "railway station",
        "ipa": "/ˈreɪlweɪ ˌsteɪʃən/",
        "meaning": "ga đường sắt, ga tàu hỏa",
        "example": "The railway station is very busy.",
        "exampleVi": "Ga tàu hỏa rất đông."
      },
      {
        "type": "Phrase",
        "word": "get a train",
        "ipa": "/ɡet ə treɪn/",
        "meaning": "đi/bắt tàu",
        "example": "I get a train to London.",
        "exampleVi": "Tôi đi tàu đến London."
      },
      {
        "type": "Noun",
        "word": "bus station",
        "ipa": "/ˈbʌs ˌsteɪʃən/",
        "meaning": "bến xe buýt",
        "example": "The bus station is in the town centre.",
        "exampleVi": "Bến xe buýt ở trung tâm thị trấn."
      },
      {
        "type": "Phrase",
        "word": "get a bus",
        "ipa": "/ɡet ə bʌs/",
        "meaning": "đi/bắt xe buýt",
        "example": "I get a bus to school.",
        "exampleVi": "Tôi đi xe buýt đến trường."
      },
      {
        "type": "Noun",
        "word": "shop",
        "ipa": "/ʃɑːp/",
        "meaning": "cửa hàng",
        "example": "There is a small shop near here.",
        "exampleVi": "Có một cửa hàng nhỏ gần đây."
      },
      {
        "type": "Noun",
        "word": "shopping centre",
        "ipa": "/ˈʃɑːpɪŋ ˌsentər/",
        "meaning": "trung tâm mua sắm",
        "example": "The shopping centre is very big.",
        "exampleVi": "Trung tâm mua sắm rất lớn."
      },
      {
        "type": "Noun",
        "word": "tourist information office",
        "ipa": "/ˈtʊrɪst ˌɪnfərˈmeɪʃən ˌɔːfɪs/",
        "meaning": "văn phòng thông tin du lịch",
        "example": "The tourist information office is near the museum.",
        "exampleVi": "Văn phòng thông tin du lịch ở gần bảo tàng."
      },
      {
        "type": "Phrase",
        "word": "get information",
        "ipa": "/ɡet ˌɪnfərˈmeɪʃən/",
        "meaning": "lấy/tìm thông tin",
        "example": "You can get information here.",
        "exampleVi": "Bạn có thể lấy thông tin ở đây."
      },
      {
        "type": "Noun",
        "word": "museum",
        "ipa": "/mjuˈziːəm/",
        "meaning": "bảo tàng",
        "example": "We visited the museum yesterday.",
        "exampleVi": "Chúng tôi đã tham quan bảo tàng hôm qua."
      },
      {
        "type": "Noun",
        "word": "bank",
        "ipa": "/bæŋk/",
        "meaning": "ngân hàng",
        "example": "The bank is next to the post office.",
        "exampleVi": "Ngân hàng ở cạnh bưu điện."
      },
      {
        "type": "Phrase",
        "word": "change money",
        "ipa": "/tʃeɪndʒ ˈmʌni/",
        "meaning": "đổi tiền",
        "example": "I need to change money.",
        "exampleVi": "Tôi cần đổi tiền."
      },
      {
        "type": "Noun",
        "word": "a cash machine",
        "ipa": "/ə kæʃ məˈʃiːn/",
        "meaning": "máy ATM",
        "example": "There is a cash machine outside the bank.",
        "exampleVi": "Có một máy ATM bên ngoài ngân hàng."
      },
      {
        "type": "Noun",
        "word": "post office",
        "ipa": "/ˈpoʊst ˌɔːfɪs/",
        "meaning": "bưu điện",
        "example": "I need to go to the post office.",
        "exampleVi": "Tôi cần đến bưu điện."
      },
      {
        "type": "Phrase",
        "word": "post letters and parcels",
        "ipa": "/poʊst ˈletərz ən ˈpɑːrsəlz/",
        "meaning": "gửi thư và bưu kiện",
        "example": "I post letters and parcels at the post office.",
        "exampleVi": "Tôi gửi thư và bưu kiện ở bưu điện."
      },
      {
        "type": "Noun",
        "word": "library",
        "ipa": "/ˈlaɪbreri/",
        "meaning": "thư viện",
        "example": "I often study in the library.",
        "exampleVi": "Tôi thường học trong thư viện."
      },
      {
        "type": "Phrase",
        "word": "read books and newspapers",
        "ipa": "/riːd bʊks ən ˈnuːzˌpeɪpərz/",
        "meaning": "đọc sách và báo",
        "example": "People read books and newspapers here.",
        "exampleVi": "Mọi người đọc sách và báo ở đây."
      },
      {
        "type": "Noun",
        "word": "town hall",
        "ipa": "/ˈtaʊn ˌhɔːl/",
        "meaning": "tòa thị chính",
        "example": "The town hall is in the town centre.",
        "exampleVi": "Tòa thị chính ở trung tâm thị trấn."
      },
      {
        "type": "Noun",
        "word": "car park",
        "ipa": "/ˈkɑːr ˌpɑːrk/",
        "meaning": "bãi đỗ xe",
        "example": "There is a car park near the shop.",
        "exampleVi": "Có một bãi đỗ xe gần cửa hàng."
      },
      {
        "type": "Phrase",
        "word": "park your car",
        "ipa": "/pɑːrk jʊr kɑːr/",
        "meaning": "đỗ xe ô tô của bạn",
        "example": "You can park your car here.",
        "exampleVi": "Bạn có thể đỗ xe ở đây."
      },
      {
        "type": "Noun",
        "word": "pedestrian area",
        "ipa": "/pəˈdestriən ˌeriə/",
        "meaning": "khu vực dành cho người đi bộ",
        "example": "Cars cannot enter the pedestrian area.",
        "exampleVi": "Ô tô không được vào khu vực dành cho người đi bộ."
      },
      {
        "type": "Noun",
        "word": "notice in town",
        "ipa": "/ˈnoʊtɪs ɪn taʊn/",
        "meaning": "thông báo/biển báo trong thị trấn",
        "example": "I read a notice in town.",
        "exampleVi": "Tôi đọc một thông báo trong thị trấn."
      },
      {
        "type": "Noun",
        "word": "exit",
        "ipa": "/ˈeɡzɪt/",
        "meaning": "lối ra",
        "example": "The exit is on the left.",
        "exampleVi": "Lối ra ở bên trái."
      },
      {
        "type": "Noun",
        "word": "entrance",
        "ipa": "/ˈentrəns/",
        "meaning": "lối vào",
        "example": "The entrance is over there.",
        "exampleVi": "Lối vào ở đằng kia."
      },
      {
        "type": "Sign",
        "word": "no smoking",
        "ipa": "/noʊ ˈsmoʊkɪŋ/",
        "meaning": "cấm hút thuốc",
        "example": "The sign says No smoking.",
        "exampleVi": "Biển báo ghi “Cấm hút thuốc”."
      },
      {
        "type": "Adjective / Sign",
        "word": "out of order",
        "ipa": "/ˌaʊt əv ˈɔːrdər/",
        "meaning": "bị hỏng, không hoạt động",
        "example": "The lift is out of order.",
        "exampleVi": "Thang máy bị hỏng."
      },
      {
        "type": "Sign",
        "word": "please keep off the grass",
        "ipa": "/pliːz kiːp ɔːf ðə ɡræs/",
        "meaning": "vui lòng không giẫm lên cỏ",
        "example": "The sign says, “Please keep off the grass.”",
        "exampleVi": "Biển báo ghi: “Vui lòng không giẫm lên cỏ.”"
      },
      {
        "type": "Question",
        "word": "Where is ...?",
        "ipa": "/wer ɪz/",
        "meaning": "... ở đâu?",
        "example": "Where is the bank?",
        "exampleVi": "Ngân hàng ở đâu?"
      },
      {
        "type": "Phrase",
        "word": "go left",
        "ipa": "/ɡoʊ left/",
        "meaning": "đi sang trái",
        "example": "Go left at the traffic lights.",
        "exampleVi": "Đi sang trái ở đèn giao thông."
      },
      {
        "type": "Phrase",
        "word": "at the end of the road",
        "ipa": "/æt ði end əv ðə roʊd/",
        "meaning": "ở cuối con đường",
        "example": "The bank is at the end of the road.",
        "exampleVi": "Ngân hàng ở cuối con đường."
      },
      {
        "type": "Question",
        "word": "How do I get to ...?",
        "ipa": "/haʊ du aɪ ɡet tə/",
        "meaning": "Làm thế nào để tôi đến ...?",
        "example": "How do I get to the museum?",
        "exampleVi": "Làm thế nào để tôi đến bảo tàng?"
      },
      {
        "type": "Phrase",
        "word": "take the first right",
        "ipa": "/teɪk ðə fɜːrst raɪt/",
        "meaning": "rẽ phải ở ngã rẽ đầu tiên",
        "example": "Take the first right.",
        "exampleVi": "Rẽ phải ở ngã rẽ đầu tiên."
      },
      {
        "type": "Phrase",
        "word": "turn right",
        "ipa": "/tɜːrn raɪt/",
        "meaning": "rẽ phải",
        "example": "Turn right at the bank.",
        "exampleVi": "Rẽ phải ở ngân hàng."
      },
      {
        "type": "Phrase",
        "word": "on the left",
        "ipa": "/ɑːn ðə left/",
        "meaning": "ở bên trái",
        "example": "The library is on the left.",
        "exampleVi": "Thư viện ở bên trái."
      },
      {
        "type": "Expression",
        "word": "Excuse me",
        "ipa": "/ɪkˈskjuːz miː/",
        "meaning": "xin lỗi; xin phép (để hỏi ai đó)",
        "example": "Excuse me, where is the station?",
        "exampleVi": "Xin lỗi, ga tàu ở đâu ạ?"
      },
      {
        "type": "Phrase",
        "word": "I'm looking for ...",
        "ipa": "/aɪm ˈlʊkɪŋ fər/",
        "meaning": "Tôi đang tìm ...",
        "example": "I'm looking for the post office.",
        "exampleVi": "Tôi đang tìm bưu điện."
      },
      {
        "type": "Phrase",
        "word": "take the number ... bus and get off at the ... stop",
        "ipa": "/teɪk ðə ˈnʌmbər bʌs ən ɡet ɔːf æt ðə stoʊp/",
        "meaning": "đi xe buýt số ... và xuống ở trạm ...",
        "example": "Take the number 10 bus and get off at the third stop.",
        "exampleVi": "Đi xe buýt số 10 và xuống ở trạm thứ ba."
      },
      {
        "type": "Question",
        "word": "Can you tell me the way to ...?",
        "ipa": "/kən ju tel mi ðə weɪ tə/",
        "meaning": "Bạn có thể chỉ cho tôi đường đến ... không?",
        "example": "Can you tell me the way to the bank?",
        "exampleVi": "Bạn có thể chỉ cho tôi đường đến ngân hàng không?"
      },
      {
        "type": "Phrase",
        "word": "on the other side of the road",
        "ipa": "/ɑːn ði ˈʌðər saɪd əv ðə roʊd/",
        "meaning": "ở phía bên kia đường",
        "example": "The bank is on the other side of the road.",
        "exampleVi": "Ngân hàng ở phía bên kia đường."
      }
    ]
  },
  {
    "id": 30,
    "title": "In the countryside",
    "words": [
      {
        "type": "Noun",
        "word": "countryside",
        "ipa": "/ˈkʌntrisaɪd/",
        "meaning": "vùng nông thôn, miền quê",
        "example": "I love living in the countryside.",
        "exampleVi": "Tôi thích sống ở vùng nông thôn."
      },
      {
        "type": "Noun",
        "word": "mountain",
        "ipa": "/ˈmaʊntən/",
        "meaning": "núi",
        "example": "There is a high mountain near our village.",
        "exampleVi": "Có một ngọn núi cao gần làng của chúng tôi."
      },
      {
        "type": "Noun",
        "word": "forest",
        "ipa": "/ˈfɔːrəst/",
        "meaning": "rừng",
        "example": "We walked through the forest.",
        "exampleVi": "Chúng tôi đi bộ xuyên qua khu rừng."
      },
      {
        "type": "Noun",
        "word": "lake",
        "ipa": "/leɪk/",
        "meaning": "hồ",
        "example": "There is a beautiful lake near the village.",
        "exampleVi": "Có một cái hồ đẹp gần ngôi làng."
      },
      {
        "type": "Noun",
        "word": "field",
        "ipa": "/fiːld/",
        "meaning": "cánh đồng",
        "example": "The cows are in the field.",
        "exampleVi": "Những con bò đang ở trên cánh đồng."
      },
      {
        "type": "Noun",
        "word": "path",
        "ipa": "/pæθ/",
        "meaning": "con đường mòn, lối đi bộ",
        "example": "Follow this path to the lake.",
        "exampleVi": "Đi theo con đường mòn này đến hồ."
      },
      {
        "type": "Noun",
        "word": "country road",
        "ipa": "/ˈkʌntri roʊd/",
        "meaning": "đường ở nông thôn, đường làng",
        "example": "We drove along a quiet country road.",
        "exampleVi": "Chúng tôi lái xe trên một con đường nông thôn yên tĩnh."
      },
      {
        "type": "Noun",
        "word": "village",
        "ipa": "/ˈvɪlɪdʒ/",
        "meaning": "ngôi làng",
        "example": "My grandparents live in a small village.",
        "exampleVi": "Ông bà tôi sống trong một ngôi làng nhỏ."
      },
      {
        "type": "Noun",
        "word": "hill",
        "ipa": "/hɪl/",
        "meaning": "đồi",
        "example": "The house is on a hill.",
        "exampleVi": "Ngôi nhà ở trên một ngọn đồi."
      },
      {
        "type": "Noun",
        "word": "river",
        "ipa": "/ˈrɪvər/",
        "meaning": "sông",
        "example": "There is a river near the farm.",
        "exampleVi": "Có một con sông gần trang trại."
      },
      {
        "type": "Noun",
        "word": "wood",
        "ipa": "/wʊd/",
        "meaning": "khu rừng nhỏ, lùm cây",
        "example": "We went for a walk in the wood.",
        "exampleVi": "Chúng tôi đi dạo trong khu rừng nhỏ."
      },
      {
        "type": "Noun",
        "word": "farm",
        "ipa": "/fɑːrm/",
        "meaning": "trang trại",
        "example": "My uncle has a farm.",
        "exampleVi": "Chú tôi có một trang trại."
      },
      {
        "type": "Noun",
        "word": "farmer",
        "ipa": "/ˈfɑːrmər/",
        "meaning": "nông dân",
        "example": "The farmer has many cows.",
        "exampleVi": "Người nông dân có nhiều con bò."
      },
      {
        "type": "Phrase",
        "word": "on a farm",
        "ipa": "/ɑːn ə fɑːrm/",
        "meaning": "ở/trên một trang trại",
        "example": "They live on a farm.",
        "exampleVi": "Họ sống ở một trang trại."
      },
      {
        "type": "Noun",
        "word": "cottage",
        "ipa": "/ˈkɑːtɪdʒ/",
        "meaning": "nhà nhỏ ở nông thôn",
        "example": "They have a small cottage in the countryside.",
        "exampleVi": "Họ có một ngôi nhà nhỏ ở vùng nông thôn."
      },
      {
        "type": "Noun",
        "word": "nature",
        "ipa": "/ˈneɪtʃər/",
        "meaning": "thiên nhiên",
        "example": "I love being close to nature.",
        "exampleVi": "Tôi thích gần gũi với thiên nhiên."
      },
      {
        "type": "Noun",
        "word": "conservation",
        "ipa": "/ˌkɑːnsərˈveɪʃən/",
        "meaning": "sự bảo tồn, bảo vệ thiên nhiên",
        "example": "Conservation is important for animals.",
        "exampleVi": "Việc bảo tồn rất quan trọng đối với động vật."
      },
      {
        "type": "Noun",
        "word": "wildlife",
        "ipa": "/ˈwaɪldlaɪf/",
        "meaning": "động vật hoang dã; hệ động thực vật hoang dã",
        "example": "This park has a lot of wildlife.",
        "exampleVi": "Công viên này có nhiều động vật hoang dã."
      },
      {
        "type": "Noun phrase",
        "word": "a conservation area",
        "ipa": "/ə ˌkɑːnsərˈveɪʃən ˌeriə/",
        "meaning": "khu bảo tồn, khu vực được bảo vệ",
        "example": "This is a conservation area.",
        "exampleVi": "Đây là một khu bảo tồn."
      },
      {
        "type": "Noun",
        "word": "national park",
        "ipa": "/ˈnæʃənəl pɑːrk/",
        "meaning": "vườn quốc gia",
        "example": "We visited a national park last summer.",
        "exampleVi": "Chúng tôi đã thăm một vườn quốc gia vào mùa hè năm ngoái."
      },
      {
        "type": "Phrase",
        "word": "have a picnic",
        "ipa": "/hæv ə ˈpɪknɪk/",
        "meaning": "đi/dùng bữa dã ngoại",
        "example": "We have a picnic by the lake.",
        "exampleVi": "Chúng tôi đi dã ngoại bên hồ."
      },
      {
        "type": "Phrase",
        "word": "go walking",
        "ipa": "/ɡoʊ ˈwɔːkɪŋ/",
        "meaning": "đi bộ, đi dạo",
        "example": "We go walking in the countryside.",
        "exampleVi": "Chúng tôi đi bộ ở vùng nông thôn."
      },
      {
        "type": "Phrase",
        "word": "go skiing",
        "ipa": "/ɡoʊ ˈskiːɪŋ/",
        "meaning": "đi trượt tuyết",
        "example": "We go skiing in winter.",
        "exampleVi": "Chúng tôi đi trượt tuyết vào mùa đông."
      }
    ]
  },
  {
    "id": 31,
    "title": "Animals",
    "words": [
      {
        "type": "Noun",
        "word": "farm animal",
        "ipa": "/ˈfɑːrm ˌænɪməl/",
        "meaning": "động vật nuôi trong trang trại",
        "example": "A cow is a farm animal.",
        "exampleVi": "Bò là một loài động vật nuôi trong trang trại."
      },
      {
        "type": "Noun",
        "word": "horse",
        "ipa": "/hɔːrs/",
        "meaning": "ngựa",
        "example": "The horse is very big.",
        "exampleVi": "Con ngựa rất to."
      },
      {
        "type": "Noun",
        "word": "chicken",
        "ipa": "/ˈtʃɪkən/",
        "meaning": "gà; thịt gà",
        "example": "We have three chickens.",
        "exampleVi": "Chúng tôi có ba con gà."
      },
      {
        "type": "Noun",
        "word": "hen",
        "ipa": "/hen/",
        "meaning": "gà mái",
        "example": "The hen has three eggs.",
        "exampleVi": "Con gà mái có ba quả trứng."
      },
      {
        "type": "Noun",
        "word": "pig",
        "ipa": "/pɪɡ/",
        "meaning": "lợn, heo",
        "example": "The pig is eating.",
        "exampleVi": "Con lợn đang ăn."
      },
      {
        "type": "Noun",
        "word": "sheep",
        "ipa": "/ʃiːp/",
        "meaning": "cừu",
        "example": "There are five sheep in the field.",
        "exampleVi": "Có năm con cừu trên cánh đồng."
      },
      {
        "type": "Noun",
        "word": "cow",
        "ipa": "/kaʊ/",
        "meaning": "bò cái; bò",
        "example": "The cow gives us milk.",
        "exampleVi": "Con bò cho chúng ta sữa."
      },
      {
        "type": "Noun",
        "word": "goat",
        "ipa": "/ɡoʊt/",
        "meaning": "dê",
        "example": "The goat is eating grass.",
        "exampleVi": "Con dê đang ăn cỏ."
      },
      {
        "type": "Verb",
        "word": "produce",
        "ipa": "/prəˈduːs/",
        "meaning": "sản xuất; tạo ra; cho ra sản phẩm",
        "example": "Cows produce milk.",
        "exampleVi": "Bò cho ra sữa."
      },
      {
        "type": "Noun",
        "word": "hair",
        "ipa": "/her/",
        "meaning": "lông, tóc",
        "example": "The horse has long hair.",
        "exampleVi": "Con ngựa có lông dài."
      },
      {
        "type": "Noun",
        "word": "meat",
        "ipa": "/miːt/",
        "meaning": "thịt",
        "example": "We eat meat for dinner.",
        "exampleVi": "Chúng tôi ăn thịt vào bữa tối."
      },
      {
        "type": "Noun",
        "word": "foal",
        "ipa": "/foʊl/",
        "meaning": "ngựa con",
        "example": "The foal is with its mother.",
        "exampleVi": "Con ngựa con ở cùng mẹ nó."
      },
      {
        "type": "Noun",
        "word": "milk",
        "ipa": "/mɪlk/",
        "meaning": "sữa",
        "example": "I drink milk every morning.",
        "exampleVi": "Tôi uống sữa mỗi sáng."
      },
      {
        "type": "Noun",
        "word": "leather",
        "ipa": "/ˈleðər/",
        "meaning": "da thuộc",
        "example": "These shoes are made of leather.",
        "exampleVi": "Đôi giày này được làm bằng da thuộc."
      },
      {
        "type": "Noun",
        "word": "beef",
        "ipa": "/biːf/",
        "meaning": "thịt bò",
        "example": "We had beef for dinner.",
        "exampleVi": "Chúng tôi ăn thịt bò vào bữa tối."
      },
      {
        "type": "Noun",
        "word": "calf",
        "ipa": "/kæf/",
        "meaning": "bê, nghé",
        "example": "The calf is very small.",
        "exampleVi": "Con bê rất nhỏ."
      },
      {
        "type": "Noun",
        "word": "wool",
        "ipa": "/wʊl/",
        "meaning": "len; lông cừu",
        "example": "This sweater is made of wool.",
        "exampleVi": "Chiếc áo len này được làm từ len."
      },
      {
        "type": "Noun",
        "word": "lamb",
        "ipa": "/læm/",
        "meaning": "cừu non; thịt cừu",
        "example": "The lamb is with its mother.",
        "exampleVi": "Con cừu non ở cùng mẹ nó."
      },
      {
        "type": "Noun",
        "word": "pork",
        "ipa": "/pɔːrk/",
        "meaning": "thịt lợn",
        "example": "My father likes pork.",
        "exampleVi": "Bố tôi thích thịt lợn."
      },
      {
        "type": "Noun",
        "word": "bacon",
        "ipa": "/ˈbeɪkən/",
        "meaning": "thịt xông khói",
        "example": "I like bacon and eggs.",
        "exampleVi": "Tôi thích thịt xông khói và trứng."
      },
      {
        "type": "Noun",
        "word": "ham",
        "ipa": "/hæm/",
        "meaning": "thịt nguội, giăm bông",
        "example": "I had a ham sandwich.",
        "exampleVi": "Tôi đã ăn một chiếc bánh sandwich giăm bông."
      },
      {
        "type": "Noun",
        "word": "piglet",
        "ipa": "/ˈpɪɡlət/",
        "meaning": "lợn con",
        "example": "The piglet is very small.",
        "exampleVi": "Con lợn con rất nhỏ."
      },
      {
        "type": "Noun",
        "word": "egg",
        "ipa": "/eɡ/",
        "meaning": "trứng",
        "example": "I eat an egg for breakfast.",
        "exampleVi": "Tôi ăn một quả trứng vào bữa sáng."
      },
      {
        "type": "Noun",
        "word": "chick",
        "ipa": "/tʃɪk/",
        "meaning": "gà con",
        "example": "The chick is yellow.",
        "exampleVi": "Con gà con màu vàng."
      },
      {
        "type": "Noun",
        "word": "kid",
        "ipa": "/kɪd/",
        "meaning": "dê con",
        "example": "The kid is playing with its mother.",
        "exampleVi": "Con dê con đang chơi với mẹ nó."
      },
      {
        "type": "Noun",
        "word": "wild animal",
        "ipa": "/waɪld ˈænɪməl/",
        "meaning": "động vật hoang dã",
        "example": "A tiger is a wild animal.",
        "exampleVi": "Hổ là một loài động vật hoang dã."
      },
      {
        "type": "Noun",
        "word": "zoo animal",
        "ipa": "/zuː ˈænɪməl/",
        "meaning": "động vật sống trong sở thú",
        "example": "An elephant is a zoo animal.",
        "exampleVi": "Voi là một loài động vật sống trong sở thú."
      },
      {
        "type": "Noun",
        "word": "elephant",
        "ipa": "/ˈeləfənt/",
        "meaning": "voi",
        "example": "The elephant is very large.",
        "exampleVi": "Con voi rất lớn."
      },
      {
        "type": "Noun",
        "word": "snake",
        "ipa": "/sneɪk/",
        "meaning": "rắn",
        "example": "The snake is long.",
        "exampleVi": "Con rắn dài."
      },
      {
        "type": "Noun",
        "word": "monkey",
        "ipa": "/ˈmʌŋki/",
        "meaning": "khỉ",
        "example": "The monkey is in the tree.",
        "exampleVi": "Con khỉ ở trên cây."
      },
      {
        "type": "Noun",
        "word": "tiger",
        "ipa": "/ˈtaɪɡər/",
        "meaning": "hổ",
        "example": "The tiger is dangerous.",
        "exampleVi": "Con hổ nguy hiểm."
      },
      {
        "type": "Noun",
        "word": "lion",
        "ipa": "/ˈlaɪən/",
        "meaning": "sư tử",
        "example": "The lion is sleeping.",
        "exampleVi": "Con sư tử đang ngủ."
      },
      {
        "type": "Noun",
        "word": "giraffe",
        "ipa": "/dʒəˈræf/",
        "meaning": "hươu cao cổ",
        "example": "The giraffe has a long neck.",
        "exampleVi": "Hươu cao cổ có cổ dài."
      },
      {
        "type": "Noun",
        "word": "pet",
        "ipa": "/pet/",
        "meaning": "thú cưng",
        "example": "I have a pet at home.",
        "exampleVi": "Tôi có một con thú cưng ở nhà."
      },
      {
        "type": "Noun",
        "word": "fish",
        "ipa": "/fɪʃ/",
        "meaning": "cá",
        "example": "I have two fish.",
        "exampleVi": "Tôi có hai con cá."
      },
      {
        "type": "Noun",
        "word": "cat",
        "ipa": "/kæt/",
        "meaning": "mèo",
        "example": "My cat likes sleeping.",
        "exampleVi": "Con mèo của tôi thích ngủ."
      },
      {
        "type": "Noun",
        "word": "rabbit",
        "ipa": "/ˈræbɪt/",
        "meaning": "thỏ",
        "example": "The rabbit is white.",
        "exampleVi": "Con thỏ màu trắng."
      },
      {
        "type": "Noun",
        "word": "parrot",
        "ipa": "/ˈperət/",
        "meaning": "vẹt",
        "example": "My parrot can talk.",
        "exampleVi": "Con vẹt của tôi có thể nói."
      },
      {
        "type": "Noun",
        "word": "bird",
        "ipa": "/bɜːrd/",
        "meaning": "chim",
        "example": "There is a bird in the tree.",
        "exampleVi": "Có một con chim trên cây."
      },
      {
        "type": "Noun",
        "word": "dog",
        "ipa": "/dɔːɡ/",
        "meaning": "chó",
        "example": "My dog is very friendly.",
        "exampleVi": "Con chó của tôi rất thân thiện."
      },
      {
        "type": "Noun",
        "word": "tortoise",
        "ipa": "/ˈtɔːrtəs/",
        "meaning": "rùa cạn",
        "example": "The tortoise moves slowly.",
        "exampleVi": "Con rùa cạn di chuyển chậm."
      },
      {
        "type": "Phrase",
        "word": "take ... for a walk",
        "ipa": "/teɪk fər ə wɔːk/",
        "meaning": "dắt ... đi dạo",
        "example": "I take my dog for a walk every morning.",
        "exampleVi": "Tôi dắt chó đi dạo mỗi sáng."
      },
      {
        "type": "Phrase",
        "word": "feed your animal",
        "ipa": "/fiːd jʊr ˈænɪməl/",
        "meaning": "cho động vật của bạn ăn",
        "example": "Please feed your animal every day.",
        "exampleVi": "Hãy cho thú cưng của bạn ăn mỗi ngày."
      },
      {
        "type": "Phrase",
        "word": "give them water",
        "ipa": "/ɡɪv ðəm ˈwɔːtər/",
        "meaning": "cho chúng nước uống",
        "example": "We give them water every morning.",
        "exampleVi": "Chúng tôi cho chúng nước mỗi sáng."
      },
      {
        "type": "Question",
        "word": "Do you have any pets?",
        "ipa": "/duː ju hæv ˈeni pets/",
        "meaning": "Bạn có thú cưng nào không?",
        "example": "Do you have any pets?",
        "exampleVi": "Bạn có thú cưng nào không?"
      }
    ]
  },
  {
    "id": 32,
    "title": "Travelling",
    "words": [
      {
        "type": "Noun",
        "word": "transport",
        "ipa": "/ˈtrænspɔːrt/",
        "meaning": "phương tiện giao thông; giao thông vận tải",
        "example": "Public transport is cheap here.",
        "exampleVi": "Phương tiện giao thông công cộng ở đây rẻ."
      },
      {
        "type": "Noun",
        "word": "train",
        "ipa": "/treɪn/",
        "meaning": "tàu hỏa",
        "example": "I go to work by train.",
        "exampleVi": "Tôi đi làm bằng tàu hỏa."
      },
      {
        "type": "Noun",
        "word": "bus",
        "ipa": "/bʌs/",
        "meaning": "xe buýt",
        "example": "I take the bus to school.",
        "exampleVi": "Tôi đi xe buýt đến trường."
      },
      {
        "type": "Noun",
        "word": "bicycle",
        "ipa": "/ˈbaɪsɪkəl/",
        "meaning": "xe đạp",
        "example": "I go to school by bicycle.",
        "exampleVi": "Tôi đi học bằng xe đạp."
      },
      {
        "type": "Noun",
        "word": "bike",
        "ipa": "/baɪk/",
        "meaning": "xe đạp; xe máy (tùy ngữ cảnh)",
        "example": "I have a new bike.",
        "exampleVi": "Tôi có một chiếc xe đạp mới."
      },
      {
        "type": "Noun",
        "word": "taxi",
        "ipa": "/ˈtæksi/",
        "meaning": "taxi",
        "example": "We took a taxi to the hotel.",
        "exampleVi": "Chúng tôi đi taxi đến khách sạn."
      },
      {
        "type": "Noun",
        "word": "(aero)plane",
        "ipa": "/ˈerəpleɪn/",
        "meaning": "máy bay",
        "example": "The plane leaves at eight.",
        "exampleVi": "Máy bay khởi hành lúc tám giờ."
      },
      {
        "type": "Noun",
        "word": "car",
        "ipa": "/kɑːr/",
        "meaning": "ô tô",
        "example": "My father drives a car to work.",
        "exampleVi": "Bố tôi lái ô tô đi làm."
      },
      {
        "type": "Noun",
        "word": "helicopter",
        "ipa": "/ˈhelɪˌkɑːptər/",
        "meaning": "trực thăng",
        "example": "The helicopter is in the sky.",
        "exampleVi": "Chiếc trực thăng ở trên bầu trời."
      },
      {
        "type": "Noun",
        "word": "motorbike",
        "ipa": "/ˈmoʊtərbaɪk/",
        "meaning": "xe máy",
        "example": "He goes to work by motorbike.",
        "exampleVi": "Anh ấy đi làm bằng xe máy."
      },
      {
        "type": "Noun",
        "word": "motorcycle",
        "ipa": "/ˈmoʊtərˌsaɪkəl/",
        "meaning": "xe mô tô, xe máy",
        "example": "She has a new motorcycle.",
        "exampleVi": "Cô ấy có một chiếc xe máy mới."
      },
      {
        "type": "Noun",
        "word": "underground",
        "ipa": "/ˈʌndərɡraʊnd/",
        "meaning": "tàu điện ngầm",
        "example": "I take the underground to work.",
        "exampleVi": "Tôi đi tàu điện ngầm đến chỗ làm."
      },
      {
        "type": "Noun",
        "word": "boat",
        "ipa": "/boʊt/",
        "meaning": "thuyền",
        "example": "We went across the river by boat.",
        "exampleVi": "Chúng tôi qua sông bằng thuyền."
      },
      {
        "type": "Noun",
        "word": "ship",
        "ipa": "/ʃɪp/",
        "meaning": "tàu thủy",
        "example": "The ship is very large.",
        "exampleVi": "Con tàu rất lớn."
      },
      {
        "type": "Noun",
        "word": "map",
        "ipa": "/mæp/",
        "meaning": "bản đồ",
        "example": "I looked at the map.",
        "exampleVi": "Tôi đã xem bản đồ."
      },
      {
        "type": "Noun",
        "word": "timetable",
        "ipa": "/ˈtaɪmˌteɪbəl/",
        "meaning": "lịch trình, thời gian biểu",
        "example": "Check the timetable before you travel.",
        "exampleVi": "Hãy xem lịch trình trước khi đi."
      },
      {
        "type": "Noun",
        "word": "customs",
        "ipa": "/ˈkʌstəmz/",
        "meaning": "hải quan",
        "example": "We went through customs at the airport.",
        "exampleVi": "Chúng tôi làm thủ tục hải quan ở sân bay."
      },
      {
        "type": "Noun",
        "word": "luggage",
        "ipa": "/ˈlʌɡɪdʒ/",
        "meaning": "hành lý",
        "example": "My luggage is very heavy.",
        "exampleVi": "Hành lý của tôi rất nặng."
      },
      {
        "type": "Noun",
        "word": "passport",
        "ipa": "/ˈpæspɔːrt/",
        "meaning": "hộ chiếu",
        "example": "Don't forget your passport.",
        "exampleVi": "Đừng quên hộ chiếu của bạn."
      },
      {
        "type": "Noun",
        "word": "single ticket",
        "ipa": "/ˌsɪŋɡəl ˈtɪkɪt/",
        "meaning": "vé một chiều",
        "example": "I'd like a single ticket to London.",
        "exampleVi": "Tôi muốn một vé một chiều đến London."
      },
      {
        "type": "Noun",
        "word": "return ticket",
        "ipa": "/rɪˈtɜːrn ˌtɪkɪt/",
        "meaning": "vé khứ hồi",
        "example": "I bought a return ticket.",
        "exampleVi": "Tôi đã mua một vé khứ hồi."
      },
      {
        "type": "Phrase",
        "word": "book a seat in advance",
        "ipa": "/bʊk ə siːt ɪn ədˈvæns/",
        "meaning": "đặt chỗ trước",
        "example": "I booked a seat in advance.",
        "exampleVi": "Tôi đã đặt chỗ trước."
      },
      {
        "type": "Phrase",
        "word": "reserve a seat in advance",
        "ipa": "/rɪˈzɜːrv ə siːt ɪn ədˈvæns/",
        "meaning": "đặt chỗ trước",
        "example": "You should reserve a seat in advance.",
        "exampleVi": "Bạn nên đặt chỗ trước."
      },
      {
        "type": "Noun",
        "word": "journey",
        "ipa": "/ˈdʒɜːrni/",
        "meaning": "chuyến đi, hành trình",
        "example": "The journey takes two hours.",
        "exampleVi": "Chuyến đi mất hai giờ."
      },
      {
        "type": "Phrase",
        "word": "arriving at",
        "ipa": "/əˈraɪvɪŋ æt/",
        "meaning": "đến tại",
        "example": "The train is arriving at platform 3.",
        "exampleVi": "Tàu đang đến sân ga số 3."
      },
      {
        "type": "Phrase",
        "word": "depart from",
        "ipa": "/dɪˈpɑːrt frəm/",
        "meaning": "khởi hành từ",
        "example": "The train departs from platform 5.",
        "exampleVi": "Tàu khởi hành từ sân ga số 5."
      },
      {
        "type": "Phrase",
        "word": "leave from",
        "ipa": "/liːv frəm/",
        "meaning": "rời đi/khởi hành từ",
        "example": "The bus leaves from the station.",
        "exampleVi": "Xe buýt khởi hành từ nhà ga."
      },
      {
        "type": "Noun",
        "word": "restaurant car",
        "ipa": "/ˈrestrɑːnt kɑːr/",
        "meaning": "toa ăn, toa nhà hàng trên tàu",
        "example": "We had lunch in the restaurant car.",
        "exampleVi": "Chúng tôi ăn trưa trong toa ăn."
      },
      {
        "type": "Phrase",
        "word": "change trains",
        "ipa": "/tʃeɪndʒ treɪnz/",
        "meaning": "đổi tàu",
        "example": "We have to change trains in London.",
        "exampleVi": "Chúng tôi phải đổi tàu ở London."
      },
      {
        "type": "Adjective",
        "word": "direct",
        "ipa": "/dəˈrekt/",
        "meaning": "trực tiếp, không phải đổi phương tiện",
        "example": "Is there a direct train to London?",
        "exampleVi": "Có tàu trực tiếp đến London không?"
      },
      {
        "type": "Verb",
        "word": "check in",
        "ipa": "/tʃek ɪn/",
        "meaning": "làm thủ tục check-in",
        "example": "We need to check in two hours early.",
        "exampleVi": "Chúng tôi cần làm thủ tục hai giờ trước."
      },
      {
        "type": "Phrasal verb",
        "word": "take off",
        "ipa": "/teɪk ɔːf/",
        "meaning": "cất cánh",
        "example": "The plane takes off at 9 a.m.",
        "exampleVi": "Máy bay cất cánh lúc 9 giờ sáng."
      },
      {
        "type": "Noun",
        "word": "online check-in",
        "ipa": "/ˌɑːnˈlaɪn ˈtʃek ɪn/",
        "meaning": "thủ tục check-in trực tuyến",
        "example": "Online check-in is easy.",
        "exampleVi": "Check-in trực tuyến rất dễ."
      },
      {
        "type": "Phrase",
        "word": "check in online",
        "ipa": "/tʃek ɪn ˌɑːnˈlaɪn/",
        "meaning": "làm thủ tục trực tuyến",
        "example": "I checked in online yesterday.",
        "exampleVi": "Tôi đã check-in trực tuyến hôm qua."
      },
      {
        "type": "Noun",
        "word": "boarding card",
        "ipa": "/ˈbɔːrdɪŋ kɑːrd/",
        "meaning": "thẻ lên máy bay",
        "example": "Please show your boarding card.",
        "exampleVi": "Vui lòng xuất trình thẻ lên máy bay."
      },
      {
        "type": "Noun",
        "word": "flight attendant",
        "ipa": "/ˈflaɪt əˌtendənt/",
        "meaning": "tiếp viên hàng không",
        "example": "The flight attendant gave me some water.",
        "exampleVi": "Tiếp viên hàng không đưa cho tôi một ít nước."
      },
      {
        "type": "Phrase",
        "word": "have a good flight",
        "ipa": "/hæv ə ɡʊd flaɪt/",
        "meaning": "chúc chuyến bay tốt đẹp",
        "example": "Have a good flight!",
        "exampleVi": "Chúc bạn có một chuyến bay tốt đẹp!"
      },
      {
        "type": "Verb",
        "word": "land",
        "ipa": "/lænd/",
        "meaning": "hạ cánh",
        "example": "The plane lands at six.",
        "exampleVi": "Máy bay hạ cánh lúc sáu giờ."
      },
      {
        "type": "Phrase",
        "word": "go through customs",
        "ipa": "/ɡoʊ θruː ˈkʌstəmz/",
        "meaning": "làm thủ tục qua hải quan",
        "example": "We went through customs quickly.",
        "exampleVi": "Chúng tôi làm thủ tục hải quan nhanh chóng."
      },
      {
        "type": "Phrase",
        "word": "hire a car",
        "ipa": "/haɪr ə kɑːr/",
        "meaning": "thuê ô tô",
        "example": "We hired a car at the airport.",
        "exampleVi": "Chúng tôi thuê một chiếc ô tô ở sân bay."
      },
      {
        "type": "Phrase",
        "word": "fill ... up with petrol",
        "ipa": "/fɪl ... ʌp wɪð ˈpetrəl/",
        "meaning": "đổ đầy xăng cho...",
        "example": "We need to fill the car up with petrol.",
        "exampleVi": "Chúng ta cần đổ đầy xăng cho ô tô."
      },
      {
        "type": "Phrase",
        "word": "give ... a lift",
        "ipa": "/ɡɪv ... ə lɪft/",
        "meaning": "cho ai đi nhờ xe",
        "example": "Can you give me a lift to the station?",
        "exampleVi": "Bạn có thể cho tôi đi nhờ đến nhà ga không?"
      }
    ]
  },
  {
    "id": 33,
    "title": "UK culture",
    "words": [
      {
        "type": "Noun",
        "word": "special day",
        "ipa": "/ˈspeʃəl deɪ/",
        "meaning": "ngày đặc biệt",
        "example": "Christmas is a special day for many people.",
        "exampleVi": "Giáng sinh là một ngày đặc biệt đối với nhiều người."
      },
      {
        "type": "Noun",
        "word": "festival",
        "ipa": "/ˈfestəvəl/",
        "meaning": "lễ hội",
        "example": "The town has a music festival every year.",
        "exampleVi": "Thị trấn có một lễ hội âm nhạc mỗi năm."
      },
      {
        "type": "Noun",
        "word": "Christmas",
        "ipa": "/ˈkrɪsməs/",
        "meaning": "lễ Giáng sinh",
        "example": "We visit our family at Christmas.",
        "exampleVi": "Chúng tôi thăm gia đình vào dịp Giáng sinh."
      },
      {
        "type": "Noun",
        "word": "Christmas tree",
        "ipa": "/ˈkrɪsməs triː/",
        "meaning": "cây thông Noel",
        "example": "We have a Christmas tree in our living room.",
        "exampleVi": "Chúng tôi có một cây thông Noel trong phòng khách."
      },
      {
        "type": "Noun",
        "word": "New Year's Eve",
        "ipa": "/ˌnuː jɪrz ˈiːv/",
        "meaning": "đêm Giao thừa",
        "example": "We have a party on New Year's Eve.",
        "exampleVi": "Chúng tôi tổ chức một bữa tiệc vào đêm Giao thừa."
      },
      {
        "type": "Noun",
        "word": "New Year's Day",
        "ipa": "/ˌnuː jɪrz ˈdeɪ/",
        "meaning": "ngày đầu năm mới",
        "example": "We visit our grandparents on New Year's Day.",
        "exampleVi": "Chúng tôi thăm ông bà vào ngày đầu năm mới."
      },
      {
        "type": "Noun",
        "word": "bank holiday",
        "ipa": "/ˈbæŋk ˌhɑːlədeɪ/",
        "meaning": "ngày nghỉ lễ chính thức",
        "example": "Monday is a bank holiday.",
        "exampleVi": "Thứ Hai là một ngày nghỉ lễ chính thức."
      },
      {
        "type": "Noun",
        "word": "Valentine's Day",
        "ipa": "/ˈvæləntaɪnz deɪ/",
        "meaning": "Ngày lễ Tình nhân",
        "example": "They have dinner together on Valentine's Day.",
        "exampleVi": "Họ ăn tối cùng nhau vào Ngày lễ Tình nhân."
      },
      {
        "type": "Noun",
        "word": "Easter",
        "ipa": "/ˈiːstər/",
        "meaning": "Lễ Phục sinh",
        "example": "We usually visit our family at Easter.",
        "exampleVi": "Chúng tôi thường thăm gia đình vào dịp Lễ Phục sinh."
      },
      {
        "type": "Noun",
        "word": "Easter egg",
        "ipa": "/ˈiːstər eɡ/",
        "meaning": "trứng Phục sinh",
        "example": "The children get Easter eggs.",
        "exampleVi": "Những đứa trẻ nhận được trứng Phục sinh."
      },
      {
        "type": "Noun",
        "word": "Halloween",
        "ipa": "/ˌhæləˈwiːn/",
        "meaning": "Halloween, Lễ hội hóa trang",
        "example": "Children wear costumes on Halloween.",
        "exampleVi": "Trẻ em mặc trang phục hóa trang vào Halloween."
      },
      {
        "type": "Noun",
        "word": "Bonfire Night",
        "ipa": "/ˈbɑːnfaɪər naɪt/",
        "meaning": "Đêm Lửa trại (5/11 ở Anh)",
        "example": "People watch fireworks on Bonfire Night.",
        "exampleVi": "Mọi người xem pháo hoa vào Đêm Lửa trại."
      },
      {
        "type": "Noun",
        "word": "fireworks",
        "ipa": "/ˈfaɪərwɜːrks/",
        "meaning": "pháo hoa",
        "example": "We watched the fireworks last night.",
        "exampleVi": "Chúng tôi đã xem pháo hoa tối qua."
      },
      {
        "type": "Noun",
        "word": "fish and chips",
        "ipa": "/ˌfɪʃ ən ˈtʃɪps/",
        "meaning": "cá và khoai tây chiên",
        "example": "I had fish and chips for dinner.",
        "exampleVi": "Tôi đã ăn cá và khoai tây chiên vào bữa tối."
      },
      {
        "type": "Noun",
        "word": "roast beef",
        "ipa": "/ˌroʊst ˈbiːf/",
        "meaning": "thịt bò nướng",
        "example": "We had roast beef on Sunday.",
        "exampleVi": "Chúng tôi ăn thịt bò nướng vào Chủ nhật."
      },
      {
        "type": "Noun",
        "word": "roast potatoes",
        "ipa": "/ˌroʊst pəˈteɪtoʊz/",
        "meaning": "khoai tây nướng",
        "example": "We ate roast potatoes with the beef.",
        "exampleVi": "Chúng tôi ăn khoai tây nướng cùng thịt bò."
      },
      {
        "type": "Noun",
        "word": "oven",
        "ipa": "/ˈʌvən/",
        "meaning": "lò nướng",
        "example": "The chicken is in the oven.",
        "exampleVi": "Con gà đang ở trong lò nướng."
      },
      {
        "type": "Noun",
        "word": "Yorkshire pudding",
        "ipa": "/ˌjɔːrkʃər ˈpʊdɪŋ/",
        "meaning": "bánh Yorkshire",
        "example": "We eat Yorkshire pudding with roast beef.",
        "exampleVi": "Chúng tôi ăn bánh Yorkshire cùng thịt bò nướng."
      },
      {
        "type": "Noun",
        "word": "chicken tikka masala",
        "ipa": "/ˌtʃɪkən ˈtiːkə məˈsɑːlə/",
        "meaning": "món gà tikka masala",
        "example": "I like chicken tikka masala.",
        "exampleVi": "Tôi thích món gà tikka masala."
      },
      {
        "type": "Noun",
        "word": "curry",
        "ipa": "/ˈkɜːri/",
        "meaning": "món cà ri",
        "example": "We had curry for dinner.",
        "exampleVi": "Chúng tôi ăn cà ri vào bữa tối."
      },
      {
        "type": "Noun",
        "word": "nursery school",
        "ipa": "/ˈnɜːrsəri skuːl/",
        "meaning": "trường mầm non",
        "example": "My daughter goes to nursery school.",
        "exampleVi": "Con gái tôi đi học trường mầm non."
      },
      {
        "type": "Noun",
        "word": "primary school",
        "ipa": "/ˈpraɪmeri skuːl/",
        "meaning": "trường tiểu học",
        "example": "My son is at primary school.",
        "exampleVi": "Con trai tôi học tiểu học."
      },
      {
        "type": "Noun",
        "word": "secondary school",
        "ipa": "/ˈsekənderi skuːl/",
        "meaning": "trường trung học",
        "example": "She goes to secondary school.",
        "exampleVi": "Cô ấy học trường trung học."
      },
      {
        "type": "Noun",
        "word": "state school",
        "ipa": "/ˈsteɪt skuːl/",
        "meaning": "trường công lập",
        "example": "My children go to a state school.",
        "exampleVi": "Các con tôi học trường công lập."
      },
      {
        "type": "Noun",
        "word": "private school",
        "ipa": "/ˈpraɪvət skuːl/",
        "meaning": "trường tư thục",
        "example": "He goes to a private school.",
        "exampleVi": "Cậu ấy học trường tư."
      },
      {
        "type": "Noun",
        "word": "politics",
        "ipa": "/ˈpɑːlətɪks/",
        "meaning": "chính trị",
        "example": "We sometimes talk about politics.",
        "exampleVi": "Đôi khi chúng tôi nói về chính trị."
      },
      {
        "type": "Noun",
        "word": "royal family",
        "ipa": "/ˈrɔɪəl ˌfæməli/",
        "meaning": "Hoàng gia",
        "example": "Many tourists visit London to learn about the royal family.",
        "exampleVi": "Nhiều du khách đến London để tìm hiểu về Hoàng gia."
      },
      {
        "type": "Noun",
        "word": "king",
        "ipa": "/kɪŋ/",
        "meaning": "vua",
        "example": "The king lives in a palace.",
        "exampleVi": "Nhà vua sống trong một cung điện."
      },
      {
        "type": "Noun",
        "word": "queen",
        "ipa": "/kwiːn/",
        "meaning": "nữ hoàng",
        "example": "The queen was very popular.",
        "exampleVi": "Nữ hoàng rất được yêu mến."
      },
      {
        "type": "Noun",
        "word": "Houses of Parliament",
        "ipa": "/ˌhaʊzɪz əv ˈpɑːrləmənt/",
        "meaning": "Tòa nhà Quốc hội Anh",
        "example": "The Houses of Parliament are in London.",
        "exampleVi": "Tòa nhà Quốc hội Anh ở London."
      },
      {
        "type": "Noun",
        "word": "Prime Minister",
        "ipa": "/ˌpraɪm ˈmɪnɪstər/",
        "meaning": "Thủ tướng",
        "example": "The Prime Minister works in London.",
        "exampleVi": "Thủ tướng làm việc ở London."
      }
    ]
  },
  {
    "id": 34,
    "title": "Crime",
    "words": [
      {
        "type": "Noun",
        "word": "crime",
        "ipa": "/kraɪm/",
        "meaning": "tội phạm; hành vi phạm tội",
        "example": "Crime is a serious problem in some cities.",
        "exampleVi": "Tội phạm là một vấn đề nghiêm trọng ở một số thành phố."
      },
      {
        "type": "Noun",
        "word": "criminal",
        "ipa": "/ˈkrɪmənəl/",
        "meaning": "tội phạm; kẻ phạm tội",
        "example": "The police caught the criminal.",
        "exampleVi": "Cảnh sát đã bắt được tên tội phạm."
      },
      {
        "type": "Noun",
        "word": "robbery",
        "ipa": "/ˈrɑːbəri/",
        "meaning": "vụ cướp",
        "example": "There was a robbery at the bank.",
        "exampleVi": "Có một vụ cướp ở ngân hàng."
      },
      {
        "type": "Noun",
        "word": "robber",
        "ipa": "/ˈrɑːbər/",
        "meaning": "kẻ cướp",
        "example": "The robber ran away.",
        "exampleVi": "Tên cướp đã chạy trốn."
      },
      {
        "type": "Verb",
        "word": "rob sb/place",
        "ipa": "/rɑːb/",
        "meaning": "cướp ai/nơi nào",
        "example": "They robbed a bank.",
        "exampleVi": "Họ đã cướp một ngân hàng."
      },
      {
        "type": "Noun",
        "word": "murder",
        "ipa": "/ˈmɜːrdər/",
        "meaning": "vụ giết người",
        "example": "The police are investigating the murder.",
        "exampleVi": "Cảnh sát đang điều tra vụ giết người."
      },
      {
        "type": "Noun",
        "word": "murderer",
        "ipa": "/ˈmɜːrdərər/",
        "meaning": "kẻ giết người",
        "example": "The murderer was arrested.",
        "exampleVi": "Kẻ giết người đã bị bắt."
      },
      {
        "type": "Verb",
        "word": "murder sb",
        "ipa": "/ˈmɜːrdər/",
        "meaning": "giết người",
        "example": "The man murdered his victim.",
        "exampleVi": "Người đàn ông đã giết nạn nhân của mình."
      },
      {
        "type": "Noun",
        "word": "burglary",
        "ipa": "/ˈbɜːrɡləri/",
        "meaning": "vụ đột nhập trộm cắp",
        "example": "There was a burglary at our house.",
        "exampleVi": "Có một vụ đột nhập trộm cắp tại nhà chúng tôi."
      },
      {
        "type": "Noun",
        "word": "burglar",
        "ipa": "/ˈbɜːrɡlər/",
        "meaning": "kẻ trộm đột nhập",
        "example": "The burglar broke a window.",
        "exampleVi": "Kẻ trộm đột nhập đã đập vỡ một cửa sổ."
      },
      {
        "type": "Phrase",
        "word": "break into...",
        "ipa": "/breɪk ˈɪntuː/",
        "meaning": "đột nhập vào",
        "example": "Someone broke into our house.",
        "exampleVi": "Ai đó đã đột nhập vào nhà chúng tôi."
      },
      {
        "type": "Noun",
        "word": "mugging",
        "ipa": "/ˈmʌɡɪŋ/",
        "meaning": "vụ cướp đường phố",
        "example": "There was a mugging near the station.",
        "exampleVi": "Có một vụ cướp đường phố gần nhà ga."
      },
      {
        "type": "Noun",
        "word": "mugger",
        "ipa": "/ˈmʌɡər/",
        "meaning": "kẻ cướp đường phố",
        "example": "The mugger took his phone.",
        "exampleVi": "Kẻ cướp đường phố lấy điện thoại của anh ấy."
      },
      {
        "type": "Verb",
        "word": "mug sb",
        "ipa": "/mʌɡ/",
        "meaning": "cướp tài sản của ai, thường ở nơi công cộng",
        "example": "The man was mugged on his way home.",
        "exampleVi": "Người đàn ông bị cướp trên đường về nhà."
      },
      {
        "type": "Noun",
        "word": "car theft",
        "ipa": "/ˈkɑːr θeft/",
        "meaning": "hành vi/vụ trộm xe",
        "example": "Car theft is a problem in this area.",
        "exampleVi": "Trộm xe là một vấn đề ở khu vực này."
      },
      {
        "type": "Noun",
        "word": "car thief",
        "ipa": "/ˈkɑːr θiːf/",
        "meaning": "kẻ trộm xe",
        "example": "The car thief was arrested.",
        "exampleVi": "Kẻ trộm xe đã bị bắt."
      },
      {
        "type": "Phrase",
        "word": "steal a car",
        "ipa": "/stiːl ə kɑːr/",
        "meaning": "trộm một chiếc xe",
        "example": "Someone stole my car last night.",
        "exampleVi": "Ai đó đã trộm xe của tôi tối qua."
      },
      {
        "type": "Noun",
        "word": "drug dealing",
        "ipa": "/ˈdrʌɡ ˌdiːlɪŋ/",
        "meaning": "buôn bán ma túy",
        "example": "Drug dealing is illegal.",
        "exampleVi": "Buôn bán ma túy là bất hợp pháp."
      },
      {
        "type": "Noun",
        "word": "drug dealer",
        "ipa": "/ˈdrʌɡ ˌdiːlər/",
        "meaning": "kẻ buôn ma túy",
        "example": "The police arrested a drug dealer.",
        "exampleVi": "Cảnh sát đã bắt một kẻ buôn ma túy."
      },
      {
        "type": "Phrase",
        "word": "sell drugs",
        "ipa": "/sel drʌɡz/",
        "meaning": "bán ma túy",
        "example": "It is illegal to sell drugs.",
        "exampleVi": "Bán ma túy là bất hợp pháp."
      },
      {
        "type": "Noun",
        "word": "terrorism",
        "ipa": "/ˈterərɪzəm/",
        "meaning": "chủ nghĩa khủng bố; khủng bố",
        "example": "Terrorism is a serious problem.",
        "exampleVi": "Khủng bố là một vấn đề nghiêm trọng."
      },
      {
        "type": "Noun",
        "word": "terrorist",
        "ipa": "/ˈterərɪst/",
        "meaning": "kẻ khủng bố",
        "example": "The terrorist was arrested.",
        "exampleVi": "Kẻ khủng bố đã bị bắt."
      },
      {
        "type": "Phrase",
        "word": "attack sb/place",
        "ipa": "/əˈtæk/",
        "meaning": "tấn công ai/nơi nào",
        "example": "The men attacked the building.",
        "exampleVi": "Những người đàn ông đã tấn công tòa nhà."
      },
      {
        "type": "Noun",
        "word": "shoplifting",
        "ipa": "/ˈʃɑːpˌlɪftɪŋ/",
        "meaning": "hành vi ăn cắp hàng trong cửa hàng",
        "example": "Shoplifting is against the law.",
        "exampleVi": "Ăn cắp hàng trong cửa hàng là trái pháp luật."
      },
      {
        "type": "Noun",
        "word": "shoplifter",
        "ipa": "/ˈʃɑːpˌlɪftər/",
        "meaning": "kẻ ăn cắp hàng trong cửa hàng",
        "example": "The shoplifter was caught.",
        "exampleVi": "Kẻ ăn cắp hàng đã bị bắt."
      },
      {
        "type": "Phrase",
        "word": "steal things from a shop",
        "ipa": "/stiːl θɪŋz frəm ə ʃɑːp/",
        "meaning": "lấy trộm đồ từ cửa hàng",
        "example": "He stole things from a shop.",
        "exampleVi": "Anh ta lấy trộm đồ từ một cửa hàng."
      },
      {
        "type": "Noun",
        "word": "law",
        "ipa": "/lɔː/",
        "meaning": "luật pháp, luật",
        "example": "Everyone must obey the law.",
        "exampleVi": "Mọi người phải tuân thủ pháp luật."
      },
      {
        "type": "Phrase",
        "word": "be arrested for",
        "ipa": "/biː əˈrestɪd fɔːr/",
        "meaning": "bị bắt vì",
        "example": "He was arrested for robbery.",
        "exampleVi": "Anh ta bị bắt vì tội cướp."
      },
      {
        "type": "Noun",
        "word": "police",
        "ipa": "/pəˈliːs/",
        "meaning": "cảnh sát",
        "example": "The police are looking for the thief.",
        "exampleVi": "Cảnh sát đang tìm tên trộm."
      },
      {
        "type": "Phrase",
        "word": "go to court",
        "ipa": "/ɡoʊ tə kɔːrt/",
        "meaning": "ra tòa",
        "example": "He has to go to court.",
        "exampleVi": "Anh ấy phải ra tòa."
      },
      {
        "type": "Adjective",
        "word": "guilty",
        "ipa": "/ˈɡɪlti/",
        "meaning": "có tội",
        "example": "The man was found guilty.",
        "exampleVi": "Người đàn ông bị kết luận là có tội."
      },
      {
        "type": "Phrase",
        "word": "pay a fine",
        "ipa": "/peɪ ə faɪn/",
        "meaning": "nộp tiền phạt",
        "example": "He had to pay a fine.",
        "exampleVi": "Anh ấy phải nộp tiền phạt."
      },
      {
        "type": "Adjective",
        "word": "innocent",
        "ipa": "/ˈɪnəsənt/",
        "meaning": "vô tội",
        "example": "The man is innocent.",
        "exampleVi": "Người đàn ông vô tội."
      },
      {
        "type": "Phrase",
        "word": "go to prison",
        "ipa": "/ɡoʊ tə ˈprɪzən/",
        "meaning": "đi tù",
        "example": "He went to prison for five years.",
        "exampleVi": "Anh ta đi tù năm năm."
      },
      {
        "type": "Noun",
        "word": "vandals",
        "ipa": "/ˈvændəlz/",
        "meaning": "những kẻ phá hoại",
        "example": "The vandals broke the windows.",
        "exampleVi": "Những kẻ phá hoại đã đập vỡ cửa sổ."
      },
      {
        "type": "Noun",
        "word": "vandalism",
        "ipa": "/ˈvændəlɪzəm/",
        "meaning": "hành vi phá hoại tài sản",
        "example": "Vandalism is a crime.",
        "exampleVi": "Phá hoại tài sản là một tội phạm."
      },
      {
        "type": "Phrase",
        "word": "take drugs",
        "ipa": "/teɪk drʌɡz/",
        "meaning": "sử dụng ma túy",
        "example": "He was arrested for taking drugs.",
        "exampleVi": "Anh ta bị bắt vì sử dụng ma túy."
      },
      {
        "type": "Noun",
        "word": "football hooliganism",
        "ipa": "/ˈfʊtbɔːl ˈhuːlɪɡənɪzəm/",
        "meaning": "nạn bạo lực của cổ động viên bóng đá",
        "example": "Football hooliganism can be dangerous.",
        "exampleVi": "Bạo lực của cổ động viên bóng đá có thể nguy hiểm."
      },
      {
        "type": "Noun",
        "word": "football hooligan",
        "ipa": "/ˈfʊtbɔːl ˈhuːlɪɡən/",
        "meaning": "cổ động viên bóng đá quá khích",
        "example": "The football hooligan was arrested.",
        "exampleVi": "Cổ động viên bóng đá quá khích đã bị bắt."
      }
    ]
  },
  {
    "id": 35,
    "title": "The media",
    "words": [
      {
        "type": "Noun",
        "word": "radio",
        "ipa": "/ˈreɪdioʊ/",
        "meaning": "đài phát thanh; radio",
        "example": "I listen to the radio every morning.",
        "exampleVi": "Tôi nghe radio mỗi sáng."
      },
      {
        "type": "Noun",
        "word": "programme",
        "ipa": "/ˈproʊɡræm/",
        "meaning": "chương trình",
        "example": "This is my favourite TV programme.",
        "exampleVi": "Đây là chương trình TV yêu thích của tôi."
      },
      {
        "type": "Noun",
        "word": "news",
        "ipa": "/nuːz/",
        "meaning": "tin tức",
        "example": "I watch the news every evening.",
        "exampleVi": "Tôi xem tin tức mỗi tối."
      },
      {
        "type": "Noun",
        "word": "soaps",
        "ipa": "/soʊps/",
        "meaning": "phim truyền hình dài tập",
        "example": "My mother likes watching soaps.",
        "exampleVi": "Mẹ tôi thích xem phim truyền hình dài tập."
      },
      {
        "type": "Noun",
        "word": "soap operas",
        "ipa": "/ˈsoʊp ˌɑːpərəz/",
        "meaning": "phim truyền hình dài tập",
        "example": "She watches soap operas every day.",
        "exampleVi": "Cô ấy xem phim truyền hình dài tập mỗi ngày."
      },
      {
        "type": "Noun",
        "word": "nature programme",
        "ipa": "/ˈneɪtʃər ˌproʊɡræm/",
        "meaning": "chương trình về thiên nhiên",
        "example": "I like watching nature programmes.",
        "exampleVi": "Tôi thích xem các chương trình về thiên nhiên."
      },
      {
        "type": "Noun",
        "word": "documentary",
        "ipa": "/ˌdɑːkjuˈmentəri/",
        "meaning": "phim/chương trình tài liệu",
        "example": "We watched a documentary about animals.",
        "exampleVi": "Chúng tôi đã xem một bộ phim tài liệu về động vật."
      },
      {
        "type": "Noun",
        "word": "talk show",
        "ipa": "/ˈtɔːk ʃoʊ/",
        "meaning": "chương trình trò chuyện",
        "example": "My father watches a talk show in the evening.",
        "exampleVi": "Bố tôi xem một chương trình trò chuyện vào buổi tối."
      },
      {
        "type": "Noun",
        "word": "cartoon",
        "ipa": "/kɑːrˈtuːn/",
        "meaning": "phim hoạt hình",
        "example": "The children are watching a cartoon.",
        "exampleVi": "Bọn trẻ đang xem phim hoạt hình."
      },
      {
        "type": "Noun",
        "word": "reality TV",
        "ipa": "/riˈæləti ˌtiːˈviː/",
        "meaning": "truyền hình thực tế",
        "example": "My sister likes reality TV.",
        "exampleVi": "Chị tôi thích truyền hình thực tế."
      },
      {
        "type": "Noun",
        "word": "sports programme",
        "ipa": "/spɔːrts ˌproʊɡræm/",
        "meaning": "chương trình thể thao",
        "example": "He watches a sports programme every Sunday.",
        "exampleVi": "Anh ấy xem chương trình thể thao mỗi Chủ nhật."
      },
      {
        "type": "Noun",
        "word": "magazine",
        "ipa": "/ˌmæɡəˈziːn/",
        "meaning": "tạp chí",
        "example": "I read a magazine on the train.",
        "exampleVi": "Tôi đọc một tạp chí trên tàu."
      },
      {
        "type": "Noun",
        "word": "morning newspaper",
        "ipa": "/ˈmɔːrnɪŋ ˈnuːzˌpeɪpər/",
        "meaning": "báo buổi sáng",
        "example": "My father reads the morning newspaper.",
        "exampleVi": "Bố tôi đọc báo buổi sáng."
      },
      {
        "type": "Noun",
        "word": "evening newspaper",
        "ipa": "/ˈiːvnɪŋ ˈnuːzˌpeɪpər/",
        "meaning": "báo buổi tối",
        "example": "She buys an evening newspaper.",
        "exampleVi": "Cô ấy mua một tờ báo buổi tối."
      },
      {
        "type": "Noun",
        "word": "women's magazine",
        "ipa": "/ˈwɪmɪnz ˌmæɡəˈziːn/",
        "meaning": "tạp chí dành cho phụ nữ",
        "example": "She reads a women's magazine.",
        "exampleVi": "Cô ấy đọc một tạp chí dành cho phụ nữ."
      },
      {
        "type": "Noun",
        "word": "news magazine",
        "ipa": "/ˈnuːz ˌmæɡəˈziːn/",
        "meaning": "tạp chí tin tức",
        "example": "He reads a news magazine every week.",
        "exampleVi": "Anh ấy đọc một tạp chí tin tức mỗi tuần."
      },
      {
        "type": "Noun",
        "word": "advert",
        "ipa": "/ˈædvɜːrt/",
        "meaning": "quảng cáo",
        "example": "I saw an advert on TV.",
        "exampleVi": "Tôi đã thấy một quảng cáo trên TV."
      },
      {
        "type": "Noun",
        "word": "advertisement",
        "ipa": "/ˌædvərˈtaɪzmənt/",
        "meaning": "quảng cáo",
        "example": "There is an advertisement for a new car.",
        "exampleVi": "Có một quảng cáo về một chiếc ô tô mới."
      },
      {
        "type": "Noun",
        "word": "sports magazine",
        "ipa": "/spɔːrts ˌmæɡəˈziːn/",
        "meaning": "tạp chí thể thao",
        "example": "He buys a sports magazine every month.",
        "exampleVi": "Anh ấy mua một tạp chí thể thao mỗi tháng."
      },
      {
        "type": "Noun",
        "word": "computer magazine",
        "ipa": "/kəmˈpjuːtər ˌmæɡəˈziːn/",
        "meaning": "tạp chí máy tính",
        "example": "I read a computer magazine.",
        "exampleVi": "Tôi đọc một tạp chí máy tính."
      },
      {
        "type": "Noun",
        "word": "teenage magazine",
        "ipa": "/ˈtiːneɪdʒ ˌmæɡəˈziːn/",
        "meaning": "tạp chí dành cho tuổi teen",
        "example": "She reads a teenage magazine.",
        "exampleVi": "Cô ấy đọc một tạp chí dành cho tuổi teen."
      },
      {
        "type": "Noun",
        "word": "media",
        "ipa": "/ˈmiːdiə/",
        "meaning": "truyền thông",
        "example": "The media often reports important news.",
        "exampleVi": "Truyền thông thường đưa tin về những tin tức quan trọng."
      },
      {
        "type": "Phrase",
        "word": "an interview with",
        "ipa": "/ən ˈɪntərvjuː wɪð/",
        "meaning": "một cuộc phỏng vấn với",
        "example": "There is an interview with a famous actor.",
        "exampleVi": "Có một cuộc phỏng vấn với một diễn viên nổi tiếng."
      },
      {
        "type": "Noun",
        "word": "reporter",
        "ipa": "/rɪˈpɔːrtər/",
        "meaning": "phóng viên",
        "example": "The reporter is talking to people.",
        "exampleVi": "Phóng viên đang nói chuyện với mọi người."
      },
      {
        "type": "Noun",
        "word": "journalist",
        "ipa": "/ˈdʒɜːrnəlɪst/",
        "meaning": "nhà báo",
        "example": "My uncle is a journalist.",
        "exampleVi": "Chú tôi là một nhà báo."
      },
      {
        "type": "Phrase",
        "word": "read a newspaper",
        "ipa": "/riːd ə ˈnuːzˌpeɪpər/",
        "meaning": "đọc báo",
        "example": "I read a newspaper every morning.",
        "exampleVi": "Tôi đọc báo mỗi sáng."
      },
      {
        "type": "Phrase",
        "word": "watch TV online",
        "ipa": "/wɑːtʃ ˌtiːˈviː ɑːnˈlaɪn/",
        "meaning": "xem TV trực tuyến",
        "example": "We watch TV online at home.",
        "exampleVi": "Chúng tôi xem TV trực tuyến ở nhà."
      },
      {
        "type": "Question",
        "word": "What's your favourite TV programme?",
        "ipa": "/wʌts jʊr ˈfeɪvərɪt ˌtiːˈviː ˌproʊɡræm/",
        "meaning": "Chương trình TV yêu thích của bạn là gì?",
        "example": "What's your favourite TV programme?",
        "exampleVi": "Chương trình TV yêu thích của bạn là gì?"
      },
      {
        "type": "Question",
        "word": "What's on TV...?",
        "ipa": "/wʌts ɑːn ˌtiːˈviː/",
        "meaning": "Có gì trên TV...?",
        "example": "What's on TV tonight?",
        "exampleVi": "Tối nay có gì trên TV?"
      },
      {
        "type": "Phrase",
        "word": "change the channel",
        "ipa": "/tʃeɪndʒ ðə ˈtʃænəl/",
        "meaning": "chuyển kênh",
        "example": "Can you change the channel, please?",
        "exampleVi": "Bạn có thể chuyển kênh giúp tôi được không?"
      }
    ]
  },
  {
    "id": 36,
    "title": "Problems at home and work",
    "words": [
      {
        "type": "Noun",
        "word": "problem",
        "ipa": "/ˈprɑːbləm/",
        "meaning": "vấn đề, sự cố",
        "example": "I have a problem with my computer.",
        "exampleVi": "Tôi có vấn đề với máy tính."
      },
      {
        "type": "Adjective",
        "word": "working",
        "ipa": "/ˈwɜːrkɪŋ/",
        "meaning": "đang hoạt động, hoạt động bình thường",
        "example": "The TV isn't working.",
        "exampleVi": "TV không hoạt động."
      },
      {
        "type": "Verb",
        "word": "repair",
        "ipa": "/rɪˈper/",
        "meaning": "sửa chữa",
        "example": "Can you repair my bike?",
        "exampleVi": "Bạn có thể sửa xe đạp của tôi không?"
      },
      {
        "type": "Verb",
        "word": "dying",
        "ipa": "/ˈdaɪɪŋ/",
        "meaning": "sắp hỏng; sắp hết",
        "example": "My phone battery is dying.",
        "exampleVi": "Pin điện thoại của tôi sắp hết."
      },
      {
        "type": "Noun",
        "word": "water",
        "ipa": "/ˈwɔːtər/",
        "meaning": "nước",
        "example": "There is no water in the kitchen.",
        "exampleVi": "Không có nước trong bếp."
      },
      {
        "type": "Adjective",
        "word": "broken",
        "ipa": "/ˈbroʊkən/",
        "meaning": "bị hỏng, bị vỡ",
        "example": "The window is broken.",
        "exampleVi": "Cửa sổ bị vỡ."
      },
      {
        "type": "Verb",
        "word": "mend",
        "ipa": "/mend/",
        "meaning": "sửa chữa, vá",
        "example": "Can you mend my shirt?",
        "exampleVi": "Bạn có thể sửa áo cho tôi không?"
      },
      {
        "type": "Adjective",
        "word": "untidy",
        "ipa": "/ʌnˈtaɪdi/",
        "meaning": "bừa bộn, không gọn gàng",
        "example": "Your room is very untidy.",
        "exampleVi": "Phòng của bạn rất bừa bộn."
      },
      {
        "type": "Adjective",
        "word": "tidy",
        "ipa": "/ˈtaɪdi/",
        "meaning": "gọn gàng, ngăn nắp",
        "example": "Please keep your room tidy.",
        "exampleVi": "Hãy giữ phòng của bạn gọn gàng."
      },
      {
        "type": "Adjective",
        "word": "lost",
        "ipa": "/lɔːst/",
        "meaning": "bị mất; bị lạc",
        "example": "I've lost my keys.",
        "exampleVi": "Tôi đã làm mất chìa khóa."
      },
      {
        "type": "Phrasal verb",
        "word": "look for",
        "ipa": "/lʊk fɔːr/",
        "meaning": "tìm kiếm",
        "example": "I'm looking for my phone.",
        "exampleVi": "Tôi đang tìm điện thoại."
      },
      {
        "type": "Verb",
        "word": "cut",
        "ipa": "/kʌt/",
        "meaning": "cắt; làm bị thương/cắt vào",
        "example": "I cut my finger.",
        "exampleVi": "Tôi bị đứt tay."
      },
      {
        "type": "Phrase",
        "word": "put on a plaster",
        "ipa": "/pʊt ɑːn ə ˈplæstər/",
        "meaning": "dán băng cá nhân",
        "example": "I put a plaster on my finger.",
        "exampleVi": "Tôi dán băng cá nhân lên ngón tay."
      },
      {
        "type": "Phrase",
        "word": "have a row with",
        "ipa": "/hæv ə raʊ wɪð/",
        "meaning": "cãi nhau với ai",
        "example": "I had a row with my brother.",
        "exampleVi": "Tôi đã cãi nhau với anh trai."
      },
      {
        "type": "Verb",
        "word": "apologise",
        "ipa": "/əˈpɑːlədʒaɪz/",
        "meaning": "xin lỗi",
        "example": "I apologised to my friend.",
        "exampleVi": "Tôi đã xin lỗi bạn mình."
      },
      {
        "type": "Phrase",
        "word": "have a bad day",
        "ipa": "/hæv ə bæd deɪ/",
        "meaning": "có một ngày tồi tệ",
        "example": "I had a bad day at work.",
        "exampleVi": "Tôi đã có một ngày tồi tệ ở chỗ làm."
      },
      {
        "type": "Phrase",
        "word": "be late for",
        "ipa": "/biː leɪt fɔːr/",
        "meaning": "đến muộn",
        "example": "I was late for work.",
        "exampleVi": "Tôi đã đi làm muộn."
      },
      {
        "type": "Phrase",
        "word": "too much work",
        "ipa": "/tuː mʌtʃ wɜːrk/",
        "meaning": "quá nhiều việc",
        "example": "I have too much work today.",
        "exampleVi": "Hôm nay tôi có quá nhiều việc."
      },
      {
        "type": "Phrase",
        "word": "in a bad mood",
        "ipa": "/ɪn ə bæd muːd/",
        "meaning": "tâm trạng không tốt",
        "example": "He's in a bad mood today.",
        "exampleVi": "Hôm nay anh ấy có tâm trạng không tốt."
      },
      {
        "type": "Phrase",
        "word": "computer crashed",
        "ipa": "/kəmˈpjuːtər kræʃt/",
        "meaning": "máy tính bị treo/hỏng đột ngột",
        "example": "My computer crashed yesterday.",
        "exampleVi": "Máy tính của tôi bị treo hôm qua."
      },
      {
        "type": "Phrase",
        "word": "out of order",
        "ipa": "/aʊt əv ˈɔːrdər/",
        "meaning": "bị hỏng, không hoạt động",
        "example": "The lift is out of order.",
        "exampleVi": "Thang máy bị hỏng."
      }
    ]
  },
  {
    "id": 37,
    "title": "Global problems",
    "words": [
      {
        "type": "Adjective",
        "word": "global",
        "ipa": "/ˈɡloʊbəl/",
        "meaning": "toàn cầu",
        "example": "Climate change is a global problem.",
        "exampleVi": "Biến đổi khí hậu là một vấn đề toàn cầu."
      },
      {
        "type": "Noun",
        "word": "natural disaster",
        "ipa": "/ˌnætʃərəl dɪˈzæstər/",
        "meaning": "thảm họa thiên nhiên",
        "example": "An earthquake is a natural disaster.",
        "exampleVi": "Động đất là một thảm họa thiên nhiên."
      },
      {
        "type": "Noun",
        "word": "hurricane",
        "ipa": "/ˈhɜːrəkeɪn/",
        "meaning": "bão lớn, bão nhiệt đới",
        "example": "The hurricane damaged many houses.",
        "exampleVi": "Cơn bão đã làm hư hại nhiều ngôi nhà."
      },
      {
        "type": "Noun",
        "word": "snowstorm",
        "ipa": "/ˈsnoʊstɔːrm/",
        "meaning": "bão tuyết",
        "example": "The snowstorm stopped the trains.",
        "exampleVi": "Bão tuyết khiến các chuyến tàu phải dừng lại."
      },
      {
        "type": "Noun",
        "word": "forest fire",
        "ipa": "/ˈfɔːrɪst faɪər/",
        "meaning": "cháy rừng",
        "example": "The forest fire destroyed many trees.",
        "exampleVi": "Vụ cháy rừng đã phá hủy nhiều cây cối."
      },
      {
        "type": "Noun",
        "word": "earthquake",
        "ipa": "/ˈɜːrθkweɪk/",
        "meaning": "động đất",
        "example": "The earthquake damaged the buildings.",
        "exampleVi": "Trận động đất làm hư hại các tòa nhà."
      },
      {
        "type": "Noun",
        "word": "flood",
        "ipa": "/flʌd/",
        "meaning": "lũ lụt",
        "example": "The heavy rain caused a flood.",
        "exampleVi": "Mưa lớn gây ra lũ lụt."
      },
      {
        "type": "Noun",
        "word": "man-made problem",
        "ipa": "/ˌmæn ˈmeɪd ˈprɑːbləm/",
        "meaning": "vấn đề do con người gây ra",
        "example": "Pollution is a man-made problem.",
        "exampleVi": "Ô nhiễm là một vấn đề do con người gây ra."
      },
      {
        "type": "Adjective",
        "word": "crowded",
        "ipa": "/ˈkraʊdɪd/",
        "meaning": "đông đúc, chật chội",
        "example": "The city is very crowded.",
        "exampleVi": "Thành phố rất đông đúc."
      },
      {
        "type": "Adjective",
        "word": "poor",
        "ipa": "/pʊr/",
        "meaning": "nghèo",
        "example": "Many poor people need help.",
        "exampleVi": "Nhiều người nghèo cần sự giúp đỡ."
      },
      {
        "type": "Adjective",
        "word": "hungry",
        "ipa": "/ˈhʌŋɡri/",
        "meaning": "đói",
        "example": "Some children are hungry.",
        "exampleVi": "Một số trẻ em bị đói."
      },
      {
        "type": "Adjective",
        "word": "homeless",
        "ipa": "/ˈhoʊmləs/",
        "meaning": "vô gia cư",
        "example": "Many homeless people live on the streets.",
        "exampleVi": "Nhiều người vô gia cư sống trên đường phố."
      },
      {
        "type": "Adjective",
        "word": "unemployed",
        "ipa": "/ˌʌnɪmˈplɔɪd/",
        "meaning": "thất nghiệp",
        "example": "He has been unemployed for six months.",
        "exampleVi": "Anh ấy đã thất nghiệp được sáu tháng."
      },
      {
        "type": "Noun",
        "word": "pollution",
        "ipa": "/pəˈluːʃən/",
        "meaning": "sự ô nhiễm",
        "example": "Pollution is a big problem.",
        "exampleVi": "Ô nhiễm là một vấn đề lớn."
      },
      {
        "type": "Adjective",
        "word": "polluted",
        "ipa": "/pəˈluːtɪd/",
        "meaning": "bị ô nhiễm",
        "example": "The river is badly polluted.",
        "exampleVi": "Con sông bị ô nhiễm nghiêm trọng."
      },
      {
        "type": "Noun",
        "word": "air pollution",
        "ipa": "/ˈer pəˌluːʃən/",
        "meaning": "ô nhiễm không khí",
        "example": "Air pollution is worse in big cities.",
        "exampleVi": "Ô nhiễm không khí nghiêm trọng hơn ở các thành phố lớn."
      },
      {
        "type": "Noun",
        "word": "war",
        "ipa": "/wɔːr/",
        "meaning": "chiến tranh",
        "example": "Many people lost their homes during the war.",
        "exampleVi": "Nhiều người mất nhà trong chiến tranh."
      },
      {
        "type": "Phrase",
        "word": "on strike",
        "ipa": "/ɑːn straɪk/",
        "meaning": "đang đình công",
        "example": "The workers are on strike.",
        "exampleVi": "Những người công nhân đang đình công."
      },
      {
        "type": "Noun",
        "word": "car crash",
        "ipa": "/ˈkɑːr kræʃ/",
        "meaning": "vụ tai nạn ô tô",
        "example": "There was a car crash this morning.",
        "exampleVi": "Có một vụ tai nạn ô tô sáng nay."
      },
      {
        "type": "Noun",
        "word": "traffic jam",
        "ipa": "/ˈtræfɪk dʒæm/",
        "meaning": "tắc đường",
        "example": "There is a traffic jam on the main road.",
        "exampleVi": "Có một vụ tắc đường trên con đường chính."
      },
      {
        "type": "Noun",
        "word": "rush hour",
        "ipa": "/ˈrʌʃ aʊər/",
        "meaning": "giờ cao điểm",
        "example": "The roads are busy during rush hour.",
        "exampleVi": "Đường phố đông đúc vào giờ cao điểm."
      }
    ]
  },
  {
    "id": 38,
    "title": "Have / had / had",
    "words": [
      {
        "type": "Phrase",
        "word": "have breakfast",
        "ipa": "/hæv ˈbrekfəst/",
        "meaning": "ăn sáng",
        "example": "I have breakfast every morning.",
        "exampleVi": "Tôi ăn sáng mỗi sáng."
      },
      {
        "type": "Phrase",
        "word": "have lunch",
        "ipa": "/hæv lʌntʃ/",
        "meaning": "ăn trưa",
        "example": "We have lunch at noon.",
        "exampleVi": "Chúng tôi ăn trưa vào buổi trưa."
      },
      {
        "type": "Phrase",
        "word": "have dinner",
        "ipa": "/hæv ˈdɪnər/",
        "meaning": "ăn tối",
        "example": "They have dinner at six.",
        "exampleVi": "Họ ăn tối lúc sáu giờ."
      },
      {
        "type": "Phrase",
        "word": "have a meal",
        "ipa": "/hæv ə miːl/",
        "meaning": "ăn một bữa",
        "example": "We have a meal together.",
        "exampleVi": "Chúng tôi ăn một bữa cùng nhau."
      },
      {
        "type": "Phrase",
        "word": "have a party",
        "ipa": "/hæv ə ˈpɑːrti/",
        "meaning": "tổ chức một bữa tiệc",
        "example": "We have a party on Saturday.",
        "exampleVi": "Chúng tôi tổ chức một bữa tiệc vào thứ Bảy."
      },
      {
        "type": "Phrase",
        "word": "have a meeting",
        "ipa": "/hæv ə ˈmiːtɪŋ/",
        "meaning": "có/tổ chức một cuộc họp",
        "example": "I have a meeting at ten.",
        "exampleVi": "Tôi có một cuộc họp lúc mười giờ."
      },
      {
        "type": "Phrase",
        "word": "have a game",
        "ipa": "/hæv ə ɡeɪm/",
        "meaning": "chơi một trận/ván",
        "example": "Let's have a game of tennis.",
        "exampleVi": "Hãy chơi một trận tennis."
      },
      {
        "type": "Phrase",
        "word": "have a lesson",
        "ipa": "/hæv ə ˈlesən/",
        "meaning": "học một tiết/buổi học",
        "example": "I have a lesson at nine.",
        "exampleVi": "Tôi có một tiết học lúc chín giờ."
      },
      {
        "type": "Phrase",
        "word": "have an exam",
        "ipa": "/hæv ən ɪɡˈzæm/",
        "meaning": "có một kỳ thi/bài thi",
        "example": "I have an exam tomorrow.",
        "exampleVi": "Ngày mai tôi có một bài thi."
      },
      {
        "type": "Phrase",
        "word": "have homework",
        "ipa": "/hæv ˈhoʊmwɜːrk/",
        "meaning": "có bài tập về nhà",
        "example": "I have homework tonight.",
        "exampleVi": "Tối nay tôi có bài tập về nhà."
      },
      {
        "type": "Phrase",
        "word": "have a cup of tea",
        "ipa": "/hæv ə kʌp əv tiː/",
        "meaning": "uống một tách trà",
        "example": "I have a cup of tea every morning.",
        "exampleVi": "Tôi uống một tách trà mỗi sáng."
      },
      {
        "type": "Phrase",
        "word": "have a cup of coffee",
        "ipa": "/hæv ə kʌp əv ˈkɔːfi/",
        "meaning": "uống một tách cà phê",
        "example": "She has a cup of coffee at breakfast.",
        "exampleVi": "Cô ấy uống một tách cà phê vào bữa sáng."
      },
      {
        "type": "Phrase",
        "word": "have a drink",
        "ipa": "/hæv ə drɪŋk/",
        "meaning": "uống một thứ gì đó",
        "example": "Let's have a drink.",
        "exampleVi": "Hãy uống gì đó nhé."
      },
      {
        "type": "Phrase",
        "word": "have an ice cream",
        "ipa": "/hæv ən ˈaɪs kriːm/",
        "meaning": "ăn một cây/phần kem",
        "example": "The children have an ice cream.",
        "exampleVi": "Bọn trẻ ăn kem."
      },
      {
        "type": "Phrase",
        "word": "have some cheese",
        "ipa": "/hæv sʌm tʃiːz/",
        "meaning": "ăn một ít phô mai",
        "example": "I have some cheese with bread.",
        "exampleVi": "Tôi ăn một ít phô mai với bánh mì."
      },
      {
        "type": "Phrase",
        "word": "have a shower",
        "ipa": "/hæv ə ˈʃaʊər/",
        "meaning": "tắm vòi sen",
        "example": "I have a shower every morning.",
        "exampleVi": "Tôi tắm vòi sen mỗi sáng."
      },
      {
        "type": "Phrase",
        "word": "have a bath",
        "ipa": "/hæv ə bæθ/",
        "meaning": "tắm bồn",
        "example": "She has a bath before bed.",
        "exampleVi": "Cô ấy tắm bồn trước khi đi ngủ."
      },
      {
        "type": "Phrase",
        "word": "have a swim",
        "ipa": "/hæv ə swɪm/",
        "meaning": "đi bơi",
        "example": "We have a swim every Sunday.",
        "exampleVi": "Chúng tôi đi bơi mỗi Chủ nhật."
      },
      {
        "type": "Phrase",
        "word": "have a look",
        "ipa": "/hæv ə lʊk/",
        "meaning": "xem, nhìn qua",
        "example": "Have a look at this photo.",
        "exampleVi": "Hãy xem bức ảnh này."
      },
      {
        "type": "Phrase",
        "word": "have a go",
        "ipa": "/hæv ə ɡoʊ/",
        "meaning": "thử làm gì",
        "example": "Have a go at this game.",
        "exampleVi": "Hãy thử trò chơi này."
      },
      {
        "type": "Phrase",
        "word": "have a good journey",
        "ipa": "/hæv ə ɡʊd ˈdʒɜːrni/",
        "meaning": "chúc chuyến đi tốt đẹp",
        "example": "Have a good journey!",
        "exampleVi": "Chúc bạn có một chuyến đi tốt đẹp!"
      },
      {
        "type": "Phrase",
        "word": "have a moment",
        "ipa": "/hæv ə ˈmoʊmənt/",
        "meaning": "có một chút thời gian",
        "example": "Do you have a moment?",
        "exampleVi": "Bạn có chút thời gian không?"
      },
      {
        "type": "Phrase",
        "word": "have a word with",
        "ipa": "/hæv ə wɜːrd wɪð/",
        "meaning": "nói chuyện riêng với ai",
        "example": "Can I have a word with you?",
        "exampleVi": "Tôi có thể nói chuyện riêng với bạn một chút không?"
      },
      {
        "type": "Phrase",
        "word": "have a good time",
        "ipa": "/hæv ə ɡʊd taɪm/",
        "meaning": "có khoảng thời gian vui vẻ",
        "example": "We had a good time at the party.",
        "exampleVi": "Chúng tôi đã có khoảng thời gian vui vẻ ở bữa tiệc."
      },
      {
        "type": "Phrase",
        "word": "have my hair cut",
        "ipa": "/hæv maɪ her kʌt/",
        "meaning": "đi cắt tóc",
        "example": "I have my hair cut every month.",
        "exampleVi": "Tôi đi cắt tóc mỗi tháng."
      },
      {
        "type": "Phrase",
        "word": "don't have the time",
        "ipa": "/doʊnt hæv ðə taɪm/",
        "meaning": "không có thời gian",
        "example": "I don't have the time today.",
        "exampleVi": "Hôm nay tôi không có thời gian."
      },
      {
        "type": "Phrase",
        "word": "have got",
        "ipa": "/hæv ɡɑːt/",
        "meaning": "có, sở hữu",
        "example": "I have got a new phone.",
        "exampleVi": "Tôi có một chiếc điện thoại mới."
      },
      {
        "type": "Phrase",
        "word": "have got to",
        "ipa": "/hæv ɡɑːt tə/",
        "meaning": "phải",
        "example": "I have got to go now.",
        "exampleVi": "Bây giờ tôi phải đi."
      },
      {
        "type": "Phrase",
        "word": "have to",
        "ipa": "/hæv tə/",
        "meaning": "phải, buộc phải",
        "example": "I have to work today.",
        "exampleVi": "Hôm nay tôi phải làm việc."
      }
    ]
  },
  {
    "id": 39,
    "title": "Go / went / gone",
    "words": [
      {
        "type": "Verb",
        "word": "go",
        "ipa": "/ɡoʊ/",
        "meaning": "đi",
        "example": "I go to school by bus.",
        "exampleVi": "Tôi đi học bằng xe buýt."
      },
      {
        "type": "Phrasal verb",
        "word": "go by",
        "ipa": "/ɡoʊ baɪ/",
        "meaning": "đi bằng; đi ngang qua; trôi qua",
        "example": "I go by bus every day.",
        "exampleVi": "Tôi đi bằng xe buýt mỗi ngày."
      },
      {
        "type": "Phrasal verb",
        "word": "go in / go into",
        "ipa": "/ɡoʊ ɪn/; /ɡoʊ ˈɪntuː/",
        "meaning": "đi vào",
        "example": "Please go into the room.",
        "exampleVi": "Hãy đi vào phòng."
      },
      {
        "type": "Phrasal verb",
        "word": "go out of",
        "ipa": "/ɡoʊ aʊt əv/",
        "meaning": "đi ra khỏi",
        "example": "He went out of the house.",
        "exampleVi": "Anh ấy đi ra khỏi nhà."
      },
      {
        "type": "Phrasal verb",
        "word": "go up",
        "ipa": "/ɡoʊ ʌp/",
        "meaning": "đi lên",
        "example": "We went up the stairs.",
        "exampleVi": "Chúng tôi đi lên cầu thang."
      },
      {
        "type": "Phrasal verb",
        "word": "go down",
        "ipa": "/ɡoʊ daʊn/",
        "meaning": "đi xuống",
        "example": "They went down the hill.",
        "exampleVi": "Họ đi xuống ngọn đồi."
      },
      {
        "type": "Phrase",
        "word": "be going to",
        "ipa": "/biː ˈɡoʊɪŋ tə/",
        "meaning": "sẽ, dự định sẽ",
        "example": "I am going to study tonight.",
        "exampleVi": "Tối nay tôi sẽ học."
      },
      {
        "type": "Phrase",
        "word": "going to study",
        "ipa": "/ˈɡoʊɪŋ tə ˈstʌdi/",
        "meaning": "sẽ học, dự định học",
        "example": "She is going to study English.",
        "exampleVi": "Cô ấy sẽ học tiếng Anh."
      },
      {
        "type": "Phrase",
        "word": "going to visit",
        "ipa": "/ˈɡoʊɪŋ tə ˈvɪzɪt/",
        "meaning": "sẽ thăm, dự định thăm",
        "example": "We are going to visit my grandmother.",
        "exampleVi": "Chúng tôi sẽ thăm bà tôi."
      },
      {
        "type": "Phrase",
        "word": "going to learn",
        "ipa": "/ˈɡoʊɪŋ tə lɜːrn/",
        "meaning": "sẽ học, dự định học",
        "example": "I am going to learn French.",
        "exampleVi": "Tôi sẽ học tiếng Pháp."
      },
      {
        "type": "Phrase",
        "word": "go shopping",
        "ipa": "/ɡoʊ ˈʃɑːpɪŋ/",
        "meaning": "đi mua sắm",
        "example": "We go shopping on Saturday.",
        "exampleVi": "Chúng tôi đi mua sắm vào thứ Bảy."
      },
      {
        "type": "Phrase",
        "word": "go swimming",
        "ipa": "/ɡoʊ ˈswɪmɪŋ/",
        "meaning": "đi bơi",
        "example": "I go swimming every week.",
        "exampleVi": "Tôi đi bơi mỗi tuần."
      },
      {
        "type": "Phrase",
        "word": "go dancing",
        "ipa": "/ɡoʊ ˈdænsɪŋ/",
        "meaning": "đi khiêu vũ",
        "example": "They go dancing on Friday nights.",
        "exampleVi": "Họ đi khiêu vũ vào tối thứ Sáu."
      },
      {
        "type": "Phrase",
        "word": "go sightseeing",
        "ipa": "/ɡoʊ ˈsaɪtˌsiːɪŋ/",
        "meaning": "đi tham quan",
        "example": "We are going sightseeing today.",
        "exampleVi": "Hôm nay chúng tôi đi tham quan."
      },
      {
        "type": "Phrase",
        "word": "go skiing",
        "ipa": "/ɡoʊ ˈskiːɪŋ/",
        "meaning": "đi trượt tuyết",
        "example": "They go skiing in winter.",
        "exampleVi": "Họ đi trượt tuyết vào mùa đông."
      },
      {
        "type": "Phrase",
        "word": "go fishing",
        "ipa": "/ɡoʊ ˈfɪʃɪŋ/",
        "meaning": "đi câu cá",
        "example": "My father likes to go fishing.",
        "exampleVi": "Bố tôi thích đi câu cá."
      }
    ]
  },
  {
    "id": 40,
    "title": "Do / did / done",
    "words": [
      {
        "type": "Phrase",
        "word": "do nothing",
        "ipa": "/duː ˈnʌθɪŋ/",
        "meaning": "không làm gì cả",
        "example": "I want to do nothing today.",
        "exampleVi": "Hôm nay tôi muốn không làm gì cả."
      },
      {
        "type": "Phrase",
        "word": "don't do that",
        "ipa": "/doʊnt duː ðæt/",
        "meaning": "đừng làm điều đó",
        "example": "Don't do that! It's dangerous.",
        "exampleVi": "Đừng làm thế! Nó nguy hiểm."
      },
      {
        "type": "Question",
        "word": "What are ... doing?",
        "ipa": "/wʌt ɑːr ... ˈduːɪŋ/",
        "meaning": "... đang làm gì?",
        "example": "What are you doing?",
        "exampleVi": "Bạn đang làm gì?"
      },
      {
        "type": "Question",
        "word": "What do you do?",
        "ipa": "/wʌt duː juː duː/",
        "meaning": "Bạn làm nghề gì?",
        "example": "What do you do? – I'm a teacher.",
        "exampleVi": "Bạn làm nghề gì? – Tôi là giáo viên."
      },
      {
        "type": "Phrase",
        "word": "do the gardening",
        "ipa": "/duː ðə ˈɡɑːrdənɪŋ/",
        "meaning": "làm vườn",
        "example": "My father does the gardening.",
        "exampleVi": "Bố tôi làm vườn."
      },
      {
        "type": "Phrase",
        "word": "do the washing",
        "ipa": "/duː ðə ˈwɑːʃɪŋ/",
        "meaning": "giặt quần áo",
        "example": "I do the washing on Sunday.",
        "exampleVi": "Tôi giặt quần áo vào Chủ nhật."
      },
      {
        "type": "Phrase",
        "word": "do the washing-up",
        "ipa": "/duː ðə ˌwɑːʃɪŋ ˈʌp/",
        "meaning": "rửa bát",
        "example": "We do the washing-up after dinner.",
        "exampleVi": "Chúng tôi rửa bát sau bữa tối."
      },
      {
        "type": "Phrase",
        "word": "do your homework",
        "ipa": "/duː jʊr ˈhoʊmwɜːrk/",
        "meaning": "làm bài tập về nhà",
        "example": "I do my homework after school.",
        "exampleVi": "Tôi làm bài tập về nhà sau giờ học."
      },
      {
        "type": "Phrase",
        "word": "do some exercises",
        "ipa": "/duː sʌm ˈeksərsaɪzɪz/",
        "meaning": "làm một số bài tập",
        "example": "I do some exercises every morning.",
        "exampleVi": "Tôi tập một số bài tập mỗi sáng."
      },
      {
        "type": "Phrase",
        "word": "do business with",
        "ipa": "/duː ˈbɪznəs wɪð/",
        "meaning": "làm ăn/giao dịch với",
        "example": "We do business with that company.",
        "exampleVi": "Chúng tôi làm ăn với công ty đó."
      },
      {
        "type": "Phrase",
        "word": "do your best",
        "ipa": "/duː jʊr best/",
        "meaning": "cố gắng hết sức",
        "example": "Do your best in the exam.",
        "exampleVi": "Hãy cố gắng hết sức trong kỳ thi."
      },
      {
        "type": "Phrase",
        "word": "does a lot of business with",
        "ipa": "/dʌz ə lɑːt əv ˈbɪznəs wɪð/",
        "meaning": "làm ăn/giao dịch rất nhiều với",
        "example": "Our company does a lot of business with them.",
        "exampleVi": "Công ty chúng tôi làm ăn rất nhiều với họ."
      }
    ]
  },
  {
    "id": 41,
    "title": "Make / made / made",
    "words": [
      {
        "type": "Phrase",
        "word": "make some coffee",
        "ipa": "/meɪk sʌm ˈkɔːfi/",
        "meaning": "pha cà phê",
        "example": "I'm making some coffee.",
        "exampleVi": "Tôi đang pha cà phê."
      },
      {
        "type": "Phrase",
        "word": "make dinner",
        "ipa": "/meɪk ˈdɪnər/",
        "meaning": "nấu bữa tối",
        "example": "Dad is making dinner.",
        "exampleVi": "Bố đang nấu bữa tối."
      },
      {
        "type": "Phrase",
        "word": "make some tea",
        "ipa": "/meɪk sʌm tiː/",
        "meaning": "pha trà",
        "example": "I'll make some tea.",
        "exampleVi": "Tôi sẽ pha trà."
      },
      {
        "type": "Phrase",
        "word": "make some hot chocolate",
        "ipa": "/meɪk sʌm hɑːt ˈtʃɑːklət/",
        "meaning": "pha sô-cô-la nóng",
        "example": "She is making some hot chocolate.",
        "exampleVi": "Cô ấy đang pha sô-cô-la nóng."
      },
      {
        "type": "Phrase",
        "word": "make breakfast",
        "ipa": "/meɪk ˈbrekfəst/",
        "meaning": "chuẩn bị/nấu bữa sáng",
        "example": "I make breakfast for my family.",
        "exampleVi": "Tôi chuẩn bị bữa sáng cho gia đình."
      },
      {
        "type": "Phrase",
        "word": "make lunch",
        "ipa": "/meɪk lʌntʃ/",
        "meaning": "chuẩn bị/nấu bữa trưa",
        "example": "We make lunch at home.",
        "exampleVi": "Chúng tôi chuẩn bị bữa trưa ở nhà."
      },
      {
        "type": "Phrase",
        "word": "make a photocopy",
        "ipa": "/meɪk ə ˈfoʊtoʊˌkɑːpi/",
        "meaning": "photocopy, sao chụp tài liệu",
        "example": "Can you make a photocopy of this?",
        "exampleVi": "Bạn có thể photocopy cái này không?"
      },
      {
        "type": "Phrase",
        "word": "make a film",
        "ipa": "/meɪk ə fɪlm/",
        "meaning": "làm một bộ phim",
        "example": "They are making a film.",
        "exampleVi": "Họ đang làm một bộ phim."
      },
      {
        "type": "Phrase",
        "word": "make a video",
        "ipa": "/meɪk ə ˈvɪdioʊ/",
        "meaning": "làm/quay một video",
        "example": "I'm making a video for school.",
        "exampleVi": "Tôi đang làm một video cho trường."
      },
      {
        "type": "Phrase",
        "word": "make me feel",
        "ipa": "/meɪk mi fiːl/",
        "meaning": "khiến tôi cảm thấy",
        "example": "Music makes me feel happy.",
        "exampleVi": "Âm nhạc khiến tôi cảm thấy vui."
      },
      {
        "type": "Phrase",
        "word": "make a mistake",
        "ipa": "/meɪk ə mɪˈsteɪk/",
        "meaning": "mắc lỗi",
        "example": "I made a mistake.",
        "exampleVi": "Tôi đã mắc một lỗi."
      },
      {
        "type": "Phrase",
        "word": "make an appointment",
        "ipa": "/meɪk ən əˈpɔɪntmənt/",
        "meaning": "đặt lịch hẹn",
        "example": "I need to make an appointment with the doctor.",
        "exampleVi": "Tôi cần đặt lịch hẹn với bác sĩ."
      },
      {
        "type": "Phrase",
        "word": "make my bed",
        "ipa": "/meɪk maɪ bed/",
        "meaning": "dọn giường",
        "example": "I make my bed every morning.",
        "exampleVi": "Tôi dọn giường mỗi sáng."
      },
      {
        "type": "Phrase",
        "word": "make a noise",
        "ipa": "/meɪk ə nɔɪz/",
        "meaning": "gây ra tiếng ồn",
        "example": "The children are making a noise.",
        "exampleVi": "Bọn trẻ đang gây ồn."
      },
      {
        "type": "Phrase",
        "word": "make a mess",
        "ipa": "/meɪk ə mes/",
        "meaning": "làm bừa bộn",
        "example": "Don't make a mess in the kitchen.",
        "exampleVi": "Đừng làm bừa bộn trong bếp."
      },
      {
        "type": "Phrase",
        "word": "make a choice",
        "ipa": "/meɪk ə tʃɔɪs/",
        "meaning": "đưa ra lựa chọn",
        "example": "You have to make a choice.",
        "exampleVi": "Bạn phải đưa ra một lựa chọn."
      }
    ]
  },
  {
    "id": 42,
    "title": "Come / came / come",
    "words": [
      {
        "type": "Phrasal verb",
        "word": "come in",
        "ipa": "/kʌm ɪn/",
        "meaning": "đi vào, bước vào",
        "example": "Please come in.",
        "exampleVi": "Mời vào."
      },
      {
        "type": "Phrasal verb",
        "word": "come into",
        "ipa": "/kʌm ˈɪntuː/",
        "meaning": "đi vào bên trong",
        "example": "She came into the room.",
        "exampleVi": "Cô ấy bước vào phòng."
      },
      {
        "type": "Phrasal verb",
        "word": "come out",
        "ipa": "/kʌm aʊt/",
        "meaning": "đi ra; xuất hiện; được phát hành",
        "example": "The children came out.",
        "exampleVi": "Bọn trẻ đi ra ngoài."
      },
      {
        "type": "Phrasal verb",
        "word": "come out of",
        "ipa": "/kʌm aʊt əv/",
        "meaning": "đi ra khỏi",
        "example": "He came out of the house.",
        "exampleVi": "Anh ấy đi ra khỏi nhà."
      },
      {
        "type": "Phrase",
        "word": "come in to",
        "ipa": "/kʌm ɪn tə/",
        "meaning": "đi vào để làm gì",
        "example": "She came in to see me.",
        "exampleVi": "Cô ấy vào để gặp tôi."
      },
      {
        "type": "Phrasal verb",
        "word": "come back",
        "ipa": "/kʌm bæk/",
        "meaning": "quay lại, trở lại",
        "example": "Please come back soon.",
        "exampleVi": "Hãy sớm quay lại nhé."
      },
      {
        "type": "Phrase",
        "word": "come back from",
        "ipa": "/kʌm bæk frəm/",
        "meaning": "trở về từ",
        "example": "I came back from London yesterday.",
        "exampleVi": "Tôi trở về từ London hôm qua."
      },
      {
        "type": "Phrase",
        "word": "come home",
        "ipa": "/kʌm hoʊm/",
        "meaning": "về nhà",
        "example": "Dad came home at six.",
        "exampleVi": "Bố về nhà lúc sáu giờ."
      },
      {
        "type": "Phrase",
        "word": "come from",
        "ipa": "/kʌm frəm/",
        "meaning": "đến từ, xuất thân từ",
        "example": "I come from Vietnam.",
        "exampleVi": "Tôi đến từ Việt Nam."
      },
      {
        "type": "Phrasal verb",
        "word": "come along",
        "ipa": "/kʌm əˈlɔːŋ/",
        "meaning": "đi cùng; đi theo; tiến triển",
        "example": "Come along with us!",
        "exampleVi": "Đi cùng chúng tôi nhé!"
      },
      {
        "type": "Phrase",
        "word": "come and see me",
        "ipa": "/kʌm ənd siː mi/",
        "meaning": "đến thăm tôi",
        "example": "Come and see me soon.",
        "exampleVi": "Hãy sớm đến thăm tôi nhé."
      }
    ]
  },
  {
    "id": 43,
    "title": "Take / took / taken",
    "words": [
      {
        "type": "Structure",
        "word": "it takes + person + time",
        "ipa": "/ɪt teɪks .../",
        "meaning": "ai đó mất bao nhiêu thời gian để làm gì",
        "example": "It takes me 20 minutes to get to school.",
        "exampleVi": "Tôi mất 20 phút để đến trường."
      },
      {
        "type": "Question",
        "word": "How long does it take ...?",
        "ipa": "/haʊ lɔːŋ dʌz ɪt teɪk/",
        "meaning": "mất bao lâu...?",
        "example": "How long does it take to get there?",
        "exampleVi": "Đến đó mất bao lâu?"
      },
      {
        "type": "Question",
        "word": "How long did it take you ...?",
        "ipa": "/haʊ lɔːŋ dɪd ɪt teɪk juː/",
        "meaning": "bạn đã mất bao lâu...?",
        "example": "How long did it take you to do it?",
        "exampleVi": "Bạn đã mất bao lâu để làm việc đó?"
      },
      {
        "type": "Phrase",
        "word": "take sth with you",
        "ipa": "/teɪk ... wɪð juː/",
        "meaning": "mang theo thứ gì",
        "example": "Take your passport with you.",
        "exampleVi": "Hãy mang hộ chiếu theo."
      },
      {
        "type": "Phrase",
        "word": "take a photo / photograph",
        "ipa": "/teɪk ə ˈfoʊtoʊ/; /teɪk ə ˈfoʊtəɡræf/",
        "meaning": "chụp ảnh",
        "example": "Can you take a photo of us?",
        "exampleVi": "Bạn có thể chụp ảnh cho chúng tôi không?"
      },
      {
        "type": "Phrase",
        "word": "take an ... course",
        "ipa": "/teɪk ən ... kɔːrs/",
        "meaning": "tham gia một khóa học",
        "example": "I'm taking an English course.",
        "exampleVi": "Tôi đang tham gia một khóa học tiếng Anh."
      },
      {
        "type": "Phrase",
        "word": "take an exam",
        "ipa": "/teɪk ən ɪɡˈzæm/",
        "meaning": "tham gia/làm một bài thi",
        "example": "I have to take an exam tomorrow.",
        "exampleVi": "Tôi phải thi vào ngày mai."
      },
      {
        "type": "Phrase",
        "word": "take some ... lessons",
        "ipa": "/teɪk sʌm ... ˈlesənz/",
        "meaning": "học một số buổi học",
        "example": "She is taking some piano lessons.",
        "exampleVi": "Cô ấy đang học một số buổi piano."
      },
      {
        "type": "Phrase",
        "word": "take the bus",
        "ipa": "/teɪk ðə bʌs/",
        "meaning": "đi xe buýt",
        "example": "I take the bus to school.",
        "exampleVi": "Tôi đi xe buýt đến trường."
      },
      {
        "type": "Phrase",
        "word": "take the underground",
        "ipa": "/teɪk ði ˈʌndərɡraʊnd/",
        "meaning": "đi tàu điện ngầm",
        "example": "We take the underground to work.",
        "exampleVi": "Chúng tôi đi tàu điện ngầm đến chỗ làm."
      },
      {
        "type": "Phrase",
        "word": "take a taxi",
        "ipa": "/teɪk ə ˈtæksi/",
        "meaning": "đi taxi",
        "example": "Let's take a taxi home.",
        "exampleVi": "Hãy đi taxi về nhà."
      },
      {
        "type": "Phrase",
        "word": "take the train",
        "ipa": "/teɪk ðə treɪn/",
        "meaning": "đi tàu hỏa",
        "example": "We take the train to London.",
        "exampleVi": "Chúng tôi đi tàu đến London."
      }
    ]
  },
  {
    "id": 44,
    "title": "Bring / brought / brought",
    "words": [
      {
        "type": "Verb",
        "word": "bring & take",
        "ipa": "/brɪŋ ænd teɪk/",
        "meaning": "bring = mang đến; take = mang đi",
        "example": "Bring your book here and take it home later.",
        "exampleVi": "Mang sách đến đây và sau đó mang nó về nhà."
      },
      {
        "type": "Structure",
        "word": "bring sb sth",
        "ipa": "/brɪŋ ˈsʌmbədi ˈsʌmθɪŋ/",
        "meaning": "mang/đem thứ gì cho ai",
        "example": "Can you bring me some water?",
        "exampleVi": "Bạn có thể mang cho tôi ít nước không?"
      },
      {
        "type": "Phrasal verb",
        "word": "bring sth back",
        "ipa": "/brɪŋ ... bæk/",
        "meaning": "mang thứ gì trở lại; mang trả lại",
        "example": "Please bring the book back tomorrow.",
        "exampleVi": "Hãy mang quyển sách trả lại vào ngày mai."
      }
    ]
  },
  {
    "id": 45,
    "title": "Get / got / got",
    "words": [
      {
        "type": "Structure",
        "word": "get + adjective",
        "ipa": "/ɡet + ˈædʒəktɪv/",
        "meaning": "trở nên...; thay đổi sang trạng thái...",
        "example": "It's getting cold.",
        "exampleVi": "Trời đang trở lạnh."
      },
      {
        "type": "Structure",
        "word": "get + noun",
        "ipa": "/ɡet + naʊn/",
        "meaning": "có, nhận, lấy, mua được...",
        "example": "I got a new phone.",
        "exampleVi": "Tôi có một chiếc điện thoại mới."
      },
      {
        "type": "Phrase",
        "word": "get married",
        "ipa": "/ɡet ˈmærid/",
        "meaning": "kết hôn",
        "example": "They are getting married next year.",
        "exampleVi": "Họ sẽ kết hôn vào năm tới."
      },
      {
        "type": "Phrasal verb",
        "word": "get to",
        "ipa": "/ɡet tuː/",
        "meaning": "đến một nơi",
        "example": "What time do you get to work?",
        "exampleVi": "Bạn đến chỗ làm lúc mấy giờ?"
      },
      {
        "type": "Phrasal verb",
        "word": "get back",
        "ipa": "/ɡet bæk/",
        "meaning": "trở lại; trở về",
        "example": "What time did you get back?",
        "exampleVi": "Bạn đã trở về lúc mấy giờ?"
      },
      {
        "type": "Phrasal verb",
        "word": "get up",
        "ipa": "/ɡet ʌp/",
        "meaning": "thức dậy; đứng dậy",
        "example": "I get up at seven.",
        "exampleVi": "Tôi thức dậy lúc bảy giờ."
      },
      {
        "type": "Phrase",
        "word": "get there",
        "ipa": "/ɡet ðer/",
        "meaning": "đến đó",
        "example": "How can we get there?",
        "exampleVi": "Chúng ta đến đó bằng cách nào?"
      }
    ]
  },
  {
    "id": 46,
    "title": "Phrasal verbs",
    "words": [
      {
        "type": "Noun",
        "word": "phrasal verb",
        "ipa": "/ˈfreɪzəl vɝːb/",
        "meaning": "cụm động từ",
        "example": "\"Get up\" is a phrasal verb.",
        "exampleVi": "\"Get up\" là một cụm động từ."
      },
      {
        "type": "Phrasal verb",
        "word": "get up",
        "ipa": "/ɡet ʌp/",
        "meaning": "thức dậy; đứng dậy",
        "example": "I get up at seven.",
        "exampleVi": "Tôi thức dậy lúc bảy giờ."
      },
      {
        "type": "Phrasal verb",
        "word": "get on",
        "ipa": "/ɡet ɑːn/",
        "meaning": "lên (xe buýt, tàu...)",
        "example": "We get on the bus here.",
        "exampleVi": "Chúng tôi lên xe buýt ở đây."
      },
      {
        "type": "Phrasal verb",
        "word": "get off",
        "ipa": "/ɡet ɔːf/",
        "meaning": "xuống (xe buýt, tàu...)",
        "example": "I get off the bus at the next stop.",
        "exampleVi": "Tôi xuống xe buýt ở điểm dừng tiếp theo."
      },
      {
        "type": "Phrasal verb",
        "word": "turn on",
        "ipa": "/tɝːn ɑːn/",
        "meaning": "bật",
        "example": "Please turn on the light.",
        "exampleVi": "Hãy bật đèn."
      },
      {
        "type": "Phrasal verb",
        "word": "turn off",
        "ipa": "/tɝːn ɔːf/",
        "meaning": "tắt",
        "example": "Please turn off the TV.",
        "exampleVi": "Hãy tắt TV."
      },
      {
        "type": "Phrasal verb",
        "word": "turn up",
        "ipa": "/tɝːn ʌp/",
        "meaning": "vặn to, tăng âm lượng",
        "example": "Turn up the music, please.",
        "exampleVi": "Làm ơn vặn nhạc to lên."
      },
      {
        "type": "Phrasal verb",
        "word": "turn down",
        "ipa": "/tɝːn daʊn/",
        "meaning": "vặn nhỏ, giảm âm lượng",
        "example": "Please turn down the TV.",
        "exampleVi": "Hãy vặn nhỏ TV."
      },
      {
        "type": "Phrasal verb",
        "word": "go on",
        "ipa": "/ɡoʊ ɑːn/",
        "meaning": "tiếp tục",
        "example": "Please go on.",
        "exampleVi": "Hãy tiếp tục."
      },
      {
        "type": "Phrasal verb",
        "word": "go off",
        "ipa": "/ɡoʊ ɔːf/",
        "meaning": "reo, kêu (chuông/báo thức); nổ",
        "example": "My alarm went off at six.",
        "exampleVi": "Chuông báo thức của tôi reo lúc sáu giờ."
      },
      {
        "type": "Phrasal verb",
        "word": "put sth on",
        "ipa": "/pʊt ... ɑːn/",
        "meaning": "mặc/đeo thứ gì vào",
        "example": "Put on your coat.",
        "exampleVi": "Mặc áo khoác vào."
      },
      {
        "type": "Phrasal verb",
        "word": "come on",
        "ipa": "/kʌm ɑːn/",
        "meaning": "nhanh lên; thôi nào",
        "example": "Come on! We're late.",
        "exampleVi": "Nhanh lên! Chúng ta muộn rồi."
      },
      {
        "type": "Phrasal verb",
        "word": "turn down (refuse)",
        "ipa": "/tɝːn daʊn/",
        "meaning": "từ chối",
        "example": "She turned down the job.",
        "exampleVi": "Cô ấy đã từ chối công việc."
      },
      {
        "type": "Phrasal verb",
        "word": "take off (plane)",
        "ipa": "/teɪk ɔːf/",
        "meaning": "cất cánh",
        "example": "The plane took off at nine.",
        "exampleVi": "Máy bay cất cánh lúc chín giờ."
      },
      {
        "type": "Phrasal verb",
        "word": "take off (clothes)",
        "ipa": "/teɪk ɔːf/",
        "meaning": "cởi, tháo (quần áo, giày...)",
        "example": "Take off your shoes.",
        "exampleVi": "Cởi giày ra."
      }
    ]
  },
  {
    "id": 47,
    "title": "Everyday things",
    "words": [
      {
        "type": "Phrasal verb",
        "word": "wake up",
        "ipa": "/weɪk ʌp/",
        "meaning": "thức giấc, tỉnh giấc",
        "example": "I wake up at 7 o'clock.",
        "exampleVi": "Tôi thức giấc lúc 7 giờ."
      },
      {
        "type": "Phrasal verb",
        "word": "get up",
        "ipa": "/ɡet ʌp/",
        "meaning": "thức dậy, ra khỏi giường",
        "example": "I get up at 7:15.",
        "exampleVi": "Tôi dậy lúc 7 giờ 15."
      },
      {
        "type": "Phrase",
        "word": "go to the bathroom",
        "ipa": "/ɡoʊ tə ðə ˈbæθruːm/",
        "meaning": "đi vào phòng tắm/nhà vệ sinh",
        "example": "I go to the bathroom in the morning.",
        "exampleVi": "Tôi đi vào phòng tắm vào buổi sáng."
      },
      {
        "type": "Phrase",
        "word": "have a shower",
        "ipa": "/hæv ə ˈʃaʊər/",
        "meaning": "tắm vòi sen",
        "example": "I have a shower every morning.",
        "exampleVi": "Tôi tắm vòi sen mỗi sáng."
      },
      {
        "type": "Phrase",
        "word": "have breakfast",
        "ipa": "/hæv ˈbrekfəst/",
        "meaning": "ăn sáng",
        "example": "I have breakfast at 8.",
        "exampleVi": "Tôi ăn sáng lúc 8 giờ."
      },
      {
        "type": "Phrase",
        "word": "listen to the radio",
        "ipa": "/ˈlɪsən tə ðə ˈreɪdioʊ/",
        "meaning": "nghe đài",
        "example": "I listen to the radio in the morning.",
        "exampleVi": "Tôi nghe đài vào buổi sáng."
      },
      {
        "type": "Phrase",
        "word": "go to work",
        "ipa": "/ɡoʊ tə wɝːk/",
        "meaning": "đi làm",
        "example": "I go to work by bus.",
        "exampleVi": "Tôi đi làm bằng xe buýt."
      },
      {
        "type": "Phrase",
        "word": "come home",
        "ipa": "/kʌm hoʊm/",
        "meaning": "về nhà",
        "example": "I come home at six.",
        "exampleVi": "Tôi về nhà lúc sáu giờ."
      },
      {
        "type": "Phrase",
        "word": "make dinner",
        "ipa": "/meɪk ˈdɪnər/",
        "meaning": "nấu bữa tối",
        "example": "My mother makes dinner every evening.",
        "exampleVi": "Mẹ tôi nấu bữa tối mỗi tối."
      },
      {
        "type": "Phrase",
        "word": "phone (call) a friend",
        "ipa": "/foʊn ə frend/",
        "meaning": "gọi điện cho một người bạn",
        "example": "I phone a friend in the evening.",
        "exampleVi": "Tôi gọi điện cho một người bạn vào buổi tối."
      },
      {
        "type": "Phrase",
        "word": "watch TV",
        "ipa": "/wɑːtʃ ˌtiːˈviː/",
        "meaning": "xem TV",
        "example": "We watch TV after dinner.",
        "exampleVi": "Chúng tôi xem TV sau bữa tối."
      },
      {
        "type": "Phrase",
        "word": "go to bed",
        "ipa": "/ɡoʊ tə bed/",
        "meaning": "đi ngủ, lên giường",
        "example": "I go to bed at 11.",
        "exampleVi": "Tôi đi ngủ lúc 11 giờ."
      },
      {
        "type": "Phrase",
        "word": "wash clothes",
        "ipa": "/wɑːʃ kloʊðz/",
        "meaning": "giặt quần áo",
        "example": "I wash my clothes on Sunday.",
        "exampleVi": "Tôi giặt quần áo vào Chủ nhật."
      },
      {
        "type": "Phrase",
        "word": "clean the house",
        "ipa": "/kliːn ðə haʊs/",
        "meaning": "dọn/vệ sinh nhà",
        "example": "We clean the house every Saturday.",
        "exampleVi": "Chúng tôi dọn nhà mỗi thứ Bảy."
      },
      {
        "type": "Phrase",
        "word": "go for a walk",
        "ipa": "/ɡoʊ fər ə wɔːk/",
        "meaning": "đi dạo",
        "example": "I go for a walk in the evening.",
        "exampleVi": "Tôi đi dạo vào buổi tối."
      },
      {
        "type": "Phrase",
        "word": "write letters / emails",
        "ipa": "/raɪt ˈletərz/",
        "meaning": "viết thư/email",
        "example": "I write emails every day.",
        "exampleVi": "Tôi viết email mỗi ngày."
      },
      {
        "type": "Question",
        "word": "How often do you...?",
        "ipa": "/haʊ ˈɔːfən də juː/",
        "meaning": "Bạn thường... bao lâu một lần?",
        "example": "How often do you go for a walk?",
        "exampleVi": "Bạn đi dạo bao lâu một lần?"
      },
      {
        "type": "Phrase",
        "word": "three times a week",
        "ipa": "/θriː taɪmz ə wiːk/",
        "meaning": "ba lần một tuần",
        "example": "I go swimming three times a week.",
        "exampleVi": "Tôi đi bơi ba lần một tuần."
      },
      {
        "type": "Question",
        "word": "What time do you...?",
        "ipa": "/wʌt taɪm də juː/",
        "meaning": "Bạn... lúc mấy giờ?",
        "example": "What time do you go to bed?",
        "exampleVi": "Bạn đi ngủ lúc mấy giờ?"
      },
      {
        "type": "Phrase",
        "word": "at 7 o'clock normally",
        "ipa": "/ət ˈsevən əˈklɑːk ˈnɔːrməli/",
        "meaning": "thường vào lúc 7 giờ",
        "example": "I get up at 7 o'clock normally.",
        "exampleVi": "Tôi thường dậy lúc 7 giờ."
      },
      {
        "type": "Question",
        "word": "How do you...?",
        "ipa": "/haʊ də juː/",
        "meaning": "Bạn... bằng cách nào/bằng phương tiện gì?",
        "example": "How do you go to work?",
        "exampleVi": "Bạn đi làm bằng phương tiện gì?"
      },
      {
        "type": "Phrase",
        "word": "usually by bus",
        "ipa": "/ˈjuːʒuəli baɪ bʌs/",
        "meaning": "thường bằng xe buýt",
        "example": "I go to work usually by bus.",
        "exampleVi": "Tôi thường đi làm bằng xe buýt."
      }
    ]
  },
  {
    "id": 48,
    "title": "Talking",
    "words": [
      {
        "type": "Verb",
        "word": "say",
        "ipa": "/seɪ/",
        "meaning": "nói, nói ra",
        "example": "Please say it again.",
        "exampleVi": "Hãy nói lại điều đó."
      },
      {
        "type": "Verb",
        "word": "said that",
        "ipa": "/sed ðæt/",
        "meaning": "nói rằng",
        "example": "He said that he was tired.",
        "exampleVi": "Anh ấy nói rằng anh ấy mệt."
      },
      {
        "type": "Phrase",
        "word": "say hello / goodbye",
        "ipa": "/seɪ həˈloʊ/",
        "meaning": "nói xin chào / tạm biệt",
        "example": "Say hello to your mother.",
        "exampleVi": "Hãy gửi lời chào mẹ bạn nhé."
      },
      {
        "type": "Phrase",
        "word": "say please / thank you",
        "ipa": "/seɪ pliːz/",
        "meaning": "nói \"làm ơn\" / \"cảm ơn\"",
        "example": "Always say thank you.",
        "exampleVi": "Luôn nói cảm ơn."
      },
      {
        "type": "Phrase",
        "word": "say Happy Birthday",
        "ipa": "/seɪ ˌhæpi ˈbɝːθdeɪ/",
        "meaning": "chúc mừng sinh nhật",
        "example": "Say Happy Birthday to Anna.",
        "exampleVi": "Hãy chúc Anna sinh nhật vui vẻ."
      },
      {
        "type": "Phrase",
        "word": "say Merry Christmas",
        "ipa": "/seɪ ˌmeri ˈkrɪsməs/",
        "meaning": "chúc Giáng sinh vui vẻ",
        "example": "We say Merry Christmas to our friends.",
        "exampleVi": "Chúng tôi chúc bạn bè Giáng sinh vui vẻ."
      },
      {
        "type": "Phrase",
        "word": "say Happy New Year",
        "ipa": "/seɪ ˌhæpi nuː ˈjɪr/",
        "meaning": "chúc mừng năm mới",
        "example": "They said Happy New Year.",
        "exampleVi": "Họ đã chúc mừng năm mới."
      },
      {
        "type": "Phrase",
        "word": "say Congratulations",
        "ipa": "/seɪ kənˌɡrætʃəˈleɪʃənz/",
        "meaning": "nói \"chúc mừng\"",
        "example": "We said Congratulations to him.",
        "exampleVi": "Chúng tôi nói lời chúc mừng với anh ấy."
      },
      {
        "type": "Verb",
        "word": "tell",
        "ipa": "/tel/",
        "meaning": "nói, kể, bảo cho ai biết",
        "example": "Please tell me your name.",
        "exampleVi": "Hãy cho tôi biết tên bạn."
      },
      {
        "type": "Phrase",
        "word": "tell me when",
        "ipa": "/tel mi wen/",
        "meaning": "nói cho tôi biết khi nào",
        "example": "Tell me when you are ready.",
        "exampleVi": "Hãy nói cho tôi biết khi nào bạn sẵn sàng."
      },
      {
        "type": "Phrase",
        "word": "told me how",
        "ipa": "/toʊld mi haʊ/",
        "meaning": "đã chỉ/nói cho tôi cách",
        "example": "She told me how to get there.",
        "exampleVi": "Cô ấy chỉ cho tôi cách đến đó."
      },
      {
        "type": "Phrase",
        "word": "tell someone the time",
        "ipa": "/tel ˈsʌmwʌn ðə taɪm/",
        "meaning": "nói cho ai biết giờ",
        "example": "Can you tell me the time?",
        "exampleVi": "Bạn có thể cho tôi biết mấy giờ không?"
      },
      {
        "type": "Phrase",
        "word": "tell someone a story",
        "ipa": "/tel ˈsʌmwʌn ə ˈstɔːri/",
        "meaning": "kể cho ai một câu chuyện",
        "example": "Dad told us a story.",
        "exampleVi": "Bố kể cho chúng tôi một câu chuyện."
      },
      {
        "type": "Phrase",
        "word": "tell someone a joke",
        "ipa": "/tel ˈsʌmwʌn ə dʒoʊk/",
        "meaning": "kể cho ai một câu chuyện cười",
        "example": "He told me a joke.",
        "exampleVi": "Anh ấy kể cho tôi một câu chuyện cười."
      },
      {
        "type": "Phrase",
        "word": "tell someone your name",
        "ipa": "/tel ˈsʌmwʌn jʊr neɪm/",
        "meaning": "nói tên của bạn cho ai",
        "example": "Please tell me your name.",
        "exampleVi": "Hãy cho tôi biết tên bạn."
      },
      {
        "type": "Phrase",
        "word": "tell someone your address",
        "ipa": "/tel ˈsʌmwʌn jʊr ˈædres/",
        "meaning": "nói địa chỉ của bạn cho ai",
        "example": "Can you tell me your address?",
        "exampleVi": "Bạn có thể cho tôi biết địa chỉ của bạn không?"
      },
      {
        "type": "Phrase",
        "word": "tell someone your phone number",
        "ipa": "/tel ˈsʌmwʌn jʊr foʊn ˈnʌmbər/",
        "meaning": "nói số điện thoại của bạn cho ai",
        "example": "Please tell me your phone number.",
        "exampleVi": "Hãy cho tôi biết số điện thoại của bạn."
      },
      {
        "type": "Verb",
        "word": "ask",
        "ipa": "/æsk/",
        "meaning": "hỏi, yêu cầu",
        "example": "Can I ask a question?",
        "exampleVi": "Tôi có thể hỏi một câu không?"
      },
      {
        "type": "Phrase",
        "word": "ask me",
        "ipa": "/æsk miː/",
        "meaning": "hỏi tôi",
        "example": "Ask me anything.",
        "exampleVi": "Hãy hỏi tôi bất cứ điều gì."
      },
      {
        "type": "Phrase",
        "word": "ask you a question",
        "ipa": "/æsk juː ə ˈkwestʃən/",
        "meaning": "hỏi bạn một câu hỏi",
        "example": "Can I ask you a question?",
        "exampleVi": "Tôi có thể hỏi bạn một câu không?"
      },
      {
        "type": "Phrase",
        "word": "ask someone the way",
        "ipa": "/æsk ˈsʌmwʌn ðə weɪ/",
        "meaning": "hỏi ai đường đi",
        "example": "I asked him the way.",
        "exampleVi": "Tôi hỏi anh ấy đường đi."
      },
      {
        "type": "Phrase",
        "word": "ask someone the time",
        "ipa": "/æsk ˈsʌmwʌn ðə taɪm/",
        "meaning": "hỏi ai giờ",
        "example": "I asked her the time.",
        "exampleVi": "Tôi hỏi cô ấy mấy giờ."
      },
      {
        "type": "Structure",
        "word": "ask sb to do sth",
        "ipa": "/æsk ˈsʌmbədi tə duː ˈsʌmθɪŋ/",
        "meaning": "yêu cầu/nhờ ai làm gì",
        "example": "I asked him to help me.",
        "exampleVi": "Tôi nhờ anh ấy giúp tôi."
      },
      {
        "type": "Structure",
        "word": "ask someone for sth",
        "ipa": "/æsk ˈsʌmwʌn fər ˈsʌmθɪŋ/",
        "meaning": "xin/yêu cầu ai thứ gì",
        "example": "I asked him for some water.",
        "exampleVi": "Tôi xin anh ấy một ít nước."
      },
      {
        "type": "Verb",
        "word": "speak",
        "ipa": "/spiːk/",
        "meaning": "nói; nói chuyện; nói một ngôn ngữ",
        "example": "Do you speak English?",
        "exampleVi": "Bạn có nói tiếng Anh không?"
      },
      {
        "type": "Phrase",
        "word": "talk to",
        "ipa": "/tɔːk tuː/",
        "meaning": "nói chuyện với",
        "example": "I talk to my friend every day.",
        "exampleVi": "Tôi nói chuyện với bạn tôi mỗi ngày."
      },
      {
        "type": "Verb",
        "word": "answer",
        "ipa": "/ˈænsər/",
        "meaning": "trả lời",
        "example": "Please answer my question.",
        "exampleVi": "Hãy trả lời câu hỏi của tôi."
      },
      {
        "type": "Verb",
        "word": "reply to",
        "ipa": "/rɪˈplaɪ tuː/",
        "meaning": "trả lời, hồi đáp",
        "example": "Please reply to my email.",
        "exampleVi": "Hãy trả lời email của tôi."
      }
    ]
  },
  {
    "id": 49,
    "title": "Moving",
    "words": [
      {
        "type": "Verb",
        "word": "walk",
        "ipa": "/wɔːk/",
        "meaning": "đi bộ",
        "example": "I walk to school every day.",
        "exampleVi": "Tôi đi bộ đến trường mỗi ngày."
      },
      {
        "type": "Verb",
        "word": "run",
        "ipa": "/rʌn/",
        "meaning": "chạy",
        "example": "I run in the park every morning.",
        "exampleVi": "Tôi chạy trong công viên mỗi sáng."
      },
      {
        "type": "Verb",
        "word": "jump",
        "ipa": "/dʒʌmp/",
        "meaning": "nhảy",
        "example": "The children jump on the bed.",
        "exampleVi": "Những đứa trẻ nhảy trên giường."
      },
      {
        "type": "Verb",
        "word": "dance",
        "ipa": "/dæns/",
        "meaning": "nhảy, khiêu vũ",
        "example": "We dance at the party.",
        "exampleVi": "Chúng tôi nhảy tại bữa tiệc."
      },
      {
        "type": "Verb",
        "word": "swim",
        "ipa": "/swɪm/",
        "meaning": "bơi",
        "example": "I swim every Sunday.",
        "exampleVi": "Tôi bơi mỗi Chủ nhật."
      },
      {
        "type": "Verb",
        "word": "climb",
        "ipa": "/klaɪm/",
        "meaning": "trèo, leo",
        "example": "They climb the mountain.",
        "exampleVi": "Họ leo núi."
      },
      {
        "type": "Verb",
        "word": "fall",
        "ipa": "/fɔːl/",
        "meaning": "ngã, rơi",
        "example": "Be careful! Don't fall.",
        "exampleVi": "Cẩn thận! Đừng ngã."
      },
      {
        "type": "Noun",
        "word": "transport",
        "ipa": "/ˈtrænspɔːrt/",
        "meaning": "phương tiện/giao thông vận tải",
        "example": "Public transport is cheap.",
        "exampleVi": "Phương tiện giao thông công cộng rẻ."
      },
      {
        "type": "Phrase",
        "word": "go by",
        "ipa": "/ɡoʊ baɪ/",
        "meaning": "đi bằng (phương tiện)",
        "example": "I go by bus.",
        "exampleVi": "Tôi đi bằng xe buýt."
      },
      {
        "type": "Verb",
        "word": "take",
        "ipa": "/teɪk/",
        "meaning": "đi bằng, sử dụng (phương tiện)",
        "example": "I take the train to work.",
        "exampleVi": "Tôi đi tàu đến chỗ làm."
      },
      {
        "type": "Verb",
        "word": "ride",
        "ipa": "/raɪd/",
        "meaning": "đi/cưỡi (xe đạp, xe máy, ngựa...)",
        "example": "I ride my bike to school.",
        "exampleVi": "Tôi đi xe đạp đến trường."
      },
      {
        "type": "Verb",
        "word": "drive",
        "ipa": "/draɪv/",
        "meaning": "lái xe",
        "example": "My father drives to work.",
        "exampleVi": "Bố tôi lái xe đi làm."
      },
      {
        "type": "Verb",
        "word": "fly",
        "ipa": "/flaɪ/",
        "meaning": "bay; đi bằng máy bay",
        "example": "We fly to London tomorrow.",
        "exampleVi": "Ngày mai chúng tôi bay đến London."
      },
      {
        "type": "Phrase",
        "word": "arrive at",
        "ipa": "/əˈraɪv æt/",
        "meaning": "đến (một địa điểm cụ thể)",
        "example": "We arrive at the station at six.",
        "exampleVi": "Chúng tôi đến nhà ga lúc sáu giờ."
      },
      {
        "type": "Phrase",
        "word": "arrive in",
        "ipa": "/əˈraɪv ɪn/",
        "meaning": "đến (thành phố, quốc gia)",
        "example": "We arrive in London at noon.",
        "exampleVi": "Chúng tôi đến London vào buổi trưa."
      },
      {
        "type": "Phrase",
        "word": "please pass the salt",
        "ipa": "/pliːz pæs ðə sɔːlt/",
        "meaning": "làm ơn đưa lọ muối",
        "example": "Please pass the salt.",
        "exampleVi": "Làm ơn đưa tôi lọ muối."
      },
      {
        "type": "Phrase",
        "word": "can I help you carry your luggage?",
        "ipa": "/kæn aɪ help juː ˈkæri jʊr ˈlʌɡɪdʒ/",
        "meaning": "tôi có thể giúp bạn mang hành lý không?",
        "example": "Can I help you carry your luggage?",
        "exampleVi": "Tôi có thể giúp bạn mang hành lý không?"
      },
      {
        "type": "Phrase",
        "word": "I've just missed the train",
        "ipa": "/aɪv dʒʌst mɪst ðə treɪn/",
        "meaning": "tôi vừa lỡ chuyến tàu",
        "example": "I've just missed the train.",
        "exampleVi": "Tôi vừa lỡ chuyến tàu."
      },
      {
        "type": "Clause",
        "word": "if we don't leave now",
        "ipa": "/ɪf wi doʊnt liːv naʊ/",
        "meaning": "nếu chúng ta không rời đi ngay bây giờ",
        "example": "If we don't leave now, we'll be late.",
        "exampleVi": "Nếu chúng ta không đi ngay bây giờ, chúng ta sẽ muộn."
      }
    ]
  },
  {
    "id": 50,
    "title": "Conjunctions and connecting words",
    "words": [
      {
        "type": "Noun",
        "word": "conjunction",
        "ipa": "/kənˈdʒʌŋkʃən/",
        "meaning": "liên từ",
        "example": "\"And\" is a conjunction.",
        "exampleVi": "\"And\" là một liên từ."
      },
      {
        "type": "Conjunction",
        "word": "and",
        "ipa": "/ænd/",
        "meaning": "và",
        "example": "I like tea and coffee.",
        "exampleVi": "Tôi thích trà và cà phê."
      },
      {
        "type": "Conjunction",
        "word": "but",
        "ipa": "/bət/",
        "meaning": "nhưng",
        "example": "I like it, but it is expensive.",
        "exampleVi": "Tôi thích nó, nhưng nó đắt."
      },
      {
        "type": "Conjunction",
        "word": "or",
        "ipa": "/ɔːr/",
        "meaning": "hoặc, hay",
        "example": "Do you want tea or coffee?",
        "exampleVi": "Bạn muốn trà hay cà phê?"
      },
      {
        "type": "Conjunction",
        "word": "because",
        "ipa": "/bɪˈkʌz/",
        "meaning": "bởi vì",
        "example": "I stayed home because I was tired.",
        "exampleVi": "Tôi ở nhà vì tôi mệt."
      },
      {
        "type": "Conjunction",
        "word": "so",
        "ipa": "/soʊ/",
        "meaning": "vì vậy, nên",
        "example": "I was tired, so I went to bed.",
        "exampleVi": "Tôi mệt, nên tôi đi ngủ."
      },
      {
        "type": "Conjunction",
        "word": "when",
        "ipa": "/wen/",
        "meaning": "khi",
        "example": "Call me when you get home.",
        "exampleVi": "Hãy gọi cho tôi khi bạn về đến nhà."
      },
      {
        "type": "Conjunction",
        "word": "before",
        "ipa": "/bɪˈfɔːr/",
        "meaning": "trước khi",
        "example": "Wash your hands before you eat.",
        "exampleVi": "Rửa tay trước khi ăn."
      },
      {
        "type": "Conjunction",
        "word": "after",
        "ipa": "/ˈæftər/",
        "meaning": "sau khi",
        "example": "We went home after the film.",
        "exampleVi": "Chúng tôi về nhà sau bộ phim."
      },
      {
        "type": "Conjunction",
        "word": "if",
        "ipa": "/ɪf/",
        "meaning": "nếu",
        "example": "If it rains, I will stay home.",
        "exampleVi": "Nếu trời mưa, tôi sẽ ở nhà."
      },
      {
        "type": "Noun",
        "word": "connecting word",
        "ipa": "/kəˈnektɪŋ wɝːd/",
        "meaning": "từ nối, từ liên kết",
        "example": "\"However\" is a connecting word.",
        "exampleVi": "\"However\" là một từ nối."
      },
      {
        "type": "Adverb",
        "word": "only",
        "ipa": "/ˈoʊnli/",
        "meaning": "chỉ, chỉ có",
        "example": "I only have one brother.",
        "exampleVi": "Tôi chỉ có một người anh/em trai."
      },
      {
        "type": "Preposition",
        "word": "like",
        "ipa": "/laɪk/",
        "meaning": "giống như",
        "example": "He runs like his father.",
        "exampleVi": "Anh ấy chạy giống bố mình."
      },
      {
        "type": "Conjunction / Preposition",
        "word": "than",
        "ipa": "/ðæn/",
        "meaning": "hơn, so với",
        "example": "My car is bigger than yours.",
        "exampleVi": "Xe của tôi lớn hơn xe của bạn."
      },
      {
        "type": "Adverb",
        "word": "also",
        "ipa": "/ˈɔːlsoʊ/",
        "meaning": "cũng",
        "example": "I also like music.",
        "exampleVi": "Tôi cũng thích âm nhạc."
      },
      {
        "type": "Adverb",
        "word": "too",
        "ipa": "/tuː/",
        "meaning": "cũng; quá",
        "example": "I like pizza too.",
        "exampleVi": "Tôi cũng thích pizza."
      },
      {
        "type": "Adverb",
        "word": "as well",
        "ipa": "/æz wel/",
        "meaning": "cũng",
        "example": "She speaks English as well.",
        "exampleVi": "Cô ấy cũng nói tiếng Anh."
      }
    ]
  },
  {
    "id": 51,
    "title": "Days, months, seasons",
    "words": [
      {
        "type": "Noun",
        "word": "time",
        "ipa": "/taɪm/",
        "meaning": "thời gian; thời điểm",
        "example": "I don't have much time.",
        "exampleVi": "Tôi không có nhiều thời gian."
      },
      {
        "type": "Noun",
        "word": "day",
        "ipa": "/deɪ/",
        "meaning": "ngày",
        "example": "Today is a beautiful day.",
        "exampleVi": "Hôm nay là một ngày đẹp trời."
      },
      {
        "type": "Noun",
        "word": "year",
        "ipa": "/jɪr/",
        "meaning": "năm",
        "example": "I was born in 2000. That was more than twenty years ago.",
        "exampleVi": "Tôi sinh năm 2000. Đó là hơn 20 năm trước."
      },
      {
        "type": "Noun",
        "word": "leap year",
        "ipa": "/ˈliːp jɪr/",
        "meaning": "năm nhuận",
        "example": "2024 was a leap year.",
        "exampleVi": "Năm 2024 là năm nhuận."
      },
      {
        "type": "Noun",
        "word": "month",
        "ipa": "/mʌnθ/",
        "meaning": "tháng",
        "example": "There are twelve months in a year.",
        "exampleVi": "Có mười hai tháng trong một năm."
      },
      {
        "type": "Noun",
        "word": "week",
        "ipa": "/wiːk/",
        "meaning": "tuần",
        "example": "I go swimming twice a week.",
        "exampleVi": "Tôi đi bơi hai lần một tuần."
      },
      {
        "type": "Noun",
        "word": "fortnight",
        "ipa": "/ˈfɔːrtnaɪt/",
        "meaning": "hai tuần",
        "example": "We are going on holiday for a fortnight.",
        "exampleVi": "Chúng tôi sẽ đi nghỉ trong hai tuần."
      },
      {
        "type": "Noun",
        "word": "hour",
        "ipa": "/aʊər/",
        "meaning": "giờ",
        "example": "The lesson is one hour long.",
        "exampleVi": "Buổi học kéo dài một giờ."
      },
      {
        "type": "Noun",
        "word": "minute",
        "ipa": "/ˈmɪnɪt/",
        "meaning": "phút",
        "example": "Wait for five minutes, please.",
        "exampleVi": "Vui lòng đợi năm phút."
      },
      {
        "type": "Noun",
        "word": "second",
        "ipa": "/ˈsekənd/",
        "meaning": "giây",
        "example": "Wait a second, please.",
        "exampleVi": "Vui lòng đợi một giây."
      },
      {
        "type": "Noun",
        "word": "century",
        "ipa": "/ˈsentʃəri/",
        "meaning": "thế kỷ",
        "example": "This building is more than a century old.",
        "exampleVi": "Tòa nhà này đã hơn một thế kỷ tuổi."
      },
      {
        "type": "Noun",
        "word": "Sunday",
        "ipa": "/ˈsʌndeɪ/",
        "meaning": "Chủ nhật",
        "example": "I don't work on Sunday.",
        "exampleVi": "Tôi không làm việc vào Chủ nhật."
      },
      {
        "type": "Noun",
        "word": "Monday",
        "ipa": "/ˈmʌndeɪ/",
        "meaning": "thứ Hai",
        "example": "I go to work on Monday.",
        "exampleVi": "Tôi đi làm vào thứ Hai."
      },
      {
        "type": "Noun",
        "word": "Tuesday",
        "ipa": "/ˈtuːzdeɪ/",
        "meaning": "thứ Ba",
        "example": "We have English on Tuesday.",
        "exampleVi": "Chúng tôi có môn tiếng Anh vào thứ Ba."
      },
      {
        "type": "Noun",
        "word": "Wednesday",
        "ipa": "/ˈwenzdeɪ/",
        "meaning": "thứ Tư",
        "example": "I play tennis on Wednesday.",
        "exampleVi": "Tôi chơi quần vợt vào thứ Tư."
      },
      {
        "type": "Noun",
        "word": "Thursday",
        "ipa": "/ˈθɝːzdeɪ/",
        "meaning": "thứ Năm",
        "example": "She visits me on Thursday.",
        "exampleVi": "Cô ấy thăm tôi vào thứ Năm."
      },
      {
        "type": "Noun",
        "word": "Friday",
        "ipa": "/ˈfraɪdeɪ/",
        "meaning": "thứ Sáu",
        "example": "We finish work on Friday.",
        "exampleVi": "Chúng tôi kết thúc công việc vào thứ Sáu."
      },
      {
        "type": "Noun",
        "word": "Saturday",
        "ipa": "/ˈsætərdeɪ/",
        "meaning": "thứ Bảy",
        "example": "I clean the house on Saturday.",
        "exampleVi": "Tôi dọn nhà vào thứ Bảy."
      },
      {
        "type": "Phrase",
        "word": "the day before yesterday",
        "ipa": "/ðə deɪ bɪˈfɔːr ˈjestərdeɪ/",
        "meaning": "ngày hôm kia",
        "example": "I saw him the day before yesterday.",
        "exampleVi": "Tôi gặp anh ấy hôm kia."
      },
      {
        "type": "Adverb",
        "word": "yesterday",
        "ipa": "/ˈjestərdeɪ/",
        "meaning": "hôm qua",
        "example": "I stayed home yesterday.",
        "exampleVi": "Hôm qua tôi ở nhà."
      },
      {
        "type": "Adverb",
        "word": "today",
        "ipa": "/təˈdeɪ/",
        "meaning": "hôm nay",
        "example": "I am busy today.",
        "exampleVi": "Hôm nay tôi bận."
      },
      {
        "type": "Adverb",
        "word": "tomorrow",
        "ipa": "/təˈmɑːroʊ/",
        "meaning": "ngày mai",
        "example": "I will call you tomorrow.",
        "exampleVi": "Tôi sẽ gọi cho bạn ngày mai."
      },
      {
        "type": "Phrase",
        "word": "the day after tomorrow",
        "ipa": "/ðə deɪ ˈæftər təˈmɑːroʊ/",
        "meaning": "ngày kia",
        "example": "We will leave the day after tomorrow.",
        "exampleVi": "Chúng tôi sẽ rời đi vào ngày kia."
      },
      {
        "type": "Noun",
        "word": "morning",
        "ipa": "/ˈmɔːrnɪŋ/",
        "meaning": "buổi sáng",
        "example": "I drink coffee in the morning.",
        "exampleVi": "Tôi uống cà phê vào buổi sáng."
      },
      {
        "type": "Noun",
        "word": "afternoon",
        "ipa": "/ˌæftərˈnuːn/",
        "meaning": "buổi chiều",
        "example": "I work in the afternoon.",
        "exampleVi": "Tôi làm việc vào buổi chiều."
      },
      {
        "type": "Noun",
        "word": "evening",
        "ipa": "/ˈiːvnɪŋ/",
        "meaning": "buổi tối",
        "example": "We watch TV in the evening.",
        "exampleVi": "Chúng tôi xem TV vào buổi tối."
      },
      {
        "type": "Phrase",
        "word": "at the weekend",
        "ipa": "/ət ðə ˌwiːkˈend/",
        "meaning": "vào cuối tuần",
        "example": "I play football at the weekend.",
        "exampleVi": "Tôi chơi bóng đá vào cuối tuần."
      },
      {
        "type": "Noun",
        "word": "season",
        "ipa": "/ˈsiːzən/",
        "meaning": "mùa",
        "example": "Spring is my favorite season.",
        "exampleVi": "Mùa xuân là mùa yêu thích của tôi."
      },
      {
        "type": "Noun",
        "word": "January",
        "ipa": "/ˈdʒænjueri/",
        "meaning": "tháng Một",
        "example": "My birthday is in January.",
        "exampleVi": "Sinh nhật tôi vào tháng Một."
      },
      {
        "type": "Noun",
        "word": "February",
        "ipa": "/ˈfebrueri/",
        "meaning": "tháng Hai",
        "example": "February is a short month.",
        "exampleVi": "Tháng Hai là một tháng ngắn."
      },
      {
        "type": "Noun",
        "word": "March",
        "ipa": "/mɑːrtʃ/",
        "meaning": "tháng Ba",
        "example": "Spring starts in March.",
        "exampleVi": "Mùa xuân bắt đầu vào tháng Ba."
      },
      {
        "type": "Noun",
        "word": "April",
        "ipa": "/ˈeɪprəl/",
        "meaning": "tháng Tư",
        "example": "It often rains in April.",
        "exampleVi": "Trời thường mưa vào tháng Tư."
      },
      {
        "type": "Noun",
        "word": "May",
        "ipa": "/meɪ/",
        "meaning": "tháng Năm",
        "example": "My exams are in May.",
        "exampleVi": "Các kỳ thi của tôi vào tháng Năm."
      },
      {
        "type": "Noun",
        "word": "June",
        "ipa": "/dʒuːn/",
        "meaning": "tháng Sáu",
        "example": "Summer starts in June.",
        "exampleVi": "Mùa hè bắt đầu vào tháng Sáu."
      },
      {
        "type": "Noun",
        "word": "July",
        "ipa": "/dʒuˈlaɪ/",
        "meaning": "tháng Bảy",
        "example": "It is very hot in July.",
        "exampleVi": "Tháng Bảy rất nóng."
      },
      {
        "type": "Noun",
        "word": "August",
        "ipa": "/ˈɔːɡəst/",
        "meaning": "tháng Tám",
        "example": "We go on holiday in August.",
        "exampleVi": "Chúng tôi đi nghỉ vào tháng Tám."
      },
      {
        "type": "Noun",
        "word": "September",
        "ipa": "/sepˈtembər/",
        "meaning": "tháng Chín",
        "example": "School starts in September.",
        "exampleVi": "Trường học bắt đầu vào tháng Chín."
      },
      {
        "type": "Noun",
        "word": "October",
        "ipa": "/ɑːkˈtoʊbər/",
        "meaning": "tháng Mười",
        "example": "Halloween is in October.",
        "exampleVi": "Halloween diễn ra vào tháng Mười."
      },
      {
        "type": "Noun",
        "word": "November",
        "ipa": "/noʊˈvembər/",
        "meaning": "tháng Mười Một",
        "example": "It is cold in November.",
        "exampleVi": "Trời lạnh vào tháng Mười Một."
      },
      {
        "type": "Noun",
        "word": "December",
        "ipa": "/dɪˈsembər/",
        "meaning": "tháng Mười Hai",
        "example": "Christmas is in December.",
        "exampleVi": "Giáng sinh vào tháng Mười Hai."
      },
      {
        "type": "Noun",
        "word": "spring",
        "ipa": "/sprɪŋ/",
        "meaning": "mùa xuân",
        "example": "Flowers grow in spring.",
        "exampleVi": "Hoa mọc vào mùa xuân."
      },
      {
        "type": "Noun",
        "word": "summer",
        "ipa": "/ˈsʌmər/",
        "meaning": "mùa hè",
        "example": "We go swimming in summer.",
        "exampleVi": "Chúng tôi đi bơi vào mùa hè."
      },
      {
        "type": "Noun",
        "word": "autumn",
        "ipa": "/ˈɔːtəm/",
        "meaning": "mùa thu",
        "example": "The leaves fall in autumn.",
        "exampleVi": "Lá rụng vào mùa thu."
      },
      {
        "type": "Noun",
        "word": "winter",
        "ipa": "/ˈwɪntər/",
        "meaning": "mùa đông",
        "example": "It is cold in winter.",
        "exampleVi": "Trời lạnh vào mùa đông."
      }
    ]
  },
  {
    "id": 52,
    "title": "Time words",
    "words": [
      {
        "type": "Adverb",
        "word": "now",
        "ipa": "/naʊ/",
        "meaning": "bây giờ, hiện tại",
        "example": "I am busy now.",
        "exampleVi": "Bây giờ tôi đang bận."
      },
      {
        "type": "Adverb",
        "word": "then",
        "ipa": "/ðen/",
        "meaning": "lúc đó; sau đó",
        "example": "I lived in London then.",
        "exampleVi": "Lúc đó tôi sống ở London."
      },
      {
        "type": "Adverb",
        "word": "o'clock",
        "ipa": "/əˈklɑːk/",
        "meaning": "đúng giờ",
        "example": "The class starts at nine o'clock.",
        "exampleVi": "Lớp học bắt đầu lúc 9 giờ."
      },
      {
        "type": "Adverb / Preposition",
        "word": "ago",
        "ipa": "/əˈɡoʊ/",
        "meaning": "cách đây",
        "example": "I saw him two days ago.",
        "exampleVi": "Tôi gặp anh ấy cách đây hai ngày."
      },
      {
        "type": "Preposition",
        "word": "at",
        "ipa": "/æt/",
        "meaning": "vào, lúc",
        "example": "I get up at seven.",
        "exampleVi": "Tôi thức dậy lúc 7 giờ."
      },
      {
        "type": "Determiner",
        "word": "last",
        "ipa": "/læst/",
        "meaning": "trước, vừa qua",
        "example": "I saw her last week.",
        "exampleVi": "Tôi gặp cô ấy tuần trước."
      },
      {
        "type": "Determiner",
        "word": "next",
        "ipa": "/nekst/",
        "meaning": "tới, kế tiếp",
        "example": "We are going on holiday next month.",
        "exampleVi": "Chúng tôi sẽ đi nghỉ vào tháng tới."
      },
      {
        "type": "Noun",
        "word": "the past",
        "ipa": "/ðə pæst/",
        "meaning": "quá khứ",
        "example": "We cannot change the past.",
        "exampleVi": "Chúng ta không thể thay đổi quá khứ."
      },
      {
        "type": "Noun",
        "word": "the present",
        "ipa": "/ðə ˈprezənt/",
        "meaning": "hiện tại",
        "example": "We should enjoy the present.",
        "exampleVi": "Chúng ta nên tận hưởng hiện tại."
      },
      {
        "type": "Noun",
        "word": "the future",
        "ipa": "/ðə ˈfjuːtʃər/",
        "meaning": "tương lai",
        "example": "I am thinking about the future.",
        "exampleVi": "Tôi đang nghĩ về tương lai."
      },
      {
        "type": "Phrase",
        "word": "in the past",
        "ipa": "/ɪn ðə pæst/",
        "meaning": "trong quá khứ, trước đây",
        "example": "People travelled less in the past.",
        "exampleVi": "Trước đây mọi người đi lại ít hơn."
      },
      {
        "type": "Adverb",
        "word": "always",
        "ipa": "/ˈɔːlweɪz/",
        "meaning": "luôn luôn",
        "example": "I always have breakfast.",
        "exampleVi": "Tôi luôn ăn sáng."
      },
      {
        "type": "Adverb",
        "word": "usually",
        "ipa": "/ˈjuːʒuəli/",
        "meaning": "thường xuyên, thường",
        "example": "I usually walk to work.",
        "exampleVi": "Tôi thường đi bộ đến chỗ làm."
      },
      {
        "type": "Adverb",
        "word": "often",
        "ipa": "/ˈɔːfən/",
        "meaning": "thường xuyên",
        "example": "We often watch TV together.",
        "exampleVi": "Chúng tôi thường xem TV cùng nhau."
      },
      {
        "type": "Adverb",
        "word": "sometimes",
        "ipa": "/ˈsʌmtaɪmz/",
        "meaning": "thỉnh thoảng",
        "example": "I sometimes drink coffee.",
        "exampleVi": "Tôi thỉnh thoảng uống cà phê."
      },
      {
        "type": "Adverb",
        "word": "occasionally",
        "ipa": "/əˈkeɪʒənəli/",
        "meaning": "thỉnh thoảng, đôi khi",
        "example": "We occasionally eat out.",
        "exampleVi": "Thỉnh thoảng chúng tôi ăn ngoài."
      },
      {
        "type": "Phrase",
        "word": "not often",
        "ipa": "/nɑːt ˈɔːfən/",
        "meaning": "không thường xuyên",
        "example": "I don't go there very often.",
        "exampleVi": "Tôi không thường xuyên đến đó."
      },
      {
        "type": "Adverb",
        "word": "rarely",
        "ipa": "/ˈrerli/",
        "meaning": "hiếm khi",
        "example": "I rarely eat fast food.",
        "exampleVi": "Tôi hiếm khi ăn đồ ăn nhanh."
      },
      {
        "type": "Adverb",
        "word": "never",
        "ipa": "/ˈnevər/",
        "meaning": "không bao giờ",
        "example": "I never smoke.",
        "exampleVi": "Tôi không bao giờ hút thuốc."
      },
      {
        "type": "Phrase",
        "word": "once a week",
        "ipa": "/wʌns ə wiːk/",
        "meaning": "một lần một tuần",
        "example": "I play tennis once a week.",
        "exampleVi": "Tôi chơi quần vợt một lần một tuần."
      },
      {
        "type": "Phrase",
        "word": "twice a day",
        "ipa": "/twaɪs ə deɪ/",
        "meaning": "hai lần một ngày",
        "example": "I brush my teeth twice a day.",
        "exampleVi": "Tôi đánh răng hai lần một ngày."
      },
      {
        "type": "Phrase",
        "word": "three times a year",
        "ipa": "/θriː taɪmz ə jɪr/",
        "meaning": "ba lần một năm",
        "example": "We visit them three times a year.",
        "exampleVi": "Chúng tôi thăm họ ba lần một năm."
      },
      {
        "type": "Phrase",
        "word": "four times a month",
        "ipa": "/fɔːr taɪmz ə mʌnθ/",
        "meaning": "bốn lần một tháng",
        "example": "I go swimming four times a month.",
        "exampleVi": "Tôi đi bơi bốn lần một tháng."
      },
      {
        "type": "Phrase",
        "word": "in a moment",
        "ipa": "/ɪn ə ˈmoʊmənt/",
        "meaning": "trong chốc lát, ngay sau đây",
        "example": "I'll be ready in a moment.",
        "exampleVi": "Tôi sẽ sẵn sàng ngay sau đây."
      },
      {
        "type": "Phrase",
        "word": "at the moment",
        "ipa": "/æt ðə ˈmoʊmənt/",
        "meaning": "hiện tại, lúc này",
        "example": "I'm busy at the moment.",
        "exampleVi": "Hiện tại tôi đang bận."
      },
      {
        "type": "Adverb",
        "word": "soon",
        "ipa": "/suːn/",
        "meaning": "sớm, chẳng bao lâu nữa",
        "example": "See you soon!",
        "exampleVi": "Hẹn gặp bạn sớm!"
      },
      {
        "type": "Adverb",
        "word": "recently",
        "ipa": "/ˈriːsəntli/",
        "meaning": "gần đây",
        "example": "I have recently started a new job.",
        "exampleVi": "Gần đây tôi bắt đầu một công việc mới."
      }
    ]
  },
  {
    "id": 53,
    "title": "Places",
    "words": [
      {
        "type": "Noun",
        "word": "place",
        "ipa": "/pleɪs/",
        "meaning": "nơi, địa điểm",
        "example": "This is a nice place.",
        "exampleVi": "Đây là một nơi đẹp."
      },
      {
        "type": "Adverb",
        "word": "here",
        "ipa": "/hɪr/",
        "meaning": "ở đây",
        "example": "Come here, please.",
        "exampleVi": "Làm ơn đến đây."
      },
      {
        "type": "Adverb",
        "word": "there",
        "ipa": "/ðer/",
        "meaning": "ở đó, ở kia",
        "example": "Put the bag there.",
        "exampleVi": "Đặt cái túi ở đó."
      },
      {
        "type": "Adverb",
        "word": "back",
        "ipa": "/bæk/",
        "meaning": "trở lại; phía sau",
        "example": "I am back home now.",
        "exampleVi": "Bây giờ tôi đã trở về nhà."
      },
      {
        "type": "Adverb",
        "word": "everywhere",
        "ipa": "/ˈevriwer/",
        "meaning": "mọi nơi, khắp nơi",
        "example": "I looked everywhere for my keys.",
        "exampleVi": "Tôi đã tìm chìa khóa khắp nơi."
      },
      {
        "type": "Phrase",
        "word": "in the kitchen",
        "ipa": "/ɪn ðə ˈkɪtʃən/",
        "meaning": "trong nhà bếp",
        "example": "Mum is in the kitchen.",
        "exampleVi": "Mẹ đang ở trong bếp."
      },
      {
        "type": "Phrase",
        "word": "in the village",
        "ipa": "/ɪn ðə ˈvɪlɪdʒ/",
        "meaning": "trong làng",
        "example": "My grandparents live in the village.",
        "exampleVi": "Ông bà tôi sống trong làng."
      },
      {
        "type": "Phrase",
        "word": "in Seoul",
        "ipa": "/ɪn soʊl/",
        "meaning": "ở Seoul",
        "example": "My friend lives in Seoul.",
        "exampleVi": "Bạn tôi sống ở Seoul."
      },
      {
        "type": "Phrase",
        "word": "in South Korea",
        "ipa": "/ɪn ˌsaʊθ kəˈriːə/",
        "meaning": "ở Hàn Quốc",
        "example": "She lives in South Korea.",
        "exampleVi": "Cô ấy sống ở Hàn Quốc."
      },
      {
        "type": "Phrase",
        "word": "in Asia",
        "ipa": "/ɪn ˈeɪʒə/",
        "meaning": "ở châu Á",
        "example": "Japan is in Asia.",
        "exampleVi": "Nhật Bản ở châu Á."
      },
      {
        "type": "Phrase",
        "word": "at the station",
        "ipa": "/æt ðə ˈsteɪʃən/",
        "meaning": "ở nhà ga",
        "example": "I'll meet you at the station.",
        "exampleVi": "Tôi sẽ gặp bạn ở nhà ga."
      },
      {
        "type": "Phrase",
        "word": "at the front of the class",
        "ipa": "/æt ðə frʌnt əv ðə klæs/",
        "meaning": "ở phía trước lớp",
        "example": "The teacher is at the front of the class.",
        "exampleVi": "Giáo viên ở phía trước lớp."
      },
      {
        "type": "Phrase",
        "word": "on the wall",
        "ipa": "/ɑːn ðə wɔːl/",
        "meaning": "trên tường",
        "example": "There is a picture on the wall.",
        "exampleVi": "Có một bức tranh trên tường."
      },
      {
        "type": "Phrase",
        "word": "on the chair",
        "ipa": "/ɑːn ðə tʃer/",
        "meaning": "trên ghế",
        "example": "My bag is on the chair.",
        "exampleVi": "Túi của tôi ở trên ghế."
      },
      {
        "type": "Phrase",
        "word": "on it",
        "ipa": "/ɑːn ɪt/",
        "meaning": "trên đó",
        "example": "There is a name on it.",
        "exampleVi": "Có một cái tên trên đó."
      },
      {
        "type": "Noun",
        "word": "top",
        "ipa": "/tɑːp/",
        "meaning": "phía trên, đỉnh",
        "example": "The book is at the top of the box.",
        "exampleVi": "Quyển sách ở phía trên cùng của hộp."
      },
      {
        "type": "Phrase",
        "word": "the middle of",
        "ipa": "/ðə ˈmɪdl əv/",
        "meaning": "ở giữa",
        "example": "She is in the middle of the room.",
        "exampleVi": "Cô ấy ở giữa căn phòng."
      },
      {
        "type": "Phrase",
        "word": "the bottom of",
        "ipa": "/ðə ˈbɑːtəm əv/",
        "meaning": "phía dưới cùng",
        "example": "My name is at the bottom of the page.",
        "exampleVi": "Tên tôi ở cuối trang."
      },
      {
        "type": "Phrase",
        "word": "front of",
        "ipa": "/frʌnt əv/",
        "meaning": "phía trước",
        "example": "The car is in front of the house.",
        "exampleVi": "Chiếc xe ở phía trước ngôi nhà."
      },
      {
        "type": "Phrase",
        "word": "side of",
        "ipa": "/saɪd əv/",
        "meaning": "bên cạnh, phía bên",
        "example": "There is a door at the side of the house.",
        "exampleVi": "Có một cánh cửa ở bên hông ngôi nhà."
      },
      {
        "type": "Phrase",
        "word": "back of",
        "ipa": "/bæk əv/",
        "meaning": "phía sau",
        "example": "He is at the back of the room.",
        "exampleVi": "Anh ấy ở phía sau căn phòng."
      },
      {
        "type": "Noun",
        "word": "beginning",
        "ipa": "/bɪˈɡɪnɪŋ/",
        "meaning": "phần đầu, sự bắt đầu",
        "example": "We are at the beginning of the road.",
        "exampleVi": "Chúng tôi đang ở đầu con đường."
      },
      {
        "type": "Phrase",
        "word": "the end of",
        "ipa": "/ði end əv/",
        "meaning": "cuối, phần cuối",
        "example": "The shop is at the end of the street.",
        "exampleVi": "Cửa hàng ở cuối phố."
      },
      {
        "type": "Phrase",
        "word": "on the left",
        "ipa": "/ɑːn ðə left/",
        "meaning": "ở bên trái",
        "example": "The bank is on the left.",
        "exampleVi": "Ngân hàng ở bên trái."
      },
      {
        "type": "Phrase",
        "word": "on the right",
        "ipa": "/ɑːn ðə raɪt/",
        "meaning": "ở bên phải",
        "example": "The school is on the right.",
        "exampleVi": "Trường học ở bên phải."
      },
      {
        "type": "Phrase",
        "word": "at home",
        "ipa": "/ət hoʊm/",
        "meaning": "ở nhà",
        "example": "I am at home today.",
        "exampleVi": "Hôm nay tôi ở nhà."
      },
      {
        "type": "Adverb",
        "word": "out",
        "ipa": "/aʊt/",
        "meaning": "ra ngoài, ở bên ngoài",
        "example": "The children are out.",
        "exampleVi": "Bọn trẻ đang ở bên ngoài."
      },
      {
        "type": "Adverb",
        "word": "away",
        "ipa": "/əˈweɪ/",
        "meaning": "xa, đi khỏi",
        "example": "My parents are away this week.",
        "exampleVi": "Bố mẹ tôi đi vắng tuần này."
      },
      {
        "type": "Adverb",
        "word": "abroad",
        "ipa": "/əˈbrɔːd/",
        "meaning": "ở nước ngoài, ra nước ngoài",
        "example": "She wants to study abroad.",
        "exampleVi": "Cô ấy muốn du học."
      }
    ]
  },
  {
    "id": 54,
    "title": "Manner",
    "words": [
      {
        "type": "Noun",
        "word": "manner",
        "ipa": "/ˈmænər/",
        "meaning": "cách thức, cách làm; thái độ/cách cư xử",
        "example": "He spoke in a polite manner.",
        "exampleVi": "Anh ấy nói chuyện một cách lịch sự."
      },
      {
        "type": "Adjective / Adverb",
        "word": "fast",
        "ipa": "/fæst/",
        "meaning": "nhanh; một cách nhanh chóng",
        "example": "The car is very fast.",
        "exampleVi": "Chiếc xe rất nhanh."
      },
      {
        "type": "Adjective",
        "word": "slow",
        "ipa": "/sloʊ/",
        "meaning": "chậm",
        "example": "The bus is slow today.",
        "exampleVi": "Hôm nay xe buýt chạy chậm."
      },
      {
        "type": "Adverb",
        "word": "slowly",
        "ipa": "/ˈsloʊli/",
        "meaning": "một cách chậm rãi",
        "example": "Please speak slowly.",
        "exampleVi": "Làm ơn nói chậm."
      },
      {
        "type": "Adjective",
        "word": "loud",
        "ipa": "/laʊd/",
        "meaning": "to, lớn (âm thanh)",
        "example": "The music is too loud.",
        "exampleVi": "Nhạc quá to."
      },
      {
        "type": "Adjective",
        "word": "quiet",
        "ipa": "/ˈkwaɪət/",
        "meaning": "yên lặng, im lặng",
        "example": "This room is very quiet.",
        "exampleVi": "Căn phòng này rất yên tĩnh."
      },
      {
        "type": "Adverb",
        "word": "loudly",
        "ipa": "/ˈlaʊdli/",
        "meaning": "một cách to, lớn tiếng",
        "example": "They are talking loudly.",
        "exampleVi": "Họ đang nói chuyện lớn tiếng."
      },
      {
        "type": "Adverb",
        "word": "quietly",
        "ipa": "/ˈkwaɪətli/",
        "meaning": "một cách yên lặng, nhỏ nhẹ",
        "example": "Please close the door quietly.",
        "exampleVi": "Làm ơn đóng cửa nhẹ nhàng."
      },
      {
        "type": "Adjective",
        "word": "good",
        "ipa": "/ɡʊd/",
        "meaning": "tốt, giỏi",
        "example": "She is a good student.",
        "exampleVi": "Cô ấy là một học sinh giỏi."
      },
      {
        "type": "Adverb",
        "word": "well",
        "ipa": "/wel/",
        "meaning": "tốt, giỏi, một cách tốt",
        "example": "She speaks English well.",
        "exampleVi": "Cô ấy nói tiếng Anh tốt."
      },
      {
        "type": "Adjective",
        "word": "bad",
        "ipa": "/bæd/",
        "meaning": "xấu, tệ",
        "example": "It was a bad day.",
        "exampleVi": "Đó là một ngày tồi tệ."
      },
      {
        "type": "Adverb",
        "word": "badly",
        "ipa": "/ˈbædli/",
        "meaning": "một cách tệ, kém",
        "example": "He played badly today.",
        "exampleVi": "Hôm nay anh ấy chơi rất tệ."
      },
      {
        "type": "Adjective / Adverb",
        "word": "right",
        "ipa": "/raɪt/",
        "meaning": "đúng; đúng cách",
        "example": "You did it right.",
        "exampleVi": "Bạn đã làm đúng."
      },
      {
        "type": "Adjective / Adverb",
        "word": "wrong",
        "ipa": "/rɔːŋ/",
        "meaning": "sai; sai cách",
        "example": "You are doing it wrong.",
        "exampleVi": "Bạn đang làm sai cách."
      },
      {
        "type": "Phrase",
        "word": "in a friendly way",
        "ipa": "/ɪn ə ˈfrendli weɪ/",
        "meaning": "theo cách thân thiện",
        "example": "She spoke to me in a friendly way.",
        "exampleVi": "Cô ấy nói chuyện với tôi một cách thân thiện."
      },
      {
        "type": "Phrase",
        "word": "in an unfriendly way",
        "ipa": "/ɪn ən ʌnˈfrendli weɪ/",
        "meaning": "theo cách không thân thiện",
        "example": "He answered me in an unfriendly way.",
        "exampleVi": "Anh ấy trả lời tôi một cách không thân thiện."
      },
      {
        "type": "Phrase",
        "word": "the wrong way",
        "ipa": "/ðə rɔːŋ weɪ/",
        "meaning": "cách sai, sai cách",
        "example": "You are doing it the wrong way.",
        "exampleVi": "Bạn đang làm việc đó sai cách."
      },
      {
        "type": "Phrase",
        "word": "the right way",
        "ipa": "/ðə raɪt weɪ/",
        "meaning": "cách đúng, đúng cách",
        "example": "Show me the right way.",
        "exampleVi": "Hãy chỉ cho tôi cách đúng."
      }
    ]
  },
  {
    "id": 55,
    "title": "Common uncountable nouns",
    "words": [
      {
        "type": "Adjective",
        "word": "countable",
        "ipa": "/ˈkaʊntəbl/",
        "meaning": "đếm được",
        "example": "An apple is a countable noun.",
        "exampleVi": "\"Apple\" là một danh từ đếm được."
      },
      {
        "type": "Noun",
        "word": "apple",
        "ipa": "/ˈæpəl/",
        "meaning": "quả táo",
        "example": "I have three apples.",
        "exampleVi": "Tôi có ba quả táo."
      },
      {
        "type": "Noun",
        "word": "shoe",
        "ipa": "/ʃuː/",
        "meaning": "giày",
        "example": "I bought two shoes.",
        "exampleVi": "Tôi đã mua hai chiếc giày."
      },
      {
        "type": "Noun",
        "word": "plate",
        "ipa": "/pleɪt/",
        "meaning": "cái đĩa",
        "example": "There are four plates on the table.",
        "exampleVi": "Có bốn cái đĩa trên bàn."
      },
      {
        "type": "Adjective",
        "word": "uncountable",
        "ipa": "/ʌnˈkaʊntəbl/",
        "meaning": "không đếm được",
        "example": "Rice is an uncountable noun.",
        "exampleVi": "\"Rice\" là một danh từ không đếm được."
      },
      {
        "type": "Noun",
        "word": "sugar",
        "ipa": "/ˈʃʊɡər/",
        "meaning": "đường",
        "example": "I don't want much sugar.",
        "exampleVi": "Tôi không muốn nhiều đường."
      },
      {
        "type": "Noun",
        "word": "money",
        "ipa": "/ˈmʌni/",
        "meaning": "tiền",
        "example": "I don't have much money.",
        "exampleVi": "Tôi không có nhiều tiền."
      },
      {
        "type": "Noun",
        "word": "luggage",
        "ipa": "/ˈlʌɡɪdʒ/",
        "meaning": "hành lý",
        "example": "My luggage is very heavy.",
        "exampleVi": "Hành lý của tôi rất nặng."
      },
      {
        "type": "Noun",
        "word": "furniture",
        "ipa": "/ˈfɜːrnɪtʃər/",
        "meaning": "đồ nội thất",
        "example": "There is a lot of furniture here.",
        "exampleVi": "Có rất nhiều đồ nội thất ở đây."
      },
      {
        "type": "Noun",
        "word": "traffic",
        "ipa": "/ˈtræfɪk/",
        "meaning": "giao thông",
        "example": "There is a lot of traffic today.",
        "exampleVi": "Hôm nay giao thông rất đông."
      },
      {
        "type": "Noun",
        "word": "advice",
        "ipa": "/ədˈvaɪs/",
        "meaning": "lời khuyên",
        "example": "My teacher gave me some advice.",
        "exampleVi": "Giáo viên đã cho tôi một số lời khuyên."
      },
      {
        "type": "Noun",
        "word": "information",
        "ipa": "/ˌɪnfərˈmeɪʃən/",
        "meaning": "thông tin",
        "example": "I need some information.",
        "exampleVi": "Tôi cần một số thông tin."
      },
      {
        "type": "Noun",
        "word": "news",
        "ipa": "/nuːz/",
        "meaning": "tin tức",
        "example": "I have some good news.",
        "exampleVi": "Tôi có một tin tốt."
      },
      {
        "type": "Noun",
        "word": "weather",
        "ipa": "/ˈweðər/",
        "meaning": "thời tiết",
        "example": "The weather is nice today.",
        "exampleVi": "Thời tiết hôm nay đẹp."
      },
      {
        "type": "Noun",
        "word": "accommodation",
        "ipa": "/əˌkɑːməˈdeɪʃən/",
        "meaning": "chỗ ở, nơi lưu trú",
        "example": "We need cheap accommodation.",
        "exampleVi": "Chúng tôi cần chỗ ở giá rẻ."
      },
      {
        "type": "Noun",
        "word": "air",
        "ipa": "/er/",
        "meaning": "không khí",
        "example": "The air is clean here.",
        "exampleVi": "Không khí ở đây trong lành."
      },
      {
        "type": "Noun",
        "word": "work",
        "ipa": "/wɜːrk/",
        "meaning": "công việc",
        "example": "I have a lot of work today.",
        "exampleVi": "Hôm nay tôi có nhiều việc."
      },
      {
        "type": "Noun",
        "word": "travel",
        "ipa": "/ˈtrævəl/",
        "meaning": "việc đi lại, du lịch",
        "example": "I love travel.",
        "exampleVi": "Tôi thích du lịch."
      },
      {
        "type": "Noun",
        "word": "rice",
        "ipa": "/raɪs/",
        "meaning": "gạo, cơm",
        "example": "We eat rice every day.",
        "exampleVi": "Chúng tôi ăn cơm mỗi ngày."
      },
      {
        "type": "Noun",
        "word": "spaghetti",
        "ipa": "/spəˈɡeti/",
        "meaning": "mì Ý",
        "example": "I like spaghetti.",
        "exampleVi": "Tôi thích mì Ý."
      },
      {
        "type": "Noun",
        "word": "butter",
        "ipa": "/ˈbʌtər/",
        "meaning": "bơ",
        "example": "Put some butter on the bread.",
        "exampleVi": "Phết một ít bơ lên bánh mì."
      },
      {
        "type": "Noun",
        "word": "bread",
        "ipa": "/bred/",
        "meaning": "bánh mì",
        "example": "I bought some bread.",
        "exampleVi": "Tôi đã mua một ít bánh mì."
      },
      {
        "type": "Noun",
        "word": "milk",
        "ipa": "/mɪlk/",
        "meaning": "sữa",
        "example": "She drinks milk every morning.",
        "exampleVi": "Cô ấy uống sữa mỗi sáng."
      },
      {
        "type": "Noun",
        "word": "water",
        "ipa": "/ˈwɔːtər/",
        "meaning": "nước",
        "example": "Can I have some water?",
        "exampleVi": "Tôi có thể xin một ít nước không?"
      },
      {
        "type": "Noun",
        "word": "tea",
        "ipa": "/tiː/",
        "meaning": "trà",
        "example": "Would you like some tea?",
        "exampleVi": "Bạn có muốn một ít trà không?"
      },
      {
        "type": "Noun",
        "word": "coffee",
        "ipa": "/ˈkɔːfi/",
        "meaning": "cà phê",
        "example": "I drink coffee every morning.",
        "exampleVi": "Tôi uống cà phê mỗi sáng."
      },
      {
        "type": "Phrase",
        "word": "two loaves of bread",
        "ipa": "/tuː loʊvz əv bred/",
        "meaning": "hai ổ bánh mì",
        "example": "We need two loaves of bread.",
        "exampleVi": "Chúng tôi cần hai ổ bánh mì."
      },
      {
        "type": "Phrase",
        "word": "three litres of milk",
        "ipa": "/θriː ˈliːtərz əv mɪlk/",
        "meaning": "ba lít sữa",
        "example": "I bought three litres of milk.",
        "exampleVi": "Tôi đã mua ba lít sữa."
      },
      {
        "type": "Phrase",
        "word": "a kilo of rice",
        "ipa": "/ə ˈkiːloʊ əv raɪs/",
        "meaning": "một ki-lô-gam gạo",
        "example": "We need a kilo of rice.",
        "exampleVi": "Chúng tôi cần một ki-lô-gam gạo."
      }
    ]
  },
  {
    "id": 56,
    "title": "Common adjectives: Good and bad things",
    "words": []
  },
  {
    "id": 57,
    "title": "Words and prepositions",
    "words": []
  },
  {
    "id": 58,
    "title": "Prefixes",
    "words": []
  },
  {
    "id": 59,
    "title": "Suffixes",
    "words": []
  },
  {
    "id": 60,
    "title": "Words you may confuse",
    "words": []
  }
];
