$(document).ready(function(){

    $('.swiper-filter').on( 'click', 'a', function() {
        var filter = $(this).attr('data-filter');

        $('.swiper-prayers .swiper-slide').css('display', 'none');
        $('.swiper-prayers .swiper-slide' + filter).css('display', '');
        $( '.swiper-filter a' ).removeClass( 'swiper-active' );
        $( this ).addClass( 'swiper-active' );

        if (mySwiper) {
            mySwiper.updateSize();
            mySwiper.updateSlides();
            mySwiper.updateProgress();
            mySwiper.updateSlidesClasses();
            mySwiper.slideTo(0);
            mySwiper.scrollbar.updateSize();
        }

        return false;
    });

    var mySwiper = undefined;
    function initSwiper() {
        var screenWidth = $(window).width();
        if(screenWidth < 992 && mySwiper == undefined) {
            mySwiper = new Swiper('.swiper-prayers', {
                observer: true,
                        slidesPerView: 1,
                        runCallbacksOnInit: true,
                        spaceBetween: 30,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable : true,
                        },
                        updateOnImagesReady: true
            });
        } else if (screenWidth > 768 && mySwiper != undefined) {
            mySwiper.destroy();
            mySwiper = undefined;
            jQuery('.swiper-wrapper').removeAttr('style');
            jQuery('.swiper-slide').removeAttr('style');
        }
    }

//Swiper plugin initialization
    initSwiper();

//Swiper plugin initialization on window resize
    $(window).on('resize', function(){
        initSwiper();
    });


});