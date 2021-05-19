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


//smooth scroll to Links
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

//intro video
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



