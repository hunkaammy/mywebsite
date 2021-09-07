 // JQUERY
$(function() {
	// Users can skip the loading process if they want.
	$('.Skip').click(function() {
		$('.overlay, .body').addClass('loaded');
	})
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, .body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 240);
	});
	// Will load page after 1min for users cannnot load properly
	setTimeout(function() {
		$('.overlay, .body').addClass('loaded');
	},300);
	// Random text to keep it fresh dawg.
	var names = ['500 से अधिक वैरायटी को एकत्रित किया जा रहा है', 'कृपया जुड़े रहे ', 'सर्वर कनेक्ट हो चूका है.!  जुड़े रहे..! ', 'हिंदुस्तान टॉयज ऑनलाइन स्टोर में आपका स्वागत है..'];
	setInterval(function() {
	  var rand = Math.floor(Math.random() * 4);
		$('#name').html(names[rand]);
	}, 500);
	
});