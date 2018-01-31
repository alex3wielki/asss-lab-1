var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log("User: " + userChoice);
// computerChoice = "rock"; // Debugging purposes
console.log("Computer: " + computerChoice);
console.log(compare(userChoice, computerChoice));

function compare(userChoice, compChoice) {
    if (userChoice == compChoice) {
        return "The result is a tie!";
    } else if (userChoice === "rock") {
        if (compChoice === "paper") {
            return "The computer won";
        } else {
            // if (compChoice === "paper") {
            return "The user won"
        }
    } else if (userChoice === "paper") {
        if (compChoice === "scissors") {
            return "The computer won";
        } else {
            // if (compChoice === "paper") {
            return "The user won"
        }
    } else if (userChoice === "scissors") {
        if (compChoice === "rock") {
            return "The computer won";
        } else {
            // if (compChoice === "paper") {
            return "The user won"
        }
    }
}