/**
 * @ngdoc controller
 * @name app.auth.controller:Resetpw
 * @description When user forgotten passowrd, reset password.
 */

(function () {

  'use strict';

  angular
    .module('app.auth')
    .controller('Resetpw', ['$http', '$state', 'UserData', 'localStorageService', Resetpw]);

  /* @ngInject */
  function Resetpw($http, $state, UserData, localStorageService) {
    var vm = this;
    vm.submit = submit;
    vm.signup = true;
    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.auth.controller:Signup
     * @description
     * My Description rules
     */

    function submit(email, password) {

      var data = {
        'email': email,
        'password': password
      };
      $http.put('/resetpw', data).then(function (res) {
        if (!res.data.error) {
          localStorageService.set('authinfo', data);
          $state.go('home.login');
        }
        else {
          alert("Sorry, Your email is not registered. Please sign up now.");
          vm.signup = false;
        }
      });

    }
  }
}());

