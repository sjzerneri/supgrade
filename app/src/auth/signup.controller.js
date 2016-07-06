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
                'firstname' : fname,
                'lastname' : lname,
                'username': email,
                'password': password
            };
            $http.post('/api/users/register',data).then(function() {
                localStorageService.set('authinfo', data);
                $http.post('/emailverify', {
                    'email': email
                });
                $state.go('home.account');
            }, function() {

            });
            
        }
    }
}());
