jQuery(document).ready(function() {
  $('.menuToggle').click(function() {
    $('nav').slideToggle(500,function(){
      if($(this).css('display') === 'none')
      {
         $(this).removeAttr('style');
      }
      if($('body').css('overflow') === 'hidden')
      {
         $('body').removeAttr('style');
      }
      else {
        $('body').css({"overflow":"hidden"});
      }

    });
});
});
