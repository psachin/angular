var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) { // personCtrl is a function
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';
    $scope.fullName = function() { // fullName is a function
	return $scope.firstName + ' ' + $scope.lastName;
    }
});
