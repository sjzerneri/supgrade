/**
 * @ngdoc controller
 * @name app.auth.controller:Signup
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.auth')
    .controller('Signup', ['$http', '$state', 'UserData', 'localStorageService', Signup]);

  /* @ngInject */
  function Signup($http, $state, UserData, localStorageService) {
    var vm = this;
    vm.submit = submit;
    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.auth.controller:Signup
     * @description
     * My Description rules
     */

    function submit(fname, lname, email, password) {

      var data = {
        'firstname': fname,
        'lastname': lname,
        'email': email,
        'password': password
      };
      $http.post('/register', data).then(function(res) {
        if (res.data.success) {
          localStorageService.set('authinfo', data);
          $http.post('/emailverify', {
            'email': email
          });
          auth.login(email, password).then(function (res) {
            if (res.data.error) {
              alert(res.data.error);
            }
            else {
              $state.go('home.account');
            }
          });
        }
      });

    }
  }
}());
