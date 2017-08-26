$(document).ready(function() {
      var queryURL = "https://bgg-json.azurewebsites.net/thing/9209"

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          var description = $.parseJSON('{"description": "With elegantly simple gameplay, Ticket to Ride can be learned in under 15 minutes, while providing players with intense strategic and tactical decisions every turn. Players collect cards of various types of train cars they then use to claim railway routes in North America. The longer the routes, the more points they earn."}')
          var minPlayer = $.parseJSON('{"minPlayers": 2}')
          var maxPlayer = $.parseJSON('{"maxPlayers": 5}')

          $("#ticketData").text("Here is a brief" + JSON.stringify(description));

          console.log(description);
          console.log(minPlayer);
          console.log(maxPlayer);

        });
      });
    });

    $(document).ready(function() {
          var queryURL = "https://bgg-json.azurewebsites.net/thing/13"

          $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
            console.log(response);
            $.ajax({
              url: queryURL,
              method: "GET"
            }).done(function(response) {
              console.log(response);
              var description = $.parseJSON('{"description":"In Catan (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. On each turn dice are rolled to determine what resources the island produces. Players collect these resources (cards);wood, grain, brick, sheep, or stone; to build up their civilizations to get to 10 victory points and win the game."}')
              var minPlayer = $.parseJSON('{"minPlayers": 2}')
              var maxPlayer = $.parseJSON('{"maxPlayers": 5}')

              $("#catanData").text("Here is a brief" + JSON.stringify(description));

              console.log(description);
              console.log(minPlayer);
              console.log(maxPlayer);

            });
          });
        });

        $(document).ready(function() {
              var queryURL = "https://bgg-json.azurewebsites.net/thing/54625"

              $.ajax({
                url: queryURL,
                method: "GET"
              }).done(function(response) {
                console.log(response);
                $.ajax({
                  url: queryURL,
                  method: "GET"
                }).done(function(response) {
                  console.log(response);
                  var description = $.parseJSON('{  "description": "From the depths of space an ancient vessel drifts slowly towards the Imperium of Mankind - a space hulk. Within its confines, untold thousands of Genestealers slowly emerge from hibernation. The Space Marines must enter the cramped corridors and tomb-like chambers of the ancient ship to defeat this alien menace.Space Hulk is a board game for two players, recreating the battles fought between the Space Marines and Genestealers. One player commands the Space Marines as they carry out deadly missions in the ancient Space Hulk, and the other commands the horde of Genestealers opposing them. Space Hulks fast-paced rules simulate the tense atmosphere of a mission deep inside the cramped confines of a derelict space hulk, where split-second decisions are needed for victory."}')
                  var minPlayer = $.parseJSON('{"minPlayers": 2}')
                  var maxPlayer = $.parseJSON('{"maxPlayers": 2}')

                  $("#hulkData").text("Here is a brief" + JSON.stringify(description));

                  console.log(description);
                  console.log(minPlayer);
                  console.log(maxPlayer);

                });
              });
            });

            $(document).ready(function() {
                  var queryURL = "https://bgg-json.azurewebsites.net/thing/54625"

                  $.ajax({
                    url: queryURL,
                    method: "GET"
                  }).done(function(response) {
                    console.log(response);
                    $.ajax({
                      url: queryURL,
                      method: "GET"
                    }).done(function(response) {
                      console.log(response);
                      var description = $.parseJSON('{  "description": "From the depths of space an ancient vessel drifts slowly towards the Imperium of Mankind - a space hulk. Within its confines, untold thousands of Genestealers slowly emerge from hibernation. The Space Marines must enter the cramped corridors and tomb-like chambers of the ancient ship to defeat this alien menace.Space Hulk is a board game for two players, recreating the battles fought between the Space Marines and Genestealers. One player commands the Space Marines as they carry out deadly missions in the ancient Space Hulk, and the other commands the horde of Genestealers opposing them. Space Hulks fast-paced rules simulate the tense atmosphere of a mission deep inside the cramped confines of a derelict space hulk, where split-second decisions are needed for victory."}')
                      var minPlayer = $.parseJSON('{"minPlayers": 2}')
                      var maxPlayer = $.parseJSON('{"maxPlayers": 2}')

                      $("#hulkData").text("Here is a short" + JSON.stringify(description));

                      console.log(description);
                      console.log(minPlayer);
                      console.log(maxPlayer);

                    });
                  });
                });
                $(document).ready(function() {
                      var queryURL = "https://bgg-json.azurewebsites.net/thing/110327"

                      $.ajax({
                        url: queryURL,
                        method: "GET"
                      }).done(function(response) {
                        console.log(response);
                        $.ajax({
                          url: queryURL,
                          method: "GET"
                        }).done(function(response) {
                          console.log(response);
                          var description = $.parseJSON('{"description": "Game description from the publisher:Waterdeep, the City of Splendors the most resplendent jewel in the Forgotten Realms, and a den of political intrigue and shady back-alley dealings. In this game, the players are powerful lords vying for control of this great city. Its treasures and resources are ripe for the taking, and that which cannot be gained through trickery and negotiation must be taken by force!"}')
                          var minPlayer = $.parseJSON('{"minPlayers": 2}')
                          var maxPlayer = $.parseJSON('{"maxPlayers": 2}')

                          $("#dungeonData").text("Here is a brief " + JSON.stringify(description));

                          console.log(description);
                          console.log(minPlayer);
                          console.log(maxPlayer);

                        });
                      });
                    });

                    $(document).ready(function() {
                          var queryURL = "https://bgg-json.azurewebsites.net/thing/113924"

                          $.ajax({
                            url: queryURL,
                            method: "GET"
                          }).done(function(response) {
                            console.log(response);
                            $.ajax({
                              url: queryURL,
                              method: "GET"
                            }).done(function(response) {
                              console.log(response);
                              var description = $.parseJSON('{"description": "Zombicide is a collaborative game in which players take the role of a survivor each with unique abilities and harness both their skills and the power of teamwork against the hordes of unthinking undead!"}')
                              var minPlayer = $.parseJSON('{"minPlayers": 2}')
                              var maxPlayer = $.parseJSON('{"maxPlayers": 2}')

                              $("#zombieData").text("Here is a bit of a " + JSON.stringify(description));

                              console.log(description);
                              console.log(minPlayer);
                              console.log(maxPlayer);

                            });
                          });
                        });
