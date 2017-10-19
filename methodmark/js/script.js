/*Hide menu by default*/
$("#mobile-menu").hide();

/*When menu button is clicked, toggle the menu*/
$("#menu-btn").click(function(){
  $("#mobile-menu").slideToggle();
});