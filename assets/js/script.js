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
        if(choices.correct) {
           button.dataset.correct=choices.correct; 
        }
        button.addEventListener("click", selectChoice);
    });
}

function selectChoice(e){
    let selectedBtn =e.target;
    let  isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
}


displayQuestion()