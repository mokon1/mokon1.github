$(function(){
    
    /* STICKY MENU */ 
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

    /* HAMBURGER */
    var hamburgerMenu = $('div.hamburgerMenu');
    var hamburgerList = $('ul.hamburgerList')
    
    hamburgerList.hide();

    hamburgerMenu.on('click', function(){
        hamburgerList.slideDown(500);
    });
   hamburgerList.on('click', function(){
        $(this).delay(500).slideUp(500);
    });
    
    /* SMOOTH SCROLLING */ 
    function scroll(){
       $('a[href^="#"]').on('click',function(event){ //!!!
            var href = $(this).attr('href');
            var desiredHeight = ($(window).height() * 0.15);
            
           if(href.length) {
               event.preventDefault();
                $('html, body').animate({
                    scrollTop: $('body').find(href).offset().top-desiredHeight
                },1000);
            }
        });
    };
    scroll();
    
});