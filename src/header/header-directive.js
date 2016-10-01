'use strict';

module.exports = function(ngModule) {

	ngModule.directive('header', function() {

		return {
			replace: true,
			template: require('./header.html'),
			controller: 'headerController'
		};
	});
};
