var allQuestions = [
    {
        question: '<p>Coffee is a popular drink enjoyed by people around the world</p>',
        options: ['The div is missing an attribute text',
            'The text content should be wrapped in a p tag',
            'Divs can not contain text as inmediate descentent',
            'Nothing is wrong'],
        correct: 'Nothing is wrong'
    },
    {
        question: 'What is JavaScrip?',
        options: ['Company', 'Brand', 'Programming Language', 'None of the above'],
        correct: 'Programming Language'
    },
    {
        question: 'What does CSS stands for?',
        options: ['common Style sheet', 'Colorful Style Sheet', 'Computer Style Sheet', 'Cascading Style Sheet'],
        correct: 'Cascading Style Sheet'
    },
    {
        question: 'Arrays in JavaScript can be use to store _____',
        options: ['Numbers and strings', 'Other arrays', 'Booleans', 'All of the above'],
        correct: 'All of the above'
    },

    {
        question: "String values can be enclosed within ____ when being assign to variables.",
        options: ["Cmmas", "Curly Brackets", "Quotes", "Paranthesis"],
        correct: "Quotes"
    },
];


// SET UP GLOBAL VARIABLES

var quizContainer = document.querySelector('.quiz-container')
var startBtn = document.querySelector('.start-btn')
var mainContainer = document.querySelector('.main-container')
var question = document.createElement('h2')
var questionIndex = 0;
var optionContainer = document.querySelector('.options-container')
var timeEl = document.querySelector(".time")
var remainingTime = 75;
var holdTime = 0;
var substractedTime = 10;
var createUl = document.querySelector("ul");
var score = 0;



startBtn.addEventListener('click', function () {
    if (holdTime === 0) {
        holdTime = setInterval(function () {
            remainingTime--;
            timeEl.textContent = "Time: " + remainingTime;
            if (remainingTime <= 0) {
                clearInterval(holdTime);
                allDone();
                startBtn.textContent = "all Done!";
            }

        }, 1000);
    };
    render(questionIndex);
});

function render(questionIndex) {

    if (questionIndex > allQuestions.length - 1 || remainingTime === 0) {
        console.log('quiz is over')
        allDone()
        return
    }
    console.log(remainingTime);
    quizContainer.innerHTML = "";
    createUl.innerHTML = "";
    for (var i = 0; i < allQuestions.length; i++) {
        var userQuestion = allQuestions[questionIndex].question;
        var userOptions = allQuestions[questionIndex].options;
        quizContainer.textContent = userQuestion;
    }

    userOptions.forEach(function (newItem) {
        var listEl = document.createElement("li");
        listEl.textContent = newItem;
        quizContainer.appendChild(createUl);
        createUl.appendChild(listEl);
        listEl.addEventListener("click", options);
    })
}

function options(event) {

    var element = event.target;
    var createH3 = document.createElement("h3");
    createH3.setAttribute("id", "createH3");

    if (element.textContent === allQuestions[questionIndex].correct) {
        score += 20;
        createH3.textContent = "Correct!" + allQuestions[questionIndex].correct;
    } else {
        remainingTime = remainingTime - substractedTime;
        createH3.textContent = "Wrong!" + allQuestions[questionIndex].correct;
    }


    questionIndex++;
    render(questionIndex);
    quizContainer.appendChild(createH3);


};

function allDone() {
    quizContainer.innerHTML = "";
    startBtn.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!";
    quizContainer.appendChild(createH1);

    var pContainer = document.createElement("p");
    pContainer.setAttribute("id", "p");
    quizContainer.appendChild(pContainer);

    // if (remainingTime >= 0) {
    //     var timeLeft = remainingTime;
    //     var createH2 = document.createElement("h2");
    //     clearInterval(holdTime);
    //     createH2.textContent = "Your score is " + timeLeft;

    //     allQuestions.appendChild(createH2);
    // }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter Initials:";
    quizContainer.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    quizContainer.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    quizContainer.appendChild(createSubmit);

    createSubmit.addEventListener("click", function () {
        var userName = createInput.value;

        if (userName === null) {
            console.log("No value entered!");
        } else {
            var finalScore = {
                name: userName,
                score: score
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);

            window.location.href = "highscore.html";
        }
    });
}


