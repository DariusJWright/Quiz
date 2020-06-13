var seconds = 75;
var correct = document.createElement("p");
    correct.textContent = "Correct!"
    correct.style.textEmphasis = true;

var wrong = document.createElement("p");
    wrong.textContent = "Wrong!"
    wrong.style.textEmphasis = true;

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
    start.addEventListener("click", question1El);
    
}

var question1El = function() {
    var question = document.getElementById("question");
        question.textContent = "Commonly used data types DO NOT include:";
    var buttonContainerEL = document.getElementById("button-container");

    var button1 = document.createElement("button");
        button1.className = "button";
        button1.textContent = "1. booleans";
        buttonContainerEL.appendChild(button1);

    var button2 = document.createElement("button");
        button2.className = "button";
        button2.textContent = "2. numbers";
        buttonContainerEL.appendChild(button2);

    var button3 = document.createElement("button");
        button3.className = "button";
        button3.textContent = "3. strings";
        buttonContainerEL.appendChild(button3);

    var button4 = document.createElement("button");
        button4.className = "button";
        button4.textContent = "4. alerts";
        buttonContainerEL.appendChild(button4);

    if (button4) {
        question2EL();
        buttonContainerEL.appendChild(correct);
    }

    else {
        question2EL();
        buttonContainerEL.appendChild(wrong);
    }    
}

var question2El = function() {
    var question = document.getElementById("question");
        question.textContent = "Commonly used data types DO NOT include:";
    var buttonContainerEL = document.getElementById("button-container");

    var button1 = document.createElement("button");
        button1.className = "button";
        button1.textContent = "1. booleans";
        buttonContainerEL.appendChild(button1);

    var button2 = document.createElement("button");
        button2.className = "button";
        button2.textContent = "2. numbers";
        buttonContainerEL.appendChild(button2);

    var button3 = document.createElement("button");
        button3.className = "button";
        button3.textContent = "3. strings";
        buttonContainerEL.appendChild(button3);

    var button4 = document.createElement("button");
        button4.className = "button";
        button4.textContent = "4. alerts";
        buttonContainerEL.appendChild(button4);

    if (button4) {
        question2EL();
        buttonContainerEL.appendChild(correct);
    }

    else {
        question2EL();
        buttonContainerEL.appendChild(wrong);
    }    
}


intro();
