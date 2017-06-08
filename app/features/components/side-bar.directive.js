(function(){
  'use strict';
  
  angular
    .module('myApp')
    .directive('sidemenu', sidemenu);
  
  function sidemenu(){
    return{
      restrict: 'EA',
      scope: {
        items : '='  
      },
      templateUrl: 'app/features/layouts/side-menu.tpl.html'
    };
  }
})();