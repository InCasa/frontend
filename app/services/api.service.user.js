module.exports = ApiServiceUser;

ApiServiceUser.$inject = ['$http'];

function ApiServiceUser($http) {
    function getUser() {
        return $http.get('/backend/user');
    }

    function cadastro(user) {
        return $http.post('/backend/user' , user);
    }

    function login(user) {
        var encodedString = btoa(user.login+':'+user.senha);
        return $http.post('/backend/userLogin' , user, {
            headers: {'Authorization': encodedString}
        });
    }

    return {
        cadastro: cadastro,
        getUser: getUser,
        login: login
    };



}