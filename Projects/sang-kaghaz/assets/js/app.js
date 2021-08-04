const startGame = document.getElementById("start-game");

const Sang = 'سنگ';
const Kaghaz = 'کاغذ';
const Gheychi = 'قیچی';
const Default_user_choice = Sang;

const RESULT_DRAW = "تساوی";
const PLAYER_WIN  = "شما برنده شدید";
const COMPUTER_WIN = "کامپیوتر برنده شد";

let gameIsRounning = false;

const getPlayerChoice = function(){
    const selection = prompt(`${Sang} یا ${Gheychi} یا ${Kaghaz}...؟`, '');
    if(selection !== Sang && selection !== Kaghaz && selection !== Gheychi){
        alert('انتخاب شما صحیح نیست و سنگ انتخاب شد');
        return Default_user_choice;
    }
    return selection;
}

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.25){
        return Sang;
    }else if(randomValue < 0.6){
        return Kaghaz;
    }else{
        return Gheychi;
    }
}

const getWinner = function(cChoice, pChoice){
    if(cChoice == pChoice){
        return RESULT_DRAW;
    }else if(cChoice === Sang && pChoice === Kaghaz ||
             cChoice === Kaghaz && pChoice === Gheychi ||
             cChoice === Gheychi && pChoice === Sang){
        return PLAYER_WIN;
    }else{
        return COMPUTER_WIN;
    }
}

startGame.addEventListener("click", function(){

    if(gameIsRounning){
        return;
    }
    gameIsRounning = true;

    console.log("بازی شروع شد")
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = getWinner(computerSelection, playerSelection);
    console.log(winner);
})