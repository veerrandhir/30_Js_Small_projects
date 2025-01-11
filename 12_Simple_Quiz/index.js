// const chooseAnswer = document.querySelector(".answer-button")
// chooseAnswer.addEventListener("click", () => {
// console.log("Answer is chosen");})

const questionElement = document.querySelector(".question");
const answerButton = document.querySelector(".answer-button");
const nextButton = document.querySelector("#next-btn");

const questions = [
    {
        question: "what is the capital of France?",
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Dublin", correct: false }
        ]
    },
    {
        question: "what is the capital of Ireland?",
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: false },
            { text: "Paris", correct: false },
            { text: "Dublin", correct: true }
        ]
    },
    {
        question: "what is the capital of England?",
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: true },
            { text: "Paris", correct: false },
            { text: "Dublin", correct: false }
        ]
    },
    {
        question: "what is the capital of USA?",
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: false },
            { text: "Washington", correct: true },
            { text: "Dublin", correct: false }
        ]
    },
    {
        question: "what is the capital of Germany?",
        answers: [
            { text: "New York", correct: false },
            { text: "Berlin", correct: true },
            { text: "Paris", correct: false },
            { text: "Dublin", correct: false }
        ]
    },
    {
        question: "what is the capital of Spain?",
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: true },
            { text: "Dublin", correct: false }
        ]
    },
    {
        question: "what is the capital of Italy?",
        answers: [
            { text: "New York", correct: false },
            { text: "Rome", correct: true },
            { text: "Paris", correct: false },
            { text: "Dublin", correct: false }
        ]
    },
    {
        question: "what is the capital of Canada?",
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Dublin", correct: false }
        ]
    },
    {
        question: "what is the capital of Australia?",
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: false },
            { text: "Canberra", correct: true },
            { text: "Dublin", correct: false }
        ]
    },
    {
        question: "what is the capital of Japan?",
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Dublin", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();

}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

    })


}
startQuiz();