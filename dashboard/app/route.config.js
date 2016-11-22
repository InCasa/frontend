RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig($stateProvider, $urlRouterProvider)
	{ 	 
		//Rota padrão
       $urlRouterProvider.otherwise("/dashboard");
	   
	   $stateProvider
		
		//rota home
	   .state('sensor', {
		  url:'/sensor',
		  templateUrl : 'app/views/sensor.html',
		  controller  : require('./controllers/SensorCtrl'),
		  controllerAs: 'vmdash'
	   })	
	 
	   //rota login
	   .state('rele', {
		  url:'/rele',
		  templateUrl : 'app/views/rele.html',
		  controller  : require('./controllers/ReleCtrl'),
		  controllerAs: 'vmdash'
	   })
	   
	   //rota cadastro
	   .state('config', {
		  url: '/config',
		  templateUrl : 'app/views/config.html',
		  controller  : require('./controllers/ConfigCtrl'),
		  controllerAs: 'vmdash'
	   })
	 
	}
	module.exports = RouteConfig;