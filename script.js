const ANSWERS = ["rock", "paper", "scissors"]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let randomIndex = getRandomInt(0, 2)
    return ANSWERS[randomIndex]
}

function getHumanChoice() {
    return prompt("Pick either, rock, paper, or scissors as your answer")
}

console.log(getHumanChoice())
