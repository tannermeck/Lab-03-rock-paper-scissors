// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from './get-random-throw.js';
// initialize state
const rock = document.getElementById('rock-img');
const paper = document.getElementById('paper-img');
const scissors = document.getElementById('scissors-img');
const submitButton = document.getElementById('submit-button');
const result = document.getElementById('result');
const scoreWins = document.getElementById('score-wins');
const scoreLosses = document.getElementById('score-losses');
const scoreDraws = document.getElementById('score-draws');
const computerChose = document.getElementById('computer-chose');
let wins = 0;
let losses = 0;
let draws = 0;

submitButton.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked');
    const userChoice = selected.value;
    let randomNumber = Math.ceil(Math.random() * 3);
    let computerChoice = getRandomThrow(randomNumber);
    console.log(computerChoice);
    let winner = didUserWin(userChoice, computerChoice);
    if (winner === true){
        wins++;
        scoreWins.textContent = wins;
        result.textContent = 'YOU WON!!';
        computerChose.textContent = computerChoice.toUpperCase();
    } else if (winner === false){
        losses++;
        result.textContent = 'You Lost!';
        scoreLosses.textContent = losses;
        computerChose.textContent = computerChoice.toUpperCase();

    } else if (winner === 'draw'){
        draws++;
        result.textContent = "It's a draw!";
        scoreDraws.textContent = draws;
        computerChose.textContent = computerChoice.toUpperCase();
    }
});

    

    
    
    
    
    
    
//    if (randomNumber === 2){
//        computerChoice = 'paper';
//    }
//    if (randomNumber === 3){
//        computerChoice = 'scissors';
//    }
//    console.log('computer chose', computerChoice);

