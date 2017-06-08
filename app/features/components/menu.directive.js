(function(){
  'use strict';
  
  angular
    .module('myApp')
    .directive('menu', menu);
  
  function menu(){
    return{
      restrict: 'EA',
      scope: {
        items: '=' 
      },
      templateUrl: 'app/features/layouts/menuBar.tpl.html'
    };
  }
})();