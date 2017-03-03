'use strict';
var modelComperatorApp = angular.module('modelComperatorApp', [
    'ui.router',
    'loginModule',
    'homeModule',
    'ui.select',
    'ngSanitize',
    'ui.bootstrap',
    'ngResource',
    'ngFileUpload'
]);

modelComperatorApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('home', {
            url: "/home",
            controller : 'homeController as hm',
            templateUrl : 'includes/views/home/home.html'
        })
        .state('login', {
            url: "/login",
            controller : 'loginController as lg',
            templateUrl : 'includes/views/login/login.html'
        })
        .state('upload', {
            url: "/upload",
            controller : 'homeController as hm',
            templateUrl : 'includes/views/home/upload.html'
        });
});