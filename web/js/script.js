jQuery(document).ready(function() {

   if(($('body').css('overflow') === 'hidden') &&
      ($('div.container').css('width') === '950px'))
   {
      $('body').removeAttr('style');
   }
   else {
     $('body').css({"overflow":"hidden"});
   }
  $('.menuToggle').click(function() {
    if($('body').css('overflow') === 'hidden')
    {
       $('body').removeAttr('style');
    }
    else {
      $('body').css({"overflow":"hidden"});
    }
    $('nav').slideToggle(500,function(){
      if($(this).css('display') === 'none')
      {
         $(this).removeAttr('style');
      }

    });
});
});
