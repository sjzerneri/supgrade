/**
 * @ngdoc controller
 * @name app.shell.controller:Home
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.shell')
    .controller('Home',  Home);

  /* @ngInject */
  function Home($location, $http, $scope, $state) {
    var vm = this;

    vm.testFunction = testFunction;


    $scope.cartDetail = {
      quantity: 0,
      data: []
    };

    $scope.auth = {
      isLogin: false
    };

    vm.logout = logout;
    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.shell.controller:Home
     * @description
     * My Description rules
     */
    function testFunction(num) {
      console.info('This is a test function');
    }

    function logout() {
      $scope.auth.isLogin = false;
      $state.go('home.login');
    }
  }

}());
