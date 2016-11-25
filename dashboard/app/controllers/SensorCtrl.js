SensorController.$inject = ['$rootScope', '$location', 'ApiServiceTemperatura', 'ApiServiceAuth'];

function SensorController($rootScope, $location, ApiServiceTemperatura, ApiServiceAuth) {
	var vmdash = this;
	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {
                        
			var temp = ApiServiceTemperatura.getTemperatura()
				.then(function (getTemperatura) {			
                    //Lógica json
				})
				.catch(function () {			 		
                    alert('Necessita estar logado!');
				})

		})
		.catch(function () {
			alert('Necessita estar logado!');
			window.location.href = "https://localhost/frontend/login";
		})

}

module.exports = SensorController;