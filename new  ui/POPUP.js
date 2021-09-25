$(document).ready(function(){
  var imgURLs = [
    'https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
     "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
  ];
  var randomIndex = Math.floor(Math.random() * imgURLs.length);
  var imgURL = imgURLs[randomIndex];

  
  
  setTimeout(function(){
      lightcase.start({
        href: imgURL,
        // more options like width, height, etc.
      });
   },1000); // 1000 to load it after 1 second from page load
  
});