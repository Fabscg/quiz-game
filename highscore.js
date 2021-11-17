var scoreContainer = document.getElementById("highscore-container");
var goBackBtn = document.querySelector(".go-back-button");

var allScores = JSON.parse(localStorage.getItem("allScores"));

if (allScores === null) {
    var h1 = document.createElement("h1");
    h1.textContent = "No Highscores Yet."
    scoreContainer.appendChild(h1)
} else {
    
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].name + " " + allScores[i].score;
        scoreContainer.appendChild(createLi);
    }
}

goBackBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});