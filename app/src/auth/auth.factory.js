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
    function auth($q, $http) {
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
            return $http.post('/api/users/authenticate',
            {
                'username': email,
                'password': password
            });
        }
    }

}());
