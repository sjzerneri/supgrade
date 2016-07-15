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
  function auth($q, $http, $state) {

    // 1. read token ( or cookie )
    // 2. access server to get user's info


    return {
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

      return $http.post('/login',
        {
          'email': email,
          'password': password
        });
    }

  }

}());
