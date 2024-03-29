var startBtn = document.getElementById("startBtn");
var countdownTimer = document.getElementById("countdownTimer");
var homeContainer =  document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionTitle = document.getElementById("questionTitle");   

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

var high_scores= [];
var output="";
var score = 0;
let i = 0;

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

//set interval
var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

// set time
function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        }
        document.getElementById("timer").innerHTML = time;
    }

// start button to start quiz
startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});

// display questions and options

function setQuizQuestions() {
        questionTitle.textContent = questions[i].question;
        option1.textContent = questions[i].option[0]; 
        option2.textContent = questions[i].option[1]; 
        option3.textContent = questions[i].option[2]; 
        option4.textContent = questions[i].option[3]; 
        };


// Change to next question
option1.addEventListener('click', function(event) {
        event.stopPropagation();
        answers= questions[i].answers;
        console.log("answers" + answers);
        // answer results
        if (0 === answers) { 
            document.getElementById("result").innerHTML = "Correct!";
            setTimeout(function() {
            document.getElementById("result").innerHTML = "";
                },
                1000
            );
            score++;    
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("result").innerHTML = "Incorrect!";
            setTimeout(function() {
                document.getElementById("result").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questions.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

option2.addEventListener('click', function(event) {
    event.stopPropagation();
    answers = questions[i].answers;
    console.log(answers);
        if (1 === answers) { 
            document.getElementById("result").innerHTML = "Correct!";
            setTimeout(function() {
                document.getElementById("result").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("result").innerHTML = "Incorrect!";
            setTimeout(function() {
                document.getElementById("result").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questions.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

option3.addEventListener('click', function(event) {
    event.stopPropagation();
    answers = questions[i].answers;
    console.log(answers);
    if (2 === answers) { 
        document.getElementById("result").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("result").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("result").innerHTML = "Incorrect!";
        setTimeout(function() {
            document.getElementById("result").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questions.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

option4.addEventListener('click', function(event) {
    event.stopPropagation();
    answers= questions[i].answers.value;
    console.log(answers);
    if (3 === answers) { 
        document.getElementById("result").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("result").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("result").innerHTML = "Incorrect!";
        setTimeout(function() {
            document.getElementById("result").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questions.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

//end quiz function
function end_quiz() {
    document.getElementById("game_over").style.display= "block";
    document.getElementById("quizContainer").style.display="none";
    document.getElementById("countdownTimer").style.display= "none";
    document.getElementById("score_keeper").style.display= "none";
    document.getElementById("result").innerHTML="";
    document.getElementById("end_score").innerHTML= score;
}

//enter highscore
function submit_score() {
    high_scores.push(document.getElementById("initials").value + " " + score);
view_high_scores();
}

//view highscore
function view_high_scores(){  
    document.getElementById("quizContainer").style.display="none";
    document.getElementById("game_over").style.display= "none";
    document.getElementById("high_scores_page").style.display="block";
        
    output="";
    for(let k=0; k<high_scores.length; k++){
        output = output + "  " + high_scores[k];
    }
    document.getElementById("high_scores").innerHTML= output;                
resetQuiz();
}

// function to go back to main menu
function go_home(){	
    document.getElementById("high_scores_page").style.display= "none";
    document.getElementById("homeContainer").style.display= "block";
resetQuiz();
}
        
// clear highscore
function clearHighscore(){
    high_scores = [];
}

// restart quiz
function resetQuiz() {    
    time=75;
    time_remaining=true;
    time_start=false;
    i=0;
    score=0;
}
