var container = $('.container');
container.css('display','none');

$(window).on('load', function() {
    setTimeout(function(){ //user can see loading sign
        $('.loader').fadeOut('5000');
        container.fadeIn('3000');
    },1000)
});


var header = $('header');
var menu = $('nav.menu');
var headerPosition = header.offset().top;

$(window).on('scroll',function(){
    var scrollDocument = $(document).scrollTop();
    
    if (scrollDocument>=headerPosition){
        menu.addClass('sticky');
    }else{
        menu.removeClass('sticky');
    }
});


var hamburgerMenu = $('div.hamburgerMenu');
var hamburgerList = $('ul.hamburgerList');
var hamburgerItem = $("div.hamburgerItem");

hamburgerList.hide();

hamburgerMenu.on('click', function(){
    hamburgerList.slideDown(500);
    hamburgerItem.css("backgroundColor","#22a389");
    hamburgerItem.first().css({
        "transform-origin": "30% 30%",
        "transform": "rotate(60deg)",
        "transition-duration": "2s"
    });
    hamburgerItem.eq(1).css({
        "transform": "rotate(-60deg)",
        "transition-duration": "2s"
    });
    hamburgerItem.last().css("display","none"); 
});

hamburgerList.on('click', function(){
   hamburgerItem.css("backgroundColor","grey");
   hamburgerItem.first().css({
       "transform": "rotate(0deg)",
       "transition-duration": "2s"
   });
   hamburgerItem.eq(1).css({
       "transform": "rotate(0deg)",
       "transition-duration": "2s"
   });
   hamburgerItem.last().show(2000);
   $(this).delay(2000).slideUp(500);
});

function scroll(){
   $('a[href^="#"]').on('click',function(event){
       var href = $(this).attr('href');
       var desiredHeight = ($(window).height() * 0.14);
        
       if(href.length) {
           event.preventDefault();
           $('html, body').animate({
               scrollTop: $('body').find(href).offset().top-desiredHeight
           },1000);
       }
   });
};
scroll();