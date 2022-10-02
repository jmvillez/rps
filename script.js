/* 
GETTING COMPUTER CHOICE:
- generate a random number from 1 - 3
- assign the random number into rock, paper or scissor
*/

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return 'rock'
            break;
        case 2:
            return 'paper'
            break;
        case 3:
            return 'scissor'
            break;
    }

}

//Uncomment to test if working
//console.log(getComputerChoice());


/*
PLAYING A ROUND:
- Take player choice and computer choice
- Compare two choices to determine the winner
- Return a string declaring the winner of the round
*/

const playerChoice = 'paper'.toLowerCase()
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `It's a tie`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost! Paper beats rock. Try again next round.';
    }
    else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return 'You lost! Rock beats scissor. Try again next round.';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return 'You lost! Scissor beats paper. Try again next round.'
    }
    else return 'You won! Congratulations!'
}

//Uncomment to test if working
//console.log(playRound(getComputerChoice(), playerChoice));