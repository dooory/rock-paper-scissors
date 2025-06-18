const ANSWERS = ["rock", "paper", "scissors"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let randomIndex = getRandomInt(0, 2);
    return ANSWERS[randomIndex];
}

function getHumanChoice() {
    return prompt("Pick either, rock, paper, or scissors as your answer")
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(`You chose ${humanChoice}`);
    console.log(`The computer chose ${computerChoice}`);

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`${humanChoice} beats ${computerChoice}! You won`);

        return "human";
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`${humanChoice} beats ${computerChoice}! You won`);

        return "human";
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`${humanChoice} beats ${computerChoice}! You won`);

        return "human";
    }


    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`${humanChoice} beats ${computerChoice}! You won`);

        return "computer";
    }

    if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`${humanChoice} beats ${computerChoice}! You won`);

        return "computer";
    }

    if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`${humanChoice} beats ${computerChoice}! You won`);

        return "computer";
    }


    if (humanChoice === computerChoice) {
        console.log(`You both chose ${humanChoice}! You tie`)

        return "none"
    }
}

let gameInProgress = false;

function playGame(totalRounds) {
    gameInProgress = true;
    
    let computerScore = 0;
    let humanScore = 0;

    const resultsText = document.querySelector("#results-text");
    const humanScoreCounter = document.querySelector("#human-score");
    const computerScoreCounter = document.querySelector("#computer-score");

    for (let roundsPlayed = 0; roundsPlayed < totalRounds; roundsPlayed++) {
        if (roundsPlayed > 0) {
            console.log(`\nRound ${roundsPlayed + 1}`);
        } else {
            console.log(`Round ${roundsPlayed + 1}`);
        }

        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        let roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === "computer") {
            computerScore++;
            computerScoreCounter.textContent = `Computers score: ${computerScore}`
        } else if (roundResult === "human") {
            humanScore++;
            humanScoreCounter.textContent = `Your score: ${humanScore}`
        }

        console.log(`Your score ${humanScore}. Computers score ${computerScore}`);
    }

    console.log(`\nFinal score:\nYou: ${humanScore}\nComputer: ${computerScore}\n`);

    if (humanScore > computerScore) {
        resultsText.textContent = "You won!";
        console.log("You won!");
    } else if (humanScore < computerScore) {
        resultsText.textContent = "You lost!";
        console.log("You lost!");
    } else if (humanScore == computerScore) {
        resultsText.textContent = "You tied!";
        console.log("You tied!");
    }

    gameInProgress = false;
}

const playButton = document.querySelector("#playButton")

playButton.addEventListener("click", () => {
    if (!gameInProgress) {
        playGame(1);
    }
})
