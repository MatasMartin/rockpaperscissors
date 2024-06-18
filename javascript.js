


function getComputerChoice(){
    let max = 3
    let number
    number = Math.floor(Math.random() * 3);

    if(number == 0) {
        return "Rock"
    } 
    else if(number == 1) {
        return "Paper"
    } 
    else if(number == 2) {
        return "Scissors"
    }
}

function getHumanChoice(){
    let message
    message = prompt("Choose your turn: ")
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

// -------------------------------------------------------------------

let computer 
let human 

let humanScore = 0
let computerScore = 0

let remember


computer = getComputerChoice()
human = getHumanChoice()
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
console.log("AI's score: " + computerScore)

if(humanScore>computerScore) {
    console.log("YOU WON!!!!")
}else if(humanScore<computerScore){
    console.log("You lost LMAO")
}else {
    console.log("It was a tie loser")
}

//////////////////////////


//////executin shit
document.addEventListener("DOMContentLoaded", function() {

    const btnRock = document.querySelector("#btnRock");
    const btnPaper = document.querySelector("#btnPaper");
    const btnScissors = document.querySelector("#btnScissors");
    
    btnRock.addEventListener("click", rockFunction);
    
    btnPaper.addEventListener("click", () => {
    alert("Paper");
    });
    
    btnScissors.addEventListener("click", () => {
    alert("Scissors");
    });
    
    
    
      

})


