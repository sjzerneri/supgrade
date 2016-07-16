/**
 * Created by administrator on 7/15/16.
 */

(function(){

  'use strict';

  angular
    .module('app.checkout')
    .controller('Checkout', Checkout);

  /* @ngInject */
  function Checkout($scope, $http){
    var vm = this;

    $scope.validateCardNumber = true;
    $scope.stripeCallback = function (code, result) {
      if (result.error) {
        $scope.validateCardNumber= false;
      } else {
        $scope.validateCardNumber = true;
        $http.post('/pay', {
          stripeToken: result.id,
          amount: $scope.cartDetail.amount * 100
        }).then(function() {
          alert("Sucessfully");
        }, function() {
          alert("Error");
        })
      }
    };
  }

}());
