// import functions and grab DOM elements
import { didUserWin } from './get-random-throw.js';
// initialize state
const rock = document.getElementById('rock-img');
const paper = document.getElementById('paper-img');
const scissors = document.getElementById('scissors-img');
const submitButton = document.getElementById('submit-button');
const result = document.getElementById('result');
let wins = 0;
let losses = 0;
let draws = 0;

submitButton.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked');
    const userChoice = selected.value;
    let computerChoice = 'rock';
    let randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 2){
        computerChoice = 'paper';
    }
    if (randomNumber === 3){
        computerChoice = 'scissors';
    }
    console.log('computer chose', computerChoice);
    
});