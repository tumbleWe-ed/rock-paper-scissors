let getComputerChoice = () => {
    let compVal = Math.random();
    console.log(compVal);
    if (compVal <= 0.33) {
     return "Rock";
    } else if (compVal >= 0.33 && compVal <= 0.66) {
     return "Paper"
    } else {
     return "Scissors"
    }
 };
 

 console.log(getComputerChoice());