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
var scorePage = document.querySelector('#score');
var highScoreSubmit = document.querySelector('#highScoreButton');

//Quiz Questions referenced in an objects/keys matrix
var questionsArr = [{
    question: "What HTML element references the Javascript files?",
    answerA: "nav",
    answerB: "meta",
    answerC: "script",
    answerD: "header",
    correctAnswer: "nav"
    },
    {
    question: "What element allows the user to manipulate what a button does when it is clicked?",
    answerA: ".classList",
    answerB: ".querySelector",
    answerC: ".button",
    answerD: ".addEventListener",
    correctAnswer: ".addEventListener"
    },
    {
    question: "What precedes an id?",
    answerA: ".",
    answerB: "#",
    answerC: "?",
    answerD: "@",
    correctAnswer: "#"
    },
    {
    question: "What does DOM stand for",
    answerA: "Document Object Model",
    answerB: "Display Oriented Model",
    answerC: "Dominated Object Modeling",
    answerD: "Distant Object Model",
    correctAnswer: "Document Object Model"}];

//Button to start quiz and answer buttons
startQuizButton.addEventListener("click", startQuiz);
answerButtonA.addEventListener("click", checkQuestion);
answerButtonB.addEventListener("click", checkQuestion);
answerButtonC.addEventListener("click", checkQuestion);
answerButtonD.addEventListener("click", checkQuestion);

 
//Seconds on timer, timer interval as global
var secondsLeft = 60;
var questionIndex = 0;
var timerInterval;

function startQuiz () {
    //Remove start page and begin questions
    startQuizDisplay.classList.add("hide");
    questionPageDisplay.classList.remove("hide");
    addQuestion();

     timerInterval = setInterval(function() {
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
function addQuestion() {
    //console.log(questionIndex);
    questionEl.innerText = questionsArr[questionIndex].question;
    answerA.innerHTML = questionsArr[questionIndex].answerA;
    answerB.innerHTML = questionsArr[questionIndex].answerB;
    answerC.innerHTML = questionsArr[questionIndex].answerC;
    answerD.innerHTML = questionsArr[questionIndex].answerD;
    document.querySelector('.message').innerText = '';
}


function checkQuestion() {
    correctAnswer = questionsArr[questionIndex].correctAnswer;
    var answer = this.innerText;
        //console.log(this.innerText , correctAnswer);
        questionIndex++
    if (answer === correctAnswer){
        document.querySelector('.message').innerText = 'Correct!'
    }
    else {
        secondsLeft = secondsLeft-10;
        document.querySelector('.message').innerText = 'Incorrect!'
    }

    clearInterval(timerInterval);


    //addQuestion();
    if (questionIndex >= questionsArr.length) {
        gameOver()
    }else{setTimeout(startQuiz, 3000)};
        
}

function gameOver() {
    questionPageDisplay.classList.add("hide");
    highScorePage.classList.remove('hide');
    scorePage.innerHTML = secondsLeft;
    document.querySelector('.message').innerText = '';
}

//On enter to submit initials and append name to local storage with high score
highScoreSubmit.addEventListener("click", saveHighScore);

//Function to save high score after game over
function saveHighScore() {
    //value for user initials
    var userName = document.querySelector('#name-text').value.trim();
    var finalScore = scorePage.innerHTML;
    //Get scores or set to new array
    var scoreTotals = JSON.parse(window.localStorage.getItem("highScoreTotals"));
    console.log(finalScore);
    console.log(scoreTotals);
    console.log(userName);

    var scoreArr = { name: userName, score: finalScore};
   // console.log(scoreTotals);
    scoreTotals.push(scoreArr);
    window.localStorage.setItem("highScoreTotals", JSON.stringify([scoreTotals]));


    scoreTotals.forEach(function(){
    var liTag = document.createElement("li");
    liTag.textContent = 'User ' + scoreArr.name + ' ,' + 'High Score ' + scoreArr.score;
    document.querySelector('#high-scores').appendChild(liTag);
    //document.querySelector('#high-scores').appendChild(liTag) = 'User ' + userName + ' ,' + 'High Score ' + finalScore;
    });
}

