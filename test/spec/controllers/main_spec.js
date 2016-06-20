'use strict';

describe('Controller: myController', function () {
  var mockService, scope, mockData;

  beforeEach(function(){
    module('profileSearchApp');
  });

  mockData = [{'firstName': 'Megan', 'lastName': 'Fox','bio': 'asdsada'}, {'firstName': 'Arial', 'lastName': 'Fox','bio': 'asdsada'}];
  mockService = {
    getData: function(){ return mockData; }
  };

  beforeEach(inject(function($rootScope, $controller){
    spyOn(mockService, 'getData').and.callThrough();

    scope = $rootScope.$new();
    var controller = $controller('myController', {
      $scope: scope,
      myService: mockService
    });
  }));

  it('should invoke the service to get the data', function(){
    expect(mockService.getData).toHaveBeenCalled();
  });

  it('should load profiles', function(){
    expect(scope.profiles[0].lastName).toEqual('Fox');
  });

  it('should select first profile', function(){
    expect(scope.profiles[0].selected).toBe(true);
  });

  it('should sort the profiles by firstname', function(){
    expect(scope.profiles[0].firstName).toEqual('Arial');
  });

  describe('when a profile is selected', function(){
    beforeEach(function(){
      scope.$apply(function(){
        scope.openPanel(mockData[0]);
      });
    });

    it('should mark the profile as selected', function(){
      expect(scope.profiles[1].selected).toBe(true);
    });

    it('should reset other profiles', function(){
      expect(scope.profiles[0].selected).toBeUndefined();
    });
  });

});
