app.controller("myNoteCtrl", function($scope) {
    $scope.message = "";
    $scope.left = function() {return 100 - $scope.message.length};
    $scope.clear = function() {$scope.message = ""};
    $scope.save = function() {alert("Saved!")};
    $scope.read = function() {
    	if ($scope.left() <= 0) {
    	    return true;
    	} else {
    	    return false;
    	}
    };
});
