window.addEventListener("scroll", function() { onScrollDiv() });
	window.addEventListener("DOMContentLoaded", function() { onScrollDiv() });

	function onScrollDiv() {
		var images = document.querySelectorAll('.lazyload');
		for (var i=0, nb=images.length ; i <nb ; i++) {
			var img = images[i]
			var rect = img.getBoundingClientRect();
			var isVisible = ((rect.top - window.innerHeight) < 500 && (rect.bottom) > -50 ) ? true : false ;

			if (isVisible) {
				if (!img.src) {
					img.src = img.dataset.src;
				}
			}
		}
	}