var currentQuestion= 0;
var totalScore= 0;
var cQuestion = document.getElementById("currentQuestion");
var totalQuestions = document.getElementById("totalQuestions");
var splashScreen = document.getElementById("start");
var quizScreen = document.getElementById("quiz-screen");
var a = 0;
var resultScreen = document.getElementById("resultScreen");
var timeLeft = document.getElementById("timeLeft");
var score = document.getElementById("score");

var question = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var btn = document.getElementsByClassName("btn");
var next = document.getElementById("next");

var quizQuestions = [
    {
        question:" ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choice1:"<SCRIPT>",
        choice2:"<BODY>",
        choice3:"<HEAD>",
        choice4:"<TITLE>",
        answer:"<SCRIPT>",
    },
        {
         question:" ______method evaluates a string of JavaScript code in the context of the specified object.",
         choice1:"Eval",
         choice2:"ParseInt",
         choice3:"ParseFloat",
         choice4:"Efloat",
         answer:"Eval",
        },
        {
         question:" Using _______ statement is how you test for a specific condition.",
         choice1:"Select",
         choice2:"If",
         choice3:"Switch",
         choice4:"For",
         answer:"If",
        },
        {
         question:" The _______ method of an Array object adds and/or removes elements from an array.",
         choice1:"Reverse",
         choice2:"Shift" ,
         choice3:"Slice",
         choice4:"Splice",
         answer:"Splice",  
        },
        {
         question:"JavaScript is interpreted by _________",
         choice1:"Client",
         choice2:"Server",
         choice3:"Object",
         choice4:"None of the above",
         answer:"Client", 
        }


];

function nextQuestion(no){
    Inter(300);
    cQuestion.textContent = " " + (no+1);
    totalQuestions.textContent = " " + quizQuestions.length;
    question.textContent = quizQuestions[no].question;
    opt1.textContent= quizQuestions[no].choice1;
    opt2.textContent= quizQuestions[no].choice2;
    opt3.textContent= quizQuestions[no].choice3;
    opt4.textContent= quizQuestions[no].choice4;
}

var z = setInterval (function(){
    if (a == 1) {
        clearInterval(z);
        splashScreen.style.display="none";
        quizScreen.style.display="block";
        nextQuestion(currentQuestion);
    }
    a++;
},2000);
for (var i = 0; i<btn.length; i++) {
    btn[i].onclick = function() {
        if(this.textContent == quizQuestions[currentQuestion].answer){
        totalScore++;
        if(currentQuestion < 4) { 
            clearInterval(bar);
            currentQuestion++;
            nextQuestion(currentQuestion);

        }
        else {
            endScreen();
        }
    }  
       else {
         if (currentQuestion < 4) {
            currentQuestion++;
            clearInterval(bar);
            nextQuestion(currentQuestion);

        }
        else {
            endScreen();
          }
       } 
   } 
}   

var bar;
function endScreen() {
    quizScreen.style.display="none";
    resultScreen.style.display="block";
    score.textContent=totalScore;
}   

function Inter(set) {
    var statusTime=set;
    timeLeft.style.width = statusTime + "px";
    bar = setInterval (function() {
        if (statusTime == 0) {
            clearInterval (bar);
            if (currentQuestion < 4) {
                currentQuestion++;
                nextQuestion(currentQuestion);
            }
            else {
                endScreen();
            }
        }
        timeLeft.style.width = statusTime + "px";
        statusTime = statusTime - 30;
    }, 1000);
}
next.onclick = function() {
    if (currentQuestion < 4) {
        currentQuestion++;
        nextQuestion(currentQuestion);
    }
    else {
        endScreen();
    }
}







