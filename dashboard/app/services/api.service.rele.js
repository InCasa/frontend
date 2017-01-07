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

    function postRele(rele) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");
    
        var encodedString = btoa(login + ':' + senha);
      
        return $http.post('/backend/releValor', rele, {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    function getReleValorAll() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");
    
        var encodedString = btoa(login + ':' + senha);

        return $http.get('/backend/releValor', {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    function getReleND(id) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");
    
        var encodedString = btoa(login + ':' + senha);

        return $http.get('/backend/rele/' + id, {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    return {
        getRele: getRele,
        postRele: postRele,
        getReleValorAll: getReleValorAll,
        getReleND: getReleND
    };

}