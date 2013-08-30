var dragNdrop = angular.module("dragNdrop",[]);
dragNdrop.
	 config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/products', {templateUrl: 'views/productHome.html', controller: productCntrl}).
			otherwise({redirectTo: '/products'});

}]);