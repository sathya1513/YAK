'use strict';

angular.module('profileSearchApp')
  .controller('myController', ['$scope', 'myService', function ($scope, myService) {
    var data = myService.getData();
    $scope.profiles = _.sortBy(data, "firstName");
	$scope.profiles[0].selected = true;

    $scope.openPanel = function(ngModel){
    	_.each($scope.profiles, function(profile){
    		profile.selected = undefined;
    	});
    	ngModel.selected = !ngModel.selected;
    };
  }]);
