(function(){
  'use strict';

  angular
    .module('myApp.employee',[])
    .config(appConfig);
  
  appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
  
  function appConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider
      .when('/employee', '/employee/home')
      .when('/employee/delivery', '/employee/delivery/ui');
  }
})();