const getComputerChoice= () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0){
        return "rock";
    }
    else if (randomNumber === 1){
        return "paper";
    }
    else if (randomNumber === 2){
        return "scissor";
    }
};

function playRound(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase();

    if(player==="rock" && computerSelection==="paper"){
        return 0;
    }
    else if(player==="paper" && computerSelection==="rock"){
        return 1;
    }
    else if(player==="rock" && computerSelection==="scissor"){
        return 1;
    }
    else if(player==="scissor" && computerSelection==="rock"){
        return 0;
    }
    else if(player==="paper" && computerSelection==="scissor"){
        return 0;
    }
    else if(player==="scissor" && computerSelection==="paper"){
        return 1;
    }
    else if(player==="scissor" && computerSelection==="Scissor"){
        return 2;
    }
    else if(player==="paper" && computerSelection==="paper"){
        return 2;
    }
    else if(playerSelection==="rock" && computerSelection==="rock"){
        return 2;
    }
    else if(playerSelection=="quit"){
        return 4;
    }
    else{
        console.log("Invalid choice");
    }
};

function game(){
    let player_score=0,computer_score=0,tie=0;

    for(let i=1;i<=5;i++){

        const playerSelection= window.prompt("Choose between rock, paper,or scissor to quit write quit");
        const computerSelection= getComputerChoice();
        let round=playRound(playerSelection,computerSelection);

        if(round===0){
            console.log("Round: "+i);
            console.log("Player: "+playerSelection);
            console.log("Computer: "+computerSelection);
            computer_score++;
            console.log("Computer score: "+computer_score);
        }
        else if(round===1){
            console.log("Round: "+i);
            console.log("Player: "+playerSelection);
            console.log("Computer: "+computerSelection);
            player_score++;
            console.log("Player score: "+player_score);
        }
        else if(round===2){
            console.log("Round: "+i);
            console.log("Player: "+playerSelection);
            console.log("Computer: "+computerSelection);
            tie++;
            console.log("Tie score: "+tie);
        }
        else if(round===4){
            i=5;
        }
        else{
            i--;
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

game();
