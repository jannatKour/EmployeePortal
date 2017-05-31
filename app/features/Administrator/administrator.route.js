(function(){
  'use strict';

  angular
    .module('myApp.administrator')
    .config(homeConfig);

  homeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

  function homeConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider
      .when('/administrator', '/administrator/home')
      .otherwise('/administrator/home');

    $stateProvider
      .state('administrator', {
        url: '/administrator',
        templateUrl: 'app/features/Administrator/administrator.main.tpl.html',
        controller: 'AdministratorController as adminCtrl'  
    })
    
     .state('administrator.home', {
        url:'/home',
        templateUrl: 'app/features/Administrator/administrator.home.tpl.html',
        controller: 'AdministratorController as adminCtrl'
    })

      .state('administrator.announcements', { 
        url:'/announcements',
        templateUrl: 'app/features/Administrator/administrator.announcements.tpl.html',
        controller: 'AdministratorController as adminCtrl'
    })

      .state('administrator.settings', {
        url: '/settings',
        templateUrl: 'app/features/Administrator/administrator.settings.tpl.html',
        controller: 'AdministratorController as adminCtrl'
    });
    
  }
})();