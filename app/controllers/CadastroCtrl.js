CadastroController.$inject = ['$rootScope', '$location', 'ApiService'];

function CadastroController($rootScope, $location, ApiService) {
	var vm = this;
	$rootScope.activetab = $location.path();

	vm.submit = function () {
		console.log("Nome: " + vm.nome);
		console.log("Login: " + vm.login);
		console.log("Senha: " + vm.senha);
		console.log("Confirmar Senha: " + vm.csenha);
	}
}

module.exports = CadastroController;