module.exports = ApiServiceAplicativo;

ApiServiceAplicativo.$inject = ['$http'];

function ApiServiceAplicativo($http) {

    function putApp(app) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");

        var encodedString = btoa(login + ':' + senha);

        return $http.put('/backend/aplicativo/update/1', app, {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    function getApp() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");

        if (login == null || senha == null) {
            login = "vazio";
            senha = "vazio";
        }

        var encodedString = btoa(login + ':' + senha);

        return $http.get('/backend/aplicativo/1', {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }
    
    return {
        putApp: putApp,
        getApp: getApp
    };
}