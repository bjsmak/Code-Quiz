//DOM Elements as variables
var startQuizDisplay = document.querySelector('#startPage');
var startQuizButton = document.querySelector('#startQuiz');
var questionPageDisplay = document.querySelector('#questionPage');
var questionEl = document.querySelector('#question');
var answerButtonA = document.querySelector('#answerA');
var answerButtonA = document.querySelector('#answerB');
var answerButtonA = document.querySelector('#answerC');
var answerButtonA = document.querySelector('#answerD');

//Quiz Questions referenced in an objects/keys matrix
var questionsArr = [{
    question: "What HTML element references the Javascript files?",
    answerA: "nav",
    answerB: "meta",
    answerC: "script",
    answerD: "header"
    },
    {
    question: "What element allows the user to manipulate what a button does when it is clicked?",
    answerA: ".classList",
    answerB: ".querySelector",
    answerC: ".button",
    answerD: ".addEventListener"
    },
    {
    question: "What HTML element references the Javascript files?",
    answerA: "nav",
    answerB: "meta",
    answerC: "script",
    answerD: "header"
    },
    {
    question: "What HTML element references the Javascript files?",
    answerA: "nav",
    answerB: "meta",
    answerC: "script",
    answerD: "header"}];

//Button to start quiz
startQuizButton.addEventListener("click", startQuiz);

function startQuiz () {
    //Remove start page and begin questions
    startQuizDisplay.classList.add("hide");
    questionPageDisplay.classList.remove("hide");
    addQuestion();
    
    var timerInterval = setInterval(function() {
        secondsLeft--;
        //NEED TO DEFINE timeEL in HTML - display clock
        timeEl.textContent = secondsLeft + " seconds left.";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          //game over function needed
        }
    
      }, 1000);

}
//Adds questions to display/answers
var questionIndex = 0;
function addQuestion() {
    if (questionsIndex >= questionsArr.length) {
        //NEEDS HIGH SCORE DISPLAY AND GAME OVER
    }
    else {questionEl.innerHTML = questionArr[questionIndex].question;
        //add check question function
    }
}