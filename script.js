let getComputerChoice = () => {
    let compVal = Math.random();
    console.log(compVal);
    if (compVal <= 0.33) {
     return "rock";
    } else if (compVal >= 0.33 && compVal <= 0.66) {
     return "paper"
    } else {
     return "scissors"
    }
 };
 


let playerSelection = () => choice = prompt();



let play = (compChoice, playerChoice) => {

    if (compChoice == playerChoice) {
        return "Draw!"
    } else if (compChoice == "rock" && playerChoice == "scissors" ) {
        
        return "You Lose! Rock beats Scissors"
    } else if (compChoice == "paper" && playerChoice == "rock" ) {

        return "You Lose! Paper beats Rocks"
    } else if (compChoice == "scissors" && playerChoice == "paper" ) {

        return "You Lose! Scissors beats Paper"

    } else if (playerChoice == "rock" && compChoice == "scissors") {

        return "You Win! Rock beats Scissors"
    } else if (playerChoice == "paper" && compChoice == "rock") {

        return "You Win! Paper beats Rock"
    } else if (playerChoice == "scissors" && compChoice == "paper") {

        return "You Win! scissors beats paper"
    } else {
        return "something went wrong"
    }

}

for (let i = 0; i < 5; i++) {
    console.log(play(getComputerChoice(), playerSelection()));
}

