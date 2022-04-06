function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function computerPlay() {
    array = ['Rock', 'Paper', 'Scissors'];
    raw = array[getRndInteger(0,2)]; 
    choice = raw.toLowerCase();
    return (choice)
} 

function playRound(computerSelection, playerSelection) {
    if (computerSelection === 'paper' && playerSelection === 'rock') {
        return ('You Lose! Paper beats rock!')
    
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return ('You Win!')
    }
}
const computerSelection = computerPlay();
const playerSelection = 'rock';
console.log(playRound(computerSelection, playerSelection))



