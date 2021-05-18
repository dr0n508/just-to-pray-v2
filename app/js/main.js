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

// Custom select
// $('.current_option').on('click', function(){
// 	if (!$(this).closest('.select').hasClass('active')) {
// 		$('.select').removeClass('active');
// 		$('.options').slideUp(200);
// 		$(this).closest('.select').addClass('active');
// 		$(this).closest('.select').find('.options').slideDown(200);
// 	} else {
// 		$(this).closest('.select').removeClass('active');
// 		$(this).closest('.select').find('.options').slideUp(200);
// 	}
// });
// $('.option').on('click', function(){
// 	$(this).closest('.select').find('.current_option').text($(this).text());
// 	$(this).closest('.select').find('.select_input').val($(this).text());
// 	$(this).closest('.select').removeClass('active');
// 	$('.options').slideUp(200);
// });
// $(document).on('click', function(e) {
// 	if (!$(e.target).closest('.select').length) {
// 		$('.select').removeClass('active');
// 		$('.options').slideUp(200);
// 	}
// 	e.stopPropagation();
// });

// Tabs TC
// $('.tab').on('click', function(){
// 	$('.tab').removeClass('active');
// 	$(this).addClass('active');
// 	$('.tc_content').css('display', 'none');
// 	$('.tc_content[data-index="'+$(this).data('index')+'"]').fadeIn(300);
//
// });



filterSelection("all"); // Execute the function and show all columns
function filterSelection(c) {

    var x, i;
    x = document.getElementsByClassName("item-filter");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-filter");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){

        $slick_slider = $('.slider');
        var current = document.getElementsByClassName("active-filter");
        current[0].className = current[0].className.replace(" active-filter", "");
        this.className += " active-filter";
    });
}


///


//
// $('.slick-slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

// slider


$slick_slider = $('.slider');
settings_slider = {
    dots: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: true,
    infinite: false,
    slide: '.show',
    // more settings
};
slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
        if ($(window).width() > 991) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
            return
        }
        if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });
};
