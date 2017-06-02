(function(){
  'use strict';

  angular
    .module('myApp', [
    'ui.router',
    'myApp.employee',
    'myApp.hr',
    'myApp.administrator',
  ])
    .config(appConfig);
  
  appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
  
  function appConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider
      .when('', '/employee/home');
  }
})();