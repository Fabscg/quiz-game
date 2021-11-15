


var allQuestions = [
        {
            question: '<p>Coffee is a popular drink enjoyed by people around the world</p>',
            options: ['The div is missing an attribute text',
            'The text content should be wrapped in a p tag',
             'Divs can not contain text as inmediate descentent',
             'Nothing is worng'],
            correct: 'Nothing is wrong.'
        },
        {
            question: 'What is JavaScrip?',
            options: ['Company','Brand','Programming language','None of the above'],
            correct: 'Programing Language'
        },
        {
            question: 'What does CSS stands for?',
            options: ['common Style sheet','Colorful Style Sheet','Computer Style Sheet','Cascading Style Sheet'],
            correct: 'Cascading Stye Sheet'
        },
        {
            question: 'Arrays in JavaScript can be use to store _____',
            options: ['Numbers and strings','Other arrays','Booleans','All of the above'],
            correct:'All of the above.'
        },
   
    {
        question: "String values can be enclosed within ____ when being assign to variables.",
        options: ["Cmmas", "Curly Brackets", "Quotes", "Paranthesis"],
        correct: "Quotes"
    },
]


// SET UP GLOBAL VARIABLES

var quizContainer = document.querySelector('.quiz-container')
var startBtn = document.querySelector('.start-btn')
var mainContainer = document.querySelector('.main-container')
var question = document.createElement('h2')
var questionIndex = 0;
var optionContainer = document.querySelector('.options-container')
var timeEl = document.querySelector(".time")
var timer = document.querySelector(".setup-timer");
var remainingTime = 75;
var holdTime = 0;
var substratedTime = 10;
var createUl = document.querySelector("ul");



startBtn.addEventListener('click', function(){
    if( holdTime === 0){
    holdTime = setInterval(function(){
        remainingTime--;
        timeEl.textContent = "Time: " + remainingTime;
        if(remainingTime <= 0){
            clearInterval(holdTime);
            allDone();
            timer.textContent = "Time is Over!";
        }

    }, 1000); 
};
render (questionIndex);
});

function render (questionIndex) {
    quizContainer.innerHTML = "";
    createUl.innerHTML = "";
    for(var i = 0; i < allQuestions.length; i++){
        var userQuestion = allQuestions[questionIndex].question;
        var userOptions = allQuestions[questionIndex].options;
        quizContainer.textContent = userQuestion;
    }

    userOptions.forEach(function(newItem){
        var listEl = document.createElement("li");
        listEl.textContent = newItem;
        quizContainer.appendChild(createUl);
        createUl.appendChild(listEl);
        listEl.addEventListener("click", (userOptions));
    })
}

function options(event){
    questionIndex++;
        if(questionIndex >= allQuestions.length){
            gameIsOver();
            createH3.textContent = "The Quiz is Over! Your score is " + score + 
        "/" + allQuestions.length}
   
    var element = event.target;

    if(element.matches("li")){
        var createH3 = document.createElement("h3");
        createH3.setAttribute("id", "createH3");

        if (element.textContent == allQuestions[questionIndex].options){
            score++;
            createH3.textContent ="Correct!";
        } else {
            remainingTime = remainingTime - substratedTime;
            createH3.textContent = "Wrong!";
        } 
        
    } 
           
      
};




function allDone(){
    quizContainer.innerHTML = "";
    timer.innerHTML = "";

    var createH1 = document.querySelector("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Quiz it's over!";
    quizContainer.appendChild(createH1);

    var pContainer = document.querySelector(".pContainer-question");
    pContainer.setAttribute("id", "pContainer");

    allQuestions.appendChild(pContainer);

    if(remainingTime >= 0) {
        var timeLeft = remainingTime;
        var createH2 = document.createElement("h2");
        clearInterval(holdTime);
        createH3.textContent = "Your score is " + timeLeft;

        allQuestions.appendChild(createH2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent("Enter Initials:");
    allQuestions.appendChild(createLabel);

    var createInput = document.querySelector("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    allQuestions.appendChild(createInput);

    var createSubmit = document.querySelector("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    createSubmit.addEventListener("click", function(){
        var userName = createInput.value;

        if (userName === null){
            console.log("No value entered!");
        } else {
            var finalScore = {
                userName:initials,
                score: timeLeft
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if(allScores === null){
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore =JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);

            window.location.replace("/highscore.html");
        }
    });
}


