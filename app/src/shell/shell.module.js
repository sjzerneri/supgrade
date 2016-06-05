/**
 * @ngdoc overview
 * @name app.shell
 * @description < description placeholder >
 */

(function () {

    'use strict';

    angular
        .module('app.shell', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider) {

        //add your state mappings here
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/shell/shell.html',
                controller: 'Home',
                controllerAs: 'vm'
            })
            .state('wizard', {
                url: '/wizard-start',
                templateUrl: 'src/wizard/wizard-start.html'
            })
            .state('catalog', {
                url: '/catalog',
                templateUrl: 'src/catalog/catalog.html'
            })
            .state('product-detail', {
                url: '/product-detail',
                templateUrl: 'src/catalog/product-detail.html',
                controller: 'Home',
                controllerAs: 'vm'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'src/checkout/cart.html',
                controller: 'Home',
                controllerAs: 'vm'
            })
            .state('checkout', {
                url: '/checkout',
                templateUrl: 'src/checkout/checkout.html',
                controller: 'Home',
                controllerAs: 'vm'
            })
            .state('checkout-2', {
                url: '/checkout2',
                templateUrl: 'src/checkout/checkout2.html',
                controller: 'Home',
                controllerAs: 'vm'
            })
    };

}());
