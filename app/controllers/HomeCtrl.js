HomeController.$inject = ['$rootScope', '$location', 'ApiService'];

function HomeController($rootScope, $location, ApiService) {
	$rootScope.activetab = $location.path();
	var user = ApiService.getUser()
		.then(function(user) {
			console.log(user.data);
		})
		.catch(function() {
			console.log('Erro ao buscar o user');
		})
}

module.exports = HomeController;