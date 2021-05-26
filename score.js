var highscore = document.getElementById("highscore");
var userInitials = document.getElementById("initials");
var highscoreForm = document.getElementById("highscoreform")


var recentScore =  JSON.parse(localStorage.getItem("score"));
var highscores = []

function displayScore(){
    highscore.innerHTML = recentScore;
}

displayScore();

function init(){
    var lastInput = JSON.parse(localStorage.getItem("highscores"))
    if (lastInput !== null){
        highscores.push(lastInput)
    }
    
}


highscoreForm.addEventListener("submit", function(event){
    event.preventDefault();

    var formInput = {
    initials: userInitials.value,
    score: recentScore
    }
    
    highscores.push(formInput);


    localStorage.setItem("highscores", JSON.stringify(highscores));

    
});


init();
