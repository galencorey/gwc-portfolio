$(document).ready(function() {
  //write your code here!
  $('.frame')
    .mouseover(function() {
      $(this).find('.text-block').addClass('visible');
    })
    .mouseleave(function() {
      $(this).find('.text-block').removeClass('visible');
    });
});
