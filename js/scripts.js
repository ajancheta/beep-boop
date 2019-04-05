// Business Interface logic

function isNumber(input) {
  if (isNaN(input)) {
    alert("Please enter a number that I can read.")
  } else {
    return true;
  }
}

var execute = function convertNumToWords(numInput) {
  var output = [];
  var userName = $("#nameInput").val();
  for (var i=0; i <=numInput; i++) {
    if ([i].toString().includes("1")) {
      output.push(" Beep");
    } else if ([i].toString().includes("2")) {
      output.push(" Boop");
    } else if ([i].toString().includes("3")) {
      output.push(" I'm sorry," + userName + ". I'm afraid I can't do that");
    } else {
      output.push(" " + [i]);
    }
  }
    return output;
};

// User Interface logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);
    $("#formTwo").fadeToggle();
    $("#formOne").hide();
    $(".welcomemsg").hide();
    $("")

  });

  $("#formTwo").submit(function(event){
    event.preventDefault();
    var userInput = $("input#userInput").val();
    isNumber(userInput);
    $("h3").text(execute(userInput));
  });
});
