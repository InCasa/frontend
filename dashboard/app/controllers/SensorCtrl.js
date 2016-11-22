SensorController.$inject = ['$rootScope', '$location'];

function SensorController($rootScope, $location) {
	$rootScope.activetab = $location.path();	
		
}

module.exports = SensorController;