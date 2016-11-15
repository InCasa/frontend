module.exports = ApiService;

ApiService.$inject = ['$http'];

function ApiService($http) {
    function getUser() {
        return $http.get('/backend/user');
    }

    function login(user) {
        return $http.post('/backend/user' , user);
    }

    return {
        getUser: getUser,
        login: login
    };



}