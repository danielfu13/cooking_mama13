var startBtn = document.getElementById("startBtn");
var countdownTimer = document.getElementById("countdownTimer");
var homeContainer =  document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionTitle = document.getElementById("questionTitle");   
var high_scores= [];
var output="";
var score = 0;
let i = 0;

// set options
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var answers = document.getElementById("answers"); 

// set timer functions
var time = 75;
var time_remaining = true;
var time_start= false;

// questions array
var questions = [{
    question: "What are people who write computer code called?",
    option: ["1. Programmers", "2. Professors", "3. Writers", "4. Creators"],
    answers: 0
},
{
    question: "Which of the following is a common application coders use to upload and download files?",
    option: ["1. VScode", "2. Google", "3. Github", "4. jQuery"],
    answers:  2
},
{
    question: "Which of the following is mainly known for changing the appearance of a webpage?",
    option: ["1. CSS", "2. HTML", "3. Javascript", "4. Java"],
    answers: 0
},
{
    question: "Which syntax is used to create a link in an HTML file?",
    option: ["1. <section>", "2. <html>", "3. <a href=", "4. <media>"],
    answers: 2
},
{
    question: "What is the git command to switch between different branches?",
    option: ["1. gin init", "2. git checkout", "3 git commit", "4. ls"],
    answers: 1
}
];

