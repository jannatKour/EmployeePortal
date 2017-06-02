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

      .state('employee.home', {
      url:'/home',
      templateUrl: 'app/features/Employee/employee.home.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('employee.delivery', { 
      url:'/delivery',
      templateUrl: 'app/features/Employee/employee.delivery.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('employee.bd', {
      url: '/bd',
      templateUrl: 'app/features/Employee/employee.bd.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('employee.it', {
      url: '/it',
      templateUrl: 'app/features/Employee/employee.it.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('employee.delivery.ui', {
      url: '/ui',
      templateUrl: 'app/features/Employee/employee.delivery/delivery.uiteam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('employee.delivery.serversideteam', {
      url: '/serversideteam',
      templateUrl: 'app/features/Employee/employee.delivery/delivery.serversideteam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('employee.delivery.dbteam', {
      url: '/dbteam',
      templateUrl: 'app/features/Employee/employee.delivery/delivery.dbteam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    })

      .state('employee.delivery.qateam', {
      url: '/qateam',
      templateUrl: 'app/features/Employee/employee.delivery/delivery.qateam.tpl.html',
      controller: 'EmployeeController as empCtrl'
    });

  }
})();