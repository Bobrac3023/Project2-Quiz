const totalQuestions = [{
        question: "Who is the first Governor of United Provinces, after India's independence.",
        choices: [{
                text: "Smt Sonia Gandhi",
                result: false
            },
            {
                text: "Smt Droupadi Murmu",
                result: false
            },
            {
                text: "Smt Sarojini Naidu",
                result: true
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
                result: true
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

    {
        question: "Who is called Frontier Gandhi ",
        choices: [{
                text: " Shri Muhamad Ali Jinnah ",
                result: false
            },
            {
                text: "Shri Dr RajMohan Gandhi",
                result: false
            },
            {
                text: "Shri Abdul Ghaffār Khān",
                result: true
            },
            {
                text: " Shri Dr Maulana Abul Kalam Azad ",
                result: false
            },
        ]
    },
    {
        question: "Who is first finance minister of Independent India",
        choices: [{
                text: " Shri Dr Babasaheb Ambedkar ",
                result: false
            },
            {
                text: "Shri Shanmukham Chetty",
                result: true
            },
            {
                text: "Shri Dr Rajendra Prasad",
                result: false
            },
            {
                text: " Shri Dr Maulana Abul Kalam Azad ",
                result: false
            },
        ]
    },
    {
        question: "Who is first education minister of Indepenedent India",
        choices: [{
                text: " Shri Dr Maulana Abul Kalam Azad ",
                result: true
            },
            {
                text: "Shri Shanmukham Chetty",
                result: false
            },
            {
                text: "Shri Dr Rajendra Prasad",
                result: false
            },
            {
                text: " Shri Dr John Matthai  ",
                result: false
            },
        ]
    }
];


// variables 
const quizH2Element = document.getElementById("quiz");
const answerButton = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-button");
const scoreArea = document.getElementById("score-area");

//variable to store question index and score 
let presentQuestionIndex = 0;
let score = 0;


// function to start quiz
function initiateQuiz() {
    //reset question index to zero
    presentQuestionIndex = 0;
    //reset score index to zero
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    submitButton.innerHTML = "Submit"
    displayQuestion();
}

//function to display questions
function displayQuestion() {
    resetState();
    /* var to get questions with index 0*/
    let questionBank = totalQuestions[presentQuestionIndex];
    /* increment question by one*/
    let questionNo = presentQuestionIndex + 1;
    /* display question */
    quizH2Element.innerHTML = questionNo + "." + questionBank.question;

    // display answers with 'forEach' loop method and arrow function
    questionBank.choices.forEach(choices => {
        // Create 'Button' element 
        const button = document.createElement('button');
        //insert details to innerHTML of button Element from array and object literals
        button.innerHTML = choices.text;
        button.classList.add('btn');
        // append button element as child inside the Div
        answerButton.appendChild(button);
        //Create ifLoop when user selects an option
        if (choices.result) {
            button.dataset.result = choices.result;
        }
        button.addEventListener("click", selectChoice)
    });
}

function selectChoice(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.result === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        alert("!!!!Great- This is the right answer!!!!");
    } else {
        selectedBtn.classList.add("incorrect");
        alert(`!!! OPS- This is INCORRECT!!!`);
        
        
        
       
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
        
        
    });
    submitButton.style.display = "block";
}

// function to remove buttons
function resetState() {
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}
//function when user clicks on answers
function showscore() {
    resetState();
    quizH2Element.innerHTML = `You scored ${score} out of ${totalQuestions.length}!`;
    submitButton.innerHTML = "Play-Again";
    submitButton.style.display = "block";
}

// function for Submit Button 
function handleSubmitButton() {
    presentQuestionIndex++;
    if (presentQuestionIndex < totalQuestions.length) {
        displayQuestion();
    } else {
        showscore();
    }
}

//eventListener when user clicks submit button
submitButton.addEventListener("click", () => {
    if (presentQuestionIndex <= totalQuestions.length) {
        handleSubmitButton()
    } else {
        initiateQuiz()
    }
});



displayQuestion()