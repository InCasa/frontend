app.controller('SobreCtrl', function($rootScope, $location) {
   $rootScope.activetab = $location.path();
});