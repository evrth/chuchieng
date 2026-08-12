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
    "words": []
  },
  {
    "id": 7,
    "title": "Feelings",
    "words": []
  },
  {
    "id": 8,
    "title": "Conversations 1: Greetings and wishes",
    "words": []
  },
  {
    "id": 9,
    "title": "Conversations 2: Useful words and expressions",
    "words": []
  },
  {
    "id": 10,
    "title": "Food and drink",
    "words": []
  },
  {
    "id": 11,
    "title": "In the kitchen",
    "words": []
  },
  {
    "id": 12,
    "title": "In the bedroom and bathroom",
    "words": []
  },
  {
    "id": 13,
    "title": "In the living room",
    "words": []
  },
  {
    "id": 14,
    "title": "Jobs",
    "words": []
  },
  {
    "id": 15,
    "title": "At school and university",
    "words": []
  },
  {
    "id": 16,
    "title": "Communications",
    "words": []
  },
  {
    "id": 17,
    "title": "Your phone",
    "words": []
  },
  {
    "id": 18,
    "title": "Holidays",
    "words": []
  },
  {
    "id": 19,
    "title": "Shops and shopping",
    "words": []
  },
  {
    "id": 20,
    "title": "Online shopping",
    "words": []
  },
  {
    "id": 21,
    "title": "In a hotel",
    "words": []
  },
  {
    "id": 22,
    "title": "Eating out",
    "words": []
  },
  {
    "id": 23,
    "title": "Sports table",
    "words": []
  },
  {
    "id": 24,
    "title": "Cinema",
    "words": []
  },
  {
    "id": 25,
    "title": "Free time at home",
    "words": []
  },
  {
    "id": 26,
    "title": "Music and musical instruments",
    "words": []
  },
  {
    "id": 27,
    "title": "Countries and nationalities",
    "words": []
  },
  {
    "id": 28,
    "title": "Weather",
    "words": []
  },
  {
    "id": 29,
    "title": "In the town",
    "words": []
  },
  {
    "id": 30,
    "title": "In the countryside",
    "words": []
  },
  {
    "id": 31,
    "title": "Animals",
    "words": []
  },
  {
    "id": 32,
    "title": "Travelling",
    "words": []
  },
  {
    "id": 33,
    "title": "UK culture",
    "words": []
  },
  {
    "id": 34,
    "title": "Crime",
    "words": []
  },
  {
    "id": 35,
    "title": "The media",
    "words": []
  },
  {
    "id": 36,
    "title": "Problems at home and work",
    "words": []
  },
  {
    "id": 37,
    "title": "Global problems",
    "words": []
  },
  {
    "id": 38,
    "title": "Have / had / had",
    "words": []
  },
  {
    "id": 39,
    "title": "Go / went / gone",
    "words": []
  },
  {
    "id": 40,
    "title": "Do / did / done",
    "words": []
  },
  {
    "id": 41,
    "title": "Make / made / made",
    "words": []
  },
  {
    "id": 42,
    "title": "Come / came / come",
    "words": []
  },
  {
    "id": 43,
    "title": "Take / took / taken",
    "words": []
  },
  {
    "id": 44,
    "title": "Bring / brought / brought",
    "words": []
  },
  {
    "id": 45,
    "title": "Get / got / got",
    "words": []
  },
  {
    "id": 46,
    "title": "Phrasal verbs",
    "words": []
  },
  {
    "id": 47,
    "title": "Everyday things",
    "words": []
  },
  {
    "id": 48,
    "title": "Talking",
    "words": []
  },
  {
    "id": 49,
    "title": "Moving",
    "words": []
  },
  {
    "id": 50,
    "title": "Conjunctions and connecting words",
    "words": []
  },
  {
    "id": 51,
    "title": "Days, months, seasons",
    "words": []
  },
  {
    "id": 52,
    "title": "Time words",
    "words": []
  },
  {
    "id": 53,
    "title": "Places",
    "words": []
  },
  {
    "id": 54,
    "title": "Manner",
    "words": []
  },
  {
    "id": 55,
    "title": "Common uncountable nouns",
    "words": []
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
