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
    var userpoint=0;
    var compchoice=0;
    var userchoice = $("input").val();
    $("#userChoice").text(userchoice);
    var compPlay = computerChoice();
    $("#computerChoice").text(compPlay);
    
    function startImageReturn(){
      document.getElementById('starterImage').src='Start.gif';
    }

   if(compPlay==="paper"&&userchoice==="paper"||compPlay==="rock"&&userchoice==="rock"||compPlay==="scissors"&&userchoice==="scissors"){
        winner="You Tie";
       $("#result").text(winner); 
           if(compPlay==="rock"){
             document.getElementById('starterImage').src='rockrock.png';
            setTimeout(startImageReturn, 1000);
   }else if(compPlay==="scissors"){
         document.getElementById('starterImage').src='scisscis.png';
          setTimeout(startImageReturn, 1000);
   }else{
     document.getElementById('starterImage').src='paperpaper.png';
      setTimeout(startImageReturn, 1000);
   }
   }else if(compPlay==="paper"&&userchoice==="scissors"){
          winner="You Win";
        $("#result").text(winner); 
         document.getElementById('starterImage').src='scispaper.png';
          setTimeout(startImageReturn, 1000);
   }else if(compPlay==="scissors"&&userchoice==="rock"){
          winner="You Win";
        $("#result").text(winner);  
         document.getElementById('starterImage').src='rockscis.png';
          setTimeout(startImageReturn, 1000);
   } else if(compPlay==="rock"&&userchoice==="paper"){
         winner="You Win";
        $("#result").text(winner);  
         document.getElementById('starterImage').src='paperrock.png';
          setTimeout(startImageReturn, 1000);
   }else if(compPlay==="scissors"&&userchoice==="paper"){
    winner="Computer Wins";
    document.getElementById('starterImage').src='paperscis.png';
    $("#result").text(winner);
     setTimeout(startImageReturn, 1000);
   }

   else if(compPlay==="rock"&&userchoice==="scissors"){
          winner="Computer Wins";
    $("#result").text(winner);
     document.getElementById('starterImage').src='scisrock.png';
      setTimeout(startImageReturn, 1000);
   }
   else if(compPlay==="paper"&&userchoice==="rock"){
          winner="Computer Wins";
    $("#result").text(winner);
     document.getElementById('starterImage').src='rockpaper.png';
      setTimeout(startImageReturn, 1000);
   }
   else{
      winner="No One Wins";
    $("#result").text(winner);  
   }
});
// DOCUMENT READY FUNCTION BELOW