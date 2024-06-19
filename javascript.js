


function getComputerChoice(){
    let max = 3
    let number
    number = Math.floor(Math.random() * 3);

    if(number == 0) {
        computerSelection.innerHTML = "✊";
        return "rock"
    } 
    else if(number == 1) {
        computerSelection.innerHTML = "✋";
        return "paper"
    } 
    else if(number == 2) {
        computerSelection.innerHTML = "✌";
        return "scissors"
    }
}

function getHumanChoice(){
    let message
    message = "Paper";
    return message
}

function playRound(human, computer){
    let humanChoice 
    let computerChoice
    humanChoice = human
    computerChoice = computer


    if(humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a tie")
    }else if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lost :(")
        return 2
    }else if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You won!")
        return 1
    }
    else if(humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a tie")
    }else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lost :(")
        return 2
    }else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You won!")
        return 1
    }
    else if(humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a tie")
    }else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lost :(")
        return 2
    }else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You won!")
        return 1
    }
    else {
        console.log("You must choose one from: Rock, Paper and Scissors.")
    }

    console.log(" ")

}

function playAgain(){
    
    alert("Do you wanna play again?");
    
}

function oldMain(mySelection){
    let computer 
    let human 

    let humanScore = aPlayerScore.innerHTML;
    let computerScore = aComputerScore.innerHTML;

    let remember

    

    computer = getComputerChoice()
    //human = getHumanChoice()
    human = mySelection;
    console.log("You chose - " + human)
    console.log("AI chose - " + computer)

    remember = playRound(human, computer)

    if (remember == 1){
        humanScore++
        setTimeout(function(){
            functionHuman(); 
        }, 4500);
    }else if (remember == 2){
        computerScore++
        setTimeout(function(){
            functionRobot(); 
        }, 4500);
    }else{
        setTimeout(function(){
            functionTie(); 
        }, 4500);
    }


    console.log("")

    setTimeout(function(){
        aPlayerScore.innerHTML = humanScore;
        aComputerScore.innerHTML = computerScore;   
    }, 6400);

    console.log("Your score: " + humanScore)
    console.log("AI's score: " + computerScore)
    

    if(humanScore==5) {
        console.log("YOU WON!!!!")
        playAgain();
        aPlayerScore.innerHTML = 0;
        humanScore = 0;
        aComputerScore.innerHTML = 0;
        computerScore = 0;
    }
    
    if(computerScore==5){
        console.log("You lost LMAO")
        playAgain();
        aPlayerScore.innerHTML = 0;
        humanScore = 0;
        aComputerScore.innerHTML = 0;
        computerScore = 0;
    }
}
// -------------------------------------------------------------------

let mySelection;

//////////////////////////

function randomlol() {
    const selection = document.querySelector("selection");
    const computerSelection = document.querySelector("computerSelection");
    const aPlayerScore = document.querySelector("aPlayerScore");
    const aComputerScore = document.querySelector("aComputerScore");
    const image = document.querySelector("image");
    const human = document.querySelector("human");
    const robot = document.querySelector("robot");
    const tie = document.querySelector("tie");
    const whoWon = document.querySelector("whoWon");

}

function resetImages() {
    
    selection.classList.remove('move');
    computerSelection.classList.remove('move');
    image.classList.remove('move');
    image.classList.remove('back');
    computerSelection.classList.remove('back');
    selection.classList.remove('back');

    selection.style.opacity = 0;
    computerSelection.style.opacity = 0;


    human.classList.remove('move');
    robot.classList.remove('move');
    tie.classList.remove('move');

    human.style.opacity = 0;
    robot.style.opacity = 0;
    tie.style.opacity = 0;

    whoWon.style.top = "0vh";
    whoWon.style.left = "0%";

}

function gameAnimate() {

    selection.style.opacity = 1;
    computerSelection.style.opacity = 1;

    selection.classList.add('move');
    computerSelection.classList.add('move');
    setTimeout(function(){
        image.classList.add('move');
    }, 2000);
    
    setTimeout(function(){
        image.classList.add('back');
        computerSelection.classList.add('back');
        selection.classList.add('back');
    }, 5200);
    
    setTimeout(resetImages, 7500);
    
    
}

function humanAnimate(){
    human.style.opacity = 1;
    human.classList.add('move');
}

function robotAnimate(){
    robot.style.opacity = 1;
    robot.classList.add('move');
}

function tieAnimate(){
    tie.style.opacity = 1;
    tie.classList.add('move');
}

 function functionHuman(){
    whoWon.style.top = "15vh";
    whoWon.style.left = "46%";
    robot.style.opacity = 0;
    human.style.opacity = 1;
    tie.style.opacity = 0;
    setTimeout(humanAnimate, 2000);
 }

 function functionRobot(){
    whoWon.style.top = "-2vh";
    whoWon.style.left = "45.5%";
    robot.style.opacity = 1;
    human.style.opacity = 0;
    tie.style.opacity = 0;
    setTimeout(robotAnimate, 2000);
 }

 function functionTie(){
    whoWon.style.top = "34vh";
    whoWon.style.left = "45.5%";
    robot.style.opacity = 0;
    human.style.opacity = 0;
    tie.style.opacity = 1;
    setTimeout(tieAnimate, 2000);
 }

function rockFunction() {
    
    selection.innerHTML = "✊";

    mySelection = "rock";

    gameAnimate(); 
    
    

    cooldown();
    
    oldMain(mySelection);

    return("rock");
}

function paperFunction() {
    //alert("Paper!");
    
    selection.innerHTML = "✋";

    mySelection = "paper";

    gameAnimate();
    

    cooldown();

    oldMain(mySelection);

    return("paper");
}

function scissorsFunction() {
    //alert("Scissors!");
    
    selection.innerHTML = "✌";

    mySelection = "scissors";

    gameAnimate(); 

    cooldown();

    oldMain(mySelection);

    return("scissors");
}

function buttonCooldown(){
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
}

function cooldown(){

    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;

    setTimeout(buttonCooldown,7500);

}


///////////////////main

let playerSelection;

//////executin shit
document.addEventListener("DOMContentLoaded", function() {

    const btnRock = document.querySelector("#btnRock");
    const btnPaper = document.querySelector("#btnPaper");
    const btnScissors = document.querySelector("#btnScissors");
    
    btnRock.addEventListener("click", rockFunction);
    
    btnPaper.addEventListener("click", paperFunction);
    
    btnScissors.addEventListener("click", scissorsFunction);
    
    
    
      

})


