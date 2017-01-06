var angular = require('angular');
var routeConfig = require('./route.config');

angular.module('app',[require('angular-ui-router')])
	.config(routeConfig)
	.factory('ApiServiceTemperatura', require('./services/api.service.temperatura'))
	.factory('ApiServiceUmidade', require('./services/api.service.umidade'))
	.factory('ApiServiceLuminosidade', require('./services/api.service.luminosidade'))
	.factory('ApiServicePresenca', require('./services/api.service.presenca'))
    .factory('ApiServiceAuth', require('./services/api.service.auth'))
	.factory('ApiServiceRele', require('./services/api.service.rele'))
	.factory('ApiServiceUser', require('./services/api.service.user'));