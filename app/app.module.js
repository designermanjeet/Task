var msApp = angular.module('msApp', ['ngRoute']);

msApp.config(['$routeProvider', function($routeProvider) {
    /* routes configs */
    $routeProvider.
    when('/home', {
       templateUrl: 'app/components/home/homeView.html',
       controller: 'homeController'
    })
    .when('/dashboard', {
       templateUrl: 'app/components/dashboard/dashboardView.html',
       controller: 'dashboardController'
    }).
    otherwise({
       redirectTo: '/home'
    }); 
}]);

msApp.controller('homeController', ['$scope', '$location', function ($scope, $location) {
     $scope.question="Who is the president of USA?";
     $scope.answer1 = "Narendra Damodardas Modi";
     $scope.answer2 = "Donald John Trump";
    
    $scope.logIt=function(){
        if($scope.myValue2) {
            $location.path('/dashboard');
        }
    }
    
  }]);


msApp.controller('dashboardController', ['$scope', function ($scope) {
    $scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.myForm.$valid) {
                alert('our form is amazing');
            }

        };
    
  }]);



