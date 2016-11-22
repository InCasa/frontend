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
        return $http.post('/backend/userLogin' , user);
    }

    return {
        cadastro: cadastro,
        getUser: getUser,
        login: login
    };



}