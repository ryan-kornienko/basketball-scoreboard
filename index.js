let homeScore = 0
let awayScore = 0

let homeEl = document.getElementById("home-score")
let awayEl = document.getElementById("away-score")
let homeWinning = document.getElementById("home-winning")
let awayWinning = document.getElementById("away-winning")

updateScoreDot()

function homePlus1(){
    homeScore += 1
    homeEl.textContent = homeScore;
    updateScoreDot()
}

function homePlus2(){
    homeScore += 2
    homeEl.textContent = homeScore;
    updateScoreDot()
}

function homePlus3(){
    homeScore += 3
    homeEl.textContent = homeScore;
    updateScoreDot()
}

function awayPlus1(){
    awayScore += 1
    awayEl.textContent = awayScore;
    updateScoreDot()
}

function awayPlus2(){
    awayScore += 2
    awayEl.textContent = awayScore;
    updateScoreDot()
}

function awayPlus3(){
    awayScore += 3
    awayEl.textContent = awayScore;
    updateScoreDot()
}

function updateScoreDot(){
    if (homeScore > awayScore) {
        homeWinning.hidden = false
        awayWinning.hidden = true
    }
    else if (awayScore > homeScore){
        homeWinning.hidden = true
        awayWinning.hidden = false
    }
    else {
        homeWinning.hidden = true
        awayWinning.hidden = true
    }
}

function resetGame(){
    homeScore = 0;
    awayScore = 0;
    homeEl.textContent = homeScore;
    awayEl.textContent = awayScore;
    updateScoreDot()
}