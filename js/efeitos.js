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

/*Chart serviço*/



var htmlDoughnut = document.getElementById("html").getContext("2d");
var cssDoughnut = document.getElementById("css").getContext("2d");
var jsDoughnut = document.getElementById("js").getContext("2d");

var htmlData = [
  {
    value: 90,
    color:"#74cfae"
  },
  {
    value : 10,
    color : "#f2f2f2"
  }
];

var cssData = [
  {
    value: 90,
    color:"#74cfae"
  },
  {
    value : 10,
    color : "#f2f2f2"
  }
];

var jsData = [
  {
    value: 90,
    color:"#74cfae"
  },
  {
    value : 10,
    color : "#f2f2f2"
  }
];


var myHTMLdoughnut = new Chart(htmlDoughnut).Doughnut(htmlData, {
  percentageInnerCutout : 80
});

var myCSSdoughnut = new Chart(cssDoughnut).Doughnut(cssData, {
  percentageInnerCutout : 80
});

var myJSdoughnut = new Chart(jsDoughnut).Doughnut(jsData, {
  percentageInnerCutout : 80
});