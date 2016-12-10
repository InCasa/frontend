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

    return {
        getUmidade: getUmidade    
    };

}