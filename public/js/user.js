


$(document).ready(function(){

addData();

$('.collapsible').collapsible();
    function addData(){
      var newUl = $('<ul class="collapsible" data-collapsible="accordion"><li><div class="collapsible-header"><i class="material-icons">CalebBanana</i></div><div class="collapsible-body"><span>bananaboy@gmail.com</span></div></li></ul>');
      console.log(newUl);
      $('#userData').append(newUl);


    }

});
