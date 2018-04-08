jQuery(document).ready(function() {
  $('.menuToggle').click(function() {
    $('.menu').slideToggle(500,function(){
      if($(this).css('display') === 'none'){
         $(this).removeAttr('style');
      }
    });
});
});
