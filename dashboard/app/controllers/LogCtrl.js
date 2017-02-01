LogController.$inject = ['$scope', '$rootScope', '$location', 'ApiServiceAuth', 'ApiServiceRele'];

function LogController($scope, $rootScope, $location, ApiServiceAuth, ApiServiceRele) {
	var vmlog = this;	

	$rootScope.activetab = $location.path();

	var auth = ApiServiceAuth.auth()
		.then(function (auth) {

			ApiServiceRele.getReleValorAll()
				.then(function (getReleValorAll) {
					$scope.rele = getReleValorAll.data;

					// Define as configurações de paginação, pode ser valores passado na URL &pageitem=10&page=1
					vmlog.pageItem = 10;
					vmlog.page = 1;
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
						if (vmlog.page - 1 > 0) {
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
						vmlog.pageItems = loadList(vmlog.pageItem, vmlog.page);
						//vmlog.pageItems = $scope.rele;
					}

					// Carrega os novos dados com page na pagina atual e no numero de itemns por pagina
					function loadList(_pageItem, _page) {
						var list = [];
						_page = _page - 1;												
						for(var i = 0; i < _pageItem; i++) {
							list.push($scope.rele[i]);
						}
						
						return list;
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


		})
		.catch(function () {
			alert('Necessita estar logado!');
			window.location.href = "https://localhost/frontend/#/login";
		})

}

module.exports = LogController;