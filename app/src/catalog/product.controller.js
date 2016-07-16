/**
 * @ngdoc controller
 * @name app.catalog.controller:Product
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.catalog')
    .controller('Product', Product);

  /* @ngInject */
  function Product($http, product, $state, $stateParams, $scope) {
    var vm = this;

    vm.Product_id = $stateParams.Product_id;

    console.log("Product ID is" + vm.Product_id);

    product.productBatch().then(function (response) {
      vm.products = response.data.productInfo;
      console.log(vm.products);
    });

    product.productDetails(vm.Product_id).then(function (response) {
      vm.productDetail = response;
      console.log(response);
    });

    vm.addToCart = addToCart;

    vm.items = $scope.cartDetail.data;

    vm.total = total;

    vm.checkout = checkout;

    vm.removeCartItem = removeCartItem;

    console.log("Items Added To Cart: " + vm.items);

    function addToCart() {
      var isExist = false;
      for (var i = 0; i < vm.items.length; i++) {
        if (vm.items[i].Product_id == vm.Product_id) {
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        product.productDetails(vm.Product_id).then(function (response) {
          vm.productDetail = response;
          var item = response;
          item.Quantity = 1;
          console.log(response);
          vm.itemToAdd = response.Manufacturer;
          $scope.cartDetail.data.push(item);
          console.log($scope.cartDetail.data)
          $scope.cartDetail.quantity = $scope.cartDetail.data.length;
          return vm.itemToAdd;
        });
      }

      $state.go('home.cart');

    };

    function removeCartItem(index) {
      $scope.cartDetail.data.splice(index, 1);
    }

    function total() {
      var totalPrice = 0;
      for (var i = 0;i < vm.items.length;i ++) {
        totalPrice += vm.items[i].Price * vm.items[i].Quantity;
      }
      $scope.cartDetail.amount = totalPrice;
      return totalPrice;
    }

    function checkout() {
      if (!$scope.auth.isLogin) {
        $state.go('home.login', {redirectUrl: $state.current.name});
      }
      else {
        $state.go('home.checkout');
      }
    }
  };
}());
