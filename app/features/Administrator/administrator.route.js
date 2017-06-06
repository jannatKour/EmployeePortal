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

      .state('home', {
      url:'/home',
      parent: 'administrator',
      templateUrl: 'app/features/Administrator/administrator.home.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('announcements', { 
      url:'/announcements',
      parent: 'administrator',
      templateUrl: 'app/features/Administrator/administrator.announcements.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('settings', {
      url: '/settings',
      parent: 'administrator',
      templateUrl: 'app/features/Administrator/administrator.settings.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('users', {
      url: '/administrator/settings/users',
      parent: 'settings',
      templateUrl: 'app/features/Administrator/administrator.settings/settings.users.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('department', {
      url: '/administrator/settings/department',
      parent: 'settings',
      templateUrl: 'app/features/Administrator/administrator.settings/settings.department.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('projects', {
      url: '/administrator/settings/projects',
      parent: 'settings',
      templateUrl: 'app/features/Administrator/administrator.settings/settings.projects.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    })

      .state('clients', {
      url: '/administrator/settings/clients',
      parent: 'settings',
      templateUrl: 'app/features/Administrator/administrator.settings/settings.clients.tpl.html',
      controller: 'AdministratorController as adminCtrl'
    });

  }
})();