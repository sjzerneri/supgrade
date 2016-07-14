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
  function Product($http, product, $state, $stateParams) {
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
    })

    vm.addToCart = addToCart;

    vm.items = [];

    console.log("Items Added To Cart: " + vm.items);

    function addToCart() {

      product.productDetails(vm.Product_id).then(function (response) {
        vm.productDetail = response;
        console.log(response);
        vm.itemToAdd = response.Manufacturer;
        vm.items += [vm.itemToAdd, ];
        return vm.itemToAdd;

      });

      $state.go('home.cart');

    };
  };
}());
