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

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log(`${computerChoice} beats ${humanChoice}! You lost`);

            return "computer";
        } else if (computerChoice === "scissors") {
            console.log(`${humanChoice} beats ${computerChoice}! You won`);

            return "human";
        } else if (computerChoice === "rock") {
            console.log(`Both picked ${humanChoice}! You tied`);

            return "none"
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log(`${computerChoice} beats ${humanChoice}! You lost`);

            return "computer";
        } else if (computerChoice === "rock") {
            console.log(`${humanChoice} beats ${computerChoice}! You won`);

            return "human";
        } else if (computerChoice === "paper") {
            console.log(`Both picked ${humanChoice}! You tied`);

            return "none"
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log(`${computerChoice} beats ${humanChoice}! You lost`);

            return "computer";
        } else if (computerChoice === "paper") {
            console.log(`${humanChoice} beats ${computerChoice}! You won`);

            return "human";
        } else if (computerChoice === "scissors") {
            console.log(`Both picked ${humanChoice}! You tied`);

            return "none"
        }
    }
}

function playGame(totalRounds) {
    let computerScore = 0;
    let humanScore = 0;

    for (let roundsPlayed = 0; roundsPlayed < totalRounds; roundsPlayed++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        let roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === "computer") {
            computerScore++;
        } else if (roundResult === "human") {
            humanScore++;
        }

        console.log(`Your score ${humanScore}. Computers score ${computerScore}`)
    }
}

playGame(5);
