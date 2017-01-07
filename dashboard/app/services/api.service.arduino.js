module.exports = ApiServiceArduino;

ApiServiceArduino.$inject = ['$http'];

function ApiServiceArduino($http) {
   
    function putArduino(arduino) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");

        var encodedString = btoa(login + ':' + senha);

        return $http.put('/backend/arduino/update/1', arduino, {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    function getArduino() {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("senha");

        if (login == null || senha == null) {
            login = "vazio";
            senha = "vazio";
        }

        var encodedString = btoa(login + ':' + senha);

        return $http.get('/backend/arduino/1', {
            headers: { 'Authorization': 'Basic ' + encodedString }
        });
    }

    return {
        putArduino: putArduino,
        getArduino: getArduino        
    };

}