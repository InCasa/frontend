CadastroController.$inject = ['$rootScope', '$location'];

function CadastroController($rootScope, $location) {
	$rootScope.activetab = $location.path();
}

module.exports = CadastroController;