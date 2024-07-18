const questions = [{
        question: "Who is the President of India",
        answers: [{
                text: "Smt Sonia Gandhi",
                correct: false
            },
            {
                text: "Smt Droupadi Murmu",
                correct: true
            },
            {
                text: "Smt Sarojini Naidu",
                correct: false
            },
            {
                text: " Smt Pratiba Patil ",
                correct: false
            },

        ]
    },
    {
        question: "Who is first prime minister of Independent India",
        answers: [{
                text: "Smt Indira Gandhi",
                correct: false
            },
            {
                text: "Shri Vallabhai Patel",
                correct: false
            },
            {
                text: "Shri Pandit Jawaharlal Nehru",
                correct: true
            },
            {
                text: " Shri Deve Gowda ",
                correct: false
            },
        ]
    },
    {
        question: "Who is last Governor-General of Dominion of India",
        answers: [{
                text: " Shri Chakravarti Rajagopalachari ",
                correct: true
            },
            {
                text: "Lord William Bentinck",
                correct: false
            },
            {
                text: "Shri Rajendra Prasad",
                correct: false
            },
            {
                text: " Dr Maulana Azad ",
                correct: false
            },
        ]
    },

    {
        question: "Who is first education minister of Idependent India",
        answers: [{
                text: "Dr John Matthai",
                correct: false
            },
            {
                text: "Shri Vallabhai Patel",
                correct: false
            },
            {
                text: "Dr Babasaheb Ambedkar",
                correct: false
            },
            {
                text: " Dr Maulana Azad",
                correct: true
            },
        ]
    },
    {
        question: "Who is first home minister of Idependent India",
        answers: [{
                text: "Shri Jagjivan Ram ",
                correct: false
            },
            {
                text: "Shri Vallabhai Patel",
                correct: true
            },
            {
                text: "Shri Pandit Jawaharlal Nehru",
                correct: false
            },
            {
                text: " Sardar Baldev Singh ",
                correct: false
            }
        ]
    }
];

/* define variables */
const quizH2Element = document.getElementById ("quiz");
const answerButton = document.getElementById ("answer-buttons");
const nextButton = document.getElementById ("next-btn");

/* store question index */
let presentQuestionIndex = 0;
let score = 0;

/* write function to start quiz*/
function () {
    presentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    displayQuestion ();
}

/* write function to display question*/
