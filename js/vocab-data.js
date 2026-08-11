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
    "words": []
  },
  {
    "id": 3,
    "title": "Parts of the body",
    "words": []
  },
  {
    "id": 4,
    "title": "Clothes",
    "words": []
  },
  {
    "id": 5,
    "title": "Describing people",
    "words": []
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
