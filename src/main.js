'use strict';

var angular = require('angular');

var usedConfig = window.config.en;
var userLang = navigator.language || navigator.userLanguage;

if (userLang.indexOf('en-') == -1) {
	usedConfig = window.config.es;
}
angular.module("smartbench",[
	require('./nav'),
	require('./header'),
	require('./content')
]).constant('config', usedConfig);

window.onload = function() {
	angular.bootstrap(document, ['smartbench']);
};