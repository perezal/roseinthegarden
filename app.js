

var main = function() {

// 	$('.content').hover(function() {
// 	
// 		$(this).hide(200);
// 	
// 	},function(){
// 		$(this).show(200);
// 	});

	if (window.innerWidth >= 1100) {
			$('.navbar').show(200);			
			$('.dropdown-menu').hide(200);
			$('.dropdown-toggle').hide(200);
		} else {
			$('.navbar').hide(200);
			$('.dropdown-toggle').show(200);
		};

	$(window).resize(function() {
		
		if (window.innerWidth >= 1100) {
			$('.navbar').show(200);			
			$('.dropdown-menu').hide(200);
			$('.dropdown-toggle').hide(200);
		} else {
			$('.navbar').hide(200);
			$('.dropdown-toggle').show(200);
		}
	});
	
	// $('.dropdown-toggle dropdown-menu').hover(
// 		function() {
// 		$('.dropdown-menu').show(400);
// 		},
// 		function() {
// 		$('.dropdown-menu').hide(400);
// 		}
// 	);
// 	
// 	$('.dropdown-menu').hover(function() {
// 	
// 		$('.dropdown-menu').show(400);
// 	});
// 	
// 	$(document).click(function() {
// 	
// 		$('.dropdown-menu').hide(400);
// 		
// 	});

	
// 	$('.menu li').hover(
// 		function() {
// 			$(this).toggleClass('hover');
// 	});
		
};

$(document).ready(main);



/*var secondary = function() {
	var currentItem = $('.nav-items li').first().animate({right: '0'}, 2000);
	for (x in $('.nav-items li')) {
		currentItem.animate({right: '0'}, 2000).delay(1000);
		currentItem = currentItem.next();
	};
};
window.onload = secondary;*/