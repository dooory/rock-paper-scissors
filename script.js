const announcerText = document.querySelector("#announceText");
const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");

// For looping through and adding click event listeners
const weaponButtons = document.querySelectorAll(".weaponButton");

const weaponsArray = ["Rock", "Paper", "Scissors"];

// generates a random number inclusively, so it can be >= min and <= max
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// decides the computers weapon of choice
function getRandomWeapon() {
    return weaponsArray[getRandomNumber(0, weaponsArray.length - 1)];
}

function playRound(userWeapon) {
    const computerWeapon = getRandomWeapon();

    console.log(userWeapon, computerWeapon);
}

weaponButtons.forEach(button => {
   // sending through the name of the buttons weapon
   button.addEventListener("click", element => {
        playRound(element.target.textContent);
   }) 
});