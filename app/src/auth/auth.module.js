/**
 * @ngdoc overview
 * @name app.auth
 * @description < description placeholder >
 */

(function () {

  'use strict';

  angular
    .module('app.auth', ['LocalStorageModule'])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider) {

    $stateProvider
      .state('home.signup', {
        url: '/signup/:redirectUrl',
        templateUrl: 'src/auth/signup.html',
        controller: 'Signup',
        controllerAs: 'vm',
        params: {
          redirectUrl: null
        }
      })
      .state('home.login', {
        url: '/login',
        templateUrl: 'src/auth/login.html',
        controller: 'Login',
        controllerAs: 'vm',
        params: {
          redirectUrl: null
        }
      })
      .state('home.account', {
        url: '/account',
        templateUrl: 'src/auth/account.html',
        controller: 'Account',
        controllerAs: 'vm'
      })
      .state('home.resetpw', {
        url: '/resetpw',
        templateUrl: 'src/auth/resetpw.html',
        controller: 'Resetpw',
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
