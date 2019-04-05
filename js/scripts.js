// Business Interface logic



// User Interface logic
$(document).ready(function(event) {
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#numberInput").val());

  });
});
