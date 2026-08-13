const EXERCISES_DATA = {
  1: {
  "unit": {
    "id": "unit-1-family",
    "title": "Unit 1: The Family",
    "level": "A1-A2",
    "language_pair": {
      "target": "en",
      "native": "vi"
    }
  },
  "exercises": [
    {
      "id": "ex1-matching",
      "type": "matching",
      "title": "Nối từ với nghĩa",
      "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
      "pairs": [
        {
          "left": "father",
          "right": "bố, cha"
        },
        {
          "left": "mother",
          "right": "mẹ"
        },
        {
          "left": "brother",
          "right": "anh/em trai"
        },
        {
          "left": "sister",
          "right": "chị/em gái"
        },
        {
          "left": "grandfather",
          "right": "ông"
        },
        {
          "left": "grandmother",
          "right": "bà"
        },
        {
          "left": "uncle",
          "right": "chú, bác, cậu, dượng"
        },
        {
          "left": "aunt",
          "right": "cô, dì, bác gái, thím, mợ"
        },
        {
          "left": "son",
          "right": "con trai"
        },
        {
          "left": "daughter",
          "right": "con gái"
        }
      ]
    },
    {
      "id": "ex2-fill-blank",
      "type": "fill_in_the_blank",
      "title": "Điền từ vào chỗ trống",
      "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
      "word_bank": [
        "father",
        "husband",
        "children",
        "mother",
        "brother",
        "daughter",
        "grandfather",
        "aunt",
        "cousins",
        "nephew"
      ],
      "questions": [
        {
          "id": "q1",
          "sentence": "My ______ works in a bank.",
          "hint_vi": "bố tôi",
          "answer": "father"
        },
        {
          "id": "q2",
          "sentence": "Her ______ is very friendly.",
          "hint_vi": "chồng của cô ấy",
          "answer": "husband"
        },
        {
          "id": "q3",
          "sentence": "They have three ______.",
          "hint_vi": "các con",
          "answer": "children"
        },
        {
          "id": "q4",
          "sentence": "My ______ cooks dinner every day.",
          "hint_vi": "mẹ tôi",
          "answer": "mother"
        },
        {
          "id": "q5",
          "sentence": "I have one older ______.",
          "hint_vi": "anh trai",
          "answer": "brother"
        },
        {
          "id": "q6",
          "sentence": "Their ______ is five years old.",
          "hint_vi": "con gái",
          "answer": "daughter"
        },
        {
          "id": "q7",
          "sentence": "My ______ is 75 years old.",
          "hint_vi": "ông tôi",
          "answer": "grandfather"
        },
        {
          "id": "q8",
          "sentence": "My ______ visits us every Sunday.",
          "hint_vi": "cô/dì",
          "answer": "aunt"
        },
        {
          "id": "q9",
          "sentence": "I often play with my ______.",
          "hint_vi": "anh chị em họ",
          "answer": "cousins"
        },
        {
          "id": "q10",
          "sentence": "My ______ likes toy cars.",
          "hint_vi": "cháu trai",
          "answer": "nephew"
        }
      ]
    },
    {
      "id": "ex3-multiple-choice",
      "type": "multiple_choice",
      "title": "Trắc nghiệm",
      "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
      "questions": [
        {
          "id": "q1",
          "question": "Your mother's mother is your...",
          "options": [
            "grandmother",
            "aunt",
            "sister",
            "niece"
          ],
          "answer": "grandmother"
        },
        {
          "id": "q2",
          "question": "Your father's brother is your...",
          "options": [
            "cousin",
            "uncle",
            "nephew",
            "son"
          ],
          "answer": "uncle"
        },
        {
          "id": "q3",
          "question": "A woman's son and daughter are her...",
          "options": [
            "parents",
            "relatives",
            "children",
            "grandparents"
          ],
          "answer": "children"
        },
        {
          "id": "q4",
          "question": "Your sister's daughter is your...",
          "options": [
            "niece",
            "nephew",
            "granddaughter",
            "cousin"
          ],
          "answer": "niece"
        },
        {
          "id": "q5",
          "question": "A man married to your sister is your...",
          "options": [
            "father",
            "husband",
            "brother-in-law",
            "grandfather"
          ],
          "answer": "brother-in-law"
        },
        {
          "id": "q6",
          "question": "Your uncle's son is your...",
          "options": [
            "brother",
            "cousin",
            "nephew",
            "grandson"
          ],
          "answer": "cousin"
        },
        {
          "id": "q7",
          "question": "Your mother and father are your...",
          "options": [
            "cousins",
            "parents",
            "children",
            "relatives"
          ],
          "answer": "parents"
        },
        {
          "id": "q8",
          "question": "Your son's daughter is your...",
          "options": [
            "niece",
            "daughter",
            "granddaughter",
            "sister"
          ],
          "answer": "granddaughter"
        }
      ]
    },
    {
      "id": "ex4-true-false",
      "type": "true_false",
      "title": "Đúng hay Sai",
      "instructions_vi": "Xác định câu sau đúng hay sai.",
      "questions": [
        {
          "id": "q1",
          "statement": "A grandson is the son of your son or daughter.",
          "answer": true
        },
        {
          "id": "q2",
          "statement": "Your aunt is your father's or mother's sister.",
          "answer": true
        },
        {
          "id": "q3",
          "statement": "A niece is a boy.",
          "answer": false
        },
        {
          "id": "q4",
          "statement": "Your parents are your children.",
          "answer": false
        },
        {
          "id": "q5",
          "statement": "A cousin is the child of your aunt or uncle.",
          "answer": true
        },
        {
          "id": "q6",
          "statement": "Your grandparents are your grandmother and grandfather.",
          "answer": true
        }
      ]
    },
    {
      "id": "ex5-unscramble",
      "type": "unscramble",
      "title": "Sắp xếp lại chữ cái",
      "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
      "questions": [
        {
          "id": "q1",
          "scrambled": "TREHOM",
          "answer": "MOTHER"
        },
        {
          "id": "q2",
          "scrambled": "TAFREH",
          "answer": "FATHER"
        },
        {
          "id": "q3",
          "scrambled": "TRESIS",
          "answer": "SISTER"
        },
        {
          "id": "q4",
          "scrambled": "ROTBHER",
          "answer": "BROTHER"
        },
        {
          "id": "q5",
          "scrambled": "LECNU",
          "answer": "UNCLE"
        },
        {
          "id": "q6",
          "scrambled": "TNUA",
          "answer": "AUNT"
        },
        {
          "id": "q7",
          "scrambled": "SUOCIN",
          "answer": "COUSIN"
        },
        {
          "id": "q8",
          "scrambled": "DAGRTHUEGRAN",
          "answer": "GRANDDAUGHTER"
        }
      ]
    },
    {
      "id": "ex6-family-tree",
      "type": "labeling",
      "title": "Điền vào sơ đồ gia đình",
      "instructions_vi": "Điền từ đúng vào chỗ trống dựa vào mối quan hệ trong gia đình của Linh.",
      "questions": [
        {
          "id": "q1",
          "clue_vi": "Ông và bà của Linh (bố mẹ của bố Linh)",
          "answer": "grandparents"
        },
        {
          "id": "q2",
          "clue_vi": "Bố của Linh",
          "answer": "father"
        },
        {
          "id": "q3",
          "clue_vi": "Mẹ của Linh",
          "answer": "mother"
        },
        {
          "id": "q4",
          "clue_vi": "Anh trai của Linh",
          "answer": "brother"
        },
        {
          "id": "q5",
          "clue_vi": "Em gái của Linh",
          "answer": "sister"
        },
        {
          "id": "q6",
          "clue_vi": "Em họ của Linh (con của cô/chú)",
          "answer": "cousin"
        },
        {
          "id": "q7",
          "clue_vi": "Con gái của anh trai Linh",
          "answer": "niece"
        }
      ]
    },
    {
      "id": "ex7-reading-cloze",
      "type": "cloze_reading",
      "title": "Đọc và điền từ",
      "instructions_vi": "Điền từ thích hợp vào chỗ trống dựa vào ngữ cảnh.",
      "passage": "Hello! My name is Mai. I live with my {1} in a small house. My {2} is a doctor and my mother is a teacher. I have one {3} called Tom — he is ten years old, and one {4} called Anna — she is seven. On Sundays, we visit my {5} and {6}. They live near a lake. My {7}, Peter, often comes with his two {8}, Jack and Kate. We all have lunch together and it is a lot of fun!",
      "blanks": [
        {
          "id": "1",
          "answer": "family"
        },
        {
          "id": "2",
          "answer": "father"
        },
        {
          "id": "3",
          "answer": "brother"
        },
        {
          "id": "4",
          "answer": "sister"
        },
        {
          "id": "5",
          "answer": "grandmother"
        },
        {
          "id": "6",
          "answer": "grandfather"
        },
        {
          "id": "7",
          "answer": "uncle"
        },
        {
          "id": "8",
          "answer": "children"
        }
      ]
    }
  ]
},
  2: {
    "unit": {
      "id": "unit-2-life-events",
      "title": "Unit 2: Life Events (Birth, Marriage, Death)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u2-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "birth",
            "right": "sự sinh ra; sự ra đời"
          },
          {
            "left": "birthday",
            "right": "sinh nhật"
          },
          {
            "left": "marriage",
            "right": "hôn nhân"
          },
          {
            "left": "single",
            "right": "độc thân"
          },
          {
            "left": "married",
            "right": "đã kết hôn"
          },
          {
            "left": "widowed",
            "right": "góa; mất vợ/chồng"
          },
          {
            "left": "divorced",
            "right": "đã ly hôn"
          },
          {
            "left": "honeymoon",
            "right": "tuần trăng mật"
          },
          {
            "left": "groom",
            "right": "chú rể"
          },
          {
            "left": "bride",
            "right": "cô dâu"
          }
        ]
      },
      {
        "id": "u2-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "birth",
          "had a baby",
          "born",
          "weighed",
          "birthday",
          "single",
          "divorced",
          "honeymoon"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "Her ______ was in June.",
            "hint_vi": "sự sinh ra",
            "answer": "birth"
          },
          {
            "id": "q2",
            "sentence": "They ______ last year.",
            "hint_vi": "sinh em bé",
            "answer": "had a baby"
          },
          {
            "id": "q3",
            "sentence": "I was ______ in 2000.",
            "hint_vi": "được sinh ra",
            "answer": "born"
          },
          {
            "id": "q4",
            "sentence": "The baby ______ three kilos at birth.",
            "hint_vi": "cân nặng",
            "answer": "weighed"
          },
          {
            "id": "q5",
            "sentence": "My ______ is in May.",
            "hint_vi": "sinh nhật",
            "answer": "birthday"
          },
          {
            "id": "q6",
            "sentence": "She is ______.",
            "hint_vi": "độc thân",
            "answer": "single"
          },
          {
            "id": "q7",
            "sentence": "Her parents are ______.",
            "hint_vi": "đã ly hôn",
            "answer": "divorced"
          },
          {
            "id": "q8",
            "sentence": "They went to Italy for their ______.",
            "hint_vi": "tuần trăng mật",
            "answer": "honeymoon"
          }
        ]
      },
      {
        "id": "u2-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which word means 'không có vợ/chồng'?",
            "options": [
              "married",
              "single",
              "widowed",
              "divorced"
            ],
            "answer": "single"
          },
          {
            "id": "q2",
            "question": "What do you call the woman getting married?",
            "options": [
              "bride",
              "groom",
              "wife",
              "widow"
            ],
            "answer": "bride"
          },
          {
            "id": "q3",
            "question": "What do you call the man getting married?",
            "options": [
              "husband",
              "groom",
              "bride",
              "single man"
            ],
            "answer": "groom"
          },
          {
            "id": "q4",
            "question": "\"They are separated but still talk to each other\" means...",
            "options": [
              "họ đã ly hôn hoàn toàn",
              "họ đang ly thân nhưng chưa ly hôn",
              "họ mới kết hôn",
              "họ độc thân"
            ],
            "answer": "họ đang ly thân nhưng chưa ly hôn"
          },
          {
            "id": "q5",
            "question": "What happens after someone dies?",
            "options": [
              "wedding",
              "funeral",
              "honeymoon",
              "birthday"
            ],
            "answer": "funeral"
          },
          {
            "id": "q6",
            "question": "Which word describes someone whose husband/wife has died?",
            "options": [
              "divorced",
              "single",
              "widowed",
              "married"
            ],
            "answer": "widowed"
          }
        ]
      },
      {
        "id": "u2-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Single\" means you are married.",
            "answer": false
          },
          {
            "id": "q2",
            "statement": "A \"funeral\" happens after someone dies.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "\"Honeymoon\" is a trip after the wedding.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Divorced\" means you are still married.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "\"Bride\" is the man at a wedding.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Birthday\" is the day you were born, celebrated every year.",
            "answer": true
          }
        ]
      },
      {
        "id": "u2-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "HRTBI",
            "answer": "BIRTH"
          },
          {
            "id": "q2",
            "scrambled": "RIRAAMGE",
            "answer": "MARRIAGE"
          },
          {
            "id": "q3",
            "scrambled": "GENSIL",
            "answer": "SINGLE"
          },
          {
            "id": "q4",
            "scrambled": "DIWEDOW",
            "answer": "WIDOWED"
          },
          {
            "id": "q5",
            "scrambled": "EDVROCID",
            "answer": "DIVORCED"
          },
          {
            "id": "q6",
            "scrambled": "NOOMYEHN",
            "answer": "HONEYMOON"
          }
        ]
      }
    ]
  },
  3: {
    "unit": {
      "id": "unit-3-body-parts",
      "title": "Unit 3: The Body",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u3-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "head",
            "right": "đầu"
          },
          {
            "left": "face",
            "right": "mặt, khuôn mặt"
          },
          {
            "left": "eye",
            "right": "mắt"
          },
          {
            "left": "nose",
            "right": "mũi"
          },
          {
            "left": "mouth",
            "right": "miệng"
          },
          {
            "left": "ear",
            "right": "tai"
          },
          {
            "left": "hand",
            "right": "bàn tay"
          },
          {
            "left": "leg",
            "right": "chân"
          },
          {
            "left": "foot",
            "right": "bàn chân"
          },
          {
            "left": "heart",
            "right": "tim"
          }
        ]
      },
      {
        "id": "u3-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "head",
          "mouth",
          "hair",
          "eye",
          "nose",
          "tooth",
          "hands",
          "knee"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "My ______ hurts today.",
            "hint_vi": "đầu",
            "answer": "head"
          },
          {
            "id": "q2",
            "sentence": "Open your ______, please.",
            "hint_vi": "miệng",
            "answer": "mouth"
          },
          {
            "id": "q3",
            "sentence": "Her ______ is very long.",
            "hint_vi": "tóc",
            "answer": "hair"
          },
          {
            "id": "q4",
            "sentence": "My left ______ is red.",
            "hint_vi": "mắt",
            "answer": "eye"
          },
          {
            "id": "q5",
            "sentence": "His ______ is very big.",
            "hint_vi": "mũi",
            "answer": "nose"
          },
          {
            "id": "q6",
            "sentence": "I have a bad ______.",
            "hint_vi": "răng",
            "answer": "tooth"
          },
          {
            "id": "q7",
            "sentence": "Wash your ______ before eating.",
            "hint_vi": "tay",
            "answer": "hands"
          },
          {
            "id": "q8",
            "sentence": "He hurt his ______ while playing football.",
            "hint_vi": "đầu gối",
            "answer": "knee"
          }
        ]
      },
      {
        "id": "u3-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What do you use to see?",
            "options": [
              "ears",
              "eyes",
              "nose",
              "mouth"
            ],
            "answer": "eyes"
          },
          {
            "id": "q2",
            "question": "What organ pumps blood around the body?",
            "options": [
              "brain",
              "heart",
              "stomach",
              "lung"
            ],
            "answer": "heart"
          },
          {
            "id": "q3",
            "question": "What do you use to smell?",
            "options": [
              "nose",
              "ear",
              "hand",
              "foot"
            ],
            "answer": "nose"
          },
          {
            "id": "q4",
            "question": "What is the word for 'ngón tay cái'?",
            "options": [
              "finger",
              "thumb",
              "nail",
              "toe"
            ],
            "answer": "thumb"
          },
          {
            "id": "q5",
            "question": "What organ controls the whole body?",
            "options": [
              "heart",
              "brain",
              "skin",
              "chest"
            ],
            "answer": "brain"
          },
          {
            "id": "q6",
            "question": "What is the plural of 'foot'?",
            "options": [
              "foots",
              "feets",
              "feet",
              "foot"
            ],
            "answer": "feet"
          }
        ]
      },
      {
        "id": "u3-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "You have two eyes.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "You use your ears to see.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "The heart pumps blood around the body.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "You have ten toes.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "The brain is inside your chest.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Teeth\" is the plural of \"tooth\".",
            "answer": true
          }
        ]
      },
      {
        "id": "u3-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "ESNO",
            "answer": "NOSE"
          },
          {
            "id": "q2",
            "scrambled": "TMUOH",
            "answer": "MOUTH"
          },
          {
            "id": "q3",
            "scrambled": "NEEK",
            "answer": "KNEE"
          },
          {
            "id": "q4",
            "scrambled": "TOFO",
            "answer": "FOOT"
          },
          {
            "id": "q5",
            "scrambled": "STCHE",
            "answer": "CHEST"
          },
          {
            "id": "q6",
            "scrambled": "MACHTOS",
            "answer": "STOMACH"
          }
        ]
      }
    ]
  },
  4: {
    "unit": {
      "id": "unit-4-clothes",
      "title": "Unit 4: Clothes",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u4-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "hat",
            "right": "mũ"
          },
          {
            "left": "coat",
            "right": "áo khoác dài"
          },
          {
            "left": "jacket",
            "right": "áo khoác ngắn"
          },
          {
            "left": "scarf",
            "right": "khăn quàng cổ"
          },
          {
            "left": "gloves",
            "right": "găng tay"
          },
          {
            "left": "shoes",
            "right": "giày"
          },
          {
            "left": "suit",
            "right": "bộ com-lê, bộ vest"
          },
          {
            "left": "dress",
            "right": "váy liền"
          },
          {
            "left": "shirt",
            "right": "áo sơ mi"
          },
          {
            "left": "socks",
            "right": "tất, vớ"
          }
        ]
      },
      {
        "id": "u4-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "hat",
          "coat",
          "jacket",
          "scarf",
          "gloves",
          "shoes",
          "suit",
          "dress"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "He is wearing a ______.",
            "hint_vi": "mũ",
            "answer": "hat"
          },
          {
            "id": "q2",
            "sentence": "Put on your ______.",
            "hint_vi": "áo khoác dài",
            "answer": "coat"
          },
          {
            "id": "q3",
            "sentence": "My ______ is black.",
            "hint_vi": "áo khoác ngắn",
            "answer": "jacket"
          },
          {
            "id": "q4",
            "sentence": "She is wearing a warm ______.",
            "hint_vi": "khăn quàng cổ",
            "answer": "scarf"
          },
          {
            "id": "q5",
            "sentence": "I wear ______ in winter.",
            "hint_vi": "găng tay",
            "answer": "gloves"
          },
          {
            "id": "q6",
            "sentence": "My ______ are dirty.",
            "hint_vi": "giày",
            "answer": "shoes"
          },
          {
            "id": "q7",
            "sentence": "He wears a ______ to work.",
            "hint_vi": "bộ vest",
            "answer": "suit"
          },
          {
            "id": "q8",
            "sentence": "She is wearing a red ______.",
            "hint_vi": "váy liền",
            "answer": "dress"
          }
        ]
      },
      {
        "id": "u4-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What do you wear on your feet?",
            "options": [
              "gloves",
              "shoes",
              "hat",
              "scarf"
            ],
            "answer": "shoes"
          },
          {
            "id": "q2",
            "question": "What do you wear around your neck in cold weather?",
            "options": [
              "belt",
              "scarf",
              "tights",
              "socks"
            ],
            "answer": "scarf"
          },
          {
            "id": "q3",
            "question": "Which word means 'quần jean'?",
            "options": [
              "trousers",
              "shorts",
              "jeans",
              "tights"
            ],
            "answer": "jeans"
          },
          {
            "id": "q4",
            "question": "Which phrase means 'mặc quần áo vào người'?",
            "options": [
              "take off",
              "get undressed",
              "get dressed",
              "carry"
            ],
            "answer": "get dressed"
          },
          {
            "id": "q5",
            "question": "What do you call short trousers, usually worn in summer?",
            "options": [
              "jeans",
              "shorts",
              "tights",
              "pyjamas"
            ],
            "answer": "shorts"
          },
          {
            "id": "q6",
            "question": "What do you use to protect yourself from the rain?",
            "options": [
              "umbrella",
              "bag",
              "belt",
              "watch"
            ],
            "answer": "umbrella"
          }
        ]
      },
      {
        "id": "u4-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Trainers\" are shoes for sports.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Pyjamas\" are clothes you wear to work.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"Take off\" means to put clothes on.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "\"A pair of\" is used for things with two parts, like shoes or gloves.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Sunglasses\" protect your eyes from the sun.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"Get undressed\" means to put your clothes on.",
            "answer": false
          }
        ]
      },
      {
        "id": "u4-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "TCAOJK",
            "answer": "JACKET"
          },
          {
            "id": "q2",
            "scrambled": "FRACS",
            "answer": "SCARF"
          },
          {
            "id": "q3",
            "scrambled": "TIUS",
            "answer": "SUIT"
          },
          {
            "id": "q4",
            "scrambled": "SDRES",
            "answer": "DRESS"
          },
          {
            "id": "q5",
            "scrambled": "SEOHS",
            "answer": "SHOES"
          },
          {
            "id": "q6",
            "scrambled": "VGLOSE",
            "answer": "GLOVES"
          }
        ]
      }
    ]
  },
  5: {
    "unit": {
      "id": "unit-5-appearance",
      "title": "Unit 5: Appearance & Age",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u5-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "tall",
            "right": "cao"
          },
          {
            "left": "short",
            "right": "thấp"
          },
          {
            "left": "slim",
            "right": "thon, mảnh mai"
          },
          {
            "left": "thin",
            "right": "gầy, mảnh"
          },
          {
            "left": "fat",
            "right": "béo, mập"
          },
          {
            "left": "beard",
            "right": "râu (quanh cằm và má)"
          },
          {
            "left": "moustache",
            "right": "ria mép"
          },
          {
            "left": "beautiful",
            "right": "xinh đẹp"
          },
          {
            "left": "elderly",
            "right": "cao tuổi, lớn tuổi"
          },
          {
            "left": "age",
            "right": "tuổi"
          }
        ]
      },
      {
        "id": "u5-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "tall",
          "quite",
          "short",
          "medium",
          "slim",
          "beard",
          "blonde",
          "elderly"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "My brother is very ______.",
            "hint_vi": "cao",
            "answer": "tall"
          },
          {
            "id": "q2",
            "sentence": "She is ______ tall.",
            "hint_vi": "khá, tương đối",
            "answer": "quite"
          },
          {
            "id": "q3",
            "sentence": "My sister is ______.",
            "hint_vi": "thấp",
            "answer": "short"
          },
          {
            "id": "q4",
            "sentence": "He is of ______ height.",
            "hint_vi": "trung bình",
            "answer": "medium"
          },
          {
            "id": "q5",
            "sentence": "She is tall and ______.",
            "hint_vi": "thon, mảnh mai",
            "answer": "slim"
          },
          {
            "id": "q6",
            "sentence": "My father has a ______.",
            "hint_vi": "râu",
            "answer": "beard"
          },
          {
            "id": "q7",
            "sentence": "She has long ______ hair.",
            "hint_vi": "tóc vàng",
            "answer": "blonde"
          },
          {
            "id": "q8",
            "sentence": "We should help ______ people.",
            "hint_vi": "người cao tuổi",
            "answer": "elderly"
          }
        ]
      },
      {
        "id": "u5-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which word means 'khá, tương đối'?",
            "options": [
              "very",
              "quite",
              "too",
              "so"
            ],
            "answer": "quite"
          },
          {
            "id": "q2",
            "question": "What do you call facial hair on a man's chin?",
            "options": [
              "moustache",
              "beard",
              "hair",
              "fringe"
            ],
            "answer": "beard"
          },
          {
            "id": "q3",
            "question": "What do you call facial hair above the lips?",
            "options": [
              "beard",
              "moustache",
              "eyebrow",
              "lip"
            ],
            "answer": "moustache"
          },
          {
            "id": "q4",
            "question": "Which word describes someone thin in a nice, healthy way?",
            "options": [
              "fat",
              "overweight",
              "slim",
              "ugly"
            ],
            "answer": "slim"
          },
          {
            "id": "q5",
            "question": "What does 'good-looking' mean?",
            "options": [
              "xấu",
              "đẹp trai / ưa nhìn",
              "già",
              "trẻ"
            ],
            "answer": "đẹp trai / ưa nhìn"
          },
          {
            "id": "q6",
            "question": "Which question asks about someone's height?",
            "options": [
              "How old is he?",
              "How tall is he?",
              "What does he look like?",
              "How heavy is he?"
            ],
            "answer": "How tall is he?"
          }
        ]
      },
      {
        "id": "u5-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Elderly\" means young.",
            "answer": false
          },
          {
            "id": "q2",
            "statement": "\"Overweight\" means thừa cân.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "A \"beard\" grows on a man's chin.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Slim\" and \"fat\" have the same meaning.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "\"Middle-aged\" means very old.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Fair hair\" means tóc sáng màu.",
            "answer": true
          }
        ]
      },
      {
        "id": "u5-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "LATL",
            "answer": "TALL"
          },
          {
            "id": "q2",
            "scrambled": "TRHOS",
            "answer": "SHORT"
          },
          {
            "id": "q3",
            "scrambled": "MISL",
            "answer": "SLIM"
          },
          {
            "id": "q4",
            "scrambled": "DAREB",
            "answer": "BEARD"
          },
          {
            "id": "q5",
            "scrambled": "LYEDLER",
            "answer": "ELDERLY"
          },
          {
            "id": "q6",
            "scrambled": "THIGEW",
            "answer": "WEIGHT"
          }
        ]
      }
    ]
  },
  6: {
    "unit": {
      "id": "unit-6-health",
      "title": "Unit 6: Health & Illness",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u6-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "health",
            "right": "sức khỏe"
          },
          {
            "left": "fine",
            "right": "khỏe, ổn, tốt"
          },
          {
            "left": "doctor",
            "right": "bác sĩ"
          },
          {
            "left": "sick",
            "right": "ốm, bệnh; buồn nôn"
          },
          {
            "left": "headache",
            "right": "đau đầu"
          },
          {
            "left": "dentist",
            "right": "nha sĩ"
          },
          {
            "left": "cold",
            "right": "cảm lạnh"
          },
          {
            "left": "asthma",
            "right": "bệnh hen suyễn"
          },
          {
            "left": "hospital",
            "right": "bệnh viện"
          },
          {
            "left": "relax",
            "right": "thư giãn"
          }
        ]
      },
      {
        "id": "u6-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "rest",
          "headache",
          "dentist",
          "cold",
          "asthma",
          "relax",
          "panic",
          "hospital"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "You should ______ today.",
            "hint_vi": "nghỉ ngơi",
            "answer": "rest"
          },
          {
            "id": "q2",
            "sentence": "I have a ______.",
            "hint_vi": "đau đầu",
            "answer": "headache"
          },
          {
            "id": "q3",
            "sentence": "I have an appointment with the ______.",
            "hint_vi": "nha sĩ",
            "answer": "dentist"
          },
          {
            "id": "q4",
            "sentence": "I have a ______.",
            "hint_vi": "cảm lạnh",
            "answer": "cold"
          },
          {
            "id": "q5",
            "sentence": "He has ______.",
            "hint_vi": "hen suyễn",
            "answer": "asthma"
          },
          {
            "id": "q6",
            "sentence": "Try to ______ before bed.",
            "hint_vi": "thư giãn",
            "answer": "relax"
          },
          {
            "id": "q7",
            "sentence": "Don't ______. Everything is OK.",
            "hint_vi": "hoảng sợ",
            "answer": "panic"
          },
          {
            "id": "q8",
            "sentence": "He is in ______.",
            "hint_vi": "bệnh viện",
            "answer": "hospital"
          }
        ]
      },
      {
        "id": "u6-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which illness is spread by mosquitoes?",
            "options": [
              "malaria",
              "asthma",
              "cold",
              "toothache"
            ],
            "answer": "malaria"
          },
          {
            "id": "q2",
            "question": "What do you take for a headache?",
            "options": [
              "aspirin",
              "dentist",
              "doctor",
              "exercise"
            ],
            "answer": "aspirin"
          },
          {
            "id": "q3",
            "question": "Who treats your teeth?",
            "options": [
              "doctor",
              "dentist",
              "nurse",
              "patient"
            ],
            "answer": "dentist"
          },
          {
            "id": "q4",
            "question": "What does 'feel ill' mean?",
            "options": [
              "cảm thấy khỏe",
              "cảm thấy không khỏe",
              "cảm thấy vui",
              "cảm thấy đói"
            ],
            "answer": "cảm thấy không khỏe"
          },
          {
            "id": "q5",
            "question": "Which word means 'nghỉ ngơi'?",
            "options": [
              "rest",
              "panic",
              "breathe",
              "sneeze"
            ],
            "answer": "rest"
          },
          {
            "id": "q6",
            "question": "Which serious illness can be connected to smoking?",
            "options": [
              "cold",
              "cancer",
              "headache",
              "hay fever"
            ],
            "answer": "cancer"
          }
        ]
      },
      {
        "id": "u6-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "Aspirin can help a headache.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "A dentist treats broken bones.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "Malaria is spread by mosquitoes.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "Hay fever can be caused by grass and flowers.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Panic\" means to stay calm.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "Asthma makes it difficult to breathe.",
            "answer": true
          }
        ]
      },
      {
        "id": "u6-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "HTLAEH",
            "answer": "HEALTH"
          },
          {
            "id": "q2",
            "scrambled": "COTRDO",
            "answer": "DOCTOR"
          },
          {
            "id": "q3",
            "scrambled": "PSNIRAI",
            "answer": "ASPIRIN"
          },
          {
            "id": "q4",
            "scrambled": "ISTNEDT",
            "answer": "DENTIST"
          },
          {
            "id": "q5",
            "scrambled": "MALARAI",
            "answer": "MALARIA"
          },
          {
            "id": "q6",
            "scrambled": "XALER",
            "answer": "RELAX"
          }
        ]
      }
    ]
  },
  7: {
    "unit": {
      "id": "unit-7-feelings",
      "title": "Unit 7: Feelings",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u7-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "happy",
            "right": "vui, hạnh phúc"
          },
          {
            "left": "sad",
            "right": "buồn"
          },
          {
            "left": "tired",
            "right": "mệt mỏi"
          },
          {
            "left": "angry",
            "right": "tức giận"
          },
          {
            "left": "upset",
            "right": "buồn bực, khó chịu"
          },
          {
            "left": "thirsty",
            "right": "khát nước"
          },
          {
            "left": "hungry",
            "right": "đói"
          },
          {
            "left": "surprised",
            "right": "ngạc nhiên"
          },
          {
            "left": "ill",
            "right": "ốm, không khỏe"
          },
          {
            "left": "hope",
            "right": "hy vọng"
          }
        ]
      },
      {
        "id": "u7-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "love",
          "hate",
          "happy",
          "sad",
          "tired",
          "angry",
          "thirsty",
          "hungry"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I ______ my family.",
            "hint_vi": "yêu",
            "answer": "love"
          },
          {
            "id": "q2",
            "sentence": "I ______ getting up early.",
            "hint_vi": "ghét",
            "answer": "hate"
          },
          {
            "id": "q3",
            "sentence": "She is ______ today.",
            "hint_vi": "vui",
            "answer": "happy"
          },
          {
            "id": "q4",
            "sentence": "He looks ______.",
            "hint_vi": "buồn",
            "answer": "sad"
          },
          {
            "id": "q5",
            "sentence": "I am ______ after work.",
            "hint_vi": "mệt mỏi",
            "answer": "tired"
          },
          {
            "id": "q6",
            "sentence": "My father is ______ with me.",
            "hint_vi": "tức giận",
            "answer": "angry"
          },
          {
            "id": "q7",
            "sentence": "I'm ______. I need some water.",
            "hint_vi": "khát nước",
            "answer": "thirsty"
          },
          {
            "id": "q8",
            "sentence": "I'm ______. Let's have lunch.",
            "hint_vi": "đói",
            "answer": "hungry"
          }
        ]
      },
      {
        "id": "u7-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What is the opposite of 'happy'?",
            "options": [
              "sad",
              "hungry",
              "cold",
              "surprised"
            ],
            "answer": "sad"
          },
          {
            "id": "q2",
            "question": "Which word means 'rất thích'?",
            "options": [
              "hate",
              "like",
              "love",
              "want"
            ],
            "answer": "love"
          },
          {
            "id": "q3",
            "question": "I prefer tea ______ coffee.",
            "options": [
              "to",
              "than",
              "with",
              "for"
            ],
            "answer": "to"
          },
          {
            "id": "q4",
            "question": "What do you feel when you need water?",
            "options": [
              "hungry",
              "thirsty",
              "tired",
              "cold"
            ],
            "answer": "thirsty"
          },
          {
            "id": "q5",
            "question": "What is the opposite of 'hot'?",
            "options": [
              "cold",
              "well",
              "ill",
              "upset"
            ],
            "answer": "cold"
          },
          {
            "id": "q6",
            "question": "\"I'm a bit tired\" — 'a bit' means...",
            "options": [
              "rất nhiều",
              "một chút",
              "không bao giờ",
              "luôn luôn"
            ],
            "answer": "một chút"
          }
        ]
      },
      {
        "id": "u7-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Hate\" means to like something very much.",
            "answer": false
          },
          {
            "id": "q2",
            "statement": "\"Thirsty\" means you need water.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "\"Angry\" means happy.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "\"Surprised\" means ngạc nhiên.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Prefer ... to ...\" is used to compare two things you like.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"A little\" and \"a bit\" have completely different meanings.",
            "answer": false
          }
        ]
      },
      {
        "id": "u7-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "PPYHA",
            "answer": "HAPPY"
          },
          {
            "id": "q2",
            "scrambled": "DSA",
            "answer": "SAD"
          },
          {
            "id": "q3",
            "scrambled": "GNAYR",
            "answer": "ANGRY"
          },
          {
            "id": "q4",
            "scrambled": "RITSYTH",
            "answer": "THIRSTY"
          },
          {
            "id": "q5",
            "scrambled": "RGUNYH",
            "answer": "HUNGRY"
          },
          {
            "id": "q6",
            "scrambled": "PRISUDRES",
            "answer": "SURPRISED"
          }
        ]
      }
    ]
  },
  8: {
    "unit": {
      "id": "unit-8-social-expressions",
      "title": "Unit 8: Social English Expressions",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u8-ex1-matching",
        "type": "matching",
        "title": "Nối cụm từ với nghĩa",
        "instructions_vi": "Nối mỗi cụm từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "good morning",
            "right": "chào buổi sáng"
          },
          {
            "left": "goodbye",
            "right": "tạm biệt"
          },
          {
            "left": "good night",
            "right": "chúc ngủ ngon"
          },
          {
            "left": "please",
            "right": "làm ơn"
          },
          {
            "left": "thank you",
            "right": "cảm ơn"
          },
          {
            "left": "excuse me",
            "right": "xin lỗi; làm ơn cho hỏi"
          },
          {
            "left": "happy birthday",
            "right": "chúc mừng sinh nhật"
          },
          {
            "left": "good luck",
            "right": "chúc may mắn"
          },
          {
            "left": "congratulations",
            "right": "xin chúc mừng"
          },
          {
            "left": "well done",
            "right": "làm tốt lắm"
          }
        ]
      },
      {
        "id": "u8-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Bạn sẽ nói gì trong mỗi tình huống?",
        "instructions_vi": "Dùng các cụm từ trong Word Bank để hoàn thành câu phù hợp với tình huống.",
        "word_bank": [
          "Excuse me",
          "Congratulations",
          "Bless you",
          "Happy birthday",
          "Goodbye",
          "Merry Christmas",
          "Happy New Year",
          "Good luck"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "You want to pass by someone. Say: \"______!\"",
            "answer": "Excuse me"
          },
          {
            "id": "q2",
            "sentence": "Your friend passed an exam. Say: \"______!\"",
            "answer": "Congratulations",
            "accepted_answers": [
              "Congratulations",
              "Well done"
            ]
          },
          {
            "id": "q3",
            "sentence": "Someone sneezes. Say: \"______!\"",
            "answer": "Bless you"
          },
          {
            "id": "q4",
            "sentence": "It's your friend's birthday. Say: \"______!\"",
            "answer": "Happy birthday"
          },
          {
            "id": "q5",
            "sentence": "You leave a party. Say: \"______.\"",
            "answer": "Goodbye"
          },
          {
            "id": "q6",
            "sentence": "It's December 25th. Say: \"______!\"",
            "answer": "Merry Christmas"
          },
          {
            "id": "q7",
            "sentence": "It's January 1st. Say: \"______!\"",
            "answer": "Happy New Year"
          },
          {
            "id": "q8",
            "sentence": "Your friend has an exam tomorrow. Say: \"______!\"",
            "answer": "Good luck"
          }
        ]
      },
      {
        "id": "u8-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What do you say when someone sneezes?",
            "options": [
              "Bless you!",
              "Cheers!",
              "Well done!",
              "Good luck!"
            ],
            "answer": "Bless you!"
          },
          {
            "id": "q2",
            "question": "What do you say at night before sleeping?",
            "options": [
              "Good morning",
              "Good night / Sleep well",
              "Good afternoon",
              "Goodbye"
            ],
            "answer": "Good night / Sleep well"
          },
          {
            "id": "q3",
            "question": "What do you say in the evening when you meet someone?",
            "options": [
              "Good morning",
              "Good afternoon",
              "Good evening",
              "Good night"
            ],
            "answer": "Good evening"
          },
          {
            "id": "q4",
            "question": "\"Cheers\" can be used to mean...",
            "options": [
              "xin lỗi",
              "cảm ơn / chúc mừng",
              "tạm biệt",
              "chúc ngủ ngon"
            ],
            "answer": "cảm ơn / chúc mừng"
          },
          {
            "id": "q5",
            "question": "What do you say when meeting someone at 3 pm?",
            "options": [
              "Good morning",
              "Good afternoon",
              "Good evening",
              "Good night"
            ],
            "answer": "Good afternoon"
          },
          {
            "id": "q6",
            "question": "What do you say to congratulate someone on success?",
            "options": [
              "Bless you",
              "Congratulations / Well done",
              "Excuse me",
              "Good night"
            ],
            "answer": "Congratulations / Well done"
          }
        ]
      },
      {
        "id": "u8-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Good night\" is usually said in the morning.",
            "answer": false
          },
          {
            "id": "q2",
            "statement": "\"Cheers\" can mean 'thank you' or be used as a toast.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "\"Bless you\" is said after someone sneezes.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Excuse me\" is impolite.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "\"Congratulations\" is used to celebrate someone's success.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"Good luck\" is said before something happens.",
            "answer": true
          }
        ]
      },
      {
        "id": "u8-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "EDOOGYB",
            "answer": "GOODBYE"
          },
          {
            "id": "q2",
            "scrambled": "SREEHC",
            "answer": "CHEERS"
          },
          {
            "id": "q3",
            "scrambled": "KCUL",
            "answer": "LUCK"
          },
          {
            "id": "q4",
            "scrambled": "THGIN",
            "answer": "NIGHT"
          },
          {
            "id": "q5",
            "scrambled": "GNINROM",
            "answer": "MORNING"
          },
          {
            "id": "q6",
            "scrambled": "GNINEVE",
            "answer": "EVENING"
          }
        ]
      }
    ]
  },
  9: {
    "unit": {
      "id": "unit-9-discourse-markers",
      "title": "Unit 9: Useful Expressions & Discourse Markers",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u9-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "actually",
            "right": "thực ra"
          },
          {
            "left": "really",
            "right": "thực sự"
          },
          {
            "left": "else",
            "right": "khác, nữa"
          },
          {
            "left": "around",
            "right": "khoảng"
          },
          {
            "left": "anyway",
            "right": "dù sao đi nữa"
          },
          {
            "left": "oh dear",
            "right": "ôi trời"
          },
          {
            "left": "well done",
            "right": "làm tốt lắm"
          },
          {
            "left": "hurry up",
            "right": "nhanh lên"
          },
          {
            "left": "look out",
            "right": "cẩn thận, coi chừng"
          },
          {
            "left": "absolutely",
            "right": "hoàn toàn, chắc chắn rồi"
          }
        ]
      },
      {
        "id": "u9-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "else",
          "around",
          "Anyway",
          "Absolutely",
          "Look out",
          "Hurry up",
          "mind"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "It's boring here. Let's go somewhere ______.",
            "hint_vi": "khác",
            "answer": "else"
          },
          {
            "id": "q2",
            "sentence": "There were ______ 20 people.",
            "hint_vi": "khoảng",
            "answer": "around"
          },
          {
            "id": "q3",
            "sentence": "Have you had enough? Would you like anything ______?",
            "hint_vi": "khác, nữa",
            "answer": "else"
          },
          {
            "id": "q4",
            "sentence": "______, let's go home.",
            "hint_vi": "dù sao đi nữa",
            "answer": "Anyway"
          },
          {
            "id": "q5",
            "sentence": "\"Do you agree?\" — \"______!\"",
            "hint_vi": "chắc chắn rồi",
            "answer": "Absolutely"
          },
          {
            "id": "q6",
            "sentence": "______! There's a car!",
            "hint_vi": "cẩn thận, coi chừng",
            "answer": "Look out"
          },
          {
            "id": "q7",
            "sentence": "______! The bus is coming.",
            "hint_vi": "nhanh lên",
            "answer": "Hurry up"
          },
          {
            "id": "q8",
            "sentence": "I don't ______ waiting.",
            "hint_vi": "không phiền",
            "answer": "mind"
          }
        ]
      },
      {
        "id": "u9-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What does 'it's up to you' mean?",
            "options": [
              "Tùy bạn",
              "Không sao",
              "Cẩn thận",
              "Nhanh lên"
            ],
            "answer": "Tùy bạn"
          },
          {
            "id": "q2",
            "question": "Which phrases mean 'Hay là...?'",
            "options": [
              "How about / What about",
              "Anyway",
              "Absolutely",
              "Else"
            ],
            "answer": "How about / What about"
          },
          {
            "id": "q3",
            "question": "What do you say when you didn't get a job you wanted?",
            "options": [
              "Well done!",
              "What a pity!",
              "Look out!",
              "Hurry up!"
            ],
            "answer": "What a pity!"
          },
          {
            "id": "q4",
            "question": "What do you say to warn someone of danger?",
            "options": [
              "Look out!",
              "It doesn't matter",
              "Absolutely",
              "Oh dear!"
            ],
            "answer": "Look out!"
          },
          {
            "id": "q5",
            "question": "Which word means 'thực ra'?",
            "options": [
              "Really",
              "Actually",
              "Anyway",
              "Around"
            ],
            "answer": "Actually"
          },
          {
            "id": "q6",
            "question": "What is a strong way to say 'Yes, I agree'?",
            "options": [
              "Absolutely!",
              "Anyway",
              "Else",
              "Around"
            ],
            "answer": "Absolutely!"
          }
        ]
      },
      {
        "id": "u9-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Anyway\" is used to change the subject or return to the main point.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"It doesn't matter\" means something is very important.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"Hurry up\" tells someone to be slow.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "\"Be careful\" is a warning.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"I don't mind\" means you refuse to do something.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Well done\" is used to praise someone.",
            "answer": true
          }
        ]
      },
      {
        "id": "u9-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "LYLAUACT",
            "answer": "ACTUALLY"
          },
          {
            "id": "q2",
            "scrambled": "YLLAER",
            "answer": "REALLY"
          },
          {
            "id": "q3",
            "scrambled": "DAORNU",
            "answer": "AROUND"
          },
          {
            "id": "q4",
            "scrambled": "YAWANY",
            "answer": "ANYWAY"
          },
          {
            "id": "q5",
            "scrambled": "EYLETULOSBA",
            "answer": "ABSOLUTELY"
          },
          {
            "id": "q6",
            "scrambled": "EEGAR",
            "answer": "AGREE"
          }
        ]
      }
    ]
  },
  10: {
    "unit": {
      "id": "unit-10-food-drink",
      "title": "Unit 10: Food and Drink",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u10-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "bread",
            "right": "bánh mì"
          },
          {
            "left": "rice",
            "right": "cơm, gạo"
          },
          {
            "left": "meat",
            "right": "thịt"
          },
          {
            "left": "fish",
            "right": "cá"
          },
          {
            "left": "vegetarian",
            "right": "ăn chay; người ăn chay"
          },
          {
            "left": "fruit",
            "right": "trái cây"
          },
          {
            "left": "vegetables",
            "right": "rau củ"
          },
          {
            "left": "milk",
            "right": "sữa"
          },
          {
            "left": "coffee",
            "right": "cà phê"
          },
          {
            "left": "tea",
            "right": "trà"
          }
        ]
      },
      {
        "id": "u10-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "bread",
          "rice",
          "vegetarian",
          "vegetables",
          "fruit",
          "milk",
          "coffee",
          "tea"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I have ______ for breakfast.",
            "hint_vi": "bánh mì",
            "answer": "bread"
          },
          {
            "id": "q2",
            "sentence": "We eat ______ every day.",
            "hint_vi": "cơm",
            "answer": "rice"
          },
          {
            "id": "q3",
            "sentence": "My sister is ______.",
            "hint_vi": "ăn chay",
            "answer": "vegetarian"
          },
          {
            "id": "q4",
            "sentence": "You should eat more ______.",
            "hint_vi": "rau củ",
            "answer": "vegetables"
          },
          {
            "id": "q5",
            "sentence": "I eat ______ every day.",
            "hint_vi": "trái cây",
            "answer": "fruit"
          },
          {
            "id": "q6",
            "sentence": "Children need to drink ______.",
            "hint_vi": "sữa",
            "answer": "milk"
          },
          {
            "id": "q7",
            "sentence": "I drink ______ every morning.",
            "hint_vi": "cà phê",
            "answer": "coffee"
          },
          {
            "id": "q8",
            "sentence": "Would you like some ______?",
            "hint_vi": "trà",
            "answer": "tea"
          }
        ]
      },
      {
        "id": "u10-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which one is a fruit?",
            "options": [
              "carrot",
              "banana",
              "onion",
              "potato"
            ],
            "answer": "banana"
          },
          {
            "id": "q2",
            "question": "Which one is a vegetable?",
            "options": [
              "apple",
              "pear",
              "carrot",
              "grapes"
            ],
            "answer": "carrot"
          },
          {
            "id": "q3",
            "question": "What do vegetarians NOT eat?",
            "options": [
              "vegetables",
              "meat",
              "fruit",
              "rice"
            ],
            "answer": "meat"
          },
          {
            "id": "q4",
            "question": "What do you often put on chips?",
            "options": [
              "milk",
              "salt",
              "tea",
              "wine"
            ],
            "answer": "salt"
          },
          {
            "id": "q5",
            "question": "Which one is a drink?",
            "options": [
              "bread",
              "wine",
              "rice",
              "beans"
            ],
            "answer": "wine"
          },
          {
            "id": "q6",
            "question": "What is a 'hot dog'?",
            "options": [
              "một loại bánh mì kẹp xúc xích",
              "một loại thú cưng",
              "món tráng miệng",
              "một loại rau"
            ],
            "answer": "một loại bánh mì kẹp xúc xích"
          }
        ]
      },
      {
        "id": "u10-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "Vegetarians eat meat.",
            "answer": false
          },
          {
            "id": "q2",
            "statement": "Rice is popular in Japan.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "Garlic is a fruit.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "Milk is a drink.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "Pizza is a kind of fast food.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "Onions and garlic are vegetables.",
            "answer": true
          }
        ]
      },
      {
        "id": "u10-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "EADRB",
            "answer": "BREAD"
          },
          {
            "id": "q2",
            "scrambled": "ECIR",
            "answer": "RICE"
          },
          {
            "id": "q3",
            "scrambled": "TAEM",
            "answer": "MEAT"
          },
          {
            "id": "q4",
            "scrambled": "TIURF",
            "answer": "FRUIT"
          },
          {
            "id": "q5",
            "scrambled": "LMKI",
            "answer": "MILK"
          },
          {
            "id": "q6",
            "scrambled": "EEBR",
            "answer": "BEER"
          }
        ]
      }
    ]
  }
};
