// Business Interface logic

//Alerts the user if their input is not a number
function isNumber(input) {
  if (isNaN(input)) {
    alert("Please enter a number that I can read.")
    window.location.reload();
  } else {
    return true;
  }
}

//A for loop was created to loop through numInput initiated by user and will screen for the following if statements. Index [i] will loop from 0 to the number that the user inputs.
var execute = function convertNumToWords(numInput) {
  var output = [];
  var userName = $("#name").val();
  for (var i=0; i <=numInput; i++) {
// Based on the conditions of the if statements, it will replace the number to another string. .push() method will add one or more elements to the end of the output array and adds a new length of the array.
    if (i % 5 === 0 && i > 0) {
    output.push(" " + userName + "," + " you're awesome!");
  } if (i === 404) {
    output.push(" " + userName + "," + " you found an ERROR 404");
//.toString() method will convert [i] to a string and will screen for numbers that include "1", "2" or "3" to replace with another string.
    } else if ([i].toString().includes("1")) {
      output.push(" Beep");
    } else if ([i].toString().includes("2")) {
      output.push(" Boop");
    } else if ([i].toString().includes("3")) {
      output.push(" I'm sorry Dave, I'm afraid I can't do that");
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
    $(".jumbotron").show();
    $("#formOne").show();
    $(".welcomeRobo").hide();
  });

  $("#formOne").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);
    $(".welcomeRobo").hide();
    $("#formTwo").fadeToggle();
    $(".well").fadeToggle();
    $("#formOne").hide();
    $(".welcomemsg").hide();
    $(".jumbotron").hide();

  });

  $("#formTwo").submit(function(event){
    event.preventDefault();
    var userInput = $("input#userInput").val();
    isNumber(userInput);
    $("h3").text(execute(userInput));
    $("#result").show();
    $("#formOne").hide();
    $("#formTwo").hide();
    $("img").show();
    $(".jumbotron").hide();
  });
});
