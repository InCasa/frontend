module.exports = ApiServiceUmidade;

ApiServiceUmidade.$inject = ['$http'];

function ApiServiceUmidade($http) {        
    
    function getUmidade() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");                
        
        var encodedString = btoa(login+':'+senha);
        
        return $http.get('/backend/umidadeValor', {
            headers: {'Authorization': 'Basic '+encodedString}
        });
    }

    function getUmidadeND() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");                
        
        var encodedString = btoa(login+':'+senha);
        
        return $http.get('/backend/umidade/1', {
            headers: {'Authorization': 'Basic '+encodedString}
        });
    }

    function putUmidadeND(umidade) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");                
        
        var encodedString = btoa(login+':'+senha);
        
        return $http.put('/backend/umidade/update/1', umidade, {
            headers: {'Authorization': 'Basic '+encodedString}
        });
    }

    return {
        getUmidade: getUmidade,
        getUmidadeND: getUmidadeND,
        putUmidadeND: putUmidadeND
    };

}