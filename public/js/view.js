$("#subButton").on("click", function(event) {
    event.preventDefault();
    var existUser = {
        user_name: $("#userName").val().trim(),
        user_pass: $("#passWord").val().trim(),

    };

    $.post("/signin", existUser)
        .done(function(data) {
            window.location.href = "view.html";
            console.log(data)
        });
});
