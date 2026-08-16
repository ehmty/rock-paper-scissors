let computerScore = 0;
let humanScore = 0;
let round = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[random];

    return computerChoice;
}

// get humanChoice
const btn = document.querySelectorAll("button");
let humanChoice;
btn.forEach(button => {
    button.addEventListener("click", () => {
        humanChoice = button.textContent;
        playRound(getComputerChoice(), humanChoice);
    });
});

function playRound(computerChoice, humanChoice) {
    if (humanChoice === computerChoice) {
        console.log("TIE! Same choices!");
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
    round++;

    if (round == 5) {
    if (humanScore > computerScore) {
            console.log("The winner is the human!");
        } else {
            console.log("The winner is the computer!");
        }
        round = 0;
    }
}