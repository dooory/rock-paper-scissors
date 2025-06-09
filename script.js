// Creating a rock paper scissors program
//
// Create a constant variable for an array containing the strings, rock, paper, and scissors.
const answers = ["rock", "paper", "scissors"];
// Create a function to generate a random number between the parameters min and max
function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Using the generateRandomInt function, generate a number between 0-2 and store it in a variable named randomAnswerIndex
let randomAnswerIndex = generateRandomInt(0, 2);

let randomAnswer = answers[randomAnswerIndex];

// Ask the user which answer they pick and store it in a let variable.
let userAnswer = prompt("Pick either, rock, paper, or scissors");

// Using a for loop, repeatively ask the user to pick either, rock, paper, or scissors.

// Print the results to the user.
//
// If both answers are equal, repeat the last 3 steps until not true
//
// If user picked rock,
//      and the computer picked scissors the user wins.
//      If the computer picked paper the user loses.
// If user picked paper,
//      and the computer picked rock the user wins.
//      If the computer picked scissors the user loses.
// If user picked scissors,
//      and the computer picked paper the user wins.
//      If the computer picked rock the user loses
// 
// Ask the user if they want to play again
