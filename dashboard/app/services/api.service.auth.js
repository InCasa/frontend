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

        console.log(login);
        console.log(senha);

        var encodedString = btoa(login+':'+senha);
                
        return $http.post('/backend/userLogin', {
            headers: {'Authorization': 'Basic '+encodedString}
        }) ;
    }

    return {        
        auth: auth        
    };



}