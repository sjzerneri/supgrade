/**
 * @ngdoc overview
 * @name app.checkout
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.checkout', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){
    $stateProvider
      .state('home.checkout', {
        url: '/checkout',
        templateUrl: 'src/checkout/checkout.html',
        controller: 'Checkout',
        controllerAs: 'vm'
      })
  }

}());
