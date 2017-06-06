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

      .state('hrHome', {
      url: '/home',
      parent: 'hr',
      templateUrl: 'app/features/Hr/hr.home.tpl.html',
      controller: 'HrController as hrCtrl'   
    })

      .state('recruitment', { 
      url:'/recruitment',
      parent: 'hr',
      templateUrl: 'app/features/Hr/hr.recruitment.tpl.html',
      controller: 'HrController as hrCtrl'
    })

      .state('finance', {
      url: '/finance',
      parent: 'hr',
      templateUrl: 'app/features/Hr/hr.finance.tpl.html',
      controller: 'HrController as hrCtrl'
    })

      .state('text', {
      url: '/text',
      parent: 'hr',
      templateUrl: 'app/features/Hr/partial.tpl.html',
      controller: 'HrController as hrCtrl'
    })

      .state('admin', {
      url: '/admin',
      parent: 'hr',
      templateUrl: 'app/features/Hr/hr.admin.tpl.html',
      controller: 'HrController as hrCtrl'
    });

  }
})();