angular.module('reinvent.products', [])
  
.controller('ProductsCtrl', function($scope, Products) {
  $scope.data = {};

  $scope.getProducts = function() {
    Products.getAll().then(function(data) {
      $scope.data.products = data;
    });
  };

  $scope.changeQuantity = function(id, num) {
    Products.changeQuantity(id, num);

    _.find($scope.data.products, function(product) {
      return product.variant_id === id;
    })
    .quantity += num;
  };

  $scope.getProducts();
});
