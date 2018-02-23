(function() {
	angular.module('inventoryManager')
	
	.controller('loginController', loginCtrl);
	
	function loginCtrl() {
		var vm = this;
		console.log('logining');
	}
})();