module.exports = ApiServiceLuminosidade;

ApiServiceLuminosidade.$inject = ['$http'];

function ApiServiceLuminosidade($http) {

    function getLuminosidade() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");

        var encodedString = btoa(login + ':' + senha);

        return $http.get('/backend/luminosidadeValor', {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    function getLuminosidadeND() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");

        var encodedString = btoa(login + ':' + senha);

        return $http.get('/backend/luminosidade/1', {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    return {
        getLuminosidade: getLuminosidade,
        getLuminosidadeND: getLuminosidadeND
    };
    
}