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
			if ($(window).width() <= 767) {
				$('.sub_menu').slideUp(300);
			}
		}
		e.stopPropagation();
	});

// Mobile submenu
	$('.nav_item.has_child').on('click', function(){
		if ($(window).width() <= 767) {
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

$(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
        btnUp.addClass('show');
    } else {
        btnUp.removeClass('show');
    }
});

btnUp.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});




