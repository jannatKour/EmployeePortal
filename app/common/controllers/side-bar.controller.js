(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('SideBarController', SideBarController);

  
  function SideBarController(){
    var sideCtrl = this,
        isInitial = true;

    sideCtrl.setInitialState = function(items){
        sideCtrl.activeMenu = items[0].name;
    };

    sideCtrl.setActiveState = function(item){
      sideCtrl.activeMenu = item.name;  
    };
  }
})();