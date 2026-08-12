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
  }
};
