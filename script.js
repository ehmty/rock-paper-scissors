function getComputerChoice () {
    const randomNumber = Math.floor((Math.random()*3))+1
    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else 
        computerChoice = "scissors";
   
    return computerChoice;
};

function getHumanChoice() {
    const humanChoice = prompt("rock, paper or scissors?");
    return humanChoice;
}

function playGame () {
    let computerScore = 0;
    let humanScore = 0;
    let computerSelection;
    let humanSelection;

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

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(computerSelection,humanSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(computerSelection,humanSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(computerSelection,humanSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(computerSelection,humanSelection);

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(computerSelection,humanSelection);

    if (humanScore > computerScore) {
        console.log("The winner is the human!");
    } else {
        console.log("The winner is the computer!");
    }
}


playGame();