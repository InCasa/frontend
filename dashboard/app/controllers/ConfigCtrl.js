ConfigController.$inject = ['$rootScope', '$location', 'ApiServiceAuth', 'ApiServiceUser', 'ApiServiceAplicativo', 'ApiServiceArduino', 'ApiServiceRele', 'ApiServiceTemperatura', 'ApiServiceUmidade', 'ApiServiceLuminosidade', 'ApiServicePresenca'];

function ConfigController($rootScope, $location, ApiServiceAuth, ApiServiceUser, ApiServiceAplicativo, ApiServiceArduino, ApiServiceRele, ApiServiceTemperatura, ApiServiceUmidade, ApiServiceLuminosidade, ApiServicePresenca) {
	var vmconfig = this;
	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {

			//Parte Responsavel pela tab de sensor
			carregaSensor();

			var keyPress = document.getElementById("inpSensorPresencaDescricao");
			keyPress.addEventListener("keydown", function (e) {
				if (e.keyCode === 13) {
					vmconfig.submitSensor();
				}
			});

			vmconfig.submitSensor = function () {

				if (vmconfig.sensorTempNome && vmconfig.sensorTempDescricao
					&& vmconfig.sensorUmiNome && vmconfig.sensorUmiDescricao
					&& vmconfig.sensorLumiNome && vmconfig.sensorLumiDescricao
					&& vmconfig.sensorPresencaNome && vmconfig.sensorPresencaDescricao) {

					var temp = { nome: vmconfig.sensorTempNome, descricao: vmconfig.sensorTempDescricao };
					var umi = { nome: vmconfig.sensorUmiNome, descricao: vmconfig.sensorUmiDescricao };
					var lumi = { nome: vmconfig.sensorLumiNome, descricao: vmconfig.sensorLumiDescricao };
					var presenca = { nome: vmconfig.sensorPresencaNome, descricao: vmconfig.sensorPresencaDescricao };

					ApiServiceTemperatura.putTemperaturaND(temp)
						.then(function () {

						})
						.catch(function () {
							alert('Erro ao atualizar os dados do sensor de temperatura');
						})

					ApiServiceUmidade.putUmidadeND(umi)
						.then(function () {

						})
						.catch(function () {
							alert('Erro ao atualizar os dados do sensor de umidade');
						})

					ApiServiceLuminosidade.putLuminosidadeND(lumi)
						.then(function () {

						})
						.catch(function () {
							alert('Erro ao atualizar os dados do sensor de luminosidade');
						})

					ApiServicePresenca.putPresencaND(presenca)
						.then(function () {

						})
						.catch(function () {
							alert('Erro ao atualizar os dados do sensor de presença');
						})

					alert('Dados atualizados com sucesso!');
					carregaSensor();	


				} else {
					alert('Preencha os campos!');
					return;
				}

			}

			vmconfig.limparSensor = function () {
				carregaSensor();
			}

			//Parte responsável pela tab rele
			carregaRele();

			var keyPress = document.getElementById("inpRele4Porta");
			keyPress.addEventListener("keydown", function (e) {
				if (e.keyCode === 13) {
					vmconfig.submitRele();
				}
			});

			vmconfig.submitRele = function () {
				if (vmconfig.rele1Nome && vmconfig.rele1Descricao && vmconfig.rele1Porta
					&& vmconfig.rele2Nome && vmconfig.rele2Descricao && vmconfig.rele2Porta
					&& vmconfig.rele3Nome && vmconfig.rele3Descricao && vmconfig.rele3Porta
					&& vmconfig.rele4Nome && vmconfig.rele4Descricao && vmconfig.rele4Porta) {

					var rele1 = { nome: vmconfig.rele1Nome, descricao: vmconfig.rele1Descricao, porta: vmconfig.rele1Porta };
					var rele2 = { nome: vmconfig.rele2Nome, descricao: vmconfig.rele2Descricao, porta: vmconfig.rele2Porta };
					var rele3 = { nome: vmconfig.rele3Nome, descricao: vmconfig.rele3Descricao, porta: vmconfig.rele3Porta };
					var rele4 = { nome: vmconfig.rele4Nome, descricao: vmconfig.rele4Descricao, porta: vmconfig.rele4Porta };

					ApiServiceRele.putReleND(1, rele1)
						.then(function () {

						})
						.catch(function () {
							alert('Erro ao atualizar os dados do rele 1');
						})

					ApiServiceRele.putReleND(2, rele2)
						.then(function () {

						})
						.catch(function () {
							alert('Erro ao atualizar os dados do rele 2');
						})

					ApiServiceRele.putReleND(3, rele3)
						.then(function () {

						})
						.catch(function () {
							alert('Erro ao atualizar os dados do rele 3');
						})

					ApiServiceRele.putReleND(4, rele4)
						.then(function () {

						})
						.catch(function () {
							alert('Erro ao atualizar os dados do rele 4');
						})


					alert('Dados atualizados com sucesso');
					carregaRele();


				} else {
					alert("Preencha os campos");
					return;
				}

			}

			vmconfig.limparRele = function () {
				carregaRele();
			}

			//Parte responsável pela tab do arduino
			carregaArduino();

			var keyPress = document.getElementById("inpArduinoPinRele4");
			keyPress.addEventListener("keydown", function (e) {
				if (e.keyCode === 13) {
					vmconfig.submitArduino();
				}
			});

			vmconfig.submitArduino = function () {

				if (vmconfig.arduinoIP && vmconfig.arduinoMAC && vmconfig.arduinoGateway && vmconfig.arduinoMask
					&& vmconfig.arduinoPorta && vmconfig.arduinoPinTempUmi && vmconfig.arduinoPinLumi
					&& vmconfig.arduinoPinPresenca && vmconfig.arduinoPinRele1 && vmconfig.arduinoPinRele2
					&& vmconfig.arduinoPinRele3 && vmconfig.arduinoPinRele4) {

					var arduino = {
						ip: vmconfig.arduinoIP, mac: vmconfig.arduinoMAC, gateway: vmconfig.arduinoGateway, mask: vmconfig.arduinoMask,
						porta: vmconfig.arduinoPorta, PinoDHT: vmconfig.arduinoPinTempUmi, PinoRele1: vmconfig.arduinoPinRele1, PinoRele2: vmconfig.arduinoPinRele2,
						PinoRele3: vmconfig.arduinoPinRele3, PinoRele4: vmconfig.arduinoPinRele4, PinoLDR: vmconfig.arduinoPinLumi, PinoPresenca: vmconfig.arduinoPinPresenca
					};

					ApiServiceArduino.putArduino(arduino)
						.then(function (putArduino) {
							alert('Dados atualizados');
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

			vmconfig.limparArduino = function () {
				carregaArduino();
			}

			//Parte responsável pela tab do aplicativo
			carregaApp();

			var keyPress = document.getElementById("inpMAC");
			keyPress.addEventListener("keydown", function (e) {
				if (e.keyCode === 13) {
					vmconfig.submitApp();
				}
			});

			vmconfig.submitApp = function () {
				if (vmconfig.appNome && vmconfig.appMAC) {
					var app = { nome: vmconfig.appNome, mac: vmconfig.appMAC };

					ApiServiceAplicativo.putApp(app)
						.then(function (putApp) {
							alert('Dados atualizados');
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

			vmconfig.limparApp = function () {
				carregaApp();
			}

			//Parte responsável pela tab de user
			carregaUser();

			var keyPress = document.getElementById("inpSenha");
			keyPress.addEventListener("keydown", function (e) {
				if (e.keyCode === 13) {
					vmconfig.submitUser();
				}
			});

			vmconfig.submitUser = function () {
				if (vmconfig.userNome && vmconfig.userLogin && vmconfig.userSenha) {
					var user = { login: vmconfig.userLogin, senha: vmconfig.userSenha };

					var getID = ApiServiceUser.getID(user)
						.then(function (getID) {
							var id = getID.data.id;

							user = { nome: vmconfig.userNome, login: vmconfig.userLogin, senha: vmconfig.userSenha };

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

			vmconfig.limparUser = function () {
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
						vmconfig.userNome = getUser.data.nome;
						vmconfig.userLogin = getUser.data.login;
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
				vmconfig.appNome = getApp.data.nome;
				vmconfig.appMAC = getApp.data.mac;
			})
			.catch(function () {
				alert('Erro ao atualizar dados!');
			})

	}

	function carregaArduino() {

		ApiServiceArduino.getArduino()
			.then(function (getArduino) {
				vmconfig.arduinoIP = getArduino.data.ip;
				vmconfig.arduinoMAC = getArduino.data.mac;
				vmconfig.arduinoGateway = getArduino.data.gateway;
				vmconfig.arduinoMask = getArduino.data.mask;
				vmconfig.arduinoPorta = getArduino.data.porta;
				vmconfig.arduinoPinTempUmi = getArduino.data.PinoDHT;
				vmconfig.arduinoPinLumi = getArduino.data.PinoLDR;
				vmconfig.arduinoPinPresenca = getArduino.data.PinoPresenca;
				vmconfig.arduinoPinRele1 = getArduino.data.PinoRele1;
				vmconfig.arduinoPinRele2 = getArduino.data.PinoRele2;
				vmconfig.arduinoPinRele3 = getArduino.data.PinoRele3;
				vmconfig.arduinoPinRele4 = getArduino.data.PinoRele4;
			})
			.catch(function () {
				alert('Erro ao atualizar dados!');
			})

	}

	function carregaRele() {

		ApiServiceRele.getReleND(1)
			.then(function (getReleND) {
				vmconfig.rele1Nome = getReleND.data.nome;
				vmconfig.rele1Descricao = getReleND.data.descricao;
				vmconfig.rele1Porta = getReleND.data.porta;
			})
			.catch(function () {
				alert('Erro ao atualizar dados');
			})

		ApiServiceRele.getReleND(2)
			.then(function (getReleND) {
				vmconfig.rele2Nome = getReleND.data.nome;
				vmconfig.rele2Descricao = getReleND.data.descricao;
				vmconfig.rele2Porta = getReleND.data.porta;
			})
			.catch(function () {
				alert('Erro ao atualizar dados');
			})

		ApiServiceRele.getReleND(3)
			.then(function (getReleND) {
				vmconfig.rele3Nome = getReleND.data.nome;
				vmconfig.rele3Descricao = getReleND.data.descricao;
				vmconfig.rele3Porta = getReleND.data.porta;
			})
			.catch(function () {
				alert('Erro ao atualizar dados');
			})

		ApiServiceRele.getReleND(4)
			.then(function (getReleND) {
				vmconfig.rele4Nome = getReleND.data.nome;
				vmconfig.rele4Descricao = getReleND.data.descricao;
				vmconfig.rele4Porta = getReleND.data.porta;
			})
			.catch(function () {
				alert('Erro ao atualizar dados');
			})

	}

	function carregaSensor() {

		ApiServiceTemperatura.getTemperaturaND()
			.then(function (getTemperaturaND) {
				vmconfig.sensorTempNome = getTemperaturaND.data.nome;
				vmconfig.sensorTempDescricao = getTemperaturaND.data.descricao;
			})
			.catch(function () {

			})

		ApiServiceUmidade.getUmidadeND()
			.then(function (getUmidadeND) {
				vmconfig.sensorUmiNome = getUmidadeND.data.nome;
				vmconfig.sensorUmiDescricao = getUmidadeND.data.descricao;
			})
			.catch(function () {

			})

		ApiServiceLuminosidade.getLuminosidadeND()
			.then(function (getLuminosidadeND) {
				vmconfig.sensorLumiNome = getLuminosidadeND.data.nome;
				vmconfig.sensorLumiDescricao = getLuminosidadeND.data.descricao;
			})
			.catch(function () {

			})

		ApiServicePresenca.getPresencaND()
			.then(function (getPresencaND) {
				vmconfig.sensorPresencaNome = getPresencaND.data.nome;
				vmconfig.sensorPresencaDescricao = getPresencaND.data.descricao;
			})
			.catch(function () {

			})

	}

}

module.exports = ConfigController;