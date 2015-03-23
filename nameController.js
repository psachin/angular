angular.module('myApp', []).controller('nameCtrl', function($scope) {
    $scope.names = [
	{name:'Jani', country:'Norway'},
	{name:'John', country:'Finland'},
	{name:'Harry', country:'Holland'},
	{name:'Simpson', country:'Homer'}
    ];
});
