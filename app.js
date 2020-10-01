
// import functions and grab DOM elements
import { getRandomThrow, compareResults, } from './get-random-throw.js';

const button = document.querySelector('#button');
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
    const thrownValue = getRandomThrow();

    const checkedRadioButton = document.querySelector('input:checked');
    const userGuess = checkedRadioButton.value;

    const result = compareResults(userGuess, thrownValue);

    if (result === 'win') {
        wins++;
        total++;

        winSpan.textContent = wins;
        percentSpan.textContent = `${(wins / total) * 100}%`;
        resultSpan.textContent = 'You win!';

    } if (result === 'lose') {
        losses++;
        total++;
        loseSpan.textContent = losses;
        percentSpan.textContent = `${(wins / total) * 100}%`;
        resultSpan.textContent = 'You lose!';


    } else {
        draws++;
        total++;
        drawSpan.textContent = draws;
        percentSpan.textContent = `${(wins / total) * 100}%`;
        resultSpan.textContent = 'Great minds think alike, lets be friends!';
    } 
});

