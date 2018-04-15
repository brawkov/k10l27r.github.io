jQuery(document).ready(function() {

  $('.menuToggle').click(function() {
    $('#open').css({"display":"none"});
    $('nav,#close').slideToggle(500,function(){
      if($(this).css('display') === 'none')
      {
         $(this).removeAttr('style');
         $('#open').css({"display":"block"});
      }

    });
});
// Слайдеры  на третьем и пятом модулях
$('.click_one').click(function() {
    $('.click_one').css({"background-color":"#19bd9a"});
    $('.click_two').css({"background-color":"#81868e"});
    $('.click_three').css({"background-color":"#81868e"});
    $('.click_fourth').css({"background-color":"#81868e"});
    $('.slider1').css({"display":"block"});
    $('.slider2').css({"display":"none"});
    $('.slider3').css({"display":"none"});
    $('.slider4').css({"display":"none"});
    });
$('.click_two').click(function() {
     $('.click_two').css({"background-color":"#19bd9a"});
     $('.click_one').css({"background-color":"#81868e"});
     $('.click_three').css({"background-color":"#81868e"});
     $('.click_fourth').css({"background-color":"#81868e"});
     $('.slider1').css({"display":"none"});
     $('.slider2').css({"display":"block"});
     $('.slider3').css({"display":"none"});
     $('.slider4').css({"display":"none"});
    });
$('.click_three').click(function() {
    $('.click_three').css({"background-color":"#19bd9a"});
    $('.click_one').css({"background-color":"#81868e"});
    $('.click_two').css({"background-color":"#81868e"});
    $('.click_fourth').css({"background-color":"#81868e"});
    $('.slider1').css({"display":"none"});
    $('.slider2').css({"display":"none"});
    $('.slider3').css({"display":"block"});
    $('.slider4').css({"display":"none"});
    });
$('.click_fourth').click(function() {
    $('.click_fourth').css({"background-color":"#19bd9a"});
    $('.click_three').css({"background-color":"#81868e"});
    $('.click_one').css({"background-color":"#81868e"});
    $('.click_two').css({"background-color":"#81868e"});
    $('.slider1').css({"display":"none"});
    $('.slider2').css({"display":"none"});
    $('.slider3').css({"display":"none"});
    $('.slider4').css({"display":"block"});
        });
//галерея на шестом модуле


//слайдер на седьмом модуле
  $('.seven_one').click(function() {
      $('.seven_one').css({"background-color":"#19bd9a"});
      $('.seven_two').css({"background-color":"#ffffff"});
      $('.seven_there').css({"background-color":"#ffffff"});
      $('.team_one').css({"display":"block"});
      $('.team_two').css({"display":"none"});
      $('.team_there').css({"display":"none"});
          });
  $('.seven_two').click(function() {
      $('.seven_two').css({"background-color":"#19bd9a"});
      $('.seven_there').css({"background-color":"#ffffff"});
      $('.seven_one').css({"background-color":"#ffffff"});
      $('.team_one').css({"display":"none"});
      $('.team_two').css({"display":"block"});
      $('.team_there').css({"display":"none"});
              });
   $('.seven_there').click(function() {
      $('.seven_there').css({"background-color":"#19bd9a"});
      $('.seven_one').css({"background-color":"#ffffff"});
      $('.seven_two').css({"background-color":"#ffffff"});
      $('.team_two').css({"display":"none"});
      $('.team_one').css({"display":"none"});
      $('.team_there').css({"display":"block"});
                          });
//слайдер на девятый модуле
    $('.hover_1').hover(function() {
      $('#nine_1').slideToggle(300,function(){
      });

      $('#nine_4').slideToggle(300,function(){
      });
    });
    $('.hover_2').hover(function() {
      $('#nine_2').slideToggle(300,function(){
      });
      $('#nine_5').slideToggle(300,function(){
      });
    });
    $('.hover_3').hover(function() {
      $('#nine_3').slideToggle(300,function(){
      });
      $('#nine_6').slideToggle(300,function(){
      });
    });

    $('.map').click(function() {
       $('.map').css({"display":"none"});

                           });
});
