module.exports = ApiServiceUser;

ApiServiceUser.$inject = ['$http'];

function ApiServiceUser($http) {

    function getID(user) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");

        if (login == null || senha == null) {
            login = "vazio";
            senha = "vazio";
        }

        var encodedString = btoa(login + ':' + senha);

        return $http.post('/backend/userID', user, {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    function getUser(id) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");

        if (login == null || senha == null) {
            login = "vazio";
            senha = "vazio";
        }

        var encodedString = btoa(login + ':' + senha);

        return $http.get('/backend/user/' + id, {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    function putUser(user) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");

        if (login == null || senha == null) {
            login = "vazio";
            senha = "vazio";
        }

        var encodedString = btoa(login + ':' + senha);

        return $http.put('/backend/user/update/', user, {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    return {
        getID: getID,
        getUser: getUser,
        putUser: putUser
    };

}