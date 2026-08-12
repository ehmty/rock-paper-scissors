function getComputerChoice () {
    const randomNumber = Math.random();
    let randomChoice;

    if (randomNumber >= 0 && randomNumber < 0.33) {
        randomChoice = "rock";
    } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
        randomChoice = "paper";
    } else 
        randomChoice = "scissors";
   
    return randomChoice;
};

console.log(getComputerChoice());