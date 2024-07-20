const questions = [{
        question: "Who is the President of India",
        choices: [{
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
            }
        ]
    },
    {
        question: "Who is last Governor-General of Dominion of India",
        choices: [{
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
    }

];
/* define variables */
const quizH2Element = document.getElementById("quiz");
const answerButton = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-button");
let  correctAnswer= document.getElementById("correct-answwer");
let  wrongtAnswer= document.getElementById("wrong-answwer");

/* creat variable to store question index and score */
let presentQuestionIndex = 0;
let score = 0;


/* write function to start quiz*/
function initiateQuiz() {
    /* reset question index to zero*/
    presentQuestionIndex = 0;
    /* reset score index to zero*/
    score = 0;
    submitButton.innerHTML = "Submit"
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

    /* write function to display answers with 'forEach' loop method*/
    questionBank.choices.forEach(choices => {
        /* Create 'Button' element */
        const button = document.createElement('button');
        /* add details to innerHTML of button Element*/
        button.innerHTML = choices.text;
        button.classList.add('btn');
        /* append button element as child inside the Div*/
        answerButton.appendChild(button);
        /* Create ifLoop when user selects an option*/
        if (choices.correct) {
            button.dataset.correct = choices.correct;
        }
        //let choiceno = questionBank.choices + 1;
        button.addEventListener("click", selectChoice);
    });
}
/* Create function when user clicks on the choices offered*/
function selectChoice(event) {
    let selectedBtn = event.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        alert("Great- This is the right answer!!!!");
    } else {
        selectedBtn.classList.add("incorrect");
        alert("Sorry- Incorrect- Try again!!!!");
    }
}
/* Create function for Submit Button */
function handleSubmitButton() {
    presentQuestionIndex++;
    if (presentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showscore();
    }
}

/* Create eventListener when user clicks submit button*/
submitButton.addEventListener("click", () => {
    if (presentQuestionIndex <= questions.length) {
        handleSubmitButton()
    } else {
        startQuiz()
    }
});

displayQuestion()