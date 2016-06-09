/**
 * @ngdoc overview
 * @name app.auth
 * @description < description placeholder >
 */

(function () {

    'use strict';

    angular
        .module('app.auth', ['angular-storage'])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider) {

        $stateProvider
            .state('home.signup', {
                url: '/signup',
                templateUrl: 'src/auth/signup.html',
                controller: 'Signup',
                controllerAs: 'vm'
            })
            .state('home.login', {
                url: '/login',
                templateUrl: 'src/auth/login.html',
                controller: 'Login',
                controllerAs: 'vm'
            })
            //add your state mappings here
            //$stateProvider
            //  .state('Welcome', {
            //    url:'/welcome',
            //    templateUrl:'src/welcome/welcome.html',
            //    controller: 'WelcomeCtrl as vm'
            //  }
            //);
    }

}());
