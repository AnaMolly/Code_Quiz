var timer = document.getElementById("countdown");
var score = document.getElementById("score");
var startButton = document.getElementById("startbutton");
var question = document.getElementById ("question");
var choice1 = document.getElementById("but1");
var choice2 = document.getElementById("but2");
var choice3 = document.getElementById("but3");
var choice4 = document.getElementById("but4");
var rightWrong = document.getElementById("rightwrong");
var answerCont = document.querySelector(".answercont")

var currentQuestion = 0;
var secondsLeft = 50;
var scoreCount = 0; 
var allQuestions = [
    {
        question: '  Inside which HTML element do we place the Javascript link?',
        answer1: '&lt;javascript&gt;',
        answer2: '&lt;js&gt;',
        answer3: '&lt;script&gt;',
        answer4: '&lt;link&gt;',
        correct: '&lt;script&gt;',
    },
    {
        question: '  How do you call a Javascript function?',
        answer1: 'myfunction()',
        answer2: 'myfunction{}',
        answer3: 'myfunction',
        answer4: 'myfunction[]',
        correct: 'myfunction()',
    },
    {
        question: '  What is the correct syntax for referring to an external Javascript file?',
        answer1: '&lt;script file = "xxxx.js&gt;',
        answer2: '&lt;script href = "xxxx.js&gt;',
        answer3: '&lt;script alt = "xxxx.js&gt;',
        answer4: '&lt;script src = "xxxx.js&gt;',
        correct: '&lt;script src = "xxxx.js&gt;',
    },
    {
        question: '  How do you get an element by class when using querySelector?',
        answer1: 'document.querySelector("class")',
        answer2: 'document.querySelector("#class")',
        answer3: 'document.querySelector(".class")',
        answer4: 'document.querySelector("/class")',
        correct: 'document.querySelector(".class")',
    },
    {
        question: '  How do you write an if statement?',
        answer1: 'if x=6',
        answer2: 'if (x=6)',
        answer3: 'if (x==6)',
        answer4: 'if x==6 then',
        correct: 'if (x==6)',
    },
    {
        question: '  How do you get an element by ID?',
        answer1: 'document.id("ID")',
        answer2: 'getElementbyId("ID")',
        answer3: 'document.getElementbyID',
        answer4: 'document.getElementbyID("ID")',
        correct: 'document.getElementbyID("ID")',
    },
    {
        question: ' How do you comment in a Javascript file?',
        answer1: '// I am commenting',
        answer2: '** I am commenting',
        answer3: '!** I am commenting',
        answer4: '?? I am commenting',
        correct: '// I am commenting',
    },
    {
        question: '  Which operator is used in assigning a variable?',
        answer1: ':',
        answer2: '=',
        answer3: '==',
        answer4: '-',
        correct: '=',
    },
    {
        question: '  Where can you place the Javascript link in the HTML file?',
        answer1: 'The &lt;header&gt; section',
        answer2: 'Only the &lt;body&gt; section',
        answer3: 'The &lt;head&gt; or &lt;body&gt; section',
        answer4: 'Only the &lt;head&gt; section',
        correct: 'The &lt;head&gt; or &lt;body&gt; section',
    },
    {
        question: '  Which built in method converts a string element to uppercase?',
        answer1: 'toUpper()',
        answer2: 'UpperCase()',
        answer3: 'change(toUpperCase)',
        answer4: 'toUpperCase()',
        correct: 'toUpperCase()',
    },
    {
        question: '  Which built-in method removes the last element of an array?',
        answer1: 'shift()',
        answer2: 'removeLast()',
        answer3: 'pop()',
        answer4: 'last()',
        correct: 'pop()',
    },
    {
        question: '  Which built-in method removes the first element of an array?',
        answer1: 'shift()',
        answer2: 'removeLast()',
        answer3: 'pop()',
        answer4: 'last()',
        correct: 'shift()',
    }
    
    
]


rightWrong.innerHTML = ""


function startGame() {

    setTime();
    nextQuestion();   

  
    function nextQuestion(){
        question.innerHTML = allQuestions[currentQuestion].question;
        choice1.innerHTML = allQuestions[currentQuestion].answer1;
        choice2.innerHTML = allQuestions[currentQuestion].answer2;
        choice3.innerHTML = allQuestions[currentQuestion].answer3;
        choice4.innerHTML = allQuestions[currentQuestion].answer4;
    }    
        

    answerCont.addEventListener ("click", function(event){
        var userResponse = event.target.innerHTML;
        
        if (userResponse == allQuestions[currentQuestion].correct){
            rightWrong.innerHTML = "Correct!";
            rightWrong.style.color = "green";
            rightWrong.style.fontSize = "30px";
            scoreCount += 50;

        } else {
            rightWrong.innerHTML = "Wrong!";
            rightWrong.style.color = "red";
            rightWrong.style.fontSize = "30px";
            secondsLeft -= 15;
        }
        
        score.textContent = scoreCount
        currentQuestion++;
        nextQuestion();
    });

    
    function setTime() {
        
        startButton.style.visibility='hidden';

        var timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = secondsLeft;

          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time is up!";
            timer.style.color = "red";
            startButton.style.visibility='visible';
          }

      
        }, 800);
        
    };

   // function endGame ();

    

}
   



startButton.addEventListener("click",startGame);
