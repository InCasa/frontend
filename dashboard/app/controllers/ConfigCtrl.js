ConfigController.$inject = ['$rootScope', '$location'];

function ConfigController($rootScope, $location) {
	$rootScope.activetab = $location.path();	
		
}

module.exports = ConfigController;