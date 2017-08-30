/* variaveis*/


  /*OWL Carousel .INDEX*/
  $('.owl-carousel').owlCarousel({
   	    mouseDrag:false,
   	    loop:true,
	    margin:10,
	    autoplay:true,
      nav:false,
      navText:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	})

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:2,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
/* Efeito Logo topo*/
  $(document).ready(function(){
        
        $("#logo").on("mouseover",function(){
          $("#logo").addClass("efeito")
          $("#menu").addClass("efeito")
          $("#topo").addClass("efeito")
          $("#carousel").addClass("efeito")
        });

    });
