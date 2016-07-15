/**
 * @ngdoc controller
 * @name app.auth.controller:Login
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.auth')
    .controller('Login', ['$state', 'auth', '$rootScope', Login]);

  /* @ngInject */
  function Login($state, auth, $rootScope) {
    var vm = this;

    vm.submit = submit;
    vm.reset_password = true;
    /////////////////////
    $rootScope.logout = auth.logout;
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
          $rootScope.islogin = true;
          $state.go('home.account');
        }
      });
    }
  }

}());
