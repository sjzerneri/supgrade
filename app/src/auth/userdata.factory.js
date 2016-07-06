/**
 * @ngdoc controller
 * @name app.auth.controller:Signup
 * @description < description placeholder >
 */

(function () {

    'use strict';

    angular
        .module('app.auth')
        .factory('UserData', UserData);

    /* @ngInject */
    function UserData() {
        return {
        	data: null
        }
    }
}());
