/**
 * @ngdoc overview
 * @name app.checkout
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.checkout', ['angularPayments'])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider, $windowProvider){
    var $window = $windowProvider.$get();
    $window.Stripe.setPublishableKey('pk_live_iUVtOTcO0uuRUuFEyS3nLNog');
    $stateProvider
      .state('home.checkout', {
        url: '/checkout',
        templateUrl: 'src/checkout/checkout.html',
        controller: 'Checkout',
        controllerAs: 'vm'
      });

  }

}());
