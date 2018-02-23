(function() {
	angular.module('inventoryManager')
	
	.factory('productFactory', productFactory);
	
	function productFactory($http) {
		var service = {
			test: test,
			productList: list,
			idx: idx
//			Getting something by its id
		}
		return service;
		
		function test() {
			console.log('you there?');
			return 'Bueno, bueno, bueno!'
		}
		
		function list() {
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product');
		}
		
		function idx(id) {
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/'+id);
		}
	}
	
})();