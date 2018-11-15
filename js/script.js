// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var winner ;
var compChoice =[
    "rock",
    "paper",
    "scissors"
    ];
    
function computerChoice() {
var num = Math.round( (compChoice.length - 1) * Math.random());
return compChoice[num];
}

$("#shoot").click(function(){
    var userchoice = $("input").val();
    $("#userChoice").text(userchoice);
    var compPlay = computerChoice();
    $("#computerChoice").text(compPlay);

   if(compPlay==="paper"&&userchoice==="paper"){
          winner="You Tie";
    $("#result").text(winner);  
   }else if(compPlay==="rock"&&userchoice==="rock"){
          winner="You Tie";
    $("#result").text(winner);  
   }else if(compPlay==="scissors"&&userchoice==="scissors"){
          winner="You Tie";
    $("#result").text(winner);  
   }
   else{
      winner="No One Wins";
    $("#result").text(winner);  
   }
});
// DOCUMENT READY FUNCTION BELOW