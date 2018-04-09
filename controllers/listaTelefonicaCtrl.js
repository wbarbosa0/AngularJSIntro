angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope){
	$scope.app = "Lista Telefônica";

	// TODO: Implementar service (API) para contatos e operadoras 


	$scope.operadoras = [
		{nome:"TIM", csp:"41"},
		{nome:"Claro", csp:"21"},
		{nome:"Vivo", csp:"15"},
		{nome:"Algar", csp:"12"},
		{nome:"Sercomtel", csp:"43"},
		{nome:"Oi", csp:"31"}
	]

	// Montar banco de nomes e criar contatos aleatorios!

	$scope.contatos = [
		{nome:"Mario",telefone:"98765-4321", operadora:$scope.operadoras[Math.floor(Math.random() * $scope.operadoras.length)]},
		{nome:"Antônio",telefone:"93456-3923", operadora:$scope.operadoras[Math.floor(Math.random() * $scope.operadoras.length)]},
		{nome:"Carla",telefone:"97654-8234", operadora:$scope.operadoras[Math.floor(Math.random() * $scope.operadoras.length)]}
	];

	$scope.adicionarContato = function(contato){
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
	}

	$scope.apagarContatos = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			if(! contato.selecionado) return contato;
		})
	}

	$scope.isAnyContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		})
	}

	$scope.isAllContatoSelecionado = function(contatos){
		return contatos.all(function(contato){
			return contato.selecionado;
		})
	}
})