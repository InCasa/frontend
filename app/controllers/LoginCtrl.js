LoginController.$inject = ['$rootScope', '$location', 'ApiService'];

function LoginController($rootScope, $location, ApiService) {
	var vm = this;
	$rootScope.activetab = $location.path();	

	var user = ApiService.getUser()
		.then(function (user) {
			console.log(user.data);
		})
		.catch(function () {
			console.log('Erro ao buscar o user');
		})
		
	vm.submit = function () {
		console.log("Login: " + vm.login);
		console.log("Senha: " + vm.senha);
	}
}

module.exports = LoginController;