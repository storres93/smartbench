'use strict';

var _ = require('underscore');

module.exports = function(ngModule) {

	ngModule.controller('headerController', ['$scope', 'config', function($scope,config) {
		$scope.headerText = config.header.headerText;
	}]);
};