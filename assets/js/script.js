const totalQuestions = [{
        question: "Who was the first president of independent India?",
        choices: [{
                text: "Smt Sonia Gandhi",
                result: false
            },
            {
                text: "Smt Droupadi Murmu",
                result: false
            },
            {
                text: "Shri Dr Rajendra Prasad",
                result: true
            },
            {
                text: "Smt Pratiba Patil",
                result: false
            }
        ]
    },
    {
        question: "Select the last governor-general of dominion of India?",
        choices: [{
                text: "Shri Chakravarti Rajagopalachari",
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
                text: "Shri Dr Maulana Azad",
                result: false
            },
        ]
    },

    {
        question: "Who is called Frontier Gandhi? ",
        choices: [{
                text: "Shri Muhamad Ali Jinnah",
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
                text: "Shri Dr Maulana Abul Kalam Azad ",
                result: false
            },
        ]
    },
    {
        question: "Select the first finance minister of independent India?",
        choices: [{
                text: "Shri Dr Babasaheb Ambedkar ",
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
                text: "Shri Dr Maulana Abul Kalam Azad",
                result: false
            },
        ]
    },
    {
        question: "Select the first education minister of independent India?",
        choices: [{
                text: "Shri Dr Maulana Abul Kalam Azad",
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
                text: "Shri Dr John Matthai",
                result: false
            },
        ]
    }
];

// variables defined for html elements referenced by id
const quizH2Element = document.getElementById("quiz");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");


//variable to store question index and score 
let presentQuestionIndex = 0;
let score = 0;

// function to start quiz
function initiateQuiz() {
    //reset question index to zero
    presentQuestionIndex = 0;
    //reset score index to zero
    score = 0;
    nextButton.innerHTML = "NEXT ==>";
    displayQuestion();
}

//function to display questions
function displayQuestion() {
    resetState();
    //var to get questions with index 0
    let questionBank = totalQuestions[presentQuestionIndex];
    // increment question by one
    let questionNo = presentQuestionIndex + 1;
    // display question 
    quizH2Element.innerHTML = questionNo + "." + questionBank.question;

    // display answers with 'forEach' loop method and arrow function
    questionBank.choices.forEach(choices => {
        // Create 'Button' element 
        const button = document.createElement('button');
        //insert details to innerHTML of button Element from array and object literals
        button.innerHTML = choices.text;
        //refer to a class in css
        button.classList.add('btn');
        // append button element as child inside the Div
        answerButton.appendChild(button);
        //Create ifLoop when user selects an option
        if (choices.result) {
            button.dataset.result = choices.result;
        }
        button.addEventListener("click", selectChoice);
    });
}

function selectChoice(event) {
    let selectedBtn = event.target;
    let isCorrect = selectedBtn.dataset.result === "true";
    if (isCorrect) {
        //refer to a class in css
        selectedBtn.classList.add("correct");
        score++;
        alert("!!!!Great- This is the right answer!!!!");
    } else {
        //refer to a class in css
        selectedBtn.classList.add("incorrect");
        alert(`!!! OOPS- This is INCORRECT !!!`);


    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// function to remove buttons
function resetState() {
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
//function for final score
function showscore() {
    resetState();
    quizH2Element.classList.add("score-count");
    //use of backticks to display the whole string with variables
    quizH2Element.innerHTML = `You scored ${score} out of ${totalQuestions.length}!`;
    nextButton.innerHTML = "Play-Again";
    //dispaly nextButton as a block element
    nextButton.style.display = "block";

}

// function for next Button 
function handleNexttButton() {
    presentQuestionIndex++;
    if (presentQuestionIndex < totalQuestions.length) {
        displayQuestion();
    } else {
        showscore();
    }
}

//eventListener when user clicks next button
nextButton.addEventListener("click", () => {
    if (presentQuestionIndex <= totalQuestions.length) {
        handleNexttButton();
    } else {
        initiateQuiz();
    }
});
//fires when initial HTML document is completely loaded and parsed
document.addEventListener("DOMContentLoaded", (event) => {
    displayQuestion();

});