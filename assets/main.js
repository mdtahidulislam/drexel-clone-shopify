(function ($) {
	"use strict";
    /*================================
        banner slider
    =================================*/
    $(document).ready(function(){

        var swiper = new Swiper(".banner-slide", {
            spaceBetween: 30,
            effect: "fade",
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: "#banner-bullet",
                clickable: true,
            },
        });
    });


    /*================================
        product slider
    =================================*/
    $(document).ready(function(){
        // furniture
        var swiper = new Swiper(".furniture", {
            slidesPerView: 1,
            spaceBetween: 30,
            rewind: true,
            navigation: {
                nextEl: "#furniture-next",
                prevEl: "#furniture-prev",
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            },
        });
        // light
        var swiper = new Swiper(".light", {
            slidesPerView: 1,
            spaceBetween: 30,
            rewind: true,
            navigation: {
                nextEl: "#light-next",
                prevEl: "#light-prev",
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            },
        });
        // sofa
        var swiper = new Swiper(".sofa", {
            slidesPerView: 1,
            spaceBetween: 30,
            rewind: true,
            navigation: {
                nextEl: "#sofa-next",
                prevEl: "#sofa-prev",
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            },
        });
        // new
        var swiper = new Swiper(".new", {
            slidesPerView: 1,
            spaceBetween: 30,
            rewind: true,
            navigation: {
                nextEl: "#new-next",
                prevEl: "#new-prev",
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            },
        });
        // feature
        var swiper = new Swiper(".feature", {
            slidesPerView: 1,
            spaceBetween: 30,
            rewind: true,
            navigation: {
                nextEl: "#feature-next",
                prevEl: "#feature-prev",
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            },
        });
        // best
        var swiper = new Swiper(".best", {
            slidesPerView: 1,
            spaceBetween: 30,
            rewind: true,
            navigation: {
                nextEl: "#best-next",
                prevEl: "#best-prev",
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            },
        });
    });
    /*================================
            Brand slider
    =================================*/
    $(document).ready(function(){
        var swiper = new Swiper(".brand-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            rewind: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: true,
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            },
        });
    });
    /*================================
            Footer accordion
    =================================*/
    
        $(document).ready(function(){
            if (window.innerWidth <= 575 ) {
                $('.module-title').click(function(){
                    $(this).next('.content').slideToggle();
                    console.log('clicked');
                });
            }
        });
    
})(jQuery);