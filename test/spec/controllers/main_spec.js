'use strict';

describe('Controller: myController', function () {
  var mockService, scope, mockData;

  beforeEach(function(){
    module('profileSearchApp');
  });

  mockData = [1, 2, 3];
  mockService = {
    getData: function(){ return mockData; }
  };

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    var controller = $controller('myController', {
      $scope: scope,
      myService: mockService
    });
  }));

  it('should load profiles', function(){
    expect(scope.profiles[0]).toEqual(1);
  });
});
