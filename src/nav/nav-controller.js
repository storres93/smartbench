'use strict';

var $ = require('jQuery');

module.exports = function(ngModule) {

	/**
	 * Nav controller
	 */
	ngModule.controller('navController', ['$scope', 'config', function($scope,config) {

		$scope.toggleActive = function($event) {
			$($event.currentTarget).parent().find(".active").removeClass("active");
			$($event.currentTarget).addClass("active");
		}

		$scope.firstNav = config.nav.firstNav;
		$scope.secondNav = config.nav.secondNav;
		$scope.thirdNav = config.nav.thirdNav;
	}]);
};
