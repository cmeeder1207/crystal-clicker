var Goal =Math.floor(Math.random(19-3)*100 + 20)

var userTotal = 0;

var wins=0
var losses=0

var crystalValues = {};
crystalValues[1] = Math.floor(Math.random()*10+3);
crystalValues[2] = Math.floor(Math.random()*10+3);
crystalValues[3] = Math.floor(Math.random()*10+3);
crystalValues[4] = Math.floor(Math.random()*10+3);



//----- goal push










//-------------- crystal stats pushing)

function getCrystalHandler(crystalKey) {
    return function() {
     userTotal = userTotal + crystalValues[crystalKey];
     console.log("New userTotal " + userTotal);
     $("#score").text(userTotal);
 
     if (userTotal === Goal) {
         alert ("you win");
     }
 
     else if (userTotal > Goal) {
         alert ("you lose")
     } 
 }
 }
 



console.log ("cry1",crystalValues[1])
console.log ("cry2",crystalValues[2])
console.log ("cry3",crystalValues[3])
console.log ("cry4",crystalValues[4])
console.log ("user Total",userTotal)
console.log ("goal",Goal)

$(document).ready(function() {
        
    $("#cry1").on("click", getCrystalHandler(1));
    $("#cry2").on("click", getCrystalHandler(2));
    $("#cry3").on("click", getCrystalHandler(3));
    $("#cry4").on("click", getCrystalHandler(4));

    $('#goal').text(Goal)
})