var angular = require('angular');
var routeConfig = require('./route.config');

angular.module('app',[require('angular-ui-router')])
	.config(routeConfig)
	.factory('ApiServiceTemperatura', require('./services/api.service.temperatura'))
    .factory('ApiServiceAuth', require('./services/api.service.auth'));