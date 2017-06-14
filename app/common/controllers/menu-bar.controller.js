(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('MenuController', MenuController);

  function MenuController(){
    var menuCtrl = this;

    menuCtrl.setDefault = function(items){
       menuCtrl.activeMenu = items[0].name;
    };
    
    menuCtrl.setActiveState = function(item){
      menuCtrl.activeMenu = item.name;
    };
  }
})();
