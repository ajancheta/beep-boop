// Business Interface logic

//Alerts the user if their input is not a number
function isNumber(input) {
  if (isNaN(input)) {
    alert("Please enter a number that I can read.")
  } else {
    return true;
  }
}

//A for loop was created to loop through numInput initiated by user and will screen for the following if statements. Index [i] will loop from 0 to the number that the user submits.
function convertNumToWords(numInput) {
  var output = [];
  var userName = $("#name").val();
  for (var i=0; i <=numInput; i++) {
// Based on the conditions of the if statements, it will replace the number to another string. .push() method will add one or more elements to the end of the output array and adds a new length of the array.
    if (i % 15 == 0 && i > 0) {
    output.push(" " + userName + "," + " you found a number divisible by 15!");
  } if (i === 404 && i > 0) {
    output.push(" ERROR 404 ERROR 404 ERROR 404 ");
//.toString() method will convert [i] to a string and will screen for numbers that include "1", "2" or "3" to replace with another string.
    } else if ([i].toString().includes("3")) {
      output.push(" I'm sorry Dave, I'm afraid I can't do that");
    } else if ([i].toString().includes("1")) {
      output.push(" Beep!");
    } else if ([i].toString().includes("2")) {
      output.push(" Boop!");
    } else {
      output.push(" " + [i]);
    }
  }
    return output;
};

// User Interface logic
$(document).ready(function(){
  $(".welcomeRobo").click(function(event){
    event.preventDefault();
    $(".jumbotron").fadeToggle();
    $("#formOne").fadeToggle();
    $(".welcomeRobo").hide();

  });

  $("#formOne").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);
    $("#formTwo").fadeToggle();
    $(".well").fadeToggle();
    $("#formOne").hide();
    $(".welcomemsg").hide();
    $(".jumbotron").hide();
    $(".welcomeRobo").hide();

  });

  $("#formTwo").submit(function(event){
    event.preventDefault();
    var userInput = $("input#userInput").val();
    isNumber(userInput);
    $("h3").text(convertNumToWords(userInput));
    $("#result").fadeToggle();
    $("img").show();
    $("#formOne").hide();
    $("#formTwo").show();
    $(".jumbotron").hide();

  });
});
