/* =================================================

 Template Name:  Nandini - One Page Business html Template
 Author: MouriTheme
 Version: 1.0
 Design and Developed by: MouriTheme

 NB: This is the main js of this theme.

 =================================================== */

(function($) {
    'use strict';

    jQuery(document).ready(function($) {


        //*************** wow js

        new WOW().init();

        //************** counter js

        // countUp
        $('.count').countUp({
            delay: 10,
            time: 1500
        });


        //************ smooth scroll js

        $('a.smooth-menu').on("click", function (e) {
            e.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
        });

        //*********** scrollspy js

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });


        //************ Magnific Popup

        $('.video-play').magnificPopup({
            type: 'video',
        });

        $('.zoom,.zoom1').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        //************ Testimonial Carousel

        var $testCarousel = $('#test-carousel');
        if ($testCarousel.length > 0) {
            $testCarousel.owlCarousel({
                loop: true,
                center: true,
                margin: 0,
                autoplay: true,
                dots: true,
                autoplayTimeout: 8500,
                smartSpeed: 450,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    1170: {
                        items: 1
                    }
                }
            });
        }

        //*************** Isotope filter

        var $Container = $('#img-filter');
        if( $Container.length>0 ) {
            $Container.isotope({
                itemSelector: '.single-port',
                transitionDuration: '0.8s'
            });
            $(".img-filter").on("click", function (e){
                $(".img-filter.active").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $Container.isotope({
                    filter: selector
                });
                return false;
            });

            $(window).resize(function(){
                setTimeout(function(){
                    $Container.isotope();
                },1000);
            }).trigger('resize');
        }


    });



    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });





})(jQuery);



