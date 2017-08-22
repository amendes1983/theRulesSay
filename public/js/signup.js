console.log('hellow');

function checkRadioButton() {

  if (document.getElementById('test1').checked)

  {
    console.log("checked");
    $("#icon_telephone").attr('disabled', true);
    $("#textarea1").attr('disabled', true);
    $("#submitbutton").on("click", function(event) {
      event.preventDefault();
      var newUser = {
        user_name: $("#first_name").val().trim(),
        user_pass: $("#password").val().trim(),
        email: $("#email").val().trim()
      };
      $.post("/signup", newUser)
        .done(function(data) {
          console.log(data);
          window.location.href = "/";
        });
    });
  } else if(document.getElementById('test2').checked) {
    $("#icon_telephone").attr('disabled', false);
    $("#textarea1").attr('disabled', false);


    $("#submitbutton").on("click", function(event) {
      event.preventDefault();
      var newHost = {
        host_name: $("#first_name").val().trim(),
        host_pass: $("#password").val().trim(),
        host_phone: $("#icon_telephone").val().trim(),
        address: $("#textarea1").val().trim(),
        email: $("#email").val().trim()
      };
      $.post("/signup", newHost)
        .done(function(data) {
          console.log(data);
        });
    });
}
}
checkRadioButton();
$('#test1').on('click' ,checkRadioButton);
$('#test2').on('click' ,checkRadioButton);
