RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig($stateProvider, $urlRouterProvider)
	{ 	 
		//Rota padrão
       $urlRouterProvider.otherwise("/");
	   
	   $stateProvider
		
		//rota home
	   .state('home', {
		  url:'/home',
		  templateUrl : 'app/views/home.html',
		  controller  : require('./controllers/HomeCtrl'),
	   })
	 
		//rota sobre
	   .state('sobre', {
		  url:'/sobre',
		  templateUrl : 'app/views/sobre.html',
		  controller  : require('./controllers/SobreCtrl'),
	   })
	 
	   //rota login
	   .state('login', {
		  url:'/login',
		  templateUrl : 'app/views/login.html',
		  controller  : require('./controllers/LoginCtrl'),
	   })
	   
	   //rota cadastro
	   .state('cadastro', {
		  url: '/cadastro',
		  templateUrl : 'app/views/cadastro.html',
		  controller  : require('./controllers/CadastroCtrl'),
	   })
	 
	}
	module.exports = RouteConfig;