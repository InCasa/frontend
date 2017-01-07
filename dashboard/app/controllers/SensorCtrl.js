SensorController.$inject = ['$scope', '$rootScope', '$location', 'ApiServiceTemperatura', 'ApiServiceUmidade', 'ApiServiceLuminosidade', 'ApiServicePresenca', 'ApiServiceAuth'];

function SensorController($scope, $rootScope, $location, ApiServiceTemperatura, ApiServiceUmidade, ApiServiceLuminosidade, ApiServicePresenca, ApiServiceAuth) {
	var vmsensor = this;
	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {
                        
			var temperatura = ApiServiceTemperatura.getTemperatura()
				.then(function (getTemperatura) {			                    					
					$scope.temperatura = getTemperatura.data;
				})
				.catch(function () {			 		
                    alert('Necessita estar logado!');
				})

			var umidade = ApiServiceUmidade.getUmidade()
				.then(function (getUmidade) {			
                    $scope.umidade = getUmidade.data;
				})
				.catch(function () {			 		
                    alert('Necessita estar logado!');
				})

			var luminosidade = ApiServiceLuminosidade.getLuminosidade()
				.then(function (getLuminosidade) {			
                    $scope.luminosidade = getLuminosidade.data;
				})
				.catch(function () {			 		
                    alert('Necessita estar logado!');
				})

			var presenca = ApiServicePresenca.getPresenca()
				.then(function (getPresenca) {			
					if(getPresenca.data.valor == 0) {
						$scope.presenca = "Sem movimento";	
					} else {
						$scope.presenca = "Movimento";
					}            
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