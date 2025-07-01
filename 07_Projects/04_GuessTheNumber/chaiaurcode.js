console.log("start");

let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);


const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const starOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numOfGuess = 0
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a vaild number')
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numOfGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO low`);

    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO high`);
    }

}

// cleanup method
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numOfGuess++;
    remaining.innerHTML = `${11 - numOfGuess}`;

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    starOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        console.log(randomNumber);
        
        prevGuess = [];
        numOfGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numOfGuess}`;
        userInput.removeAttribute('disabled')
        starOver.removeChild(p)
        displayMessage('')
        playGame = true;
    });

}






console.log("run");
