// MOBILE MENU ACTIVATION

function openNav(){
    document.getElementById("menu-overlay").style.opacity="1";
    document.getElementById("menu-overlay").style.visibility="visible";
    
};
function closeNav(){
	document.getElementById("menu-overlay").style.opacity="0";
	document.getElementById("menu-overlay").style.visibility="hidden";
};
/* STICKY NAVBAR*/
$(window).scroll(function(){
    if($(window).scrollTop() > 0){
        $('header').addClass('sticky');
    }
    else{
        $('header').removeClass('sticky');
    }
});

/* BOTTOM TO TOP BUTTON ACTIVATE*/
$("i.go-to-top").hide();
  $(window).on("scroll", function(){
    	if($(window).scrollTop() > 700){
    		$("i.go-to-top").show("fast");
    	}
      else{
    		$("i.go-to-top").hide("fast");
    	}
    });
    //GO TOP SCROLL FUNCTIONs
    $("i.go-to-top").click(function(){
    	$("html,body").animate({'scrollTop':0 },2000);
    	return false;
    });
/*  WOW.JS ACTIVATION */
new WOW().init();