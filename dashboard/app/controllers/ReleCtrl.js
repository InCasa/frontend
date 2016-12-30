ReleController.$inject = ['$rootScope', '$location', 'ApiServiceAuth', 'ApiServiceRele'];

function ReleController($rootScope, $location, ApiServiceAuth, ApiServiceRele) {
	var vmdash = this;
	$rootScope.activetab = $location.path();	

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {			

			var rele1 = ApiServiceRele.getRele(1)
				.then(function (getRele) {
					console.log(getRele);	
				})
				.catch(function () {
					alert('Necessita estar logado!');
				})

		})
		.catch(function () {
			alert('Necessita estar logado!');
			window.location.href = "https://localhost/frontend/#/login";
		})

}

module.exports = ReleController;