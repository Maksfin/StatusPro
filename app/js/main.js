var mainModule = (function() {
	// приватные св-ва и методы
	
	// прослушка событий
	var _setUpListners = function() {
		$('.nav-menu__item').on('click', _menuDrop);
		$('.burger').on('click', _controlSidebar);
		$('.seach').on('click', _displaySeach);
	},
		_menuDrop = function() {
			$this = $(this),
			container = $this.closest('.nav-menu__list'),
			items = container.find('.nav-menu__item'),
			drops = $('.nav-menu-drop__list'),
			back = drops.find('.nav-menu-drop__item:first'),
			duration = 300;

			items.fadeOut(duration, function() {
				drops.fadeIn(duration);
			});

			back.on('click', function() {
				drops.fadeOut(duration, function() {
					items.fadeIn(duration);

			});
		});
	},
		_controlSidebar = function() {
			$this = $(this),
			icon = $this.find('.burger__icon'),
			menu = $('.nav-menu__list'),
			menuDrop = $('.nav-menu-drop__list'),
			duration = 400;

			if(!$this.hasClass('active')) {
				menu.animate({'left' : '0px'}, duration);
				menuDrop.animate({'left' : '0px'}, duration);
				$this.addClass('active');
				icon.addClass('burger__icon_active');
				_displaySeach('close');

			} else {
				menu.animate({'left' : '-250px'}, duration);
				menuDrop.animate({'left' : '-250px'}, duration);
				$this.removeClass('active');
				icon.removeClass('burger__icon_active');
			}
		},
			_displaySeach = function(param) {
				link = $('.seach'),
				form = $('.form'),
				inputSeach = form.find('.form__seach'),
				duration = 400;

				if((link.hasClass('seach_active')) || (param == 'close')) {
					form.stop(true, true).slideUp(duration, function() {
						link.removeClass('seach_active');
					});
				} else {
					form.stop(true, true).slideDown(duration, function() {
						link.addClass('seach_active');
						inputSeach.focus();
					});
				}
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
 