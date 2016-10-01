'use strict';

var angular = require('angular');

var ngModule = angular.module('smartbench.nav', []);

// these are the exposed top level angular components
require('./nav-controller')(ngModule);
require('./nav-directive')(ngModule);

module.exports = ngModule.name;
