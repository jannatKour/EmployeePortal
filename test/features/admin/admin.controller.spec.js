'use strict';
describe('Unit : Administrator Controller', function(){
  beforeEach(module('myApp.administrator'));
  
  var adminCtrl;
  
  beforeEach(function(_$controller_){
    adminCtrl = _$controller_('AdministratorController', {});
  });
  
  it('tesd',function(){ 
    expect(adminCtrl.testFunc()).toBe(true);
  });
});