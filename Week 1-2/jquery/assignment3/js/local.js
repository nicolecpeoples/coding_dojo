$(document).ready(function() {

	function getSaveImages() {
		var src;
		var altSrc;
		$('img').on('click', function(){
			//store orginal source
			src = $(this).attr('src');
			//store current data src
			altSrc = $(this).data('alt-src');
			//change current source to alt src
			$(this).attr('src', altSrc);
			//change current alt-src to original src
			$(this).data('alt-src', src);
		});

	}

	getSaveImages();

});