'use strict';
describe('unit: Employee controller', function(){
  beforeEach(angular.mock.module('myApp'));
  
  var $controller;
  
  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));
  
  describe('test employee controller', function(){
    it('checks if array is defined', function(){
      var $scope;
      var controller = $controller('Employee Controller', {$scope: $scope});
      expect($scope.tabs.length).toBeGreaterThan(0);
    });
  });
  
});