const quizQuestions = [
  {
    question: "Who was the first president of independent India?",
    choices: [
      {
        text: "Smt Sonia Gandhi",
        result: false,
      },
      {
        text: "Smt Droupadi Murmu",
        result: false,
      },
      {
        text: "Shri Dr Rajendra Prasad",
        result: true,
      },
      {
        text: "Smt Pratiba Patil",
        result: false,
      },
    ],
  },
  {
    question: "Select the last governor-general of dominion of India?",
    choices: [
      {
        text: "Shri Chakravarti Rajagopalachari",
        result: true,
      },
      {
        text: "Lord William Bentinck",
        result: false,
      },
      {
        text: "Shri Rajendra Prasad",
        result: false,
      },
      {
        text: "Shri Dr Maulana Azad",
        result: false,
      },
    ],
  },

  {
    question: "Who is called Frontier Gandhi? ",
    choices: [
      {
        text: "Shri Muhamad Ali Jinnah",
        result: false,
      },
      {
        text: "Shri Dr RajMohan Gandhi",
        result: false,
      },
      {
        text: "Shri Abdul Ghaffār Khān",
        result: true,
      },
      {
        text: "Shri Dr Maulana Abul Kalam Azad ",
        result: false,
      },
    ],
  },
  {
    question: "Select the first finance minister of independent India?",
    choices: [
      {
        text: "Shri Dr Babasaheb Ambedkar ",
        result: false,
      },
      {
        text: "Shri Shanmukham Chetty",
        result: true,
      },
      {
        text: "Shri Dr Rajendra Prasad",
        result: false,
      },
      {
        text: "Shri Dr Maulana Abul Kalam Azad",
        result: false,
      },
    ],
  },
  {
    question: "Select the first education minister of independent India?",
    choices: [
      {
        text: "Shri Dr Maulana Abul Kalam Azad",
        result: true,
      },
      {
        text: "Shri Shanmukham Chetty",
        result: false,
      },
      {
        text: "Shri Dr Rajendra Prasad",
        result: false,
      },
      {
        text: "Shri Dr John Matthai",
        result: false,
      },
    ],
  },
];

// variables defined for html elements referenced by id
const questionButton = document.getElementById("quiz");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

//variable to store question index and score
let questionIndex = 0;
let score = 0;

//function to shuffle questions
function randomArray(array) {
  for (let r = array.length - 1; r > 0; r--) {
    const b = Math.floor(Math.random() * (r + 1));
    // Swap the elements at index r and b
    [array[r], array[b]] = [array[b], array[r]];
  }
}

// function to start quiz
function initiateQuiz() {
  //reset question index to zero
  questionIndex = 0;
  //reset score index to zero
  score = 0;
  randomArray(quizQuestions); // Shuffle questions every new quiz
  nextButton.style.display = "none";
  displayQuestion();
}

//function to display questions
function displayQuestion() {
  nextButton.style.display = "none";
  // Clears old answer buttons
  resetState();
  // Gets the current question from totalQuestions
  let questionBank = quizQuestions[questionIndex];
  // increment question by one
  let questionNo = questionIndex + 1;
  // display question
  questionButton.innerHTML = questionNo + "." + questionBank.question;
  // shuffle the answer choices
  randomArray(questionBank.choices);
  callAnswers(questionBank.choices); // Call the next function to display answers
}

// function to display answers
function callAnswers(choices) {
  choices.forEach((choice) => {
    // Create 'Button' element
    const button = document.createElement("button");
    //insert details to innerHTML of button Element from array and object literals
    button.innerHTML = choice.text;
    //refer to a class in css
    button.classList.add("btn");
    // append button element as child inside the Div
    answerButton.appendChild(button);
    //Create ifloop when user selects an option
    if (choice.result) {
      button.dataset.result = choice.result;
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
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.result === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.innerHTML = "NEXT ==>";
  nextButton.style.display = "block";
}

// function to remove buttons
function resetState() {
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
//function to display final score
function showscore() {
  resetState();
  questionButton.classList.add("score-count");
  //use of backticks to display the whole string with variables
  questionButton.innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
  // Next button change to "play again"
  nextButton.innerHTML = "Play-Again";
  //display nextButton as a block element
  nextButton.style.display = "block";
}

// function for next Button
function handleNextButton() {
  questionIndex++;
  if (questionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    showscore();
  }
}

// showscore() function above changes the nextButton.innerHTML to "Play Again",
// event listener has to distinguish between "NEXT" and "Play Again" modes.
nextButton.addEventListener("click", () => {
  if (questionIndex <= quizQuestions.length) {
    handleNextButton();
  } else {
    initiateQuiz(); // Reset quiz if playing again
  }
});

//fires when initial HTML document is completely loaded and parsed
document.addEventListener("DOMContentLoaded", (event) => {
  initiateQuiz();
});
