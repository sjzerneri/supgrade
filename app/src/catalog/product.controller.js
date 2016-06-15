/**
 * @ngdoc controller
 * @name app.catalog.controller:Product
 * @description < description placeholder >
 */

(function() {

    'use strict';

    angular
        .module('app.catalog')
        .controller('Product', Product);

    /* @ngInject */
    function Product($http, product,$state) {
        var vm = this;

        vm.items = ['Large 59', 'Small 34'];

        product.productBatch().then(function(response) {
            vm.products = response.data.productInfo;
            console.log(vm.products);
        });

        vm.addToCart = addToCart;

        vm.items = [];

        function addToCart() {

            console.log('test');
            $state.go('home.cart');
            vm.items.push({
                item: 'Test Item'
            });
            console.log(vm.items);
        };
    };
}());
