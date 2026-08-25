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
  },
  11: {
    "unit": {
      "id": "unit-11-kitchen",
      "title": "Unit 11: In the Kitchen",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u11-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "fridge",
            "right": "tủ lạnh"
          },
          {
            "left": "freezer",
            "right": "ngăn đá, tủ đông"
          },
          {
            "left": "sink",
            "right": "bồn rửa"
          },
          {
            "left": "tap",
            "right": "vòi nước"
          },
          {
            "left": "microwave",
            "right": "lò vi sóng"
          },
          {
            "left": "cupboard",
            "right": "tủ đựng đồ"
          },
          {
            "left": "cooker",
            "right": "bếp nấu, bếp lò"
          },
          {
            "left": "dishwasher",
            "right": "máy rửa bát"
          },
          {
            "left": "saucepan",
            "right": "nồi nhỏ có cán"
          },
          {
            "left": "frying pan",
            "right": "chảo rán"
          }
        ]
      },
      {
        "id": "u11-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "fridge",
          "freezer",
          "bin",
          "sink",
          "tap",
          "microwave",
          "frying pan",
          "tea towel"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "The milk is in the ______.",
            "hint_vi": "tủ lạnh",
            "answer": "fridge"
          },
          {
            "id": "q2",
            "sentence": "The ice cream is in the ______.",
            "hint_vi": "ngăn đá",
            "answer": "freezer"
          },
          {
            "id": "q3",
            "sentence": "Put the paper in the ______.",
            "hint_vi": "thùng rác",
            "answer": "bin"
          },
          {
            "id": "q4",
            "sentence": "The plates are in the ______.",
            "hint_vi": "bồn rửa",
            "answer": "sink"
          },
          {
            "id": "q5",
            "sentence": "Turn off the ______, please.",
            "hint_vi": "vòi nước",
            "answer": "tap"
          },
          {
            "id": "q6",
            "sentence": "Heat the food in the ______.",
            "hint_vi": "lò vi sóng",
            "answer": "microwave"
          },
          {
            "id": "q7",
            "sentence": "Cook the eggs in the ______.",
            "hint_vi": "chảo rán",
            "answer": "frying pan"
          },
          {
            "id": "q8",
            "sentence": "Use the ______ to dry the cups.",
            "hint_vi": "khăn lau bát",
            "answer": "tea towel"
          }
        ]
      },
      {
        "id": "u11-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which word means 'tủ lạnh'?",
            "options": [
              "fridge",
              "freezer",
              "cupboard",
              "cooker"
            ],
            "answer": "fridge"
          },
          {
            "id": "q2",
            "question": "Where do you wash the dishes?",
            "options": [
              "sink",
              "shelf",
              "worktop",
              "bin"
            ],
            "answer": "sink"
          },
          {
            "id": "q3",
            "question": "What do you use to dry dishes?",
            "options": [
              "tea towel",
              "washing-up liquid",
              "coffee maker",
              "kitchen roll"
            ],
            "answer": "tea towel"
          },
          {
            "id": "q4",
            "question": "Which word means 'chảo rán'?",
            "options": [
              "saucepan",
              "frying pan",
              "teapot",
              "cooker"
            ],
            "answer": "frying pan"
          },
          {
            "id": "q5",
            "question": "Which one is used to eat rice in some Asian countries?",
            "options": [
              "fork",
              "knife",
              "chopsticks",
              "spoon"
            ],
            "answer": "chopsticks"
          },
          {
            "id": "q6",
            "question": "What appliance washes plates automatically?",
            "options": [
              "washing machine",
              "dishwasher",
              "microwave",
              "fridge"
            ],
            "answer": "dishwasher"
          }
        ]
      },
      {
        "id": "u11-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"freezer\" keeps food warm.",
            "answer": false
          },
          {
            "id": "q2",
            "statement": "You use a \"tap\" to get water.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "A \"mug\" is a type of cup with a handle.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Chopsticks\" are used for drinking water.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "A \"cooker\" is used for cooking food.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"Washing-up liquid\" is used to wash clothes.",
            "answer": false
          }
        ]
      },
      {
        "id": "u11-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "RDIFEG",
            "answer": "FRIDGE"
          },
          {
            "id": "q2",
            "scrambled": "NKIS",
            "answer": "SINK"
          },
          {
            "id": "q3",
            "scrambled": "OCEKOR",
            "answer": "COOKER"
          },
          {
            "id": "q4",
            "scrambled": "ECUASNAP",
            "answer": "SAUCEPAN"
          },
          {
            "id": "q5",
            "scrambled": "TAOEPT",
            "answer": "TEAPOT"
          },
          {
            "id": "q6",
            "scrambled": "RADCUOPB",
            "answer": "CUPBOARD"
          }
        ]
      }
    ]
  },
  12: {
    "unit": {
      "id": "unit-12-bedroom-bathroom",
      "title": "Unit 12: In the Bedroom and Bathroom",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u12-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "bedroom",
            "right": "phòng ngủ"
          },
          {
            "left": "bed",
            "right": "giường"
          },
          {
            "left": "wardrobe",
            "right": "tủ quần áo"
          },
          {
            "left": "mirror",
            "right": "gương"
          },
          {
            "left": "alarm clock",
            "right": "đồng hồ báo thức"
          },
          {
            "left": "bathroom",
            "right": "phòng tắm"
          },
          {
            "left": "shower",
            "right": "vòi sen"
          },
          {
            "left": "soap",
            "right": "xà phòng"
          },
          {
            "left": "toothbrush",
            "right": "bàn chải đánh răng"
          },
          {
            "left": "towel",
            "right": "khăn tắm"
          }
        ]
      },
      {
        "id": "u12-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "bedroom",
          "bedside lamp",
          "wardrobe",
          "mirror",
          "shower",
          "toothpaste",
          "basin",
          "towel"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "My ______ is small.",
            "hint_vi": "phòng ngủ",
            "answer": "bedroom"
          },
          {
            "id": "q2",
            "sentence": "I turn on the ______.",
            "hint_vi": "đèn ngủ",
            "answer": "bedside lamp"
          },
          {
            "id": "q3",
            "sentence": "My clothes are in the ______.",
            "hint_vi": "tủ quần áo",
            "answer": "wardrobe"
          },
          {
            "id": "q4",
            "sentence": "Look in the ______.",
            "hint_vi": "gương",
            "answer": "mirror"
          },
          {
            "id": "q5",
            "sentence": "I have a ______ every morning.",
            "hint_vi": "tắm vòi sen",
            "answer": "shower"
          },
          {
            "id": "q6",
            "sentence": "I need some ______.",
            "hint_vi": "kem đánh răng",
            "answer": "toothpaste"
          },
          {
            "id": "q7",
            "sentence": "Wash your hands in the ______.",
            "hint_vi": "bồn rửa mặt",
            "answer": "basin"
          },
          {
            "id": "q8",
            "sentence": "I need a clean ______.",
            "hint_vi": "khăn tắm",
            "answer": "towel"
          }
        ]
      },
      {
        "id": "u12-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which word means 'giường'?",
            "options": [
              "bed",
              "bedroom",
              "bedside table",
              "wardrobe"
            ],
            "answer": "bed"
          },
          {
            "id": "q2",
            "question": "What do you use to brush your teeth?",
            "options": [
              "soap",
              "shampoo",
              "toothbrush",
              "razor"
            ],
            "answer": "toothbrush"
          },
          {
            "id": "q3",
            "question": "What do you use to wash your hair?",
            "options": [
              "shampoo",
              "soap",
              "toothpaste",
              "shower gel"
            ],
            "answer": "shampoo"
          },
          {
            "id": "q4",
            "question": "Where do you keep your clothes?",
            "options": [
              "wardrobe",
              "mirror",
              "dressing table",
              "bedside lamp"
            ],
            "answer": "wardrobe"
          },
          {
            "id": "q5",
            "question": "\"I get up at seven\" means...",
            "options": [
              "tôi thức dậy và rời khỏi giường lúc 7 giờ",
              "tôi đi ngủ lúc 7 giờ",
              "tôi tắm lúc 7 giờ",
              "tôi mặc quần áo lúc 7 giờ"
            ],
            "answer": "tôi thức dậy và rời khỏi giường lúc 7 giờ"
          },
          {
            "id": "q6",
            "question": "Which word means 'dao cạo'?",
            "options": [
              "razor",
              "comb",
              "hairbrush",
              "soap"
            ],
            "answer": "razor"
          }
        ]
      },
      {
        "id": "u12-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Wardrobe\" is where you keep your clothes.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Toothpaste\" is used to wash your hair.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "You use a \"towel\" to dry your body.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Fall asleep\" means to wake up.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "\"Alarm clock\" helps you wake up on time.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"Get dressed\" means to take off your clothes.",
            "answer": false
          }
        ]
      },
      {
        "id": "u12-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "OBEDMOR",
            "answer": "BEDROOM"
          },
          {
            "id": "q2",
            "scrambled": "ROMRIR",
            "answer": "MIRROR"
          },
          {
            "id": "q3",
            "scrambled": "EOWRSH",
            "answer": "SHOWER"
          },
          {
            "id": "q4",
            "scrambled": "OWLET",
            "answer": "TOWEL"
          },
          {
            "id": "q5",
            "scrambled": "EADROBWR",
            "answer": "WARDROBE"
          },
          {
            "id": "q6",
            "scrambled": "OOBRHTAM",
            "answer": "BATHROOM"
          }
        ]
      }
    ]
  },
  13: {
    "unit": {
      "id": "unit-13-living-room",
      "title": "Unit 13: In the Living Room",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u13-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "living room",
            "right": "phòng khách"
          },
          {
            "left": "bookshelf",
            "right": "giá sách"
          },
          {
            "left": "light switch",
            "right": "công tắc đèn"
          },
          {
            "left": "TV",
            "right": "tivi"
          },
          {
            "left": "picture",
            "right": "bức tranh"
          },
          {
            "left": "lamp",
            "right": "đèn"
          },
          {
            "left": "window",
            "right": "cửa sổ"
          },
          {
            "left": "curtain",
            "right": "rèm cửa"
          },
          {
            "left": "sofa",
            "right": "ghế sofa"
          },
          {
            "left": "remote control",
            "right": "điều khiển từ xa"
          }
        ]
      },
      {
        "id": "u13-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "living room",
          "book",
          "bookshelf",
          "window",
          "curtains",
          "sofa",
          "rug",
          "remote control"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "We watch TV in the ______.",
            "hint_vi": "phòng khách",
            "answer": "living room"
          },
          {
            "id": "q2",
            "sentence": "I am reading a ______.",
            "hint_vi": "sách",
            "answer": "book"
          },
          {
            "id": "q3",
            "sentence": "The books are on the ______.",
            "hint_vi": "giá sách",
            "answer": "bookshelf"
          },
          {
            "id": "q4",
            "sentence": "Please open the ______.",
            "hint_vi": "cửa sổ",
            "answer": "window"
          },
          {
            "id": "q5",
            "sentence": "The ______ are closed.",
            "hint_vi": "rèm cửa",
            "answer": "curtains"
          },
          {
            "id": "q6",
            "sentence": "We sit on the ______.",
            "hint_vi": "ghế sofa",
            "answer": "sofa"
          },
          {
            "id": "q7",
            "sentence": "There is a ______ under the table.",
            "hint_vi": "tấm thảm nhỏ",
            "answer": "rug"
          },
          {
            "id": "q8",
            "sentence": "Where is the ______?",
            "hint_vi": "điều khiển từ xa",
            "answer": "remote control"
          }
        ]
      },
      {
        "id": "u13-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which word means 'ghế sofa'?",
            "options": [
              "armchair",
              "sofa",
              "chair",
              "bed"
            ],
            "answer": "sofa"
          },
          {
            "id": "q2",
            "question": "What do you use to change TV channels?",
            "options": [
              "remote control",
              "socket",
              "light switch",
              "phone"
            ],
            "answer": "remote control"
          },
          {
            "id": "q3",
            "question": "Which is usually bigger?",
            "options": [
              "carpet (thảm trải cả sàn)",
              "rug (thảm nhỏ)",
              "chúng bằng nhau",
              "không có gì khác biệt"
            ],
            "answer": "carpet (thảm trải cả sàn)"
          },
          {
            "id": "q4",
            "question": "Where do you put your coffee cup in the living room?",
            "options": [
              "coffee table",
              "bookshelf",
              "sofa",
              "window"
            ],
            "answer": "coffee table"
          },
          {
            "id": "q5",
            "question": "Which word means 'nghe đài'?",
            "options": [
              "listen to the radio",
              "watch television",
              "listen to music",
              "read a book"
            ],
            "answer": "listen to the radio"
          },
          {
            "id": "q6",
            "question": "\"Just relax\" means...",
            "options": [
              "chỉ thư giãn",
              "làm việc chăm chỉ",
              "dọn dẹp nhà cửa",
              "đi ngủ"
            ],
            "answer": "chỉ thư giãn"
          }
        ]
      },
      {
        "id": "u13-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"sofa\" is something you sit on.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Curtains\" are used to cover windows.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "A \"hi-fi\" is used to cook food.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "An \"armchair\" is a comfortable chair, often for one person.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "A \"socket\" is where you plug in electrical devices.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "A \"bookshelf\" is used to watch television.",
            "answer": false
          }
        ]
      },
      {
        "id": "u13-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "AFOS",
            "answer": "SOFA"
          },
          {
            "id": "q2",
            "scrambled": "NIATRUC",
            "answer": "CURTAIN"
          },
          {
            "id": "q3",
            "scrambled": "DOWNIW",
            "answer": "WINDOW"
          },
          {
            "id": "q4",
            "scrambled": "PLMA",
            "answer": "LAMP"
          },
          {
            "id": "q5",
            "scrambled": "TEPRAC",
            "answer": "CARPET"
          },
          {
            "id": "q6",
            "scrambled": "NOISIVELET",
            "answer": "TELEVISION"
          }
        ]
      }
    ]
  },
  14: {
    "unit": {
      "id": "unit-14-jobs",
      "title": "Unit 14: Jobs",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u14-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "doctor",
            "right": "bác sĩ"
          },
          {
            "left": "teacher",
            "right": "giáo viên"
          },
          {
            "left": "nurse",
            "right": "y tá, điều dưỡng"
          },
          {
            "left": "mechanic",
            "right": "thợ máy"
          },
          {
            "left": "secretary",
            "right": "thư ký"
          },
          {
            "left": "engineer",
            "right": "kỹ sư"
          },
          {
            "left": "farmer",
            "right": "nông dân"
          },
          {
            "left": "waiter",
            "right": "bồi bàn"
          },
          {
            "left": "librarian",
            "right": "thủ thư"
          },
          {
            "left": "taxi driver",
            "right": "tài xế taxi"
          }
        ]
      },
      {
        "id": "u14-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "job",
          "doctor",
          "teacher",
          "nurse",
          "mechanic",
          "engineer",
          "farmer",
          "waiter"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I have a new ______.",
            "hint_vi": "công việc",
            "answer": "job"
          },
          {
            "id": "q2",
            "sentence": "My mother is a ______.",
            "hint_vi": "bác sĩ",
            "answer": "doctor"
          },
          {
            "id": "q3",
            "sentence": "She is a ______.",
            "hint_vi": "giáo viên",
            "answer": "teacher"
          },
          {
            "id": "q4",
            "sentence": "The ______ helps the doctor.",
            "hint_vi": "y tá",
            "answer": "nurse"
          },
          {
            "id": "q5",
            "sentence": "My brother is a ______.",
            "hint_vi": "thợ máy",
            "answer": "mechanic"
          },
          {
            "id": "q6",
            "sentence": "My father is an ______.",
            "hint_vi": "kỹ sư",
            "answer": "engineer"
          },
          {
            "id": "q7",
            "sentence": "The ______ works on a farm.",
            "hint_vi": "nông dân",
            "answer": "farmer"
          },
          {
            "id": "q8",
            "sentence": "The ______ brings our food.",
            "hint_vi": "bồi bàn",
            "answer": "waiter"
          }
        ]
      },
      {
        "id": "u14-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Who works in a hospital and helps the doctor?",
            "options": [
              "nurse",
              "secretary",
              "waiter",
              "farmer"
            ],
            "answer": "nurse"
          },
          {
            "id": "q2",
            "question": "Who fixes cars?",
            "options": [
              "mechanic",
              "engineer",
              "librarian",
              "bank clerk"
            ],
            "answer": "mechanic"
          },
          {
            "id": "q3",
            "question": "Who works in a library?",
            "options": [
              "librarian",
              "secretary",
              "teacher",
              "waiter"
            ],
            "answer": "librarian"
          },
          {
            "id": "q4",
            "question": "Which word means 'cảnh sát'?",
            "options": [
              "police officer",
              "traffic warden",
              "bank clerk",
              "shop assistant"
            ],
            "answer": "police officer"
          },
          {
            "id": "q5",
            "question": "Where does a 'hairdresser' work?",
            "options": [
              "beauty salon",
              "hospital",
              "factory",
              "office"
            ],
            "answer": "beauty salon"
          },
          {
            "id": "q6",
            "question": "Who checks parked cars?",
            "options": [
              "traffic warden",
              "police officer",
              "taxi driver",
              "farmer"
            ],
            "answer": "traffic warden"
          }
        ]
      },
      {
        "id": "u14-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"teacher\" works in a school.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "An \"engineer\" can build roads and bridges.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "A \"waiter\" works in a hospital.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "A \"farmer\" works on a farm.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "A \"librarian\" works in a restaurant.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "A \"taxi driver\" drives people to places.",
            "answer": true
          }
        ]
      },
      {
        "id": "u14-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "RCOTDO",
            "answer": "DOCTOR"
          },
          {
            "id": "q2",
            "scrambled": "EHCAETR",
            "answer": "TEACHER"
          },
          {
            "id": "q3",
            "scrambled": "SERNU",
            "answer": "NURSE"
          },
          {
            "id": "q4",
            "scrambled": "RMERAF",
            "answer": "FARMER"
          },
          {
            "id": "q5",
            "scrambled": "REENIGNE",
            "answer": "ENGINEER"
          },
          {
            "id": "q6",
            "scrambled": "TIERAW",
            "answer": "WAITER"
          }
        ]
      }
    ]
  },
  15: {
    "unit": {
      "id": "unit-15-school-university",
      "title": "Unit 15: At School and University",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u15-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "subject",
            "right": "môn học"
          },
          {
            "left": "maths",
            "right": "môn Toán"
          },
          {
            "left": "history",
            "right": "môn Lịch sử"
          },
          {
            "left": "geography",
            "right": "môn Địa lý"
          },
          {
            "left": "biology",
            "right": "môn Sinh học"
          },
          {
            "left": "chemistry",
            "right": "môn Hóa học"
          },
          {
            "left": "physics",
            "right": "môn Vật lý"
          },
          {
            "left": "music",
            "right": "môn Âm nhạc"
          },
          {
            "left": "pencil",
            "right": "bút chì"
          },
          {
            "left": "notebook",
            "right": "vở, sổ ghi chép"
          }
        ]
      },
      {
        "id": "u15-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "subject",
          "maths",
          "art",
          "geography",
          "rubber",
          "board",
          "pencil",
          "notebook"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "English is my favorite ______.",
            "hint_vi": "môn học",
            "answer": "subject"
          },
          {
            "id": "q2",
            "sentence": "I like ______.",
            "hint_vi": "môn Toán",
            "answer": "maths"
          },
          {
            "id": "q3",
            "sentence": "We have ______ on Monday.",
            "hint_vi": "môn Mỹ thuật",
            "answer": "art"
          },
          {
            "id": "q4",
            "sentence": "I study ______ at school.",
            "hint_vi": "môn Địa lý",
            "answer": "geography"
          },
          {
            "id": "q5",
            "sentence": "I need a ______.",
            "hint_vi": "cục tẩy",
            "answer": "rubber"
          },
          {
            "id": "q6",
            "sentence": "The teacher writes on the ______.",
            "hint_vi": "bảng",
            "answer": "board"
          },
          {
            "id": "q7",
            "sentence": "I write with a ______.",
            "hint_vi": "bút chì",
            "answer": "pencil"
          },
          {
            "id": "q8",
            "sentence": "Write it in your ______.",
            "hint_vi": "vở",
            "answer": "notebook"
          }
        ]
      },
      {
        "id": "u15-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which subject studies plants and animals?",
            "options": [
              "biology",
              "chemistry",
              "physics",
              "geography"
            ],
            "answer": "biology"
          },
          {
            "id": "q2",
            "question": "Which subject studies numbers and equations?",
            "options": [
              "maths",
              "history",
              "art",
              "music"
            ],
            "answer": "maths"
          },
          {
            "id": "q3",
            "question": "What do you use to erase pencil marks?",
            "options": [
              "rubber",
              "ruler",
              "pen",
              "drawing pin"
            ],
            "answer": "rubber"
          },
          {
            "id": "q4",
            "question": "Which word means 'thi đỗ'?",
            "options": [
              "pass your exams",
              "fail your exams",
              "take an exam",
              "do homework"
            ],
            "answer": "pass your exams"
          },
          {
            "id": "q5",
            "question": "What do you use to draw a straight line?",
            "options": [
              "ruler",
              "pencil sharpener",
              "drawing pin",
              "board pen"
            ],
            "answer": "ruler"
          },
          {
            "id": "q6",
            "question": "\"Get a degree\" means...",
            "options": [
              "lấy bằng đại học",
              "làm bài tập về nhà",
              "đi học",
              "thi trượt"
            ],
            "answer": "lấy bằng đại học"
          }
        ]
      },
      {
        "id": "u15-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"textbook\" is a book used for studying a subject.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Fail your exams\" means you passed successfully.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"ICT\" studies computers and technology.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "A \"ruler\" is used to draw straight lines.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"PE\" means Physical Education, a subject about sports.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "A \"notebook\" is a place where teachers write on the wall.",
            "answer": false
          }
        ]
      },
      {
        "id": "u15-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "LICNEP",
            "answer": "PENCIL"
          },
          {
            "id": "q2",
            "scrambled": "RELUR",
            "answer": "RULER"
          },
          {
            "id": "q3",
            "scrambled": "BBRUER",
            "answer": "RUBBER"
          },
          {
            "id": "q4",
            "scrambled": "TCEJBUS",
            "answer": "SUBJECT"
          },
          {
            "id": "q5",
            "scrambled": "YROTSIH",
            "answer": "HISTORY"
          },
          {
            "id": "q6",
            "scrambled": "TSIMHERYC",
            "answer": "CHEMISTRY"
          }
        ]
      }
    ]
  },
  16: {
    "unit": {
      "id": "unit-16-communications",
      "title": "Unit 16: Communications",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u16-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "letter",
            "right": "thư"
          },
          {
            "left": "envelope",
            "right": "phong bì"
          },
          {
            "left": "stamp",
            "right": "tem thư"
          },
          {
            "left": "letter box",
            "right": "hòm thư"
          },
          {
            "left": "email",
            "right": "email, thư điện tử"
          },
          {
            "left": "keyboard",
            "right": "bàn phím"
          },
          {
            "left": "mouse",
            "right": "chuột máy tính"
          },
          {
            "left": "laptop",
            "right": "máy tính xách tay"
          },
          {
            "left": "phone number",
            "right": "số điện thoại"
          },
          {
            "left": "voicemail",
            "right": "thư thoại"
          }
        ]
      },
      {
        "id": "u16-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "letter",
          "envelope",
          "stamp",
          "email",
          "keyboard",
          "mouse",
          "laptop",
          "voicemail"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I got a ______ from my friend.",
            "hint_vi": "thư",
            "answer": "letter"
          },
          {
            "id": "q2",
            "sentence": "Put the letter in an ______.",
            "hint_vi": "phong bì",
            "answer": "envelope"
          },
          {
            "id": "q3",
            "sentence": "Put a ______ on the envelope.",
            "hint_vi": "tem thư",
            "answer": "stamp"
          },
          {
            "id": "q4",
            "sentence": "I sent you an ______.",
            "hint_vi": "email",
            "answer": "email"
          },
          {
            "id": "q5",
            "sentence": "The ______ is black.",
            "hint_vi": "bàn phím",
            "answer": "keyboard"
          },
          {
            "id": "q6",
            "sentence": "Move the ______ slowly.",
            "hint_vi": "chuột máy tính",
            "answer": "mouse"
          },
          {
            "id": "q7",
            "sentence": "I have a new ______.",
            "hint_vi": "máy tính xách tay",
            "answer": "laptop"
          },
          {
            "id": "q8",
            "sentence": "She left me a ______.",
            "hint_vi": "thư thoại",
            "answer": "voicemail"
          }
        ]
      },
      {
        "id": "u16-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which word means 'địa chỉ'?",
            "options": [
              "address",
              "date",
              "stamp",
              "envelope"
            ],
            "answer": "address"
          },
          {
            "id": "q2",
            "question": "Where do you post a letter?",
            "options": [
              "letter box",
              "screen",
              "keyboard",
              "memory stick"
            ],
            "answer": "letter box"
          },
          {
            "id": "q3",
            "question": "What do you save files on?",
            "options": [
              "memory stick",
              "stamp",
              "envelope",
              "letter"
            ],
            "answer": "memory stick"
          },
          {
            "id": "q4",
            "question": "\"Can I speak to Tom?\" is used when...",
            "options": [
              "gọi điện thoại và muốn nói chuyện với ai đó",
              "viết một lá thư",
              "gửi email",
              "mua tem"
            ],
            "answer": "gọi điện thoại và muốn nói chuyện với ai đó"
          },
          {
            "id": "q5",
            "question": "Which word means 'gọi lại'?",
            "options": [
              "call back",
              "take a message",
              "speak to",
              "send a text"
            ],
            "answer": "call back"
          },
          {
            "id": "q6",
            "question": "What do you call a small public place to make a phone call?",
            "options": [
              "phone box",
              "letter box",
              "mailbox",
              "keyboard"
            ],
            "answer": "phone box"
          }
        ]
      },
      {
        "id": "u16-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"stamp\" goes on an envelope before you post it.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "A \"mouse\" is an animal, never used with computers.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"Take a message\" means to write down information for someone else.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "A \"memory stick\" is used to make phone calls.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "\"Call back\" means to phone someone again later.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "A \"laptop\" is a type of envelope.",
            "answer": false
          }
        ]
      },
      {
        "id": "u16-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "TETRLE",
            "answer": "LETTER"
          },
          {
            "id": "q2",
            "scrambled": "PMSAT",
            "answer": "STAMP"
          },
          {
            "id": "q3",
            "scrambled": "EOPEELVN",
            "answer": "ENVELOPE"
          },
          {
            "id": "q4",
            "scrambled": "OTLPPA",
            "answer": "LAPTOP"
          },
          {
            "id": "q5",
            "scrambled": "SUOME",
            "answer": "MOUSE"
          },
          {
            "id": "q6",
            "scrambled": "ONPEH",
            "answer": "PHONE"
          }
        ]
      }
    ]
  },
  17: {
    "unit": {
      "id": "unit-17-your-phone",
      "title": "Unit 17: Your Phone",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u17-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "camera",
            "right": "máy ảnh, camera"
          },
          {
            "left": "screen",
            "right": "màn hình"
          },
          {
            "left": "app",
            "right": "ứng dụng"
          },
          {
            "left": "battery",
            "right": "pin"
          },
          {
            "left": "charger",
            "right": "bộ sạc"
          },
          {
            "left": "SIM card",
            "right": "thẻ SIM"
          },
          {
            "left": "message",
            "right": "tin nhắn"
          },
          {
            "left": "PIN",
            "right": "mã PIN"
          },
          {
            "left": "swipe",
            "right": "vuốt màn hình"
          },
          {
            "left": "delete",
            "right": "xóa"
          }
        ]
      },
      {
        "id": "u17-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "camera",
          "app",
          "battery",
          "charger",
          "message",
          "locked",
          "unlock",
          "save"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "My phone has a good ______.",
            "hint_vi": "máy ảnh",
            "answer": "camera"
          },
          {
            "id": "q2",
            "sentence": "I use a music ______.",
            "hint_vi": "ứng dụng",
            "answer": "app"
          },
          {
            "id": "q3",
            "sentence": "My phone ______ is low.",
            "hint_vi": "pin",
            "answer": "battery"
          },
          {
            "id": "q4",
            "sentence": "Where is my ______?",
            "hint_vi": "bộ sạc",
            "answer": "charger"
          },
          {
            "id": "q5",
            "sentence": "I got your ______.",
            "hint_vi": "tin nhắn",
            "answer": "message"
          },
          {
            "id": "q6",
            "sentence": "My phone is ______.",
            "hint_vi": "bị khóa",
            "answer": "locked"
          },
          {
            "id": "q7",
            "sentence": "I use my PIN to ______ my phone.",
            "hint_vi": "mở khóa",
            "answer": "unlock"
          },
          {
            "id": "q8",
            "sentence": "Please ______ this photo.",
            "hint_vi": "lưu",
            "answer": "save"
          }
        ]
      },
      {
        "id": "u17-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which part of the phone takes photos?",
            "options": [
              "camera",
              "screen",
              "battery",
              "SIM card"
            ],
            "answer": "camera"
          },
          {
            "id": "q2",
            "question": "What do you use to charge your phone?",
            "options": [
              "charger",
              "phone case",
              "app",
              "memory"
            ],
            "answer": "charger"
          },
          {
            "id": "q3",
            "question": "Which word means 'vuốt màn hình'?",
            "options": [
              "swipe",
              "unlock",
              "delete",
              "download"
            ],
            "answer": "swipe"
          },
          {
            "id": "q4",
            "question": "What stores the information you need to use your phone?",
            "options": [
              "SIM card",
              "phone case",
              "battery",
              "screen"
            ],
            "answer": "SIM card"
          },
          {
            "id": "q5",
            "question": "Which word means 'xóa'?",
            "options": [
              "delete",
              "save",
              "swipe",
              "lock"
            ],
            "answer": "delete"
          },
          {
            "id": "q6",
            "question": "\"I left a voicemail for him\" means...",
            "options": [
              "tôi để lại tin nhắn thoại cho anh ấy",
              "tôi gọi điện cho anh ấy",
              "tôi nhắn tin cho anh ấy",
              "tôi chụp ảnh anh ấy"
            ],
            "answer": "tôi để lại tin nhắn thoại cho anh ấy"
          }
        ]
      },
      {
        "id": "u17-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"charger\" is used to charge your phone's battery.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Delete\" means to save a photo forever.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "A \"PIN\" is used to unlock your phone.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Swipe\" means to press the power button.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "An \"app\" is a program you use on your phone.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"Download an app\" means to remove an app from your phone.",
            "answer": false
          }
        ]
      },
      {
        "id": "u17-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "AACERM",
            "answer": "CAMERA"
          },
          {
            "id": "q2",
            "scrambled": "TATBYRE",
            "answer": "BATTERY"
          },
          {
            "id": "q3",
            "scrambled": "RRACGHE",
            "answer": "CHARGER"
          },
          {
            "id": "q4",
            "scrambled": "EDTELE",
            "answer": "DELETE"
          },
          {
            "id": "q5",
            "scrambled": "EPIWS",
            "answer": "SWIPE"
          },
          {
            "id": "q6",
            "scrambled": "VSEA",
            "answer": "SAVE"
          }
        ]
      }
    ]
  },
  18: {
    "unit": {
      "id": "unit-18-holidays",
      "title": "Unit 18: Holidays",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u18-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "holiday",
            "right": "kỳ nghỉ"
          },
          {
            "left": "camping",
            "right": "hoạt động cắm trại"
          },
          {
            "left": "passport",
            "right": "hộ chiếu"
          },
          {
            "left": "visa",
            "right": "thị thực, visa"
          },
          {
            "left": "ticket",
            "right": "vé"
          },
          {
            "left": "currency",
            "right": "tiền tệ"
          },
          {
            "left": "luggage",
            "right": "hành lý"
          },
          {
            "left": "suitcase",
            "right": "va-li"
          },
          {
            "left": "rucksack",
            "right": "ba lô"
          },
          {
            "left": "flights",
            "right": "các chuyến bay"
          }
        ]
      },
      {
        "id": "u18-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "holiday",
          "camping",
          "passport",
          "visa",
          "currency",
          "luggage",
          "suitcase",
          "rucksack"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "We are going on ______ next week.",
            "hint_vi": "kỳ nghỉ",
            "answer": "holiday"
          },
          {
            "id": "q2",
            "sentence": "We go ______ every summer.",
            "hint_vi": "cắm trại",
            "answer": "camping"
          },
          {
            "id": "q3",
            "sentence": "I need my ______.",
            "hint_vi": "hộ chiếu",
            "answer": "passport"
          },
          {
            "id": "q4",
            "sentence": "Do I need a ______?",
            "hint_vi": "thị thực",
            "answer": "visa"
          },
          {
            "id": "q5",
            "sentence": "What is the local ______?",
            "hint_vi": "tiền tệ",
            "answer": "currency"
          },
          {
            "id": "q6",
            "sentence": "My ______ is very heavy.",
            "hint_vi": "hành lý",
            "answer": "luggage"
          },
          {
            "id": "q7",
            "sentence": "My clothes are in my ______.",
            "hint_vi": "va-li",
            "answer": "suitcase"
          },
          {
            "id": "q8",
            "sentence": "I put my water in my ______.",
            "hint_vi": "ba lô",
            "answer": "rucksack"
          }
        ]
      },
      {
        "id": "u18-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which word means 'kỳ nghỉ trọn gói'?",
            "options": [
              "a package holiday",
              "a walking holiday",
              "a coach tour",
              "camping"
            ],
            "answer": "a package holiday"
          },
          {
            "id": "q2",
            "question": "What do you need to show at the airport before flying abroad?",
            "options": [
              "passport",
              "ticket",
              "currency",
              "rucksack"
            ],
            "answer": "passport"
          },
          {
            "id": "q3",
            "question": "Which one means 'bằng tàu hỏa'?",
            "options": [
              "by train",
              "by plane",
              "by car",
              "by ferry"
            ],
            "answer": "by train"
          },
          {
            "id": "q4",
            "question": "\"Try the local food\" means...",
            "options": [
              "thử món ăn địa phương",
              "gửi bưu thiếp",
              "mang theo hộ chiếu",
              "đóng gói hành lý"
            ],
            "answer": "thử món ăn địa phương"
          },
          {
            "id": "q5",
            "question": "What do people usually put clothes in for a trip?",
            "options": [
              "a suitcase",
              "a passport",
              "a ticket",
              "a visa"
            ],
            "answer": "a suitcase"
          },
          {
            "id": "q6",
            "question": "Which word means 'gửi cho tôi một tấm bưu thiếp'?",
            "options": [
              "send me a postcard",
              "have a great time",
              "enjoy the nightlife",
              "try the local food"
            ],
            "answer": "send me a postcard"
          }
        ]
      },
      {
        "id": "u18-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Camping\" means sleeping in a tent outdoors.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "A \"visa\" is a type of suitcase.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"Currency\" means the money used in a country.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "A \"rucksack\" is a bag you carry on your back.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"By ferry\" means travelling by plane.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Have a great time\" means to enjoy yourself.",
            "answer": true
          }
        ]
      },
      {
        "id": "u18-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "SSAPPTOR",
            "answer": "PASSPORT"
          },
          {
            "id": "q2",
            "scrambled": "SIAV",
            "answer": "VISA"
          },
          {
            "id": "q3",
            "scrambled": "EGGUALG",
            "answer": "LUGGAGE"
          },
          {
            "id": "q4",
            "scrambled": "CASUTIES",
            "answer": "SUITCASE"
          },
          {
            "id": "q5",
            "scrambled": "KCSCUAKR",
            "answer": "RUCKSACK"
          },
          {
            "id": "q6",
            "scrambled": "PACMGIN",
            "answer": "CAMPING"
          }
        ]
      }
    ]
  },
  19: {
    "unit": {
      "id": "unit-19-shops-shopping",
      "title": "Unit 19: Shops and Shopping",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u19-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "butcher",
            "right": "cửa hàng bán thịt"
          },
          {
            "left": "post office",
            "right": "bưu điện"
          },
          {
            "left": "supermarket",
            "right": "siêu thị"
          },
          {
            "left": "bookshop",
            "right": "hiệu sách"
          },
          {
            "left": "baker",
            "right": "thợ làm bánh, cửa hàng bánh"
          },
          {
            "left": "chemist",
            "right": "hiệu thuốc"
          },
          {
            "left": "newsagent",
            "right": "cửa hàng bán báo"
          },
          {
            "left": "gift shop",
            "right": "cửa hàng quà tặng"
          },
          {
            "left": "cash desk",
            "right": "quầy thu ngân"
          },
          {
            "left": "receipt",
            "right": "hóa đơn"
          }
        ]
      },
      {
        "id": "u19-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "shop",
          "supermarket",
          "bookshop",
          "chemist",
          "cash desk",
          "push",
          "pull",
          "receipt"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I go to the ______ every day.",
            "hint_vi": "cửa hàng",
            "answer": "shop"
          },
          {
            "id": "q2",
            "sentence": "I buy food at the ______.",
            "hint_vi": "siêu thị",
            "answer": "supermarket"
          },
          {
            "id": "q3",
            "sentence": "There is a ______ near my school.",
            "hint_vi": "hiệu sách",
            "answer": "bookshop"
          },
          {
            "id": "q4",
            "sentence": "I bought some medicine at the ______'s.",
            "hint_vi": "hiệu thuốc",
            "answer": "chemist"
          },
          {
            "id": "q5",
            "sentence": "Please pay at the ______.",
            "hint_vi": "quầy thu ngân",
            "answer": "cash desk"
          },
          {
            "id": "q6",
            "sentence": "______ the door.",
            "hint_vi": "đẩy",
            "answer": "push"
          },
          {
            "id": "q7",
            "sentence": "______ the door.",
            "hint_vi": "kéo",
            "answer": "pull"
          },
          {
            "id": "q8",
            "sentence": "Can I have a ______, please?",
            "hint_vi": "hóa đơn",
            "answer": "receipt"
          }
        ]
      },
      {
        "id": "u19-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Where do you buy meat?",
            "options": [
              "butcher",
              "baker",
              "chemist",
              "bookshop"
            ],
            "answer": "butcher"
          },
          {
            "id": "q2",
            "question": "Where do you buy medicine?",
            "options": [
              "chemist",
              "butcher",
              "newsagent",
              "gift shop"
            ],
            "answer": "chemist"
          },
          {
            "id": "q3",
            "question": "Which word means 'trả tiền'?",
            "options": [
              "pay",
              "cost",
              "change",
              "receipt"
            ],
            "answer": "pay"
          },
          {
            "id": "q4",
            "question": "What do you get back if you pay too much?",
            "options": [
              "change",
              "receipt",
              "cash",
              "cheque"
            ],
            "answer": "change"
          },
          {
            "id": "q5",
            "question": "Which floor is usually above the ground floor in the UK?",
            "options": [
              "first floor",
              "basement",
              "ground floor",
              "second floor"
            ],
            "answer": "first floor"
          },
          {
            "id": "q6",
            "question": "Which word means 'túi đựng hàng'?",
            "options": [
              "a carrier bag",
              "a receipt",
              "a note",
              "a cheque"
            ],
            "answer": "a carrier bag"
          }
        ]
      },
      {
        "id": "u19-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"baker\" sells bread and cakes.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Cash\" means paying by credit card.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "A \"receipt\" is proof that you paid for something.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Push\" and \"pull\" are signs on doors.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "A \"newsagent\" sells furniture.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Try this shirt on\" means to see if clothes fit before buying.",
            "answer": true
          }
        ]
      },
      {
        "id": "u19-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "HERTCUB",
            "answer": "BUTCHER"
          },
          {
            "id": "q2",
            "scrambled": "REKAB",
            "answer": "BAKER"
          },
          {
            "id": "q3",
            "scrambled": "TIMHCES",
            "answer": "CHEMIST"
          },
          {
            "id": "q4",
            "scrambled": "PRAKMEUSTER",
            "answer": "SUPERMARKET"
          },
          {
            "id": "q5",
            "scrambled": "EICPRTE",
            "answer": "RECEIPT"
          },
          {
            "id": "q6",
            "scrambled": "HACS",
            "answer": "CASH"
          }
        ]
      }
    ]
  },
  20: {
    "unit": {
      "id": "unit-20-online-shopping",
      "title": "Unit 20: Online Shopping",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u20-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "size",
            "right": "kích cỡ"
          },
          {
            "left": "price",
            "right": "giá cả"
          },
          {
            "left": "delivery address",
            "right": "địa chỉ giao hàng"
          },
          {
            "left": "postcode",
            "right": "mã bưu chính"
          },
          {
            "left": "credit card",
            "right": "thẻ tín dụng"
          },
          {
            "left": "order number",
            "right": "mã số đơn hàng"
          },
          {
            "left": "review",
            "right": "đánh giá"
          },
          {
            "left": "delivery",
            "right": "việc giao hàng"
          },
          {
            "left": "delete",
            "right": "xóa"
          },
          {
            "left": "collect",
            "right": "nhận, lấy hàng"
          }
        ]
      },
      {
        "id": "u20-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "size",
          "price",
          "review",
          "add",
          "delete",
          "order",
          "delivery",
          "postcode"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "What ______ do you need?",
            "hint_vi": "kích cỡ",
            "answer": "size"
          },
          {
            "id": "q2",
            "sentence": "The ______ is very good.",
            "hint_vi": "giá cả",
            "answer": "price"
          },
          {
            "id": "q3",
            "sentence": "I read the ______ before I buy.",
            "hint_vi": "đánh giá",
            "answer": "review"
          },
          {
            "id": "q4",
            "sentence": "______ the shoes to your basket.",
            "hint_vi": "thêm",
            "answer": "add"
          },
          {
            "id": "q5",
            "sentence": "I want to ______ this item.",
            "hint_vi": "xóa",
            "answer": "delete"
          },
          {
            "id": "q6",
            "sentence": "I ______ed a new shirt online.",
            "hint_vi": "đặt hàng",
            "answer": "order"
          },
          {
            "id": "q7",
            "sentence": "The ______ is free.",
            "hint_vi": "việc giao hàng",
            "answer": "delivery"
          },
          {
            "id": "q8",
            "sentence": "What is your ______?",
            "hint_vi": "mã bưu chính",
            "answer": "postcode"
          }
        ]
      },
      {
        "id": "u20-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What do you check before buying to see if others liked the product?",
            "options": [
              "reviews",
              "order number",
              "postcode",
              "size"
            ],
            "answer": "reviews"
          },
          {
            "id": "q2",
            "question": "Which word means 'nhận, lấy hàng'?",
            "options": [
              "collect",
              "deliver",
              "delete",
              "add"
            ],
            "answer": "collect"
          },
          {
            "id": "q3",
            "question": "What do you use to pay online?",
            "options": [
              "a credit card",
              "a review",
              "a postcode",
              "a size"
            ],
            "answer": "a credit card"
          },
          {
            "id": "q4",
            "question": "Which word means 'mã số đơn hàng'?",
            "options": [
              "order number",
              "postcode",
              "delivery address",
              "price"
            ],
            "answer": "order number"
          },
          {
            "id": "q5",
            "question": "\"Shop online\" means...",
            "options": [
              "mua sắm trực tuyến",
              "mua sắm tại cửa hàng",
              "trả hàng",
              "gọi điện đặt hàng"
            ],
            "answer": "mua sắm trực tuyến"
          },
          {
            "id": "q6",
            "question": "What does \"next day\" delivery mean?",
            "options": [
              "giao hàng vào ngày hôm sau",
              "giao hàng miễn phí",
              "giao hàng chậm",
              "giao hàng quốc tế"
            ],
            "answer": "giao hàng vào ngày hôm sau"
          }
        ]
      },
      {
        "id": "u20-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Delivery address\" is where your order will be sent.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Delete\" means to add more items to your basket.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "A \"review\" can help you decide whether to buy a product.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Search for\" means to look for something online.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "A \"postcode\" is a type of credit card.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Collect\" can mean picking up your order yourself.",
            "answer": true
          }
        ]
      },
      {
        "id": "u20-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "EDROR",
            "answer": "ORDER"
          },
          {
            "id": "q2",
            "scrambled": "EIRVEW",
            "answer": "REVIEW"
          },
          {
            "id": "q3",
            "scrambled": "YLEDVIER",
            "answer": "DELIVERY"
          },
          {
            "id": "q4",
            "scrambled": "EZIS",
            "answer": "SIZE"
          },
          {
            "id": "q5",
            "scrambled": "EIRPC",
            "answer": "PRICE"
          },
          {
            "id": "q6",
            "scrambled": "DDA",
            "answer": "ADD"
          }
        ]
      }
    ]
  },
  21: {
    "unit": {
      "id": "unit-21-hotel",
      "title": "Unit 21: In a Hotel",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u21-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "key",
            "right": "chìa khóa"
          },
          {
            "left": "reception",
            "right": "quầy lễ tân"
          },
          {
            "left": "lift",
            "right": "thang máy"
          },
          {
            "left": "bill",
            "right": "hóa đơn"
          },
          {
            "left": "luggage",
            "right": "hành lý"
          },
          {
            "left": "shower",
            "right": "vòi sen"
          },
          {
            "left": "mini-bar",
            "right": "tủ đồ uống nhỏ trong phòng"
          },
          {
            "left": "hairdryer",
            "right": "máy sấy tóc"
          },
          {
            "left": "single room",
            "right": "phòng đơn"
          },
          {
            "left": "double room",
            "right": "phòng đôi"
          }
        ]
      },
      {
        "id": "u21-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "key",
          "reception",
          "lift",
          "bill",
          "luggage",
          "form",
          "reservation",
          "hairdryer"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "Here is your ______.",
            "hint_vi": "chìa khóa",
            "answer": "key"
          },
          {
            "id": "q2",
            "sentence": "The ______ is downstairs.",
            "hint_vi": "quầy lễ tân",
            "answer": "reception"
          },
          {
            "id": "q3",
            "sentence": "Take the ______ to the second floor.",
            "hint_vi": "thang máy",
            "answer": "lift"
          },
          {
            "id": "q4",
            "sentence": "Can I have the ______, please?",
            "hint_vi": "hóa đơn",
            "answer": "bill"
          },
          {
            "id": "q5",
            "sentence": "Your ______ is here.",
            "hint_vi": "hành lý",
            "answer": "luggage"
          },
          {
            "id": "q6",
            "sentence": "Please fill in this ______.",
            "hint_vi": "biểu mẫu",
            "answer": "form"
          },
          {
            "id": "q7",
            "sentence": "I have a ______.",
            "hint_vi": "đặt phòng trước",
            "answer": "reservation"
          },
          {
            "id": "q8",
            "sentence": "There is a ______ in the bathroom.",
            "hint_vi": "máy sấy tóc",
            "answer": "hairdryer"
          }
        ]
      },
      {
        "id": "u21-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which word means 'trả phòng'?",
            "options": [
              "check out",
              "check in",
              "reservation",
              "reception"
            ],
            "answer": "check out"
          },
          {
            "id": "q2",
            "question": "What do you take to go to another floor?",
            "options": [
              "the lift",
              "the key",
              "the bill",
              "the form"
            ],
            "answer": "the lift"
          },
          {
            "id": "q3",
            "question": "Which room is for one person?",
            "options": [
              "a single room",
              "a double room",
              "room service",
              "a mini-bar"
            ],
            "answer": "a single room"
          },
          {
            "id": "q4",
            "question": "What do you ask for to phone outside the hotel?",
            "options": [
              "an outside line",
              "a wake-up call",
              "room service",
              "a reservation"
            ],
            "answer": "an outside line"
          },
          {
            "id": "q5",
            "question": "Which word means 'dịch vụ phòng'?",
            "options": [
              "room service",
              "reception",
              "check out",
              "a form"
            ],
            "answer": "room service"
          },
          {
            "id": "q6",
            "question": "What do you need to enter your hotel room?",
            "options": [
              "a key",
              "a bill",
              "a menu",
              "a form"
            ],
            "answer": "a key"
          }
        ]
      },
      {
        "id": "u21-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Reception\" is where you check in at a hotel.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "A \"mini-bar\" is a small bar/fridge with drinks in your room.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "\"Check out\" means arriving at the hotel.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "A \"wake-up call\" helps you wake up on time.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Luggage\" means the money you pay at a hotel.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "A \"reservation\" means you have booked a room in advance.",
            "answer": true
          }
        ]
      },
      {
        "id": "u21-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "YEK",
            "answer": "KEY"
          },
          {
            "id": "q2",
            "scrambled": "TIFL",
            "answer": "LIFT"
          },
          {
            "id": "q3",
            "scrambled": "LLIB",
            "answer": "BILL"
          },
          {
            "id": "q4",
            "scrambled": "EGGAGLU",
            "answer": "LUGGAGE"
          },
          {
            "id": "q5",
            "scrambled": "REWOHS",
            "answer": "SHOWER"
          },
          {
            "id": "q6",
            "scrambled": "MROF",
            "answer": "FORM"
          }
        ]
      }
    ]
  },
  22: {
    "unit": {
      "id": "unit-22-eating-out",
      "title": "Unit 22: Eating Out",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u22-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "restaurant",
            "right": "nhà hàng"
          },
          {
            "left": "bar",
            "right": "quán bar"
          },
          {
            "left": "pub",
            "right": "quán rượu/quán pub"
          },
          {
            "left": "menu",
            "right": "thực đơn"
          },
          {
            "left": "starter",
            "right": "món khai vị"
          },
          {
            "left": "main course",
            "right": "món chính"
          },
          {
            "left": "dessert",
            "right": "món tráng miệng"
          },
          {
            "left": "rare",
            "right": "tái (bít tết)"
          },
          {
            "left": "well-done",
            "right": "chín kỹ"
          },
          {
            "left": "delicious",
            "right": "ngon, thơm ngon"
          }
        ]
      },
      {
        "id": "u22-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "menu",
          "starter",
          "main course",
          "dessert",
          "rare",
          "medium",
          "well-done",
          "delicious"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "Can I see the ______, please?",
            "hint_vi": "thực đơn",
            "answer": "menu"
          },
          {
            "id": "q2",
            "sentence": "I had soup for my ______.",
            "hint_vi": "món khai vị",
            "answer": "starter"
          },
          {
            "id": "q3",
            "sentence": "Fish is my ______.",
            "hint_vi": "món chính",
            "answer": "main course"
          },
          {
            "id": "q4",
            "sentence": "Do you want ______?",
            "hint_vi": "món tráng miệng",
            "answer": "dessert"
          },
          {
            "id": "q5",
            "sentence": "I'd like my steak ______.",
            "hint_vi": "tái",
            "answer": "rare"
          },
          {
            "id": "q6",
            "sentence": "I'd like my steak ______, not too raw.",
            "hint_vi": "chín vừa",
            "answer": "medium"
          },
          {
            "id": "q7",
            "sentence": "I'd like my steak ______, no pink at all.",
            "hint_vi": "chín kỹ",
            "answer": "well-done"
          },
          {
            "id": "q8",
            "sentence": "The food is ______.",
            "hint_vi": "ngon",
            "answer": "delicious"
          }
        ]
      },
      {
        "id": "u22-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What do you ask for at the end of a meal?",
            "options": [
              "the bill",
              "the menu",
              "a starter",
              "a snack"
            ],
            "answer": "the bill"
          },
          {
            "id": "q2",
            "question": "Which word means 'sẵn sàng gọi món'?",
            "options": [
              "ready to order",
              "I'll have",
              "dessert",
              "delicious"
            ],
            "answer": "ready to order"
          },
          {
            "id": "q3",
            "question": "What do you call food you buy and eat at home?",
            "options": [
              "a take-away",
              "a starter",
              "a main course",
              "a dessert"
            ],
            "answer": "a take-away"
          },
          {
            "id": "q4",
            "question": "Which is a drink without alcohol?",
            "options": [
              "a soft drink",
              "a pub",
              "a bar",
              "alcohol"
            ],
            "answer": "a soft drink"
          },
          {
            "id": "q5",
            "question": "How do you politely order food?",
            "options": [
              "I'd like...",
              "I want...",
              "Give me...",
              "I have..."
            ],
            "answer": "I'd like..."
          },
          {
            "id": "q6",
            "question": "Which word describes food that tastes very good?",
            "options": [
              "delicious",
              "boring",
              "rare",
              "medium"
            ],
            "answer": "delicious"
          }
        ]
      },
      {
        "id": "u22-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"starter\" is eaten before the main course.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Well-done\" steak is almost raw.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "A \"menu\" lists the food a restaurant offers.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Dessert\" is eaten before the starter.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "\"I'd like...\" is a polite way to order food.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "A \"take-away\" must be eaten inside the restaurant.",
            "answer": false
          }
        ]
      },
      {
        "id": "u22-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "NUME",
            "answer": "MENU"
          },
          {
            "id": "q2",
            "scrambled": "RETSRAT",
            "answer": "STARTER"
          },
          {
            "id": "q3",
            "scrambled": "TRESSED",
            "answer": "DESSERT"
          },
          {
            "id": "q4",
            "scrambled": "RAB",
            "answer": "BAR"
          },
          {
            "id": "q5",
            "scrambled": "BUP",
            "answer": "PUB"
          },
          {
            "id": "q6",
            "scrambled": "EARR",
            "answer": "RARE"
          }
        ]
      }
    ]
  },
  23: {
    "unit": {
      "id": "unit-23-sports",
      "title": "Unit 23: Sports",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u23-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "football",
            "right": "bóng đá"
          },
          {
            "left": "rugby",
            "right": "bóng bầu dục"
          },
          {
            "left": "basketball",
            "right": "bóng rổ"
          },
          {
            "left": "badminton",
            "right": "cầu lông"
          },
          {
            "left": "baseball",
            "right": "bóng chày"
          },
          {
            "left": "tennis",
            "right": "quần vợt"
          },
          {
            "left": "volleyball",
            "right": "bóng chuyền"
          },
          {
            "left": "swimming",
            "right": "môn bơi lội"
          },
          {
            "left": "skiing",
            "right": "môn trượt tuyết"
          },
          {
            "left": "judo",
            "right": "môn judo"
          }
        ]
      },
      {
        "id": "u23-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "football",
          "swimming",
          "tennis",
          "court",
          "pitch",
          "pool",
          "running",
          "sailing"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I play ______ with my friends.",
            "hint_vi": "bóng đá",
            "answer": "football"
          },
          {
            "id": "q2",
            "sentence": "I like ______ in summer.",
            "hint_vi": "bơi lội",
            "answer": "swimming"
          },
          {
            "id": "q3",
            "sentence": "She plays ______ very well.",
            "hint_vi": "quần vợt",
            "answer": "tennis"
          },
          {
            "id": "q4",
            "sentence": "We play tennis on this ______.",
            "hint_vi": "sân (tennis, bóng rổ)",
            "answer": "court"
          },
          {
            "id": "q5",
            "sentence": "The football ______ is very big.",
            "hint_vi": "sân (bóng đá, rugby)",
            "answer": "pitch"
          },
          {
            "id": "q6",
            "sentence": "The swimming ______ is near my house.",
            "hint_vi": "hồ bơi",
            "answer": "pool"
          },
          {
            "id": "q7",
            "sentence": "______ is good exercise.",
            "hint_vi": "chạy bộ",
            "answer": "running"
          },
          {
            "id": "q8",
            "sentence": "We go ______ in summer.",
            "hint_vi": "chèo thuyền buồm",
            "answer": "sailing"
          }
        ]
      },
      {
        "id": "u23-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which sport uses a racket and shuttlecock?",
            "options": [
              "badminton",
              "basketball",
              "swimming",
              "judo"
            ],
            "answer": "badminton"
          },
          {
            "id": "q2",
            "question": "Where do people play football?",
            "options": [
              "a pitch",
              "a court",
              "a pool",
              "a track"
            ],
            "answer": "a pitch"
          },
          {
            "id": "q3",
            "question": "Which word means 'trung tâm thể thao'?",
            "options": [
              "sports centre",
              "court",
              "pool",
              "pitch"
            ],
            "answer": "sports centre"
          },
          {
            "id": "q4",
            "question": "Which sport do you do in water?",
            "options": [
              "swimming",
              "judo",
              "skiing",
              "tennis"
            ],
            "answer": "swimming"
          },
          {
            "id": "q5",
            "question": "\"What's your favourite sport?\" asks about...",
            "options": [
              "môn thể thao bạn thích nhất",
              "nơi bạn chơi thể thao",
              "thời gian bạn tập thể thao",
              "bạn chơi với ai"
            ],
            "answer": "môn thể thao bạn thích nhất"
          },
          {
            "id": "q6",
            "question": "Which sport is a type of martial art?",
            "options": [
              "judo",
              "tennis",
              "volleyball",
              "baseball"
            ],
            "answer": "judo"
          }
        ]
      },
      {
        "id": "u23-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Swimming\" is a sport you do in water.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "A \"pitch\" is used for chess.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"Do you play tennis?\" asks about a specific sport.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Sailing\" is done on snow.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "\"Table tennis\" is played on a small table with a net.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "A \"court\" can be used for tennis or basketball.",
            "answer": true
          }
        ]
      },
      {
        "id": "u23-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "LOBTOALF",
            "answer": "FOOTBALL"
          },
          {
            "id": "q2",
            "scrambled": "YGRUB",
            "answer": "RUGBY"
          },
          {
            "id": "q3",
            "scrambled": "TEBASLLKBA",
            "answer": "BASKETBALL"
          },
          {
            "id": "q4",
            "scrambled": "MNOMDATIN",
            "answer": "BADMINTON"
          },
          {
            "id": "q5",
            "scrambled": "GNIMSWIM",
            "answer": "SWIMMING"
          },
          {
            "id": "q6",
            "scrambled": "SETINN",
            "answer": "TENNIS"
          }
        ]
      }
    ]
  },
  24: {
    "unit": {
      "id": "unit-24-cinema",
      "title": "Unit 24: Cinema",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u24-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "cinema",
            "right": "rạp chiếu phim"
          },
          {
            "left": "film",
            "right": "bộ phim"
          },
          {
            "left": "a western",
            "right": "phim cao bồi"
          },
          {
            "left": "a cartoon",
            "right": "phim hoạt hình"
          },
          {
            "left": "a horror film",
            "right": "phim kinh dị"
          },
          {
            "left": "a comedy",
            "right": "phim hài"
          },
          {
            "left": "a thriller",
            "right": "phim ly kỳ, hồi hộp"
          },
          {
            "left": "an action film",
            "right": "phim hành động"
          },
          {
            "left": "film star",
            "right": "ngôi sao điện ảnh"
          },
          {
            "left": "director",
            "right": "đạo diễn"
          }
        ]
      },
      {
        "id": "u24-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "cinema",
          "film",
          "cartoon",
          "comedy",
          "thriller",
          "action film",
          "director",
          "boring"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "We go to the ______ on Saturday.",
            "hint_vi": "rạp chiếu phim",
            "answer": "cinema"
          },
          {
            "id": "q2",
            "sentence": "I watched a good ______ last night.",
            "hint_vi": "bộ phim",
            "answer": "film"
          },
          {
            "id": "q3",
            "sentence": "The children are watching a ______.",
            "hint_vi": "phim hoạt hình",
            "answer": "cartoon"
          },
          {
            "id": "q4",
            "sentence": "We watched a ______ last night.",
            "hint_vi": "phim hài",
            "answer": "comedy"
          },
          {
            "id": "q5",
            "sentence": "This is a very exciting ______.",
            "hint_vi": "phim ly kỳ",
            "answer": "thriller"
          },
          {
            "id": "q6",
            "sentence": "He likes ______s.",
            "hint_vi": "phim hành động",
            "answer": "action film"
          },
          {
            "id": "q7",
            "sentence": "The ______ made a great film.",
            "hint_vi": "đạo diễn",
            "answer": "director"
          },
          {
            "id": "q8",
            "sentence": "The film was ______.",
            "hint_vi": "nhàm chán",
            "answer": "boring"
          }
        ]
      },
      {
        "id": "u24-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which type of film has a lot of songs and dancing?",
            "options": [
              "a musical",
              "a western",
              "a thriller",
              "a cartoon"
            ],
            "answer": "a musical"
          },
          {
            "id": "q2",
            "question": "Which type of film is about the future or space?",
            "options": [
              "science fiction",
              "romantic comedy",
              "horror",
              "western"
            ],
            "answer": "science fiction"
          },
          {
            "id": "q3",
            "question": "Who acts in films?",
            "options": [
              "a film star",
              "a director",
              "a critic",
              "a producer"
            ],
            "answer": "a film star"
          },
          {
            "id": "q4",
            "question": "Which word describes a film that isn't interesting?",
            "options": [
              "boring",
              "delicious",
              "famous",
              "exciting"
            ],
            "answer": "boring"
          },
          {
            "id": "q5",
            "question": "Who makes decisions about how a film is made?",
            "options": [
              "a director",
              "a film star",
              "an actor",
              "an audience"
            ],
            "answer": "a director"
          },
          {
            "id": "q6",
            "question": "A film about cowboys is called...",
            "options": [
              "a western",
              "a musical",
              "a cartoon",
              "a comedy"
            ],
            "answer": "a western"
          }
        ]
      },
      {
        "id": "u24-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"cartoon\" is usually drawn or animated.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "A \"horror film\" is meant to be very funny.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "A \"director\" makes decisions about how a film is made.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Boring\" means very exciting and interesting.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "A \"thriller\" is usually exciting and suspenseful.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "A \"film star\" is a famous actor in films.",
            "answer": true
          }
        ]
      },
      {
        "id": "u24-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "MEACIN",
            "answer": "CINEMA"
          },
          {
            "id": "q2",
            "scrambled": "LFIM",
            "answer": "FILM"
          },
          {
            "id": "q3",
            "scrambled": "YMDECO",
            "answer": "COMEDY"
          },
          {
            "id": "q4",
            "scrambled": "RRELHITL",
            "answer": "THRILLER"
          },
          {
            "id": "q5",
            "scrambled": "NRTOACO",
            "answer": "CARTOON"
          },
          {
            "id": "q6",
            "scrambled": "ROTDCERI",
            "answer": "DIRECTOR"
          }
        ]
      }
    ]
  },
  25: {
    "unit": {
      "id": "unit-25-free-time",
      "title": "Unit 25: Free Time at Home",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u25-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "TV",
            "right": "TV, tivi"
          },
          {
            "left": "radio",
            "right": "đài radio"
          },
          {
            "left": "music",
            "right": "âm nhạc"
          },
          {
            "left": "headphones",
            "right": "tai nghe"
          },
          {
            "left": "hobby",
            "right": "sở thích"
          },
          {
            "left": "novel",
            "right": "tiểu thuyết"
          },
          {
            "left": "comic",
            "right": "truyện tranh"
          },
          {
            "left": "newspaper",
            "right": "báo, tờ báo"
          },
          {
            "left": "gardening",
            "right": "việc làm vườn"
          },
          {
            "left": "cooking",
            "right": "việc nấu ăn"
          }
        ]
      },
      {
        "id": "u25-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "TV",
          "radio",
          "music",
          "headphones",
          "hobby",
          "novel",
          "newspaper",
          "gardening"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I watch ______ every evening.",
            "hint_vi": "TV",
            "answer": "TV"
          },
          {
            "id": "q2",
            "sentence": "My father listens to the ______.",
            "hint_vi": "đài radio",
            "answer": "radio"
          },
          {
            "id": "q3",
            "sentence": "I like listening to ______.",
            "hint_vi": "âm nhạc",
            "answer": "music"
          },
          {
            "id": "q4",
            "sentence": "I use ______ on the bus.",
            "hint_vi": "tai nghe",
            "answer": "headphones"
          },
          {
            "id": "q5",
            "sentence": "Reading is my favourite ______.",
            "hint_vi": "sở thích",
            "answer": "hobby"
          },
          {
            "id": "q6",
            "sentence": "I am reading a ______.",
            "hint_vi": "tiểu thuyết",
            "answer": "novel"
          },
          {
            "id": "q7",
            "sentence": "My dad reads the ______ every morning.",
            "hint_vi": "báo",
            "answer": "newspaper"
          },
          {
            "id": "q8",
            "sentence": "My mother likes ______.",
            "hint_vi": "làm vườn",
            "answer": "gardening"
          }
        ]
      },
      {
        "id": "u25-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What do you call a story book that isn't true?",
            "options": [
              "a novel",
              "a newspaper",
              "a comic",
              "a magazine"
            ],
            "answer": "a novel"
          },
          {
            "id": "q2",
            "question": "Which word means 'tải xuống'?",
            "options": [
              "download",
              "upload",
              "watch",
              "listen"
            ],
            "answer": "download"
          },
          {
            "id": "q3",
            "question": "What do you use to listen to music privately?",
            "options": [
              "headphones",
              "a novel",
              "a newspaper",
              "a comic"
            ],
            "answer": "headphones"
          },
          {
            "id": "q4",
            "question": "Which word means 'mời bạn bè đến nhà'?",
            "options": [
              "have friends round",
              "do nothing",
              "have a sleep",
              "talk to"
            ],
            "answer": "have friends round"
          },
          {
            "id": "q5",
            "question": "What do you call books with pictures and speech bubbles?",
            "options": [
              "comics",
              "novels",
              "newspapers",
              "magazines"
            ],
            "answer": "comics"
          },
          {
            "id": "q6",
            "question": "\"Have a sleep\" means...",
            "options": [
              "chợp mắt, ngủ một giấc ngắn",
              "đi ngủ buổi tối",
              "thức dậy sớm",
              "mơ"
            ],
            "answer": "chợp mắt, ngủ một giấc ngắn"
          }
        ]
      },
      {
        "id": "u25-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"hobby\" is something you enjoy doing in your free time.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Gardening\" means reading books.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "Headphones are used to listen to music privately.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Do nothing\" means to be very busy.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "A \"comic\" usually has pictures and speech bubbles.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"Chat to my friend online\" means talking through the internet.",
            "answer": true
          }
        ]
      },
      {
        "id": "u25-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "OIRAD",
            "answer": "RADIO"
          },
          {
            "id": "q2",
            "scrambled": "CSMUI",
            "answer": "MUSIC"
          },
          {
            "id": "q3",
            "scrambled": "VELON",
            "answer": "NOVEL"
          },
          {
            "id": "q4",
            "scrambled": "MICOC",
            "answer": "COMIC"
          },
          {
            "id": "q5",
            "scrambled": "SEPAWPRENA",
            "answer": "NEWSPAPER"
          },
          {
            "id": "q6",
            "scrambled": "YHBOB",
            "answer": "HOBBY"
          }
        ]
      }
    ]
  },
  26: {
    "unit": {
      "id": "unit-26-music",
      "title": "Unit 26: Music and Musical Instruments",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u26-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "piano",
            "right": "đàn piano"
          },
          {
            "left": "guitar",
            "right": "đàn ghi-ta"
          },
          {
            "left": "violin",
            "right": "đàn vi-ô-lông"
          },
          {
            "left": "drums",
            "right": "trống"
          },
          {
            "left": "trumpet",
            "right": "kèn trumpet"
          },
          {
            "left": "orchestra",
            "right": "dàn nhạc giao hưởng"
          },
          {
            "left": "band",
            "right": "ban nhạc"
          },
          {
            "left": "concert",
            "right": "buổi hòa nhạc"
          },
          {
            "left": "jazz",
            "right": "nhạc jazz"
          },
          {
            "left": "classical music",
            "right": "nhạc cổ điển"
          }
        ]
      },
      {
        "id": "u26-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "piano",
          "guitar",
          "violin",
          "drums",
          "orchestra",
          "band",
          "concert",
          "musician"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "She plays the ______ very well.",
            "hint_vi": "đàn piano",
            "answer": "piano"
          },
          {
            "id": "q2",
            "sentence": "I play the ______.",
            "hint_vi": "đàn ghi-ta",
            "answer": "guitar"
          },
          {
            "id": "q3",
            "sentence": "My sister plays the ______.",
            "hint_vi": "đàn vi-ô-lông",
            "answer": "violin"
          },
          {
            "id": "q4",
            "sentence": "He plays the ______ in a band.",
            "hint_vi": "trống",
            "answer": "drums"
          },
          {
            "id": "q5",
            "sentence": "She plays in an ______.",
            "hint_vi": "dàn nhạc giao hưởng",
            "answer": "orchestra"
          },
          {
            "id": "q6",
            "sentence": "My friend plays in a ______.",
            "hint_vi": "ban nhạc",
            "answer": "band"
          },
          {
            "id": "q7",
            "sentence": "We went to a ______ last weekend.",
            "hint_vi": "buổi hòa nhạc",
            "answer": "concert"
          },
          {
            "id": "q8",
            "sentence": "My brother is a ______.",
            "hint_vi": "nhạc sĩ",
            "answer": "musician"
          }
        ]
      },
      {
        "id": "u26-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which instrument has black and white keys?",
            "options": [
              "piano",
              "guitar",
              "drums",
              "flute"
            ],
            "answer": "piano"
          },
          {
            "id": "q2",
            "question": "Which word means 'nhạc dân gian'?",
            "options": [
              "folk music",
              "pop music",
              "rock",
              "jazz"
            ],
            "answer": "folk music"
          },
          {
            "id": "q3",
            "question": "Where do many musicians perform together?",
            "options": [
              "an orchestra",
              "a museum",
              "a library",
              "a bank"
            ],
            "answer": "an orchestra"
          },
          {
            "id": "q4",
            "question": "Which word means 'tải một số bài hát mới'?",
            "options": [
              "download some new songs",
              "play an instrument",
              "go to a concert",
              "listen to the radio"
            ],
            "answer": "download some new songs"
          },
          {
            "id": "q5",
            "question": "What do you call a person who plays music?",
            "options": [
              "a musician",
              "a music",
              "a musical",
              "an orchestra"
            ],
            "answer": "a musician"
          },
          {
            "id": "q6",
            "question": "Which type of music often uses electric guitars and drums?",
            "options": [
              "rock",
              "opera",
              "classical music",
              "folk music"
            ],
            "answer": "rock"
          }
        ]
      },
      {
        "id": "u26-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"guitar\" has strings.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Jazz\" and \"classical music\" are the same type of music.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "An \"orchestra\" usually has many musicians playing together.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Musical\" can describe someone who is good at music.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Opera\" is a type of sport.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "A \"concert\" is a live music performance.",
            "answer": true
          }
        ]
      },
      {
        "id": "u26-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "NAIOP",
            "answer": "PIANO"
          },
          {
            "id": "q2",
            "scrambled": "RIGATU",
            "answer": "GUITAR"
          },
          {
            "id": "q3",
            "scrambled": "NIILOV",
            "answer": "VIOLIN"
          },
          {
            "id": "q4",
            "scrambled": "SRUDM",
            "answer": "DRUMS"
          },
          {
            "id": "q5",
            "scrambled": "DABN",
            "answer": "BAND"
          },
          {
            "id": "q6",
            "scrambled": "TRENOCC",
            "answer": "CONCERT"
          }
        ]
      }
    ]
  },
  27: {
    "unit": {
      "id": "unit-27-countries",
      "title": "Unit 27: Countries and Nationalities",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u27-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "continent",
            "right": "châu lục"
          },
          {
            "left": "country",
            "right": "đất nước, quốc gia"
          },
          {
            "left": "Asia",
            "right": "châu Á"
          },
          {
            "left": "Europe",
            "right": "châu Âu"
          },
          {
            "left": "Africa",
            "right": "châu Phi"
          },
          {
            "left": "Australia",
            "right": "Úc, Australia"
          },
          {
            "left": "North America",
            "right": "Bắc Mỹ"
          },
          {
            "left": "South America",
            "right": "Nam Mỹ"
          },
          {
            "left": "Antarctica",
            "right": "Nam Cực"
          },
          {
            "left": "nationality",
            "right": "quốc tịch"
          }
        ]
      },
      {
        "id": "u27-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "continent",
          "country",
          "Asia",
          "Europe",
          "Africa",
          "Australia",
          "nationality",
          "Antarctica"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "Asia is a large ______.",
            "hint_vi": "châu lục",
            "answer": "continent"
          },
          {
            "id": "q2",
            "sentence": "Vietnam is my ______.",
            "hint_vi": "đất nước",
            "answer": "country"
          },
          {
            "id": "q3",
            "sentence": "Vietnam is in ______.",
            "hint_vi": "châu Á",
            "answer": "Asia"
          },
          {
            "id": "q4",
            "sentence": "France is in ______.",
            "hint_vi": "châu Âu",
            "answer": "Europe"
          },
          {
            "id": "q5",
            "sentence": "Egypt is in ______.",
            "hint_vi": "châu Phi",
            "answer": "Africa"
          },
          {
            "id": "q6",
            "sentence": "______ is a large country.",
            "hint_vi": "Úc",
            "answer": "Australia"
          },
          {
            "id": "q7",
            "sentence": "What is your ______?",
            "hint_vi": "quốc tịch",
            "answer": "nationality"
          },
          {
            "id": "q8",
            "sentence": "______ is very cold.",
            "hint_vi": "Nam Cực",
            "answer": "Antarctica"
          }
        ]
      },
      {
        "id": "u27-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which continent is Brazil in?",
            "options": [
              "South America",
              "North America",
              "Europe",
              "Asia"
            ],
            "answer": "South America"
          },
          {
            "id": "q2",
            "question": "Which continent is Egypt in?",
            "options": [
              "Africa",
              "Europe",
              "Asia",
              "Australia"
            ],
            "answer": "Africa"
          },
          {
            "id": "q3",
            "question": "What is the adjective for 'China'?",
            "options": [
              "Chinese",
              "China",
              "Chinaish",
              "Chinan"
            ],
            "answer": "Chinese"
          },
          {
            "id": "q4",
            "question": "What is the adjective for 'Spain'?",
            "options": [
              "Spanish",
              "Spainish",
              "Spain",
              "Spaner"
            ],
            "answer": "Spanish"
          },
          {
            "id": "q5",
            "question": "Which continent is the coldest?",
            "options": [
              "Antarctica",
              "Africa",
              "Asia",
              "Europe"
            ],
            "answer": "Antarctica"
          },
          {
            "id": "q6",
            "question": "What is the capital of Japan?",
            "options": [
              "Tokyo",
              "Beijing",
              "Seoul",
              "Bangkok"
            ],
            "answer": "Tokyo"
          }
        ]
      },
      {
        "id": "u27-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Asia\" is the largest continent.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Antarctica\" is a very hot continent.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"Nationality\" means the country you belong to.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Australia\" is both a country and a continent.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Europe\" and \"Africa\" are the same continent.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"South America\" includes countries like Brazil and Argentina.",
            "answer": true
          }
        ]
      },
      {
        "id": "u27-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "AISA",
            "answer": "ASIA"
          },
          {
            "id": "q2",
            "scrambled": "PEUEOR",
            "answer": "EUROPE"
          },
          {
            "id": "q3",
            "scrambled": "CFAIRA",
            "answer": "AFRICA"
          },
          {
            "id": "q4",
            "scrambled": "ARTALSAIU",
            "answer": "AUSTRALIA"
          },
          {
            "id": "q5",
            "scrambled": "CTRAANTAIC",
            "answer": "ANTARCTICA"
          },
          {
            "id": "q6",
            "scrambled": "TRONUCY",
            "answer": "COUNTRY"
          }
        ]
      }
    ]
  },
  28: {
    "unit": {
      "id": "unit-28-weather",
      "title": "Unit 28: Weather",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u28-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "sun",
            "right": "mặt trời, ánh nắng"
          },
          {
            "left": "rain",
            "right": "mưa"
          },
          {
            "left": "cloud",
            "right": "đám mây"
          },
          {
            "left": "snow",
            "right": "tuyết"
          },
          {
            "left": "fog",
            "right": "sương mù"
          },
          {
            "left": "wind",
            "right": "gió"
          },
          {
            "left": "thunder",
            "right": "sấm"
          },
          {
            "left": "lightning",
            "right": "tia chớp, sét"
          },
          {
            "left": "storm",
            "right": "bão, giông bão"
          },
          {
            "left": "degrees",
            "right": "độ (nhiệt độ)"
          }
        ]
      },
      {
        "id": "u28-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "sunny",
          "rainy",
          "windy",
          "cloudy",
          "snowy",
          "foggy",
          "hot",
          "cold"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "It's ______ today.",
            "hint_vi": "có nắng",
            "answer": "sunny"
          },
          {
            "id": "q2",
            "sentence": "It is a ______ day.",
            "hint_vi": "có mưa",
            "answer": "rainy"
          },
          {
            "id": "q3",
            "sentence": "It's very ______ today.",
            "hint_vi": "nhiều gió",
            "answer": "windy"
          },
          {
            "id": "q4",
            "sentence": "It is ______ today.",
            "hint_vi": "nhiều mây",
            "answer": "cloudy"
          },
          {
            "id": "q5",
            "sentence": "It is ______ in winter.",
            "hint_vi": "có tuyết",
            "answer": "snowy"
          },
          {
            "id": "q6",
            "sentence": "It is ______ this morning.",
            "hint_vi": "có sương mù",
            "answer": "foggy"
          },
          {
            "id": "q7",
            "sentence": "It is very ______ today.",
            "hint_vi": "nóng",
            "answer": "hot"
          },
          {
            "id": "q8",
            "sentence": "It is very ______ outside.",
            "hint_vi": "lạnh",
            "answer": "cold"
          }
        ]
      },
      {
        "id": "u28-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What do you see in the sky before you hear thunder?",
            "options": [
              "lightning",
              "fog",
              "cloud",
              "wind"
            ],
            "answer": "lightning"
          },
          {
            "id": "q2",
            "question": "Which word means 'khô'?",
            "options": [
              "dry",
              "wet",
              "cold",
              "hot"
            ],
            "answer": "dry"
          },
          {
            "id": "q3",
            "question": "Which word describes a very strong storm?",
            "options": [
              "hurricane",
              "fog",
              "cloud",
              "degrees"
            ],
            "answer": "hurricane"
          },
          {
            "id": "q4",
            "question": "Which word means 'chiếu sáng, tỏa sáng'?",
            "options": [
              "shine",
              "rain",
              "snow",
              "blow"
            ],
            "answer": "shine"
          },
          {
            "id": "q5",
            "question": "\"What's the weather like today?\" asks about...",
            "options": [
              "thời tiết hôm nay như thế nào",
              "hôm nay là thứ mấy",
              "bạn ở đâu",
              "bạn có khỏe không"
            ],
            "answer": "thời tiết hôm nay như thế nào"
          },
          {
            "id": "q6",
            "question": "Which is coldest?",
            "options": [
              "minus 50 degrees",
              "30 degrees",
              "hot",
              "sunny"
            ],
            "answer": "minus 50 degrees"
          }
        ]
      },
      {
        "id": "u28-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Sunny\" means there is a lot of sun.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Foggy\" means it is very hot and dry.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "A \"thunderstorm\" has both thunder and rain.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Wet\" is the opposite of \"dry\".",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Snowy\" weather happens when it's very hot.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Degrees\" are used to measure temperature.",
            "answer": true
          }
        ]
      },
      {
        "id": "u28-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "NUS",
            "answer": "SUN"
          },
          {
            "id": "q2",
            "scrambled": "NIAR",
            "answer": "RAIN"
          },
          {
            "id": "q3",
            "scrambled": "WNOS",
            "answer": "SNOW"
          },
          {
            "id": "q4",
            "scrambled": "DWNI",
            "answer": "WIND"
          },
          {
            "id": "q5",
            "scrambled": "GOF",
            "answer": "FOG"
          },
          {
            "id": "q6",
            "scrambled": "MRTOS",
            "answer": "STORM"
          }
        ]
      }
    ]
  },
  29: {
    "unit": {
      "id": "unit-29-town",
      "title": "Unit 29: In the Town",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u29-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "train station",
            "right": "ga tàu hỏa"
          },
          {
            "left": "bus station",
            "right": "bến xe buýt"
          },
          {
            "left": "shopping centre",
            "right": "trung tâm mua sắm"
          },
          {
            "left": "museum",
            "right": "bảo tàng"
          },
          {
            "left": "bank",
            "right": "ngân hàng"
          },
          {
            "left": "post office",
            "right": "bưu điện"
          },
          {
            "left": "library",
            "right": "thư viện"
          },
          {
            "left": "town hall",
            "right": "tòa thị chính"
          },
          {
            "left": "car park",
            "right": "bãi đỗ xe"
          },
          {
            "left": "entrance",
            "right": "lối vào"
          }
        ]
      },
      {
        "id": "u29-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "bank",
          "museum",
          "library",
          "post office",
          "car park",
          "entrance",
          "exit",
          "bus station"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "The ______ is next to the post office.",
            "hint_vi": "ngân hàng",
            "answer": "bank"
          },
          {
            "id": "q2",
            "sentence": "We visited the ______ yesterday.",
            "hint_vi": "bảo tàng",
            "answer": "museum"
          },
          {
            "id": "q3",
            "sentence": "I often study in the ______.",
            "hint_vi": "thư viện",
            "answer": "library"
          },
          {
            "id": "q4",
            "sentence": "I need to go to the ______.",
            "hint_vi": "bưu điện",
            "answer": "post office"
          },
          {
            "id": "q5",
            "sentence": "There is a ______ near the shop.",
            "hint_vi": "bãi đỗ xe",
            "answer": "car park"
          },
          {
            "id": "q6",
            "sentence": "The ______ is over there.",
            "hint_vi": "lối vào",
            "answer": "entrance"
          },
          {
            "id": "q7",
            "sentence": "The ______ is on the left.",
            "hint_vi": "lối ra",
            "answer": "exit"
          },
          {
            "id": "q8",
            "sentence": "The ______ is in the town centre.",
            "hint_vi": "bến xe buýt",
            "answer": "bus station"
          }
        ]
      },
      {
        "id": "u29-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Where do you go to borrow books?",
            "options": [
              "a library",
              "a museum",
              "a bank",
              "a car park"
            ],
            "answer": "a library"
          },
          {
            "id": "q2",
            "question": "Where do you go to change money?",
            "options": [
              "a bank",
              "a museum",
              "a library",
              "a post office"
            ],
            "answer": "a bank"
          },
          {
            "id": "q3",
            "question": "Which word means 'khu vực dành cho người đi bộ'?",
            "options": [
              "pedestrian area",
              "car park",
              "bus station",
              "entrance"
            ],
            "answer": "pedestrian area"
          },
          {
            "id": "q4",
            "question": "What sign do you see when a machine doesn't work?",
            "options": [
              "out of order",
              "no smoking",
              "exit",
              "entrance"
            ],
            "answer": "out of order"
          },
          {
            "id": "q5",
            "question": "Which phrase means 'xin lỗi (để hỏi ai đó)'?",
            "options": [
              "Excuse me",
              "I'm looking for",
              "Turn right",
              "Go left"
            ],
            "answer": "Excuse me"
          },
          {
            "id": "q6",
            "question": "Which word means 'ATM'?",
            "options": [
              "a cash machine",
              "a bank",
              "a post office",
              "a museum"
            ],
            "answer": "a cash machine"
          }
        ]
      },
      {
        "id": "u29-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"museum\" is a place where you keep and show old and interesting things.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Post office\" is where you borrow books.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"Turn right\" and \"turn left\" give directions.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"No smoking\" means you are allowed to smoke.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "\"Town hall\" is a government building in a town.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"Car park\" is a place to park your car.",
            "answer": true
          }
        ]
      },
      {
        "id": "u29-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "KABN",
            "answer": "BANK"
          },
          {
            "id": "q2",
            "scrambled": "USEMUM",
            "answer": "MUSEUM"
          },
          {
            "id": "q3",
            "scrambled": "RARLIYB",
            "answer": "LIBRARY"
          },
          {
            "id": "q4",
            "scrambled": "TSPO EFCIFO",
            "answer": "POST OFFICE"
          },
          {
            "id": "q5",
            "scrambled": "XETI",
            "answer": "EXIT"
          },
          {
            "id": "q6",
            "scrambled": "EACRTNNE",
            "answer": "ENTRANCE"
          }
        ]
      }
    ]
  },
  30: {
    "unit": {
      "id": "unit-30-countryside",
      "title": "Unit 30: In the Countryside",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u30-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "countryside",
            "right": "vùng nông thôn"
          },
          {
            "left": "mountain",
            "right": "núi"
          },
          {
            "left": "forest",
            "right": "rừng"
          },
          {
            "left": "lake",
            "right": "hồ"
          },
          {
            "left": "field",
            "right": "cánh đồng"
          },
          {
            "left": "village",
            "right": "ngôi làng"
          },
          {
            "left": "river",
            "right": "sông"
          },
          {
            "left": "farm",
            "right": "trang trại"
          },
          {
            "left": "hill",
            "right": "đồi"
          },
          {
            "left": "wildlife",
            "right": "động vật hoang dã"
          }
        ]
      },
      {
        "id": "u30-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "countryside",
          "mountain",
          "forest",
          "lake",
          "field",
          "village",
          "river",
          "farm"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I love living in the ______.",
            "hint_vi": "vùng nông thôn",
            "answer": "countryside"
          },
          {
            "id": "q2",
            "sentence": "There is a high ______ near our village.",
            "hint_vi": "núi",
            "answer": "mountain"
          },
          {
            "id": "q3",
            "sentence": "We walked through the ______.",
            "hint_vi": "rừng",
            "answer": "forest"
          },
          {
            "id": "q4",
            "sentence": "There is a beautiful ______ near the village.",
            "hint_vi": "hồ",
            "answer": "lake"
          },
          {
            "id": "q5",
            "sentence": "The cows are in the ______.",
            "hint_vi": "cánh đồng",
            "answer": "field"
          },
          {
            "id": "q6",
            "sentence": "My grandparents live in a small ______.",
            "hint_vi": "ngôi làng",
            "answer": "village"
          },
          {
            "id": "q7",
            "sentence": "There is a ______ near the farm.",
            "hint_vi": "sông",
            "answer": "river"
          },
          {
            "id": "q8",
            "sentence": "My uncle has a ______.",
            "hint_vi": "trang trại",
            "answer": "farm"
          }
        ]
      },
      {
        "id": "u30-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Who works on a farm?",
            "options": [
              "a farmer",
              "a librarian",
              "a musician",
              "a director"
            ],
            "answer": "a farmer"
          },
          {
            "id": "q2",
            "question": "Which word means 'khu bảo tồn'?",
            "options": [
              "a conservation area",
              "a national park",
              "a village",
              "a farm"
            ],
            "answer": "a conservation area"
          },
          {
            "id": "q3",
            "question": "Which word means 'đi dã ngoại'?",
            "options": [
              "have a picnic",
              "go skiing",
              "go walking",
              "have a sleep"
            ],
            "answer": "have a picnic"
          },
          {
            "id": "q4",
            "question": "Which word means 'nhà nhỏ ở nông thôn'?",
            "options": [
              "a cottage",
              "a farm",
              "a village",
              "a town"
            ],
            "answer": "a cottage"
          },
          {
            "id": "q5",
            "question": "What is 'wildlife'?",
            "options": [
              "động vật hoang dã",
              "đồ nội thất",
              "dụng cụ nấu ăn",
              "phương tiện giao thông"
            ],
            "answer": "động vật hoang dã"
          },
          {
            "id": "q6",
            "question": "Which is smaller than a town but bigger than a farm?",
            "options": [
              "a village",
              "a city",
              "a country",
              "a continent"
            ],
            "answer": "a village"
          }
        ]
      },
      {
        "id": "u30-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"forest\" has a lot of trees.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "A \"lake\" is smaller than a puddle.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"Wildlife\" means wild animals and plants.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "A \"cottage\" is a very tall skyscraper.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "A \"national park\" is a protected natural area.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"Go walking\" and \"go skiing\" are both outdoor activities.",
            "answer": true
          }
        ]
      },
      {
        "id": "u30-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "NUMOTIAN",
            "answer": "MOUNTAIN"
          },
          {
            "id": "q2",
            "scrambled": "SFTREO",
            "answer": "FOREST"
          },
          {
            "id": "q3",
            "scrambled": "EALK",
            "answer": "LAKE"
          },
          {
            "id": "q4",
            "scrambled": "EGVLLIA",
            "answer": "VILLAGE"
          },
          {
            "id": "q5",
            "scrambled": "MFAR",
            "answer": "FARM"
          },
          {
            "id": "q6",
            "scrambled": "REVRI",
            "answer": "RIVER"
          }
        ]
      }
    ]
  },
  31: {
    "unit": {
      "id": "unit-31-animals",
      "title": "Unit 31: Animals",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u31-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "farm animal",
            "right": "động vật nuôi trong trang trại"
          },
          {
            "left": "wild animal",
            "right": "động vật hoang dã"
          },
          {
            "left": "foal",
            "right": "ngựa con"
          },
          {
            "left": "calf",
            "right": "bê, nghé"
          },
          {
            "left": "piglet",
            "right": "lợn con"
          },
          {
            "left": "chick",
            "right": "gà con"
          },
          {
            "left": "kid",
            "right": "dê con"
          },
          {
            "left": "wool",
            "right": "len; lông cừu"
          },
          {
            "left": "leather",
            "right": "da thuộc"
          },
          {
            "left": "tortoise",
            "right": "rùa cạn"
          }
        ]
      },
      {
        "id": "u31-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "sheep",
          "produce",
          "pig",
          "hen",
          "milk",
          "meat",
          "goat",
          "cow"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "A ______ produces wool for our clothes.",
            "hint_vi": "cừu",
            "answer": "sheep"
          },
          {
            "id": "q2",
            "sentence": "Cows ______ milk for us every day.",
            "hint_vi": "sản xuất, cho ra",
            "answer": "produce"
          },
          {
            "id": "q3",
            "sentence": "A ______ gives us bacon and ham.",
            "hint_vi": "lợn",
            "answer": "pig"
          },
          {
            "id": "q4",
            "sentence": "A ______ lays eggs almost every day.",
            "hint_vi": "gà mái",
            "answer": "hen"
          },
          {
            "id": "q5",
            "sentence": "I drink a glass of ______ every morning.",
            "hint_vi": "sữa",
            "answer": "milk"
          },
          {
            "id": "q6",
            "sentence": "Beef and pork are both kinds of ______.",
            "hint_vi": "thịt",
            "answer": "meat"
          },
          {
            "id": "q7",
            "sentence": "A ______ can climb rocky hills easily.",
            "hint_vi": "dê",
            "answer": "goat"
          },
          {
            "id": "q8",
            "sentence": "A ______ is the mother of a calf.",
            "hint_vi": "bò cái",
            "answer": "cow"
          }
        ]
      },
      {
        "id": "u31-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What is a baby horse called?",
            "options": [
              "a foal",
              "a calf",
              "a chick",
              "a kid"
            ],
            "answer": "a foal"
          },
          {
            "id": "q2",
            "question": "What is a baby pig called?",
            "options": [
              "a piglet",
              "a calf",
              "a chick",
              "a lamb"
            ],
            "answer": "a piglet"
          },
          {
            "id": "q3",
            "question": "Which word means 'động vật hoang dã'?",
            "options": [
              "wild animal",
              "farm animal",
              "zoo animal",
              "pet"
            ],
            "answer": "wild animal"
          },
          {
            "id": "q4",
            "question": "Leather is made from an animal's ______.",
            "options": [
              "skin",
              "wool",
              "milk",
              "meat"
            ],
            "answer": "skin"
          },
          {
            "id": "q5",
            "question": "Which of these is NOT a farm animal?",
            "options": [
              "tiger",
              "cow",
              "pig",
              "sheep"
            ],
            "answer": "tiger"
          },
          {
            "id": "q6",
            "question": "Which pet can copy (mimic) human speech?",
            "options": [
              "a parrot",
              "a rabbit",
              "a tortoise",
              "a fish"
            ],
            "answer": "a parrot"
          }
        ]
      },
      {
        "id": "u31-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"calf\" is a baby cow.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "A \"kid\" is a baby pig.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"Wool\" comes from sheep.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "A \"foal\" is a baby horse.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "Both \"bacon\" and \"ham\" come from pork.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "A \"hen\" is a male chicken.",
            "answer": false
          }
        ]
      },
      {
        "id": "u31-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "EEPSH",
            "answer": "SHEEP"
          },
          {
            "id": "q2",
            "scrambled": "ROSEH",
            "answer": "HORSE"
          },
          {
            "id": "q3",
            "scrambled": "RBBTIA",
            "answer": "RABBIT"
          },
          {
            "id": "q4",
            "scrambled": "KYEMNO",
            "answer": "MONKEY"
          },
          {
            "id": "q5",
            "scrambled": "APRTRO",
            "answer": "PARROT"
          },
          {
            "id": "q6",
            "scrambled": "RFIAGFE",
            "answer": "GIRAFFE"
          }
        ]
      }
    ]
  },
  32: {
    "unit": {
      "id": "unit-32-travelling",
      "title": "Unit 32: Travelling",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u32-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "timetable",
            "right": "lịch trình, thời gian biểu"
          },
          {
            "left": "luggage",
            "right": "hành lý"
          },
          {
            "left": "passport",
            "right": "hộ chiếu"
          },
          {
            "left": "customs",
            "right": "hải quan"
          },
          {
            "left": "journey",
            "right": "chuyến đi, hành trình"
          },
          {
            "left": "platform",
            "right": "sân ga (từ hình 32.3)"
          },
          {
            "left": "boarding card",
            "right": "thẻ lên máy bay"
          },
          {
            "left": "flight attendant",
            "right": "tiếp viên hàng không"
          },
          {
            "left": "underground",
            "right": "tàu điện ngầm"
          },
          {
            "left": "return ticket",
            "right": "vé khứ hồi"
          }
        ]
      },
      {
        "id": "u32-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "check in",
          "take off",
          "land",
          "luggage",
          "direct",
          "platform",
          "customs",
          "hire"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "We need to ______ two hours before the flight.",
            "hint_vi": "làm thủ tục",
            "answer": "check in"
          },
          {
            "id": "q2",
            "sentence": "The plane will ______ at nine o'clock.",
            "hint_vi": "cất cánh",
            "answer": "take off"
          },
          {
            "id": "q3",
            "sentence": "The plane will ______ in Paris at noon.",
            "hint_vi": "hạ cánh",
            "answer": "land"
          },
          {
            "id": "q4",
            "sentence": "My ______ is very heavy this time.",
            "hint_vi": "hành lý",
            "answer": "luggage"
          },
          {
            "id": "q5",
            "sentence": "Is there a ______ train to London, or do I have to change?",
            "hint_vi": "trực tiếp",
            "answer": "direct"
          },
          {
            "id": "q6",
            "sentence": "The train leaves from ______ 3.",
            "hint_vi": "sân ga",
            "answer": "platform"
          },
          {
            "id": "q7",
            "sentence": "We went through ______ quickly at the airport.",
            "hint_vi": "hải quan",
            "answer": "customs"
          },
          {
            "id": "q8",
            "sentence": "We decided to ______ a car for the holiday.",
            "hint_vi": "thuê",
            "answer": "hire"
          }
        ]
      },
      {
        "id": "u32-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What do you show before getting on a plane?",
            "options": [
              "a boarding card",
              "a timetable",
              "a map",
              "a receipt"
            ],
            "answer": "a boarding card"
          },
          {
            "id": "q2",
            "question": "Which word means 'vé một chiều'?",
            "options": [
              "a single ticket",
              "a return ticket",
              "a season ticket",
              "a day ticket"
            ],
            "answer": "a single ticket"
          },
          {
            "id": "q3",
            "question": "Where do you eat a meal on a long train journey?",
            "options": [
              "the restaurant car",
              "the platform",
              "the boarding card",
              "customs"
            ],
            "answer": "the restaurant car"
          },
          {
            "id": "q4",
            "question": "Who serves you drinks and food on a plane?",
            "options": [
              "a flight attendant",
              "a taxi driver",
              "a passport officer",
              "a train driver"
            ],
            "answer": "a flight attendant"
          },
          {
            "id": "q5",
            "question": "If you 'give someone a lift', you...",
            "options": [
              "take them in your car",
              "give them money",
              "carry their luggage",
              "sell them a ticket"
            ],
            "answer": "take them in your car"
          },
          {
            "id": "q6",
            "question": "'Fill the car up with petrol' means...",
            "options": [
              "put fuel in the car",
              "wash the car",
              "park the car",
              "hire the car"
            ],
            "answer": "put fuel in the car"
          }
        ]
      },
      {
        "id": "u32-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"return ticket\" takes you there and back.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "Planes \"land\" at the beginning of a journey.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "You need a passport to go through customs in another country.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Luggage\" means bags and suitcases.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Hiring a car\" means buying a car.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "The \"underground\" is a type of train under the city.",
            "answer": true
          }
        ]
      },
      {
        "id": "u32-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "ATRNI",
            "answer": "TRAIN"
          },
          {
            "id": "q2",
            "scrambled": "TXAI",
            "answer": "TAXI"
          },
          {
            "id": "q3",
            "scrambled": "KTEITC",
            "answer": "TICKET"
          },
          {
            "id": "q4",
            "scrambled": "TRPIROA",
            "answer": "AIRPORT"
          },
          {
            "id": "q5",
            "scrambled": "YURENJO",
            "answer": "JOURNEY"
          },
          {
            "id": "q6",
            "scrambled": "PCHREILETO",
            "answer": "HELICOPTER"
          }
        ]
      }
    ]
  },
  33: {
    "unit": {
      "id": "unit-33-uk-culture",
      "title": "Unit 33: UK culture",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u33-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "Christmas",
            "right": "lễ Giáng sinh"
          },
          {
            "left": "Easter",
            "right": "Lễ Phục sinh"
          },
          {
            "left": "Halloween",
            "right": "Halloween, Lễ hội hóa trang"
          },
          {
            "left": "Bonfire Night",
            "right": "Đêm Lửa trại (5/11 ở Anh)"
          },
          {
            "left": "bank holiday",
            "right": "ngày nghỉ lễ chính thức"
          },
          {
            "left": "roast beef",
            "right": "thịt bò nướng"
          },
          {
            "left": "curry",
            "right": "món cà ri"
          },
          {
            "left": "nursery school",
            "right": "trường mầm non"
          },
          {
            "left": "royal family",
            "right": "Hoàng gia"
          },
          {
            "left": "Prime Minister",
            "right": "Thủ tướng"
          }
        ]
      },
      {
        "id": "u33-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "fireworks",
          "Christmas tree",
          "oven",
          "curry",
          "state",
          "private",
          "king",
          "fish"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "We decorate a ______ every December.",
            "hint_vi": "cây thông Noel",
            "answer": "Christmas tree"
          },
          {
            "id": "q2",
            "sentence": "People watch ______ on Bonfire Night.",
            "hint_vi": "pháo hoa",
            "answer": "fireworks"
          },
          {
            "id": "q3",
            "sentence": "Roast beef is cooked in the ______.",
            "hint_vi": "lò nướng",
            "answer": "oven"
          },
          {
            "id": "q4",
            "sentence": "Chicken tikka masala is a kind of ______.",
            "hint_vi": "món cà ri",
            "answer": "curry"
          },
          {
            "id": "q5",
            "sentence": "We had ______ and chips for dinner.",
            "hint_vi": "cá",
            "answer": "fish"
          },
          {
            "id": "q6",
            "sentence": "A ______ school is free for children.",
            "hint_vi": "công lập",
            "answer": "state"
          },
          {
            "id": "q7",
            "sentence": "Parents pay for their children to go to a ______ school.",
            "hint_vi": "tư thục",
            "answer": "private"
          },
          {
            "id": "q8",
            "sentence": "The ______ lives in a palace.",
            "hint_vi": "vua",
            "answer": "king"
          }
        ]
      },
      {
        "id": "u33-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which special day do children wear costumes for?",
            "options": [
              "Halloween",
              "Christmas",
              "Easter",
              "New Year's Day"
            ],
            "answer": "Halloween"
          },
          {
            "id": "q2",
            "question": "What do children find on Easter?",
            "options": [
              "Easter eggs",
              "Christmas trees",
              "fireworks",
              "chips"
            ],
            "answer": "Easter eggs"
          },
          {
            "id": "q3",
            "question": "Which dish is traditionally eaten with roast beef?",
            "options": [
              "Yorkshire pudding",
              "chicken tikka masala",
              "fish and chips",
              "curry"
            ],
            "answer": "Yorkshire pudding"
          },
          {
            "id": "q4",
            "question": "Which age group goes to secondary school in the UK?",
            "options": [
              "12-18",
              "2-4",
              "5-11",
              "18-22"
            ],
            "answer": "12-18"
          },
          {
            "id": "q5",
            "question": "Where do the Prime Minister and MPs work?",
            "options": [
              "the Houses of Parliament",
              "the royal palace",
              "a state school",
              "a bank"
            ],
            "answer": "the Houses of Parliament"
          },
          {
            "id": "q6",
            "question": "When do British people traditionally have a party at midnight?",
            "options": [
              "New Year's Eve",
              "Valentine's Day",
              "Bonfire Night",
              "Easter"
            ],
            "answer": "New Year's Eve"
          }
        ]
      },
      {
        "id": "u33-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "Chicken tikka masala originally comes from India.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "A \"bank holiday\" is a normal working day.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "Fireworks are traditionally watched on Bonfire Night.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "A \"private school\" is free for parents.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "The Queen or King is part of the royal family.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "Nursery school is for children aged 12-18.",
            "answer": false
          }
        ]
      },
      {
        "id": "u33-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "ERSETA",
            "answer": "EASTER"
          },
          {
            "id": "q2",
            "scrambled": "RRCYU",
            "answer": "CURRY"
          },
          {
            "id": "q3",
            "scrambled": "LTESVFAI",
            "answer": "FESTIVAL"
          },
          {
            "id": "q4",
            "scrambled": "NEQUE",
            "answer": "QUEEN"
          },
          {
            "id": "q5",
            "scrambled": "OHLCSO",
            "answer": "SCHOOL"
          },
          {
            "id": "q6",
            "scrambled": "LCTPSOII",
            "answer": "POLITICS"
          }
        ]
      }
    ]
  },
  34: {
    "unit": {
      "id": "unit-34-crime",
      "title": "Unit 34: Crime",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u34-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "robbery",
            "right": "vụ cướp"
          },
          {
            "left": "burglary",
            "right": "vụ đột nhập trộm cắp"
          },
          {
            "left": "mugging",
            "right": "vụ cướp đường phố"
          },
          {
            "left": "shoplifting",
            "right": "hành vi ăn cắp hàng trong cửa hàng"
          },
          {
            "left": "terrorism",
            "right": "chủ nghĩa khủng bố; khủng bố"
          },
          {
            "left": "vandalism",
            "right": "hành vi phá hoại tài sản"
          },
          {
            "left": "guilty",
            "right": "có tội"
          },
          {
            "left": "innocent",
            "right": "vô tội"
          },
          {
            "left": "law",
            "right": "luật pháp, luật"
          },
          {
            "left": "police",
            "right": "cảnh sát"
          }
        ]
      },
      {
        "id": "u34-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "arrested",
          "fine",
          "prison",
          "stole",
          "broke into",
          "court",
          "innocent",
          "guilty"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "The police officer ______ him for shoplifting.",
            "hint_vi": "bắt giữ",
            "answer": "arrested"
          },
          {
            "id": "q2",
            "sentence": "He had to pay a ______ of £50.",
            "hint_vi": "tiền phạt",
            "answer": "fine"
          },
          {
            "id": "q3",
            "sentence": "The murderer went to ______ for 20 years.",
            "hint_vi": "nhà tù",
            "answer": "prison"
          },
          {
            "id": "q4",
            "sentence": "Someone ______ my bike last night.",
            "hint_vi": "đã trộm",
            "answer": "stole"
          },
          {
            "id": "q5",
            "sentence": "A burglar ______ our house while we were on holiday.",
            "hint_vi": "đột nhập vào",
            "answer": "broke into"
          },
          {
            "id": "q6",
            "sentence": "He has to go to ______ next week.",
            "hint_vi": "tòa án",
            "answer": "court"
          },
          {
            "id": "q7",
            "sentence": "The man was found ______; he did not commit the crime.",
            "hint_vi": "vô tội",
            "answer": "innocent"
          },
          {
            "id": "q8",
            "sentence": "The jury found her ______ of the robbery.",
            "hint_vi": "có tội",
            "answer": "guilty"
          }
        ]
      },
      {
        "id": "u34-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "What do we call someone who kills another person?",
            "options": [
              "a murderer",
              "a burglar",
              "a shoplifter",
              "a mugger"
            ],
            "answer": "a murderer"
          },
          {
            "id": "q2",
            "question": "What do we call someone who steals from shops?",
            "options": [
              "a shoplifter",
              "a car thief",
              "a drug dealer",
              "a terrorist"
            ],
            "answer": "a shoplifter"
          },
          {
            "id": "q3",
            "question": "What do we call someone who breaks into houses to steal?",
            "options": [
              "a burglar",
              "a robber",
              "a mugger",
              "a vandal"
            ],
            "answer": "a burglar"
          },
          {
            "id": "q4",
            "question": "Which word means 'cướp tài sản của ai đó ở nơi công cộng'?",
            "options": [
              "mug",
              "rob a bank",
              "burgle",
              "shoplift"
            ],
            "answer": "mug"
          },
          {
            "id": "q5",
            "question": "If someone 'takes drugs', they...",
            "options": [
              "use illegal drugs",
              "sell illegal drugs",
              "are a doctor",
              "work for the police"
            ],
            "answer": "use illegal drugs"
          },
          {
            "id": "q6",
            "question": "Football hooliganism is connected with...",
            "options": [
              "violence among football fans",
              "stealing cars",
              "selling drugs",
              "cybercrime"
            ],
            "answer": "violence among football fans"
          }
        ]
      },
      {
        "id": "u34-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A burglar goes into someone's house and steals things.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "Vandals take people's money from their pockets.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "A car thief is someone who steals cars.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "If you are \"guilty\", it means you did not commit the crime.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "\"Rob\" and \"steal\" can both describe taking something illegally.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "A drug dealer sells illegal drugs.",
            "answer": true
          }
        ]
      },
      {
        "id": "u34-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "IREMC",
            "answer": "CRIME"
          },
          {
            "id": "q2",
            "scrambled": "BRBEOR",
            "answer": "ROBBER"
          },
          {
            "id": "q3",
            "scrambled": "PISNRO",
            "answer": "PRISON"
          },
          {
            "id": "q4",
            "scrambled": "UAGBRRL",
            "answer": "BURGLAR"
          },
          {
            "id": "q5",
            "scrambled": "GLYUIT",
            "answer": "GUILTY"
          },
          {
            "id": "q6",
            "scrambled": "ADMAINSVL",
            "answer": "VANDALISM"
          }
        ]
      }
    ]
  },
  35: {
    "unit": {
      "id": "unit-35-media",
      "title": "Unit 35: The media",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u35-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "documentary",
            "right": "phim/chương trình tài liệu"
          },
          {
            "left": "soap opera",
            "right": "phim truyền hình dài tập"
          },
          {
            "left": "cartoon",
            "right": "phim hoạt hình"
          },
          {
            "left": "talk show",
            "right": "chương trình trò chuyện"
          },
          {
            "left": "reality TV",
            "right": "truyền hình thực tế"
          },
          {
            "left": "advertisement",
            "right": "quảng cáo"
          },
          {
            "left": "reporter",
            "right": "phóng viên"
          },
          {
            "left": "journalist",
            "right": "nhà báo"
          },
          {
            "left": "media",
            "right": "truyền thông"
          },
          {
            "left": "magazine",
            "right": "tạp chí"
          }
        ]
      },
      {
        "id": "u35-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "news",
          "channel",
          "documentary",
          "interview",
          "online",
          "advert",
          "reporter",
          "newspaper"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I watch the ______ every evening at 7.",
            "hint_vi": "tin tức",
            "answer": "news"
          },
          {
            "id": "q2",
            "sentence": "Can you change the ______, please?",
            "hint_vi": "kênh",
            "answer": "channel"
          },
          {
            "id": "q3",
            "sentence": "We watched a ______ about the ocean last night.",
            "hint_vi": "phim tài liệu",
            "answer": "documentary"
          },
          {
            "id": "q4",
            "sentence": "There was an ______ with the Prime Minister on TV.",
            "hint_vi": "cuộc phỏng vấn",
            "answer": "interview"
          },
          {
            "id": "q5",
            "sentence": "These days, many people watch TV ______.",
            "hint_vi": "trực tuyến",
            "answer": "online"
          },
          {
            "id": "q6",
            "sentence": "I saw an ______ for a new phone.",
            "hint_vi": "quảng cáo",
            "answer": "advert"
          },
          {
            "id": "q7",
            "sentence": "A ______ went to the scene to get the story.",
            "hint_vi": "phóng viên",
            "answer": "reporter"
          },
          {
            "id": "q8",
            "sentence": "My father reads the morning ______ every day.",
            "hint_vi": "tờ báo",
            "answer": "newspaper"
          }
        ]
      },
      {
        "id": "u35-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which programme has stories about animals and nature?",
            "options": [
              "a nature programme",
              "a talk show",
              "a soap opera",
              "a cartoon"
            ],
            "answer": "a nature programme"
          },
          {
            "id": "q2",
            "question": "Which word means 'phim truyền hình dài tập'?",
            "options": [
              "soaps",
              "the news",
              "a documentary",
              "an advert"
            ],
            "answer": "soaps"
          },
          {
            "id": "q3",
            "question": "A person who writes articles for newspapers is a...",
            "options": [
              "journalist",
              "reporter only",
              "reader",
              "editor's assistant"
            ],
            "answer": "journalist"
          },
          {
            "id": "q4",
            "question": "What do you buy to read the latest news each day?",
            "options": [
              "a newspaper",
              "a cartoon",
              "a talk show",
              "a channel"
            ],
            "answer": "a newspaper"
          },
          {
            "id": "q5",
            "question": "Which is an example of 'reality TV'?",
            "options": [
              "people living in a house together, filmed all day",
              "a cartoon for children",
              "the evening news",
              "a sports match"
            ],
            "answer": "people living in a house together, filmed all day"
          },
          {
            "id": "q6",
            "question": "Which word means something that tries to sell you a product on TV?",
            "options": [
              "an advert",
              "a documentary",
              "a talk show",
              "a soap opera"
            ],
            "answer": "an advert"
          }
        ]
      },
      {
        "id": "u35-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A \"documentary\" is a factual programme about real life.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Soaps\" and \"soap operas\" mean the same thing.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "A \"cartoon\" is always about real news events.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "A \"journalist\" writes for newspapers or magazines.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "An \"evening newspaper\" is sold in the morning only.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "You can watch TV online with an internet connection.",
            "answer": true
          }
        ]
      },
      {
        "id": "u35-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "AORDI",
            "answer": "RADIO"
          },
          {
            "id": "q2",
            "scrambled": "ATORNCO",
            "answer": "CARTOON"
          },
          {
            "id": "q3",
            "scrambled": "ERROETPR",
            "answer": "REPORTER"
          },
          {
            "id": "q4",
            "scrambled": "GIAAMEZN",
            "answer": "MAGAZINE"
          },
          {
            "id": "q5",
            "scrambled": "NHCLENA",
            "answer": "CHANNEL"
          },
          {
            "id": "q6",
            "scrambled": "DRVTEA",
            "answer": "ADVERT"
          }
        ]
      }
    ]
  },
  36: {
    "unit": {
      "id": "unit-36-problems-home-work",
      "title": "Unit 36: Problems at home and work",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u36-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "broken",
            "right": "bị hỏng, bị vỡ"
          },
          {
            "left": "untidy",
            "right": "bừa bộn, không gọn gàng"
          },
          {
            "left": "tidy",
            "right": "gọn gàng, ngăn nắp"
          },
          {
            "left": "repair",
            "right": "sửa chữa"
          },
          {
            "left": "mend",
            "right": "sửa chữa, vá"
          },
          {
            "left": "apologise",
            "right": "xin lỗi"
          },
          {
            "left": "out of order",
            "right": "bị hỏng, không hoạt động"
          },
          {
            "left": "have a row with",
            "right": "cãi nhau với ai"
          },
          {
            "left": "look for",
            "right": "tìm kiếm"
          },
          {
            "left": "in a bad mood",
            "right": "tâm trạng không tốt"
          }
        ]
      },
      {
        "id": "u36-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "broken",
          "working",
          "untidy",
          "lost",
          "repair",
          "cut",
          "apologised",
          "late"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "The window is ______; we need a new one.",
            "hint_vi": "bị vỡ",
            "answer": "broken"
          },
          {
            "id": "q2",
            "sentence": "My phone isn't ______ today.",
            "hint_vi": "hoạt động",
            "answer": "working"
          },
          {
            "id": "q3",
            "sentence": "Your bedroom is very ______; please clean it.",
            "hint_vi": "bừa bộn",
            "answer": "untidy"
          },
          {
            "id": "q4",
            "sentence": "I've ______ my keys again!",
            "hint_vi": "làm mất",
            "answer": "lost"
          },
          {
            "id": "q5",
            "sentence": "Can you ______ my bike? The wheel is broken.",
            "hint_vi": "sửa chữa",
            "answer": "repair"
          },
          {
            "id": "q6",
            "sentence": "I ______ my finger while cooking.",
            "hint_vi": "làm đứt",
            "answer": "cut"
          },
          {
            "id": "q7",
            "sentence": "I ______ to my friend after our argument.",
            "hint_vi": "xin lỗi",
            "answer": "apologised"
          },
          {
            "id": "q8",
            "sentence": "I was ______ for work this morning.",
            "hint_vi": "đến muộn",
            "answer": "late"
          }
        ]
      },
      {
        "id": "u36-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which word describes a machine that has stopped working suddenly?",
            "options": [
              "dying",
              "tidy",
              "working",
              "mended"
            ],
            "answer": "dying"
          },
          {
            "id": "q2",
            "question": "If a lift is 'out of order', it means...",
            "options": [
              "it isn't working",
              "it is very clean",
              "it is very fast",
              "it is new"
            ],
            "answer": "it isn't working"
          },
          {
            "id": "q3",
            "question": "'Have a row with someone' means...",
            "options": [
              "argue with someone",
              "help someone",
              "meet someone",
              "thank someone"
            ],
            "answer": "argue with someone"
          },
          {
            "id": "q4",
            "question": "What do you put on a small cut on your finger?",
            "options": [
              "a plaster",
              "a plate",
              "a plant",
              "a plank"
            ],
            "answer": "a plaster"
          },
          {
            "id": "q5",
            "question": "Which word means the opposite of 'tidy'?",
            "options": [
              "untidy",
              "broken",
              "lost",
              "working"
            ],
            "answer": "untidy"
          },
          {
            "id": "q6",
            "question": "If your computer 'crashed', it means...",
            "options": [
              "it stopped working suddenly",
              "it became very fast",
              "it was cleaned",
              "it was sold"
            ],
            "answer": "it stopped working suddenly"
          }
        ]
      },
      {
        "id": "u36-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "If something is \"broken\", it is working perfectly.",
            "answer": false
          },
          {
            "id": "q2",
            "statement": "\"Mend\" and \"repair\" have a similar meaning.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "An \"untidy\" room is very clean and organised.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "If you \"apologise\", you say sorry.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Too much work\" means you don't have enough work to do.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "If you are \"in a bad mood\", you feel unhappy or irritated.",
            "answer": true
          }
        ]
      },
      {
        "id": "u36-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "KOBNER",
            "answer": "BROKEN"
          },
          {
            "id": "q2",
            "scrambled": "DYNIUT",
            "answer": "UNTIDY"
          },
          {
            "id": "q3",
            "scrambled": "RRPAEI",
            "answer": "REPAIR"
          },
          {
            "id": "q4",
            "scrambled": "PEMOLBR",
            "answer": "PROBLEM"
          },
          {
            "id": "q5",
            "scrambled": "ISOAOGELP",
            "answer": "APOLOGISE"
          },
          {
            "id": "q6",
            "scrambled": "ELASPTR",
            "answer": "PLASTER"
          }
        ]
      }
    ]
  },
  37: {
    "unit": {
      "id": "unit-37-global-problems",
      "title": "Unit 37: Global problems",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u37-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "hurricane",
            "right": "bão lớn, bão nhiệt đới"
          },
          {
            "left": "earthquake",
            "right": "động đất"
          },
          {
            "left": "flood",
            "right": "lũ lụt"
          },
          {
            "left": "forest fire",
            "right": "cháy rừng"
          },
          {
            "left": "snowstorm",
            "right": "bão tuyết"
          },
          {
            "left": "pollution",
            "right": "sự ô nhiễm"
          },
          {
            "left": "homeless",
            "right": "vô gia cư"
          },
          {
            "left": "unemployed",
            "right": "thất nghiệp"
          },
          {
            "left": "on strike",
            "right": "đang đình công"
          },
          {
            "left": "traffic jam",
            "right": "tắc đường"
          }
        ]
      },
      {
        "id": "u37-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "earthquake",
          "flood",
          "polluted",
          "hungry",
          "poor",
          "war",
          "crowded",
          "rush hour"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "An ______ can destroy buildings in seconds.",
            "hint_vi": "động đất",
            "answer": "earthquake"
          },
          {
            "id": "q2",
            "sentence": "Heavy rain caused a ______ in the village.",
            "hint_vi": "lũ lụt",
            "answer": "flood"
          },
          {
            "id": "q3",
            "sentence": "The river is badly ______; you cannot swim there.",
            "hint_vi": "bị ô nhiễm",
            "answer": "polluted"
          },
          {
            "id": "q4",
            "sentence": "Many children go to bed ______ every night.",
            "hint_vi": "đói",
            "answer": "hungry"
          },
          {
            "id": "q5",
            "sentence": "Some ______ families cannot afford enough food.",
            "hint_vi": "nghèo",
            "answer": "poor"
          },
          {
            "id": "q6",
            "sentence": "Millions of people died in the Second World ______.",
            "hint_vi": "chiến tranh",
            "answer": "war"
          },
          {
            "id": "q7",
            "sentence": "Big cities are often very ______.",
            "hint_vi": "đông đúc",
            "answer": "crowded"
          },
          {
            "id": "q8",
            "sentence": "The roads are always busy during the ______.",
            "hint_vi": "giờ cao điểm",
            "answer": "rush hour"
          }
        ]
      },
      {
        "id": "u37-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which of these is a natural disaster?",
            "options": [
              "an earthquake",
              "a traffic jam",
              "a strike",
              "unemployment"
            ],
            "answer": "an earthquake"
          },
          {
            "id": "q2",
            "question": "Which of these is a man-made problem?",
            "options": [
              "pollution",
              "a hurricane",
              "an earthquake",
              "a flood"
            ],
            "answer": "pollution"
          },
          {
            "id": "q3",
            "question": "If someone is 'unemployed', it means...",
            "options": [
              "they don't have a job",
              "they have a lot of money",
              "they are on holiday",
              "they are very busy"
            ],
            "answer": "they don't have a job"
          },
          {
            "id": "q4",
            "question": "When workers refuse to work because they want more money, they are...",
            "options": [
              "on strike",
              "on holiday",
              "unemployed",
              "homeless"
            ],
            "answer": "on strike"
          },
          {
            "id": "q5",
            "question": "Which word describes air, water or land that is dirty and dangerous?",
            "options": [
              "polluted",
              "crowded",
              "flooded",
              "homeless"
            ],
            "answer": "polluted"
          },
          {
            "id": "q6",
            "question": "A 'forest fire' happens when...",
            "options": [
              "a lot of trees burn",
              "there is too much snow",
              "cars crash on the road",
              "the sea rises"
            ],
            "answer": "a lot of trees burn"
          }
        ]
      },
      {
        "id": "u37-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A hurricane is a kind of very strong wind.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Homeless\" people have a comfortable place to live.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "An earthquake is an example of a man-made problem.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "\"Rush hour\" is the quietest time on the roads.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "Pollution can affect air, water, and land.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "A traffic jam means cars can move freely and quickly.",
            "answer": false
          }
        ]
      },
      {
        "id": "u37-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "RHCAEUIRN",
            "answer": "HURRICANE"
          },
          {
            "id": "q2",
            "scrambled": "OOFLD",
            "answer": "FLOOD"
          },
          {
            "id": "q3",
            "scrambled": "TUOPLILNO",
            "answer": "POLLUTION"
          },
          {
            "id": "q4",
            "scrambled": "OSMELEHS",
            "answer": "HOMELESS"
          },
          {
            "id": "q5",
            "scrambled": "CDDREOW",
            "answer": "CROWDED"
          },
          {
            "id": "q6",
            "scrambled": "AEQKRTEUHA",
            "answer": "EARTHQUAKE"
          }
        ]
      }
    ]
  },
  38: {
    "unit": {
      "id": "unit-38-have-had-had",
      "title": "Unit 38: Have / had / had",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u38-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi cụm từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "have a shower",
            "right": "tắm vòi sen"
          },
          {
            "left": "have a look",
            "right": "xem, nhìn qua"
          },
          {
            "left": "have a go",
            "right": "thử làm gì"
          },
          {
            "left": "have a word with",
            "right": "nói chuyện riêng với ai"
          },
          {
            "left": "have a good time",
            "right": "có khoảng thời gian vui vẻ"
          },
          {
            "left": "have got to",
            "right": "phải"
          },
          {
            "left": "have my hair cut",
            "right": "đi cắt tóc"
          },
          {
            "left": "have a meeting",
            "right": "có/tổ chức một cuộc họp"
          },
          {
            "left": "have a row with",
            "right": "cãi nhau với ai"
          },
          {
            "left": "don't have the time",
            "right": "không có thời gian"
          }
        ]
      },
      {
        "id": "u38-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "breakfast",
          "shower",
          "exam",
          "meeting",
          "look",
          "go",
          "word",
          "party"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I have ______ at 7 every morning.",
            "hint_vi": "ăn sáng",
            "answer": "breakfast"
          },
          {
            "id": "q2",
            "sentence": "I have a ______ every morning before school.",
            "hint_vi": "tắm vòi sen",
            "answer": "shower"
          },
          {
            "id": "q3",
            "sentence": "I have an ______ tomorrow, so I need to study.",
            "hint_vi": "kỳ thi",
            "answer": "exam"
          },
          {
            "id": "q4",
            "sentence": "We must have a ______ to talk about the project.",
            "hint_vi": "cuộc họp",
            "answer": "meeting"
          },
          {
            "id": "q5",
            "sentence": "Can I have a ______ at your photos?",
            "hint_vi": "xem qua",
            "answer": "look"
          },
          {
            "id": "q6",
            "sentence": "Can I have a ______ on your bike?",
            "hint_vi": "thử",
            "answer": "go"
          },
          {
            "id": "q7",
            "sentence": "I need to have a ______ with you about the plan.",
            "hint_vi": "nói chuyện riêng",
            "answer": "word"
          },
          {
            "id": "q8",
            "sentence": "We're having a ______ on Saturday evening.",
            "hint_vi": "bữa tiệc",
            "answer": "party"
          }
        ]
      },
      {
        "id": "u38-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which expression means 'to try something'?",
            "options": [
              "have a go",
              "have a row",
              "have a word",
              "have a look"
            ],
            "answer": "have a go"
          },
          {
            "id": "q2",
            "question": "If you 'have a row with' someone, you...",
            "options": [
              "argue with them",
              "help them",
              "dance with them",
              "teach them"
            ],
            "answer": "argue with them"
          },
          {
            "id": "q3",
            "question": "Which phrase do you say to someone leaving on a trip?",
            "options": [
              "Have a good journey!",
              "Have a look!",
              "Have a go!",
              "Have a word!"
            ],
            "answer": "Have a good journey!"
          },
          {
            "id": "q4",
            "question": "'I've got to go now' means...",
            "options": [
              "I must go now",
              "I want to go now",
              "I like going now",
              "I never go"
            ],
            "answer": "I must go now"
          },
          {
            "id": "q5",
            "question": "Which is correct?",
            "options": [
              "have a bath",
              "have a baths",
              "having bath",
              "haves a bath"
            ],
            "answer": "have a bath"
          },
          {
            "id": "q6",
            "question": "'Have my hair cut' means...",
            "options": [
              "go to the hairdresser to cut your hair",
              "cut your hair yourself",
              "wash your hair",
              "dye your hair"
            ],
            "answer": "go to the hairdresser to cut your hair"
          }
        ]
      },
      {
        "id": "u38-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Have a swim\" means to go swimming.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Have a word with someone\" means to write them a long letter.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"Have to\" expresses obligation (something you must do).",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Have a good time\" is something you say when you are angry.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "\"Have a meeting\" and \"have a lesson\" both use the verb 'have'.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"Don't have the time\" means you have plenty of free time.",
            "answer": false
          }
        ]
      },
      {
        "id": "u38-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "RWHSEO",
            "answer": "SHOWER"
          },
          {
            "id": "q2",
            "scrambled": "GNTEEIM",
            "answer": "MEETING"
          },
          {
            "id": "q3",
            "scrambled": "BEFSAATRK",
            "answer": "BREAKFAST"
          },
          {
            "id": "q4",
            "scrambled": "UROJENY",
            "answer": "JOURNEY"
          },
          {
            "id": "q5",
            "scrambled": "AXEM",
            "answer": "EXAM"
          },
          {
            "id": "q6",
            "scrambled": "KWHMOREO",
            "answer": "HOMEWORK"
          }
        ]
      }
    ]
  },
  39: {
    "unit": {
      "id": "unit-39-go-went-gone",
      "title": "Unit 39: Go / went / gone",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u39-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi cụm từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "go shopping",
            "right": "đi mua sắm"
          },
          {
            "left": "go swimming",
            "right": "đi bơi"
          },
          {
            "left": "go dancing",
            "right": "đi khiêu vũ"
          },
          {
            "left": "go sightseeing",
            "right": "đi tham quan"
          },
          {
            "left": "go skiing",
            "right": "đi trượt tuyết"
          },
          {
            "left": "go fishing",
            "right": "đi câu cá"
          },
          {
            "left": "go up",
            "right": "đi lên"
          },
          {
            "left": "go down",
            "right": "đi xuống"
          },
          {
            "left": "go out of",
            "right": "đi ra khỏi"
          },
          {
            "left": "be going to",
            "right": "sẽ, dự định sẽ"
          }
        ]
      },
      {
        "id": "u39-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "shopping",
          "swimming",
          "fishing",
          "up",
          "down",
          "into",
          "out of",
          "by"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "We go ______ every Saturday morning at the market.",
            "hint_vi": "mua sắm",
            "answer": "shopping"
          },
          {
            "id": "q2",
            "sentence": "I go ______ in the pool every week.",
            "hint_vi": "bơi",
            "answer": "swimming"
          },
          {
            "id": "q3",
            "sentence": "My father likes to go ______ at the lake.",
            "hint_vi": "câu cá",
            "answer": "fishing"
          },
          {
            "id": "q4",
            "sentence": "We went ______ the stairs to the third floor.",
            "hint_vi": "đi lên",
            "answer": "up"
          },
          {
            "id": "q5",
            "sentence": "They went ______ the hill to the village.",
            "hint_vi": "đi xuống",
            "answer": "down"
          },
          {
            "id": "q6",
            "sentence": "Please go ______ the room and sit down.",
            "hint_vi": "đi vào",
            "answer": "into"
          },
          {
            "id": "q7",
            "sentence": "She went ______ the house quickly.",
            "hint_vi": "đi ra khỏi",
            "answer": "out of"
          },
          {
            "id": "q8",
            "sentence": "I go to school ______ bus every day.",
            "hint_vi": "bằng",
            "answer": "by"
          }
        ]
      },
      {
        "id": "u39-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which is correct?",
            "options": [
              "go home",
              "go to home",
              "go at home",
              "go for home"
            ],
            "answer": "go home"
          },
          {
            "id": "q2",
            "question": "Which is correct?",
            "options": [
              "go shopping",
              "go to shopping",
              "go for shopping",
              "go at shopping"
            ],
            "answer": "go shopping"
          },
          {
            "id": "q3",
            "question": "Which sentence uses 'be going to' correctly for future plans?",
            "options": [
              "I am going to study tonight.",
              "I am go to study tonight.",
              "I going to study tonight.",
              "I am going study tonight."
            ],
            "answer": "I am going to study tonight."
          },
          {
            "id": "q4",
            "question": "Which is correct?",
            "options": [
              "Did you go there last year?",
              "Did you go to there last year?",
              "Did you went there last year?",
              "Did you go to there yesterday last year?"
            ],
            "answer": "Did you go there last year?"
          },
          {
            "id": "q5",
            "question": "Which is correct?",
            "options": [
              "Where does this bus go?",
              "Where does this bus go to?",
              "Where this bus goes?",
              "Where go this bus?"
            ],
            "answer": "Where does this bus go?"
          },
          {
            "id": "q6",
            "question": "Which is correct?",
            "options": [
              "go sightseeing",
              "go to sightsee",
              "go sightsee",
              "go for sightseeing"
            ],
            "answer": "go sightseeing"
          }
        ]
      },
      {
        "id": "u39-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Go home\" does NOT need the word 'to' before 'home'.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Go swimming\" and \"go fishing\" both use the -ing form after 'go'.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "\"Go to there\" is correct English.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "\"Be going to\" is used to talk about future plans.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "The past simple of \"go\" is \"goed\".",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Go somewhere\" does not need the word 'to' before it.",
            "answer": true
          }
        ]
      },
      {
        "id": "u39-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "NSHPIPOG",
            "answer": "SHOPPING"
          },
          {
            "id": "q2",
            "scrambled": "GNFSIHI",
            "answer": "FISHING"
          },
          {
            "id": "q3",
            "scrambled": "NINADGC",
            "answer": "DANCING"
          },
          {
            "id": "q4",
            "scrambled": "NIKSIG",
            "answer": "SKIING"
          },
          {
            "id": "q5",
            "scrambled": "WGNISMIM",
            "answer": "SWIMMING"
          },
          {
            "id": "q6",
            "scrambled": "NIHGTEEGSIS",
            "answer": "SIGHTSEEING"
          }
        ]
      }
    ]
  },
  40: {
    "unit": {
      "id": "unit-40-do-did-done",
      "title": "Unit 40: Do / did / done",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u40-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi cụm từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "do the gardening",
            "right": "làm vườn"
          },
          {
            "left": "do the washing",
            "right": "giặt quần áo"
          },
          {
            "left": "do the washing-up",
            "right": "rửa bát"
          },
          {
            "left": "do your homework",
            "right": "làm bài tập về nhà"
          },
          {
            "left": "do some exercises",
            "right": "làm một số bài tập"
          },
          {
            "left": "do business with",
            "right": "làm ăn/giao dịch với"
          },
          {
            "left": "do your best",
            "right": "cố gắng hết sức"
          },
          {
            "left": "do nothing",
            "right": "không làm gì cả"
          },
          {
            "left": "What do you do?",
            "right": "Bạn làm nghề gì?"
          },
          {
            "left": "What are ... doing?",
            "right": "... đang làm gì?"
          }
        ]
      },
      {
        "id": "u40-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "gardening",
          "washing-up",
          "homework",
          "exercises",
          "best",
          "nothing",
          "business",
          "that"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "My father does the ______ every weekend.",
            "hint_vi": "làm vườn",
            "answer": "gardening"
          },
          {
            "id": "q2",
            "sentence": "We do the ______ after every meal.",
            "hint_vi": "rửa bát",
            "answer": "washing-up"
          },
          {
            "id": "q3",
            "sentence": "I do my ______ after school every day.",
            "hint_vi": "bài tập về nhà",
            "answer": "homework"
          },
          {
            "id": "q4",
            "sentence": "I do some ______ every morning to stay healthy.",
            "hint_vi": "bài tập thể dục",
            "answer": "exercises"
          },
          {
            "id": "q5",
            "sentence": "Please do your ______ in the exam.",
            "hint_vi": "cố gắng hết sức",
            "answer": "best"
          },
          {
            "id": "q6",
            "sentence": "On Sundays I like to do ______ and just relax.",
            "hint_vi": "không làm gì",
            "answer": "nothing"
          },
          {
            "id": "q7",
            "sentence": "Our company does a lot of ______ with Japan.",
            "hint_vi": "giao dịch",
            "answer": "business"
          },
          {
            "id": "q8",
            "sentence": "Don't do ______! It's dangerous.",
            "hint_vi": "điều đó",
            "answer": "that"
          }
        ]
      },
      {
        "id": "u40-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which question asks about someone's job?",
            "options": [
              "What do you do?",
              "What are you doing?",
              "What did you do?",
              "What do you have?"
            ],
            "answer": "What do you do?"
          },
          {
            "id": "q2",
            "question": "Which question asks about an action happening right now?",
            "options": [
              "What are you doing?",
              "What do you do?",
              "What do you doing?",
              "What you doing?"
            ],
            "answer": "What are you doing?"
          },
          {
            "id": "q3",
            "question": "'Do the washing' means...",
            "options": [
              "wash the clothes",
              "wash the dishes",
              "clean the floor",
              "wash your hair"
            ],
            "answer": "wash the clothes"
          },
          {
            "id": "q4",
            "question": "'Do the washing-up' means...",
            "options": [
              "wash the dishes",
              "wash the clothes",
              "wash the car",
              "wash your hands"
            ],
            "answer": "wash the dishes"
          },
          {
            "id": "q5",
            "question": "Which is correct for talking about your job?",
            "options": [
              "I'm a teacher.",
              "I do a teacher.",
              "I do teacher.",
              "I make a teacher."
            ],
            "answer": "I'm a teacher."
          },
          {
            "id": "q6",
            "question": "'Do business with' means...",
            "options": [
              "have trade/commercial dealings with",
              "become friends with",
              "travel with",
              "study with"
            ],
            "answer": "have trade/commercial dealings with"
          }
        ]
      },
      {
        "id": "u40-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Do the gardening\" means taking care of a garden.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Do the washing-up\" means to clean the car.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "\"What do you do?\" is a common way to ask about someone's job.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Do nothing\" means to be very busy.",
            "answer": false
          },
          {
            "id": "q5",
            "statement": "The past tense of \"do\" is \"did\".",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "\"Do your best\" means to try as hard as you can.",
            "answer": true
          }
        ]
      },
      {
        "id": "u40-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "GNEDGINRA",
            "answer": "GARDENING"
          },
          {
            "id": "q2",
            "scrambled": "OHEMOKWR",
            "answer": "HOMEWORK"
          },
          {
            "id": "q3",
            "scrambled": "SUIBSENS",
            "answer": "BUSINESS"
          },
          {
            "id": "q4",
            "scrambled": "CXSRIEEES",
            "answer": "EXERCISES"
          },
          {
            "id": "q5",
            "scrambled": "TNHONIG",
            "answer": "NOTHING"
          },
          {
            "id": "q6",
            "scrambled": "NIWAHGS",
            "answer": "WASHING"
          }
        ]
      }
    ]
  },
  41: {
    "unit": {
      "id": "unit-41-make",
      "title": "Unit 41: Make / made / made",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u41-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi cụm từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "make a mistake",
            "right": "mắc lỗi"
          },
          {
            "left": "make an appointment",
            "right": "đặt lịch hẹn"
          },
          {
            "left": "make my bed",
            "right": "dọn giường"
          },
          {
            "left": "make a noise",
            "right": "gây ra tiếng ồn"
          },
          {
            "left": "make a mess",
            "right": "làm bừa bộn"
          },
          {
            "left": "make a choice",
            "right": "đưa ra lựa chọn"
          },
          {
            "left": "make a photocopy",
            "right": "photocopy, sao chụp tài liệu"
          },
          {
            "left": "make a video",
            "right": "làm/quay một video"
          },
          {
            "left": "make me feel",
            "right": "khiến tôi cảm thấy"
          },
          {
            "left": "make dinner",
            "right": "nấu bữa tối"
          }
        ]
      },
      {
        "id": "u41-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "make",
          "made",
          "making",
          "mistake",
          "appointment",
          "choice",
          "mess",
          "noise"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "I always ______ a lot of mistakes when I speak English.",
            "hint_vi": "làm, mắc",
            "answer": "make"
          },
          {
            "id": "q2",
            "sentence": "I ______ a ______ yesterday; I forgot her name.",
            "hint_vi": "đã mắc / lỗi",
            "answer": [
              "made",
              "mistake"
            ]
          },
          {
            "id": "q3",
            "sentence": "I'm ______ dinner right now.",
            "hint_vi": "đang nấu",
            "answer": "making"
          },
          {
            "id": "q4",
            "sentence": "We must ______ our choice today.",
            "hint_vi": "đưa ra",
            "answer": "make"
          },
          {
            "id": "q5",
            "sentence": "I need to make an ______ with the dentist.",
            "hint_vi": "lịch hẹn",
            "answer": "appointment"
          },
          {
            "id": "q6",
            "sentence": "Please don't make a ______ in the kitchen.",
            "hint_vi": "bừa bộn",
            "answer": "mess"
          },
          {
            "id": "q7",
            "sentence": "The children are making a ______ upstairs.",
            "hint_vi": "tiếng ồn",
            "answer": "noise"
          },
          {
            "id": "q8",
            "sentence": "You have to make a ______ between the two jobs.",
            "hint_vi": "lựa chọn",
            "answer": "choice"
          }
        ]
      },
      {
        "id": "u41-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which is correct?",
            "options": [
              "make breakfast",
              "do breakfast",
              "take breakfast",
              "have made breakfast"
            ],
            "answer": "make breakfast"
          },
          {
            "id": "q2",
            "question": "'That song makes me feel happy' means...",
            "options": [
              "the song causes a happy feeling",
              "the song is about happiness",
              "I wrote a happy song",
              "I don't like the song"
            ],
            "answer": "the song causes a happy feeling"
          },
          {
            "id": "q3",
            "question": "Which is correct?",
            "options": [
              "make a photocopy",
              "do a photocopy",
              "take a photocopy",
              "have a photocopy"
            ],
            "answer": "make a photocopy"
          },
          {
            "id": "q4",
            "question": "Which is correct for tidying your bed in the morning?",
            "options": [
              "make my bed",
              "do my bed",
              "take my bed",
              "have my bed"
            ],
            "answer": "make my bed"
          },
          {
            "id": "q5",
            "question": "Which is correct?",
            "options": [
              "make an appointment",
              "do an appointment",
              "take an appointment",
              "have made an appointment only"
            ],
            "answer": "make an appointment"
          },
          {
            "id": "q6",
            "question": "Which is correct?",
            "options": [
              "make a mistake",
              "do a mistake",
              "take a mistake",
              "have a mistake"
            ],
            "answer": "make a mistake"
          }
        ]
      },
      {
        "id": "u41-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Make a noise\" means to be very quiet.",
            "answer": false
          },
          {
            "id": "q2",
            "statement": "\"Make a mistake\" means to do something wrong.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "You say \"make my bed\", not \"do my bed\".",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Make a choice\" means to decide between options.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Make a mess\" means to tidy a room.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Make an appointment\" means to arrange a meeting time.",
            "answer": true
          }
        ]
      },
      {
        "id": "u41-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "TMKSEIA",
            "answer": "MISTAKE"
          },
          {
            "id": "q2",
            "scrambled": "EICOCH",
            "answer": "CHOICE"
          },
          {
            "id": "q3",
            "scrambled": "ENIOS",
            "answer": "NOISE"
          },
          {
            "id": "q4",
            "scrambled": "OOYOPHCTP",
            "answer": "PHOTOCOPY"
          },
          {
            "id": "q5",
            "scrambled": "OMETTIPAPNN",
            "answer": "APPOINTMENT"
          },
          {
            "id": "q6",
            "scrambled": "EFRTAAKBS",
            "answer": "BREAKFAST"
          }
        ]
      }
    ]
  },
  42: {
    "unit": {
      "id": "unit-42-come",
      "title": "Unit 42: Come / came / come",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u42-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi cụm từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "come in",
            "right": "đi vào, bước vào"
          },
          {
            "left": "come out of",
            "right": "đi ra khỏi"
          },
          {
            "left": "come back",
            "right": "quay lại, trở lại"
          },
          {
            "left": "come home",
            "right": "về nhà"
          },
          {
            "left": "come from",
            "right": "đến từ, xuất thân từ"
          },
          {
            "left": "come along",
            "right": "đi cùng; đi theo"
          },
          {
            "left": "come and see me",
            "right": "đến thăm tôi"
          },
          {
            "left": "come into",
            "right": "đi vào bên trong"
          },
          {
            "left": "come out",
            "right": "đi ra; xuất hiện"
          },
          {
            "left": "come back from",
            "right": "trở về từ"
          }
        ]
      },
      {
        "id": "u42-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "in",
          "into",
          "out of",
          "back",
          "from",
          "along"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "Please come ______; the door is open.",
            "hint_vi": "vào",
            "answer": "in"
          },
          {
            "id": "q2",
            "sentence": "She came ______ the room quietly.",
            "hint_vi": "vào bên trong",
            "answer": "into"
          },
          {
            "id": "q3",
            "sentence": "He came ______ the house and locked the door.",
            "hint_vi": "ra khỏi",
            "answer": "out of"
          },
          {
            "id": "q4",
            "sentence": "What time will you come ______ tonight?",
            "hint_vi": "trở lại",
            "answer": "back"
          },
          {
            "id": "q5",
            "sentence": "Where do you come ______?",
            "hint_vi": "đến từ",
            "answer": "from"
          },
          {
            "id": "q6",
            "sentence": "We're going to the cinema. Do you want to come ______?",
            "hint_vi": "đi cùng",
            "answer": "along"
          }
        ]
      },
      {
        "id": "u42-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which phrase asks about someone's nationality/origin?",
            "options": [
              "Where do you come from?",
              "Where do you come in?",
              "Where do you come back?",
              "Where do you come along?"
            ],
            "answer": "Where do you come from?"
          },
          {
            "id": "q2",
            "question": "Which is correct when inviting someone to join you?",
            "options": [
              "Do you want to come along?",
              "Do you want to come out of?",
              "Do you want to come into?",
              "Do you want to come back from?"
            ],
            "answer": "Do you want to come along?"
          },
          {
            "id": "q3",
            "question": "'I came back from London yesterday' means...",
            "options": [
              "I returned from London yesterday",
              "I am going to London tomorrow",
              "I live in London",
              "I have never been to London"
            ],
            "answer": "I returned from London yesterday"
          },
          {
            "id": "q4",
            "question": "Which is correct?",
            "options": [
              "come home",
              "come to home",
              "come at home",
              "come for home"
            ],
            "answer": "come home"
          },
          {
            "id": "q5",
            "question": "'Come and see me soon' means...",
            "options": [
              "visit me soon",
              "call me soon",
              "write to me soon",
              "forget me soon"
            ],
            "answer": "visit me soon"
          },
          {
            "id": "q6",
            "question": "Which sentence uses 'come out of' correctly?",
            "options": [
              "He came out of the house.",
              "He came out of see me.",
              "He came out from house.",
              "He came the house out."
            ],
            "answer": "He came out of the house."
          }
        ]
      },
      {
        "id": "u42-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Come in\" is what you say to invite someone into a room.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Come from\" is used to talk about where someone is originally from.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "\"Come back\" means to leave forever.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "\"Come along\" can mean 'come with us'.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Come home\" needs the word 'to' before 'home'.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "The past tense of \"come\" is \"comed\".",
            "answer": false
          }
        ]
      },
      {
        "id": "u42-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "CMEO",
            "answer": "COME"
          },
          {
            "id": "q2",
            "scrambled": "MCAE",
            "answer": "CAME"
          },
          {
            "id": "q3",
            "scrambled": "NLGOA",
            "answer": "ALONG"
          },
          {
            "id": "q4",
            "scrambled": "KBCA",
            "answer": "BACK"
          },
          {
            "id": "q5",
            "scrambled": "CNEFRA",
            "answer": "FRANCE"
          },
          {
            "id": "q6",
            "scrambled": "ITVENAM",
            "answer": "VIETNAM"
          }
        ]
      }
    ]
  },
  43: {
    "unit": {
      "id": "unit-43-take",
      "title": "Unit 43: Take / took / taken",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u43-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi cụm từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "take a photo",
            "right": "chụp ảnh"
          },
          {
            "left": "take an exam",
            "right": "tham gia/làm một bài thi"
          },
          {
            "left": "take a course",
            "right": "tham gia một khóa học"
          },
          {
            "left": "take the bus",
            "right": "đi xe buýt"
          },
          {
            "left": "take the underground",
            "right": "đi tàu điện ngầm"
          },
          {
            "left": "take a taxi",
            "right": "đi taxi"
          },
          {
            "left": "take the train",
            "right": "đi tàu hỏa"
          },
          {
            "left": "take sth with you",
            "right": "mang theo thứ gì"
          },
          {
            "left": "How long does it take?",
            "right": "mất bao lâu?"
          },
          {
            "left": "take some lessons",
            "right": "học một số buổi học"
          }
        ]
      },
      {
        "id": "u43-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "exam",
          "course",
          "train",
          "taxi",
          "photo",
          "bus",
          "underground",
          "passport"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "At the end of the year, you have to take an ______.",
            "hint_vi": "kỳ thi",
            "answer": "exam"
          },
          {
            "id": "q2",
            "sentence": "I'm going to take an English ______ next month.",
            "hint_vi": "khóa học",
            "answer": "course"
          },
          {
            "id": "q3",
            "sentence": "We take the ______ to London every summer.",
            "hint_vi": "tàu hỏa",
            "answer": "train"
          },
          {
            "id": "q4",
            "sentence": "It's late, let's take a ______ home.",
            "hint_vi": "taxi",
            "answer": "taxi"
          },
          {
            "id": "q5",
            "sentence": "Can you take a ______ of us in front of the tower?",
            "hint_vi": "tấm ảnh",
            "answer": "photo"
          },
          {
            "id": "q6",
            "sentence": "I take the ______ to school every morning.",
            "hint_vi": "xe buýt",
            "answer": "bus"
          },
          {
            "id": "q7",
            "sentence": "In big cities, many people take the ______ to work.",
            "hint_vi": "tàu điện ngầm",
            "answer": "underground"
          },
          {
            "id": "q8",
            "sentence": "Don't forget to take your ______ with you.",
            "hint_vi": "hộ chiếu",
            "answer": "passport"
          }
        ]
      },
      {
        "id": "u43-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Which question asks about duration?",
            "options": [
              "How long does it take?",
              "How much does it take?",
              "How many does it take?",
              "How far does it take?"
            ],
            "answer": "How long does it take?"
          },
          {
            "id": "q2",
            "question": "Which is correct?",
            "options": [
              "take a photo",
              "make a photo",
              "do a photo",
              "have a photo"
            ],
            "answer": "take a photo"
          },
          {
            "id": "q3",
            "question": "Which is correct for going somewhere by public transport?",
            "options": [
              "take the bus",
              "make the bus",
              "do the bus",
              "have the bus"
            ],
            "answer": "take the bus"
          },
          {
            "id": "q4",
            "question": "'It takes me 20 minutes to get to school' means...",
            "options": [
              "My journey to school lasts 20 minutes",
              "I leave home at 20 minutes past the hour",
              "School lasts 20 minutes",
              "I have 20 minutes of homework"
            ],
            "answer": "My journey to school lasts 20 minutes"
          },
          {
            "id": "q5",
            "question": "Which is correct?",
            "options": [
              "take an exam",
              "make an exam",
              "do an exam only",
              "have an exam only"
            ],
            "answer": "take an exam"
          },
          {
            "id": "q6",
            "question": "Which is correct?",
            "options": [
              "take some piano lessons",
              "make some piano lessons",
              "do some piano lessons",
              "have made some piano lessons"
            ],
            "answer": "take some piano lessons"
          }
        ]
      },
      {
        "id": "u43-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Take a photo\" means to make a picture with a camera.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Take the bus\" and \"take the train\" both describe using public transport.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "\"It takes me 10 minutes\" describes how much money something costs.",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "\"Take an exam\" means to sit a test.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "The past simple of \"take\" is \"taked\".",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Take a course\" means to study a subject or program.",
            "answer": true
          }
        ]
      },
      {
        "id": "u43-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "XAIT",
            "answer": "TAXI"
          },
          {
            "id": "q2",
            "scrambled": "RECUOS",
            "answer": "COURSE"
          },
          {
            "id": "q3",
            "scrambled": "PAGHOTRHOP",
            "answer": "PHOTOGRAPH"
          },
          {
            "id": "q4",
            "scrambled": "GNRDOENDUUR",
            "answer": "UNDERGROUND"
          },
          {
            "id": "q5",
            "scrambled": "OPTRSPAS",
            "answer": "PASSPORT"
          },
          {
            "id": "q6",
            "scrambled": "ESNSLO",
            "answer": "LESSON"
          }
        ]
      }
    ]
  },
  44: {
    "unit": {
      "id": "unit-44-bring",
      "title": "Unit 44: Bring / brought / brought",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u44-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi từ/cụm từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "bring",
            "right": "mang đến"
          },
          {
            "left": "take",
            "right": "mang đi"
          },
          {
            "left": "bring sb sth",
            "right": "mang/đem thứ gì cho ai"
          },
          {
            "left": "bring sth back",
            "right": "mang thứ gì trở lại; mang trả lại"
          }
        ]
      },
      {
        "id": "u44-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống (bring / take)",
        "instructions_vi": "Điền 'bring' hoặc 'take' (chia đúng dạng) vào chỗ trống.",
        "word_bank": [
          "bring",
          "take",
          "brought",
          "took"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "Can you ______ me some water, please? (I'm sitting here, you're in the kitchen)",
            "hint_vi": "mang đến (hướng về người nói)",
            "answer": "bring"
          },
          {
            "id": "q2",
            "sentence": "______ your umbrella when you leave; it's raining outside.",
            "hint_vi": "mang đi (hướng ra xa người nói)",
            "answer": "Take",
            "accepted_answers": [
              "Take",
              "take"
            ]
          },
          {
            "id": "q3",
            "sentence": "She always ______ me a present when she visits.",
            "hint_vi": "mang đến (thì hiện tại)",
            "answer": "brings",
            "accepted_answers": [
              "brings",
              "bring"
            ]
          },
          {
            "id": "q4",
            "sentence": "Yesterday, he ______ his guitar to the party.",
            "hint_vi": "mang đến (thì quá khứ)",
            "answer": "brought"
          },
          {
            "id": "q5",
            "sentence": "Please ______ these letters to the post office.",
            "hint_vi": "mang đi",
            "answer": "take"
          },
          {
            "id": "q6",
            "sentence": "I'll ______ you a souvenir from Japan.",
            "hint_vi": "mang đến (tương lai)",
            "answer": "bring"
          }
        ]
      },
      {
        "id": "u44-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "You are at home. Your friend is coming to visit. You say:",
            "options": [
              "Bring some snacks!",
              "Take some snacks!",
              "Make some snacks!",
              "Do some snacks!"
            ],
            "answer": "Bring some snacks!"
          },
          {
            "id": "q2",
            "question": "You are leaving home to go to work. You say:",
            "options": [
              "I'll take my laptop.",
              "I'll bring my laptop.",
              "I'll make my laptop.",
              "I'll do my laptop."
            ],
            "answer": "I'll take my laptop."
          },
          {
            "id": "q3",
            "question": "'Bring sth back' means...",
            "options": [
              "return something",
              "buy something new",
              "lose something",
              "break something"
            ],
            "answer": "return something"
          },
          {
            "id": "q4",
            "question": "Which is correct for the past tense of 'bring'?",
            "options": [
              "brought",
              "bringed",
              "brang",
              "broughted"
            ],
            "answer": "brought"
          },
          {
            "id": "q5",
            "question": "'Can you bring me my glasses?' — the speaker is asking the listener to move the glasses...",
            "options": [
              "towards the speaker",
              "away from the speaker",
              "nowhere",
              "to a shop"
            ],
            "answer": "towards the speaker"
          },
          {
            "id": "q6",
            "question": "Which sentence is correct?",
            "options": [
              "He took his umbrella when he left.",
              "He brang his umbrella when he left.",
              "He bringed his umbrella when he left.",
              "He take his umbrella when he left."
            ],
            "answer": "He took his umbrella when he left."
          }
        ]
      },
      {
        "id": "u44-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Bring\" describes movement towards the speaker.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Take\" describes movement away from the speaker.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "The past tense of \"bring\" is \"bringed\".",
            "answer": false
          },
          {
            "id": "q4",
            "statement": "\"Bring something back\" means to return it.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Take\" and \"bring\" always mean exactly the same thing.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"Bring sb sth\" means to give someone something you carried to them.",
            "answer": true
          }
        ]
      },
      {
        "id": "u44-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "RBNGI",
            "answer": "BRING"
          },
          {
            "id": "q2",
            "scrambled": "HOGBTRU",
            "answer": "BROUGHT"
          },
          {
            "id": "q3",
            "scrambled": "PRENTES",
            "answer": "PRESENT"
          },
          {
            "id": "q4",
            "scrambled": "BRULLMEA",
            "answer": "UMBRELLA"
          },
          {
            "id": "q5",
            "scrambled": "AEHCCSOTOL",
            "answer": "CHOCOLATES"
          },
          {
            "id": "q6",
            "scrambled": "ROLFSWE",
            "answer": "FLOWERS"
          }
        ]
      }
    ]
  },
  45: {
    "unit": {
      "id": "unit-45-get",
      "title": "Unit 45: Get / got / got",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u45-ex1-matching",
        "type": "matching",
        "title": "Nối từ với nghĩa",
        "instructions_vi": "Nối mỗi cụm từ ở cột trái với nghĩa đúng ở cột phải.",
        "pairs": [
          {
            "left": "get married",
            "right": "kết hôn"
          },
          {
            "left": "get to",
            "right": "đến một nơi"
          },
          {
            "left": "get back",
            "right": "trở lại; trở về"
          },
          {
            "left": "get up",
            "right": "thức dậy; đứng dậy"
          },
          {
            "left": "get there",
            "right": "đến đó"
          },
          {
            "left": "get + adjective",
            "right": "trở nên..."
          },
          {
            "left": "get + noun",
            "right": "có, nhận, lấy, mua được..."
          }
        ]
      },
      {
        "id": "u45-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "Điền từ vào chỗ trống",
        "instructions_vi": "Dùng các từ trong Word Bank để hoàn thành câu.",
        "word_bank": [
          "dark",
          "cold",
          "wet",
          "better",
          "married",
          "up",
          "back"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "It's getting ______ outside; let's turn on the lights.",
            "hint_vi": "tối",
            "answer": "dark"
          },
          {
            "id": "q2",
            "sentence": "Please close the window, I'm getting ______.",
            "hint_vi": "lạnh",
            "answer": "cold"
          },
          {
            "id": "q3",
            "sentence": "It's raining and I'm getting ______!",
            "hint_vi": "ướt",
            "answer": "wet"
          },
          {
            "id": "q4",
            "sentence": "She was ill, but now she's getting ______.",
            "hint_vi": "khỏe hơn",
            "answer": "better"
          },
          {
            "id": "q5",
            "sentence": "They are getting ______ next spring.",
            "hint_vi": "kết hôn",
            "answer": "married"
          },
          {
            "id": "q6",
            "sentence": "I get ______ at six every morning.",
            "hint_vi": "thức dậy",
            "answer": "up"
          },
          {
            "id": "q7",
            "sentence": "What time did you get ______ from the party?",
            "hint_vi": "trở về",
            "answer": "back"
          }
        ]
      },
      {
        "id": "u45-ex3-multiple-choice",
        "type": "multiple_choice",
        "title": "Trắc nghiệm",
        "instructions_vi": "Chọn đáp án đúng nhất cho mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "question": "'It's getting dark' describes a change in...",
            "options": [
              "light level",
              "temperature",
              "weight",
              "price"
            ],
            "answer": "light level"
          },
          {
            "id": "q2",
            "question": "Which means 'to arrive somewhere'?",
            "options": [
              "get to",
              "get up",
              "get back",
              "get married"
            ],
            "answer": "get to"
          },
          {
            "id": "q3",
            "question": "Which means 'to wake up and rise from bed'?",
            "options": [
              "get up",
              "get back",
              "get to",
              "get married"
            ],
            "answer": "get up"
          },
          {
            "id": "q4",
            "question": "'What time did you get back?' asks about...",
            "options": [
              "when you returned",
              "when you left",
              "when you woke up",
              "when you ate"
            ],
            "answer": "when you returned"
          },
          {
            "id": "q5",
            "question": "'I got a new phone' means...",
            "options": [
              "I obtained/received a new phone",
              "I lost my phone",
              "I broke my phone",
              "I sold my phone"
            ],
            "answer": "I obtained/received a new phone"
          },
          {
            "id": "q6",
            "question": "Which sentence correctly uses 'get + adjective'?",
            "options": [
              "It's getting cold.",
              "It's getting a cold.",
              "It gets colds.",
              "It's get cold."
            ],
            "answer": "It's getting cold."
          }
        ]
      },
      {
        "id": "u45-ex4-true-false",
        "type": "true_false",
        "title": "Đúng hay Sai",
        "instructions_vi": "Xác định câu sau đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "\"Get married\" means to become someone's husband or wife.",
            "answer": true
          },
          {
            "id": "q2",
            "statement": "\"Get up\" means to go to sleep.",
            "answer": false
          },
          {
            "id": "q3",
            "statement": "The past tense of \"get\" is \"got\".",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "\"Get to\" can be followed by a place, e.g. 'get to work'.",
            "answer": true
          },
          {
            "id": "q5",
            "statement": "\"Get there\" means to leave a place.",
            "answer": false
          },
          {
            "id": "q6",
            "statement": "\"It's getting dark\" means the light is decreasing.",
            "answer": true
          }
        ]
      },
      {
        "id": "u45-ex5-unscramble",
        "type": "unscramble",
        "title": "Sắp xếp lại chữ cái",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "RAERDMI",
            "answer": "MARRIED"
          },
          {
            "id": "q2",
            "scrambled": "BTRETE",
            "answer": "BETTER"
          },
          {
            "id": "q3",
            "scrambled": "KRDA",
            "answer": "DARK"
          },
          {
            "id": "q4",
            "scrambled": "APTSM",
            "answer": "STAMP"
          },
          {
            "id": "q5",
            "scrambled": "AEPRWESNP",
            "answer": "NEWSPAPER"
          },
          {
            "id": "q6",
            "scrambled": "LLRUAEMB",
            "answer": "UMBRELLA"
          }
        ]
      }
    ]
  }
};
