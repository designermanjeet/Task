(function(angular, window) {

    'use strict';

    angular.module('msApp').controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'DashboardService'];

    function DashboardController($scope, DashboardService) {

        $scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.myForm.$valid) {
                DashboardService.login();
            }

        };


    }

}(angular, window))