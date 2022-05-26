var highscoreEl = document.querySelector("#highscore");
var timerEl = document.querySelector("#timer");
var mainEL = document.querySelector("#main");
var timeRemain = 0;
var totalPoints = 0;
var quizQuestions = -1;

var questions = [{
    question1: "What can you store in an array?",
    option1: ["1. booleans", "2. strings", "3. numbers", "4. All of the above"],
    answer1: "4. All of the above"    
},
{
    question2: "Which of the following is a common application coders use to upload and download files?",
    option2: ["1. VScode", "2. Google", "3. Github", "4. jQuery"],
    answer2:  "3. Github"
},
{
    question3: "Which of the following is mainly known for changing the appearance of a webpage?",
    option3: ["1. CSS", "2. HTML", "3. Javascript", "4. Java"],
    answer3: "1. CSS"
},
{
    question4: "Which syntax is used to create a link in an HTML file?",
    option4: ["1. <section>", "2. <html>", "3. <media>", "4. <a href="],
    answer4: "4. <a href="
},
{
    question5: "What is the git command to switch between different branches?",
    option5: ["1. gin init", "2. git checkout", "3 git commit", "4. ls"],
    answer5: "2. git checkout"
}
];

function game() {
    quizQuestions++;

    if (quizQuestions > questions.length - 1) {
        endQuiz();
        return;
    }

    }


var startQuiz = function() {
    startBtn.addEventListener("click", event => {
        timer();
        mainEL.remove();
        questions(question1);
        startTime();
    });
}


function startTime () {
    timeRemain = 75;
    document.getElementById('timeRemain').innerHTML = timeRemain;

    timer = setInterval(function() {
        timeRemain--;
        document.getElementById("timeRemain").innerHTML = timeRemain;

        if (timeRemain <= 0) {
            clearInterval(timeRemain);
            endQuiz();
        }
    }, 1000);
    
    game();
}

startQuiz();



