const DETAILED_EXERCISES_DATA = {
  1: {
  "unit": {
    "id": "ex-u1-family-tree",
    "title": "Family Tree - Relatives",
    "level": "A2-B1",
    "language_pair": {
      "target": "en",
      "native": "vi"
    }
  },
  "exercises": [
    {
      "id": "ex1-family-tree-sentences",
      "type": "sentence_completion",
      "title": "Look at the family tree. Complete the sentences.",
      "instructions_vi": "Nhìn vào sơ đồ gia đình và hoàn thành các câu bằng từ chỉ quan hệ họ hàng đúng.",
      "context": {
        "description": "A family tree for some of Anne and Ivan Sorokin's relatives.",
        "family_tree": {
          "people": [
            {
              "id": "henry",
              "name": "Henry",
              "spouse": "diana"
            },
            {
              "id": "diana",
              "name": "Diana",
              "spouse": "henry"
            },
            {
              "id": "amelia",
              "name": "Amelia",
              "parents": [
                "henry",
                "diana"
              ]
            },
            {
              "id": "ivan",
              "name": "Ivan",
              "parents": [
                "henry",
                "diana"
              ],
              "spouse": "anne"
            },
            {
              "id": "anne",
              "name": "Anne",
              "spouse": "ivan"
            },
            {
              "id": "george",
              "name": "George",
              "parents": [
                "henry",
                "diana"
              ],
              "spouse": "meena"
            },
            {
              "id": "meena",
              "name": "Meena",
              "spouse": "george"
            },
            {
              "id": "karen",
              "name": "Karen",
              "parents": [
                "ivan",
                "anne"
              ]
            },
            {
              "id": "jack",
              "name": "Jack",
              "parents": [
                "ivan",
                "anne"
              ]
            },
            {
              "id": "ravi",
              "name": "Ravi",
              "parents": [
                "george",
                "meena"
              ]
            },
            {
              "id": "kavita",
              "name": "Kavita",
              "parents": [
                "george",
                "meena"
              ]
            }
          ]
        }
      },
      "questions": [
        {
          "id": "q1",
          "sentence": "Kavita is Ravi's ______.",
          "answer": "sister",
          "example": true
        },
        {
          "id": "q2",
          "sentence": "Ravi is Kavita's ______.",
          "answer": "brother"
        },
        {
          "id": "q3",
          "sentence": "Anne is Kavita's ______.",
          "answer": "aunt"
        },
        {
          "id": "q4",
          "sentence": "Ivan is Ravi's ______.",
          "answer": "uncle"
        },
        {
          "id": "q5",
          "sentence": "Diana is Ravi's ______.",
          "answer": "grandmother"
        },
        {
          "id": "q6",
          "sentence": "Henry is Kavita's ______.",
          "answer": "grandfather"
        },
        {
          "id": "q7",
          "sentence": "Ravi is Ivan's ______.",
          "answer": "nephew"
        },
        {
          "id": "q8",
          "sentence": "Kavita is Ivan's ______.",
          "answer": "niece"
        },
        {
          "id": "q9",
          "sentence": "Meena is Kavita's ______.",
          "answer": "mother"
        },
        {
          "id": "q10",
          "sentence": "Meena is George's ______.",
          "answer": "wife"
        },
        {
          "id": "q11",
          "sentence": "Karen is Ravi's ______.",
          "answer": "cousin"
        }
      ]
    },
    {
      "id": "ex2-cloze-relatives",
      "type": "cloze_reading",
      "title": "The Sorokins have some other relatives. Complete the sentences about them.",
      "instructions_vi": "Điền từ chỉ quan hệ họ hàng thích hợp vào các chỗ trống được đánh số trong đoạn văn.",
      "context": {
        "description": "Additional relatives introduced: Sanjay (Meena's brother) and his family, and Alexander & Leila (Henry's parents).",
        "people": [
          {
            "id": "sanjay",
            "name": "Sanjay",
            "note": "Meena's brother"
          },
          {
            "id": "prem",
            "name": "Prem",
            "parents": [
              "sanjay"
            ]
          },
          {
            "id": "alexander",
            "name": "Alexander",
            "spouse": "leila"
          },
          {
            "id": "leila",
            "name": "Leila",
            "spouse": "alexander"
          }
        ]
      },
      "passage": "Meena has a brother, Sanjay. Sanjay is Kavita and Ravi's {1} and Sanjay's wife is their {2}. Sanjay and his wife have one son, Prem. Prem is an {3}. Henry's parents are still alive. Alexander is Henry's {4} and his {5}, Leila, is Henry's {6}. Alexander and Leila have three {7} — Amelia, Ivan and George. Ivan and George and their {8}, Anne and Meena, love their {9} and visit them as often as possible.",
      "blanks": [
        {
          "id": "1",
          "answer": "uncle",
          "example": true
        },
        {
          "id": "2",
          "answer": "aunt"
        },
        {
          "id": "3",
          "answer": "only child"
        },
        {
          "id": "4",
          "answer": "father"
        },
        {
          "id": "5",
          "answer": "wife"
        },
        {
          "id": "6",
          "answer": "mother"
        },
        {
          "id": "7",
          "answer": "grandchildren"
        },
        {
          "id": "8",
          "answer": "wives"
        },
        {
          "id": "9",
          "answer": "grandparents"
        }
      ]
    }
  ]
},
  2: {
    "unit": {
      "id": "unit-2-life-events-detailed",
      "title": "Unit 2: Life Events - Bài tập chi tiết (Workbook)",
      "level": "A2-B1",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Một số câu có nhiều đáp án đúng. Trường 'answer' có thể là 1 chuỗi hoặc 1 mảng các đáp án được chấp nhận (accepted_answers) — hệ thống chấm nên so khớp không phân biệt hoa/thường và chấp nhận bất kỳ đáp án nào trong danh sách là đúng."
    },
    "exercises": [
      {
        "id": "u2d-ex1-word-definition",
        "type": "word_from_definition",
        "title": "2.1. Find a word which means...",
        "instructions_vi": "Tìm từ phù hợp với định nghĩa được cho.",
        "questions": [
          {
            "id": "q1",
            "clue": "The name for a woman on her wedding day.",
            "answer": "bride",
            "example": true
          },
          {
            "id": "q2",
            "clue": "The name for a man on his wedding day.",
            "answer": "groom",
            "accepted_answers": [
              "groom",
              "bridegroom"
            ]
          },
          {
            "id": "q3",
            "clue": "What you are if you haven't got a partner.",
            "answer": "single"
          },
          {
            "id": "q4",
            "clue": "To be 57 kilograms.",
            "answer": "weigh"
          },
          {
            "id": "q5",
            "clue": "What you are if your marriage has legally ended.",
            "answer": "divorced"
          },
          {
            "id": "q6",
            "clue": "A religious service for a dead person.",
            "answer": "funeral"
          },
          {
            "id": "q7",
            "clue": "A holiday after a wedding.",
            "answer": "honeymoon"
          },
          {
            "id": "q8",
            "clue": "What you are if your husband or wife dies.",
            "answer": "widowed"
          }
        ]
      },
      {
        "id": "u2d-ex2-cloze",
        "type": "cloze_reading",
        "title": "2.2. Complete the sentences with words from the box.",
        "instructions_vi": "Điền từ thích hợp trong khung vào chỗ trống được đánh số.",
        "word_bank": [
          "in",
          "after",
          "of",
          "to",
          "born",
          "on"
        ],
        "passage": "In 2003 Anne got married {2} Daniel Smith. Unfortunately, Daniel's grandmother, Lydia Smith, died {3} old age soon after their wedding. Daniel and Anne were {4} their honeymoon when she died. Anne's baby daughter was {5} two years later. They called the baby Lydia, {6} Daniel's grandmother.",
        "blanks": [
          {
            "id": "1",
            "answer": "in",
            "example": true
          },
          {
            "id": "2",
            "answer": "to"
          },
          {
            "id": "3",
            "answer": "of"
          },
          {
            "id": "4",
            "answer": "on"
          },
          {
            "id": "5",
            "answer": "born"
          },
          {
            "id": "6",
            "answer": "after"
          }
        ]
      },
      {
        "id": "u2d-ex3-sentence-writing",
        "type": "sentence_construction",
        "title": "2.3. When were these people born and when did they die? Write sentences.",
        "instructions_vi": "Viết câu hoàn chỉnh theo mẫu, dùng năm sinh và năm mất được cho. Chấp nhận nhiều cách diễn đạt miễn có đủ các từ khóa bắt buộc.",
        "pattern": "[Name] was born in [birth year] and died in [death year].",
        "questions": [
          {
            "id": "q1",
            "name": "Genghis Khan",
            "birth_year": "1162",
            "death_year": "1227",
            "answer": "Genghis Khan was born in 1162 and died in 1227.",
            "example": true
          },
          {
            "id": "q2",
            "name": "Christopher Columbus",
            "birth_year": "1451",
            "death_year": "1506",
            "answer": "Christopher Columbus was born in 1451 and died in 1506.",
            "required_keywords": [
              "born",
              "1451",
              "died",
              "1506"
            ]
          },
          {
            "id": "q3",
            "name": "Leonardo da Vinci",
            "birth_year": "1452",
            "death_year": "1519",
            "answer": "Leonardo da Vinci was born in 1452 and died in 1519.",
            "required_keywords": [
              "born",
              "1452",
              "died",
              "1519"
            ]
          },
          {
            "id": "q4",
            "name": "Princess Diana",
            "birth_year": "1961",
            "death_year": "1997",
            "answer": "Princess Diana was born in 1961 and died in 1997.",
            "required_keywords": [
              "born",
              "1961",
              "died",
              "1997"
            ]
          },
          {
            "id": "q5",
            "name": "Heath Ledger",
            "birth_year": "1979",
            "death_year": "2008",
            "answer": "Heath Ledger was born in 1979 and died in 2008.",
            "required_keywords": [
              "born",
              "1979",
              "died",
              "2008"
            ]
          }
        ]
      },
      {
        "id": "u2d-ex4-word-form",
        "type": "fill_in_the_blank",
        "title": "2.4. Complete the sentences using died, dead or death.",
        "instructions_vi": "Chọn đúng dạng từ (died / dead / death) để điền vào chỗ trống.",
        "word_bank": [
          "died",
          "dead",
          "death"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "Kelly's grandfather ______ last year.",
            "answer": "died",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "His ______ made her very sad.",
            "answer": "death"
          },
          {
            "id": "q3",
            "sentence": "Her grandmother has been ______ for five years now.",
            "answer": "dead"
          },
          {
            "id": "q4",
            "sentence": "She ______ of a heart attack.",
            "answer": "died"
          },
          {
            "id": "q5",
            "sentence": "Now all Kelly's grandparents are ______.",
            "answer": "dead"
          }
        ]
      }
    ]
  },
  3: {
    "unit": {
      "id": "unit-3-body-detailed",
      "title": "Unit 3: The Body - Bài tập chi tiết (Workbook)",
      "level": "A2-B1",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Một số câu có nhiều đáp án đúng. Trường 'answer' có thể là 1 chuỗi hoặc mảng 'accepted_answers' — hệ thống chấm nên so khớp không phân biệt hoa/thường và chấp nhận bất kỳ đáp án nào trong danh sách."
    },
    "exercises": [
      {
        "id": "u3d-ex1-unscramble",
        "type": "unscramble",
        "title": "3.1. Unscramble the parts of the body.",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ chỉ bộ phận cơ thể đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "eken",
            "answer": "knee",
            "example": true
          },
          {
            "id": "q2",
            "scrambled": "osen",
            "answer": "nose"
          },
          {
            "id": "q3",
            "scrambled": "rathe",
            "answer": "heart"
          },
          {
            "id": "q4",
            "scrambled": "hamcost",
            "answer": "stomach"
          },
          {
            "id": "q5",
            "scrambled": "olderush",
            "answer": "shoulder"
          },
          {
            "id": "q6",
            "scrambled": "are",
            "answer": "ear"
          },
          {
            "id": "q7",
            "scrambled": "hotot",
            "answer": "tooth"
          },
          {
            "id": "q8",
            "scrambled": "buhtm",
            "answer": "thumb"
          },
          {
            "id": "q9",
            "scrambled": "akbc",
            "answer": "back"
          },
          {
            "id": "q10",
            "scrambled": "tiwas",
            "answer": "waist"
          }
        ]
      },
      {
        "id": "u3d-ex2-fill-blank",
        "type": "fill_in_the_blank",
        "title": "3.2. Complete these sentences.",
        "instructions_vi": "Điền từ thích hợp vào chỗ trống. Một số câu có nhiều đáp án đúng.",
        "questions": [
          {
            "id": "q1",
            "sentence": "A hand has five ______.",
            "answer": "fingers",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "A foot has five ______.",
            "answer": "toes"
          },
          {
            "id": "q3",
            "sentence": "An adult has 32 ______.",
            "answer": "teeth"
          },
          {
            "id": "q4",
            "sentence": "You smell with your ______.",
            "answer": "nose"
          },
          {
            "id": "q5",
            "sentence": "The ______ is a symbol of love.",
            "answer": "heart"
          },
          {
            "id": "q6",
            "sentence": "You hear with your ______.",
            "answer": "ears"
          },
          {
            "id": "q7",
            "sentence": "The child sat on her father's ______.",
            "answer": "knee",
            "accepted_answers": [
              "knee",
              "shoulders",
              "shoulder"
            ]
          },
          {
            "id": "q8",
            "sentence": "Your ______ type can be A, B, AB or O.",
            "answer": "blood"
          },
          {
            "id": "q9",
            "sentence": "You think with your ______.",
            "answer": "brain"
          }
        ]
      },
      {
        "id": "u3d-ex3-error-correction",
        "type": "error_correction",
        "title": "3.3. Correct the mistakes in the sentences.",
        "instructions_vi": "Sửa lỗi sai trong câu (thường liên quan đến số ít/số nhiều hoặc tính từ sở hữu).",
        "questions": [
          {
            "id": "q1",
            "original": "I have a pain in the side.",
            "answer": "I have a pain in my side.",
            "example": true
          },
          {
            "id": "q2",
            "original": "That woman has got very big foots.",
            "answer": "That woman has got very big feet."
          },
          {
            "id": "q3",
            "original": "My grandfather has a pain in the shoulder.",
            "answer": "My grandfather has a pain in his shoulder."
          },
          {
            "id": "q4",
            "original": "The baby has already got two tooths.",
            "answer": "The baby has already got two teeth."
          },
          {
            "id": "q5",
            "original": "The little girl needs to wash the face and the hands before dinner.",
            "answer": "The little girl needs to wash her face and her hands before dinner."
          },
          {
            "id": "q6",
            "original": "My hairs are dirty. I need to wash them.",
            "answer": "My hair is dirty. I need to wash it."
          }
        ]
      },
      {
        "id": "u3d-ex4-compound-nouns",
        "type": "compound_noun",
        "title": "3.4. Complete these compound nouns with a body-part word.",
        "instructions_vi": "Ghép một từ chỉ bộ phận cơ thể vào trước từ cho sẵn để tạo thành danh từ ghép đúng.",
        "questions": [
          {
            "id": "q1",
            "base_word": "chair",
            "answer": "arm",
            "full_word": "armchair",
            "example": true
          },
          {
            "id": "q2",
            "base_word": "ball",
            "answer": "foot",
            "full_word": "football"
          },
          {
            "id": "q3",
            "base_word": "stick",
            "answer": "lip",
            "full_word": "lipstick"
          },
          {
            "id": "q4",
            "base_word": "brush",
            "answer": "hair",
            "full_word": "hairbrush"
          },
          {
            "id": "q5",
            "base_word": "scarf",
            "answer": "head",
            "full_word": "headscarf"
          },
          {
            "id": "q6",
            "base_word": "bag",
            "answer": "hand",
            "full_word": "handbag"
          }
        ]
      },
      {
        "id": "u3d-ex5-crossword",
        "type": "crossword",
        "title": "3.5. Complete the crossword.",
        "instructions_vi": "Điền từ chỉ bộ phận cơ thể phù hợp với mỗi gợi ý vào ô chữ.",
        "clues": [
          {
            "id": "q1",
            "number": 1,
            "direction": "down",
            "clue": "The part of your face you use to eat and speak.",
            "answer": "mouth"
          },
          {
            "id": "q2",
            "number": 2,
            "direction": "across",
            "clue": "The part of your body at the end of your leg.",
            "answer": "foot"
          },
          {
            "id": "q3",
            "number": 2,
            "direction": "down",
            "clue": "The part of your hand you use to point.",
            "answer": "finger"
          },
          {
            "id": "q4",
            "number": 3,
            "direction": "across",
            "clue": "The joint in the middle of your leg.",
            "answer": "knee"
          },
          {
            "id": "q5",
            "number": 4,
            "direction": "down",
            "clue": "The part of your face you use to see.",
            "answer": "eye"
          },
          {
            "id": "q6",
            "number": 5,
            "direction": "across",
            "clue": "The part of your body between your head and your shoulders.",
            "answer": "neck"
          }
        ]
      }
    ]
  },
  4: {
    "unit": {
      "id": "unit-4-clothes-detailed",
      "title": "Unit 4: Clothes - Bài tập chi tiết (Workbook)",
      "level": "A2-B1",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Một số câu có nhiều đáp án đúng. Trường 'answer' có thể là 1 chuỗi hoặc mảng 'accepted_answers' — hệ thống chấm nên so khớp không phân biệt hoa/thường và chấp nhận bất kỳ đáp án nào trong danh sách."
    },
    "exercises": [
      {
        "id": "u4d-ex1-word-completion",
        "type": "fill_in_the_blank",
        "title": "4.1. Complete the sentences.",
        "instructions_vi": "Điền từ chỉ trang phục phù hợp vào chỗ trống (gợi ý là chữ cái đầu của từ).",
        "questions": [
          {
            "id": "q1",
            "sentence": "Joe has a job interview today, so he's wearing a smart suit, a white ______ and a ______.",
            "letter_hint": "sh___ / t___",
            "answer": [
              "shirt",
              "tie"
            ],
            "example": true
          },
          {
            "id": "q2",
            "sentence": "Julia's not working today, so she's wearing a T-______ and ______.",
            "letter_hint": "T-___ / sh___s",
            "answer": [
              "shirt",
              "shorts"
            ]
          },
          {
            "id": "q3",
            "sentence": "Lucy is going to play tennis. She's wearing white ______ and ______.",
            "letter_hint": "s___s / tr___s",
            "answer": [
              "socks",
              "trainers"
            ]
          },
          {
            "id": "q4",
            "sentence": "Gianni is going to a business meeting. He's ______ a ______ with his papers and laptop.",
            "letter_hint": "___ing / b___",
            "answer": [
              "carrying",
              "bag"
            ]
          },
          {
            "id": "q5",
            "sentence": "My trousers are too big. I have to wear a ______.",
            "letter_hint": "b___",
            "answer": "belt"
          },
          {
            "id": "q6",
            "sentence": "It's cold today. I'll wear my ______, and I'll take my ______ too.",
            "letter_hint": "j___ / c___",
            "answer": [
              "jacket",
              "coat"
            ]
          }
        ]
      },
      {
        "id": "u4d-ex2-matching-body",
        "type": "matching",
        "title": "4.2. Match the item of clothing with the part of the body.",
        "instructions_vi": "Nối mỗi trang phục/phụ kiện với bộ phận cơ thể tương ứng.",
        "pairs": [
          {
            "left": "ring",
            "right": "finger",
            "example": true
          },
          {
            "left": "belt",
            "right": "waist"
          },
          {
            "left": "hat",
            "right": "head"
          },
          {
            "left": "glasses",
            "right": "eyes"
          },
          {
            "left": "shoe",
            "right": "foot"
          },
          {
            "left": "glove",
            "right": "hand"
          },
          {
            "left": "tights",
            "right": "legs"
          },
          {
            "left": "scarf",
            "right": "neck"
          }
        ]
      },
      {
        "id": "u4d-ex3-verb-form",
        "type": "fill_in_the_blank",
        "title": "4.3. Complete the sentences with be / wear / carry / have in the right form.",
        "instructions_vi": "Điền đúng dạng của động từ be / wear / carry / have vào chỗ trống.",
        "word_bank": [
          "be",
          "wear",
          "carry",
          "have"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "Tim's jeans are blue and his T-shirt ______ red.",
            "answer": "is",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "Julia ______ jeans and a T-shirt today.",
            "answer": "is wearing"
          },
          {
            "id": "q3",
            "sentence": "Meena ______ got a red coat on and she ______ some flowers.",
            "answer": [
              "has",
              "is carrying"
            ]
          },
          {
            "id": "q4",
            "sentence": "Sarah's dress ______ old but her shoes ______ new.",
            "answer": [
              "is",
              "are"
            ]
          },
          {
            "id": "q5",
            "sentence": "Last year Harry's trousers ______ white. Now they ______ grey.",
            "answer": [
              "were",
              "are"
            ]
          },
          {
            "id": "q6",
            "sentence": "______ this a new pair of jeans?",
            "answer": "Is"
          },
          {
            "id": "q7",
            "sentence": "My favourite pyjamas ______ dark green.",
            "answer": "are"
          },
          {
            "id": "q8",
            "sentence": "Kim ______ a new pair of shorts.",
            "answer": "is wearing",
            "accepted_answers": [
              "is wearing",
              "has"
            ]
          }
        ]
      },
      {
        "id": "u4d-ex4-labeling",
        "type": "labeling",
        "title": "4.4. Label the picture.",
        "instructions_vi": "Điền tên trang phục/phụ kiện đúng theo mô tả (dựa theo số thứ tự trong hình minh họa gốc).",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Kính đeo khi trời nắng",
            "answer": "sunglasses",
            "example": true
          },
          {
            "id": "q2",
            "clue_vi": "Áo len chui đầu",
            "answer": "jumper"
          },
          {
            "id": "q3",
            "clue_vi": "Vật dùng khi trời mưa",
            "answer": "umbrella"
          },
          {
            "id": "q4",
            "clue_vi": "Trang phục nữ mặc từ eo trở xuống",
            "answer": "skirt"
          },
          {
            "id": "q5",
            "clue_vi": "Vali dùng để đựng đồ khi đi du lịch",
            "answer": "suitcase"
          },
          {
            "id": "q6",
            "clue_vi": "Giày cao cổ",
            "answer": "boots"
          },
          {
            "id": "q7",
            "clue_vi": "Áo khoác dài mặc bên ngoài",
            "answer": "coat"
          },
          {
            "id": "q8",
            "clue_vi": "Đồng hồ đeo tay",
            "answer": "watch"
          },
          {
            "id": "q9",
            "clue_vi": "Áo sơ mi",
            "answer": "shirt"
          },
          {
            "id": "q10",
            "clue_vi": "Mũ",
            "answer": "hat"
          }
        ]
      },
      {
        "id": "u4d-ex5-verb-pairs",
        "type": "fill_in_the_blank",
        "title": "4.5. Complete the verbs in the table (Morning / Night).",
        "instructions_vi": "Điền động từ phù hợp cho các hoạt động buổi sáng và buổi tối liên quan đến mặc quần áo.",
        "questions": [
          {
            "id": "q1",
            "sentence": "Morning: Get ______.",
            "answer": "dressed"
          },
          {
            "id": "q2",
            "sentence": "Morning: Or ______ your clothes on.",
            "answer": "put"
          },
          {
            "id": "q3",
            "sentence": "Night: Get ______.",
            "answer": "undressed"
          },
          {
            "id": "q4",
            "sentence": "Night: Or ______ your clothes off.",
            "answer": "take"
          }
        ]
      }
    ]
  },
  5: {
    "unit": {
      "id": "unit-5-appearance-detailed",
      "title": "Unit 5: Appearance & Age - Bài tập chi tiết (Workbook)",
      "level": "A2-B1",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Một số câu có nhiều đáp án đúng. Trường 'answer' có thể là 1 chuỗi hoặc mảng 'accepted_answers' — hệ thống chấm nên so khớp không phân biệt hoa/thường và chấp nhận bất kỳ đáp án nào trong danh sách."
    },
    "exercises": [
      {
        "id": "u5d-ex1-fill-blank",
        "type": "fill_in_the_blank",
        "title": "5.1. Complete the sentences.",
        "instructions_vi": "Điền tính từ phù hợp vào chỗ trống. Một số câu có nhiều đáp án đúng.",
        "questions": [
          {
            "id": "q1",
            "sentence": "He's only 1 metre 52. He's quite ______.",
            "answer": "short",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "Very ______ people are often good at basketball.",
            "answer": "tall"
          },
          {
            "id": "q3",
            "sentence": "Models are usually ______.",
            "answer": "slim",
            "accepted_answers": [
              "slim",
              "thin"
            ]
          },
          {
            "id": "q4",
            "sentence": "Does she have dark skin? No, it's ______.",
            "answer": "fair"
          },
          {
            "id": "q5",
            "sentence": "She's only seven. She's very ______.",
            "answer": "young"
          },
          {
            "id": "q6",
            "sentence": "If I eat too much I'll be ______.",
            "answer": "fat",
            "accepted_answers": [
              "fat",
              "overweight"
            ]
          },
          {
            "id": "q7",
            "sentence": "My grandmother is in this hospital. It's a hospital for ______ people. (don't use 'old')",
            "answer": "elderly"
          }
        ]
      },
      {
        "id": "u5d-ex2-question-formation",
        "type": "question_formation",
        "title": "5.2. Complete the questions using the words in brackets.",
        "instructions_vi": "Dùng từ gợi ý trong ngoặc để hoàn thành câu hỏi, dựa vào câu trả lời cho sẵn.",
        "questions": [
          {
            "id": "q1",
            "prompt": "(your brother)",
            "given_answer": "He's about 1 metre 75.",
            "answer": "How tall is your brother?",
            "example": true
          },
          {
            "id": "q2",
            "prompt": "(Elena's hair)",
            "given_answer": "No, she's got dark hair.",
            "answer": "Is Elena's hair blonde?",
            "accepted_answers": [
              "Is Elena's hair blonde?",
              "Is Elena's hair fair?"
            ]
          },
          {
            "id": "q3",
            "prompt": "(Mike's hair)",
            "given_answer": "Yes, it is quite long.",
            "answer": "Is Mike's hair long?"
          },
          {
            "id": "q4",
            "prompt": "(your parents)",
            "given_answer": "Not really, they're middle-aged.",
            "answer": "Are your parents elderly?",
            "accepted_answers": [
              "Are your parents elderly?",
              "Are your parents old?"
            ]
          },
          {
            "id": "q5",
            "prompt": "(his sister)",
            "given_answer": "Yes, she's very pretty.",
            "answer": "Is his sister pretty?",
            "accepted_answers": [
              "Is his sister pretty?",
              "Is his sister beautiful?"
            ]
          },
          {
            "id": "q6",
            "prompt": "(Sara, so thin)",
            "given_answer": "She's very ill.",
            "answer": "Why is Sara so thin?"
          }
        ]
      },
      {
        "id": "u5d-ex3-descriptive-writing",
        "type": "sentence_construction",
        "title": "5.3. Write sentences about the people in the pictures.",
        "instructions_vi": "Viết câu mô tả ngoại hình dựa trên đặc điểm cho sẵn. Chấp nhận nhiều cách diễn đạt miễn có đủ từ khóa.",
        "questions": [
          {
            "id": "q1",
            "name": "Felicity",
            "features": [
              "blonde hair",
              "fair skin"
            ],
            "answer": "Felicity's got blonde hair and fair skin.",
            "example": true
          },
          {
            "id": "q2",
            "name": "Jeff",
            "features": [
              "short fair hair",
              "a beard"
            ],
            "answer": "Jeff has short fair hair and a beard.",
            "required_keywords": [
              "short",
              "fair",
              "hair",
              "beard"
            ]
          },
          {
            "id": "q3",
            "name": "Anika",
            "features": [
              "dark skin",
              "dark hair"
            ],
            "answer": "Anika's got dark skin and dark hair.",
            "required_keywords": [
              "dark",
              "skin",
              "dark",
              "hair"
            ]
          },
          {
            "id": "q4",
            "name": "Stefan",
            "features": [
              "long hair",
              "a moustache"
            ],
            "answer": "Stefan's hair is long and he has a moustache.",
            "required_keywords": [
              "long",
              "hair",
              "moustache"
            ]
          }
        ]
      },
      {
        "id": "u5d-ex4-question-writing",
        "type": "question_formation",
        "title": "5.4. Write questions.",
        "instructions_vi": "Dùng từ gợi ý để viết câu hỏi hoàn chỉnh.",
        "questions": [
          {
            "id": "q1",
            "prompt": "your brother, height",
            "answer": "How tall is your brother?",
            "example": true
          },
          {
            "id": "q2",
            "prompt": "your teacher, looks",
            "answer": "What does your teacher look like?"
          },
          {
            "id": "q3",
            "prompt": "you, weight",
            "answer": "How much do you weigh?",
            "accepted_answers": [
              "How much do you weigh?",
              "How heavy are you?"
            ]
          },
          {
            "id": "q4",
            "prompt": "your mother, age",
            "answer": "How old is your mother?"
          },
          {
            "id": "q5",
            "prompt": "your sister, height",
            "answer": "How tall is your sister?"
          },
          {
            "id": "q6",
            "prompt": "your parents, looks",
            "answer": "What do your parents look like?"
          }
        ]
      }
    ]
  }
};
