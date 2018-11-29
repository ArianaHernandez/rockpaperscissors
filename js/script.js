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
    document.getElementById('starterImage').src='paperpaper.png';
   }
   else if(compPlay==="rock"&&userchoice==="rock"){
          winner="You Tie";
        $("#result").text(winner);  
        document.getElementById('starterImage').src='rockrock.png';
   }else if(compPlay==="scissors"&&userchoice==="scissors" ){
        winner="You Tie";
         document.getElementById('starterImage').src='scisscis.png';
        $("#result").text(winner); 
    }else if(compPlay==="paper"&&userchoice==="scissors"){
          winner="You Win";
        $("#result").text(winner); 
         document.getElementById('starterImage').src='scispaper.png';
   }else if(compPlay==="scissors"&&userchoice==="rock"){
          winner="You Win";
        $("#result").text(winner);  
         document.getElementById('starterImage').src='rockscis.png';
   } else if(compPlay==="rock"&&userchoice==="paper"){
         winner="You Win";
        $("#result").text(winner);  
         document.getElementById('starterImage').src='paperrock.png';
   }else if(compPlay==="scissors"&&userchoice==="paper"){
    winner="Computer Wins";
    document.getElementById('starterImage').src='paperscis.png';
    $("#result").text(winner);
   }
   else if(compPlay==="rock"&&userchoice==="scissors"){
          winner="Computer Wins";
    $("#result").text(winner);
     document.getElementById('starterImage').src='scisrock.png';
   }
   else if(compPlay==="paper"&&userchoice==="rock"){
          winner="Computer Wins";
    $("#result").text(winner);
     document.getElementById('starterImage').src='rockpaper.png';
   }
   else{
      winner="No One Wins";
    $("#result").text(winner);  
   }
});
// DOCUMENT READY FUNCTION BELOW