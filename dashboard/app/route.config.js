RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig($stateProvider, $urlRouterProvider) {
	//Rota padrão
	$urlRouterProvider.otherwise("/dashboard");

	   $stateProvider

		//rota dashboard
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'app/views/dashboard.html',
			controller: require('./controllers/DashboardCtrl'),
			controllerAs: 'vmdash'
		})

		//rota sensor
		.state('sensor', {
			url: '/sensor',
			templateUrl: 'app/views/sensor.html',
			controller: require('./controllers/SensorCtrl'),
			controllerAs: 'vmdash'
		})

		//rota rele
		.state('rele', {
			url: '/rele',
			templateUrl: 'app/views/rele.html',
			controller: require('./controllers/ReleCtrl'),
			controllerAs: 'vmdash'
		})

		//rota config
		.state('config', {
			url: '/config',
			templateUrl: 'app/views/config.html',
			controller: require('./controllers/ConfigCtrl'),
			controllerAs: 'vmdash'
		})

}

module.exports = RouteConfig;