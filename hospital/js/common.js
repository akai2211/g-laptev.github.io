/*$(function() {

	//SVG Fallback
	$(img[src*="svg"]).attr(src, function() {
		return $(this).attr(src).replace(.svg, .png);
	});
});
*/
//Slick Slider
$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
	});
});