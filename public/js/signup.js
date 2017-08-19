function Checkradiobutton() {
  
  if(document.getElementById('user').checked)

{

    document.getElementById('phone').disabled=true;
    document.getElementById('address').disabled=true; 
$("#submit").on("click", function(event) {
  event.preventDefault();
  var newUser = {
    user_name: $("#name").val().trim(),
    user_pass: $("#pass").val().trim(),
    email: $("#email").val().trim()
  };
$.post("/signup", newUser)
.done(function(data) {
window.location.href = "/";
	});
});
}

  else

{

    document.getElementById('phone').disabled = false;
    document.getElementById('address').disabled=false;
$("#submit").on("click", function(event) {
  event.preventDefault();
  var newHost = {
    host_name: $("#name").val().trim(),
    host_pass: $("#pass").val().trim(),
    host_phone: $("#phone").val().trim(),
    address: $("#address").val().trim(),
    email: $("#email").val().trim()
  };
$.post("/signup", newHost)
.done(function(data) {
console.log(data)
	});
});
   }

 }

