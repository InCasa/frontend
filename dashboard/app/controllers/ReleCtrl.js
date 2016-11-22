ReleController.$inject = ['$rootScope', '$location'];

function ReleController($rootScope, $location) {
	$rootScope.activetab = $location.path();	
		
}

module.exports = ReleController;