LogController.$inject = ['$scope', '$rootScope', '$location', 'ApiServiceAuth', 'ApiServiceRele', 'ApiServiceLog'];

function LogController($scope, $rootScope, $location, ApiServiceAuth, ApiServiceRele, ApiServiceLog) {
	var vmlog = this;

	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {

			// Define as configurações de paginação, pode ser valores passado na URL &pageitem=10&page=1
			vmlog.pageItem = 10;
			vmlog.page = 0;
			vmlog.totalPage = 10; // Deve ser informado pelo backend com as requisições os itens
			vmlog.nbPages = []

			// Carrega os items inicias
			loadPage();

			// Carrega a paginação
			pagination();

			// Carrega proxima pagina
			vmlog.proximo = function () {
				if (vmlog.page < vmlog.totalPage) {
					vmlog.page++;
					loadPage();
				}
			}

			// Carrega pagina anterior
			vmlog.anterior = function () {
				if (vmlog.page - 1 >= 0) {
					vmlog.page--;
					loadPage();
				}
			}

			// Vai para uma pagina especifica
			vmlog.goToPage = function (page) {
				vmlog.page = page;
				loadPage();
			}

			// Atualiza os itens do array
			function loadPage() {

				$limit = vmlog.pageItem;
				$offset = vmlog.page * 10;

				ApiServiceLog.paginacao($limit, $offset)
					.then(function (paginacao) {
						var list = [];
						for (var i = 0; i < paginacao.data.length; i++) {
							list.push(paginacao.data[i]);
						}

						$scope.pageItems = list;						

					})
					.catch(function () {
						alert('Erro ao carregar a tabela!');
					})

			}

			// Cria a lista de paginação
			function pagination() {
				for (var i = 1; i <= vmlog.totalPage; i++) {
					vmlog.nbPages.push(i);
				}
			}


		})
		.catch(function () {
			alert('Erro ao carregar a tabela!');
		})

}

module.exports = LogController;