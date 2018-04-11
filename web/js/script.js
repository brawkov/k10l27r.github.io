jQuery(document).ready(function() {

  $('.menuToggle').click(function() {
    if($('body').css('overflow') === 'hidden')
    {
       $('body').removeAttr('style');
       $('#open').removeAttr('style');
    }
    else {
      $('body').css({"overflow":"hidden"});
      $('#open').css({"display":"none"});
    }
    $('nav,#close').slideToggle(500,function(){
      if($(this).css('display') === 'none')
      {
         $(this).removeAttr('style');
      }

    });
});

$('.click_one').click(function() {
    $('.click_one').css({"background-color":"#19bd9a"});
    $('.click_two').css({"background-color":"#81868e"});
    $('.click_three').css({"background-color":"#81868e"});
    $('.slider1').css({"display":"block"});
    $('.slider2').css({"display":"none"});
    $('.slider3').css({"display":"none"});
    });
$('.click_two').click(function() {
     $('.click_two').css({"background-color":"#19bd9a"});
     $('.click_one').css({"background-color":"#81868e"});
     $('.click_three').css({"background-color":"#81868e"});
     $('.slider1').css({"display":"none"});
     $('.slider2').css({"display":"block"});
     $('.slider3').css({"display":"none"});
    });
$('.click_three').click(function() {
    $('.click_three').css({"background-color":"#19bd9a"});
    $('.click_one').css({"background-color":"#81868e"});
    $('.click_two').css({"background-color":"#81868e"});
    $('.slider1').css({"display":"none"});
    $('.slider2').css({"display":"none"});
    $('.slider3').css({"display":"block"});
    });

    
});
