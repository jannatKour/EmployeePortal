(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('EmployeeController', EmployeeController);

  EmployeeController.$inject = [];

  function EmployeeController(){
    var empCtrl  = this;

    empCtrl.options = [
      { name: 'UI Team',
       url: 'ui'
      },
      {
        name: 'Server Side Team',
        url: 'serversideteam'                     
      },
      {
        name: 'DB Team',
        url: 'dbteam'
      },
      {
        name: 'QA Team',
        url: 'qateam'
      }];

    empCtrl.tabs = [
      {
        name : 'Home',
        url : 'employeeHome'
      },
      {
        name : 'Delivery',
        url : 'ui'
      },
      {
        name : 'Business Development',
        url : 'bd'
      },
      {
        name : 'IT Support',
        url : 'it'
      }
    ];
  }
})();