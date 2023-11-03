/*SET COMPUTER CHOICE*/
let computerTurn = Math.floor((Math.random() * 3) + 1);
let computerChoice;

if (computerTurn === 1) {
    computerChoice = 'rock';
} else if (computerTurn === 2) {
    computerChoice = 'paper';
} else if (computerTurn === 3) {
    computerChoice = 'scissors';
}

/* SET USER'S CHOICE */
let userChoise = prompt('Plese enter your choise: rock, paper or scissors:', '').trim().toLocaleLowerCase();

while (userChoise === null || userChoise === undefined || userChoise.trim() === '') {
    userChoise = prompt('Plese enter your choise: rock, paper or scissors:', '');
}

/*PLAY ROUND FUNCTION */
function playRound(computerChoice, userChoise) {
    let roundResult;
    if (computerChoice === 'rock' && userChoise === 'scissors') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice} - You loose :-(`;
    } else if (computerChoice === 'scissors' && userChoise === 'paper') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice} - You loose :-(`;
    } else if (computerChoice === 'paper' && userChoise === 'rock') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice} - You loose :-(`;
    } else if (userChoise === 'rock' && computerChoice === 'scissors') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice} - You Win! :-)`;
    } else if (userChoise === 'scissors' && computerChoice === 'paper') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice} - You Win! :-)`;
    } else if (userChoise === 'paper' && computerChoice === 'rock') {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice} - You Win! :-)`;
    } else if (userChoise === computerChoice) {
        roundResult = `You choose ${userChoise} and the computer ${computerChoice} - Tied game :/`;
    } else {
        alert('Error: Please check that you typed the correct option');
    }
    return (roundResult);
}

/*SHOW RESULT */
alert(playRound(computerChoice, userChoise));





