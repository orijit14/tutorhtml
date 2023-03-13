
$(function() {
    /*-------------------------------------Header Fixed-------------------------*/
    "use strict";
    $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });
    
    $('.toggle-menu').click(function(){
        $('.exo-menu').toggleClass('display');        
     });

    /*-------------------------------------Mobile Menu-------------------------*/
    var ico = $('<span class="sub-icon"></span>');
    $('li.sub_menu_open').append(ico);

    $("#menu_res").click(function() {
        $("#res_nav").toggleClass('left0');
    });

    $('.navigation li span').on("click", function(e) {
        if ($(this).hasClass('open')) {

            $(this).prev('.sub_menu').slideUp(300, function() {});

        } else {
            $(this).prev('.sub_menu').slideDown(300, function() {});
        }
        $(this).toggleClass("open");
    });
    $('#menu_res').click(function() {
        $(this).toggleClass('menu_responsiveTo')
    });



    /*-------------------------------------ScrollTop-------------------------*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
            $('.arrow-show').fadeIn();
        } else {
            $('.scrollup').fadeOut();
            $('.arrow-show').fadeOut();
        }
    });
    $('.scrollup').click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 300);
        return false;
    });

    
    /*-------------------------------------Home Slider-----------------------------------*/
    $(".home_slider").owlCarousel({
        loop:true,
        autoplay: true,
        nav:false,
        dots:false,
        slideSpeed : 3000,
        paginationSpeed : 4000,
        animateOut: 'fadeOut',
        items : 1
    }); 


    /*-------------------------------------Worldwide Order Slider-----------------------------------*/
    $(".worldwide_slider").owlCarousel({
        loop:false,
        margin:20,
        stagePadding:20,
        // autoplay: true,
        nav:true,
        dots:false,
        navElement: 'div',
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1000:{
                items:4
            },
            1300:{
                items:5
            }
        }
    });

    /*-------------------------------------Worldwide Order Slider-----------------------------------*/
    $(".upcoming-lesson_slider").owlCarousel({
        loop:false,
        margin:25,
        stagePadding:20,
        // autoplay: true,
        nav:true,
        dots:false,
        navElement: 'div',
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1000:{
                items:4
            },
            1300:{
                items:5
            }
        }
    });

    /*-------------------------------------Video Gallery Slider-----------------------------------*/
    $(".videogallery_slider").owlCarousel({
        loop:false,
        margin:20,
        stagePadding:10,
        // autoplay: true,
        nav:true,
        dots:false,
        navElement: 'div',
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    });
   
});
/*-------------------------------------Language select-----------------------------------*/
function lang_select() {
    $(".lang-list").slideToggle();
};

document.addEventListener('click', function (e) {
    var container = document.querySelector('.language-select-globe');
    if (!container.contains(e.target)) {
        $(".lang-list").slideUp();
    }
    e.stopPropagation();
});

function custome_popup() {
    $(".custome-popup").fadeIn();
};
function custome_popup_close() {
    $(".custome-popup").fadeOut();
};

