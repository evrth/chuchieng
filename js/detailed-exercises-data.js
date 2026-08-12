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
}
};
