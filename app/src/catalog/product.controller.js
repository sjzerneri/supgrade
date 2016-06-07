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
    function Product() {
        var vm = this;

        vm.items = ['Large $59', 'Small $34'];

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
