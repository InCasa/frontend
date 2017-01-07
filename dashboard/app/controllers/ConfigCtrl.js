ConfigController.$inject = ['$rootScope', '$location', 'ApiServiceAuth', 'ApiServiceUser', 'ApiServiceAplicativo', 'ApiServiceArduino'];

function ConfigController($rootScope, $location, ApiServiceAuth, ApiServiceUser, ApiServiceAplicativo, ApiServiceArduino) {
	var vmdash = this;
	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {

			//Parte responsável pela tab do arduino
			carregaArduino();


			var keyPress = document.getElementById("inpArduinoPinRele4");
			keyPress.addEventListener("keydown", function (e) {
				if (e.keyCode === 13) {
					vmdash.submitArduino();
				}
			});

			vmdash.submitArduino = function () {

				console.log(vmdash.arduinoIP);
				console.log(vmdash.arduinoMAC);
				console.log(vmdash.arduinoGateway);
				console.log(vmdash.arduinoMask);
				console.log(vmdash.arduinoPorta);
				console.log(vmdash.arduinoPinTempUmi);
				console.log(vmdash.arduinoPinRele1);
				console.log(vmdash.arduinoPinRele2);
				console.log(vmdash.arduinoPinRele3);
				console.log(vmdash.arduinoPinRele4);
				console.log(vmdash.arduinoPinLumi);
				console.log(vmdash.arduinoPinPresenca);

				if (vmdash.arduinoIP && vmdash.arduinoMAC && vmdash.arduinoGateway && vmdash.arduinoMask
					&& vmdash.arduinoPorta && vmdash.arduinoPinTempUmi && vmdash.arduinoPinLumi
					&& vmdash.arduinoPinPresenca && vmdash.arduinoPinRele1 && vmdash.arduinoPinRele2
					&& vmdash.arduinoPinRele3 && vmdash.arduinoPinRele4) {

					var arduino = {
						ip: vmdash.arduinoIP, mac: vmdash.arduinoMAC, gateway: vmdash.arduinoGateway, mask: vmdash.arduinoMask,
						porta: vmdash.arduinoPorta, PinoDHT: vmdash.arduinoPinTempUmi, PinoRele1: vmdash.arduinoPinRele1, PinoRele2: vmdash.arduinoPinRele2,
						PinoRele3: vmdash.arduinoPinRele3, PinoRele4: vmdash.arduinoPinRele4, PinoLDR: vmdash.arduinoPinLumi, PinoPresenca: vmdash.arduinoPinPresenca
					};

					ApiServiceArduino.putArduino(aarduino)
						.then(function (putArduino) {
							alert('Dados atualizados, por favor faça login!');
							carregaArduino();
						})
						.catch(function () {
							alert('Erro ao atualizar dados!');
						})

				} else {
					alert("Preencha os campos");
					return;
				}
			}

			vmdash.limparArduino = function () {
				carregaArduino();
			}

			//Parte responsável pela tab do aplicativo
			carregaApp();

			var keyPress = document.getElementById("inpMAC");
			keyPress.addEventListener("keydown", function (e) {
				if (e.keyCode === 13) {
					vmdash.submitApp();
				}
			});

			vmdash.submitApp = function () {
				if (vmdash.appNome && vmdash.appMAC) {
					var app = { nome: vmdash.appNome, mac: vmdash.appMAC };

					ApiServiceAplicativo.putApp(app)
						.then(function (putApp) {
							alert('Dados atualizados, por favor faça login!');
							carregaApp();
						})
						.catch(function () {
							alert('Erro ao atualizar dados!');
						})

				} else {
					alert("Preencha os campos");
					return;
				}
			}

			vmdash.limparApp = function () {
				carregaApp();
			}

			//Parte responsável pela tab de user
			carregaUser();

			var keyPress = document.getElementById("inpSenha");
			keyPress.addEventListener("keydown", function (e) {
				if (e.keyCode === 13) {
					vmdash.submitUser();
				}
			});

			vmdash.submitUser = function () {
				if (vmdash.userNome && vmdash.userLogin && vmdash.userSenha) {
					var user = { login: vmdash.userLogin, senha: vmdash.userSenha };

					var getID = ApiServiceUser.getID(user)
						.then(function (getID) {
							var id = getID.data.id;

							user = { nome: vmdash.userNome, login: vmdash.userLogin, senha: vmdash.userSenha };

							var putUser = ApiServiceUser.putUser(id, user)
								.then(function (putUser) {
									alert('Dados atualizados, por favor faça login!');
									window.location.href = "https://localhost/frontend/#/login";
								})
								.catch(function () {
									alert('Erro ao atualizar dados!');
								})

						})
						.catch(function () {
							alert('Erro ao buscar dados!');
						})
				} else {
					alert("Preencha os campos");
					return;
				}

			}

			vmdash.limparUser = function () {
				carregaUser();
			}

		})
		.catch(function () {
			alert('Necessita estar logado!');
			window.location.href = "https://localhost/frontend/#/login";
		})

	function carregaUser() {
		var user = { login: localStorage.getItem("login"), senha: localStorage.getItem("senha") };

		var getID = ApiServiceUser.getID(user)
			.then(function (getID) {
				var id = getID.data[0].id;
				var getUser = ApiServiceUser.getUser(id)
					.then(function (getUser) {
						document.getElementById("inpNome").value = "" + getUser.data.nome;
						document.getElementById("inpLogin").value = "" + getUser.data.login;
					})
					.catch(function () {
						alert('Erro ao atualizar dados!');
					})

			})
			.catch(function () {
				alert('Erro ao atualizar dados!');
			})
	}

	function carregaApp() {

		ApiServiceAplicativo.getApp()
			.then(function (getApp) {
				document.getElementById("inpAppNome").value = "" + getApp.data.nome;
				document.getElementById("inpMAC").value = "" + getApp.data.mac;
			})
			.catch(function () {
				alert('Erro ao atualizar dados!');
			})

	}

	function carregaArduino() {

		ApiServiceArduino.getArduino()
			.then(function (getArduino) {
				document.getElementById("inpArduinoIP").value = "" + getArduino.data.ip;
				document.getElementById("inpArduinoMAC").value = "" + getArduino.data.mac;
				document.getElementById("inpArduinoGateway").value = "" + getArduino.data.gateway;
				document.getElementById("inpArduinoMask").value = "" + getArduino.data.mask;
				document.getElementById("inpArduinoPorta").value = "" + getArduino.data.porta;
				document.getElementById("inpArduinoPinTempUmi").value = "" + getArduino.data.PinoDHT;
				document.getElementById("inpArduinoPinLumi").value = "" + getArduino.data.PinoLDR;
				document.getElementById("inpArduinoPinPresenca").value = "" + getArduino.data.PinoPresenca;
				document.getElementById("inpArduinoPinRele1").value = "" + getArduino.data.PinoRele1;
				document.getElementById("inpArduinoPinRele2").value = "" + getArduino.data.PinoRele2;
				document.getElementById("inpArduinoPinRele3").value = "" + getArduino.data.PinoRele3;
				document.getElementById("inpArduinoPinRele4").value = "" + getArduino.data.PinoRele4;
			})
			.catch(function () {
				alert('Erro ao atualizar dados!');
			})

	}

}

module.exports = ConfigController;