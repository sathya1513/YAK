'use strict';

angular.module('profileSearchApp')
  .controller('myController', ['$scope', 'myService', function ($scope, myService) {
    var data = myService.getData();
    $scope.profiles = _.sortBy(data, "firstName");
	$scope.profiles[0].selected = true;

    $scope.openPanel = function(ngModel){
    	var selectedProfile = _.find($scope.profiles, function(profile){ return !!profile.selected; });
    	selectedProfile.selected = undefined;
    	ngModel.selected = !ngModel.selected;
    };
  }]);
