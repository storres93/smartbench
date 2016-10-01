'use strict';

var angular = require('angular');

var ngModule = angular.module('content', []);

// these are the exposed top level angular components
require('./content-controller')(ngModule);
require('./content-directive')(ngModule);

module.exports = ngModule.name;
