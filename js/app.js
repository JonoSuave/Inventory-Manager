(function() {
	angular.module('inventoryManager',['ui.router'])
//	Remind me what ui.router does for me again?
	
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/login')
		
		$stateProvider

			.state('login', {
				url:'/login',
				templateUrl: './partials/login.html',
				controller: 'loginController',
				controllerAs: 'loginCt˜rl'
	//			function(error) {
	//				console.log(error);
	//			}
			})
		
			.state('products', {
				url:'/products',
				templateUrl: './partials/products.html',
				controller: 'productsController',
				controllerAs: 'productsCtrl',
				resolve: {
					productList: function(productFactory) {
						return productFactory.productList().then(function(response) {
							return response.data;
						})
					}
				}
			})
		
			.state('productDetails', {
				url:'/product/:id',
//			The colon says, "Hey this is a placeholder for each products unique id"
				templateUrl: './partials/productDetails.html',
				controller: 'productDetails',
				controllerAs:'prodDet',
				resolve: {
					product: function($stateParams, productFactory) {
						return productFactory.idx($stateParams.id).then(function(response) {
							return response.data[0];
//							this will give me the deets of this particular product (we did this by using $stateParams.id)
						});
					}
//			Allows me to access the state parameters (like ':id')
				}
			})
		;
	})
})();