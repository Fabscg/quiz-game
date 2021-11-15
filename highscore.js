var reset = document.querySelector(".reset");
var scoreContainer = document.getElementById(".highscore-container");
var goBackBtn = document.querySelector(".go-back-button");

reset.addEventListener("click", function(){
    localStorage.reset();
    location.reload();
});
var allScores = localStorage.getItem("allScores");
allScores=JSON.parse(allScores);

if(allScores !== null) {

    for(var i = 0; i < allScores.length; i++){
        var createLi = document.querySelector("li");
        createLi.textContent = allScores[i].userName + " " + allScores[i].score;
        highscore.appendChild(createLi);
    }

}

goBackBtn.addEventListener("click", function(){
    window.location.replace("./index.html");
});