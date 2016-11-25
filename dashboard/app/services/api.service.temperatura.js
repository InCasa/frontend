module.exports = ApiServiceTemperatura;

ApiServiceTemperatura.$inject = ['$http'];

function ApiServiceTemperatura($http) {        
    
    function getTemperatura() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");                
        
        var encodedString = btoa(login+':'+senha);
        
        return $http.get('/backend/temperaturaValor', {
            headers: {'Authorization': 'Basic '+encodedString}
        });
    }

    return {
        getTemperatura: getTemperatura    
    };



}