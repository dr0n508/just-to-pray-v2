$(document).ready(function(){

    $('.swiper-filter').on( 'click', 'a', function() {
        var filter = $(this).attr('data-filter');

        $('.swiper-prayers .swiper-slide').css('display', 'none');
        $('.swiper-prayers .swiper-slide' + filter).css('display', '');
        $( '.swiper-filter a' ).removeClass( 'swiper-active' );
        $( this ).addClass( 'swiper-active' );

        if (prayersSwiper) {
            prayersSwiper.updateSize();
            prayersSwiper.updateSlides();
            prayersSwiper.updateProgress();
            prayersSwiper.updateSlidesClasses();
            prayersSwiper.slideTo(0);
            prayersSwiper.scrollbar.updateSize();
        }

        return false;
    });

    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:768px)' );

    // keep track of swiper instances to destroy later
    let prayersSwiper;

    const breakpointChecker = function() {

        // if larger viewport and multi-row layout needed
        if ( breakpoint.matches === true ) {

            // clean up old instances and inline styles when available
            if ( prayersSwiper !== undefined ) prayersSwiper.destroy( true, true );

            // or/and do nothing
            return;

            // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {

            // fire small viewport version of swiper
            return enableSwiper();

        }

    };

    const enableSwiper = function() {

        prayersSwiper = new Swiper ('.swiper-prayers', {
            observer: true,
            slidesPerView: 1,
            runCallbacksOnInit: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable : true,
            },
            updateOnImagesReady: true
        })

    };

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();


});