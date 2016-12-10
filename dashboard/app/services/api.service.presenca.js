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

    return {
        getPresenca: getPresenca    
    };        
    
}