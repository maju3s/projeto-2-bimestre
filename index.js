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




});