function getComputerChoice() {
    let choiceIdx = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissors"][choiceIdx];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return [0, `Tie - both chose ${humanChoice}`]
    }

    switch (humanChoice) {
        case "rock":
            return computerChoice == "paper" ? [-1, "You lost - paper beats rock"] :
                                               [1, "You won - rock beats scissors"];
        case "paper":
            return computerChoice == "scissors" ? [-1, "You lost - scissors beat paper"] :
                                                  [1, "You won - paper beats rock"];
        case "scissors":
            return computerChoice == "rock" ? [-1, "You lost - rock beats scissors"] : 
                                              [1, "You won - scissors beat paper"];
    } 
}

let humanScore = 0;
let computerScore = 0;

let resultDiv = document.body.querySelector(".result")
let humanScoreDisplay = document.body.querySelector("#player-score")
let computerScoreDisplay = document.body.querySelector("#computer-score")

document.body.addEventListener("click", (e) => {
    if (e.target.id) {
        if (humanScore === 5 || computerScore === 5) {
            humanScore = 0
            computerScore = 0
            resultDiv.innerText = ""
            computerScoreDisplay.innerText = "0"
            humanScoreDisplay.innerText = "0"
        }

        let [score, result] = playRound(e.target.id, getComputerChoice());
        resultDiv.innerText = result;
        if (score === -1) {
            computerScore++
            computerScoreDisplay.innerText = computerScore
        }
        else if (score === 1) {
            humanScore++
            humanScoreDisplay.innerText = humanScore
        }

        if (humanScore === 5) {
            resultDiv.innerText = "You won! press any button to play again"
        }
        else if (computerScore === 5) {
            resultDiv.innerText = "You lost! press any button to play again"
        }
    }
})
