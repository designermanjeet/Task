(function(angular, window) {

    'use strict';

    angular.module('msApp').config(['$httpProvider',
        function($httpProvider) {

            $httpProvider.interceptors.push(function($q, $rootScope) {

                return {

                    'responseError': function(rejection) {

                        var defer = $q.defer();

                        if (rejection.status == -1) {
                            console.log("No 'Access-Control-Allow-Origin' header is present on the requested resource.");
                            $rootScope.corsError = true;
                        }

                        defer.reject(rejection);

                        return defer.promise;

                    }
                };
            });

        }
    ]);


    



}(angular, window))