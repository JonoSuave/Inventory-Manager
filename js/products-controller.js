(function() {
	angular.module('inventoryManager')
	
	.controller('productsController', productsCtrl);
	
	function productsCtrl(productFactory, productList) {
		var vm = this;
		console.log('Yeah boyé!');
		vm.list = productList;
		console.log(vm.list);
		vm.selected = null;
		vm.select = function(id){
			vm.selected = id;
		}
		
	}
})();