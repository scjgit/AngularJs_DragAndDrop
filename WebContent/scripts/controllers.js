document.addEventListener('touchmove', function(e){
  e.preventDefault();
});

function productCntrl($log,$scope){
	$log.info('FILENAME: '+FILENAME);
	$log.info('FILENAME: '+getFieName());
	$log.info('In productCntrl');
	$scope.products = [{"name": "nokia e6","phoneId": "e6","price": "17000","image": "images/phones/nokia_e6.jpg"},{"name": "nokia e5","phoneId": "e5","price": "8800","image": "images/phones/nokia_e5.jpg"},{"name": "Samsung Galaxy Y","phoneId": "sgy","price": "7200","image": "images/phones/samsung_g.jpg"},{"name": "nexus","phoneId": "nx","price": "27000","image": "images/phones/nexus.jpg"},{"name": "Sony Xperia","phoneId": "sx","price": "1800","image": "images/phones/sony_x.jpg"},{"name": "Sony Xperia Z","phoneId": "sxz","price": "32000","image": "images/phones/sony_xz.jpg"}];
    
    $scope.getProducts =function(){
    	return $scope.products;
    };
    
    $scope.setProducts =function(products){
    	$scope.products;
    };
}
