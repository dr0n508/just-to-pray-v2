MicroModal.init('modal-2');
MicroModal.init('modal-3');

// Mobile menu
	$('.burger').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('no_scroll');
		$('.menu_content').toggleClass('active');
		$('.sub_menu').slideUp(300);
	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.menu_wrap').length) {
			$('.burger').removeClass('active');
			$('.menu_content').removeClass('active');
			$('body').removeClass('no_scroll');
			if ($(window).width() <= 991) {
				$('.sub_menu').slideUp(300);
			}
		}
		e.stopPropagation();
	});

// Mobile submenu
	$('.nav_item.has_child').on('click', function(){
		if ($(window).width() <= 991) {
			if ($(this).find('.sub_menu').css('display') == 'block') {
				$('.sub_menu').slideUp(300);
			} else {
				$('.sub_menu').slideUp(300);
				$(this).find('.sub_menu').slideDown(300);
			}
		}
	});

//intro video

if (document.querySelector('.play-box') && document.getElementById('video-player')) {

    const playbtn = document.querySelector('.play-box');
    const player = document.getElementById('video-player');
    const vimeoPlayer = new Vimeo.Player(player);
    playbtn.onclick = function() {
        playbtn.style.display = "none";
        vimeoPlayer.play();
    };
    vimeoPlayer.on('pause', function() {
        playbtn.style.display = "flex";
    });
    vimeoPlayer.on('play', function() {
        playbtn.style.display = "none";
    });

}

////scroll to top button
const btnUp = $('#btn-up');


if ($(window).width() >= 768) {

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1500) {
            btnUp.addClass('show');
        } else {
            btnUp.removeClass('show');
        }
    });

}

btnUp.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});


//scroll to elements
function scrollToElement(elementObj, intPaddingTop, intSpeedScroll) {

    intPaddingTop = intPaddingTop || 10; /* Default 10px */
    intSpeedScroll = intSpeedScroll || 200 /* Default 200ms */
    var scrollTop = $(elementObj).offset().top - intPaddingTop;

    $('html, body').animate({
        scrollTop: scrollTop
    }, intSpeedScroll);
}

//click
$('.sub_menu_item_link[href^="#"]').on('click', function(event) {
    event.preventDefault();
    //
    $('.burger').removeClass('active');
    $('.menu_content').removeClass('active');
    $('body').removeClass('no_scroll');
    //
    scrollToElement($(this).attr('href'));
});