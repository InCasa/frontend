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

		if (vm.login && vm.senha)
			var user = { login: vm.login, senha: vm.senha };
		else return;

		var login = ApiService.login(user)
			.then(function (login) {
				console.log(login);
				console.log("login");
			})
			.catch(function () {
				console.log('Erro ao buscar o user');
			})
	}
}

module.exports = LoginController;