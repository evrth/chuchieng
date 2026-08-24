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
  },
  16: {
    "unit": {
      "id": "u16d",
      "title": "Unit 16: Communications",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u16d-ex1-names",
        "type": "labeling",
        "title": "16.1. What are the names of these things?",
        "instructions_vi": "Nhìn hình và viết tên đồ vật bằng tiếng Anh.",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-keyboard.jpg",
            "answer": "keyboard",
            "example": true
          },
          {
            "id": "q2",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-phonebox.jpg",
            "answer": "phone box"
          },
          {
            "id": "q3",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-mobilephone.jpg",
            "answer": "mobile phone"
          },
          {
            "id": "q4",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-stamp.jpg",
            "answer": "stamp"
          },
          {
            "id": "q5",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-mouse.jpg",
            "answer": "mouse"
          },
          {
            "id": "q6",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-address.jpg",
            "answer": "address"
          },
          {
            "id": "q7",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-envelope.jpg",
            "answer": "envelope"
          },
          {
            "id": "q8",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-letterbox.jpg",
            "answer": "letter box"
          },
          {
            "id": "q9",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-screen.jpg",
            "answer": "screen"
          },
          {
            "id": "q10",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-laptop.jpg",
            "answer": "laptop"
          },
          {
            "id": "q11",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-memorystick.jpg",
            "answer": "memory stick"
          },
          {
            "id": "q12",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u16-item-phone.jpg",
            "answer": "phone"
          }
        ]
      },
      {
        "id": "u16d-ex2-phonecall",
        "type": "dialogue_completion",
        "title": "16.2. Complete this phone conversation.",
        "instructions_vi": "Điền từ phù hợp vào chỗ trống trong đoạn hội thoại điện thoại. Lưu ý một số câu có thể có nhiều hơn một đáp án đúng.",
        "dialogues": [
          {
            "turns": [
              {
                "speaker": "AMELIA",
                "line": "Hello."
              },
              {
                "speaker": "MEENA",
                "line": "Hello. It's Meena here. Can I ______ to Amal, please?",
                "answer": "speak",
                "accepted_answers": [
                  "talk"
                ]
              },
              {
                "speaker": "AMELIA",
                "line": "I'm ______,",
                "answer": "sorry"
              },
              {
                "speaker": "",
                "line": "he's at work ______ the moment.",
                "answer": "at"
              },
              {
                "speaker": "",
                "line": "Can I ______ a message?",
                "answer": "take",
                "accepted_answers": [
                  "give him"
                ]
              },
              {
                "speaker": "MEENA",
                "line": "It's all right. I'll ______ back later.",
                "answer": "call",
                "accepted_answers": [
                  "phone",
                  "ring"
                ]
              },
              {
                "speaker": "AMELIA",
                "line": "OK, then. Bye."
              },
              {
                "speaker": "MEENA",
                "line": "Bye."
              }
            ]
          }
        ]
      }
    ]
  },
  17: {
    "unit": {
      "id": "u17d",
      "title": "Unit 17: Your Phone",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u17d-ex1-matching",
        "type": "matching",
        "title": "17.1. Match the things on your phone with what they do.",
        "instructions_vi": "Nối bộ phận của điện thoại với chức năng của nó.",
        "pairs": [
          {
            "left": "camera",
            "right": "takes photos"
          },
          {
            "left": "SIM card",
            "right": "stores the information you need to use your phone"
          },
          {
            "left": "screen",
            "right": "shows pictures and words"
          },
          {
            "left": "phone case",
            "right": "covers the phone"
          },
          {
            "left": "power button",
            "right": "starts the phone"
          }
        ]
      },
      {
        "id": "u17d-ex2-choose",
        "type": "multiple_choice",
        "title": "17.2. Choose the right words to complete these sentences.",
        "instructions_vi": "Chọn từ đúng để hoàn thành câu.",
        "questions": [
          {
            "id": "q1",
            "question": "Tanya has a new ___ for texting on the Internet.",
            "options": [
              "app",
              "battery"
            ],
            "answer": "app",
            "example": true
          },
          {
            "id": "q2",
            "question": "When your phone's battery is low, you need a ___.",
            "options": [
              "charger",
              "camera"
            ],
            "answer": "charger"
          },
          {
            "id": "q3",
            "question": "You can use my phone to ___ Megan.",
            "options": [
              "voicemail",
              "call"
            ],
            "answer": "call"
          },
          {
            "id": "q4",
            "question": "Danny's new phone has a great ___. It takes amazing photos.",
            "options": [
              "screen",
              "camera"
            ],
            "answer": "camera"
          },
          {
            "id": "q5",
            "question": "I bought a new ___ in France, so it was cheaper to call and use the Internet.",
            "options": [
              "battery",
              "SIM card"
            ],
            "answer": "SIM card"
          },
          {
            "id": "q6",
            "question": "I want to buy a new ___. This one is old and dirty.",
            "options": [
              "phone case",
              "app"
            ],
            "answer": "phone case"
          }
        ]
      },
      {
        "id": "u17d-ex3-sentences",
        "type": "fill_in_the_blank",
        "title": "17.3. Complete these sentences with words.",
        "instructions_vi": "Điền động từ phù hợp (chia đúng dạng) vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "sentence": "Maria texted me last night, but I didn't see her message until this morning.",
            "answer": "texted",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "Carlos ______ a lot of photos of his new dog and puts them on Facebook.",
            "answer": "takes"
          },
          {
            "id": "q3",
            "sentence": "What was the last app that you ______?",
            "answer": "downloaded"
          },
          {
            "id": "q4",
            "sentence": "Lucy ______ her sister. They talked about their holiday at the beach.",
            "answer": "called"
          },
          {
            "id": "q5",
            "sentence": "Victor ______ me a voicemail. He asked me to call him back.",
            "answer": "left"
          }
        ]
      },
      {
        "id": "u17d-ex4-dialogue",
        "type": "dialogue_completion",
        "title": "17.4. Complete the conversation with words.",
        "instructions_vi": "Điền từ phù hợp (locked / PIN / unlock / swipe / save / memory / delete) vào chỗ trống.",
        "dialogues": [
          {
            "turns": [
              {
                "speaker": "DEEPA",
                "line": "Can I look at your photos from the concert?"
              },
              {
                "speaker": "IREENA",
                "line": "Sure. Here's my phone. Let me just put in the PIN to ______ it.",
                "answer": "unlock",
                "example": true
              },
              {
                "speaker": "DEEPA",
                "line": "That's a great one! Do I ______ right to see the next photo?",
                "answer": "swipe"
              },
              {
                "speaker": "IREENA",
                "line": "Yes, that's right."
              },
              {
                "speaker": "DEEPA",
                "line": "Did you delete the ones from the restaurant?"
              },
              {
                "speaker": "IREENA",
                "line": "No, I ______ them in a different folder. Here they are.",
                "answer": "saved"
              }
            ]
          }
        ]
      }
    ]
  },
  18: {
    "unit": {
      "id": "u18d",
      "title": "Unit 18: Holidays",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u18d-ex1-dialogues",
        "type": "dialogue_completion",
        "title": "18.1. Complete the sentences.",
        "instructions_vi": "Điền từ phù hợp vào chỗ trống trong mỗi đoạn hội thoại ngắn.",
        "dialogues": [
          {
            "turns": [
              {
                "speaker": "A",
                "line": "Are you working on Monday?"
              },
              {
                "speaker": "B",
                "line": "No, I'm on holiday.",
                "example": true,
                "answer": "on holiday"
              }
            ]
          },
          {
            "turns": [
              {
                "speaker": "A",
                "line": "Are you ______ on holiday this year?",
                "answer": "going"
              },
              {
                "speaker": "B",
                "line": "Yes, I'm going camping."
              }
            ]
          },
          {
            "turns": [
              {
                "speaker": "A",
                "line": "Did you have a good ______ in Greece?",
                "answer": "time"
              },
              {
                "speaker": "B",
                "line": "Yes, it was wonderful."
              }
            ]
          },
          {
            "turns": [
              {
                "speaker": "A",
                "line": "Are you flying to Italy?"
              },
              {
                "speaker": "B",
                "line": "No, I'm going ______ train.",
                "answer": "by"
              }
            ]
          },
          {
            "turns": [
              {
                "speaker": "A",
                "line": "I'm going to New York next week."
              },
              {
                "speaker": "B",
                "line": "Great! Please ______ me a postcard.",
                "answer": "send"
              }
            ]
          }
        ]
      },
      {
        "id": "u18d-ex2-holidaytype",
        "type": "word_from_definition",
        "title": "18.2. What type of holiday is each person talking about?",
        "instructions_vi": "Đọc câu mô tả và cho biết đó là loại hình du lịch nào.",
        "questions": [
          {
            "id": "q1",
            "clue": "It was fun but the tent was very small.",
            "answer": "camping",
            "example": true
          },
          {
            "id": "q2",
            "clue": "Everything was included - hotels and flights.",
            "answer": "a package holiday"
          },
          {
            "id": "q3",
            "clue": "We were on the coach for seven days. I was very tired.",
            "answer": "a coach tour"
          },
          {
            "id": "q4",
            "clue": "We walked about 20 kilometres every day.",
            "answer": "a walking holiday"
          },
          {
            "id": "q5",
            "clue": "We went to Switzerland in December. There was a lot of snow.",
            "answer": "a winter holiday"
          }
        ]
      },
      {
        "id": "u18d-ex3-items",
        "type": "word_from_definition",
        "title": "18.3. Write the names of these things you need for a holiday.",
        "instructions_vi": "Nhìn hình và viết tên đồ vật cần cho một chuyến du lịch.",
        "questions": [
          {
            "id": "q1",
            "clue": "Vật dụng này là gì?",
            "image": "images/exercises/u18-item-currency.jpg",
            "answer": "currency",
            "example": true
          },
          {
            "id": "q2",
            "clue": "Vật dụng này là gì?",
            "image": "images/exercises/u18-item-passport.jpg",
            "answer": "passport"
          },
          {
            "id": "q3",
            "clue": "Vật dụng này là gì?",
            "image": "images/exercises/u18-item-camera.jpg",
            "answer": "camera"
          },
          {
            "id": "q4",
            "clue": "Vật dụng này là gì?",
            "image": "images/exercises/u18-item-luggage.jpg",
            "answer": "luggage",
            "accepted_answers": [
              "suitcase"
            ]
          },
          {
            "id": "q5",
            "clue": "Vật dụng này là gì?",
            "image": "images/exercises/u18-item-rucksack.jpg",
            "answer": "rucksack"
          },
          {
            "id": "q6",
            "clue": "Vật dụng này là gì?",
            "image": "images/exercises/u18-item-tickets.jpg",
            "answer": "tickets"
          }
        ]
      },
      {
        "id": "u18d-ex4-whatcall",
        "type": "word_from_definition",
        "title": "18.4. What do we call...?",
        "instructions_vi": "Đọc mô tả và viết từ phù hợp (một số câu có gợi ý chữ cái đầu).",
        "questions": [
          {
            "id": "q1",
            "clue": "something you take photos with?",
            "answer": "a camera",
            "example": true
          },
          {
            "id": "q2",
            "clue": "a special stamp in your passport to enter a country? (gợi ý: a v_____)",
            "answer": "a visa"
          },
          {
            "id": "q3",
            "clue": "something you fly in? (gợi ý: a p_____)",
            "answer": "a plane"
          },
          {
            "id": "q4",
            "clue": "something that you carry things on your back in? (gợi ý: a r_____)",
            "answer": "a rucksack"
          },
          {
            "id": "q5",
            "clue": "what people carry their clothes in when they go on holiday? (gợi ý: a s_____)",
            "answer": "a suitcase"
          }
        ]
      },
      {
        "id": "u18d-ex5-email",
        "type": "cloze_reading",
        "title": "18.5. Fill the gaps in this email.",
        "instructions_vi": "Điền từ thích hợp vào chỗ trống trong email.",
        "passage": "I'm having a great {1} here in Spain. The {2} is great - the clubs are open all night. The {3} food is very good - lots of fish and salads. Please send me a {4} from your holiday in Italy. Love, Alex",
        "blanks": [
          {
            "id": "1",
            "answer": "time",
            "example": true
          },
          {
            "id": "2",
            "answer": "nightlife"
          },
          {
            "id": "3",
            "answer": "local"
          },
          {
            "id": "4",
            "answer": "postcard"
          }
        ]
      }
    ]
  },
  19: {
    "unit": {
      "id": "u19d",
      "title": "Unit 19: Shops and Shopping",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u19d-ex1-matching",
        "type": "matching",
        "title": "19.1. Match the item with the shop.",
        "instructions_vi": "Nối tên cửa hàng với món đồ tương ứng bán ở đó.",
        "pairs": [
          {
            "left": "Chemist",
            "right": "Aspirin",
            "image": "images/exercises/u19-shop-chemist.jpg"
          },
          {
            "left": "Toy shop",
            "right": "Beach ball",
            "image": "images/exercises/u19-shop-toyshop.jpg"
          },
          {
            "left": "Butcher",
            "right": "Sausage",
            "image": "images/exercises/u19-shop-butcher.jpg"
          },
          {
            "left": "Newsagent",
            "right": "Greeting cards",
            "image": "images/exercises/u19-shop-newsagent.jpg"
          },
          {
            "left": "Gift shop",
            "right": "Souvenir t-shirt",
            "image": "images/exercises/u19-shop-giftshop.jpg"
          },
          {
            "left": "Baker",
            "right": "Bread",
            "image": "images/exercises/u19-shop-baker.jpg"
          }
        ]
      },
      {
        "id": "u19d-ex2-wheretogo",
        "type": "word_from_definition",
        "title": "19.2. Where do you need to go?",
        "instructions_vi": "Đọc câu và cho biết bạn cần đến cửa hàng nào.",
        "questions": [
          {
            "id": "q1",
            "clue": "I want to get a newspaper.",
            "answer": "the newsagent",
            "example": true
          },
          {
            "id": "q2",
            "clue": "I'd like to buy food for a week.",
            "answer": "a supermarket"
          },
          {
            "id": "q3",
            "clue": "I need some stamps.",
            "answer": "the post office",
            "accepted_answers": [
              "a newsagent"
            ]
          },
          {
            "id": "q4",
            "clue": "We must get Michael a present.",
            "answer": "a gift shop"
          },
          {
            "id": "q5",
            "clue": "I'd like to buy a book.",
            "answer": "a bookshop"
          },
          {
            "id": "q6",
            "clue": "I want to buy some clothes for myself and my children in one shop.",
            "answer": "a department store",
            "accepted_answers": [
              "a supermarket"
            ]
          }
        ]
      },
      {
        "id": "u19d-ex3-floors",
        "type": "word_from_definition",
        "title": "19.3. Look at the department store plan. Which floor will you go to buy...?",
        "instructions_vi": "Dựa vào sơ đồ cửa hàng bên dưới, cho biết bạn sẽ lên tầng nào để mua món đồ đó.",
        "context": {
          "table": {
            "headers": [
              "Floor",
              "Department"
            ],
            "rows": [
              [
                "Fourth floor",
                "Toys"
              ],
              [
                "Fourth floor",
                "Restaurant"
              ],
              [
                "Third floor",
                "Furniture"
              ],
              [
                "Second floor",
                "Men's Wear"
              ],
              [
                "Second floor",
                "Children's Department"
              ],
              [
                "First floor",
                "Women's Wear"
              ],
              [
                "Ground Floor",
                "Beauty"
              ],
              [
                "Basement",
                "Electricals"
              ],
              [
                "Basement",
                "Food"
              ]
            ]
          }
        },
        "questions": [
          {
            "id": "q1",
            "clue": "an armchair?",
            "answer": "third floor",
            "example": true
          },
          {
            "id": "q2",
            "clue": "lipstick?",
            "answer": "ground floor"
          },
          {
            "id": "q3",
            "clue": "a cup of tea?",
            "answer": "fourth floor"
          },
          {
            "id": "q4",
            "clue": "a packet of tea?",
            "answer": "basement"
          },
          {
            "id": "q5",
            "clue": "a skirt?",
            "answer": "first floor"
          },
          {
            "id": "q6",
            "clue": "some baby clothes?",
            "answer": "second floor"
          },
          {
            "id": "q7",
            "clue": "a tie?",
            "answer": "second floor"
          },
          {
            "id": "q8",
            "clue": "a TV?",
            "answer": "basement"
          },
          {
            "id": "q9",
            "clue": "a bed?",
            "answer": "third floor"
          },
          {
            "id": "q10",
            "clue": "a doll?",
            "answer": "fourth floor"
          }
        ]
      },
      {
        "id": "u19d-ex4a-definitions",
        "type": "word_from_definition",
        "title": "19.4.1. Write the words for these definitions.",
        "instructions_vi": "Viết từ phù hợp với mô tả.",
        "questions": [
          {
            "id": "q1",
            "clue": "a person who sells things in a shop",
            "answer": "shop assistant",
            "example": true
          },
          {
            "id": "q2",
            "clue": "money (not a cheque or credit/debit card)",
            "answer": "cash"
          },
          {
            "id": "q3",
            "clue": "a piece of paper that is worth £20",
            "answer": "a £20 note",
            "accepted_answers": [
              "a note",
              "20 pound note"
            ]
          },
          {
            "id": "q4",
            "clue": "'plastic money'",
            "answer": "a credit or a debit card",
            "accepted_answers": [
              "a credit card",
              "a debit card"
            ]
          },
          {
            "id": "q5",
            "clue": "coins or small notes",
            "answer": "change"
          }
        ]
      },
      {
        "id": "u19d-ex4b-write-definitions",
        "type": "open_response",
        "title": "19.4.2. Now write definitions in English for these words/phrases.",
        "instructions_vi": "Viết định nghĩa bằng tiếng Anh cho các từ sau. Chấm theo từ khóa quan trọng, không cần đúng từng chữ.",
        "questions": [
          {
            "id": "q1",
            "situation": "a butcher's",
            "answer": "a shop that sells meat",
            "required_keywords": [
              "shop",
              "meat"
            ],
            "example": true
          },
          {
            "id": "q2",
            "situation": "the first floor",
            "answer": "the floor above the ground floor (in a British building)",
            "required_keywords": [
              "floor",
              "above"
            ]
          },
          {
            "id": "q3",
            "situation": "a newsagent's",
            "answer": "a shop that sells newspapers and magazines",
            "required_keywords": [
              "shop",
              "newspaper"
            ]
          },
          {
            "id": "q4",
            "situation": "the basement",
            "answer": "the floor under the ground floor",
            "required_keywords": [
              "floor",
              "under"
            ]
          }
        ]
      },
      {
        "id": "u19d-ex5-signs",
        "type": "word_from_definition",
        "title": "19.5. Which sign tells you...?",
        "instructions_vi": "Đọc mô tả và viết từ trên biển báo tương ứng.",
        "questions": [
          {
            "id": "q1",
            "clue": "that you can give the money for the things you are buying here?",
            "answer": "Cash desk",
            "example": true
          },
          {
            "id": "q2",
            "clue": "that you can't go into the shop?",
            "answer": "Closed"
          },
          {
            "id": "q3",
            "clue": "that the door will open towards you?",
            "answer": "Pull"
          },
          {
            "id": "q4",
            "clue": "that the door will open away from you?",
            "answer": "Push"
          },
          {
            "id": "q5",
            "clue": "that you can go into the shop?",
            "answer": "Open"
          }
        ]
      },
      {
        "id": "u19d-ex6-dialogue",
        "type": "dialogue_completion",
        "title": "19.6. Fill the gaps in the dialogue.",
        "instructions_vi": "Điền từ phù hợp vào chỗ trống trong đoạn hội thoại mua sắm.",
        "dialogues": [
          {
            "turns": [
              {
                "speaker": "CUSTOMER",
                "line": "How much does this jacket ______?",
                "answer": "cost"
              },
              {
                "speaker": "SHOP ASSISTANT",
                "line": "£50."
              },
              {
                "speaker": "CUSTOMER",
                "line": "I'll take it, please. Can I ______ by credit card?",
                "answer": "pay"
              },
              {
                "speaker": "SHOP ASSISTANT",
                "line": "Certainly. I'll put your receipt in the ______.",
                "answer": "bag",
                "accepted_answers": [
                  "carrier bag"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  20: {
    "unit": {
      "id": "u20d",
      "title": "Unit 20: Online Shopping",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u20d-ex1-matching",
        "type": "matching",
        "title": "20.1. Match the words from A and B with the examples on the right.",
        "instructions_vi": "Nối từ với ví dụ minh họa tương ứng.",
        "pairs": [
          {
            "left": "size",
            "right": "small"
          },
          {
            "left": "price",
            "right": "£12.89"
          },
          {
            "left": "delivery address",
            "right": "7 Park Lane, Bristol"
          },
          {
            "left": "post code",
            "right": "MR12 6QA"
          },
          {
            "left": "credit card",
            "right": "MasterCard"
          },
          {
            "left": "order number",
            "right": "8167990012"
          }
        ]
      },
      {
        "id": "u20d-ex2-choose",
        "type": "multiple_choice",
        "title": "20.2. Choose the right word to complete these sentences.",
        "instructions_vi": "Chọn từ đúng để hoàn thành câu.",
        "questions": [
          {
            "id": "q1",
            "question": "When you shop online, you can ___ for the best price.",
            "options": [
              "search",
              "collect"
            ],
            "answer": "search",
            "example": true
          },
          {
            "id": "q2",
            "question": "You can read ___ from other people who bought the same thing.",
            "options": [
              "sizes",
              "reviews"
            ],
            "answer": "reviews"
          },
          {
            "id": "q3",
            "question": "If you want to buy something, ___ it to your basket.",
            "options": [
              "add",
              "deliver"
            ],
            "answer": "add"
          },
          {
            "id": "q4",
            "question": "If you don't want to buy something that is in your basket, you can ___ it.",
            "options": [
              "delete",
              "order"
            ],
            "answer": "delete"
          },
          {
            "id": "q5",
            "question": "Don't forget to check how much you will pay for ___.",
            "options": [
              "delivery",
              "order number"
            ],
            "answer": "delivery"
          },
          {
            "id": "q6",
            "question": "You can use your ___ to pay for your shopping.",
            "options": [
              "credit card",
              "post code"
            ],
            "answer": "credit card"
          }
        ]
      },
      {
        "id": "u20d-ex3-dialogue",
        "type": "dialogue_completion",
        "title": "20.3. Complete the dialogue with the words below.",
        "instructions_vi": "Điền từ phù hợp (next day / post code / delivery / order number) vào chỗ trống.",
        "dialogues": [
          {
            "turns": [
              {
                "speaker": "TOM",
                "line": "I'm waiting for a delivery of a pair of shoes.",
                "answer": "delivery",
                "example": true
              },
              {
                "speaker": "CUSTOMER CARE",
                "line": "What's your ______?",
                "answer": "order number"
              },
              {
                "speaker": "TOM",
                "line": "It's G99215540000Z."
              },
              {
                "speaker": "CUSTOMER CARE",
                "line": "And what's your address and ______?",
                "answer": "post code"
              },
              {
                "speaker": "TOM",
                "line": "31 Mill Road, WC2 5SN. I bought them yesterday and I paid £5 for ______ delivery. Will they be here today?",
                "answer": "next day"
              },
              {
                "speaker": "CUSTOMER CARE",
                "line": "I'm sorry. We're very busy. Your order will be delivered tomorrow."
              }
            ]
          }
        ]
      },
      {
        "id": "u20d-ex4-ordering",
        "type": "ordering",
        "title": "20.4. Put these steps of buying a computer online in the correct order.",
        "instructions_vi": "Chọn số thứ tự đúng (1-6) cho mỗi bước mua máy tính trực tuyến.",
        "steps": [
          {
            "id": "A",
            "text": "Wait at home for the delivery"
          },
          {
            "id": "B",
            "text": "Add the computer to your basket"
          },
          {
            "id": "C",
            "text": "Choose next day delivery"
          },
          {
            "id": "D",
            "text": "Pay with a credit card"
          },
          {
            "id": "E",
            "text": "Search for a website which sells the computer you want"
          },
          {
            "id": "F",
            "text": "Read online reviews and choose which computer you want to buy"
          }
        ],
        "correct_order": [
          "F",
          "E",
          "B",
          "C",
          "D",
          "A"
        ]
      }
    ]
  },
  21: {
    "unit": {
      "id": "u21d",
      "title": "Unit 21: In a Hotel",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u21d-ex1-dialogue",
        "type": "word_from_definition",
        "title": "21.1. Look at the pictures and complete the dialogue with words.",
        "instructions_vi": "Nhìn hình và điền từ phù hợp vào chỗ trống trong đoạn hội thoại tại khách sạn.",
        "questions": [
          {
            "id": "q1",
            "clue": "CUSTOMER: Can I have a ______ room for tonight, please?",
            "image": "images/exercises/u21-hotel-double.jpg",
            "answer": "double",
            "example": true
          },
          {
            "id": "q2",
            "clue": "RECEPTIONIST: Would you like a room with a ______?",
            "image": "images/exercises/u21-hotel-shower.jpg",
            "answer": "shower"
          },
          {
            "id": "q3",
            "clue": "CUSTOMER: Yes, please. And with a ______, please.",
            "image": "images/exercises/u21-hotel-tv.jpg",
            "answer": "TV"
          },
          {
            "id": "q4",
            "clue": "RECEPTIONIST: All our rooms have a TV, a ______ and a hairdryer.",
            "image": "images/exercises/u21-hotel-phone.jpg",
            "answer": "phone"
          },
          {
            "id": "q5",
            "clue": "...and a phone and a ______.",
            "image": "images/exercises/u21-hotel-hairdryer.jpg",
            "answer": "hairdryer"
          },
          {
            "id": "q6",
            "clue": "I can give you room 25. It has a view of the ______.",
            "image": "images/exercises/u21-hotel-sea.jpg",
            "answer": "sea"
          },
          {
            "id": "q7",
            "clue": "Here is your ______.",
            "image": "images/exercises/u21-hotel-key.jpg",
            "answer": "key"
          },
          {
            "id": "q8",
            "clue": "The ______ is over there. The room's on the second floor.",
            "image": "images/exercises/u21-hotel-lift.jpg",
            "answer": "lift"
          }
        ]
      },
      {
        "id": "u21d-ex2-matching",
        "type": "matching",
        "title": "21.2. Match what you want on the left with what you need on the right.",
        "instructions_vi": "Nối điều bạn muốn (bên trái) với thứ bạn cần (bên phải).",
        "pairs": [
          {
            "left": "to have a drink in your room",
            "right": "a mini-bar"
          },
          {
            "left": "to go to the top floor",
            "right": "the lift"
          },
          {
            "left": "to open your door",
            "right": "a key"
          },
          {
            "left": "to get up at 6 am",
            "right": "a wake-up call"
          },
          {
            "left": "to phone your country",
            "right": "an outside line"
          },
          {
            "left": "to watch the news",
            "right": "a TV"
          },
          {
            "left": "to wash your hair",
            "right": "a shower"
          },
          {
            "left": "to dry your hair",
            "right": "a hairdryer"
          }
        ]
      },
      {
        "id": "u21d-ex3-choose",
        "type": "multiple_choice",
        "title": "21.3. Choose the right words to complete these sentences.",
        "instructions_vi": "Chọn câu đúng trong 2 lựa chọn cho mỗi câu (mỗi câu gốc có 2 từ để lựa chọn, đáp án đúng là câu dùng đúng cả 2 từ).",
        "questions": [
          {
            "id": "q1",
            "question": "1. At reception / reservation you can order room / lift service.",
            "options": [
              "At reception you can order room service.",
              "At reservation you can order lift service."
            ],
            "answer": "At reception you can order room service."
          },
          {
            "id": "q2",
            "question": "2. We'd like a two / double room with a view / see of the garden, please.",
            "options": [
              "We'd like a double room with a view of the garden, please.",
              "We'd like a two room with a see of the garden, please."
            ],
            "answer": "We'd like a double room with a view of the garden, please."
          },
          {
            "id": "q3",
            "question": "3. The lift is after / over there. Take it to the second floor / room.",
            "options": [
              "The lift is over there. Take it to the second floor.",
              "The lift is after there. Take it to the second room."
            ],
            "answer": "The lift is over there. Take it to the second floor."
          },
          {
            "id": "q4",
            "question": "4. Please fill / write in this form / bill.",
            "options": [
              "Please fill in this form.",
              "Please write in this bill."
            ],
            "answer": "Please fill in this form."
          },
          {
            "id": "q5",
            "question": "5. I'd like a sit-up / wake-up call at 7.30 and I'd like to make / have breakfast in my room, please.",
            "options": [
              "I'd like a wake-up call at 7.30 and I'd like to have breakfast in my room, please.",
              "I'd like a sit-up call at 7.30 and I'd like to make breakfast in my room, please."
            ],
            "answer": "I'd like a wake-up call at 7.30 and I'd like to have breakfast in my room, please."
          },
          {
            "id": "q6",
            "question": "6. I have a luggage / reservation for a single / one room with a bathroom.",
            "options": [
              "I have a reservation for a single room with a bathroom.",
              "I have a luggage for a one room with a bathroom."
            ],
            "answer": "I have a reservation for a single room with a bathroom."
          },
          {
            "id": "q7",
            "question": "7. Can I cash / have the bill, please? I'll check / change it now.",
            "options": [
              "Can I have the bill, please? I'll check it now.",
              "Can I cash the bill, please? I'll change it now."
            ],
            "answer": "Can I have the bill, please? I'll check it now."
          },
          {
            "id": "q8",
            "question": "8. I'm leaving today. Can I exchange / order some dollars here before I pay / check out?",
            "options": [
              "I'm leaving today. Can I exchange some dollars here before I check out?",
              "I'm leaving today. Can I order some dollars here before I pay out?"
            ],
            "answer": "I'm leaving today. Can I exchange some dollars here before I check out?"
          }
        ]
      }
    ]
  },
  22: {
    "unit": {
      "id": "u22d",
      "title": "Unit 22: Eating Out",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u22d-ex1-wheretogo",
        "type": "word_from_definition",
        "title": "22.1. Look at this words. Where would you go to...?",
        "instructions_vi": "Đọc câu hỏi và cho biết bạn sẽ đến đâu.",
        "questions": [
          {
            "id": "q1",
            "clue": "buy a meal and take it home to eat?",
            "answer": "a take-away",
            "example": true
          },
          {
            "id": "q2",
            "clue": "have a romantic dinner for two?",
            "answer": "a restaurant",
            "accepted_answers": [
              "restaurant"
            ]
          },
          {
            "id": "q3",
            "clue": "eat a quick lunch?",
            "answer": "a fast food restaurant",
            "accepted_answers": [
              "fast food restaurant"
            ]
          },
          {
            "id": "q4",
            "clue": "have a cake and a cup of coffee?",
            "answer": "a café",
            "accepted_answers": [
              "café"
            ]
          },
          {
            "id": "q5",
            "clue": "drink a glass of wine with friends?",
            "answer": "a bar",
            "accepted_answers": [
              "a pub",
              "bar",
              "pub"
            ]
          }
        ]
      },
      {
        "id": "u22d-ex2-menu",
        "type": "fill_in_the_blank",
        "title": "22.2. Choose one of the words in the box which can go with each of the words in each group.",
        "instructions_vi": "Chọn từ trong Word Bank phù hợp với từng nhóm câu.",
        "word_bank": [
          "soup",
          "curry",
          "salad",
          "pie",
          "steak"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "You can have tomato / vegetable / chicken ______ as a starter.",
            "answer": "soup",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "I'd like the beef / chicken / vegetable ______ as a main course.",
            "answer": "curry"
          },
          {
            "id": "q3",
            "sentence": "I'll have the mixed / tomato / fruit ______.",
            "answer": "salad"
          },
          {
            "id": "q4",
            "sentence": "Can I have the apple / chicken ______, please.",
            "answer": "pie"
          },
          {
            "id": "q5",
            "sentence": "Do you like your ______ well-done, medium or rare?",
            "answer": "steak"
          }
        ]
      },
      {
        "id": "u22d-ex3-corrections",
        "type": "dialogue_error_correction",
        "title": "22.3. Correct the six mistakes in this dialogue.",
        "instructions_vi": "Tìm và sửa 6 lỗi sai trong đoạn hội thoại ở nhà hàng.",
        "original_dialogue": "WAITER: Are you ready for order? to\nCUSTOMER: Yes. I like vegetable soup and steak, please.\nWAITER: What would you like your steak? Rare, medium or done good?\nCUSTOMER: Rare, please.\nWAITER: What you would like to drink?\nCUSTOMER: A orange juice, please.",
        "corrections": [
          {
            "id": "q1",
            "wrong": "Are you ready for order? to",
            "correct": "Are you ready to order?",
            "example": true
          },
          {
            "id": "q2",
            "wrong": "I like vegetable soup and steak, please.",
            "correct": "I'd like vegetable soup and steak, please."
          },
          {
            "id": "q3",
            "wrong": "What would you like your steak? Rare, medium or done good?",
            "correct": "How would you like your steak? Rare, medium or well-done?"
          },
          {
            "id": "q4",
            "wrong": "What you would like to drink?",
            "correct": "What would you like to drink?"
          },
          {
            "id": "q5",
            "wrong": "A orange juice, please.",
            "correct": "An orange juice, please."
          }
        ]
      }
    ]
  },
  23: {
    "unit": {
      "id": "u23d",
      "title": "Unit 23: Sports",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u23d-ex1-sports",
        "type": "word_from_definition",
        "title": "23.1. What are these sports?",
        "instructions_vi": "Nhìn hình và viết tên môn thể thao.",
        "questions": [
          {
            "id": "q1",
            "clue": "Đây là môn gì?",
            "image": "images/exercises/u23-sport-rugby.jpg",
            "answer": "rugby",
            "example": true
          },
          {
            "id": "q2",
            "clue": "Đây là môn gì?",
            "image": "images/exercises/u23-sport-swimming.jpg",
            "answer": "swimming"
          },
          {
            "id": "q3",
            "clue": "Đây là môn gì?",
            "image": "images/exercises/u23-sport-judo.jpg",
            "answer": "judo",
            "accepted_answers": [
              "karate"
            ]
          },
          {
            "id": "q4",
            "clue": "Đây là môn gì?",
            "image": "images/exercises/u23-sport-sailing.jpg",
            "answer": "sailing"
          },
          {
            "id": "q5",
            "clue": "Đây là môn gì?",
            "image": "images/exercises/u23-sport-volleyball.jpg",
            "answer": "volleyball"
          },
          {
            "id": "q6",
            "clue": "Đây là môn gì?",
            "image": "images/exercises/u23-sport-motorracing.jpg",
            "answer": "motor racing"
          }
        ]
      },
      {
        "id": "u23d-ex2-equipment",
        "type": "word_from_definition",
        "title": "23.2. Which sports use these things?",
        "instructions_vi": "Nhìn hình dụng cụ và cho biết đó là môn thể thao nào. Lưu ý một số câu có thể có nhiều hơn một đáp án đúng.",
        "questions": [
          {
            "id": "q1",
            "clue": "Môn thể thao nào?",
            "image": "images/exercises/u23-equip-kayaking.jpg",
            "answer": "kayaking",
            "example": true
          },
          {
            "id": "q2",
            "clue": "Môn thể thao nào?",
            "image": "images/exercises/u23-equip-badminton.jpg",
            "answer": "badminton"
          },
          {
            "id": "q3",
            "clue": "Môn thể thao nào?",
            "image": "images/exercises/u23-equip-tabletennis.jpg",
            "answer": "table tennis"
          },
          {
            "id": "q4",
            "clue": "Môn thể thao nào?",
            "image": "images/exercises/u23-equip-snowboarding.jpg",
            "answer": "snowboarding"
          },
          {
            "id": "q5",
            "clue": "Môn thể thao nào?",
            "image": "images/exercises/u23-equip-baseball.jpg",
            "answer": "baseball"
          },
          {
            "id": "q6",
            "clue": "Môn thể thao nào?",
            "image": "images/exercises/u23-equip-basketball.jpg",
            "answer": "basketball"
          },
          {
            "id": "q7",
            "clue": "Môn thể thao nào?",
            "image": "images/exercises/u23-equip-skiing.jpg",
            "answer": "skiing"
          },
          {
            "id": "q8",
            "clue": "Môn thể thao nào?",
            "image": "images/exercises/u23-equip-americanfootball.jpg",
            "answer": "American football"
          }
        ]
      },
      {
        "id": "u23d-ex3-questions",
        "type": "question_formation",
        "title": "23.3. Ask questions for these answers.",
        "instructions_vi": "Đặt câu hỏi phù hợp cho mỗi câu trả lời cho sẵn.",
        "questions": [
          {
            "id": "q1",
            "given_answer": "On a tennis court.",
            "answer": "Where do people play tennis?",
            "example": true
          },
          {
            "id": "q2",
            "given_answer": "Yes, but only American football.",
            "answer": "Do you play football?"
          },
          {
            "id": "q3",
            "given_answer": "No, I don't do any at all. I prefer watching TV.",
            "answer": "Do you do any sports?"
          },
          {
            "id": "q4",
            "given_answer": "Yes, I go to the swimming pool every Friday.",
            "answer": "Do you go swimming?",
            "accepted_answers": [
              "Do you like swimming?",
              "Do you swim?"
            ]
          },
          {
            "id": "q5",
            "given_answer": "I like running best.",
            "answer": "What is your favourite sport?"
          },
          {
            "id": "q6",
            "given_answer": "On a rugby pitch.",
            "answer": "Where do people play rugby?"
          }
        ]
      }
    ]
  },
  24: {
    "unit": {
      "id": "u24d",
      "title": "Unit 24: Cinema",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u24d-ex1-filmtypes",
        "type": "word_from_definition",
        "title": "24.1. What types of films are these?",
        "instructions_vi": "Đọc mô tả và cho biết đó là thể loại phim gì.",
        "questions": [
          {
            "id": "q1",
            "clue": "Some cowboys rob a train.",
            "answer": "western",
            "example": true
          },
          {
            "id": "q2",
            "clue": "A flying saucer lands from Mars.",
            "answer": "science fiction"
          },
          {
            "id": "q3",
            "clue": "A dead person comes back to life.",
            "answer": "horror"
          },
          {
            "id": "q4",
            "clue": "James Bond saves the world.",
            "answer": "action"
          },
          {
            "id": "q5",
            "clue": "Mickey Mouse goes on a picnic.",
            "answer": "cartoon"
          },
          {
            "id": "q6",
            "clue": "A man falls in love with his teacher.",
            "answer": "romantic comedy"
          },
          {
            "id": "q7",
            "clue": "A dead body is found in the river.",
            "answer": "thriller"
          },
          {
            "id": "q8",
            "clue": "There are lots of songs and dancing.",
            "answer": "musical"
          }
        ]
      },
      {
        "id": "u24d-ex2-puzzle",
        "type": "crossword",
        "title": "24.2. Word puzzle. Can you make words for other types of films with the letters of ROMANTIC?",
        "instructions_vi": "Điền từ khớp với mẫu chữ cái cho sẵn (mỗi chữ cái trong mẫu là 1 chữ đã biết, dấu gạch dưới là chữ còn thiếu).",
        "clues": [
          {
            "number": 1,
            "direction": "across",
            "clue": "Mẫu chữ cái: T H R I L L E R",
            "answer": "thriller",
            "example": true
          },
          {
            "number": 2,
            "direction": "across",
            "clue": "Mẫu chữ cái: _ O _ _ _ R",
            "answer": "horror"
          },
          {
            "number": 3,
            "direction": "across",
            "clue": "Mẫu chữ cái: C _ M _ _ Y",
            "answer": "comedy"
          },
          {
            "number": 4,
            "direction": "across",
            "clue": "Mẫu chữ cái: A _ T _ _ N",
            "answer": "action"
          },
          {
            "number": 5,
            "direction": "across",
            "clue": "Mẫu chữ cái: S _ _ _ N C _ F _ _ _ _ _ N",
            "answer": "science fiction"
          },
          {
            "number": 6,
            "direction": "across",
            "clue": "Mẫu chữ cái: W _ _ T _ _ N",
            "answer": "western"
          },
          {
            "number": 7,
            "direction": "across",
            "clue": "Mẫu chữ cái: M _ _ I C _ L",
            "answer": "musical"
          },
          {
            "number": 8,
            "direction": "across",
            "clue": "Mẫu chữ cái: C A _ _ O O _",
            "answer": "cartoon"
          }
        ]
      },
      {
        "id": "u24d-ex3-fill",
        "type": "fill_in_the_blank",
        "title": "24.3. Fill the gaps in these sentences.",
        "instructions_vi": "Điền từ phù hợp vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "sentence": "Do you prefer going to the cinema or watching TV?",
            "answer": "going",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "We ______ a DVD last night.",
            "answer": "watched"
          },
          {
            "id": "q3",
            "sentence": "Who ______ James Bond in Skyfall?",
            "answer": "played"
          },
          {
            "id": "q4",
            "sentence": "Was Rachel Weisz ______ The Constant Gardener?",
            "answer": "in"
          },
          {
            "id": "q5",
            "sentence": "Lots of big ______ live in Hollywood.",
            "answer": "film stars"
          },
          {
            "id": "q6",
            "sentence": "Steven Spielberg is a famous American film ______.",
            "answer": "director"
          }
        ]
      }
    ]
  },
  25: {
    "unit": {
      "id": "u25d",
      "title": "Unit 25: Free Time at Home",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u25d-ex1-doing",
        "type": "sentence_construction",
        "title": "25.1. What are these people doing?",
        "instructions_vi": "Nhìn hình và viết câu mô tả hành động, dùng thì hiện tại tiếp diễn.",
        "questions": [
          {
            "id": "q1",
            "situation": "",
            "image": "images/exercises/u25-doing-watchingtv.jpg",
            "answer": "She's watching TV.",
            "example": true
          },
          {
            "id": "q2",
            "situation": "",
            "image": "images/exercises/u25-doing-gardening.jpg",
            "answer": "He's gardening.",
            "required_keywords": [
              "gardening"
            ]
          },
          {
            "id": "q3",
            "situation": "",
            "image": "images/exercises/u25-doing-readingnewspaper.jpg",
            "answer": "He's reading a newspaper.",
            "required_keywords": [
              "reading",
              "newspaper"
            ]
          },
          {
            "id": "q4",
            "situation": "",
            "image": "images/exercises/u25-doing-cooking.jpg",
            "answer": "He's cooking.",
            "required_keywords": [
              "cooking"
            ]
          },
          {
            "id": "q5",
            "situation": "",
            "image": "images/exercises/u25-doing-usinginternet.jpg",
            "answer": "She's using the Internet.",
            "required_keywords": [
              "using"
            ]
          },
          {
            "id": "q6",
            "situation": "",
            "image": "images/exercises/u25-doing-listeningmusic.jpg",
            "answer": "He's listening to music.",
            "required_keywords": [
              "listening",
              "music"
            ]
          }
        ]
      },
      {
        "id": "u25d-ex2-verbs",
        "type": "fill_in_the_blank",
        "title": "25.2. Fill in the missing verbs.",
        "instructions_vi": "Điền động từ phù hợp vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "sentence": "I usually listen to music on my laptop at home.",
            "answer": "listen",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "I like ______ magazines more than newspapers.",
            "answer": "reading"
          },
          {
            "id": "q3",
            "sentence": "I ______ to my sister on the phone every Sunday.",
            "answer": "talk"
          },
          {
            "id": "q4",
            "sentence": "A lot of people like to ______ a sleep after lunch.",
            "answer": "have"
          },
          {
            "id": "q5",
            "sentence": "Do you ever ______ friends to dinner?",
            "answer": "have",
            "accepted_answers": [
              "invite"
            ]
          },
          {
            "id": "q6",
            "sentence": "The children ______ video games every evening.",
            "answer": "play"
          },
          {
            "id": "q7",
            "sentence": "I want to ______ some music from the Internet this evening.",
            "answer": "download"
          },
          {
            "id": "q8",
            "sentence": "Did you ______ the programme about Namibia yesterday?",
            "answer": "see",
            "accepted_answers": [
              "watch"
            ]
          },
          {
            "id": "q9",
            "sentence": "My dad ______ vegetables in his garden.",
            "answer": "grows"
          },
          {
            "id": "q10",
            "sentence": "Shall we ______ a DVD tonight?",
            "answer": "watch"
          }
        ]
      }
    ]
  },
  26: {
    "unit": {
      "id": "u26d",
      "title": "Unit 26: Music and Musical Instruments",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u26d-ex1-choose",
        "type": "fill_in_the_blank",
        "title": "26.1. Choose the correct word: music, musical or musician.",
        "instructions_vi": "Chọn từ đúng (music/musical/musician/musicians) để điền vào chỗ trống.",
        "word_bank": [
          "music",
          "musical",
          "musician",
          "musicians"
        ],
        "questions": [
          {
            "id": "q1",
            "sentence": "What are your favourite types of music?",
            "answer": "music",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "My brother thinks he's a good ______, but he's very bad!",
            "answer": "musician"
          },
          {
            "id": "q3",
            "sentence": "Can you play a ______ instrument?",
            "answer": "musical"
          },
          {
            "id": "q4",
            "sentence": "I love different types of ______, for example, jazz, rock and classical.",
            "answer": "music"
          },
          {
            "id": "q5",
            "sentence": "Which ______ instrument would you like to learn?",
            "answer": "musical"
          },
          {
            "id": "q6",
            "sentence": "Are there any ______ in your family?",
            "answer": "musicians"
          }
        ]
      },
      {
        "id": "u26d-ex2-pictures",
        "type": "word_from_definition",
        "title": "26.2. Look at the pictures and complete the sentences.",
        "instructions_vi": "Nhìn hình và điền từ còn thiếu vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "clue": "Madison plays the violin.",
            "answer": "violin",
            "example": true
          },
          {
            "id": "q2",
            "clue": "Who plays the cello in an orchestra?",
            "answer": "Abigail"
          },
          {
            "id": "q3",
            "clue": "Abigail plays the cello in an ______.",
            "answer": "orchestra"
          },
          {
            "id": "q4",
            "clue": "Noah loves playing the ______.",
            "answer": "drums"
          },
          {
            "id": "q5",
            "clue": "Emily is having a ______ lesson.",
            "answer": "piano"
          },
          {
            "id": "q6",
            "clue": "Mason is a very good ______-player.",
            "answer": "trumpet"
          },
          {
            "id": "q7",
            "clue": "Ella plays the ______ every evening.",
            "answer": "clarinet"
          },
          {
            "id": "q8",
            "clue": "William ______ the guitar.",
            "answer": "plays"
          },
          {
            "id": "q9",
            "clue": "William plays the ______.",
            "answer": "guitar"
          },
          {
            "id": "q10",
            "clue": "Emma is learning the ______.",
            "answer": "flute"
          },
          {
            "id": "q11",
            "clue": "She will be a good flute-______ one day.",
            "answer": "player"
          },
          {
            "id": "q12",
            "clue": "______ is a violinist.",
            "answer": "Madison"
          },
          {
            "id": "q13",
            "clue": "______ wants to be a pianist.",
            "answer": "Emily"
          }
        ],
        "context": {
          "gallery": [
            {
              "image": "images/exercises/u26-madison-violin.jpg",
              "caption": "Madison"
            },
            {
              "image": "images/exercises/u26-abigail-cello.jpg",
              "caption": "Abigail"
            },
            {
              "image": "images/exercises/u26-noah-drums.jpg",
              "caption": "Noah"
            },
            {
              "image": "images/exercises/u26-emily-piano.jpg",
              "caption": "Emily"
            },
            {
              "image": "images/exercises/u26-mason-trumpet.jpg",
              "caption": "Mason"
            },
            {
              "image": "images/exercises/u26-ella-clarinet.jpg",
              "caption": "Ella"
            },
            {
              "image": "images/exercises/u26-william-guitar.jpg",
              "caption": "William"
            },
            {
              "image": "images/exercises/u26-emma-flute.jpg",
              "caption": "Emma"
            }
          ]
        }
      },
      {
        "id": "u26d-ex3-abc",
        "type": "multiple_choice",
        "title": "26.3. Choose the correct answer, a, b or c.",
        "instructions_vi": "Chọn đáp án đúng trong 3 lựa chọn a, b, c.",
        "questions": [
          {
            "id": "q1",
            "question": "I love a) classic b) classical c) classist music. Beethoven is my favourite.",
            "options": [
              "classic",
              "classical",
              "classist"
            ],
            "answer": "classical",
            "example": true
          },
          {
            "id": "q2",
            "question": "My brother a) can't stand b) can stand c) can't stay folk music but I love it.",
            "options": [
              "can't stand",
              "can stand",
              "can't stay"
            ],
            "answer": "can't stand"
          },
          {
            "id": "q3",
            "question": "I have some tickets for a a) concert music b) music concert c) concert at the Town Hall. Would you like one?",
            "options": [
              "concert music",
              "music concert",
              "concert"
            ],
            "answer": "concert"
          },
          {
            "id": "q4",
            "question": "I always a) listen in b) listen to c) listen music when I'm studying.",
            "options": [
              "listen in",
              "listen to",
              "listen"
            ],
            "answer": "listen to"
          },
          {
            "id": "q5",
            "question": "My sister plays in a a) music band b) band music c) band with three other girls from her school.",
            "options": [
              "music band",
              "band music",
              "band"
            ],
            "answer": "band"
          }
        ]
      }
    ]
  },
  27: {
    "unit": {
      "id": "u27d",
      "title": "Unit 27: Countries and Nationalities",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u27d-ex1-unscramble",
        "type": "unscramble",
        "title": "27.1. Which countries do these letters make?",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành tên quốc gia.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "HINAC",
            "answer": "CHINA",
            "example": true
          },
          {
            "id": "q2",
            "scrambled": "ZIRALB",
            "answer": "BRAZIL"
          },
          {
            "id": "q3",
            "scrambled": "PINSA",
            "answer": "SPAIN"
          },
          {
            "id": "q4",
            "scrambled": "OCRMOOC",
            "answer": "MOROCCO"
          },
          {
            "id": "q5",
            "scrambled": "ANJAP",
            "answer": "JAPAN"
          },
          {
            "id": "q6",
            "scrambled": "DALTHINA",
            "answer": "THAILAND"
          }
        ]
      },
      {
        "id": "u27d-ex2-capitals",
        "type": "sentence_construction",
        "title": "27.2. Match these capital cities to their countries and make sentences.",
        "instructions_vi": "Viết câu cho biết thành phố đó là thủ đô của nước nào. Dùng các nước cho sẵn bên dưới.",
        "context": {
          "table": {
            "headers": [
              "Countries to use"
            ],
            "rows": [
              [
                "Argentina"
              ],
              [
                "Australia"
              ],
              [
                "Colombia"
              ],
              [
                "Egypt"
              ],
              [
                "Germany"
              ],
              [
                "Italy"
              ],
              [
                "Japan"
              ],
              [
                "Poland"
              ],
              [
                "Spain"
              ],
              [
                "the UK"
              ]
            ]
          }
        },
        "questions": [
          {
            "id": "q1",
            "name": "Tokyo",
            "answer": "Tokyo is the capital of Japan.",
            "example": true
          },
          {
            "id": "q2",
            "name": "Rome",
            "answer": "Rome is the capital of Italy."
          },
          {
            "id": "q3",
            "name": "Canberra",
            "answer": "Canberra is the capital of Australia."
          },
          {
            "id": "q4",
            "name": "Bogotá",
            "answer": "Bogotá is the capital of Colombia."
          },
          {
            "id": "q5",
            "name": "Cairo",
            "answer": "Cairo is the capital of Egypt."
          },
          {
            "id": "q6",
            "name": "London",
            "answer": "London is the capital of the UK."
          },
          {
            "id": "q7",
            "name": "Berlin",
            "answer": "Berlin is the capital of Germany."
          },
          {
            "id": "q8",
            "name": "Warsaw",
            "answer": "Warsaw is the capital of Poland."
          },
          {
            "id": "q9",
            "name": "Buenos Aires",
            "answer": "Buenos Aires is the capital of Argentina."
          },
          {
            "id": "q10",
            "name": "Madrid",
            "answer": "Madrid is the capital of Spain."
          }
        ]
      },
      {
        "id": "u27d-ex3-adjectives",
        "type": "word_from_definition",
        "title": "27.3. What is the adjective for these countries?",
        "instructions_vi": "Viết tính từ chỉ quốc tịch tương ứng với mỗi quốc gia.",
        "questions": [
          {
            "id": "q1",
            "clue": "India",
            "answer": "Indian",
            "example": true
          },
          {
            "id": "q2",
            "clue": "Thailand",
            "answer": "Thai"
          },
          {
            "id": "q3",
            "clue": "Germany",
            "answer": "German"
          },
          {
            "id": "q4",
            "clue": "Egypt",
            "answer": "Egyptian"
          },
          {
            "id": "q5",
            "clue": "Argentina",
            "answer": "Argentinian"
          },
          {
            "id": "q6",
            "clue": "Spain",
            "answer": "Spanish"
          },
          {
            "id": "q7",
            "clue": "Peru",
            "answer": "Peruvian"
          },
          {
            "id": "q8",
            "clue": "China",
            "answer": "Chinese"
          },
          {
            "id": "q9",
            "clue": "Australia",
            "answer": "Australian"
          },
          {
            "id": "q10",
            "clue": "Poland",
            "answer": "Polish"
          }
        ]
      }
    ]
  },
  28: {
    "unit": {
      "id": "u28d",
      "title": "Unit 28: Weather",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u28d-ex1-symbols",
        "type": "matching",
        "title": "28.1. Match the words and the symbols.",
        "instructions_vi": "Nối từ chỉ thời tiết với đúng biểu tượng của nó.",
        "pairs": [
          {
            "left": "snow",
            "right": "",
            "image": "images/exercises/u28-symbol-snow.jpg"
          },
          {
            "left": "sun",
            "right": "",
            "image": "images/exercises/u28-symbol-sun.jpg"
          },
          {
            "left": "rain",
            "right": "",
            "image": "images/exercises/u28-symbol-rain.jpg"
          },
          {
            "left": "fog",
            "right": "",
            "image": "images/exercises/u28-symbol-fog.jpg"
          },
          {
            "left": "lightning",
            "right": "",
            "image": "images/exercises/u28-symbol-lightning.jpg"
          },
          {
            "left": "wind",
            "right": "",
            "image": "images/exercises/u28-symbol-wind.jpg"
          },
          {
            "left": "cloud",
            "right": "",
            "image": "images/exercises/u28-symbol-cloud.jpg"
          }
        ]
      },
      {
        "id": "u28d-ex2-chart",
        "type": "sentence_construction",
        "title": "28.2. Look at the chart. Write sentences about the cities in the chart.",
        "instructions_vi": "Nhìn biểu đồ thời tiết và viết câu mô tả thời tiết ở mỗi thành phố.",
        "context": {
          "image": "images/exercises/u28-weather-chart.jpg"
        },
        "questions": [
          {
            "id": "q1",
            "name": "Hanoi",
            "answer": "It is sunny in Hanoi.",
            "example": true
          },
          {
            "id": "q2",
            "name": "Hong Kong",
            "answer": "It is raining in Hong Kong.",
            "example": true
          },
          {
            "id": "q3",
            "name": "La Paz",
            "answer": "It is windy in La Paz.",
            "required_keywords": [
              "windy"
            ]
          },
          {
            "id": "q4",
            "name": "Paris",
            "answer": "It is cloudy in Paris.",
            "required_keywords": [
              "cloudy"
            ]
          },
          {
            "id": "q5",
            "name": "Tashkent",
            "answer": "It is foggy in Tashkent.",
            "required_keywords": [
              "foggy"
            ]
          },
          {
            "id": "q6",
            "name": "Seoul",
            "answer": "It is sunny in Seoul.",
            "required_keywords": [
              "sunny"
            ]
          },
          {
            "id": "q7",
            "name": "Washington",
            "answer": "It is snowing in Washington.",
            "accepted_answers": [
              "It's snowy in Washington.",
              "It is snowy in Washington."
            ],
            "required_keywords": [
              "snow"
            ]
          }
        ]
      },
      {
        "id": "u28d-ex3-fill",
        "type": "fill_in_the_blank",
        "title": "28.3. Complete these sentences with a word.",
        "instructions_vi": "Điền từ phù hợp vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "sentence": "The sun shone every day last month.",
            "answer": "shone",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "When it ______, I take my umbrella.",
            "answer": "rains"
          },
          {
            "id": "q3",
            "sentence": "What's the ______ like in your country in January?",
            "answer": "weather"
          },
          {
            "id": "q4",
            "sentence": "When it ______, we can go skiing.",
            "answer": "snows"
          },
          {
            "id": "q5",
            "sentence": "You see ______ before you hear thunder.",
            "answer": "lightning"
          },
          {
            "id": "q6",
            "sentence": "It is 24 ______ here today.",
            "answer": "degrees"
          },
          {
            "id": "q7",
            "sentence": "It is dangerous to be in a small boat at sea in a ______.",
            "answer": "storm"
          },
          {
            "id": "q8",
            "sentence": "It is very ______ in Siberia in winter.",
            "answer": "cold"
          }
        ]
      }
    ]
  },
  29: {
    "unit": {
      "id": "u29d",
      "title": "Unit 29: In the Town",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u29d-ex1-where",
        "type": "word_from_definition",
        "title": "29.1. Answer the questions.",
        "instructions_vi": "Trả lời câu hỏi cho biết bạn có thể tìm thấy ở đâu.",
        "questions": [
          {
            "id": "q1",
            "clue": "Where can I get a bus to London?",
            "answer": "at the bus station",
            "example": true
          },
          {
            "id": "q2",
            "clue": "Where can I get information about hotels?",
            "answer": "at the tourist information office"
          },
          {
            "id": "q3",
            "clue": "Where can I change money?",
            "answer": "at the bank"
          },
          {
            "id": "q4",
            "clue": "Where can I park my car?",
            "answer": "in the car park",
            "accepted_answers": [
              "at the car park"
            ]
          },
          {
            "id": "q5",
            "clue": "Where can I see old and interesting things?",
            "answer": "at the museum"
          },
          {
            "id": "q6",
            "clue": "Where can I get a train?",
            "answer": "at the train station",
            "accepted_answers": [
              "at the railway station"
            ]
          },
          {
            "id": "q7",
            "clue": "Where can I go to a lot of different shops?",
            "answer": "in the shopping centre",
            "accepted_answers": [
              "at the shopping centre"
            ]
          },
          {
            "id": "q8",
            "clue": "Where can I go to post a parcel?",
            "answer": "at the post office"
          }
        ]
      },
      {
        "id": "u29d-ex2-notices",
        "type": "situational_expression",
        "title": "29.2. Which notice will help you?",
        "instructions_vi": "Chọn biển báo phù hợp với mỗi tình huống.",
        "word_bank": [
          "Exit",
          "Entrance",
          "No smoking",
          "Out of order",
          "Please keep off the grass"
        ],
        "questions": [
          {
            "id": "q1",
            "situation": "The cash machine doesn't give you any money.",
            "answer": "Out of order",
            "example": true
          },
          {
            "id": "q2",
            "situation": "You are in the shopping centre and you want to leave.",
            "answer": "Exit"
          },
          {
            "id": "q3",
            "situation": "You want to sit in a place where there are no cigarettes.",
            "answer": "No smoking"
          },
          {
            "id": "q4",
            "situation": "You want to know if people can go on the grass.",
            "answer": "Please keep off the grass",
            "accepted_answers": [
              "Please do not walk on the grass"
            ]
          },
          {
            "id": "q5",
            "situation": "You want to go into the museum.",
            "answer": "Entrance"
          }
        ]
      },
      {
        "id": "u29d-ex3-fill",
        "type": "fill_in_the_blank",
        "title": "29.3. Complete these sentences.",
        "instructions_vi": "Điền từ phù hợp vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "sentence": "Turn right at the end of the road.",
            "answer": "right",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "The bus ______ is over there on the left.",
            "answer": "station",
            "accepted_answers": [
              "stop"
            ]
          },
          {
            "id": "q3",
            "sentence": "The bus station is over there ______ the left.",
            "answer": "on"
          },
          {
            "id": "q4",
            "sentence": "For the Town Hall ______ the number 14 bus.",
            "answer": "take"
          },
          {
            "id": "q5",
            "sentence": "______ is a post office on the other side of the road.",
            "answer": "There"
          },
          {
            "id": "q6",
            "sentence": "There is a post office on the other ______ of the road.",
            "answer": "side"
          },
          {
            "id": "q7",
            "sentence": "You can find a cash ______ at the bank in High Street.",
            "answer": "machine"
          },
          {
            "id": "q8",
            "sentence": "We can get a map of the town at the tourist ______ office.",
            "answer": "information"
          },
          {
            "id": "q9",
            "sentence": "Can you tell me the way to the ______ station, please?",
            "answer": "railway",
            "accepted_answers": [
              "train"
            ]
          },
          {
            "id": "q10",
            "sentence": "Can you tell me the way to the railway ______, please?",
            "answer": "station"
          },
          {
            "id": "q11",
            "sentence": "______ me. I'm looking for a car park.",
            "answer": "Excuse"
          },
          {
            "id": "q12",
            "sentence": "Excuse me. I'm looking ______ a car park.",
            "answer": "for"
          }
        ]
      },
      {
        "id": "u29d-ex4-unscramble",
        "type": "unscramble",
        "title": "29.4. What words are these?",
        "instructions_vi": "Sắp xếp lại các chữ cái để tạo thành từ/cụm từ đúng.",
        "questions": [
          {
            "id": "q1",
            "scrambled": "SUMUEM",
            "answer": "MUSEUM",
            "example": true
          },
          {
            "id": "q2",
            "scrambled": "NOWT HLAL",
            "answer": "TOWN HALL"
          },
          {
            "id": "q3",
            "scrambled": "BRILYRA",
            "answer": "LIBRARY"
          },
          {
            "id": "q4",
            "scrambled": "RAC PRAK",
            "answer": "CAR PARK"
          },
          {
            "id": "q5",
            "scrambled": "YWRLAAI NTTOISA",
            "answer": "RAILWAY STATION"
          },
          {
            "id": "q6",
            "scrambled": "DTAEEPSRIN RAAE",
            "answer": "PEDESTRIAN AREA"
          },
          {
            "id": "q7",
            "scrambled": "SCAH ENICMAH",
            "answer": "CASH MACHINE"
          },
          {
            "id": "q8",
            "scrambled": "TSOP FFCOIE",
            "answer": "POST OFFICE"
          },
          {
            "id": "q9",
            "scrambled": "PHOSS",
            "answer": "SHOPS"
          },
          {
            "id": "q10",
            "scrambled": "SUB TOPS",
            "answer": "BUS STOP"
          }
        ]
      },
      {
        "id": "u29d-ex5-directions",
        "type": "sentence_construction",
        "title": "29.5. Look at the map. How do you get from the tourist information office to the shopping centre? Write directions.",
        "instructions_vi": "Nhìn bản đồ và viết chỉ đường từ Tourist Information Office đến Shopping Centre. Đây là câu hỏi mở, có nhiều cách diễn đạt đúng — hệ thống sẽ chấm theo các từ khóa quan trọng.",
        "context": {
          "image": "images/exercises/u29-town-map.jpg"
        },
        "questions": [
          {
            "id": "q1",
            "situation": "Viết chỉ đường từ Tourist Information Office đến Shopping Centre.",
            "answer": "Go left out of the tourist information office and take the first left. Then take the second left, which is Market Street. The shopping centre is on the left.",
            "required_keywords": [
              "left",
              "market street"
            ]
          }
        ]
      }
    ]
  },
  30: {
    "unit": {
      "id": "u30d",
      "title": "Unit 30: In the Countryside",
      "level": "A1-A2"
    },
    "exercises": [
      {
        "id": "u30d-ex1-picture",
        "type": "labeling",
        "title": "30.1. How many names of things in the countryside can you remember?",
        "instructions_vi": "Nhìn hình và viết tên đúng theo từng số thứ tự.",
        "context": {
          "image": "images/exercises/u30-countryside.jpg"
        },
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Vị trí số 1",
            "answer": "mountains",
            "example": true
          },
          {
            "id": "q2",
            "clue_vi": "Vị trí số 2",
            "answer": "forest"
          },
          {
            "id": "q3",
            "clue_vi": "Vị trí số 3",
            "answer": "village"
          },
          {
            "id": "q4",
            "clue_vi": "Vị trí số 4",
            "answer": "hills"
          },
          {
            "id": "q5",
            "clue_vi": "Vị trí số 5",
            "answer": "wood"
          },
          {
            "id": "q6",
            "clue_vi": "Vị trí số 6",
            "answer": "farm"
          },
          {
            "id": "q7",
            "clue_vi": "Vị trí số 7",
            "answer": "river"
          },
          {
            "id": "q8",
            "clue_vi": "Vị trí số 8",
            "answer": "country road"
          },
          {
            "id": "q9",
            "clue_vi": "Vị trí số 9",
            "answer": "path"
          },
          {
            "id": "q10",
            "clue_vi": "Vị trí số 10",
            "answer": "fields"
          },
          {
            "id": "q11",
            "clue_vi": "Vị trí số 11",
            "answer": "lake"
          }
        ]
      },
      {
        "id": "u30d-ex2-fill",
        "type": "fill_in_the_blank",
        "title": "30.2. Fill the gaps in these sentences.",
        "instructions_vi": "Điền từ phù hợp vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "sentence": "My brother is a farmer. He lives on a farm.",
            "answer": "farm",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "It's not a big house; it's just a ______.",
            "answer": "cottage"
          },
          {
            "id": "q3",
            "sentence": "The farm is near a ______ which has 800 people.",
            "answer": "village"
          },
          {
            "id": "q4",
            "sentence": "Twenty kilometres from the village there is a small ______. It has 9,000 people.",
            "answer": "town"
          }
        ]
      },
      {
        "id": "u30d-ex3-matching",
        "type": "matching",
        "title": "30.3. Match the beginning of the sentences on the left with the ends of the sentences on the right.",
        "instructions_vi": "Nối phần đầu câu với phần cuối câu phù hợp.",
        "pairs": [
          {
            "left": "We went swimming",
            "right": "in the lake. The water was warm."
          },
          {
            "left": "We went walking",
            "right": "along a five-kilometre path."
          },
          {
            "left": "We went skiing",
            "right": "down the mountain."
          },
          {
            "left": "We saw some wonderful wildlife",
            "right": "in the national park."
          },
          {
            "left": "We had a picnic",
            "right": "sitting by the river."
          }
        ]
      },
      {
        "id": "u30d-ex4-thearticle",
        "type": "fill_in_the_blank",
        "title": "30.4. Put \"the\" in the sentences if necessary.",
        "instructions_vi": "Điền chữ \"the\" vào chỗ trống nếu cần, hoặc để trống ô nhập nếu câu không cần mạo từ \"the\".",
        "questions": [
          {
            "id": "q1",
            "sentence": "My parents live in the countryside.",
            "answer": "the",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "He loves ______ nature. (để trống nếu không cần \"the\")",
            "answer": ""
          },
          {
            "id": "q3",
            "sentence": "She wants to live ______ in country.",
            "answer": "the"
          },
          {
            "id": "q4",
            "sentence": "They are interested in ______ wildlife. (để trống nếu không cần \"the\")",
            "answer": ""
          }
        ]
      }
    ]
  },
  31: {
    "unit": {
      "id": "u31d",
      "title": "Unit 31: Animals - Bài tập chi tiết (Workbook)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Một số câu có nhiều đáp án đúng (ví dụ câu 31.4 số 8: hình có cả voi và chim). Hệ thống chấm chấp nhận bất kỳ đáp án nào trong danh sách accepted_answers."
    },
    "exercises": [
      {
        "id": "u31d-ex1-sentences",
        "type": "fill_in_the_blank",
        "title": "31.1. Complete these sentences.",
        "instructions_vi": "Điền từ chỉ con vật phù hợp vào chỗ trống để hoàn thành câu.",
        "questions": [
          {
            "id": "q1",
            "sentence": "A ______ goes to sleep in winter.",
            "answer": "tortoise",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "A ______ has a very long neck.",
            "answer": "giraffe"
          },
          {
            "id": "q3",
            "sentence": "______ and ______ are birds.",
            "answer": [
              "Parrots",
              "hens"
            ]
          },
          {
            "id": "q4",
            "sentence": "______ and ______ are large cats.",
            "answer": [
              "Tigers",
              "lions"
            ]
          },
          {
            "id": "q5",
            "sentence": "You can ride a ______ and an ______.",
            "answer": [
              "horse",
              "elephant"
            ]
          },
          {
            "id": "q6",
            "sentence": "______ swim and ______ fly.",
            "answer": [
              "Fish",
              "birds"
            ]
          },
          {
            "id": "q7",
            "sentence": "______ are farm birds.",
            "answer": "Chickens",
            "accepted_answers": [
              "Chickens",
              "Hens",
              "Chickens/Hens"
            ]
          },
          {
            "id": "q8",
            "sentence": "______ are very good at hopping and jumping.",
            "answer": "Rabbits"
          },
          {
            "id": "q9",
            "sentence": "Don't forget to ______ the cat and to ______ it some water.",
            "answer": [
              "feed",
              "give"
            ]
          },
          {
            "id": "q10",
            "sentence": "I ______ my dog for a walk every day before school.",
            "answer": "take"
          }
        ]
      },
      {
        "id": "u31d-ex2-matching",
        "type": "matching",
        "title": "31.2. Match the animal with its meat and with its baby.",
        "instructions_vi": "Nối tên con vật với đúng loại thịt và tên con non của nó.",
        "pairs": [
          {
            "left": "Sheep",
            "right": "thịt: lamb · con non: lamb"
          },
          {
            "left": "Cow",
            "right": "thịt: beef · con non: calf"
          },
          {
            "left": "Hen",
            "right": "thịt: chicken · con non: chick"
          },
          {
            "left": "Pig",
            "right": "thịt: pork · con non: piglet"
          },
          {
            "left": "Goat",
            "right": "thịt: goat · con non: kid"
          }
        ]
      },
      {
        "id": "u31d-ex3-categories",
        "type": "multi_select",
        "title": "31.3. Look at the animals. Find animals which:",
        "instructions_vi": "Chọn ít nhất 3 con vật phù hợp với mỗi tiêu chí bên dưới. Lưu ý: mỗi câu có thể có nhiều hơn 1 đáp án đúng, và một con vật có thể đúng ở nhiều tiêu chí khác nhau.",
        "word_bank": [
          "horse",
          "chicken",
          "hen",
          "pig",
          "sheep",
          "cow",
          "goat",
          "elephant",
          "snake",
          "monkey",
          "tiger",
          "lion",
          "giraffe",
          "fish",
          "cat",
          "rabbit",
          "parrot",
          "bird",
          "dog",
          "tortoise"
        ],
        "questions": [
          {
            "id": "q1",
            "prompt": "1. eat meat.",
            "correct_answers": [
              "lion",
              "tiger",
              "monkey",
              "snake",
              "dog",
              "cat"
            ],
            "min_required": 3
          },
          {
            "id": "q2",
            "prompt": "2. give us things that we wear.",
            "correct_answers": [
              "cow",
              "sheep",
              "pig",
              "goat",
              "parrot",
              "snake"
            ],
            "min_required": 3
          },
          {
            "id": "q3",
            "prompt": "3. produce their babies in eggs.",
            "correct_answers": [
              "chicken",
              "hen",
              "tortoise",
              "parrot",
              "snake",
              "fish",
              "bird"
            ],
            "min_required": 3
          },
          {
            "id": "q4",
            "prompt": "4. we can eat.",
            "correct_answers": [
              "cow",
              "sheep",
              "pig",
              "chicken",
              "hen",
              "goat",
              "horse",
              "fish"
            ],
            "min_required": 3
          }
        ]
      },
      {
        "id": "u31d-ex4-pictures",
        "type": "labeling",
        "title": "31.4. Look at the pictures and complete.",
        "instructions_vi": "Nhìn hình và điền tên con vật bằng tiếng Anh. Lưu ý: câu 8 hình có cả voi và chim nên có nhiều hơn 1 đáp án đúng.",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Con gì đây?",
            "image": "images/exercises/u31-animal-parrot.jpg",
            "answer": "parrot",
            "example": true
          },
          {
            "id": "q2",
            "clue_vi": "Con gì đây?",
            "image": "images/exercises/u31-animal-monkey.jpg",
            "answer": "monkey"
          },
          {
            "id": "q3",
            "clue_vi": "Con gì đây?",
            "image": "images/exercises/u31-animal-cat.jpg",
            "answer": "cat",
            "accepted_answers": [
              "cat",
              "cats"
            ]
          },
          {
            "id": "q4",
            "clue_vi": "Con gì đây?",
            "image": "images/exercises/u31-animal-sheep.jpg",
            "answer": "sheep"
          },
          {
            "id": "q5",
            "clue_vi": "Con gì đây?",
            "image": "images/exercises/u31-animal-tiger.jpg",
            "answer": "tiger"
          },
          {
            "id": "q6",
            "clue_vi": "Con gì đây?",
            "image": "images/exercises/u31-animal-lion.jpg",
            "answer": "lion"
          },
          {
            "id": "q7",
            "clue_vi": "Con gì đây?",
            "image": "images/exercises/u31-animal-horse.jpg",
            "answer": "horse"
          },
          {
            "id": "q8",
            "clue_vi": "Con gì đây? (hình có 2 con vật, gõ 1 trong 2 đáp án đều đúng)",
            "image": "images/exercises/u31-animal-elephant.jpg",
            "answer": "elephant",
            "accepted_answers": [
              "elephant",
              "bird"
            ]
          },
          {
            "id": "q9",
            "clue_vi": "Con gì đây?",
            "image": "images/exercises/u31-animal-hen.jpg",
            "answer": "hen"
          }
        ]
      }
    ]
  },
  32: {
    "unit": {
      "id": "u32d",
      "title": "Unit 32: Travelling - Bài tập chi tiết (Workbook)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Một số câu (đặc biệt bài 32.3) có thể chấp nhận nhiều cách gọi tên phương tiện/đồ vật khác nhau."
    },
    "exercises": [
      {
        "id": "u32d-ex1-matching",
        "type": "matching",
        "title": "32.1. Match the words on the left with their definitions on the right.",
        "instructions_vi": "Nối từ ở cột trái với đúng định nghĩa ở cột phải.",
        "pairs": [
          {
            "left": "land",
            "right": "planes do this at airports"
          },
          {
            "left": "direct",
            "right": "you do not have to change to a different plane / train / bus"
          },
          {
            "left": "restaurant car",
            "right": "a place to eat on a train"
          },
          {
            "left": "ship",
            "right": "it travels on water, e.g. the Titanic"
          },
          {
            "left": "timetable",
            "right": "it says when trains depart and arrive"
          },
          {
            "left": "platform",
            "right": "where you stand when you are waiting for a train"
          },
          {
            "left": "luggage",
            "right": "bags and suitcases"
          }
        ]
      },
      {
        "id": "u32d-ex2-truefalse",
        "type": "true_false",
        "title": "32.2. Are these sentences true or false? Correct the false sentences.",
        "instructions_vi": "Xác định câu đúng hay sai. Nếu sai, hệ thống sẽ hiện câu sửa lại đúng.",
        "questions": [
          {
            "id": "q1",
            "statement": "A single ticket takes you to a place and back again.",
            "answer": false,
            "note": "A return ticket takes you to a place and back again.",
            "example": true
          },
          {
            "id": "q2",
            "statement": "At customs, people check what you bring into the country.",
            "answer": true
          },
          {
            "id": "q3",
            "statement": "Planes land at the beginning of a journey.",
            "answer": false,
            "note": "Planes take off at the beginning of a journey. Planes land at the end of a journey."
          },
          {
            "id": "q4",
            "statement": "You need a boarding card to get off a plane.",
            "answer": false,
            "note": "You need a boarding card to get on a plane."
          },
          {
            "id": "q5",
            "statement": "Hiring a car is the same as buying a car.",
            "answer": false,
            "note": "Hiring a car is not the same as buying a car."
          },
          {
            "id": "q6",
            "statement": "If you give someone a lift they travel in your car.",
            "answer": true
          }
        ]
      },
      {
        "id": "u32d-ex3-pictures",
        "type": "labeling",
        "title": "32.3. Look at the pictures and complete.",
        "instructions_vi": "Nhìn hình và điền từ tiếng Anh phù hợp.",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u32-transport-timetable.jpg",
            "answer": "timetable",
            "example": true
          },
          {
            "id": "q2",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u32-transport-taxi.jpg",
            "answer": "taxi",
            "accepted_answers": [
              "taxi",
              "cab"
            ]
          },
          {
            "id": "q3",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u32-transport-motorcycle.jpg",
            "answer": "motorcycle",
            "accepted_answers": [
              "motorcycle",
              "motorbike"
            ]
          },
          {
            "id": "q4",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u32-transport-platform.jpg",
            "answer": "platform"
          },
          {
            "id": "q5",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u32-transport-train.jpg",
            "answer": "train"
          },
          {
            "id": "q6",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u32-transport-helicopter.jpg",
            "answer": "helicopter"
          },
          {
            "id": "q7",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u32-transport-bus.jpg",
            "answer": "bus"
          },
          {
            "id": "q8",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u32-transport-petrol.jpg",
            "answer": "petrol",
            "accepted_answers": [
              "petrol",
              "petrol pump",
              "petrol station"
            ]
          },
          {
            "id": "q9",
            "clue_vi": "Đây là gì?",
            "image": "images/exercises/u32-transport-map.jpg",
            "answer": "map"
          }
        ]
      }
    ]
  },
  33: {
    "unit": {
      "id": "u33d",
      "title": "Unit 33: UK culture - Bài tập chi tiết (Workbook)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u33d-ex1-festivals",
        "type": "labeling",
        "title": "33.1. Which festivals do these pictures show?",
        "instructions_vi": "Nhìn hình và gọi tên ngày lễ/lễ hội bằng tiếng Anh.",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Đây là lễ hội gì?",
            "image": "images/exercises/u33-festival-halloween.jpg",
            "answer": "Halloween",
            "example": true
          },
          {
            "id": "q2",
            "clue_vi": "Đây là lễ hội gì?",
            "image": "images/exercises/u33-festival-christmas.jpg",
            "answer": "Christmas"
          },
          {
            "id": "q3",
            "clue_vi": "Đây là lễ hội gì?",
            "image": "images/exercises/u33-festival-bonfire.jpg",
            "answer": "Bonfire Night"
          },
          {
            "id": "q4",
            "clue_vi": "Đây là lễ hội gì?",
            "image": "images/exercises/u33-festival-valentine.jpg",
            "answer": "Valentine's Day"
          },
          {
            "id": "q5",
            "clue_vi": "Đây là lễ hội gì?",
            "image": "images/exercises/u33-festival-easter.jpg",
            "answer": "Easter"
          },
          {
            "id": "q6",
            "clue_vi": "Đây là lễ hội gì?",
            "image": "images/exercises/u33-festival-newyear.jpg",
            "answer": "New Year's Eve",
            "accepted_answers": [
              "New Year's Eve",
              "New Year Eve",
              "Hogmanay"
            ]
          }
        ]
      },
      {
        "id": "u33d-ex2-wordsearch",
        "type": "word_search",
        "title": "33.2. Find 10 more words connected with food in the puzzle.",
        "instructions_vi": "Tìm 10 từ còn lại liên quan đến ẩm thực Anh ẩn trong bảng chữ cái rồi gõ lại (không cần đúng thứ tự). Từ 'MASALA' đã được khoanh sẵn làm ví dụ, không tính điểm.",
        "context": {
          "image": "images/exercises/u33-wordsearch.jpg",
          "description": "Từ 'MASALA' (cột dọc giữa bảng) đã được khoanh tròn sẵn làm ví dụ. Các từ khác có thể nằm ngang hoặc dọc."
        },
        "answers": [
          "Chicken",
          "Yorkshire",
          "Roast",
          "Potatoes",
          "Fish",
          "Curry",
          "Beef",
          "Chips",
          "Tikka",
          "Pudding"
        ],
        "blank_count": 10
      },
      {
        "id": "u33d-ex3-food-qa",
        "type": "word_from_definition",
        "title": "33.3. Answer these questions about traditional UK food.",
        "instructions_vi": "Trả lời các câu hỏi dựa trên đoạn thông tin sau: Món ăn truyền thống của Anh là fish and chips, và roast beef với roast potatoes (nướng trong lò) cùng Yorkshire pudding (món làm từ bột mì, sữa và trứng). Chicken tikka masala (một loại curry) có nguồn gốc từ Ấn Độ nhưng rất phổ biến ở Anh.",
        "questions": [
          {
            "id": "q1",
            "clue": "What do British people traditionally eat with fish?",
            "answer": "chips",
            "example": true
          },
          {
            "id": "q2",
            "clue": "Where does chicken tikka masala come from?",
            "answer": "India"
          },
          {
            "id": "q3",
            "clue": "What is chicken tikka masala a kind of?",
            "answer": "curry"
          },
          {
            "id": "q4",
            "clue": "Do British people eat Yorkshire pudding after their main course?",
            "answer": "No, they eat it with their main course.",
            "accepted_answers": [
              "No, they eat it with their main course.",
              "No",
              "No, with the main course",
              "No, they eat it with roast beef"
            ]
          },
          {
            "id": "q5",
            "clue": "In or on which part of the cooker do you make roast beef and roast potatoes?",
            "answer": "in the oven",
            "accepted_answers": [
              "in the oven",
              "the oven",
              "oven"
            ]
          }
        ]
      },
      {
        "id": "u33d-ex4-schools",
        "type": "word_from_definition",
        "title": "33.4. Which kind of school do these British children go to?",
        "instructions_vi": "Dựa vào bảng tham khảo bên dưới, xác định loại trường phù hợp cho mỗi bạn nhỏ.",
        "context": {
          "table": {
            "headers": [
              "Type of school",
              "What it is"
            ],
            "rows": [
              [
                "nursery school",
                "for children aged 2-4"
              ],
              [
                "primary school",
                "for children aged 5-11"
              ],
              [
                "secondary school",
                "for children aged 12-18"
              ],
              [
                "state school",
                "parents don't pay for children to go here"
              ],
              [
                "private school",
                "parents pay for children to go here"
              ]
            ]
          }
        },
        "questions": [
          {
            "id": "q1",
            "clue": "Lily is seven. Her parents pay for her to go to school.",
            "answer": "a private primary school",
            "example": true
          },
          {
            "id": "q2",
            "clue": "Gabriel is 14. His school is free.",
            "answer": "a state secondary school"
          },
          {
            "id": "q3",
            "clue": "James and Ellie are three.",
            "answer": "a nursery school"
          },
          {
            "id": "q4",
            "clue": "Mehmet is ten. His parents don't pay for him to go to school.",
            "answer": "a state primary school"
          },
          {
            "id": "q5",
            "clue": "Nick is 16. His parents pay for him to go to school.",
            "answer": "a private secondary school"
          }
        ]
      }
    ]
  },
  34: {
    "unit": {
      "id": "u34d",
      "title": "Unit 34: Crime - Bài tập chi tiết (Workbook)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u34d-ex1-who",
        "type": "word_from_definition",
        "title": "34.1. What do we call someone …",
        "instructions_vi": "Gọi tên người thực hiện hành vi được mô tả.",
        "questions": [
          {
            "id": "q1",
            "clue": "who steals cars?",
            "answer": "a car thief",
            "example": true
          },
          {
            "id": "q2",
            "clue": "who kills someone?",
            "answer": "a murderer"
          },
          {
            "id": "q3",
            "clue": "who steals things from shops?",
            "answer": "a shoplifter",
            "accepted_answers": [
              "a shoplifter",
              "a robber",
              "a shoplifter / robber"
            ]
          },
          {
            "id": "q4",
            "clue": "who robs people's houses and flats?",
            "answer": "a burglar"
          },
          {
            "id": "q5",
            "clue": "who attacks someone in the street and steals their money?",
            "answer": "a mugger"
          },
          {
            "id": "q6",
            "clue": "who sells illegal drugs?",
            "answer": "a drug dealer"
          }
        ]
      },
      {
        "id": "u34d-ex2-gaps",
        "type": "fill_in_the_blank",
        "title": "34.2. Fill the gaps in these sentences.",
        "instructions_vi": "Điền từ vào chỗ trống dựa theo gợi ý chữ cái đầu.",
        "questions": [
          {
            "id": "q1",
            "sentence": "There were a lot of football ______ near the stadium.",
            "letter_hint": "hooligans",
            "answer": "hooligans",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "The police officer ______ her for shoplifting.",
            "letter_hint": "arr___",
            "answer": "arrested"
          },
          {
            "id": "q3",
            "sentence": "Some ______ destroyed all the flowers in the park.",
            "letter_hint": "van___",
            "answer": "vandals"
          },
          {
            "id": "q4",
            "sentence": "He had to pay a ______ of £50 for parking his car in the wrong place.",
            "letter_hint": "fi___",
            "answer": "fine"
          },
          {
            "id": "q5",
            "sentence": "There are a lot of ______ in this part of the city, so always close the windows.",
            "letter_hint": "bur___",
            "answer": "burglaries",
            "accepted_answers": [
              "burglaries",
              "burglars"
            ]
          },
          {
            "id": "q6",
            "sentence": "The police made a mistake; she was ______. She did not steal the money.",
            "letter_hint": "inn___",
            "answer": "innocent"
          },
          {
            "id": "q7",
            "sentence": "A group of ______ have attacked the airport.",
            "letter_hint": "terr___",
            "answer": "terrorists"
          },
          {
            "id": "q8",
            "sentence": "He murdered his wife. He was in ______ for 20 years.",
            "letter_hint": "pr___",
            "answer": "prison"
          }
        ]
      },
      {
        "id": "u34d-ex3-truefalse",
        "type": "true_false",
        "title": "34.3. True or false?",
        "instructions_vi": "Xác định câu đúng hay sai.",
        "questions": [
          {
            "id": "q1",
            "statement": "A burglar goes into someone's house and steals things.",
            "answer": true,
            "example": true
          },
          {
            "id": "q2",
            "statement": "Vandals take people's money.",
            "answer": false,
            "note": "Vandals destroy things."
          },
          {
            "id": "q3",
            "statement": "A murderer kills someone.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "A car thief is someone who drives very badly or dangerously.",
            "answer": false,
            "note": "A car thief steals cars."
          },
          {
            "id": "q5",
            "statement": "If you are guilty it means you are the person who did the crime.",
            "answer": true
          }
        ]
      },
      {
        "id": "u34d-ex4-robbedstole",
        "type": "multiple_choice",
        "title": "34.4. Choose the right word to complete each sentence.",
        "instructions_vi": "Chọn từ đúng: 'rob(bed)' đi với người/nơi chốn bị cướp, còn 'steal/stole' đi với đồ vật bị lấy trộm.",
        "questions": [
          {
            "id": "q1",
            "question": "My brother was robbed / stolen yesterday.",
            "options": [
              "robbed",
              "stolen"
            ],
            "answer": "robbed",
            "example": true
          },
          {
            "id": "q2",
            "question": "Someone robbed / stole my bike last night.",
            "options": [
              "robbed",
              "stole"
            ],
            "answer": "stole"
          },
          {
            "id": "q3",
            "question": "My local bank has been robbed / stolen.",
            "options": [
              "robbed",
              "stolen"
            ],
            "answer": "robbed"
          },
          {
            "id": "q4",
            "question": "Who has robbed / stolen my pen?",
            "options": [
              "robbed",
              "stolen"
            ],
            "answer": "stolen"
          },
          {
            "id": "q5",
            "question": "Someone robbed / stole our TV when we were on holiday.",
            "options": [
              "robbed",
              "stole"
            ],
            "answer": "stole"
          },
          {
            "id": "q6",
            "question": "Where were you when your keys were robbed / stolen?",
            "options": [
              "robbed",
              "stolen"
            ],
            "answer": "stolen"
          }
        ]
      }
    ]
  },
  35: {
    "unit": {
      "id": "u35d",
      "title": "Unit 35: The media - Bài tập chi tiết (Workbook)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Bài 35.3 có nhiều câu chấp nhận hơn 1 cách diễn đạt đúng (ví dụ: 'an advert' / 'an advertisement')."
    },
    "exercises": [
      {
        "id": "u35d-ex1-gaps",
        "type": "fill_in_the_blank",
        "title": "35.1. Fill the gaps in these sentences.",
        "instructions_vi": "Điền từ thích hợp vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "sentence": "Ten million people watch this ______ every week. It's very popular.",
            "answer": "programme",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "The news ______ on channel 3 at 9 o'clock every night.",
            "answer": "is"
          },
          {
            "id": "q3",
            "sentence": "There was a ______ about traffic problems in cities on TV last night.",
            "answer": "documentary"
          },
          {
            "id": "q4",
            "sentence": "I saw a ______ programme about birds in Antarctica.",
            "answer": "nature"
          },
          {
            "id": "q5",
            "sentence": "My sister is 13; she reads a ______ magazine every week. She likes the stories about boys.",
            "answer": "teenage"
          },
          {
            "id": "q6",
            "sentence": "With my mobile I can read the sports news ______.",
            "answer": "online"
          },
          {
            "id": "q7",
            "sentence": "I'd like to watch the news now. Is it OK if I ______ the channel?",
            "answer": "change"
          },
          {
            "id": "q8",
            "sentence": "Did you see the ______ with the Prime Minister last night?",
            "answer": "interview"
          }
        ]
      },
      {
        "id": "u35d-ex2-matching",
        "type": "matching",
        "title": "35.2. Match the left-hand column with the type of programme on the right.",
        "instructions_vi": "Nối mô tả nội dung với đúng thể loại chương trình.",
        "pairs": [
          {
            "left": "Talking about family problems",
            "right": "Talk show"
          },
          {
            "left": "Film of elephants in Africa",
            "right": "Nature programme"
          },
          {
            "left": "Football cup final",
            "right": "Sports programme"
          },
          {
            "left": "Reports from all over the world",
            "right": "International news"
          },
          {
            "left": "Maria decides not to marry Philip",
            "right": "Soap (opera)"
          },
          {
            "left": "Ten people in a house - they cannot leave or talk to anyone outside",
            "right": "Reality TV programme"
          }
        ]
      },
      {
        "id": "u35d-ex3-whatcall",
        "type": "word_from_definition",
        "title": "35.3. What do you call …",
        "instructions_vi": "Gọi tên đúng thuật ngữ được mô tả. Lưu ý: một số câu có nhiều hơn 1 cách diễn đạt đúng.",
        "questions": [
          {
            "id": "q1",
            "clue": "a person who goes out and gets stories for newspapers?",
            "answer": "a reporter",
            "example": true
          },
          {
            "id": "q2",
            "clue": "a person who writes articles in newspapers and magazines?",
            "answer": "a journalist"
          },
          {
            "id": "q3",
            "clue": "a newspaper you can buy every day after about 5 pm?",
            "answer": "an evening newspaper",
            "accepted_answers": [
              "an evening newspaper",
              "an evening paper",
              "an evening (news)paper"
            ]
          },
          {
            "id": "q4",
            "clue": "a programme with stories made from lots of pictures?",
            "answer": "a cartoon"
          },
          {
            "id": "q5",
            "clue": "a programme on TV about animals, birds, etc?",
            "answer": "a nature programme"
          },
          {
            "id": "q6",
            "clue": "something in a magazine or on TV that tries to sell something?",
            "answer": "an advert",
            "accepted_answers": [
              "an advert",
              "an advertisement"
            ]
          },
          {
            "id": "q7",
            "clue": "something like CNN or Sky Sports?",
            "answer": "a channel",
            "accepted_answers": [
              "a channel",
              "a TV channel"
            ]
          },
          {
            "id": "q8",
            "clue": "a meeting when a reporter asks a person questions for TV or a newspaper?",
            "answer": "an interview"
          }
        ]
      }
    ]
  },
  36: {
    "unit": {
      "id": "u36d",
      "title": "Unit 36: Problems at home and work - Bài tập chi tiết (Workbook)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Bài 36.1 chấp nhận nhiều cách diễn đạt (chỉ cần nêu đúng ý chính, hệ thống kiểm tra từ khóa). Bài 36.2 mỗi câu có nhiều hơn 1 đáp án đúng — cần chọn đúng ít nhất 3 danh từ phù hợp."
    },
    "exercises": [
      {
        "id": "u36d-ex1-pictures",
        "type": "sentence_construction",
        "title": "36.1. Look at the pictures. What is the problem?",
        "instructions_vi": "Nhìn vào hình (8 ô đánh số) và mô tả vấn đề bằng một câu tiếng Anh. Chỉ cần nêu đúng ý chính (từ khóa), không cần khớp chính xác từng chữ.",
        "context": {
          "image": "images/exercises/u36-problems-composite.jpg",
          "description": "Hình gồm 8 ô đánh số từ 1 đến 8, mỗi ô mô tả một vấn đề khác nhau ở nhà hoặc nơi làm việc."
        },
        "questions": [
          {
            "id": "q1",
            "situation": "Picture 1",
            "answer": "The phone isn't working.",
            "example": true
          },
          {
            "id": "q2",
            "situation": "Picture 2",
            "answer": "The computer has crashed.",
            "required_keywords": [
              "computer"
            ]
          },
          {
            "id": "q3",
            "situation": "Picture 3",
            "answer": "The cup is broken.",
            "required_keywords": [
              "broken"
            ]
          },
          {
            "id": "q4",
            "situation": "Picture 4",
            "answer": "The coffee machine isn't working.",
            "required_keywords": [
              "coffee"
            ]
          },
          {
            "id": "q5",
            "situation": "Picture 5",
            "answer": "She has too much work to do.",
            "required_keywords": [
              "work"
            ]
          },
          {
            "id": "q6",
            "situation": "Picture 6",
            "answer": "He's cut his hand.",
            "required_keywords": [
              "cut"
            ]
          },
          {
            "id": "q7",
            "situation": "Picture 7",
            "answer": "The room is untidy.",
            "required_keywords": [
              "untidy"
            ]
          },
          {
            "id": "q8",
            "situation": "Picture 8",
            "answer": "She is late for work.",
            "required_keywords": [
              "late"
            ]
          }
        ]
      },
      {
        "id": "u36d-ex2-nouns",
        "type": "multi_select",
        "title": "36.2. Write down three nouns that can go with these words.",
        "instructions_vi": "Với mỗi từ/cụm từ, chọn ít nhất 3 danh từ phù hợp có thể đi cùng.",
        "word_bank": [
          "window",
          "cup",
          "glass",
          "finger",
          "hand",
          "knee",
          "room",
          "desk",
          "hair",
          "school",
          "an appointment",
          "a concert",
          "camera",
          "microwave",
          "fridge",
          "work",
          "rain",
          "wind",
          "chair",
          "table",
          "book",
          "mountain",
          "spoon",
          "cloud",
          "song",
          "shoe",
          "guitar"
        ],
        "questions": [
          {
            "id": "q1",
            "prompt": "1. broken ______",
            "correct_answers": [
              "window",
              "cup",
              "glass"
            ],
            "min_required": 3,
            "example": true
          },
          {
            "id": "q2",
            "prompt": "2. cut ______",
            "correct_answers": [
              "finger",
              "hand",
              "knee"
            ],
            "min_required": 3
          },
          {
            "id": "q3",
            "prompt": "3. untidy ______",
            "correct_answers": [
              "room",
              "desk",
              "hair"
            ],
            "min_required": 3
          },
          {
            "id": "q4",
            "prompt": "4. late for ______",
            "correct_answers": [
              "school",
              "an appointment",
              "a concert"
            ],
            "min_required": 3
          },
          {
            "id": "q5",
            "prompt": "5. a ______ that isn't working",
            "correct_answers": [
              "camera",
              "microwave",
              "fridge"
            ],
            "min_required": 3
          },
          {
            "id": "q6",
            "prompt": "6. too much ______",
            "correct_answers": [
              "work",
              "rain",
              "wind"
            ],
            "min_required": 3
          }
        ]
      }
    ]
  },
  37: {
    "unit": {
      "id": "u37d",
      "title": "Unit 37: Global problems - Bài tập chi tiết (Workbook)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Bài 37.4 mỗi câu có nhiều hơn 1 đáp án đúng — cần chọn đủ số lượng từ yêu cầu."
    },
    "exercises": [
      {
        "id": "u37d-ex1-pictures",
        "type": "labeling",
        "title": "37.1. What problems can you see in the pictures?",
        "instructions_vi": "Nhìn hình và gọi tên vấn đề/thảm họa bằng tiếng Anh.",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Vấn đề gì?",
            "image": "images/exercises/u37-problem-strike.jpg",
            "answer": "strike",
            "accepted_answers": [
              "strike",
              "a strike"
            ],
            "example": true
          },
          {
            "id": "q2",
            "clue_vi": "Vấn đề gì?",
            "image": "images/exercises/u37-problem-carcrash.jpg",
            "answer": "car crash",
            "accepted_answers": [
              "car crash",
              "a car crash"
            ]
          },
          {
            "id": "q3",
            "clue_vi": "Vấn đề gì?",
            "image": "images/exercises/u37-problem-flood.jpg",
            "answer": "flood",
            "accepted_answers": [
              "flood",
              "a flood"
            ]
          },
          {
            "id": "q4",
            "clue_vi": "Vấn đề gì?",
            "image": "images/exercises/u37-problem-war.jpg",
            "answer": "war"
          },
          {
            "id": "q5",
            "clue_vi": "Vấn đề gì?",
            "image": "images/exercises/u37-problem-earthquake.jpg",
            "answer": "earthquake",
            "accepted_answers": [
              "earthquake",
              "an earthquake"
            ]
          },
          {
            "id": "q6",
            "clue_vi": "Vấn đề gì?",
            "image": "images/exercises/u37-problem-forestfire.jpg",
            "answer": "forest fire",
            "accepted_answers": [
              "forest fire",
              "a forest fire"
            ]
          },
          {
            "id": "q7",
            "clue_vi": "Vấn đề gì?",
            "image": "images/exercises/u37-problem-hurricane.jpg",
            "answer": "hurricane",
            "accepted_answers": [
              "hurricane",
              "a hurricane"
            ]
          },
          {
            "id": "q8",
            "clue_vi": "Vấn đề gì?",
            "image": "images/exercises/u37-problem-trafficjam.jpg",
            "answer": "traffic jam",
            "accepted_answers": [
              "traffic jam",
              "a traffic jam"
            ]
          },
          {
            "id": "q9",
            "clue_vi": "Vấn đề gì?",
            "image": "images/exercises/u37-problem-snowstorm.jpg",
            "answer": "snowstorm",
            "accepted_answers": [
              "snowstorm",
              "a snowstorm"
            ]
          }
        ]
      },
      {
        "id": "u37d-ex2-matching",
        "type": "matching",
        "title": "37.2. Match the words on the left with the words on the right.",
        "instructions_vi": "Ghép 2 từ để tạo thành một từ/cụm từ có nghĩa.",
        "pairs": [
          {
            "left": "air",
            "right": "pollution"
          },
          {
            "left": "traffic",
            "right": "jam"
          },
          {
            "left": "rush",
            "right": "hour"
          },
          {
            "left": "forest",
            "right": "fire"
          },
          {
            "left": "crowded",
            "right": "cities"
          },
          {
            "left": "homeless",
            "right": "people"
          },
          {
            "left": "car",
            "right": "crash"
          },
          {
            "left": "earth",
            "right": "quake"
          }
        ]
      },
      {
        "id": "u37d-ex3-definitions",
        "type": "word_from_definition",
        "title": "37.3. Find the words that match these definitions.",
        "instructions_vi": "Tìm từ/cụm từ phù hợp với định nghĩa.",
        "questions": [
          {
            "id": "q1",
            "clue": "a very strong wind",
            "answer": "a hurricane",
            "example": true
          },
          {
            "id": "q2",
            "clue": "so many cars on the road that they can't easily move",
            "answer": "a traffic jam"
          },
          {
            "id": "q3",
            "clue": "a street with a large number of people",
            "answer": "crowded"
          },
          {
            "id": "q4",
            "clue": "when two cars hit one another",
            "answer": "a car crash"
          },
          {
            "id": "q5",
            "clue": "without work",
            "answer": "unemployed"
          },
          {
            "id": "q6",
            "clue": "the time of day when there is most traffic",
            "answer": "the rush hour",
            "accepted_answers": [
              "the rush hour",
              "rush hour"
            ]
          },
          {
            "id": "q7",
            "clue": "without enough to eat",
            "answer": "hungry"
          },
          {
            "id": "q8",
            "clue": "when a lot of trees burn",
            "answer": "a forest fire"
          }
        ]
      },
      {
        "id": "u37d-ex4-groups",
        "type": "multi_select",
        "title": "37.4. Look at and find …",
        "instructions_vi": "Chọn đủ số lượng từ được yêu cầu trong mỗi câu.",
        "word_bank": [
          "car crash",
          "traffic jam",
          "forest fire",
          "strike",
          "war",
          "hurricane",
          "snowstorm",
          "flood",
          "poor",
          "hungry",
          "homeless",
          "unemployed",
          "earthquake",
          "pollution",
          "crowded",
          "rush hour"
        ],
        "questions": [
          {
            "id": "q1",
            "prompt": "1. two problems on the roads.",
            "correct_answers": [
              "car crash",
              "traffic jam"
            ],
            "min_required": 2,
            "example": true
          },
          {
            "id": "q2",
            "prompt": "2. two things that pollute the air.",
            "correct_answers": [
              "forest fire",
              "traffic jam"
            ],
            "min_required": 2
          },
          {
            "id": "q3",
            "prompt": "3. two problems that can be political.",
            "correct_answers": [
              "strike",
              "war"
            ],
            "min_required": 2
          },
          {
            "id": "q4",
            "prompt": "4. three problems that are caused by the weather.",
            "correct_answers": [
              "hurricane",
              "snowstorm",
              "flood"
            ],
            "min_required": 3
          },
          {
            "id": "q5",
            "prompt": "5. four adjectives that can describe people.",
            "correct_answers": [
              "poor",
              "hungry",
              "homeless",
              "unemployed"
            ],
            "min_required": 4
          }
        ]
      },
      {
        "id": "u37d-ex5-gaps",
        "type": "fill_in_the_blank",
        "title": "37.5. Fill the gaps with a word.",
        "instructions_vi": "Điền từ thích hợp vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "sentence": "Cars make air ______ worse in towns.",
            "answer": "pollution",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "Their wages were very low so the workers went on ______.",
            "answer": "strike"
          },
          {
            "id": "q3",
            "sentence": "My great-grandfather died in the First World ______.",
            "answer": "War",
            "accepted_answers": [
              "War",
              "war"
            ]
          },
          {
            "id": "q4",
            "sentence": "Jack had a ______ last year but fortunately no one was hurt.",
            "answer": "car crash"
          },
          {
            "id": "q5",
            "sentence": "Japan often has ______ and Siberia often has ______.",
            "answer": [
              "earthquakes",
              "snowstorms"
            ]
          },
          {
            "id": "q6",
            "sentence": "When people are ______ they sometimes sleep on the streets.",
            "answer": "homeless"
          },
          {
            "id": "q7",
            "sentence": "I hate driving in the city in the ______.",
            "answer": "rush hour"
          },
          {
            "id": "q8",
            "sentence": "The water is so ______ that people cannot drink it.",
            "answer": "polluted"
          }
        ]
      }
    ]
  },
  38: {
    "unit": {
      "id": "u38d",
      "title": "Unit 38: Have / had / had - Bài tập chi tiết (Workbook)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      },
      "grading_note": "Nhiều câu có nhiều hơn 1 đáp án đúng — hệ thống chấp nhận bất kỳ đáp án nào trong danh sách accepted_answers."
    },
    "exercises": [
      {
        "id": "u38d-ex1-gaps",
        "type": "fill_in_the_blank",
        "title": "38.1. Fill the gaps in the sentences.",
        "instructions_vi": "Điền từ/cụm từ thích hợp vào chỗ trống.",
        "questions": [
          {
            "id": "q1",
            "sentence": "I always have ______ in the morning.",
            "answer": "coffee",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "I have a tennis ______ every Saturday morning. My teacher is excellent.",
            "answer": "lesson"
          },
          {
            "id": "q3",
            "sentence": "Do you want to have a game of ______?",
            "answer": "tennis",
            "accepted_answers": [
              "tennis",
              "football",
              "squash",
              "rugby",
              "darts",
              "chess",
              "cards"
            ]
          },
          {
            "id": "q4",
            "sentence": "Evelyn's having a ______ on Saturday. Are you going?",
            "answer": "party"
          },
          {
            "id": "q5",
            "sentence": "Do you want to have a ______? The bathroom's just here.",
            "answer": "shower",
            "accepted_answers": [
              "shower",
              "bath",
              "wash"
            ]
          },
          {
            "id": "q6",
            "sentence": "I have an ______ tomorrow, so I have to study tonight.",
            "answer": "exam"
          },
          {
            "id": "q7",
            "sentence": "We must have a ______ to talk about these problems.",
            "answer": "meeting"
          },
          {
            "id": "q8",
            "sentence": "I'm going to the cafeteria to have a ______. Do you want to come?",
            "answer": "coffee",
            "accepted_answers": [
              "coffee",
              "cup of coffee",
              "cup of tea",
              "drink"
            ]
          },
          {
            "id": "q9",
            "sentence": "The hotel has a swimming pool, so we can have a ______ every day.",
            "answer": "swim"
          },
          {
            "id": "q10",
            "sentence": "We can have ______ before the film, or we can eat after it.",
            "answer": "dinner",
            "accepted_answers": [
              "dinner",
              "a meal",
              "supper",
              "something to eat"
            ]
          }
        ]
      },
      {
        "id": "u38d-ex2-mistakes",
        "type": "error_correction",
        "title": "38.2. Correct the mistakes.",
        "instructions_vi": "Sửa lỗi sai liên quan đến cách dùng 'have' trong mỗi câu.",
        "questions": [
          {
            "id": "q1",
            "original": "Please phone Grandma when you have the moment.",
            "answer": "Please phone Grandma when you have a moment.",
            "example": true
          },
          {
            "id": "q2",
            "original": "Scarlett has gone to the hairdresser's to have cut her hair.",
            "answer": "Scarlett has gone to the hairdresser's to have her hair cut."
          },
          {
            "id": "q3",
            "original": "That computer game looks great. Can I have a going?",
            "answer": "That computer game looks great. Can I have a go?"
          },
          {
            "id": "q4",
            "original": "I want to have some words with my teacher after the lesson.",
            "answer": "I want to have a word with my teacher after the lesson."
          },
          {
            "id": "q5",
            "original": "Mum didn't have the times to go to the shop today.",
            "answer": "Mum didn't have the time to go to the shop today."
          },
          {
            "id": "q6",
            "original": "They don't have got any cake in the café today.",
            "answer": "They don't have any cake in the café today.",
            "accepted_answers": [
              "They don't have any cake in the café today.",
              "They haven't got any cake in the café today."
            ]
          }
        ]
      },
      {
        "id": "u38d-ex3-crossword",
        "type": "crossword",
        "title": "38.3. Complete the crossword.",
        "instructions_vi": "Điền từ phù hợp cho mỗi gợi ý.",
        "clues": [
          {
            "number": 1,
            "direction": "across",
            "clue": "You have it in a restaurant.",
            "answer": "meal",
            "example": true
          },
          {
            "number": 2,
            "direction": "across",
            "clue": "You have it at school or university.",
            "answer": "exam"
          },
          {
            "number": 3,
            "direction": "across",
            "clue": "People often have one on their birthday.",
            "answer": "party"
          },
          {
            "number": 4,
            "direction": "across",
            "clue": "If you don't like coffee, you can have ______.",
            "answer": "tea"
          },
          {
            "number": 5,
            "direction": "across",
            "clue": "Do you want to have a ______ of tennis?",
            "answer": "game"
          }
        ]
      },
      {
        "id": "u38d-ex4-whatsay",
        "type": "word_from_definition",
        "title": "38.4. What do you say?",
        "instructions_vi": "Chọn/viết câu phù hợp với tình huống được mô tả.",
        "questions": [
          {
            "id": "q1",
            "clue": "(someone is thirsty)",
            "answer": "Why don't you have a drink?",
            "example": true
          },
          {
            "id": "q2",
            "clue": "(someone is going away)",
            "answer": "Have a good journey!",
            "accepted_answers": [
              "Have a good journey!",
              "Have a good time!"
            ]
          },
          {
            "id": "q3",
            "clue": "(someone sneezes [Atishoo!] and has a red nose)",
            "answer": "Have you got a cold?"
          },
          {
            "id": "q4",
            "clue": "(someone has a new camera)",
            "answer": "Can I have a look?"
          }
        ]
      }
    ]
  },
  39: {
    "unit": {
      "id": "u39d",
      "title": "Unit 39: Go / went / gone - Bài tập chi tiết (Workbook)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u39d-ex1-pictures",
        "type": "labeling",
        "title": "39.1. Where are these people going? Follow the lines.",
        "instructions_vi": "Nhìn hình (nối theo đường dẫn) và viết địa điểm/hoạt động mà mỗi người đang đi tới.",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Mateo is going to...",
            "image": "images/exercises/u39-going-zoo.jpg",
            "answer": "the zoo",
            "example": true
          },
          {
            "id": "q2",
            "clue_vi": "The Sharps are going to...",
            "image": "images/exercises/u39-going-beach.jpg",
            "answer": "the beach"
          },
          {
            "id": "q3",
            "clue_vi": "Zoe and Penelope are going...",
            "image": "images/exercises/u39-going-shopping.jpg",
            "answer": "shopping",
            "accepted_answers": [
              "shopping",
              "to the shopping centre",
              "to the shopping mall"
            ]
          },
          {
            "id": "q4",
            "clue_vi": "Asad is going to...",
            "image": "images/exercises/u39-going-cairo.jpg",
            "answer": "Cairo"
          },
          {
            "id": "q5",
            "clue_vi": "Lars is going...",
            "image": "images/exercises/u39-going-fishing.jpg",
            "answer": "fishing"
          }
        ]
      },
      {
        "id": "u39d-ex2-resolutions",
        "type": "fill_in_the_blank",
        "title": "39.2. Write about Victoria's New Year Resolutions.",
        "instructions_vi": "Dựa vào danh sách dự định của Victoria bên dưới, tự viết lại câu hoàn chỉnh (chia ở ngôi thứ ba) vào chỗ trống.",
        "context": {
          "description": "This year I'm going to: stop eating chocolate · pass my driving test · learn Spanish · watch less TV · keep my room tidy"
        },
        "questions": [
          {
            "id": "q1",
            "sentence": "1. This year Victoria is going to stop eating chocolate.",
            "answer": "stop eating chocolate",
            "example": true
          },
          {
            "id": "q2",
            "sentence": "2. This year ______",
            "answer": "Victoria is going to pass her driving test.",
            "accepted_answers": [
              "Victoria is going to pass her driving test.",
              "Victoria is going to pass her driving test",
              "is going to pass her driving test",
              "is going to pass her driving test."
            ]
          },
          {
            "id": "q3",
            "sentence": "3. This year ______",
            "answer": "Victoria is going to learn Spanish.",
            "accepted_answers": [
              "Victoria is going to learn Spanish.",
              "Victoria is going to learn Spanish",
              "is going to learn Spanish",
              "is going to learn Spanish."
            ]
          },
          {
            "id": "q4",
            "sentence": "4. This year ______",
            "answer": "Victoria is going to watch less TV.",
            "accepted_answers": [
              "Victoria is going to watch less TV.",
              "Victoria is going to watch less TV",
              "is going to watch less TV",
              "is going to watch less TV."
            ]
          },
          {
            "id": "q5",
            "sentence": "5. This year ______",
            "answer": "Victoria is going to keep her room tidy.",
            "accepted_answers": [
              "Victoria is going to keep her room tidy.",
              "Victoria is going to keep her room tidy",
              "is going to keep her room tidy",
              "is going to keep her room tidy."
            ]
          }
        ]
      },
      {
        "id": "u39d-ex3-truefalse",
        "type": "true_false",
        "title": "39.3. Are these sentences correct?",
        "instructions_vi": "Xác định câu đã cho đúng ngữ pháp hay sai. Nếu sai, xem gợi ý sửa lại đúng.",
        "questions": [
          {
            "id": "q1",
            "statement": "It's time to go at home now.",
            "answer": false,
            "note": "It's time to go home now.",
            "example": true
          },
          {
            "id": "q2",
            "statement": "Mum is going for shopping this afternoon.",
            "answer": false,
            "note": "Mum is going shopping this afternoon."
          },
          {
            "id": "q3",
            "statement": "I'm going to London by car tomorrow.",
            "answer": true
          },
          {
            "id": "q4",
            "statement": "I love Paris. Did you go to there last year?",
            "answer": false,
            "note": "Did you go there last year?"
          },
          {
            "id": "q5",
            "statement": "Alexei is going to home at 4 o'clock.",
            "answer": false,
            "note": "Alexei is going home at 4 o'clock."
          },
          {
            "id": "q6",
            "statement": "We always go to the same café. Let's go to somewhere different today.",
            "answer": false,
            "note": "Let's go somewhere different today."
          },
          {
            "id": "q7",
            "statement": "Excuse me, please. Where does this bus go?",
            "answer": true
          },
          {
            "id": "q8",
            "statement": "I go to swimming every Sunday morning.",
            "answer": false,
            "note": "I go swimming every Sunday morning."
          },
          {
            "id": "q9",
            "statement": "We're going sightsee today.",
            "answer": false,
            "note": "We're going sightseeing today."
          },
          {
            "id": "q10",
            "statement": "Jo went down to the top of the hill.",
            "answer": false,
            "note": "Jo went up to the top of the hill. (hoặc: went down to the bottom of the hill.)"
          },
          {
            "id": "q11",
            "statement": "Let's go to fish today.",
            "answer": false,
            "note": "Let's go fishing today."
          },
          {
            "id": "q12",
            "statement": "She went out off the shop.",
            "answer": false,
            "note": "She went out of the shop."
          },
          {
            "id": "q13",
            "statement": "Please go away. I'm tired.",
            "answer": true
          },
          {
            "id": "q14",
            "statement": "Would you like to go to home now?",
            "answer": false,
            "note": "Would you like to go home now?"
          }
        ]
      }
    ]
  },
  40: {
    "unit": {
      "id": "u40d",
      "title": "Unit 40: Do / did / done - Bài tập chi tiết (Workbook)",
      "level": "A1-A2",
      "language_pair": {
        "target": "en",
        "native": "vi"
      }
    },
    "exercises": [
      {
        "id": "u40d-ex1-picture",
        "type": "sentence_construction",
        "title": "40.1. Write questions and answers about the people in the picture.",
        "instructions_vi": "Nhìn hình và viết câu trả lời cho câu hỏi 'What is ... doing?' của mỗi người/con vật trong hình.",
        "context": {
          "image": "images/exercises/u40-activities-composite.jpg",
          "description": "Hình vẽ nhiều người và một con vật đang làm các hoạt động khác nhau."
        },
        "questions": [
          {
            "id": "q1",
            "situation": "(the boy) What is the boy doing?",
            "answer": "He's eating an ice cream.",
            "example": true
          },
          {
            "id": "q2",
            "situation": "(the girls) What are the girls doing?",
            "answer": "They're playing tennis.",
            "required_keywords": [
              "tennis"
            ]
          },
          {
            "id": "q3",
            "situation": "(the dog) What is the dog doing?",
            "answer": "It's sleeping.",
            "required_keywords": [
              "sleeping"
            ]
          },
          {
            "id": "q4",
            "situation": "(the man in the house) What is the man in the house doing?",
            "answer": "He's washing up. / He's doing the washing-up.",
            "required_keywords": [
              "washing"
            ]
          },
          {
            "id": "q5",
            "situation": "(the woman) What is the woman doing?",
            "answer": "She's reading a book.",
            "required_keywords": [
              "reading"
            ]
          },
          {
            "id": "q6",
            "situation": "(the man in the garden) What is the man in the garden doing?",
            "answer": "He's gardening. / He's doing the gardening.",
            "required_keywords": [
              "garden"
            ]
          }
        ]
      },
      {
        "id": "u40d-ex2-jobs",
        "type": "labeling",
        "title": "40.2. Write questions and answers about the jobs of the people in the pictures.",
        "instructions_vi": "Nhìn hình và cho biết nghề nghiệp của mỗi người.",
        "questions": [
          {
            "id": "q1",
            "clue_vi": "Lara Brown — What does she do?",
            "image": "images/exercises/u40-job-secretary.jpg",
            "answer": "a secretary",
            "example": true
          },
          {
            "id": "q2",
            "clue_vi": "Lee Atkins — What does he do?",
            "image": "images/exercises/u40-job-teacher.jpg",
            "answer": "a teacher"
          },
          {
            "id": "q3",
            "clue_vi": "Sophie Hicks — What does she do?",
            "image": "images/exercises/u40-job-doctor.jpg",
            "answer": "a doctor"
          },
          {
            "id": "q4",
            "clue_vi": "Cooper and Hailey — What do they do?",
            "image": "images/exercises/u40-job-students.jpg",
            "answer": "students",
            "accepted_answers": [
              "students",
              "they're students",
              "they are students"
            ]
          }
        ]
      },
      {
        "id": "u40d-ex3-thismorning",
        "type": "word_from_definition",
        "title": "40.3. Write questions about what the people in Exercise 40.2 did this morning.",
        "instructions_vi": "Dựa vào các cụm từ cho sẵn (talk to five patients / teach three lessons / write an essay / go to a meeting) và hình đã dùng ở bài 40.2, trả lời câu hỏi 'What did ... do?' cho mỗi người.",
        "context": {
          "gallery": [
            {
              "image": "images/exercises/u40-job-secretary.jpg",
              "caption": "Lara Brown (secretary)"
            },
            {
              "image": "images/exercises/u40-job-teacher.jpg",
              "caption": "Lee Atkins (teacher)"
            },
            {
              "image": "images/exercises/u40-job-doctor.jpg",
              "caption": "Sophie Hicks (doctor)"
            },
            {
              "image": "images/exercises/u40-job-students.jpg",
              "caption": "Cooper and Hailey (students)"
            }
          ]
        },
        "questions": [
          {
            "id": "q1",
            "clue": "Lee Atkins — What did he do?",
            "answer": "He taught three lessons.",
            "example": true
          },
          {
            "id": "q2",
            "clue": "Lara Brown — What did she do?",
            "answer": "She went to a meeting."
          },
          {
            "id": "q3",
            "clue": "Sophie Hicks — What did she do?",
            "answer": "She talked to five patients."
          },
          {
            "id": "q4",
            "clue": "Cooper and Hailey — What did they do?",
            "answer": "They wrote an essay."
          }
        ]
      },
      {
        "id": "u40d-ex4-dialogue",
        "type": "dialogue_error_correction",
        "title": "40.4. Correct the mistakes in this dialogue.",
        "instructions_vi": "Sửa lỗi sai trong đoạn hội thoại sau.",
        "original_dialogue": "ANNA: Where did you went on your holidays? To Wales?\nPAVEL: No, we don't go to Wales this year. We went to Scotland.\nANNA: Do your grandmother lives in Scotland?\nPAVEL: No, she don't but my uncle do.",
        "corrections": [
          {
            "id": "q1",
            "wrong": "Where did you went on your holidays?",
            "correct": "Where did you go on your holidays?",
            "example": true
          },
          {
            "id": "q2",
            "wrong": "No, we don't go to Wales this year.",
            "correct": "No, we didn't go to Wales this year."
          },
          {
            "id": "q3",
            "wrong": "Do your grandmother lives in Scotland?",
            "correct": "Does your grandmother live in Scotland?"
          },
          {
            "id": "q4",
            "wrong": "No, she don't but my uncle do.",
            "correct": "No, she doesn't but my uncle does."
          }
        ]
      }
    ]
  }
};
