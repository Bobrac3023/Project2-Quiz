const  totalQuestions = [{
        question: "Who is the President of India",
        choices: [{
                text: "Smt Sonia Gandhi",
                result : false
            },
            {
                text: "Smt Droupadi Murmu",
                result: true
            },
            {
                text: "Smt Sarojini Naidu",
                result: false
            },
            {
                text: " Smt Pratiba Patil ",
                result: false
            }
        ]
    },
    {
        question: "Who is last Governor-General of Dominion of India",
        choices: [{
                text: " Shri Chakravarti Rajagopalachari ",
                result : true
            },
            {
                text: "Lord William Bentinck",
                result: false
            },
            {
                text: "Shri Rajendra Prasad",
                result: false
            },
            {
                text: " Dr Maulana Azad ",
                result: false
            },
        ]
    }

];

/* variables */
const quizH2Element = document.getElementById("quiz");
const answerButton = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-button");
const scoreArea =document.getElementById("score-area");

/* variable to store question index and score */
let presentQuestionIndex = 0;
let score = 0;
let correctAnswers=0;
let wrongAnswers =0;

/* function to start quiz*/
function initiateQuiz() {
    /* reset question index to zero*/
    presentQuestionIndex = 0;
    /* reset score index to zero*/
    score = 0;
    correctAnswers=0;
    wrongAnswers=0;
    submitButton.innerHTML = "Submit"
    displayQuestion();
}

/* function to display questions*/
function displayQuestion() {
    resetState();
    /* var to get questions with index 0*/
    let questionBank = totalQuestions[presentQuestionIndex];
    /* increment question by one*/
    let questionNo = presentQuestionIndex + 1;
    /* display question */
    quizH2Element.innerHTML = questionNo + "." + questionBank.question;

    /* display answers with 'forEach' loop method and arrow function*/
    questionBank.choices.forEach(choices => {
        /* Create 'Button' element */
        const button = document.createElement('button');
        /* add details to innerHTML of button Element*/
        button.innerHTML = choices.text;
        button.classList.add('btn');
        /* append button element as child inside the Div*/
        answerButton.appendChild(button);
        /* Create ifLoop when user selects an option*/
        if (choices.result) {
            button.dataset.result = choices.result;
        }
        button.addEventListener("click", selectChoice)
    });
}
/* function to remove buttons*/
function resetState() {
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
        
    }
}
/* function when user clicks on answers*/
function selectChoice(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.result === "true";
    //let isWrong = selectedBtn.dataset.wrong === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        correctAnswers++;
        //alert("Great- This is the right answer!!!!");
    } else {
        selectedBtn.classList.add("incorrect");
        //alert("Sorry- Incorrect- Try again!!!!");
        wrongAnswers++;
    }
}

function showscore() {
    resetState();
    quizH2Element.innerHTML = `You scored ${score} out of ${totalQuestions.length}!`;
    scoreArea.innerHTML =`You got ${wrongAnswers} Wrong Answer(s),  you got ${correctAnswers}Correct Answer(s) `;
    submitButton.innerHTML = "Play-Again";
    submitButton.style.display = "block";
}

/* Create function for Submit Button */
function handleSubmitButton() {
    presentQuestionIndex++;
    if (presentQuestionIndex < totalQuestions.length) {
        displayQuestion();
    } else {
        showscore();
       // correctAnswers;
       // wrongAnswers;
    }

}

/* Create eventListener when user clicks submit button*/
submitButton.addEventListener("click", () => {
    if (presentQuestionIndex <= totalQuestions.length) {
        handleSubmitButton()
    } else {
        initiateQuiz()
    }
});



displayQuestion()