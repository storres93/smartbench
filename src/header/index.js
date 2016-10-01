'use strict';

var angular = require('angular');

var ngModule = angular.module('header', []);

// these are the exposed top level angular components
require('./header-controller')(ngModule);
require('./header-directive')(ngModule);

module.exports = ngModule.name;
