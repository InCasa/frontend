LoginController.$inject = ['$rootScope', '$location', 'ApiServiceUser'];

function LoginController($rootScope, $location, ApiServiceUser) {
	var vm = this;
	$rootScope.activetab = $location.path();

	var keyPress = document.getElementById("inpSenha");
	keyPress.addEventListener("keydown", function (e) {
		if (e.keyCode === 13) {
			vm.submit();
		}
	});

	vm.submit = function () {

		if (vm.login && vm.senha) {
			var user = { login: vm.login, senha: vm.senha };

			var login = ApiServiceUser.login(user)
				.then(function (login) {
					localStorage.setItem("login", vm.login);
					localStorage.setItem("senha", vm.senha);
					window.location.href = "https://localhost/frontend/dashboard/#/";
				})
				.catch(function () {
					alert('Login ou senha incorretos');
					return;
				})

		} else {
			alert('Preencha os campos');
			return;
		}

	}
}

module.exports = LoginController;