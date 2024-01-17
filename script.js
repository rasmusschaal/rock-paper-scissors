//CHECK IF ANSWER IS ROCK, PAPER OR SCISSORS
function checkAnswer(choice) {
    if (choice == "rock" || choice == "scissors" || choice == "paper") {
        return true;
    }
    else {
        return false;
    }
}

//GENERATE RANDOM ANSWER
function genReply() {
    var randomNum = Math.floor(Math.random() * (4 - 1) ) + 1;

    //RETURN ROCK IF randomNum == 1
    if (randomNum == 1) {
        return "rock";
    }
    //RETURN SCISSORS IF randomNum == 2
    else if (randomNum == 2) {
        return "scissors";
    }
    //RETURN PAPER IF randomNum == 3
    else {
        return "paper";
    }
}


function checkWinner (playerOne, playerTwo) {
    if ( playerOne == "rock" && playerTwo == "scissors") {
        return true;
    } else if (playerOne == "scissors" && playerTwo == "paper") {
        return true;
    } else if (playerOne == "paper" && playerTwo == "rock") {
        return true;
    } else if (playerOne == "rock" && playerTwo == "paper") {
        return false;
    } else if (playerOne == "paper" && playerTwo == "scissors") {
        return false;
    } else if (playerOne == "scissors" && playerTwo == "rock") {
        return false;
    }
}

//GET INPUT FOR ANSWER
let computerSign = genReply();
let sign;
while (checkAnswer(sign) == false || sign == computerSign) {
    sign = prompt("Rock, paper, scissors?").toLowerCase();
}

if (checkWinner(sign, computerSign) == true) {
    console.log("You won! You picked " + sign + " and the computer picked " + computerSign + "!");
} else {
    console.log("You lost! You picked " + sign + " but the computer picked " + computerSign + "!");
}
