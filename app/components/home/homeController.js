(function(angular, window) {

        'use strict';

        angular.module('msApp').controller('HomeController',HomeController);
    
        HomeController.$inject = ['$scope', '$location'];

        function HomeController($scope, $location) {

            $scope.question = "Who is the president of USA?";
            $scope.answer1 = "Narendra Damodardas Modi";
            $scope.answer2 = "Donald John Trump";

            $scope.onRadiochange = function() {
                if ($scope.myValue2) {
                    $location.path('/dashboard');
                }
            }

        }

    }(angular, window))