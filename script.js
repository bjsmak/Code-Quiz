//DOM Elements as variables
var startQuizDisplay = document.querySelector('#startPage');
var startQuizButton = document.querySelector('#startQuiz');
var questionPageDisplay = document.querySelector('#questionPage');
var highScorePage = document.querySelector('#highScorePage');
var questionEl = document.querySelector('#question');
var answerButtonA = document.querySelector('#answerA');
var answerButtonB = document.querySelector('#answerB');
var answerButtonC = document.querySelector('#answerC');
var answerButtonD = document.querySelector('#answerD');
var timeEl = document.querySelector('#clock');

//Quiz Questions referenced in an objects/keys matrix
var questionsArr = [{
    question: "What HTML element references the Javascript files?",
    answerA: "nav",
    answerB: "meta",
    answerC: "script",
    answerD: "header",
    correctAnswer: "C"
    },
    {
    question: "What element allows the user to manipulate what a button does when it is clicked?",
    answerA: ".classList",
    answerB: ".querySelector",
    answerC: ".button",
    answerD: ".addEventListener",
    correctAnswer: "D"
    },
    {
    question: "What HTML element references the Javascript files?",
    answerA: "nav",
    answerB: "meta",
    answerC: "script",
    answerD: "header",
    correctAnswer: "D"
    },
    {
    question: "What HTML element references the Javascript files?",
    answerA: "nav",
    answerB: "meta",
    answerC: "script",
    answerD: "header",
    correctAnswer: "D"}];

//Button to start quiz and answer buttons
startQuizButton.addEventListener("click", startQuiz);
answerButtonA.addEventListener("click", checkQuestion('A'));
answerButtonB.addEventListener("click", checkQuestion('B'));
answerButtonC.addEventListener("click", checkQuestion('C'));
answerButtonD.addEventListener("click", checkQuestion('D'));

//Seconds on timer
var secondsLeft = 60;
var score = 0;
var questionIndex;


function startQuiz () {
    //Remove start page and begin questions
    startQuizDisplay.classList.add("hide");
    questionPageDisplay.classList.remove("hide");
    addQuestion(0);

    
       var timerInterval = setInterval(function() {
        secondsLeft--;
        //NEED TO DEFINE timeEL in HTML - display clock
        timeEl.textContent = secondsLeft + " seconds left.";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          gameOver();
        }
    
      }, 1000);

}
//Adds questions to display/answers
function addQuestion(questionIndex) {
    console.log(questionIndex);
    questionEl.innerText = questionsArr[questionIndex].question;
    answerA.innerHTML = questionsArr[questionIndex].answerA;
    answerB.innerHTML = questionsArr[questionIndex].answerB;
    answerC.innerHTML = questionsArr[questionIndex].answerC;
    answerD.innerHTML = questionsArr[questionIndex].answerD;
}


function checkQuestion(answer) {
    correctAnswer = questionsArr["correctAnswer"];
    if (answer === correctAnswer){
        score++;
        addQuestion(1);
    }
    else {secondsLeft = secondsLeft-10;
        addQuestion(1);}
}

function gameOver() {
    questionPageDisplay.classList.add("hide");
    highScorePage.classList.remove('hide');
    
}

