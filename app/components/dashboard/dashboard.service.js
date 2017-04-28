(function(angular, window) {

    'use strict';

    angular.module('msApp').factory('DashboardService', DashboardService);

    DashboardService.$inject = ['$http'];

    function DashboardService($http) {

        return {
            login: login
        }

        function login() {
            // Simple GET request example:
            $http({
                method: 'GET',
                url: 'http://requestb.in/18ouh7f1',
               
                headers: {
                     'Access-Control-Allow-Origin': true
                }
            }).then(function successCallback(response) {
                //console.log(response);
                
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(error) {
                //console.log(error);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
    }
}(angular, window))