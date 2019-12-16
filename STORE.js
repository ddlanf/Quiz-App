STORE = {
  questions: [
        {
            question: "How many islands are in the state of Hawaii?",
            options:['1', '5', '8', '16'],
            answer: 2, //points to index of array "option"
            explanation: "The state of Hawaii consists of 8 major islands including Hawaii, Maui, Oahu, Kahoolawe, Lanai, Molokai, Kauai and Niihau.",
            picture: 'Q1_answer.jpg'
         },

        {
            question: "What does the Hawaiian word “Honu” mean in English?",
            options:['Mantaray', 'Turtle', 'Dolphin', 'Fish'],
            answer: 1,
            explanation: "Honu is a Hawaiian word for Green Sea Turtle. It is also a symbol of wisdom and good Luck in Hawaii.",
            picture: 'Q2_answer.jpg'
        },
    
        {
            question: "When was the Hawaiian Monarchy overthrown?",
            options:['January 17, 1893', 'August 21, 1959', 'December 25, 2002', 'September 21, 1863'],
            answer: 0,
            explanation: "Hawaiian Kingdom was overthrown by a group of businessmen and sugar planters on January 17, 1893, and was later annexed by the U.S on August 21, 1959.",
            picture: 'Q3_answer.jpg'
        },

        {
            question: "Which president of the United States was born in Hawaii?",
            options:['Donald J. Trump', 'George W. Bush', 'William J. Clinton', 'Barack H. Obama'],
            answer: 3,
            explanation: "Barack Obama was born in Honolulu, Hawaii on August 4, 1961. Making him the first president to be born outside the contiguous 48 states.",
            picture: 'Q4_answer.jpg'
        },

        {
            question: "Hawaiin Pidgin English is an  English-based creole language spoken in Hawaii. Which of these Hawaiin Pidgin English statement translates to “That uncle is very smart, he become a web developer” in plain English?",
            options:['My uncle plenny lolo, he became a web developer.', 'Muh unko plenny akamai, he wen become one web developah.', 'Me uncle suppa intellec, he’s one web developah.', 'Muh unko small kine akamai,  he wen become one web developah.'],
            answer: 1,
            explanation: "In Hawaiin Pidgen English, the verb “to be” is often omitted and past tense is expressed using “went” in front of a present tense. As for pronunciation, long vowels and “r” after a vowel are not pronounced. Words ending in “le”, ”al”, and ”el” are often pronounced with “o” or “ol”.",
            picture: 'Q5_answer.jpg'
        }
    ],

    currentQuestion: 1,
    correctAnswers: 0
};

console.log(STORE.questions[STORE.currentQuestion].question);