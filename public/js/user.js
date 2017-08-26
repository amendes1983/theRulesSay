var db = require("../models/");


// $(document).ready(function(){
//
// addData();
//
// $('.collapsible').collapsible();
//     function addData(){
//       var newUl = $('<ul class="collapsible" data-collapsible="accordion"><li><div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div><div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div></li></ul>');
//       console.log(newUl);
//       $('#userData').append(newUl);
//
//
//     }
//
// });
$(document).ready(function(){
  db.host.findAll({where: {id: host.id}}).success(function(host) {
    done(null, host);
  })

});
