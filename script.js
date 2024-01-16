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

function checkWinner (play1, play2) {

}

//GET INPUT FOR ANSWER
let sign;
while (checkAnswer(sign) == false) {
    sign = prompt("Please enter your answer:").toLowerCase();
}
