var seconds = 60;

function timer() {
    setInterval(function() {
        var countdownEl = document.getElementById("timer");
        countdownEl.textContent = seconds;
        seconds--;
    }, 1000);
    
}



timer();
