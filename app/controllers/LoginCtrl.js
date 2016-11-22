LoginController.$inject = ['$rootScope', '$location', 'ApiServiceUser'];

function LoginController($rootScope, $location, ApiServiceUser) {
	var vm = this;
	$rootScope.activetab = $location.path();
	
	vm.submit = function () {

		if (vm.login && vm.senha) {
			var user = { login: vm.login, senha: vm.senha };

			var login = ApiServiceUser.login(user)
				.then(function (login) {
					window.location.href = "https://localhost/frontend/dashboard";
				})
				.catch(function () {
					console.log('Erro ao buscar o usuario');
				})

		} else {
			return;
		}

	}
}

module.exports = LoginController;