console.log("Login");

function checkRadioButton(event) {
  if (document.getElementById('test1').checked) {
    console.log("checked");
$("#subButton").on("click", function(event) {
    event.preventDefault();
    var existUser = {
        user_name: $("#userName").val().trim(),
        user_pass: $("#passWord").val().trim(),

    };
    $.post("/login/user", existUser)
    	.done(function(data) {
    		console.log(data);
    		});
    
 		})
	}
else if (document.getElementById('test2').checked) {
	$("#subButton").on("click", function(event) {
    event.preventDefault();
    var existHost = {
        host_name: $("#userName").val().trim(),
        host_pass: $("#passWord").val().trim(),

    };
    $.post("/login/host", existHost)
    	.done(function(data) {
    		console.log(data);
    		});
    
 		})
	}

}

$('#test1').on('click', checkRadioButton);
$('#test2').on('click', checkRadioButton);