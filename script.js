

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissors');


var playerChoice =rockButton.addEventListener('click', () => {
    let rock = 'rock'; 
    game(rock);
    return rock; 
},false)

var playerChoice =paperButton.addEventListener('click', () => {
    let choice = 'paper'; 
    game(choice); 
},false)

var playerChoice =scissorButton.addEventListener('click', () => {
    let choice = 'scissors'; 
    game(choice); 
},false)



//var playerChoice = 'rock';


    
   

   
    function playRound(playerChoice, computerSelection) {
        playerChoice = playerChoice.toLowerCase();
        let returnString = "";
        if ((playerChoice === 'rock' && computerSelection === 'paper') 
        || (playerChoice === 'scissors' && computerSelection === 'rock') 
        || (playerChoice === 'paper' && computerSelection === 'scissors')) {
            returnString = 'You lose!';
        }
        else if ((playerChoice === 'paper' && computerSelection === 'rock') 
        || (playerChoice === 'rock' && computerSelection === 'scissors') 
        || (playerChoice === 'scissors' && computerSelection === 'paper')) {
            returnString = "You win!";
        }
        else if (playerChoice === computerSelection)  {
            returnString = "It's a tie!";
        }
        else {
            returnString = "error";
        }

        return returnString;
    }



    function getComputerChoice() {
        const randNum = Math.floor(Math.random()*3 + 1);
        let computerChoice = "";
        switch(randNum) {
            case 1: 
                computerChoice = "rock";
                break;
            case 2:
                computerChoice = "paper";
                break; 
            case 3:
                computerChoice = "scissors";
                break;
            
        }

        return computerChoice;
    }

    function game(playerChoice) {
    
    let computer = getComputerChoice();
    let winString = playRound(playerChoice,computer);
    console.log(winString);
    console.log("Player choice : " + playerChoice);
    console.log("Computer choice : " + computer);


    
}      