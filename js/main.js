/*-----------------------------------------------------------------------------------

    Theme Name: Monity - CCTV & Security HTML Template
    Description: CCTV & Security HTML Template
    Author: Website Design Templates
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Copy to clipboard
        07. Wow animation - on scroll
        08. Sliders
        09. CountUp
        10. Countdown
        11. Current Year
        12. Gallery
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            var logoDark = $(".navbar-brand.dark img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logo.png');
                logodefault.attr('src', 'img/logo.png');
                logoDark.attr('src', 'img/logo.png');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logo.png');
                logodefault.attr('src', 'img/logo.png');
                logoDark.attr('src', 'img/logo.png');
            }
        });

        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

       $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });

        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        
        /*------------------------------------
            05. Video
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        $('.popup-social-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.source-modal').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            removalDelay: 160
        });


        /*------------------------------------
            06. Copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new ClipboardJS('.copy-clipboard');
            $('.copy-clipboard').on('click', function() {
                var $this = $(this);
                var originalText = $this.text();
                $this.text('Copied');
                setTimeout(function() {
                    $this.text('Copy')
                    }, 2000);
            });
        };

        /*------------------------------------
            07. Wow animation - on scroll
        --------------------------------------*/
        
        var wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: false, // default
            live: true // default
        })
        wow.init();


    // === when document ready === //
    $(document).ready(function(){
    
        /*------------------------------------
            08. Sliders
        --------------------------------------*/

        // testmonial-carousel
        $('.service-slider').owlCarousel({
            center: false,
            items:2,
            loop:true,
            dots: false,
            nav: true,
            navText: ["<i class='ti-arrow-left text-primary'></i>", "<i class='ti-arrow-right text-primary'></i>"],
            margin:30,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsive:{
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 4
                }
            }
        }); 

        // testmonial-carousel
        $('.testimonial-style1').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: false,
            margin: 0,
            autoplay: true,
            thumbs: true,
            thumbsPrerendered: true,
            autoplayTimeout: 5000,
            smartSpeed:800,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 1,
                    nav: true
                }
            }
        });

        // testmonial-carousel
        $('.testimonial-carousel1').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
            dots: false,
            margin: 20,
            autoplay: false,
            thumbs: true,
            thumbsPrerendered: true,
            autoplayTimeout: 5000,
            smartSpeed:800,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1
                }

            }
        });

        // testmonial-carousel
        $('.testimonial-carousel2').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
            dots: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed:800,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1000: {
                    items: 2
                }

            }
        });

        // testimonial-carousel4
        $('.testimonial-carousel4').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            dots: false,
            margin: 40,
            autoplay: true,
            thumbs: true,
            thumbsPrerendered: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            items: 1
        });

        // portfolio-carousel
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            center: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,            
            nav: false,
            dots: false,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }

            }
        });

        // portfolio-carousel
        $('.portfolio-carousel-02').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            center: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,            
            nav: true,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }

            }
        });    

        // Clients carousel
        $('.client-style1').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            smartSpeed: 1500,
            autoplayTimeout: 12000,
            responsiveClass: true,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 30
                },
                481: {
                    items: 2,
                    margin: 15
                },
                576: {
                    items: 3,
                    margin: 30
                },
                992: {
                    items: 4,
                    margin: 40
                },
                1200: {
                    items: 5,
                    margin: 60
                },
                1600: {
                    items: 7,
                    margin: 80
                }
            }
        });

        // team-carousel
        $('.team-carousel').owlCarousel({
            center: false,
            items:2,
            loop:true,
            dots: false,
            margin:30,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsive:{
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    center: false
                },
                1200: {
                    items: 2,
                    center: false
                },
                1399: {
                    items: 2
                }
            }
        });

        // Sliderfade3
        $('.slider-fade1').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            nav: true,
            navText: ["<i class='ti-arrow-left text-secondary'></i>", "<i class='ti-arrow-right text-secondary'></i>"],
            autoplay: true,
            smartSpeed:1500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                992: {
                nav: false,
                dots: true
                }
            }            
        });

        // Sliderfade2
        $('.slider-fade2').owlCarousel({
            items: 1,
            loop:true,
            dots: true,
            margin: 0,
            nav: false,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            autoplay:true,
            autoplayTimeout: 6000,
            smartSpeed:1500,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                992: {
                    nav: true,
                    dots: false
                }
            }       
        });
        
        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay:true,
            smartSpeed:500
        });

        // Slider text animation
        var owl = $('.slider-fade1');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('span').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('a').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('span').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('a').addClass('animated fadeInUp');
        });

        /*------------------------------------
            09. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            10. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Jul 2026 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });

        /*------------------------------------
            11. Current Year
        --------------------------------------*/

        $('.current-year').text(new Date().getFullYear());
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            12. Gallery
        --------------------------------------*/

        $('.portfolio-gallery').lightGallery();

        $('.portfolio-link').on('click', (e) => {
            e.stopPropagation();
        });
    
    });

})(jQuery);