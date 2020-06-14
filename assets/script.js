var seconds = 75;
var questionEl = document.getElementById("question");
    questionEl.className = "question";
var start = document.querySelector("#start-button");
var intro = document.querySelector("#intro");
var startButtonDiv = document.querySelector("#start");
var buttonContainer = document.querySelector("#button-container");
var response = document.querySelector("#response");
    response.className = "response";

var answers1 = ["Booleans", "Numbers", "Strings", "Alerts"];
var answers2 = ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"];
var answers3 = ["Numbers & Strings", "Other arrays", "Booleans", "All of the above"];
var answers4 = ["Commas", "Quotes", "Curly brackets", "Parenthesis"];
var answers5 = ["JavaScript", "Terminal/Bash", "For loops", "console.log"];

var questions = ["Commonly used data types do not include:", "The condition in an if/else statement is enclosed with:", "Arrays in JavaScript can be used to store:", "String values must be enclosed within _________ when being assigned to variables", "A very modern tool used during development and debugging for printing content to the debugger is:"];



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
        console.log(choice);
    }
    buttonContainer.addEventListener("click", select1);
}    

var select1 = function(event) {
    var correctAnswer = event.target.getAttribute("id");
    console.log(correctAnswer);
    
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
        console.log(choice);
    }
    buttonContainer.addEventListener("click", select2);
}    

var select2 = function(event) {
    var correctAnswer = event.target.getAttribute("id");
    console.log(correctAnswer);
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
        console.log(choice);
    }
    buttonContainer.addEventListener("click", select3);
}    

var select3 = function(event) {
    var correctAnswer = event.target.getAttribute("id");
    console.log(correctAnswer);
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
        console.log(choice);
    }
    buttonContainer.addEventListener("click", select4);
}    

var select4 = function(event) {
    var correctAnswer = event.target.getAttribute("id");
    console.log(correctAnswer);
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
        console.log(choice);
    }
    buttonContainer.addEventListener("click", select5);
}    

var select5 = function(event) {
    var correctAnswer = event.target.getAttribute("id");
    console.log(correctAnswer);
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

var endTime = function() {
    if (seconds === 0) {
        endQuiz();
    }
}

var endQuiz = function() {
    questionEl.innerHTML = "All done!"
    intro.innerHTML = "Your final score is " + seconds + ".";
    start.innerHTML = "";
    buttonContainer.innerHTML = "<p>Enter initials:</p><input></input><button>submit</button>";


}

start.addEventListener("click", timer);
start.addEventListener("click", quiz1); 