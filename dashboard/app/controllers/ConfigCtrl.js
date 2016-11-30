ConfigController.$inject = ['$rootScope', '$location', 'ApiServiceAuth'];

function ConfigController($rootScope, $location, ApiServiceAuth) {
	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {

		})
		.catch(function () {
			alert('Necessita estar logado!');
			window.location.href = "https://localhost/frontend/#/login";
		})

}

module.exports = ConfigController;