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
    })

      .state('administrator.settings.users', {
      url: '/users',
      templateUrl: 'app/features/Administrator/administrator.settings/settings.users.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('administrator.settings.department', {
      url: '/department',
      templateUrl: 'app/features/Administrator/administrator.settings/settings.department.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('administrator.settings.projects', {
      url: '/projects',
      templateUrl: 'app/features/Administrator/administrator.settings/settings.projects.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('administrator.settings.clients', {
      url: '/clients',
      templateUrl: 'app/features/Administrator/administrator.settings/settings.clients.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    });

  }
})();