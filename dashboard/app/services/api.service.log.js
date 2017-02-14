module.exports = ApiServiceLog;

ApiServiceLog.$inject = ['$http'];

function ApiServiceLog($http) {

    function paginacao($limit, $offset) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");

        if (login == null || senha == null) {
            login = "vazio";
            senha = "vazio";
        }

        var encodedString = btoa(login + ':' + senha);

        return $http.get('/backend/releValor/' + $limit + '/' + $offset + '', {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    return {
        paginacao: paginacao
    };
}