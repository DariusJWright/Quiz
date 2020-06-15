var seconds = 75;
var questionEl = document.getElementById("question");
    questionEl.className = "question";
var start = document.querySelector("#start-button");
var intro = document.querySelector("#intro");
var startButtonDiv = document.querySelector("#start");
var buttonContainer = document.querySelector("#button-container");
var response = document.querySelector("#response");
    response.className = "response";
var score = 0;

var answers1 = ["Booleans", "Numbers", "Strings", "Alerts"];
var answers2 = ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"];
var answers3 = ["Numbers & Strings", "Other arrays", "Booleans", "All of the above"];
var answers4 = ["Commas", "Quotes", "Curly brackets", "Parenthesis"];
var answers5 = ["JavaScript", "Terminal/Bash", "For loops", "console.log"];

var questions = ["Commonly used data types do not include:", "The condition in an if/else statement is enclosed with:", "Arrays in JavaScript can be used to store:", "String values must be enclosed within _________ when being assigned to variables", "A very modern tool used during development and debugging for printing content to the debugger is:"];


var countdown = document.getElementById("timer");
var timer = function() {
    var timeLeft = setInterval(function() {
        seconds--;
        
        countdown.textContent = "Time: " + seconds;
        if (seconds <= 0) {
            countdown.textcontent = "";
            clearInterval(timeLeft);
            endQuiz();
        }
    }, 1000);
    score = seconds;
    quiz1();
}

var quiz1 = function() {
    intro.textContent = "";
    startButtonDiv.innerHTML = "";
    questionEl.textContent = questions[0];

    for (var i = 0; i < answers1.length; i++) {
        var choice = document.createElement("button");
        choice.className = "button";
        choice.id = "button" + [i];
        choice.textContent = [i + 1] + ". " + answers1[i];
        buttonContainer.appendChild(choice);
    }
    buttonContainer.addEventListener("click", select1);
}    

var select1 = function(event) {
    var correctAnswer = event.target.getAttribute("id");
    
    if (correctAnswer === "button3") {
        quiz2();
        response.innerHTML = "<em>Correct!</em>";
    }
    else {
        seconds -= 10;
        quiz2();
        response.innerHTML = "<em>Wrong!</em>";
    }
}

var quiz2 = function() {
    buttonContainer.removeEventListener("click", select1);
    intro.textContent = "";
    startButtonDiv.innerHTML = "";
    questionEl.textContent = questions[1];
    buttonContainer.innerHTML = "";
    
    for (var i = 0; i < answers2.length; i++) {
        var choice = document.createElement("button");
        choice.className = "button";
        choice.id = "button" + [i];
        choice.textContent = [i + 1] + ". " + answers2[i];
        buttonContainer.appendChild(choice);
    }
    buttonContainer.addEventListener("click", select2);
}    

var select2 = function(event) {
    var correctAnswer = event.target.getAttribute("id");
    if (correctAnswer === "button2") {
        quiz3();
        response.innerHTML = "<em>Correct!</em>";
    }
    else {
        seconds = seconds - 10;
        quiz3();
        response.innerHTML = "<em>Wrong!</em>";
    }
}

var quiz3 = function() {
    buttonContainer.removeEventListener("click", select2);
    intro.textContent = "";
    startButtonDiv.innerHTML = "";
    questionEl.textContent = questions[2];
    buttonContainer.innerHTML = "";
    
    for (var i = 0; i < answers3.length; i++) {
        var choice = document.createElement("button");
        choice.className = "button";
        choice.id = "button" + [i];
        choice.textContent = [i + 1] + ". " + answers3[i];
        buttonContainer.appendChild(choice);
    }
    buttonContainer.addEventListener("click", select3);
}    

var select3 = function(event) {
    var correctAnswer = event.target.getAttribute("id");
    if (correctAnswer === "button3") {
        response.innerHTML = "<em>Correct!</em>";
        quiz4();
    }
    else {
        seconds -= 10;
        response.innerHTML = "<em>Wrong!</em>";
        quiz4();
    }
}

var quiz4 = function() {
    buttonContainer.removeEventListener("click", select3);
    intro.textContent = "";
    startButtonDiv.innerHTML = "";
    questionEl.textContent = questions[3];
    buttonContainer.innerHTML = "";
    
    for (var i = 0; i < answers4.length; i++) {
        var choice = document.createElement("button");
        choice.className = "button";
        choice.id = "button" + [i];
        choice.textContent = [i + 1] + ". " + answers4[i];
        buttonContainer.appendChild(choice);
    }
    buttonContainer.addEventListener("click", select4);
}    

var select4 = function(event) {
    var correctAnswer = event.target.getAttribute("id");
    if (correctAnswer === "button1") {
        response.innerHTML = "<em>Correct!</em>";
        quiz5();
    }
    else {
        seconds -= 10;
        response.innerHTML = "<em>Wrong!</em>";
        quiz5();
    }
}

var quiz5 = function() {
    buttonContainer.removeEventListener("click", select4);
    intro.textContent = "";
    startButtonDiv.innerHTML = "";
    questionEl.textContent = questions[4];
    buttonContainer.innerHTML = "";
    
    for (var i = 0; i < answers5.length; i++) {
        var choice = document.createElement("button");
        choice.className = "button";
        choice.id = "button" + [i];
        choice.textContent = [i + 1] + ". " + answers5[i];
        buttonContainer.appendChild(choice);
    }
    buttonContainer.addEventListener("click", select5);
}    

var select5 = function(event) {
    var correctAnswer = event.target.getAttribute("id");
    if (correctAnswer === "button3") {
        response.innerHTML = "<em>Correct!</em>";
        endQuiz();
        
    }
    else {
        seconds -= 10;
        response.innerHTML = "<em>Wrong!</em>";
        endQuiz();
    }
}

var endQuiz = function() {
    countdown.textContent = "Timer: 0";
    questionEl.textContent = "All done!"
    intro.textContent = "Your final score is " + seconds + ".";
    start.innerHTML = "";
    document.getElementById("button-container").remove();
    response.innerHTML = "<p>Enter initials:</p>";
    var input = document.createElement("input");
    input.className = "input";
    var submit = document.createElement("button");
    submit.className = "submit";
    submit.textContent = "Submit";
    response.appendChild(input);
    response.appendChild(submit);
    
    
    submit.addEventListener("click", hs);
}


var hs = function () {
    var initialInput = document.querySelector("input[class-name='input']").value;
    initialInput = JSON.stringify(initialInput);
    localStorage.setItem(initialInput, seconds);
}


start.addEventListener("click", timer);
