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

    //RETURN ROCK IF randomNUM == 1
    if (randomNum == 1) {
        return "rock";
    } else if (randomNum == 2) {
        return "scissors";
    } else {
        return "paper";
    }
}

//GET INPUT FOR ANSWER
let sign;
while (checkAnswer(sign) == false) {
    sign = prompt("Please enter your answer:").toLowerCase();
}
