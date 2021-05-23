var timer = document.getElementById("countdown");
var startButton = document.getElementById("startbutton");
var question = document.getElementById ("question");
var answer = document.getElementsByClassName("answer");

var correctAnswer = true;
var wrongAnswer = false;
var questionsLeft = [];

var allQuestions = [
    {
        question: 'Inside which HTML element do we place the Javascript link?',
        answer1: '<javascript>',
        answer2: '<js>',
        answer3: '<script>',
        answer4: '<link>',
        answer: 3,
    },
    {
        question: 'How do you call a Javascript function?',
        answer1: 'myfunction()',
        answer2: 'myfunction{}',
        answer3: 'myfunction',
        answer4: 'myfunction[]',
        answer: 1,
    },
    {
        question: 'What is the correct syntax for referring to an external Javascript file?',
        answer1: '<script file = "xxxx.js>',
        answer2: '<script href = "xxxx.js>',
        answer3: '<script alt = "xxxx.js>',
        answer4: '<script src = "xxxx.js>',
        answer: 4,
    },
    {
        question: 'How do you write a for loop?',
        answer1: 'for (i=0,i<length,i++)',
        answer2: 'for i=0,i<length, i++',
        answer3: 'for i=0;i<length; i++',
        answer4: 'for (i=0;i<length; i++)',
        answer: 4,
    },
    {
        question: 'How do you write an if statement?',
        answer1: 'if x=6',
        answer2: 'if (x=6)',
        answer3: 'if (x==6)',
        answer4: 'if x==6 then',
        answer: 3,
    },
    {
        question: 'How do you get an element by ID?',
        answer1: 'document.id("ID")',
        answer2: 'getElementbyId("ID")',
        answer3: 'document.getElementbyID',
        answer4: 'document.getElementbyID("ID")',
        answer: 4,
    },
    {
        question: 'How do you comment in a Javascript file?',
        answer1: '// I am commenting',
        answer2: '** I am commenting',
        answer3: '!** I am commenting',
        answer4: '<!-- I am commenting',
        answer:1,
    },
    {
        question: 'How do you comment in a Javascript file?',
        answer1: '// I am commenting',
        answer2: '** I am commenting',
        answer3: '!** I am commenting',
        answer4: '<!-- I am commenting',
        answer:1,
    },
    {
        question: 'Which operator is used in assigning a variable?',
        answer1: ':',
        answer2: '=',
        answer3: '==',
        answer4: '-',
        answer:2,
    },
    {
        question: 'Where can you place the Javascript link in the HTML file?',
        answer1: 'The <header> section',
        answer2: 'Only the <body section',
        answer3: 'The <head> or <body> section',
        answer4: 'Only the <head> section',
        answer:3,
    },
    {
        question: 'Which built in method converts a string element to uppercase?',
        answer1: 'toUpper()',
        answer2: 'UpperCase()',
        answer3: 'change(toUpperCase)',
        answer4: 'toUpperCase()',
        answer:4,
    },
    {
        question: 'Which built in method removes the last element of an array?',
        answer1: 'shift()',
        answer2: 'removeLast()',
        answer3: 'pop()',
        answer4: 'last()',
        answer:3,
    },
    
    
]


function startGame() {
    
    setTime();

    function setTime() {
        var secondsLeft = 20;
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
      
        }, 500);
        
    };
    
    
}



startButton.addEventListener("click",startGame);
