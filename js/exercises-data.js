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
  }
};
