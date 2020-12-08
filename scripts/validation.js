
$("#request-form").on("submit", function() {
  var formValid = true;


  if( $("#name").prop("validity").valid ) {
    $("#name-feedback").addClass("hidden");


  } else {
    $("#name-feedback").removeClass("hidden");

    formValid = false;
  }

  if( $("#email").prop("validity").valid ) {
    $("#email-feedback").addClass("hidden");


  } else {
    $("#email-feedback").removeClass("hidden");

    formValid = false;
  }

  if( $("#title").prop("validity").valid ) {
    $("#title-feedback").addClass("hidden");


  } else {
    $("#title-feedback").removeClass("hidden");

    formValid = false;
  }


  return formValid;
});
