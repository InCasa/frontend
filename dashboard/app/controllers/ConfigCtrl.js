ConfigController.$inject = ['$rootScope', '$location', 'ApiServiceAuth', 'ApiServiceUser', 'ApiServiceAplicativo', 'ApiServiceArduino', 'ApiServiceRele', 'ApiServiceTemperatura', 'ApiServiceUmidade', 'ApiServiceLuminosidade', 'ApiServicePresenca'];

function ConfigController($rootScope, $location, ApiServiceAuth, ApiServiceUser, ApiServiceAplicativo, ApiServiceArduino, ApiServiceRele, ApiServiceTemperatura, ApiServiceUmidade, ApiServiceLuminosidade, ApiServicePresenca) {
	var vmconfig = this;
	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {

			//Parte Responsavel pela tab de sensor
			carregaSensor();

			//Parte responsável pela tab rele
			carregaRele();

			//Parte responsável pela tab do arduino
			carregaArduino();


			var keyPress = document.getElementById("inpArduinoPinRele4");
			keyPress.addEventListener("keydown", function (e) {
				if (e.keyCode === 13) {
					vmconfig.submitArduino();
				}
			});

			vmconfig.submitArduino = function () {

				console.log(vmconfig.arduinoIP);
				console.log(vmconfig.arduinoMAC);
				console.log(vmconfig.arduinoGateway);
				console.log(vmconfig.arduinoMask);
				console.log(vmconfig.arduinoPorta);
				console.log(vmconfig.arduinoPinTempUmi);
				console.log(vmconfig.arduinoPinRele1);
				console.log(vmconfig.arduinoPinRele2);
				console.log(vmconfig.arduinoPinRele3);
				console.log(vmconfig.arduinoPinRele4);
				console.log(vmconfig.arduinoPinLumi);
				console.log(vmconfig.arduinoPinPresenca);

				if (vmconfig.arduinoIP && vmconfig.arduinoMAC && vmconfig.arduinoGateway && vmconfig.arduinoMask
					&& vmconfig.arduinoPorta && vmconfig.arduinoPinTempUmi && vmconfig.arduinoPinLumi
					&& vmconfig.arduinoPinPresenca && vmconfig.arduinoPinRele1 && vmconfig.arduinoPinRele2
					&& vmconfig.arduinoPinRele3 && vmconfig.arduinoPinRele4) {

					var arduino = {
						ip: vmconfig.arduinoIP, mac: vmconfig.arduinoMAC, gateway: vmconfig.arduinoGateway, mask: vmconfig.arduinoMask,
						porta: vmconfig.arduinoPorta, PinoDHT: vmconfig.arduinoPinTempUmi, PinoRele1: vmconfig.arduinoPinRele1, PinoRele2: vmconfig.arduinoPinRele2,
						PinoRele3: vmconfig.arduinoPinRele3, PinoRele4: vmconfig.arduinoPinRele4, PinoLDR: vmconfig.arduinoPinLumi, PinoPresenca: vmconfig.arduinoPinPresenca
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

	function carregaRele() {

		ApiServiceRele.getReleND(1)
			.then(function  (getReleND){
				document.getElementById("inpRele1Nome").value = "" + getReleND.data.nome;
				document.getElementById("inpRele1Descricao").value = "" + getReleND.data.descricao;
				document.getElementById("inpRele1Porta").value = "" + getReleND.data.porta;
			})
			.catch(function (){
				alert('Erro ao atualizar dados');
			})

		ApiServiceRele.getReleND(2)
			.then(function  (getReleND){
				document.getElementById("inpRele2Nome").value = "" + getReleND.data.nome;
				document.getElementById("inpRele2Descricao").value = "" + getReleND.data.descricao;
				document.getElementById("inpRele2Porta").value = "" + getReleND.data.porta;
			})
			.catch(function (){
				alert('Erro ao atualizar dados');
			})

		ApiServiceRele.getReleND(3)
			.then(function  (getReleND){
				document.getElementById("inpRele3Nome").value = "" + getReleND.data.nome;
				document.getElementById("inpRele3Descricao").value = "" + getReleND.data.descricao;
				document.getElementById("inpRele3Porta").value = "" + getReleND.data.porta;
			})
			.catch(function (){
				alert('Erro ao atualizar dados');
			})

		ApiServiceRele.getReleND(4)
			.then(function  (getReleND){
				document.getElementById("inpRele4Nome").value = "" + getReleND.data.nome;
				document.getElementById("inpRele4Descricao").value = "" + getReleND.data.descricao;
				document.getElementById("inpRele4Porta").value = "" + getReleND.data.porta;
			})
			.catch(function (){
				alert('Erro ao atualizar dados');
			})			

	}

	function carregaSensor() {

		ApiServiceTemperatura.getTemperaturaND()
			.then(function (getTemperaturaND) {
				document.getElementById("inpSensorTempNome").value = "" + getTemperaturaND.data.nome;
				document.getElementById("inpSensorTempDescricao").value = "" + getTemperaturaND.data.descricao;				
			})
			.catch(function () {

			})

		ApiServiceUmidade.getUmidadeND()
			.then(function (getUmidadeND) {
				document.getElementById("inpSensorUmiNome").value = "" + getUmidadeND.data.nome;
				document.getElementById("inpSensorUmiDescricao").value = "" + getUmidadeND.data.descricao;				
			})
			.catch(function () {

			})

		ApiServiceLuminosidade.getLuminosidadeND()
			.then(function (getLuminosidadeND) {
				document.getElementById("inpSensorLumiNome").value = "" + getLuminosidadeND.data.nome;
				document.getElementById("inpSensorLumiDescricao").value = "" + getLuminosidadeND.data.descricao;				
			})
			.catch(function () {

			})	

		ApiServicePresenca.getPresencaND()
			.then(function (getPresencaND) {
				document.getElementById("inpSensorPresencaNome").value = "" + getPresencaND.data.nome;
				document.getElementById("inpSensorPresencaDescricao").value = "" + getPresencaND.data.descricao;				
			})
			.catch(function () {

			})

	}

}

module.exports = ConfigController;