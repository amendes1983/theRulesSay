$("#subButton").on("click", function(event) {
    event.preventDefault();
    var existUser = {
        user_name: $("#userName").val().trim(),
        user_pass: $("#passWord").val().trim(),

    };
