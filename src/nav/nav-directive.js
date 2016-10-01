'use strict';

module.exports = function(ngModule) {

	ngModule.directive('navbar', function() {

		return {
			replace: true,
			template: require('./nav.html'),
			controller: 'navController'
		};
	});
};
