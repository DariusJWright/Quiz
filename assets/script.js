var seconds = 75;

var correct = document.createElement("p");
    correct.innerHTML = "<em>Correct!</em>"
    correct.style.textAlign = "left";
    correct.style.marginLeft = "100px";
    correct.style.marginRight = "100px";
    correct.style.marginTop = "10px";
    correct.style.borderTop = "solid 2px black";
    correct.style.paddingTop = "5px";

var wrong = document.createElement("p");
    wrong.innerHTML = "<em>Wrong!</em>"
    wrong.style.textAlign = "left";
    wrong.style.marginLeft = "100px";
    wrong.style.marginRight = "100px";
    wrong.style.marginTop = "10px";
    wrong.style.borderTop = "solid 2px black";
    wrong.style.paddingTop = "5px";

var answers = ["Booleans", "Numbers", "Strings", "Alerts"];

var questions = ["Commonly used data types do not include:", "The condition in an if/else statement is enclosed with:", "Arrays in JavaScript can be used to store:"]



var timer = function() {
    
    var timeLeft = setInterval(function() {
        var countdown = document.getElementById("timer");
        countdown.textContent = "Time: " + seconds;
        seconds--;
        if (seconds === -1) {
            countdown.textcontent = "";
            clearInterval(timeLeft);
        }
    }, 1000);
    
}

var intro = function(){
    var question = document.getElementById("question");
    question.textContent = "Coding Quiz Challenge";
    
    var instructions = document.createElement("p");
    instructions.innerHTML = "Try to answer the following code-related questions within the time limit.<br>Keep in mind that incorrect answers will penalize your score/time<br>by ten seconds!";
    instructions.style.fontSize = "20px";
    instructions.style.marginTop = "20px";
    question.appendChild(instructions);

    var button = document.createElement("button");
    button.id = "start-button";
    button.textContent = "Start Quiz";
    question.appendChild(button);

    var start = document.querySelector("#start-button");
    
    start.addEventListener("click", timer);
    start.addEventListener("click", quiz1);  
}

var quiz1 = function() {
    var questionEl = document.getElementById("question");
    questionEl.className = "question";
    var answer = document.getElementById("button-container");

    for (var i = 0; i < questions.length; i++) {
        question = questions[i];
        questionEl.textContent = question;
    }

    for (var i = 0; i < answers.length; i++) {
        var choice = document.createElement("button");
        choice.className = "button";
        choice.id = "button" + [i];
        choice.textContent = [i + 1] + ". " + answers[i];
        answer.appendChild(choice);
        console.log(choice);
    }
    
    var correctAnswerEl = document.querySelector("#button-container");
    correctAnswerEl.addEventListener("click", console.log(choice));
    
    

    var select = function(event) {
        var correctAnswer = event.target.getAttribute("id");
        console.log(correctAnswer);
        if (correctAnswer.matches("button3")) {
            answer.appendChild(correct);
            console.log(3);
        }
        else {
            answer.appendChild(wrong);
        }
    }
}


intro();
