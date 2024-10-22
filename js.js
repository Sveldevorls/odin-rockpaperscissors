function getComputerChoice() {
    let choiceIdx = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][choiceIdx];
}

function getHumanChoice(roundNumber) {
    let choice = prompt(`Round ${roundNumber + 1} - What's your choice? (Rock / Paper / Scissors)`).toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Incorrect choice - try again: (Rock / Paper / Scissors)").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Tie - both chose ${humanChoice}`)
        return 0;
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lost - paper beats rock")
                return -1;
            }
            console.log("You won - rock beats scissors")
            return 1;

        case "paper":
            if (computerChoice == "scissors") {
                console.log("You lost - scissors beat paper")
                return -1;
            }
            console.log("You won - paper beats rock")
            return 1;
        
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lost - rock beats scissors")
                return -1;
            }
            console.log("You won - scissors beat paper")
            return 1;
    } 
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice(i);
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        if (result === -1) computerScore++;
        else if (result === 1) humanScore++;
    }

    console.log(`Final score: You ${humanScore} - ${computerScore} Computer`);
}

playGame();
