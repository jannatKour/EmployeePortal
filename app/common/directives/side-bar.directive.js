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
      templateUrl: 'app/common/templates/side-menu.tpl.html'
    };
  }
})();