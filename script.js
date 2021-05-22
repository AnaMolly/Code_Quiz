var timeEl = document.getElementById("countdown");
var startButton = document. getElementById("startbutton");



function startGame() {
    
    setTime();

    function setTime() {
        var secondsLeft = 20;
        startButton.style.visibility='hidden';

        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time is up!";
            timeEl.style.color = "red";
            startButton.style.visibility='visible';
            
          }
      
        }, 500);
        
    };
    
    
}



startButton.addEventListener("click",startGame);
