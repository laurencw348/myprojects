// When form is submitted:

$("#request-form").on("submit", function() {
  var formValid = true;

  console.log("form submitted");

  //if name data is valid:
  //  hide name feedback
  //else:
  //  show name feedback

  //if email is valid:
  //  hide email feedback
  //else:
  //  show email feedback

  if( $("#email").prop("validity").valid ) {

    console.log("hide feedback");
    $("#feedback-email").addClass("hidden");

    // TODO: snippet(s) for if component data is valid

  } else {
    console.log("show feedback")
    $("#feedback-email").removeClass("hidden");


    formValid = false;
  }

  //if requested subject title data is valid:
  //  hide requested subject title feedback
  //else:
  //  show requested subject title feedback





  //if form data is valid:
  //  send data to server
  //else:
  //  prevent form from sending data to server//
  return formValid;
});
