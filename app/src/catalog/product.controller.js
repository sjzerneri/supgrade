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
    function Product($http, product) {
        var vm = this;

        vm.items = ['Large 59', 'Small 34'];

        product.productBatch().then(function (response) {
            vm.products = response;
            console.log(vm.products);
        });

        /////////////////////

        /**
         * @ngdoc method
         * @name testFunction
         * @param {number} num number is the number of the number
         * @methodOf app.catalog.controller:Product
         * @description
         * My Description rules
         */
        function testFunction(num) {
            console.info('This is a test function');
        }
    }

}());
