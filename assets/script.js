// Create Variables/Questions
const questEl = document.getElementById('question');
const startEl = document.getElementById('start')
const nextEl = document.getElementById('next')
const submitEl = document.getElementById('submit')
const a1El = document.getElementById('answer_a')
const a2El = document.getElementById('answer_b')
const a3El = document.getElementById('answer_c')
const a4El = document.getElementById('answer_d')
// const quizInfo = [
//     {
//         question: "Which of the following keywords is used to define a variable in JavaScript?",
//         A: "var",
//         B: "let",
//         C: "Both A & B",
//         D: "None of the above",
//         correct: "C",
//     },
//     {
//         question: "Which of the following methods is used to access HTML elements using JavaScript?",
//         A: "getElementbyId()",
//         B: "getElementsByClassName()",
//         C: "Both A & B",
//         D: "None of the above",
//         correct: "C",
//     },
//     {
//         question: "How to stop an interval timer in JavaScript?",
//         A: "clearInterval",
//         B: "clearTimer",
//         C: "intervalOver",
//         D: "None of the above",
//         correct: "A",
//     },
//     {
//         question: "How do you call a function in JavaScript?",
//         A: "callFunction",
//         B: "function.call",
//         C: "function()",
//         D: "function = true",
//         correct: "C",
//     }
// ];

const quizInfo = [
    {
        question: 'What does || represent in JS?',
        answers:[
            {text: 'OR', correct: true },
            {text: 'AND', correct: false },
            {text: 'This', correct: false },
            {text: 'Minus', correct: false },
    ]
        },
    {
        question: 'What does ~ represent in JS?',
        answers:[
            {text: 'RIGHT SHIFT', correct: false },
            {text: 'Up', correct: false },
            {text: 'NOT', correct: true },
            {text: 'Down', correct: false },
    ]
        },
    {
        question: 'What does === represent in JS?',
        answers:[
            {text: 'Not equal to', correct: false },
            {text: 'Minus', correct: false },
            {text: 'Var', correct: false },
            {text: 'Equal value and type', correct: true },
    ]
        },
    {
        question: 'What does == represent in JS?',
        answers:[
            {text: 'Equal value', correct: false },
            {text: 'Equal to', correct: true },
            {text: 'Double equals', correct: false },
            {text: 'Equal type', correct: false },
    ]
        },
    
    ]

function firstQuestion() {
    questEl.innerHTML = quizInfo
}

submitEl.addEventListner('click', nextBtn());

// startEl.addEventListner('click', startGame);

// functionality for the next button
function nextBtn() {
    nextEl.classList.remove('hidden')
    console.log('I have been clicked!')
}

function startGame() {
    startEl.classList.add('hide');

}

var score = 0;


for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!")
    }
    alert("you got " + score + "/" + questions.length);
}

// create timer



// create randomized answers