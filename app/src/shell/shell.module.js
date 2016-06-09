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
                abstract: true,
                url: '/home',
                templateUrl: 'src/shell/shell.html',
                controller: 'Home',
                controllerAs: 'vm'
            })
            .state('wizard', {
                url: '/wizard-start',
                templateUrl: 'src/wizard/wizard-start.html'
            })
            .state('home.catalog', {
                url: '/catalog',
                templateUrl: 'src/catalog/catalog.html'
            })
            .state('home.about', {
                url: '/about',
                templateUrl: 'src/core/about.html'
            })
            .state('home.product-detail', {
                url: '/product-detail',
                templateUrl: 'src/catalog/product-detail.html',
                controller: 'Product',
                controllerAs: 'vm'
            })
            .state('home.cart', {
                url: '/cart',
                templateUrl: 'src/checkout/cart.html',
            })
            .state('checkout', {
                url: '/checkout',
                templateUrl: 'src/checkout/checkout.html',
            })
            .state('checkout2', {
                url: '/checkout2',
                templateUrl: 'src/checkout/checkout2.html',
            })
            .state('home.terms', {
                url: '/terms-conditions',
                templateUrl: 'src/core/terms.html',
            })
            .state('home.privacy', {
                url: '/privacy',
                templateUrl: 'src/core/privacy.html',
            })
            .state('home.blog', {
                url: '/blog',
                templateUrl: 'src/core/blog.html',
            })
            .state('home.contact', {
                url: '/contact',
                templateUrl: 'src/core/contact.html',
            })


    };

}());
