(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('EmployeeController', EmployeeController);

  EmployeeController.$inject = ['$state'];

  function EmployeeController($state){
    var empCtrl  = this;

    empCtrl.options = [
      { name: 'UI Team',
       url: 'employee.delivery.ui'
      },
      {
        name: 'Server Side Team',
        url: 'employee.delivery.serversideteam'                     
      },
      {
        name: 'DB Team',
        url: 'employee.delivery.dbteam'
      },
      {
        name: 'QA Team',
        url: 'employee.delivery.qateam'
      }];

    empCtrl.tabs = [
      {
        name : 'Home',
        url : 'employee.home'
      },
      {
        name : 'Delivery',
        url : 'employee.delivery'
      },
      {
        name : 'Business Development',
        url : 'employee.bd'
      },
      {
        name : 'IT Support',
        url : 'employee.it'
      }
    ];
  }
})();