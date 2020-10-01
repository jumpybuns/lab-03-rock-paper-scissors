
// import functions and grab DOM elements
import { getRandomThrow, compareResults, } from './get-random-throw.js';

const button = document.querySelector('#button');
const resetButton = document.querySelector('#reset-button');
const winSpan = document.querySelector('#winSpan');
const loseSpan = document.querySelector('#loseSpan');
const drawSpan = document.querySelector('#drawSpan');
const percentSpan = document.querySelector('#percentSpan');
const resultSpan = document.querySelector('#resultSpan');


let wins = 0;
let losses = 0;
let draws = 0;
let total = 0;

//import checkResults

// DOM elements
//radio buttons-document.querySelector('input:checked')  goes in the event handler
//click to play button
//Display throw result (w,l,d) as well as current wins, losses and draws)

button.addEventListener('click', () => {
    resetButton.style.display = 'block';

    const thrownValue = getRandomThrow();

    const checkedRadioButton = document.querySelector('input:checked');
    const userGuess = checkedRadioButton.value;

    const result = compareResults(userGuess, thrownValue);

    if (result === 'win') {
        wins++;
        displayTextResult(result);
        winSpan.textContent = 'Wins: ' + wins;
        percentDisplay();
    } if (result === 'lose') {
        losses++;
        loseSpan.textContent = 'Losses: ' + losses;
        percentDisplay();
        displayTextResult(result);
    } if (result === 'draw') {
        draws++;
        drawSpan.textContent = 'Draws: ' + draws;
        percentDisplay();
        displayTextResult(result);
    } 
});

resetButton.addEventListener('click', () => {

    resetButton.style.display = 'none';
    button.style.display = 'block';

    wins = 0;
    losses = 0;
    draws = 0;
    total = 0;

    winSpan.textContent = '';
    loseSpan.textContent = '';
    drawSpan.textContent = '';
    percentSpan.textContent = '';
    resultSpan.textContent = '';
});

function percentDisplay(){

    total++;
    let percentResult = Math.round((wins / total) * 100);
    percentSpan.textContent = `Win Rate: ${percentResult}%`;

}

function displayTextResult(result){

    let i;

    const display = ['You win!', 'You lose!', 'It\'s a tie!'];

    if (result === 'win'){
        i = 0; 
        winSpan.style.fontSize = '3em';
        loseSpan.style.fontSize = '1em';
        drawSpan.style.fontSize = '1em';
        winSpan.style.fontWeight = 'bolder';
        loseSpan.style.fontWeight = 'normal';
        drawSpan.style.fontWeight = 'normal';
    } else if (result === 'lose'){
        i = 1;
        winSpan.style.fontSize = '1em';
        loseSpan.style.fontSize = '3em';
        drawSpan.style.fontSize = '1em';
        winSpan.style.fontWeight = 'normal';
        loseSpan.style.fontWeight = 'bolder';
        drawSpan.style.fontWeight = 'normal';
    } else if (result === 'draw'){
        i = 2;
        winSpan.style.fontSize = '1em';
        loseSpan.style.fontSize = '1em';
        drawSpan.style.fontSize = '3em';
        winSpan.style.fontWeight = 'normal';
        loseSpan.style.fontWeight = 'normal';
        drawSpan.style.fontWeight = 'bolder';
    }

    resultSpan.textContent = display[i];
}