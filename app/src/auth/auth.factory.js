/**
 * @ngdoc service
 * @name app.auth.auth
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.auth')
    .factory('auth', auth);

  /* @ngInject */
  function auth($q, $http, $rootScope, $state) {
    $rootScope.isPageLoading = true;
    var userInfo = {};
    // 1. read token ( or cookie )
    // 2. access server to get user's info
        $rootScope.isPageLoading = false;

    return {
      isLoggedIn: false,
      login: login
    };
    ////////////////////


    /**
     * @ngdoc
     * @name app.auth.auth#testFunction
     * @methodOf app.auth.auth
     *
     * @description < description placeholder >
     * @example
     * <pre>
     * auth.testFunction(id);
     * </pre>
     * @param {int} entity id
     */

    function login(email, password) {
      $rootScope.logout = logout;
      return $http.post('/login',
        {
          'email': email,
          'password': password
        });
    }

    function logout() {

      $http.get('/login', {}).then( function(res) {
        if (res.data.success) {
          $state.go('home.login');
          $rootScope.islogin = false;
        }
      });
    }
  }

}());
