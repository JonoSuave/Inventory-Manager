(function() {
	angular.module('inventoryManager')

	.controller('productDetails', prodDetCtrl);
	
	function prodDetCtrl(product) {
		var vm = this;
		vm.product = product;
	}	

})();