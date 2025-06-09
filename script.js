const ANSWERS = ["rock", "paper", "scissors"]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let randomIndex = getRandomInt(0, 2)
    return ANSWERS[randomIndex]
}

console.log(getComputerChoice())
