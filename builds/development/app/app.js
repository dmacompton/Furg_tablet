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
