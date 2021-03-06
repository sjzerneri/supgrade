/**
 * @ngdoc overview
 * @name app.catalog
 * @description < description placeholder >
 */

(function() {

    'use strict';

    angular
        .module('app.catalog', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider) {

        $stateProvider
            .state('home.catalog', {
                url: '/catalog',
                templateUrl: 'src/catalog/catalog.html',
                controller: 'Catalog',
                controllerAs: 'vm'
            })
            .state('home.checkout', {
                url: '/checkout',
                templateUrl: 'src/checkout/checkout.html'
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
