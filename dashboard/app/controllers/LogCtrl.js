LogController.$inject = ['$scope', '$rootScope', '$location', 'ApiServiceAuth', 'ApiServiceRele'];

function LogController($scope, $rootScope, $location, ApiServiceAuth, ApiServiceRele) {
	var vmlog = this;
	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {

			ApiServiceRele.getReleValorAll()
				.then(function (getReleValorAll) {
					$scope.rele = getReleValorAll.data;
				})
				.catch(function () {
					alert('Erro ao carregar a tabela!');
				})		

		})
		.catch(function () {
			alert('Necessita estar logado!');
			window.location.href = "https://localhost/frontend/#/login";
		})

}

module.exports = LogController;