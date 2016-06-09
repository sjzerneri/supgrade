/**
 * @ngdoc controller
 * @name app.auth.controller:Signup
 * @description < description placeholder >
 */

(function () {

    'use strict';

    angular
        .module('app.auth')
        .controller('Signup', Signup);

    /* @ngInject */
    function Signup($state) {
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

            console.log(vm.fname);

            $state.go('home.account');
        }
    }
}());
