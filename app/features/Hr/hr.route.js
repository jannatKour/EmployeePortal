(function(){
  'use strict';

  angular
    .module('myApp.hr')
    .config(homeConfig);

  homeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

  function homeConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider
      .when('/hr', '/hr/home')
      .otherwise('/hr/home');

    $stateProvider
      .state('hr',{
      url: '/hr',
      templateUrl:'app/features/Hr/hr.main.tpl.html',
      controller: 'HrController as hrCtrl'
    })

      .state('hr.home', {
      url: '/home',
      templateUrl: 'app/features/Hr/hr.home.tpl.html',
      controller: 'HrController as hrCtrl'   
    })

      .state('hr.recruitment', { 
      url:'/recruitment',
      templateUrl: 'app/features/Hr/hr.recruitment.tpl.html',
      controller: 'HrController as hrCtrl'
    })

      .state('hr.finance', {
      url: '/finance',
      templateUrl: 'app/features/Hr/hr.finance.tpl.html',
      controller: 'HrController as hrCtrl'
    })

      .state('hr.admin', {
      url: '/admin',
      templateUrl: 'app/features/Hr/hr.admin.tpl.html',
      controller: 'HrController as hrCtrl'
    });

  }
})();