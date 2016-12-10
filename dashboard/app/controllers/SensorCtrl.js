SensorController.$inject = ['$rootScope', '$location', 'ApiServiceTemperatura', 'ApiServiceUmidade', 'ApiServiceLuminosidade', 'ApiServicePresenca', 'ApiServiceAuth'];

function SensorController($rootScope, $location, ApiServiceTemperatura, ApiServiceUmidade, ApiServiceLuminosidade, ApiServicePresenca, ApiServiceAuth) {
	var vmdash = this;
	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {
                        
			var temperatura = ApiServiceTemperatura.getTemperatura()
				.then(function (getTemperatura) {			
                    //Lógica json
				})
				.catch(function () {			 		
                    alert('Necessita estar logado!');
				})

			var umidade = ApiServiceTemperatura.getTemperatura()
				.then(function (getTemperatura) {			
                    //Lógica json
				})
				.catch(function () {			 		
                    alert('Necessita estar logado!');
				})

			var luminosidade = ApiServiceTemperatura.getTemperatura()
				.then(function (getTemperatura) {			
                    //Lógica json
				})
				.catch(function () {			 		
                    alert('Necessita estar logado!');
				})

			var presenca = ApiServiceTemperatura.getTemperatura()
				.then(function (getTemperatura) {			
                    //Lógica json
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

module.exports = SensorController;