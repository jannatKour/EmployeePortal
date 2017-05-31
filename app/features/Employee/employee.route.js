(function(){
  'use strict';

  angular
    .module('myApp.employee')
    .config(homeConfig);

  homeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

  function homeConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider
      .when('', '/employee/home')
      .when('/employee', '/employee/home')
      .otherwise('/employee/home');

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
    });
    
  }
})();