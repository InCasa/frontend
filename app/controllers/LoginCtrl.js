LoginController.$inject = ['$rootScope', '$location'];

function LoginController($rootScope, $location) {
	$rootScope.activetab = $location.path();
}

module.exports = LoginController;