RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig($stateProvider, $urlRouterProvider)
	{ 	 
		//Rota padrão
       $urlRouterProvider.otherwise("/home");
	   
	   $stateProvider
		
		//rota home
	   .state('home', {
		  url:'/home',
		  templateUrl : 'app/views/home.html',
		  controller  : require('./controllers/HomeCtrl'),
		  controllerAs: 'vm'
	   })	
	 
	   //rota login
	   .state('login', {
		  url:'/login',
		  templateUrl : 'app/views/login.html',
		  controller  : require('./controllers/LoginCtrl'),
		  controllerAs: 'vm'
	   })
	   
	   //rota cadastro
	   .state('cadastro', {
		  url: '/cadastro',
		  templateUrl : 'app/views/cadastro.html',
		  controller  : require('./controllers/CadastroCtrl'),
		  controllerAs: 'vm'
	   })
	 
	}
	module.exports = RouteConfig;