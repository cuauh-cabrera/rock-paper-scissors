/*SETUP CHOICE VARIABLES*/
let computerChoice;
let userChoise;

/*PLAY ROUND FUNCTION */
let roundResult;
function playRound(computerChoice, userChoise) {
    if (computerChoice === 'rock' && userChoise === 'scissors') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice}`;
    } else if (computerChoice === 'scissors' && userChoise === 'paper') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice}`;
    } else if (computerChoice === 'paper' && userChoise === 'rock') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice}`;
    } else if (userChoise === 'rock' && computerChoice === 'scissors') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice}`;
    } else if (userChoise === 'scissors' && computerChoice === 'paper') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice}`;
    } else if (userChoise === 'paper' && computerChoice === 'rock') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice}`;
    } else if (userChoise === computerChoice) {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice}`;
    }
    return (roundResult);
}


/* SET USER'S CHOICE */
const chooseRock = document.querySelector('#rock');
const choosePaper = document.querySelector('#paper');
const chooseScissors = document.querySelector('#scissors');

chooseRock.addEventListener('click', () => {
    let userChoise;
    if (chooseRock) {
        userChoise = 'rock';
        console.log(userChoise);
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

    //Get turn result
    let result = playRound(computerChoice, userChoise);

    const boardContainer = document.querySelector('#container');
    const scoreBoard = document.querySelector('#scoreboard');
    const scoreRow = document.createElement('p');
    scoreRow.textContent = result;
    scoreBoard.append(scoreRow);
    boardContainer.append(scoreBoard);


});

choosePaper.addEventListener('click', () => {
    if (choosePaper) {
        userChoise = 'paper';
        console.log(userChoise);
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

    alert(playRound(computerChoice, userChoise));

})

chooseScissors.addEventListener('click', () => {
    if (chooseScissors) {
        userChoise = 'scissors';
        console.log(userChoise);
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

    alert(playRound(computerChoice, userChoise));

})





/*while (userChoise === null || userChoise === undefined || userChoise.trim() === '') {
    userChoise = prompt('Plese enter your choise: rock, paper or scissors:', '');
}*/



/*SHOW RESULT */
//alert(playRound(computerChoice, userChoise));





