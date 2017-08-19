$(document).ready(function(){
  $().on('click', function(){

    	var name = $(this).data('games');
      console.log(name);
    	var queryURL = "https://www.rpggeek.com/xmlapi2/search=" + name;

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);

        });
  });
});
