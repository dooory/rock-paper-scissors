const announcerText = document.querySelector("#announcerText");

const userWeaponElement = document.querySelector("#userWeapon");
const userScoreElement = document.querySelector("#userScore");

const computerWeaponElement = document.querySelector("#computerWeapon");
const computerScoreElement = document.querySelector("#computerScore");

// For looping through and adding click event listeners
const weaponButtons = document.querySelectorAll(".weaponButton");

const WEAPONS_ARRAY = ["Rock", "Paper", "Scissors"];

let userScore = 0; 
let computerScore = 0;

// generates a random number inclusively, so it can be between >= min and <= max
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// decides the computers weapon of choice
function getRandomWeapon() {
    return WEAPONS_ARRAY[getRandomNumber(0, WEAPONS_ARRAY.length - 1)];
}

function getRoundWinner(userWeapon, computerWeapon) {
    // The if statements dont check if it was a tie or not
    // So this variable will be sent as "No one" if it is a tie 
    let winner = "No one";

    // Winning order Paper > Rock > Scissors > Paper

    if (userWeapon === "Paper" && computerWeapon === "Rock") {
        winner = "User";
    } else if (userWeapon === "Paper" && computerWeapon === "Scissors") {
        winner = "Computer";
    }

    if (userWeapon === "Rock" && computerWeapon === "Scissors") {
        winner = "User";
    } else if (userWeapon === "Rock" && computerWeapon === "Paper") {
        winner = "Computer";
    }

    if (userWeapon === "Scissors" && computerWeapon === "Paper") {
        winner = "User";
    } else if (userWeapon === "Scissors" && computerWeapon === "Rock") {
        winner = "Computer";
    }

    return winner;
}

function playRound(userWeapon) {
    const computerWeapon = getRandomWeapon();
    const roundWinner = getRoundWinner(userWeapon, computerWeapon); 
    
    userWeaponElement.textContent = `You chose ${userWeapon}`
    computerWeaponElement.textContent = `The Computer chose ${computerWeapon}`
    announcerText.textContent = `${roundWinner === "User" ? "You" : roundWinner} won that round!`

    if (roundWinner === "User") {
        userScore++;
        userScoreElement.textContent = `Your score: ${userScore}`;
    } else if (roundWinner === "Computer") {
        computerScore++;
        computerScoreElement.textContent = `Computer score: ${computerScore}`;
    }

    return roundWinner
}

function clearWeaponElements() {
    userWeaponElement.textContent = "";
    computerWeaponElement.textContent = "";
}

// looping through each weapon's button
weaponButtons.forEach(button => {
   // sending through the name of the buttons weapon
   button.addEventListener("click", element => {
        const buttonWeaponValue = element.target.textContent;

        if (userScore < 4 && computerScore < 4) {
            playRound(buttonWeaponValue);
        } else if (!(userScore === 5) && !(computerScore === 5)) {
            playRound(buttonWeaponValue);

            if (userScore >= 5) {
                clearWeaponElements();
                
                announcerText.textContent = "You win the game!";
            }

            if (computerScore >= 5) {
                clearWeaponElements();
                
                announcerText.textContent = "You lost the game!";
            }
        }
   }) 
});