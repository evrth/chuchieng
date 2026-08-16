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
          },
          "image": "images/exercises/u1-family-tree.png"
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
          ],
          "image": "images/exercises/u1-relatives.png"
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
            "example": true,
            "image": "images/exercises/u3-compound-armchair.png"
          },
          {
            "id": "q2",
            "base_word": "ball",
            "answer": "foot",
            "full_word": "football",
            "image": "images/exercises/u3-compound-football.jpg"
          },
          {
            "id": "q3",
            "base_word": "stick",
            "answer": "lip",
            "full_word": "lipstick",
            "image": "images/exercises/u3-compound-lipstick.jpg"
          },
          {
            "id": "q4",
            "base_word": "brush",
            "answer": "hair",
            "full_word": "hairbrush",
            "image": "images/exercises/u3-compound-hairbrush.jpg"
          },
          {
            "id": "q5",
            "base_word": "scarf",
            "answer": "head",
            "full_word": "headscarf",
            "image": "images/exercises/u3-compound-headscarf.jpg"
          },
          {
            "id": "q6",
            "base_word": "bag",
            "answer": "hand",
            "full_word": "handbag",
            "image": "images/exercises/u3-compound-handbag.jpg"
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
            "example": true,
            "image": "images/exercises/u4-match-finger.jpg"
          },
          {
            "left": "belt",
            "right": "waist",
            "image": "images/exercises/u4-match-waist.jpg"
          },
          {
            "left": "hat",
            "right": "head",
            "image": "images/exercises/u4-match-head.jpg"
          },
          {
            "left": "glasses",
            "right": "eyes",
            "image": "images/exercises/u4-match-eyes.jpg"
          },
          {
            "left": "shoe",
            "right": "foot",
            "image": "images/exercises/u4-match-foot.jpg"
          },
          {
            "left": "glove",
            "right": "hand",
            "image": "images/exercises/u4-match-hand.jpg"
          },
          {
            "left": "tights",
            "right": "legs",
            "image": "images/exercises/u4-match-legs.jpg"
          },
          {
            "left": "scarf",
            "right": "neck",
            "image": "images/exercises/u4-match-neck.jpg"
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
            "example": true,
            "image": "images/exercises/u5-person-felicity.jpg"
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
            ],
            "image": "images/exercises/u5-person-jeff.jpg"
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
            ],
            "image": "images/exercises/u5-person-anika.jpg"
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
            ],
            "image": "images/exercises/u5-person-stefan.jpg"
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
  },
  6: {
    "unit": {
      "id": "unit-6-health-detailed",
      "title": "Unit 6: Health - Bài tập chi tiết (Workbook)",
      "level": "A2-B1",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Một số câu có nhiều đáp án đúng. Trường 'answer' có thể là 1 chuỗi hoặc mảng 'accepted_answers' — hệ thống chấm nên so khớp không phân biệt hoa/thường và chấp nhận bất kỳ đáp án nào trong danh sách."
    },
    "exercises": [
      {
        "id": "u6d-ex1-dialogue",
        "type": "dialogue_completion",
        "title": "6.1. Complete the dialogues.",
        "instructions_vi": "Điền câu phù hợp vào chỗ trống trong đoạn hội thoại.",
        "dialogues": [
          {
            "id": "d1",
            "turns": [
              {
                "speaker": "A",
                "line": "How are you today?"
              },
              {
                "speaker": "B",
                "line": "Very well, thanks.",
                "example": true
              },
              {
                "speaker": "A",
                "line": "Good!"
              }
            ]
          },
          {
            "id": "d2",
            "turns": [
              {
                "speaker": "A",
                "line": "Are you OK?"
              },
              {
                "speaker": "B",
                "blank_id": "q1",
                "answer": "I feel sick.",
                "accepted_answers": [
                  "I feel sick.",
                  "I don't feel very well.",
                  "I feel ill."
                ]
              },
              {
                "speaker": "A",
                "line": "Would you like to use the bathroom?"
              },
              {
                "speaker": "B",
                "line": "Yes, thank you."
              }
            ]
          },
          {
            "id": "d3",
            "turns": [
              {
                "speaker": "A",
                "blank_id": "q2",
                "answer": "I feel ill."
              },
              {
                "speaker": "B",
                "line": "I'll get a doctor."
              },
              {
                "speaker": "A",
                "line": "Oh, thank you."
              }
            ]
          },
          {
            "id": "d4",
            "turns": [
              {
                "speaker": "A",
                "blank_id": "q3",
                "answer": "I've got toothache."
              },
              {
                "speaker": "B",
                "line": "Here's the dentist's phone number."
              },
              {
                "speaker": "A",
                "line": "Thanks."
              }
            ]
          },
          {
            "id": "d5",
            "turns": [
              {
                "speaker": "A",
                "line": "Your nose is red. Have you got ______?",
                "blank_id": "q4",
                "answer": "a cold"
              },
              {
                "speaker": "B",
                "line": "Yes."
              },
              {
                "speaker": "A",
                "line": "Have a hot drink and go to bed early."
              }
            ]
          }
        ]
      },
      {
        "id": "u6d-ex2-matching",
        "type": "matching",
        "title": "6.2. Match the illness with a possible treatment.",
        "instructions_vi": "Nối bệnh với cách chữa trị phù hợp.",
        "pairs": [
          {
            "left": "A headache",
            "right": "take an aspirin",
            "example": true
          },
          {
            "left": "Toothache",
            "right": "Go to the dentist"
          },
          {
            "left": "A heart attack",
            "right": "Go to hospital"
          },
          {
            "left": "A cold",
            "right": "Go to bed with a hot drink"
          }
        ]
      },
      {
        "id": "u6d-ex3-word-association",
        "type": "word_association",
        "title": "6.3. What illnesses are connected with...?",
        "instructions_vi": "Cho biết nguyên nhân sau liên quan đến bệnh gì.",
        "questions": [
          {
            "id": "q1",
            "clue": "a mosquito bite?",
            "answer": "malaria",
            "example": true
          },
          {
            "id": "q2",
            "clue": "bad drinking water?",
            "answer": "cholera"
          },
          {
            "id": "q3",
            "clue": "pollution, traffic fumes, etc.?",
            "answer": "asthma"
          },
          {
            "id": "q4",
            "clue": "grass, flowers, sunshine, etc.?",
            "answer": "hay fever"
          },
          {
            "id": "q5",
            "clue": "smoking, unhealthy diet, no exercise?",
            "answer": "cancer",
            "accepted_answers": [
              "cancer",
              "heart attacks",
              "cancer / heart attacks"
            ]
          }
        ]
      }
    ]
  },
  7: {
    "unit": {
      "id": "unit-7-feelings-detailed",
      "title": "Unit 7: Feelings - Bài tập chi tiết (Workbook)",
      "level": "A2-B1",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Một số câu là câu trả lời mở, có thể diễn đạt theo nhiều cách. Trường 'required_keywords' liệt kê các từ khóa bắt buộc phải xuất hiện để được tính là đúng, không cần khớp chính xác từng chữ."
    },
    "exercises": [
      {
        "id": "u7d-ex1-want-hope",
        "type": "open_response",
        "title": "7.1. Answer these questions using want or hope.",
        "instructions_vi": "Trả lời câu hỏi bằng cách dùng 'want' hoặc 'hope' cho phù hợp với tình huống.",
        "questions": [
          {
            "id": "q1",
            "situation": "You're thirsty. What do you want?",
            "answer": "I want a glass of water.",
            "example": true
          },
          {
            "id": "q2",
            "situation": "The lesson feels very long. What do you hope?",
            "answer": "I hope (that) the lesson ends soon.",
            "required_keywords": [
              "hope",
              "lesson"
            ]
          },
          {
            "id": "q3",
            "situation": "You're hungry. What do you want?",
            "answer": "I want some food.",
            "required_keywords": [
              "want",
              "food"
            ]
          },
          {
            "id": "q4",
            "situation": "Your friend feels ill. What do you hope?",
            "answer": "I hope (that) my friend feels better soon.",
            "required_keywords": [
              "hope",
              "friend"
            ]
          },
          {
            "id": "q5",
            "situation": "You're tired. What do you want to do?",
            "answer": "I want to go to bed.",
            "required_keywords": [
              "want",
              "bed"
            ]
          },
          {
            "id": "q6",
            "situation": "You're upset. What do you want to do?",
            "answer": "I want to cry.",
            "required_keywords": [
              "want",
              "cry"
            ]
          },
          {
            "id": "q7",
            "situation": "It's very cold weather. What do you hope?",
            "answer": "I hope (that) it gets hotter soon.",
            "required_keywords": [
              "hope",
              "hot"
            ]
          },
          {
            "id": "q8",
            "situation": "Your friend feels sad. What do you want?",
            "answer": "I want him / her to feel happy again soon.",
            "required_keywords": [
              "want",
              "happy"
            ]
          }
        ]
      },
      {
        "id": "u7d-ex2-feelings-pictures",
        "type": "labeling",
        "title": "7.2. How do the people feel?",
        "instructions_vi": "Nhìn mô tả tình huống và điền tính từ cảm xúc phù hợp.",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Jessica đang nhìn một chiếc bánh sandwich với vẻ thèm thuồng.",
            "name": "Jessica",
            "answer": "is hungry",
            "example": true,
            "image": "images/exercises/u7-feel-jessica-hungry.jpg"
          },
          {
            "id": "q2",
            "clue_vi": "Nicholas đang uống một chai nước.",
            "name": "Nicholas",
            "answer": "is thirsty",
            "image": "images/exercises/u7-feel-nicholas-thirsty.jpg"
          },
          {
            "id": "q3",
            "clue_vi": "Max đang ôm mình vì lạnh.",
            "name": "Max",
            "answer": "is cold",
            "image": "images/exercises/u7-feel-max-cold.jpg"
          },
          {
            "id": "q4",
            "clue_vi": "Sunita đang ngáp.",
            "name": "Sunita",
            "answer": "is tired",
            "image": "images/exercises/u7-feel-sunita-tired.jpg"
          },
          {
            "id": "q5",
            "clue_vi": "Fiona có vẻ mặt bất ngờ, che miệng.",
            "name": "Fiona",
            "answer": "is surprised",
            "image": "images/exercises/u7-feel-fiona-surprised.jpg"
          },
          {
            "id": "q6",
            "clue_vi": "Các em nhỏ đang quạt cho mình vì nóng.",
            "name": "The children",
            "answer": "are hot",
            "image": "images/exercises/u7-feel-children-hot.jpg"
          }
        ]
      },
      {
        "id": "u7d-ex3-error-correction",
        "type": "error_correction",
        "title": "7.3. Correct the mistakes.",
        "instructions_vi": "Sửa lỗi sai trong câu.",
        "questions": [
          {
            "id": "q1",
            "original": "I very like basketball.",
            "answer": "I like basketball very much.",
            "example": true
          },
          {
            "id": "q2",
            "original": "I am happy for my sister's good news.",
            "answer": "I am happy about my sister's good news."
          },
          {
            "id": "q3",
            "original": "The teacher wants that we learn these new words.",
            "answer": "The teacher wants us to learn these new words."
          },
          {
            "id": "q4",
            "original": "I like really spiders.",
            "answer": "I really like spiders."
          },
          {
            "id": "q5",
            "original": "My brother has a good new job. I'm very happy about him.",
            "answer": "My brother has a good new job. I'm very happy for him."
          },
          {
            "id": "q6",
            "original": "My parents want that I go to university.",
            "answer": "My parents want me to go to university."
          },
          {
            "id": "q7",
            "original": "I feel very well. How for you?",
            "answer": "I feel very well. How about you?"
          },
          {
            "id": "q8",
            "original": "Priya is bit tired this morning.",
            "answer": "Priya is a bit tired this morning."
          }
        ]
      }
    ]
  },
  8: {
    "unit": {
      "id": "unit-8-social-expressions-detailed",
      "title": "Unit 8: Social English - Bài tập chi tiết (Workbook)",
      "level": "A2-B1",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Một số câu có nhiều đáp án đúng, liệt kê trong 'accepted_answers'. Bài 8.4 là hội thoại mở, chấm theo từ khóa bắt buộc ('required_keywords')."
    },
    "exercises": [
      {
        "id": "u8d-ex1-dialogue",
        "type": "situational_expression",
        "title": "8.1. Choose one of the phrases to fit the dialogues.",
        "instructions_vi": "Chọn một cụm từ phù hợp để hoàn thành đoạn hội thoại. Lưu ý một số câu có thể có nhiều hơn một đáp án đúng.",
        "questions": [
          {
            "id": "q1",
            "context": "A: (sneezes) Atishoo!",
            "answer": "Bless you!",
            "example": true
          },
          {
            "id": "q2",
            "context": "A: I'm taking my driving test today.",
            "answer": "Good luck!"
          },
          {
            "id": "q3",
            "context": "A: I passed my driving test!",
            "answer": "Congratulations!",
            "accepted_answers": [
              "Congratulations!",
              "Well done!"
            ]
          },
          {
            "id": "q4",
            "context": "A: Goodbye.",
            "answer": "Goodbye."
          },
          {
            "id": "q5",
            "context": "A: It's my birthday today.",
            "answer": "Happy Birthday!"
          },
          {
            "id": "q6",
            "context": "A: How are you?",
            "answer": "Fine, thanks."
          },
          {
            "id": "q7",
            "context": "A: Hello!",
            "answer": "Hello!",
            "accepted_answers": [
              "Hello!",
              "Hi!"
            ]
          },
          {
            "id": "q8",
            "context": "A: Here's your tea.",
            "answer": "Thank you",
            "accepted_answers": [
              "Thank you",
              "Cheers"
            ]
          }
        ],
        "word_bank": [
          "Hello",
          "Hi",
          "How are you?",
          "Fine, thanks. And you?",
          "Not too bad, thanks",
          "Cheers!",
          "Goodbye",
          "Excuse me!",
          "Sorry!",
          "Bless you!",
          "Happy Birthday!",
          "Merry Christmas!",
          "Happy New Year!",
          "Good luck!",
          "Congratulations!",
          "Well done!"
        ]
      },
      {
        "id": "u8d-ex2-situational",
        "type": "situational_expression",
        "title": "8.2. What is the person saying in the picture?",
        "instructions_vi": "Dựa vào mô tả tình huống, cho biết người trong hình sẽ nói gì.",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Muốn đi qua chỗ có người đang chắn lối.",
            "answer": "Excuse me!",
            "example": true,
            "image": "images/exercises/u8-situational-excuseme.jpg"
          },
          {
            "id": "q2",
            "clue_vi": "Đang tặng quà bên cây thông Noel.",
            "answer": "Happy Christmas!",
            "image": "images/exercises/u8-situational-happychristmas.jpg"
          },
          {
            "id": "q3",
            "clue_vi": "Vừa nhận được một bó hoa.",
            "answer": "Thank you!",
            "image": "images/exercises/u8-situational-thankyou-flowers.jpg"
          },
          {
            "id": "q4",
            "clue_vi": "Bắt tay chúc mừng trong lễ tốt nghiệp.",
            "answer": "Congratulations!",
            "image": "images/exercises/u8-situational-congratulations.jpg"
          },
          {
            "id": "q5",
            "clue_vi": "Va phải xe đẩy hàng của người khác trong siêu thị.",
            "answer": "Sorry!",
            "image": "images/exercises/u8-situational-sorry-cart.jpg"
          },
          {
            "id": "q6",
            "clue_vi": "Đến công ty lúc 9 giờ sáng.",
            "answer": "Good morning!",
            "image": "images/exercises/u8-situational-goodmorning.jpg"
          }
        ]
      },
      {
        "id": "u8d-ex3-situational-choice",
        "type": "situational_expression",
        "title": "8.3. What do you say? Choose a phrase.",
        "instructions_vi": "Chọn cụm từ phù hợp với mỗi tình huống.",
        "questions": [
          {
            "id": "q1",
            "situation": "You want to go through a doorway. There are some people blocking it.",
            "answer": "Excuse me!",
            "example": true
          },
          {
            "id": "q2",
            "situation": "A friend buys you a drink.",
            "answer": "Thank you. Cheers!"
          },
          {
            "id": "q3",
            "situation": "A child says 'Goodnight' to you.",
            "answer": "Goodnight. Sleep well."
          },
          {
            "id": "q4",
            "situation": "You answer the phone at work. It is 10.30 am.",
            "answer": "Good morning."
          },
          {
            "id": "q5",
            "situation": "You answer the phone at work. It is 3 pm.",
            "answer": "Good afternoon."
          },
          {
            "id": "q6",
            "situation": "It is 2 am on January 1st. You meet a friend in the street.",
            "answer": "Happy New Year!"
          },
          {
            "id": "q7",
            "situation": "You are on a very crowded bus and you stand on someone's foot.",
            "answer": "Sorry!"
          },
          {
            "id": "q8",
            "situation": "It is 24th December. You meet a friend on the bus.",
            "answer": "Happy Christmas!"
          }
        ],
        "word_bank": [
          "Thank you. Cheers!",
          "Sorry!",
          "Happy Christmas!",
          "Happy New Year!",
          "Goodnight. Sleep well.",
          "Good morning",
          "Good afternoon",
          "Excuse me!"
        ]
      },
      {
        "id": "u8d-ex4-dialogue-open",
        "type": "dialogue_completion",
        "title": "8.4. You meet Ann, an English friend. Reply to her.",
        "instructions_vi": "Trả lời bạn Ann trong đoạn hội thoại. Câu trả lời mở, chấm theo từ khóa bắt buộc.",
        "dialogues": [
          {
            "id": "d1",
            "turns": [
              {
                "speaker": "ANN",
                "line": "Good evening."
              },
              {
                "speaker": "YOU",
                "line": "Hello.",
                "example": true
              },
              {
                "speaker": "ANN",
                "line": "How are you?"
              },
              {
                "speaker": "YOU",
                "blank_id": "q1",
                "answer": "Fine, thanks.",
                "required_keywords": [
                  "fine"
                ]
              },
              {
                "speaker": "ANN",
                "line": "It's my birthday today."
              },
              {
                "speaker": "YOU",
                "blank_id": "q2",
                "answer": "Happy birthday!",
                "required_keywords": [
                  "happy",
                  "birthday"
                ]
              },
              {
                "speaker": "ANN",
                "line": "Would you like a drink?"
              },
              {
                "speaker": "YOU",
                "blank_id": "q3",
                "answer": "Yes, please. An orange juice.",
                "required_keywords": [
                  "yes"
                ]
              },
              {
                "speaker": "ANN",
                "line": "Here you are."
              },
              {
                "speaker": "YOU",
                "blank_id": "q4",
                "answer": "Cheers! / Thank you!",
                "required_keywords": [
                  "thank"
                ],
                "accepted_answers": [
                  "Cheers!",
                  "Thank you!"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  9: {
    "unit": {
      "id": "unit-9-discourse-markers-detailed",
      "title": "Unit 9: Useful Expressions - Bài tập chi tiết (Workbook)",
      "level": "A2-B1",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Một số câu có nhiều đáp án đúng, liệt kê trong 'accepted_answers'. Bài 9.4 là sửa lỗi trong hội thoại, chấm theo từng lỗi (correction) riêng biệt."
    },
    "exercises": [
      {
        "id": "u9d-ex1-word-choice",
        "type": "fill_in_the_blank",
        "title": "9.1. Choose a word to complete the sentences.",
        "instructions_vi": "Chọn từ phù hợp (Actually / Really / Else / Around / Anyway) để hoàn thành câu.",
        "word_bank": [
          "Actually",
          "Really",
          "Else",
          "Around",
          "Anyway"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "It's boring here. Let's go somewhere ______.",
            "answer": "else",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "There were ______ 20 people at the lecture.",
            "answer": "around"
          },
          {
            "id": "q3",
            "sentence": "It's a ______ lovely photo!",
            "answer": "really"
          },
          {
            "id": "q4",
            "sentence": "Have you had enough to eat? Would you like anything ______?",
            "answer": "else"
          },
          {
            "id": "q5",
            "sentence": "He said he was a doctor but he's ______ still a medical student.",
            "answer": "actually",
            "accepted_answers": [
              "actually",
              "really"
            ]
          },
          {
            "id": "q6",
            "sentence": "The journey takes ______ two hours.",
            "answer": "around"
          }
        ]
      },
      {
        "id": "u9d-ex2-choose-correct",
        "type": "multiple_choice",
        "title": "9.2. Choose the correct answer.",
        "instructions_vi": "Chọn từ đúng trong các từ được in nghiêng.",
        "questions": [
          {
            "id": "q1",
            "question": "I don't like skiing and ___ I'm not free that weekend.",
            "options": [
              "about",
              "anyway",
              "else"
            ],
            "answer": "anyway",
            "example": true
          },
          {
            "id": "q2",
            "question": "I don't ___ what we do. It's all the same to me.",
            "options": [
              "mind",
              "matter",
              "agree"
            ],
            "answer": "mind"
          },
          {
            "id": "q3",
            "question": "___ invite Rachel to dinner tonight.",
            "options": [
              "It's up to you",
              "Let's",
              "I agree"
            ],
            "answer": "Let's"
          },
          {
            "id": "q4",
            "question": "___ in London. There's lots of traffic there.",
            "options": [
              "Be careful",
              "What a pity",
              "Oh dear"
            ],
            "answer": "Be careful"
          },
          {
            "id": "q5",
            "question": "I don't have time to go to the cinema and ___ I've seen that film already.",
            "options": [
              "really",
              "absolutely",
              "anyway"
            ],
            "answer": "anyway"
          }
        ]
      },
      {
        "id": "u9d-ex3-situational",
        "type": "situational_expression",
        "title": "9.3. Choose an expression to fit these situations.",
        "instructions_vi": "Chọn cụm từ phù hợp (Well done! / Oh dear! / What a pity! / Hurry up! / It's up to you / Look out!) cho mỗi tình huống.",
        "word_bank": [
          "Well done!",
          "Oh dear!",
          "What a pity!",
          "Hurry up!",
          "It's up to you",
          "Look out!"
        ],
        "questions": [
          {
            "id": "q1",
            "situation": "Someone spills a drink.",
            "answer": "Oh dear!",
            "example": true,
            "image": "images/exercises/u9-situational-ohdear.jpg"
          },
          {
            "id": "q2",
            "situation": "A brick is falling near someone.",
            "answer": "Look out!",
            "image": "images/exercises/u9-situational-lookout.jpg"
          },
          {
            "id": "q3",
            "situation": "M: I didn't get that job.",
            "answer": "What a pity!",
            "image": "images/exercises/u9-situational-whatapity.jpg"
          },
          {
            "id": "q4",
            "situation": "W: Do you want to go to the party or not?",
            "answer": "It's up to you",
            "image": "images/exercises/u9-situational-itsuptoyou.jpg"
          },
          {
            "id": "q5",
            "situation": "Someone is rushing, running late in the morning.",
            "answer": "Hurry up!",
            "image": "images/exercises/u9-situational-hurryup.jpg"
          },
          {
            "id": "q6",
            "situation": "A child shows a nice drawing.",
            "answer": "Well done!",
            "image": "images/exercises/u9-situational-welldone.jpg"
          }
        ]
      },
      {
        "id": "u9d-ex4-error-correction-dialogue",
        "type": "dialogue_error_correction",
        "title": "9.4. Correct the eight mistakes in the dialogue.",
        "instructions_vi": "Tìm và sửa 8 lỗi sai trong đoạn hội thoại.",
        "original_dialogue": "VERA: We need to celebrate. I got a new job!\nLUKE: Well made! How about go out for a meal this evening?\nVERA: Great! Let go to that Italian restaurant. Or do you prefer the Chinese one?\nLUKE: I don't mind it. I like the Italian one but it's very expensive.\nVERA: Oh, it isn't matter.\nLUKE: OK. Why don't we going to the Italian restaurant and then we could go to the cinema afterwards? Your new job needs a special celebration.\nVERA: I'm agree. And I'd love to see that film with George Clooney. Would you?\nLUKE: Absolute!",
        "corrections": [
          {
            "id": "q1",
            "wrong": "Well made!",
            "correct": "Well done!",
            "example": true
          },
          {
            "id": "q2",
            "wrong": "How about go out",
            "correct": "How about going out"
          },
          {
            "id": "q3",
            "wrong": "Let go to that Italian restaurant",
            "correct": "Let's go to that Italian restaurant"
          },
          {
            "id": "q4",
            "wrong": "I don't mind it.",
            "correct": "I don't mind."
          },
          {
            "id": "q5",
            "wrong": "it isn't matter",
            "correct": "it doesn't matter"
          },
          {
            "id": "q6",
            "wrong": "Why don't we going to",
            "correct": "Why don't we go to"
          },
          {
            "id": "q7",
            "wrong": "I'm agree.",
            "correct": "I agree."
          },
          {
            "id": "q8",
            "wrong": "Absolute!",
            "correct": "Absolutely!"
          }
        ]
      }
    ]
  },
  10: {
    "unit": {
      "id": "unit-10-food-drink-detailed",
      "title": "Unit 10: Food and Drink - Bài tập chi tiết (Workbook)",
      "level": "A2-B1",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Câu 10.1 (mục 2) và bài phân loại 10.2 có thể chấp nhận nhiều thứ tự/nhóm khác nhau miễn nội dung đúng."
    },
    "exercises": [
      {
        "id": "u10d-ex1-fill-blank",
        "type": "fill_in_the_blank",
        "title": "10.1. Complete the sentences. Use words from the box.",
        "instructions_vi": "Điền từ chỉ thực phẩm phù hợp vào chỗ trống.",
        "word_bank": [
          "bread",
          "rice",
          "pasta",
          "salt",
          "chips",
          "pepper",
          "meat",
          "fish",
          "vegetarian",
          "sugar",
          "tea",
          "coffee",
          "hamburgers",
          "hot dogs",
          "pizzas",
          "fish and chips"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "______ is popular in Japan.",
            "answer": "Rice",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "______ and ______ are very popular in Italy.",
            "answer": [
              "Pasta",
              "pizza"
            ],
            "note": "Chấp nhận thứ tự bất kỳ giữa 'pasta' và 'pizza'."
          },
          {
            "id": "q3",
            "sentence": "Chips are made from ______.",
            "answer": "potatoes"
          },
          {
            "id": "q4",
            "sentence": "Many British people eat ______.",
            "answer": "fish and chips"
          },
          {
            "id": "q5",
            "sentence": "Hamburgers are made from ______.",
            "answer": "meat"
          },
          {
            "id": "q6",
            "sentence": "A ______ is a sausage inside a piece of bread.",
            "answer": "hot dog"
          }
        ]
      },
      {
        "id": "u10d-ex2-classification",
        "type": "classification",
        "title": "10.2. Put these words into two lists: fruit and vegetables.",
        "instructions_vi": "Phân loại các từ sau vào 2 nhóm: Fruit (trái cây) và Vegetables (rau củ).",
        "items": [
          "beans",
          "pineapple",
          "grapes",
          "onions",
          "apple",
          "carrot",
          "garlic",
          "pear",
          "mushrooms"
        ],
        "categories": {
          "Fruit": [
            "pineapple",
            "grapes",
            "apple",
            "pear"
          ],
          "Vegetables": [
            "beans",
            "onions",
            "carrot",
            "garlic",
            "mushrooms"
          ]
        }
      },
      {
        "id": "u10d-ex3-labeling",
        "type": "labeling",
        "title": "10.3. Write the names of these fruit and vegetables.",
        "instructions_vi": "Viết tên loại trái cây/rau củ dựa vào mô tả.",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Quả dài, vỏ vàng, bên trong mềm màu trắng.",
            "answer": "banana",
            "example": true,
            "image": "images/exercises/u10-fruit-banana.jpg"
          },
          {
            "id": "q2",
            "clue_vi": "Quả nhỏ màu đỏ, có hạt bên ngoài, thường ăn kèm kem.",
            "answer": "strawberry",
            "image": "images/exercises/u10-fruit-strawberry.jpg"
          },
          {
            "id": "q3",
            "clue_vi": "Loại đậu nhỏ màu xanh nằm trong vỏ dài.",
            "answer": "peas",
            "image": "images/exercises/u10-veg-peas.jpg"
          },
          {
            "id": "q4",
            "clue_vi": "Quả tròn, vỏ xanh hoặc đỏ, giòn, có thể ăn sống.",
            "answer": "apple",
            "image": "images/exercises/u10-fruit-apple.jpg"
          },
          {
            "id": "q5",
            "clue_vi": "Củ màu vàng nhạt, mọc dưới đất, thường được chiên hoặc luộc.",
            "answer": "potatoes",
            "image": "images/exercises/u10-veg-potatoes.jpg"
          },
          {
            "id": "q6",
            "clue_vi": "Quả tròn màu đỏ, thường dùng trong salad hoặc nấu sốt.",
            "answer": "tomatoes",
            "image": "images/exercises/u10-veg-tomatoes.jpg"
          }
        ]
      },
      {
        "id": "u10d-ex4-unscramble",
        "type": "unscramble",
        "title": "10.4. Unscramble the names of these drinks.",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành tên đồ uống đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "eta",
            "answer": "tea",
            "example": true
          },
          {
            "id": "q2",
            "scrambled": "rebe",
            "answer": "beer"
          },
          {
            "id": "q3",
            "scrambled": "klim",
            "answer": "milk"
          },
          {
            "id": "q4",
            "scrambled": "fecofe",
            "answer": "coffee"
          },
          {
            "id": "q5",
            "scrambled": "rituf eciju",
            "answer": "fruit juice"
          },
          {
            "id": "q6",
            "scrambled": "nilemar retaw",
            "answer": "mineral water"
          }
        ]
      },
      {
        "id": "u10d-ex5-multiple-choice",
        "type": "multiple_choice",
        "title": "10.5. Choose a, b or c.",
        "instructions_vi": "Chọn đáp án đúng nhất.",
        "questions": [
          {
            "id": "q1",
            "question": "Vegetarians do not eat...",
            "options": [
              "vegetables",
              "meat",
              "fast food"
            ],
            "answer": "meat",
            "example": true
          },
          {
            "id": "q2",
            "question": "Garlic is a kind of...",
            "options": [
              "fruit",
              "fast food",
              "vegetable"
            ],
            "answer": "vegetable"
          },
          {
            "id": "q3",
            "question": "You put ... in coffee.",
            "options": [
              "salt",
              "beer",
              "sugar"
            ],
            "answer": "sugar"
          },
          {
            "id": "q4",
            "question": "Which is correct?",
            "options": [
              "pinapple",
              "pineapple",
              "pieapple"
            ],
            "answer": "pineapple"
          },
          {
            "id": "q5",
            "question": "The first sound in 'onion' is the same as the sound in...",
            "options": [
              "fun",
              "orange",
              "man"
            ],
            "answer": "fun"
          },
          {
            "id": "q6",
            "question": "A pear is...",
            "options": [
              "a drink",
              "a vegetable",
              "a fruit"
            ],
            "answer": "a fruit"
          }
        ]
      }
    ]
  },
  11: {
    "unit": {
      "id": "u11d",
      "title": "Unit 11: In the Kitchen",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u11d-ex1-true-false",
        "type": "true_false",
        "title": "11.1. Tick (✓) yes or no. Write sentences for the wrong answers.",
        "instructions_vi": "Xác định câu đúng hay sai. Nếu sai, đáp án đúng sẽ hiện ra sau khi bạn nộp bài.",
        "questions": [
          {
            "id": "q1",
            "statement": "I use a frying pan to drink out of.",
            "answer": false,
            "note": "I use a glass / a cup / a mug to drink out of.",
            "example": true
          },
          {
            "id": "q2",
            "statement": "You use washing-up liquid to clean plates.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "The fridge is cold inside.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "The fridge is colder than the freezer.",
            "answer": false,
            "note": "The freezer is colder than the fridge."
          },
          {
            "id": "q5",
            "statement": "I turn on the tap to get water.",
            "answer": true
          },
          {
            "id": "q6",
            "statement": "A tea towel is for making tea.",
            "answer": false,
            "note": "A tea towel is for drying plates."
          }
        ]
      },
      {
        "id": "u11d-ex2-questions",
        "type": "question_formation",
        "title": "11.2. Make questions for these answers.",
        "instructions_vi": "Đặt câu hỏi phù hợp cho mỗi câu trả lời cho sẵn. Gợi ý từ: Where can I find…? / Can I help with the…? / Where does…go? / Where is…? Lưu ý một số câu có thể có nhiều hơn một đáp án đúng.",
        "questions": [
          {
            "id": "q1",
            "given_answer": "It's in the cupboard.",
            "answer": "Where's the coffee?",
            "example": true
          },
          {
            "id": "q2",
            "given_answer": "It's on the cooker.",
            "answer": "Where's the saucepan?",
            "accepted_answers": [
              "Where's the saucepan?",
              "Where's the frying pan?",
              "Where is the saucepan?",
              "Where is the frying pan?"
            ]
          },
          {
            "id": "q3",
            "given_answer": "Please put them on the worktop.",
            "answer": "Where do these bowls go?"
          },
          {
            "id": "q4",
            "given_answer": "Thanks. You can wash these plates and I'll dry them.",
            "answer": "Can I help with the washing-up?"
          },
          {
            "id": "q5",
            "given_answer": "In the fridge on the bottom shelf.",
            "answer": "Where can I find the milk?"
          }
        ]
      },
      {
        "id": "u11d-ex3-need",
        "type": "word_from_definition",
        "title": "11.3. What do you need?",
        "instructions_vi": "Viết vật dụng cần thiết cho mỗi việc. Có thể có nhiều đáp án đúng, chỉ cần liệt kê ít nhất một vật hợp lý.",
        "questions": [
          {
            "id": "q1",
            "clue": "To make coffee I need...",
            "answer": "a coffee maker, a cup, a spoon",
            "example": true
          },
          {
            "id": "q2",
            "clue": "To make tea I need...",
            "answer": "a cup, a teapot, a spoon",
            "accepted_answers": [
              "a cup",
              "a teapot",
              "a spoon"
            ]
          },
          {
            "id": "q3",
            "clue": "To fry something I need...",
            "answer": "a frying pan, a cooker",
            "accepted_answers": [
              "a frying pan",
              "a cooker"
            ]
          },
          {
            "id": "q4",
            "clue": "To eat my food I need...",
            "answer": "a plate or bowl, a knife and fork",
            "accepted_answers": [
              "a plate",
              "a bowl",
              "a knife and fork",
              "a spoon and fork",
              "chopsticks"
            ]
          },
          {
            "id": "q5",
            "clue": "To drink some water I need...",
            "answer": "a glass or a cup or a mug",
            "accepted_answers": [
              "a glass",
              "a cup",
              "a mug"
            ]
          },
          {
            "id": "q6",
            "clue": "To cook dinner in two minutes I need...",
            "answer": "a microwave"
          },
          {
            "id": "q7",
            "clue": "To wash plates, knives and forks I need...",
            "answer": "washing-up liquid, a sink and a cloth",
            "accepted_answers": [
              "washing-up liquid",
              "a sink",
              "a cloth",
              "a dishwasher"
            ]
          },
          {
            "id": "q8",
            "clue": "To wash my clothes I need...",
            "answer": "a washing machine"
          }
        ]
      },
      {
        "id": "u11d-ex4-picture",
        "type": "word_from_definition",
        "title": "11.4. Look at the picture. Answer the questions.",
        "instructions_vi": "Nhìn vào hình minh họa nhà bếp và trả lời các câu hỏi.",
        "context": {
          "image": "images/exercises/u11-kitchen.jpg"
        },
        "questions": [
          {
            "id": "q1",
            "clue": "What's on the cooker?",
            "answer": "a saucepan",
            "example": true
          },
          {
            "id": "q2",
            "clue": "What's on the shelf?",
            "answer": "a frying pan and a glass"
          },
          {
            "id": "q3",
            "clue": "What's in the cupboard under the shelf?",
            "answer": "a teapot and a tea towel",
            "accepted_answers": [
              "a teapot and a cloth"
            ]
          },
          {
            "id": "q4",
            "clue": "Where's the microwave?",
            "answer": "on the worktop next to the cooker"
          },
          {
            "id": "q5",
            "clue": "What's next to the sink?",
            "answer": "a kitchen roll"
          },
          {
            "id": "q6",
            "clue": "What's under the sink?",
            "answer": "a bin and a cloth",
            "accepted_answers": [
              "a cupboard with a bin and a cloth"
            ]
          }
        ]
      }
    ]
  },
  12: {
    "unit": {
      "id": "u12d",
      "title": "Unit 12: In the Bedroom and Bathroom",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u12d-ex1-bedroom-labels",
        "type": "labeling",
        "title": "12.1. Look at the picture. Write the words next to the numbers.",
        "instructions_vi": "Nhìn vào hình và gọi tên đồ vật theo đúng số thứ tự được đánh dấu.",
        "context": {
          "image": "images/exercises/u12-bedroom.jpg"
        },
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Vị trí số 1",
            "answer": "pyjamas",
            "example": true
          },
          {
            "id": "q2",
            "clue_vi": "Vị trí số 2",
            "answer": "wardrobe"
          },
          {
            "id": "q3",
            "clue_vi": "Vị trí số 3",
            "answer": "mirror"
          },
          {
            "id": "q4",
            "clue_vi": "Vị trí số 4",
            "answer": "hairbrush"
          },
          {
            "id": "q5",
            "clue_vi": "Vị trí số 5",
            "answer": "comb"
          },
          {
            "id": "q6",
            "clue_vi": "Vị trí số 6",
            "answer": "bed"
          },
          {
            "id": "q7",
            "clue_vi": "Vị trí số 7",
            "answer": "bedside lamp"
          },
          {
            "id": "q8",
            "clue_vi": "Vị trí số 8",
            "answer": "bedside table"
          },
          {
            "id": "q9",
            "clue_vi": "Vị trí số 9",
            "answer": "alarm clock"
          },
          {
            "id": "q10",
            "clue_vi": "Vị trí số 10",
            "answer": "chest of drawers"
          }
        ]
      },
      {
        "id": "u12d-ex2-routines",
        "type": "sentence_construction",
        "title": "12.2. Look at the pictures. Describe what the people are doing.",
        "instructions_vi": "Viết câu mô tả hành động của mỗi người trong tranh, dùng thì hiện tại tiếp diễn.",
        "questions": [
          {
            "id": "q1",
            "name": "Anne",
            "image": "images/exercises/u12-routine-anne.jpg",
            "answer": "Anne is cleaning her teeth.",
            "example": true
          },
          {
            "id": "q2",
            "name": "Selim and Umit",
            "image": "images/exercises/u12-routine-selim-umit.jpg",
            "answer": "Selim and Umit are washing their faces.",
            "required_keywords": [
              "washing",
              "face"
            ]
          },
          {
            "id": "q3",
            "name": "Mrs Park",
            "image": "images/exercises/u12-routine-mrspark.jpg",
            "answer": "Mrs Park is going downstairs.",
            "required_keywords": [
              "going",
              "downstairs"
            ]
          },
          {
            "id": "q4",
            "name": "Mr Park",
            "image": "images/exercises/u12-routine-mrpark.jpg",
            "answer": "Mr Park is having a bath.",
            "required_keywords": [
              "having",
              "bath"
            ]
          },
          {
            "id": "q5",
            "name": "Jaime",
            "image": "images/exercises/u12-routine-jaime.jpg",
            "answer": "Jaime is getting dressed.",
            "required_keywords": [
              "getting",
              "dressed"
            ]
          },
          {
            "id": "q6",
            "name": "Lee",
            "image": "images/exercises/u12-routine-lee.jpg",
            "answer": "Lee is turning off the light.",
            "required_keywords": [
              "turning",
              "light"
            ]
          }
        ]
      },
      {
        "id": "u12d-ex3-routine-cloze",
        "type": "cloze_reading",
        "title": "12.3. Complete this paragraph about your night-time and morning routine.",
        "instructions_vi": "Điền từ thích hợp vào các chỗ trống. Riêng chỗ trống số 2 (giờ đi ngủ) là câu trả lời cá nhân nên có thể chấp nhận nhiều giờ khác nhau.",
        "passage": "I usually {1} to bed at {2} I get {3} and {4} into bed. I usually read {5} a bit. I turn {6} the light and {7} asleep. I {8} up when my alarm clock rings. I get {9} . I have a {10} , {11} my teeth and {12} dressed. I go to the kitchen for breakfast.",
        "blanks": [
          {
            "id": "1",
            "answer": "go",
            "example": true
          },
          {
            "id": "2",
            "answer": "10.30",
            "accepted_answers": [
              "10:30",
              "10 pm",
              "10pm",
              "11 pm",
              "11pm",
              "midnight",
              "half past ten",
              "ten thirty",
              "9.30",
              "9:30",
              "9 pm",
              "9pm"
            ]
          },
          {
            "id": "3",
            "answer": "undressed"
          },
          {
            "id": "4",
            "answer": "get"
          },
          {
            "id": "5",
            "answer": "for"
          },
          {
            "id": "6",
            "answer": "off"
          },
          {
            "id": "7",
            "answer": "fall"
          },
          {
            "id": "8",
            "answer": "wake"
          },
          {
            "id": "9",
            "answer": "up"
          },
          {
            "id": "10",
            "answer": "shower",
            "accepted_answers": [
              "bath"
            ]
          },
          {
            "id": "11",
            "answer": "clean"
          },
          {
            "id": "12",
            "answer": "get"
          }
        ]
      }
    ]
  },
  13: {
    "unit": {
      "id": "u13d",
      "title": "Unit 13: In the Living Room",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u13d-ex1-names",
        "type": "word_from_definition",
        "title": "13.1. Write the names of…",
        "instructions_vi": "Viết tên đồ vật phù hợp với mô tả.",
        "questions": [
          {
            "id": "q1",
            "clue": "somewhere you can put books",
            "answer": "a bookshelf",
            "example": true
          },
          {
            "id": "q2",
            "clue": "somewhere two or three people can sit",
            "answer": "a sofa"
          },
          {
            "id": "q3",
            "clue": "somewhere you can put down your cup",
            "answer": "a coffee table"
          },
          {
            "id": "q4",
            "clue": "something you can look at on the wall",
            "answer": "a picture"
          },
          {
            "id": "q5",
            "clue": "something for switching the light on or off",
            "answer": "a light switch"
          },
          {
            "id": "q6",
            "clue": "something for listening to music",
            "answer": "a hi-fi"
          },
          {
            "id": "q7",
            "clue": "something under your feet",
            "answer": "a carpet",
            "accepted_answers": [
              "a rug"
            ]
          },
          {
            "id": "q8",
            "clue": "something for changing channels on the TV",
            "answer": "a remote control"
          }
        ]
      },
      {
        "id": "u13d-ex2-matching",
        "type": "matching",
        "title": "13.2. Match the words on the left with the words on the right.",
        "instructions_vi": "Nối cụm từ bên trái với từ phù hợp bên phải.",
        "pairs": [
          {
            "left": "switch on the...",
            "right": "lamp"
          },
          {
            "left": "relax in an...",
            "right": "armchair"
          },
          {
            "left": "close the...",
            "right": "curtains"
          },
          {
            "left": "pass the...",
            "right": "remote control"
          },
          {
            "left": "listen to the...",
            "right": "radio"
          },
          {
            "left": "watch...",
            "right": "TV"
          }
        ]
      },
      {
        "id": "u13d-ex3-corrections",
        "type": "error_correction",
        "title": "13.3. Correct the mistakes in the sentences.",
        "instructions_vi": "Sửa lỗi sai trong mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "original": "This evening let's just relax us at home.",
            "answer": "This evening let's just relax at home.",
            "example": true
          },
          {
            "id": "q2",
            "original": "I don't often listen the radio.",
            "answer": "I don't often listen to the radio."
          },
          {
            "id": "q3",
            "original": "We need some more bookshelfs in this room.",
            "answer": "We need some more bookshelves in this room."
          },
          {
            "id": "q4",
            "original": "I watched at television all evening yesterday.",
            "answer": "I watched television all evening yesterday."
          },
          {
            "id": "q5",
            "original": "It's dark now. Please make the curtains.",
            "answer": "It's dark now. Please close the curtains."
          },
          {
            "id": "q6",
            "original": "Liam has some very nice furnitures in his house.",
            "answer": "Liam has some very nice furniture in his house."
          }
        ]
      },
      {
        "id": "u13d-ex4-wordsearch",
        "type": "word_search",
        "title": "13.4. Find 10 more words from this unit in the wordsearch.",
        "instructions_vi": "Tìm các từ ẩn trong bảng chữ cái, gõ lại từ bạn tìm được (không cần đúng thứ tự). Từ 'BOOK' đã được khoanh sẵn làm ví dụ, không tính điểm.",
        "context": {
          "image": "images/exercises/u13-wordsearch.jpg",
          "description": "Từ 'BOOK' đã được khoanh tròn sẵn làm ví dụ."
        },
        "answers": [
          "Radio",
          "Lamp",
          "Hifi",
          "Carpet",
          "Curtains",
          "Light",
          "Socket",
          "Remote control",
          "Chair",
          "Rug",
          "TV"
        ],
        "blank_count": 10
      }
    ]
  },
  14: {
    "unit": {
      "id": "u14d",
      "title": "Unit 14: Jobs",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u14d-ex1-where",
        "type": "word_from_definition",
        "title": "14.1. Where do they work?",
        "instructions_vi": "Viết câu cho biết nơi làm việc của mỗi nghề.",
        "questions": [
          {
            "id": "q1",
            "clue": "A teacher",
            "answer": "A teacher works in a school / college / university.",
            "example": true
          },
          {
            "id": "q2",
            "clue": "A doctor",
            "answer": "A doctor works in a hospital."
          },
          {
            "id": "q3",
            "clue": "A waiter",
            "answer": "A waiter works in a restaurant."
          },
          {
            "id": "q4",
            "clue": "A secretary",
            "answer": "A secretary works in an office."
          },
          {
            "id": "q5",
            "clue": "A shop assistant",
            "answer": "A shop assistant works in a shop."
          },
          {
            "id": "q6",
            "clue": "A hairdresser",
            "answer": "A hairdresser works in a beauty salon."
          }
        ]
      },
      {
        "id": "u14d-ex2-jobs-pictures",
        "type": "situational_expression",
        "title": "14.2. Match the pictures with the jobs in the box.",
        "instructions_vi": "Xem hình và chọn nghề nghiệp phù hợp.",
        "word_bank": [
          "Nurse",
          "Farmer",
          "Secretary",
          "Taxi driver",
          "Engineer",
          "Mechanic"
        ],
        "questions": [
          {
            "id": "q1",
            "situation": "Xem hình và chọn nghề nghiệp phù hợp.",
            "image": "images/exercises/u14-job-farmer.jpg",
            "answer": "Farmer",
            "example": true
          },
          {
            "id": "q2",
            "situation": "Xem hình và chọn nghề nghiệp phù hợp.",
            "image": "images/exercises/u14-job-engineer.jpg",
            "answer": "Engineer"
          },
          {
            "id": "q3",
            "situation": "Xem hình và chọn nghề nghiệp phù hợp.",
            "image": "images/exercises/u14-job-taxidriver.jpg",
            "answer": "Taxi driver"
          },
          {
            "id": "q4",
            "situation": "Xem hình và chọn nghề nghiệp phù hợp.",
            "image": "images/exercises/u14-job-nurse.jpg",
            "answer": "Nurse"
          },
          {
            "id": "q5",
            "situation": "Xem hình và chọn nghề nghiệp phù hợp.",
            "image": "images/exercises/u14-job-mechanic.jpg",
            "answer": "Mechanic"
          },
          {
            "id": "q6",
            "situation": "Xem hình và chọn nghề nghiệp phù hợp.",
            "image": "images/exercises/u14-job-secretary.jpg",
            "answer": "Secretary"
          }
        ]
      },
      {
        "id": "u14d-ex3-crossword",
        "type": "crossword",
        "title": "14.3. Complete the crossword.",
        "instructions_vi": "Điền từ chỉ nghề nghiệp phù hợp với gợi ý và mẫu chữ cái cho sẵn.",
        "clues": [
          {
            "number": 1,
            "direction": "across",
            "clue": "works on a bus (gợi ý chữ cái: Busdr_v__)",
            "answer": "bus driver",
            "example": true
          },
          {
            "number": 2,
            "direction": "across",
            "clue": "works in a hospital (gợi ý chữ cái: D_____)",
            "answer": "doctor"
          },
          {
            "number": 3,
            "direction": "across",
            "clue": "works in a school (gợi ý chữ cái: _______)",
            "answer": "teacher"
          },
          {
            "number": 4,
            "direction": "across",
            "clue": "works in a restaurant (gợi ý chữ cái: ___t__)",
            "answer": "waiter"
          },
          {
            "number": 5,
            "direction": "across",
            "clue": "writes books (gợi ý chữ cái: W__t_r)",
            "answer": "writer"
          },
          {
            "number": 6,
            "direction": "across",
            "clue": "works with the doctor (gợi ý chữ cái: _____)",
            "answer": "nurse"
          }
        ]
      },
      {
        "id": "u14d-ex4-fill",
        "type": "fill_in_the_blank",
        "title": "14.4. Complete the sentences.",
        "instructions_vi": "Điền từ chỉ nghề nghiệp phù hợp vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "sentence": "He works in a factory which makes electrical goods. (a factory worker)",
            "answer": "factory worker",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "She's an ______ . She builds roads and bridges.",
            "answer": "engineer"
          },
          {
            "id": "q3",
            "sentence": "The traffic ______ is checking all the parked cars.",
            "answer": "warden"
          },
          {
            "id": "q4",
            "sentence": "The ______ told me to return the book at the end of the month.",
            "answer": "librarian"
          },
          {
            "id": "q5",
            "sentence": "The bank ______ changed some money for me.",
            "answer": "clerk"
          },
          {
            "id": "q6",
            "sentence": "A police ______ told me the way to the station.",
            "answer": "officer"
          }
        ]
      }
    ]
  },
  15: {
    "unit": {
      "id": "u15d",
      "title": "Unit 15: At School and University",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u15d-ex1-subjects",
        "type": "matching",
        "title": "15.1. Match the subject on the left with what you study on the right.",
        "instructions_vi": "Nối môn học bên trái với nội dung học tương ứng bên phải.",
        "pairs": [
          {
            "left": "maths",
            "right": "25y + 32x = 51z"
          },
          {
            "left": "physics",
            "right": "E = mc2"
          },
          {
            "left": "history",
            "right": "the 15th century"
          },
          {
            "left": "geography",
            "right": "the countries of the world"
          },
          {
            "left": "PE",
            "right": "sport"
          },
          {
            "left": "English",
            "right": "spelling"
          },
          {
            "left": "chemistry",
            "right": "H2O"
          },
          {
            "left": "biology",
            "right": "animals and plants"
          },
          {
            "left": "ICT",
            "right": "computers"
          }
        ]
      },
      {
        "id": "u15d-ex2-memory",
        "type": "word_search",
        "title": "15.2. Look at the picture for 30 seconds. Then cover it. How many objects can you remember?",
        "instructions_vi": "Nhìn hình trong 30 giây, sau đó che lại và viết tên các đồ vật bạn nhớ được bằng tiếng Anh (không cần đúng thứ tự).",
        "context": {
          "image": "images/exercises/u15-desk-objects.jpg"
        },
        "answers": [
          "board rubber",
          "ruler",
          "piece of paper",
          "pencil sharpener",
          "drawing pin",
          "pencil",
          "textbook",
          "notebook",
          "pen"
        ],
        "blank_count": 9
      },
      {
        "id": "u15d-ex3-verb-cloze",
        "type": "cloze_reading",
        "title": "15.3. Choose a verb to fill the gaps below. Put the verb in the correct form.",
        "instructions_vi": "Chọn động từ phù hợp (teach / study / go / learn / do / take / pass / fail / get) và chia đúng dạng để điền vào chỗ trống.",
        "passage": "Ethan does well at school. He finds it easy to {1} and he always {2} his homework. He usually {3} all his exams. He will {4} his final school exams soon. If he {5} , he will {6} to university next year. If he {7} , he will be very sad. Ethan really wants to {8} geography at university. He would also like to {9} a special geology course. His sister is already at university. Next year she will {10} her degree and then she will try to find a job.",
        "blanks": [
          {
            "id": "1",
            "answer": "learn",
            "example": true
          },
          {
            "id": "2",
            "answer": "does"
          },
          {
            "id": "3",
            "answer": "passes"
          },
          {
            "id": "4",
            "answer": "take",
            "accepted_answers": [
              "do"
            ]
          },
          {
            "id": "5",
            "answer": "passes"
          },
          {
            "id": "6",
            "answer": "go"
          },
          {
            "id": "7",
            "answer": "fails"
          },
          {
            "id": "8",
            "answer": "study"
          },
          {
            "id": "9",
            "answer": "do"
          },
          {
            "id": "10",
            "answer": "get"
          }
        ]
      }
    ]
  }
};
