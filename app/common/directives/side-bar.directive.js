(function(){
  'use strict';
  
  angular
    .module('myApp')
    .directive('sidemenu', sidemenu);
  
  function sidemenu(){
    return{
      scope: {
        items : '='  
      },
      templateUrl: 'app/common/templates/side-menu.tpl.html',
      controller: 'SideBarController',
      controllerAs: 'sideCtrl'
    };
  }
})();