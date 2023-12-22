/*SETUP VARIABLES*/
let computerChoice;
let userChoise;
let turnResult;
let resultAlert;
const turnCount =[];
const userWins = [];
const computerWins = [];
const tiedGame = [];



/*PLAY ROUND FUNCTION */
function playTurn(computerChoice, userChoise) {
    if (computerChoice === 'rock' && userChoise === 'scissors') {
        turnResult = `You chose ${userChoise} and the computer ${computerChoice}`;
        computerWins.push(1);
        turnCount.push(1);
    } else if (computerChoice === 'scissors' && userChoise === 'paper') {
        turnResult = `You chose ${userChoise} and the computer ${computerChoice}`;
        computerWins.push(1);
        turnCount.push(1);
    } else if (computerChoice === 'paper' && userChoise === 'rock') {
        turnResult = `You chose ${userChoise} and the computer ${computerChoice}`;
        computerWins.push(1);
        turnCount.push(1);
    } else if (userChoise === 'rock' && computerChoice === 'scissors') {
        turnResult = `You chose ${userChoise} and the computer ${computerChoice}`;
        userWins.push(1);
        turnCount.push(1);
    } else if (userChoise === 'scissors' && computerChoice === 'paper') {
        turnResult = `You chose ${userChoise} and the computer ${computerChoice}`;
        userWins.push(1);
        turnCount.push(1);
    } else if (userChoise === 'paper' && computerChoice === 'rock') {
        turnResult = `You chose ${userChoise} and the computer ${computerChoice}`;
        userWins.push(1);
        turnCount.push(1);
    } else if (userChoise === computerChoice) {
        turnResult = `You chose ${userChoise} and the computer ${computerChoice}`;
        tiedGame.push(1);
        turnCount.push(1);
    }
    return (turnResult);
}



// Set user's choice
const chooseRock = document.querySelector('#rock');
const choosePaper = document.querySelector('#paper');
const chooseScissors = document.querySelector('#scissors');

/*GAME INNING FUNCTION*/
let gameInning = function () {
    let userChoise;
    if (chooseRock) {
        userChoise = 'rock';
    }
    //Set computer choice
    let computerChoice;
    let computerTurn = Math.floor((Math.random() * 3) + 1);

    if (computerTurn === 1) {
        computerChoice = 'rock';
    } else if (computerTurn === 2) {
        computerChoice = 'paper';
    } else if (computerTurn === 3) {
        computerChoice = 'scissors';
    }
    //get turn result
    let result1 = playTurn(computerChoice, userChoise);
    const boardContainer = document.querySelector('#container');
    const scoreBoard = document.querySelector('#scoreboard');
    const scoreRow = document.createElement('p');
    scoreRow.textContent = result1;
    scoreBoard.append(scoreRow);
    boardContainer.append(scoreBoard);
    //results message
    if (userWins.length >= 2) {
        resultAlert = 'You Win!'
    } else if (computerWins.length >= 2) {
        resultAlert = 'Computer Wins!'
    }else if (tiedGame.length >= 2) {
        resultAlert = 'Tied Game'
    }else {
        resultAlert = 'Tied Game'
    }
    //end Game
    if (turnCount.length == 3) {
        alert(resultAlert);
        location.reload();
    }
}

//Rock event listener
chooseRock.addEventListener('click', () => {
    gameInning();
});

//Paper event listener
choosePaper.addEventListener('click', () => {
    gameInning();
})

//Scissors event listener
chooseScissors.addEventListener('click', () => {
    gameInning();
})