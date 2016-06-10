/**
 * @ngdoc service
 * @name app.catalog.product
 * @description < description placeholder >
 */

(function () {

    'use strict';

    angular
        .module('app.catalog')
        .factory('product', product);

    /* @ngInject */
    function product($http) {

        function productBatch() {
            return $http.get('products.json').then(function (response) {
                return response;
            })
        }

        return {
            productBatch: productBatch
        }
    }

}());
