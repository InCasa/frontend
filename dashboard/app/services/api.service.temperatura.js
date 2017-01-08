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

    function getTemperaturaND() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");                
        
        var encodedString = btoa(login+':'+senha);
        
        return $http.get('/backend/temperatura/1', {
            headers: {'Authorization': 'Basic '+encodedString}
        });
    }

    function putTemperaturaND(temperatura) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");                
        
        var encodedString = btoa(login+':'+senha);
        
        return $http.put('/backend/temperatura/update/1', temperatura, {
            headers: {'Authorization': 'Basic '+encodedString}
        });
    }

    return {
        getTemperatura: getTemperatura,
        getTemperaturaND: getTemperaturaND,
        putTemperaturaND: putTemperaturaND 
    };

}