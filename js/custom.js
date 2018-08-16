var czas_opoznienia;
function delay(){
		if ( $(document).ready()){
		czas_opoznienia = setTimeout(showPage, 2000);

		windows_size = $(window).height();
		$('section.one').css("height", windows_size);
		}
	}
function showPage(){
	document.getElementById('preloader').style.display = "none";
	document.getElementById('body').style.display = "block";
	window.dispatchEvent(new Event('resize'));
}
window.onload = delay;

//przylepiony header

var header = document.getElementById('header');
var position_header_before = 30;

window.onscroll = function(){
	sticky_head();
}
function sticky_head(){
	if (window.pageYOffset >= position_header_before){
		header.classList.add('fixed-top');
		
	}
		else{
			header.classList.remove('fixed-top');
	}
}

