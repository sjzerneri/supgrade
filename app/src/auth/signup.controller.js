/**
 * @ngdoc controller
 * @name app.auth.controller:Signup
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.auth')
		.controller('Signup', Signup);

  /* @ngInject */
	function Signup(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.auth.controller:Signup
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
