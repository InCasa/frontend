HomeController.$inject = ['$rootScope', '$location'];

function HomeController($rootScope, $location) {
	$rootScope.activetab = $location.path();
}

module.exports = HomeController;