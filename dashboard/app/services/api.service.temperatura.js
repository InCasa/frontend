module.exports = ApiServiceTemperatura;

ApiServiceTemperatura.$inject = ['$http'];

function ApiServiceTemperatura($http) {
    
    function getTemperatura() {
        return $http.get('/backend/temperaturaValor');
    }

    return {
        getTemperatura: getTemperatura    
    };



}