// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var compChoice =[
    "rock",
    "paper",
    "scissors"
    ];

$("#shoot").click(function(){
    var choice = $("input").val();
    $("#userchoice").text(choice);
    $("#computerchoice").text(compChoice);
    
    
});
// DOCUMENT READY FUNCTION BELOW
