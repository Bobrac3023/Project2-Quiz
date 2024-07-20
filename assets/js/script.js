const questions = [{
    question: "Who is the President of India",
    options: ["Smt Sonia Gandhi", "Smt Droupadi Murmu", "Smt Sarojini Naidu", " Smt Pratiba Patil ", ]
}];

/* define variables */
const quizH2Element = document.getElementById("quiz");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

/* creat variable to store question index and score */
let presentQuestionIndex = 0;
let score = 0;

/* write function to start quiz*/
function initiateQuiz() {
    /* reset question index to zero*/
    presentQuestionIndex = 0;
    /* reset score index to zero*/
    score = 0;
    nextButton.innerHTML = "Next"
    displayQuestion();
}

/* write function to display questions*/
function displayQuestion() {
    /* define var to get questions with index 0*/
    let questionBank = questions[presentQuestionIndex];
    /* increment question by one*/
    let questionNo = presentQuestionIndex + 1;
    /* display question */
    quizH2Element.innerHTML = questionNo + "." + questionBank.question;

    /* write function to display answers*/
    questionBank.options.forEach(options => {
        const button = document.createElement('button');
        button.innerHTML = options;
        button.classList.add('btn');
        answerButton.appendChild(button);
    })
}
displayQuestion()