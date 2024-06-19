


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
    aPlayerScore.innerHTML = 0;
    aComputerScore.innerHTML = 0;
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
    }else if (remember == 2){
        computerScore++
    }


    console.log("")
    console.log("Your score: " + humanScore)
    aPlayerScore.innerHTML = humanScore;
    console.log("AI's score: " + computerScore)
    aComputerScore.innerHTML = computerScore;

    if(humanScore==5) {
        console.log("YOU WON!!!!")
        playAgain();
    }
    
    if(computerScore==5){
        console.log("You lost LMAO")
        playAgain();
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
    
    setTimeout(resetImages, 6750);
    
    
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

    setTimeout(buttonCooldown,6750);

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


