/**
 * @ngdoc controller
 * @name app.auth.controller:Login
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.auth')
    .controller('Login', ['$state', 'auth', '$scope', Login]);

  /* @ngInject */
  function Login($state, auth, $scope) {
    var vm = this;

    vm.submit = submit;
    vm.reset_password = true;
    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.auth.controller:Login
     * @description
     * My Description rules
     */
    function submit(email, password) {
      auth.login(email, password).then(function (res) {
        //localStorageService.set('authinfo', res);
        //$state.go('home.account');
        if (res.data.error) {
          alert(res.data.error);
          vm.reset_password = false;
        }
        else {
          $scope.auth.isLogin = true;
          $state.go('home.account');
        }
      });
    }
  }

}());
