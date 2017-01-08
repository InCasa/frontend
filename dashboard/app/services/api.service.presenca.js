module.exports = ApiServicePresenca;

ApiServicePresenca.$inject = ['$http'];

function ApiServicePresenca($http) {

    function getPresenca() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");                
        
        var encodedString = btoa(login+':'+senha);
        
        return $http.get('/backend/presencaValor', {
            headers: {'Authorization': 'Basic '+encodedString}
        });
    }

     function getPresencaND() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");                
        
        var encodedString = btoa(login+':'+senha);
        
        return $http.get('/backend/presenca/1', {
            headers: {'Authorization': 'Basic '+encodedString}
        });
    }

    function putPresencaND(presenca) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");                
        
        var encodedString = btoa(login+':'+senha);
        
        return $http.put('/backend/presenca/update/1', presenca, {
            headers: {'Authorization': 'Basic '+encodedString}
        });
    }

    return {
        getPresenca: getPresenca,
        getPresencaND: getPresencaND,
        putPresencaND: putPresencaND
    };        
    
}