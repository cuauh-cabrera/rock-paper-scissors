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



/* SET USER'S CHOICE */
const chooseRock = document.querySelector('#rock');
const choosePaper = document.querySelector('#paper');
const chooseScissors = document.querySelector('#scissors');

chooseRock.addEventListener('click', () => {
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

    //Get turn result
    let result1 = playTurn(computerChoice, userChoise);

    const boardContainer = document.querySelector('#container');
    const scoreBoard = document.querySelector('#scoreboard');
    const scoreRow = document.createElement('p');
    scoreRow.textContent = result1;
    scoreBoard.append(scoreRow);
    boardContainer.append(scoreBoard);

    //Results message
    if (userWins.length >= 2) {
        resultAlert = 'You Win!'
    } else if (computerWins.length >= 2) {
        resultAlert = 'Computer Wins!'
    }else if (tiedGame.length >= 2) {
        resultAlert = 'Tied Game'
    }else {
        resultAlert = 'Tied Game'
    }

    //End Game
    if (turnCount.length == 3) {
        alert(resultAlert);
        location.reload();
    }

});

choosePaper.addEventListener('click', () => {
    if (choosePaper) {
        userChoise = 'paper';
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
    let result2 = playTurn(computerChoice, userChoise);

    const boardContainer = document.querySelector('#container');
    const scoreBoard = document.querySelector('#scoreboard');
    const scoreRow = document.createElement('p');
    scoreRow.textContent = result2;
    scoreBoard.append(scoreRow);
    boardContainer.append(scoreBoard);

        //Results message
        if (userWins.length >= 2) {
            resultAlert = 'You Win!'
        } else if (computerWins.length >= 2) {
            resultAlert = 'Computer Wins!'
        }else if (tiedGame.length >= 2) {
            resultAlert = 'Tied Game'
        }else {
            resultAlert = 'Tied Game'
        }
    
        //End Game
        if (turnCount.length == 3) {
            alert(resultAlert);
            location.reload();
        }



})

chooseScissors.addEventListener('click', () => {
    if (chooseScissors) {
        userChoise = 'scissors';
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
    let result3 = playTurn(computerChoice, userChoise);

    const boardContainer = document.querySelector('#container');
    const scoreBoard = document.querySelector('#scoreboard');
    const scoreRow = document.createElement('p');
    scoreRow.textContent = result3;
    scoreBoard.append(scoreRow);
    boardContainer.append(scoreBoard);

        //Results message
        if (userWins.length >= 2) {
            resultAlert = 'You Win!'
        } else if (computerWins.length >= 2) {
            resultAlert = 'Computer Wins!'
        }else if (tiedGame.length >= 2) {
            resultAlert = 'Tied Game'
        }else {
            resultAlert = 'Tied Game'
        }
    
        //End Game
        if (turnCount.length == 3) {
            alert(resultAlert);
            location.reload();
        }

})