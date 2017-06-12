(function(){
  'use strict';
  
  angular
    .module('myApp')
    .directive('menu', menu);
  
  function menu(){
    return{
      scope: {
        items: '=' 
      },
      templateUrl: 'app/common/templates/menu-bar.tpl.html',
    };
  }
})();