$(document).ready(function(){

	$(window).resize(function(){location.reload();});
	var window_width = $(window).width();
	if(window_width < 480 ){

	 	$('.bg_video').removeAttr('autoplay');
	}
	//alert(aaaa);






	//menu
		$('.menuBtn').bind('click',function(e){
			e.preventDefault();
			$('.navbar-collapse').fadeToggle(300);
		});
	//collapse top head
		$(window).scroll(function(){
			var headerHeight = $(".mainHeader").outerHeight();			
			var scrollPos = $(window).scrollTop();			
			var windowWidth = $(window).width();
			
			//total height and width of windows
			console.log("Header height : "+headerHeight+" and Window Scroll Position : "+scrollPos+" and window width : "+windowWidth);
			
			if(scrollPos > headerHeight ){ //scroll position grater than hight
				$('.gotoTop').fadeIn();
				$(".topHeader").stop().slideUp();
				$(".mainHeader").css({"background":"rgba(0,0,0, .3)"});
				$(".navbar-default .navbar-nav>li>a").addClass("scrollClr");
					if(windowWidth < 768){
						$('.navul').css({"background":"rgba(0,0,0, .3)", 'top': headerHeight+'px'});
					}
				$(".navbar-default .navbar-nav>.active>a").addClass("hoverScroll");
			}
			else{
				$('.gotoTop').fadeOut();
				$(".topHeader").stop().slideDown();
				$(".mainHeader").css({'background':'transparent'});
				$(".navbar-default .navbar-nav>li>a").removeClass("scrollClr");
				$('.navul').css({'background':'transparent'});
				$(".navbar-default .navbar-nav>.active>a").removeClass("hoverScroll");		
			}
		});
	
	//scroll to top
			$('.gotoTop').click('click', function () {
					$('body,html').animate({ scrollTop: 0 }, 800);
					return false;
			});
			
	//section click
		var headerHeight = $(".mainHeader").outerHeight();
		var featureOffset = $('.featuresSection').offset().top;
		console.log("feature ofset top : "+featureOffset);
		
		$('.features').bind('click',function(){
			
			$('.featuresSection').css({'padding-top': headerHeight+'px'});
			$('body,html').animate({ scrollTop: featureOffset }, 800);
		});
		$('.bannerBottomInfo>img').bind('click',function(){
			$('.featuresSection').css({'padding-top': headerHeight+'px'});
			$('body,html').animate({ scrollTop: featureOffset}, 800);
					return false;
		});
		
	//contact parallex
		
		$('.gotoTop').hover(function(){
			$('.gotoList').stop().slideToggle();
		});
		$('.Features').bind('click',function(){
			$('.featuresSection').css({'padding-top': headerHeight+'px'})
			$('body,html').animate({ scrollTop: featureOffset }, 800);
					return false;
		});
		$('.home').bind('click',function(){
			$('body,html').animate({ scrollTop: 0 }, 800);
					return false;
		});
		
		// feature section popup
		
		$('.featureBox').bind('click',showPopup);
		$('.close_popup').bind('click',hidePopup);
		$('.close_popup').hover(blurPopup);		
		
		
		//navbar clicks
		
		$('.online').bind('click',gotoOnline);
		$('.paperless').bind('click',gotoPaper);
		
		
		//try button click popup
		
		$(".tryBtn").bind('click',function(){
			$(".pop2").fadeIn();		
		});
		$(".close_popup2").bind('click',closePop2);
		
		//3d carousel section
			
				
				
		
		//end of 3d carousel section
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
});

function blurPopup(){
	$('.popupInner').toggleClass('blurPopup');
}

function showPopup(){
	$('.popupSection').fadeIn();
	var name = $(this).attr('name');
	$('.popupInfo').find('h1').text(name);
}
//close poup 1
function hidePopup(){
	$('.popupSection').fadeOut();
}
//close pop 2
function closePop2(){
	$('.pop2').fadeOut();
}
//goto online section
function gotoOnline(){
	var headerHeight = $(".mainHeader").innerHeight();
	var onlineBookingOffset = $('.onlineBooking').offset().top;
	$('body,html').animate({ scrollTop: onlineBookingOffset - headerHeight }, 800);	
}
//goto paper section
function gotoPaper(){
	var headerHeight = $(".mainHeader").innerHeight();
	var tabMobileOffset = $('.tabMobile').offset().top;
	$('body,html').animate({ scrollTop: tabMobileOffset - headerHeight }, 800);	
}


