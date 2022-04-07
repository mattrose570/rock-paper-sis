function getRandomInt(max) {
    return Math.floor(Math.random() * max) 
}

function computerPlay() {
    var array = ["Rock", "Paper", "Scissors"]
    return array[getRandomInt(3)] //Returns Rock, Paper, or Scissors
    }
let playerScore = 0;
let compScore = 0;
function playRound(playerSelection, computerSelection) {
    player = String(playerSelection).toLowerCase();
    computer = String(computerSelection).toLowerCase();
    if (player == "rock") {
        if (computer == "paper"){
            return "You Lost. Your Score: ", playerScore, "Computer Score: ", compScore++;
        } else if (computer == "scissors"){
            return "You win! Rock beats scissors.";
        } else if (computer == "rock") {
            return "Tie!";
        }
    } else if (player == "paper") {
        if (computer == "rock") {
            return "You win! Paper covers rock.";
        } else if (computer == "scissors") {
            return "You lose. Scissors cut paper.";
        } else if (computer == "paper"){
            return "Tie!";
        }
    }else if (player == "scissors"){
        if (computer == "rock"){
            return "You lost. Rock beats scissors";
        } else if (computer == "paper") {
            return "You win. Scissors cut paper.";
        } else if (computer == "scissors"){
            return "Tie!";
        }
    } 
    } 



  //const playerSelection = "rock";
  //const computerSelection = computerPlay();
  //console.log(playRound(playerSelection, computerSelection))

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Enter 'Rock', 'Paper', or 'scissors'" )
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    

 }
