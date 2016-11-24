SensorController.$inject = ['$rootScope', '$location', 'ApiServiceTemperatura'];

function SensorController($rootScope, $location, ApiServiceTemperatura) {
	var vmdash = this;
	$rootScope.activetab = $location.path();

	var temp = ApiServiceTemperatura.getTemperatura()
		.then(function (getTemperatura) {
			console.log(getTemperatura);
		})
		.catch(function () {
			console.log('Erro ao buscar a temperatura');
		})

}

module.exports = SensorController;