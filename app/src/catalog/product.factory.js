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
    function product($http, $q) {

        function productBatch() {
            return $http.get('src/catalog/products.json').then(function (response) {
                return response;
            })
        };

        function productDetails(Product_id) {
            return $http.get('src/catalog/products.json', {
                params: {
                    Product_id: Product_id
                }
            })
            .then(function(response) {
                return response.data.productInfo[Product_id - 1];
            })
        };

        return {
            productBatch: productBatch,
            productDetails: productDetails
        }
    }

}());
