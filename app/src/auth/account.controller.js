/**
 * @ngdoc controller
 * @name app.auth.controller:Signup
 * @description < description placeholder >
 */

(function () {

    'use strict';

    angular
        .module('app.auth')
        .controller('Account', ['$http', '$state', 'UserData', 'localStorageService', Account]);

    /* @ngInject */
    function Account($http, $state, UserData, localStorageService) {
        var vm = this;
        vm.data = localStorageService.get('authinfo');
        vm.last = "XXXXX"
        // console.log(store.get('data'));
    }
}());
