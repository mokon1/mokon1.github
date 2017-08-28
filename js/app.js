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
    $('.hamburgerList').hide();

    $('.hamburgerMenu').on('click', function(){
        $('.hamburgerList').slideDown(500);
    });
    $('.hamburgerList').on('click', function(){
        $('.hamburgerList').delay(500).slideUp(500);
    });
    
    
});