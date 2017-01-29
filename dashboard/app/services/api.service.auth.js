module.exports = ApiServiceAuth;

ApiServiceAuth.$inject = ['$http'];

function ApiServiceAuth($http) {
   
    function auth() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");                

        if(login == null || senha == null) {
            login = "vazio";
            senha = "vazio";
        }        

        var encodedString = btoa(login+':'+senha);
                
        return $http.get('/backend/userLogin', {
            headers: {'Authorization': 'Basic '+encodedString}
        }) ;
    }

    return {        
        auth: auth        
    };

}