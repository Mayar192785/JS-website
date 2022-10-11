const getComputerChoice= () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0){
        return "Rock";
    }
    else if (randomNumber === 1){
        return "Paper";
    }
    else if (randomNumber === 2){
        return "Scissor";
    }
};

function playRound(playerSelection,computerSelection){
    let player= playerSelection.toLowerCase();

    if(player === "rock" && computerSelection ==="Paper"){
        return 0;
    }
    else if(player=== "paper" && computerSelection==="Rock"){
        return 1;
    }
    else if(player==="rock" && computerSelection==="Scissor"){
        return 1;
    }
    else if(player==="scissor" && computerSelection==="Rock"){
        return 0;
    }
    else if(player==="paper" && computerSelection==="Scissor"){
        return 0;
    }
    else if(player==="scissor" && computerSelection==="Paper"){
        return 1;
    }
    else if(player==="scissor" && computerSelection==="Scissor"){
        return 2;
    }
    else if(player==="paper" && computerSelection==="Paper"){
        return 2;
    }
    else if(playerSelection==="rock" && computerSelection==="Rock"){
        return 2;
    }
};

function game(){
    let player_score=0,computer_score=0,tie=0;
    for(let i=0;i<5;i++){
        const playerSelection= window.prompt("Choose between rock, paper,or scissor");
        const computerSelection= getComputerChoice();
        let round=playRound(playerSelection,computerSelection);
        
        if(round===0){
            console.log("Player: "+playerSelection);
            console.log("Computer: "+computerSelection);
            computer_score++;
        }
        else if(round===1){
            console.log("Player: "+playerSelection);
            console.log("Computer: "+computerSelection);
            player_score++;
        }
        else if(round===2){
            console.log("Player: "+playerSelection);
            console.log("Computer: "+computerSelection);
            tie++;
        }
    }
    if(computer_score>player_score || computer_score>player_score){
        console.log("Computer wins you lose");
    }
    else if(player_score>computer_score || player_score>tie){
        console.log("You win congratulations");
    }
    else if(tie>player_score && tie>computer_score){
        console.log("You have tied!!");
    }
}

console.log(game());
