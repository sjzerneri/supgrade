/**
 * @ngdoc controller
 * @name app.auth.controller:Login
 * @description < description placeholder >
 */

(function () {

    'use strict';

    angular
        .module('app.auth')
        .controller('Login', Login);

    /* @ngInject */
    function Login(auth) {
        var vm = this;

        vm.submit = submit;
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
                
                console.log('function successfully run');
            });
        }
    }

}());
