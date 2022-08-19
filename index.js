let homeScore = 0
let awayScore = 0

let homeEl = document.getElementById("home-score")
let awayEl = document.getElementById("away-score")

function homePlus1(){
    homeScore += 1
    homeEl.textContent = homeScore;
}

function homePlus2(){
    homeScore += 2
    homeEl.textContent = homeScore;
}

function homePlus3(){
    homeScore += 3
    homeEl.textContent = homeScore;
}

function awayPlus1(){
    awayScore += 1
    awayEl.textContent = awayScore;
}

function awayPlus2(){
    awayScore += 2
    awayEl.textContent = awayScore;
}

function awayPlus3(){
    awayScore += 3
    awayEl.textContent = awayScore;
}