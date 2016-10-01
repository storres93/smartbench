'use strict';

module.exports = function(ngModule) {

	ngModule.directive('content', function() {

		return {
			replace: true,
			template: require('./content.html'),
			controller: 'contentController'
		};
	});
};
