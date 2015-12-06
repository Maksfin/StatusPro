var mainModule = (function() {
	// приватные св-ва и методы
	
	// прослушка событий
	var _setUpListners = function() {
		$('.menu').on('mouseenter', _menuOpen);
	},
		_menuOpen = function() {

		};

	// публичные св-ва и методы
	return {
		init : function() {
			_setUpListners();
		}
	};
})();

$(document).ready(function($) {

 if ($('.nav-menu__list').length || $('.form').length) {
 		mainModule.init();
 	}
}); // --> end
 