$(document).ready(function() {
    $('#fullpage').fullpage({
    	anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage','sixthPage'],
    	menu: '#pageMenu',
    	slidesNavigation: true,
    	afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            if(anchorLink == 'firstPage'){
                $('.to-top').fadeOut(300);
            }
            else {
            	$('.to-top').fadeIn(300);
            }
        }
    });

    $('.toggl-sect-down').on('click', function () {
    	$.fn.fullpage.moveSectionDown();
    });

    $('.toggl-sect-up').on('click', function () {
    	$.fn.fullpage.moveSectionUp();
    });

    $('.menu_btn').on('click', function () {
    	$(this).toggleClass('menu_btn__active')
    		   .closest('.menu').toggleClass('menu__active');
    });

});