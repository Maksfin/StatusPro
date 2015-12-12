var mainModule = (function() {
	// приватные св-ва и методы 
	
	// прослушка событий
	// var _setUpListners = function() {
	// 	$('.header-top').on('mouseenter', _menuOpen);
	// },

		_menuAction = function() {
			$('.head-bottom').slideToggle('fast');
		};

	// публичные св-ва и методы
	return {
		init : function () {
			$('.header-top').on('click', _menuAction);
		} 
	};

})();

$(document).ready(function($) {

	if($('.header').length) {
		mainModule.init();
	};

 $('.slider').bxSlider({
 	controls: false,
 	auto: true,
 });
 	
}); // --> end
 