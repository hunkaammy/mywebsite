window.onload = function() {
  
  function setCurrentSlide(ele,index){
    $(".swiper1 .swiper-slide").removeClass("selected");
    ele.addClass("selected");
    //swiper1.initialSlide=index;
  }
  
  var swiper1 = new Swiper('.swiper1', {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true,
        loop: false,
        onTab:function(swiper){
          var n = swiper1.clickedIndex;
        }
    });
  swiper1.slides.each(function(index,val){
    var ele=$(this);
    ele.on("click",function(){
      alert('hi tab changed');
      setCurrentSlide(ele,index);
      swiper2.slideTo(index, 500, false);
      //mySwiper.initialSlide=index;
    });
  });
  
  
var swiper2 = new Swiper ('.swiper2', {
    direction: 'horizontal',
    loop: false,
    autoHeight: true,
    onSlideChangeEnd: function(swiper){
    
      var n=swiper.activeIndex;
      setCurrentSlide($(".swiper1 .swiper-slide").eq(n),n);
      swiper1.slideTo(n, 500, false);
    }
  });

  var Data="commentary，graphs,matchinfo，overbyover,relatedcontent";
	$(".start").on('click',function(){
		$(".show").html('');
		var flag = true,j = 0;
			//if(flag){
				//flag = false;
				(function Data(){
					if(j < Data.length){
						setTimeout(function(){
							$(".show").html(Data.slice(0,j++));
							Data();
						},200);
					}
					else{
						$(".show").html(Data);
						flag = true;
					}
				})();
			//}
	});
  
  
}