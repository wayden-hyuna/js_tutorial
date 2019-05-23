
function RngToXExclusive(max){
    var randomNum = Math.random() * max;
    return Math.floor(randomNum);
}

function GenCompChoice(){
    var compChoice = RngToXExclusive(1,3);
    if (compChoice == 0){
        return "bear";
    }
    else if (compChoice == 1){
        return "human";
    }
    else if (compChoice == 2){
        return "gun";
    }
}

function GetUserChoice(){
   
    var userChoice = prompt("Please choose bear, human or gun");

    while(true){  

        userChoice.toLowerCase();
        if (userChoice == ("bear"||"gun"||"human") ){
            return userChoice;
        }
        else
            userChoice = prompt("Please choose bear, human or gun");
    }
}

function Evaluate(playerChoice, compChoice){

    console.log("Player\tvs\tComputer");
    console.log(playerChoice + "\tvs\t" + compChoice)

    if(playerChoice == "bear" && compChoice == "human"){
        console.log("bear mauls human \n Player Wins!!!");
    }
    if(playerChoice == "human" && compChoice == "human"){
        console.log("It\'s a tie!!!");
    }
    if(playerChoice == "gun" && compChoice == "human"){
        console.log("Human disarms gun \n Player Loses :(");
    }
    if(playerChoice == "bear" && compChoice == "bear"){
        console.log("It\'s a tie!!!");
    }
    if(playerChoice == "human" && compChoice == "bear"){
        console.log("bear mauls human \n Player Loses :(");
    }
    if(playerChoice == "gun" && compChoice == "bear"){
        console.log("Gun shoots bear \n Player Wins!!!");
    }
    if(playerChoice == "bear" && compChoice == "gun"){
        console.log("Gun shoots bear \n Player Loses :(");
    }
    if(playerChoice == "human" && compChoice == "gun"){
        console.log("Human disarms gun \n Player Wins!!!");
    }
    if(playerChoice == "gun" && compChoice == "gun"){
        console.log("It\'s a tie!!!");
    }
    

}

function main()
{
    
    //initialised to empty string
    var playerChoice = " ";
    var compChoice = " ";
        
   
        playerChoice = GetUserChoice();
        compChoice = GenCompChoice();
        Evaluate(playerChoice,compChoice);

    while(true)
    {
        if(confirm("Do you want to try again?"))
        {
            playerChoice = GetUserChoice();
            compChoice = GenCompChoice();
            Evaluate(playerChoice,compChoice);    
        }
        else
        {
            console.log("Goodbye!")
            break;
        }

    }
}

main();