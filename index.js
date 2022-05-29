$(document).ready(function() {


    $(window).resize(function() {
        if ($(window).width() >= 980) {


            $(".navbar .dropdown-toggle").hover(function() {
                $(this).parent().toggleClass("hidden");
                $(this).parent().find(".dropdown-menu").toggleClass("hidden");
            });

            $(".navbar .dropdown-menu").mouseleave(function() {
                $(this).removeClass("show");
            });


        }
    });


    //OWL
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: true,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });


});