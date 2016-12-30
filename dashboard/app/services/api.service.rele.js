module.exports = ApiServiceRele;

ApiServiceRele.$inject = ['$http'];

function ApiServiceRele($http) {
    
    function getRele($id) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");
    
        var encodedString = btoa(login + ':' + senha);
      
        return $http.get('/backend/releValor/' + $id, {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    return {
        getRele: getRele
    };

}