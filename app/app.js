var angular = require('angular');
var routeConfig = require('./route.config');

angular.module('app',[require('angular-ui-router')])
	.config(routeConfig)
	.factory('ApiService', require('./services/api.service'));