let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    const randomNumber = Math.random();
    let computerChoice;

    if (randomNumber >= 0 && randomNumber < 0.33) {
        computerChoice = "rock";
    } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
        computerChoice = "paper";
    } else 
        computerChoice = "scissors";
   
    return computerChoice;
};

function getHumanChoice() {
    const humanChoice = prompt("rock, paper or scissors?");
    return humanChoice;
}

function playRound (computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("TIE! Same choices!");
        computerScore +=1;
        humanScore +=1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper" ||
                humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection,humanSelection);