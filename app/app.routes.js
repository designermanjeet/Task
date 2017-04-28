(function(angular, window) {

    'use strict';

    angular.module('msApp').config(config);

    config.$inject = ['$routeProvider','$locationProvider'];

    function config($routeProvider,$locationProvider) {
        
       $locationProvider.hashPrefix('!');


        /* routes configs */
        $routeProvider.when('/home', {
            templateUrl: 'app/components/home/homeView.html',
            controller: 'HomeController'
        });

        $routeProvider.when('/dashboard', {
            templateUrl: 'app/components/dashboard/dashboardView.html',
            controller: 'DashboardController'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    };



}(angular, window))