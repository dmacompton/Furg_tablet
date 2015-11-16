'use strict';

(function() {
	angular
		.module('ngFur', ['ngRoute'])
		.config(ngFurConfig)
		.controller('MainCtrl', MainCtrl);

	function ngFurConfig($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/main/main.html',
			controller: 'MainCtrl',
			controllerAs: 'vm'
		}).when('/about', {
			templateUrl: 'app/about/about.html',
		}).when('/cart', {
			templateUrl: 'app/cart/cart.html',
			controller: CartCtrl
		}).when('/contact', {
			templateUrl: 'app/contact/contact.html',
			controller: ContactCtrl
		}).when('/menu', {
			templateUrl: 'app/menu/menu.html',
			controller: MenuCtrl
		}).when('/news', {
			templateUrl: 'app/news/news.html',
			controller: NewsCtrl
		}).when('/order', {
			templateUrl: 'app/order/order.html',
			controller: OrderCtrl
		});
	}

	function MainCtrl($scope) {
		$scope.count = 0;
		$scope.$on('$includeContentLoaded', function () {
			$scope.count++;
			if ($scope.count == 5) {
				setInterval(function(){
					$('#loader').hide();
				}, 100);
			}
		});
	}
	function CartCtrl($scope){
		setInterval(function(){
			$('#loader').hide();
		}, 100);
	}
	function ContactCtrl($scope){
		setInterval(function(){
			$('#loader').hide();
		}, 100);
	}
	function MenuCtrl($scope) {
		$scope.h1 = 'Меню';
		setInterval(function(){
			$('#loader').hide();
		}, 100);
	}
	function NewsCtrl($scope){
		setInterval(function(){
			$('#loader').hide();
		}, 100);
	}
	function OrderCtrl($scope){
		setInterval(function(){
			$('#loader').hide();
		}, 100);
	}
})();

$(document).ready(function () {
	var showAnimation = true,
		definitionHeight = false,
		definitionBtnBlockUp = false,
		definitionBtnBlockDown = false,
		definitionHambBlockDown = false,
		definitionBotlBlockDown = false,
		definitionWogBlockDown = false;

	/////////////////////////// FIRST BLOCK START ///////////////////////////
	$(document).on('mousewheel DOMMouseScroll ', function (e) {
		if ($(window).scrollTop() == 0 && (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)) {
			// scroll up
			hidePage();
		} else if ($(window).scrollTop() == 0 && !(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)) {
			// scroll down
			showPage();
		}
	});
	$(document).on('keydown', function (e) {
		if (((e.which == 40 || e.which == 32 || e.which == 34) && $(window).scrollTop() == 0)) {
			showPage();
		}
	});
	$(document).on('click', '.arrow', function () {
		showPage();
	});
	function showPage() {
		$('#fullpage, footer').show();
		$('.main-first-block').addClass('anim').removeClass('anim-reverse');
		$('.main-second-block .main-second-block-row').addClass('animate-advantages');
	}

	function hidePage() {
		$('#fullpage, footer').hide();
		$('.main-first-block').removeClass('anim').addClass('anim-reverse');
		$('.main-second-block .main-second-block-row').removeClass('animate-advantages');
	}

	//-------------------------- FIRST BLOCK END --------------------------//
	var secBlckFixedPosBackUpData = '';
	
	$(window).scroll(function () {
		var topOfWindow = $(window).scrollTop(),
			windowHeight = $(window).height(),
			secBlckFixedPos = (windowHeight - 386) / 2 + 86 + $(document).scrollTop(),
			thirdBlockPosition = $('.main-third-block .row').offset().top;

		//header
		$('header').css('top', topOfWindow + 'px');
		$('.main-first-block').css('top', (topOfWindow + 86) + 'px');
		//header

		//FIRST BLOCK
		if ($(window).scrollTop() > 0) {
			showPage();
		} else {
			hidePage();
		}
		//FIRST BLOCK END


		/////////////////////////// SECOND BLOCK START ///////////////////////////
		if (windowHeight / 4 < topOfWindow) {
			if (!definitionHeight) {
				definitionHeight = topOfWindow;
			}
			var animationHeight = 104 - (topOfWindow - definitionHeight);

			if (animationHeight < 0) {
				secBlckFixedPos = secBlckFixedPos + animationHeight;
			}
			if (animationHeight < 0) {
				secBlckFixedPos += animationHeight * 1.5;
			}
			if(secBlckFixedPosBackUpData != secBlckFixedPos) {
				secBlckFixedPosBackUpData = secBlckFixedPos;
			}
		}
		$('.animate-advantages').css('top', secBlckFixedPos + 'px');
		//-------------------------- SECOND BLOCK END --------------------------//

		/////////////////////////// THIRD BLOCK START ///////////////////////////
		if(topOfWindow > 285 && topOfWindow < 500) {
			if (!definitionBtnBlockUp) definitionBtnBlockUp = parseInt($('.menu-btn').css('top'));

			var speed1 = parseInt((topOfWindow - 285) * 1.2);
			var top1 = definitionBtnBlockUp - speed1;
			$('.menu-btn').css('top', top1);
		} else if(topOfWindow > 501 && topOfWindow < 1200) {
			if (!definitionBtnBlockDown) definitionBtnBlockDown = parseInt($('.menu-btn').css('top'));

			var speed2 = parseInt((topOfWindow - 501) * 1.2);
			var top2 = definitionBtnBlockDown + speed2;
			$('.menu-btn').css('top', top2);
		}

		if(topOfWindow > 150 && topOfWindow < 1200) {
			if(topOfWindow > 400) {
				if (!definitionWogBlockDown) definitionWogBlockDown = parseInt($('#third-wog').css('top'));
				var speedWog = parseInt(topOfWindow - 400) * .7;
				$('#third-wog').css('top', definitionWogBlockDown + speedWog);

				if (!definitionHambBlockDown) definitionHambBlockDown = parseInt($('#third-hamburger').css('top'));
				var speedHamb = parseInt(topOfWindow - 400) * .75;
				$('#third-hamburger').css('top', definitionHambBlockDown + speedHamb);
			}

			if (!definitionBotlBlockDown) definitionBotlBlockDown = parseInt($('#third-bottle').css('top'));
			var speedBotl = parseInt(topOfWindow - 150) * .55;
			$('#third-bottle').css('top', definitionBotlBlockDown + speedBotl);
		}
		//if (thirdBlockPosition - windowHeight / 2 < topOfWindow) {
		//}
		//-------------------------- THIRD BLOCK END --------------------------//

		/////////////////////////// FOUTH BLOCK START ///////////////////////////
		if (showAnimation) {
			var imagePos = $('.main-fourth-block .row').offset().top;
			if (imagePos < topOfWindow + 300) {
				showAnimation = false;
				$('.main-fourth-block').addClass('animate-block-4');
			}
		}
		//-------------------------- FOUTH BLOCK END --------------------------//
	});
});
