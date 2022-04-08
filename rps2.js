function getRandomInt(max) {
    return Math.floor(Math.random() * max) 
}
function computerPlay() {
    var array = ["Rock", "Paper", "Scissors"]
    return array[getRandomInt(3)] //Returns Rock, Paper, or Scissors
    }
function displayResults() {
    console.log("The score was: Player: ", pscore, " Computer: ", cscore, " Ties: ", tie)
    if (cscore > pscore) {
        console.log("I'm sorry, you have lost to a piece of metal.")
    } else if (pscore > cscore) {
        console.log("Congradulations. You won!")
    } else {
        console.log("It was a tie!")
    }
}

function playRound(playerSelection, computerSelection) {
    player = String(playerSelection).toLowerCase();
    computer = String(computerSelection).toLowerCase();
    
    if (player == "rock") {
        if (computer == "paper"){
            cscore++;
            return "You Lost.";
        } else if (computer == "scissors"){
            pscore++;
            return "You win! Rock beats scissors.";
        } else if (computer == "rock") {
            tie++;
            return "Tie!";
        }
    } else if (player == "paper") {
        if (computer == "rock") {
            pscore++;
            return "You win! Paper covers rock.";
        } else if (computer == "scissors") {
            cscore++;
            return "You lose. Scissors cut paper.";
        } else if (computer == "paper"){
            tie++;
            return "Tie!";
        }
    }else if (player == "scissors"){
        if (computer == "rock"){
            cscore++;
            return "You lost. Rock beats scissors";
        } else if (computer == "paper") {
            pscore++;
            return "You win. Scissors cut paper.";
        } else if (computer == "scissors"){
            tie++
            return "Tie!";
        }
    } 
    } 



  //const playerSelection = "rock";
  //const computerSelection = computerPlay();
  //console.log(playRound(playerSelection, computerSelection))

let pscore = 0;
let cscore = 0;
let tie = 0;
for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors'" )
    let computerSelection = computerPlay();
    console.log(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    
}
displayResults(pscore, cscore, tie);