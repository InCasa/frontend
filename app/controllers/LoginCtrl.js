LoginController.$inject = ['$rootScope', '$location', 'ApiServiceUser'];

function LoginController($rootScope, $location, ApiServiceUser) {
	var vm = this;
	$rootScope.activetab = $location.path();
	
	vm.submit = function () {

		if (vm.login && vm.senha) {
			var user = { login: vm.login, senha: vm.senha };

			var login = ApiServiceUser.login(user)
				.then(function (login) {
					console.log(login);
					console.log("login");
				})
				.catch(function () {
					console.log('Erro ao buscar o user');
				})

		} else {
			return;
		}

	}
}

module.exports = LoginController;