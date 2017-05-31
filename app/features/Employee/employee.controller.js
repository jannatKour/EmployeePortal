(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('EmployeeController', EmployeeController);

  EmployeeController.$inject = ['$state'];

  function EmployeeController($state){
    var empCtrl  = this;

    empCtrl.delivery = function(){
      $state.go('employee.delivery');
      console.log($state);
    };

    empCtrl.home = function(){
      $state.go('employee.home');
    };

    empCtrl.businessDevelopment = function(){
      $state.go('employee.bd');
    };

    empCtrl.it = function(){
      $state.go('employee.it');
    };
  }
})();