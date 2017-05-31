(function(){
  'use strict';
  
  angular
    .module('myApp')
    .controller('AdministratorController', AdministratorController);
  
  AdministratorController.$inject = ['$state'];
  
  function AdministratorController($state){
    var adminCtrl = this;
    
    adminCtrl.home = function(){
      $state.go('administrator.home');
    };
    
    adminCtrl.announcements = function(){
      $state.go('administrator.announcements');
    };
    
    adminCtrl.settings = function(){
      $state.go('administrator.settings');
    };
  }
})();