SobreController.$inject = ['$rootScope', '$location'];

function SobreController($rootScope, $location) {
	$rootScope.activetab = $location.path();
}

module.exports = SobreController;