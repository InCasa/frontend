SensorController.$inject = ['$rootScope', '$location', 'ApiServiceTemperatura', 'ApiServiceAuth'];

function SensorController($rootScope, $location, ApiServiceTemperatura, ApiServiceAuth) {
	var vmdash = this;
	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {
            console.log(auth);
            
			var temp = ApiServiceTemperatura.getTemperatura()
				.then(function (getTemperatura) {
					console.log(getTemperatura);
				})
				.catch(function () {
					console.log('Erro ao buscar a temperatura');
				})

		})
		.catch(function () {
			alert('Necessita estar logado!')
			window.location.href = "https://localhost/frontend/login";
		})

}

module.exports = SensorController;