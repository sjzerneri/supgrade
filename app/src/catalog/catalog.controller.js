/**
 * @ngdoc controller
 * @name app.catalog.controller:Catalog
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.catalog')
		.controller('Catalog', Catalog);

  /* @ngInject */
	function Catalog(product){
		var vm = this;

    product.productBatch().then(function(response) {
            vm.products = response.data.productInfo;
            console.log(vm.products);
        });
	}

}());
