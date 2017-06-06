(function(){
  'use strict';

  angular
    .module('myApp.employee')
    .config(homeConfig);

  homeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

  function homeConfig($urlRouterProvider, $stateProvider){

    $urlRouterProvider
      .when('/employee', '/employee/home');

    $stateProvider
      .state('employee', {
      url: '/employee',
      templateUrl: 'app/features/Employee/employee.main.tpl.html',
      controller: 'EmployeeController as empCtrl'  
    })

      .state('employeeHome', {
      url:'/home',
      parent: 'employee',
      templateUrl: 'app/features/Employee/employee.home.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('delivery', { 
      url:'/delivery',
      parent: 'employee',
      templateUrl: 'app/features/Employee/employee.delivery.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('bd', {
      url: '/bd',
      parent: 'employee',
      templateUrl: 'app/features/Employee/employee.bd.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('it', {
      url: '/it',
      parent: 'employee',
      templateUrl: 'app/features/Employee/employee.it.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('ui', {
      url: '/employee/delivery/ui',
      parent: 'delivery',
      templateUrl: 'app/features/Employee/employee.delivery/delivery.uiteam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('serversideteam', {
      url: '/employee/delivery/serversideteam',
      parent: 'delivery',
      templateUrl: 'app/features/Employee/employee.delivery/delivery.serversideteam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('dbteam', {
      url: '/employee/delivery/dbteam',
      parent: 'delivery',
      templateUrl: 'app/features/Employee/employee.delivery/delivery.dbteam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('qateam', {
      url: '/employee/delivery/qateam',
      parent: 'delivery',
      templateUrl: 'app/features/Employee/employee.delivery/delivery.qateam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    });

  }
})();