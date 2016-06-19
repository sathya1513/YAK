'use strict';

angular.module('profileSearchApp')
  .controller('myController', ['$scope', 'myService', function ($scope, myService) {
    $scope.profiles = myService.getData();
  }]);
