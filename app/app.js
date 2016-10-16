var app = angular.module('app',['ngRoute']);
 
app.config(function($routeProvider, $locationProvider)
{ 
 
   $routeProvider
    
    //rota home
   .when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'HomeCtrl',
   })
 
    //rota sobre
   .when('/sobre', {
      templateUrl : 'app/views/sobre.html',
      controller  : 'SobreCtrl',
   })
 
   //rota login
   .when('/login', {
      templateUrl : 'app/views/login.html',
      controller  : 'LoginCtrl',
   })
   
   //rota cadastro
   .when('/cadastro', {
      templateUrl : 'app/views/cadastro.html',
      controller  : 'CadastroCtrl',
   })
 
    //rota else
   .otherwise ({ redirectTo: '/' });
});