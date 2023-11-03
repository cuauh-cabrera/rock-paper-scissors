/*SET COMPUTER'S TURN*/
let computerTurn = Math.floor((Math.random() * 3) + 1);
let computerChoice;  

/*SET COMPUTER CHOICE*/
if (computerTurn === 1) {
    computerChoice = 'rock';
    }else if (computerTurn === 2) {
        computerChoice = 'paper';
    }else if (computerTurn === 3) {
        computerChoice = 'scissors';
    }


