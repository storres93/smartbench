'use strict';

var _ = require('underscore');

module.exports = function(ngModule) {

	ngModule.controller('contentController', ['$scope', 'config', function($scope,config) {
		$scope.firstBoxHeader = config.content.firstBoxHeader;
		$scope.secondBoxHeader = config.content.secondBoxHeader;
		$scope.thirdBoxHeader = config.content.thirdBoxHeader;
		$scope.firstBoxText = config.content.firstBoxText;
		$scope.secondBoxText = config.content.secondBoxText;
		$scope.thirdBoxText = config.content.thirdBoxText;

		$scope.firstPersonText = config.content.firstPersonText;
		$scope.secondPersonText = config.content.secondPersonText;
		$scope.thirdPersonText = config.content.thirdPersonText;
		$scope.fourthPersonText = config.content.fourthPersonText;
		$scope.fifthPersonText = config.content.fifthPersonText;

		$scope.firstPersonName = config.content.firstPersonName;
		$scope.secondPersonName = config.content.secondPersonName;
		$scope.thirdPersonName = config.content.thirdPersonName;
		$scope.fourthPersonName = config.content.fourthPersonName;
		$scope.fifthPersonName = config.content.fifthPersonName;

		$scope.firstProfPic = config.content.firstProfPic;
		$scope.secondProfPic = config.content.secondProfPic;
		$scope.thirdProfPic = config.content.thirdProfPic;
		$scope.fourthProfPic = config.content.fourthProfPic;
		$scope.fifthProfPic = config.content.fifthProfPic;
	}]);
};