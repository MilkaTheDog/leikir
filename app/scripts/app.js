'use strict';

/**
 * @ngdoc overview
 * @name leikirApp
 * @description
 * # leikirApp
 *
 * Main module of the application.
 */
angular
    .module('leikirApp', [
        'ui.router',
        'ngDialog'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("index");
        $stateProvider
            .state('index', {
                controller: "MainCtrl",
                controllerAs: "mainCtrl",
                url: "/",
                templateUrl: "views/main.html"
            })
            .state('about', {
                controller: "AboutCtrl",
                controllerAs: "aboutCtrl",
                url: "/about",
                templateUrl: "views/about.html"
            });
    });