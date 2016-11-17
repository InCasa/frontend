CadastroController.$inject = ['$rootScope', '$location', 'ApiServiceUser'];

function CadastroController($rootScope, $location, ApiServiceUser) {
	var vm = this;
	$rootScope.activetab = $location.path();

	vm.submit = function () {	

		if (vm.nome && vm.login && vm.senha && vm.csenha) {
			if (vm.senha == vm.csenha) {
				var user = { nome: vm.nome, login: vm.login, senha: vm.senha };

				var login = ApiServiceUser.cadastro(user)
					.then(function (cadastro) {
						console.log(cadastro);
						console.log("cadastrado!");
					})
					.catch(function () {
						console.log('Erro ao buscar o user');
					})

			} else {
				alert("As senha devem ser iguais!");
				return;
			}
		} else {
			alert("Preencha todos os campos!");
			return;
		}

	}
}

module.exports = CadastroController;