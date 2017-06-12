(function(){
  'use strict';

  angular
    .module('myApp.administrator',[])
    .config(appConfig);
  
  appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
  
  function appConfig($urlRouterProvider, $stateProvider){
    $urlRouterProvider
      .when('/administrator', '/administrator/home');
  }
})();