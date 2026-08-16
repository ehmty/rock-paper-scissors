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
    const container = document.querySelector("div");
    const resultList = document.createElement("ul");
    container.appendChild(resultList);
    const roundResult = document.createElement("li");
    resultList.appendChild(roundResult);

    if (humanChoice === computerChoice) {
        roundResult.textContent = "TIE! Same choices!";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper" ||
                humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "paper" && computerChoice === "rock") {
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore += 1;
    }
    else {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore += 1;
    }

    round++;

    if (round === 5) {
        const winAnnounce = document.createElement("h1");
        container.append(winAnnounce);

        if (humanScore > computerScore) {
                winAnnounce.textContent = "The winner is the human!"
            } else {
                winAnnounce.textContent = "The winner is the computer!"
            }

        round = 0;
    }
}