//Users
let user = ["Player", "Computer"];

//Scores
let userScore = 0;
let computerScore = 0;

let gameIsOver = false;


// Caching HTML DOM elements for later use
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Computer Choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
}

// Game Results
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} loses ${computerChoice}. You lost!`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
}
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${userChoice} draws ${computerChoice}. You draw!`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 1000);
}

// Game operations
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch  (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
           win(userChoice, computerChoice);
        break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
        break;

        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            draw(userChoice, computerChoice);
        break;
    } 
}

// Game Over


// Actions for clicked game options
function main() {
rock_div.addEventListener('click', () => game("rock"));
paper_div.addEventListener('click', () => game("paper"))
scissors_div.addEventListener('click', () => game("scissors"))
}

// Allows functions to run
main();
game();
getComputerChoice();