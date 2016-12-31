ReleController.$inject = ['$scope', '$rootScope', '$location', 'ApiServiceAuth', 'ApiServiceRele'];

function ReleController($scope, $rootScope, $location, ApiServiceAuth, ApiServiceRele) {
	var vmdash = this;
	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {

			//Busca o status do rele e o ativa ou não
			var rele1 = ApiServiceRele.getRele(1)
				.then(function (getRele) {
					if (getRele.data.valor == 0) {
						document.getElementById("cmn-toggle-1").checked = false;
					} else {
						document.getElementById("cmn-toggle-1").checked = true;
					}


				})
				.catch(function () {
					alert('Necessita estar logado!');
				})

			var rele2 = ApiServiceRele.getRele(2)
				.then(function (getRele) {
					if (getRele.data.valor == 0) {
						document.getElementById("cmn-toggle-2").checked = false;
					} else {
						document.getElementById("cmn-toggle-2").checked = true;
					}


				})
				.catch(function () {
					alert('Necessita estar logado!');
				})

			var rele3 = ApiServiceRele.getRele(3)
				.then(function (getRele) {
					if (getRele.data.valor == 0) {
						document.getElementById("cmn-toggle-3").checked = false;
					} else {
						document.getElementById("cmn-toggle-3").checked = true;
					}


				})
				.catch(function () {
					alert('Necessita estar logado!');
				})

			var rele4 = ApiServiceRele.getRele(4)
				.then(function (getRele) {
					if (getRele.data.valor == 0) {
						document.getElementById("cmn-toggle-4").checked = false;
					} else {
						document.getElementById("cmn-toggle-4").checked = true;
					}


				})
				.catch(function () {
					alert('Necessita estar logado!');
				})

			//Função click no checkbox, para enviar as mudanças no rele
			vmdash.rele1 = function () {
				if (document.getElementById("cmn-toggle-1").checked) {					
					var rele = { valor: true, idRele: 1 };

					ApiServiceRele.postRele(rele)
						.then(function () {
							alert('Rele 1 ligado!');
						})
						.catch(function () {
							alert('Erro no Server!');
						})

				} else {
					var rele = { valor: false, idRele: 1 };					

					ApiServiceRele.postRele(rele)
						.then(function () {
							alert('Rele 1 desligado!');
						})
						.catch(function () {
							alert('Erro no Server!');
						})
				}
			}

			vmdash.rele2 = function () {
				if (document.getElementById("cmn-toggle-2").checked) {					
					var rele = { valor: true, idRele: 2 };

					ApiServiceRele.postRele(rele)
						.then(function () {
							alert('Rele 2 ligado!');
						})
						.catch(function () {
							alert('Erro no Server!');
						})

				} else {
					var rele = { valor: false, idRele: 2 };					

					ApiServiceRele.postRele(rele)
						.then(function () {
							alert('Rele 2 desligado!');
						})
						.catch(function () {
							alert('Erro no Server!');
						})
				}
			}

			vmdash.rele3 = function () {
				if (document.getElementById("cmn-toggle-3").checked) {					
					var rele = { valor: true, idRele: 3 };

					ApiServiceRele.postRele(rele)
						.then(function () {
							alert('Rele 3 ligado!');
						})
						.catch(function () {
							alert('Erro no Server!');
						})

				} else {
					var rele = { valor: false, idRele: 3 };					

					ApiServiceRele.postRele(rele)
						.then(function () {
							alert('Rele 3 desligado!');
						})
						.catch(function () {
							alert('Erro no Server!');
						})
				}
			}

			vmdash.rele4 = function () {
				if (document.getElementById("cmn-toggle-4").checked) {					
					var rele = { valor: true, idRele: 4 };

					ApiServiceRele.postRele(rele)
						.then(function () {
							alert('Rele 4 ligado!');
						})
						.catch(function () {
							alert('Erro no Server!');
						})

				} else {
					var rele = { valor: false, idRele: 4 };					

					ApiServiceRele.postRele(rele)
						.then(function () {
							alert('Rele 4 desligado!');
						})
						.catch(function () {
							alert('Erro no Server!');
						})
				}
			}

		})
		.catch(function () {
			alert('Necessita estar logado!');
			window.location.href = "https://localhost/frontend/#/login";
		})

}

module.exports = ReleController;