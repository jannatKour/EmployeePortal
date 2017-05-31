(function(){
  'use strict';
  
  angular
    .module('myApp')
    .controller('HrController', HrController);
  
  HrController.$inject = ['$state'];
  
  function HrController($state){
    var hrCtrl = this;
    
    hrCtrl.home = function(){
      $state.go('hr.home');
    };
    
     hrCtrl.recruitment = function(){
      $state.go('hr.recruitment');
    };
    
     hrCtrl.finance = function(){
      $state.go('hr.finance');
    };
    
     hrCtrl.admin = function(){
      $state.go('hr.admin');
    };
  }
})();