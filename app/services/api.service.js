module.exports = ApiService;

ApiService.$inject = ['$http'];

function ApiService($http) {
    function getUser() {
        return $http.get('/backend/user');
    }       

    return {
        getUser: getUser
    };
}