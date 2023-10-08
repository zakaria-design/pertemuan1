$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	if( wScroll > $('.batas-1').offset().top-200 ) {
		$('.gambar-tabung').addClass('muncul');
	}
	if( wScroll > $('.gambar-tabung').offset().top ) {
		$('.gambar-eniac').addClass('muncul');
	}
	if( wScroll > $('.batas-2').offset().top-200 ) {
		$('.gambar-generasi').addClass('muncul');
	}
	if( wScroll > $('.batas-3').offset().top-200 ) {
		$('.gambar-ibm').addClass('muncul');
	}
	if( wScroll > $('.batas-4').offset().top-200 ) {
		$('.gambar-generasi4').addClass('muncul');
	}
	if( wScroll > $('.batas-5').offset().top-200 ) {
		$('.gambar-pentium').addClass('muncul');
	}
	if( wScroll > $('.batas-6').offset().top-200 ) {
		$('.gambar-tower').addClass('muncul');
	}
	if( wScroll > $('.batas-7').offset().top-200 ) {
		$('.gambar-portable').addClass('muncul');
	}
	if( wScroll > $('.batas-8').offset().top-200 ) {
		$('.gambar-note').addClass('muncul');
	}
	if( wScroll > $('.batas-9').offset().top-200 ) {
		$('.gambar-palmtop').addClass('muncul');
	}
	if( wScroll > $('.batas-10').offset().top-200 ) {
		$('.gambar-analog').addClass('muncul');
	}
	if( wScroll > $('.batas-11').offset().top-200 ) {
		$('.gambar-hybrid').addClass('muncul');
	}
	if( wScroll > $('.batas-12').offset().top-200 ) {
		$('.gambar-desktop').addClass('muncul');
	}

});