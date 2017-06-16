(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['storageService', '$scope', '$state'];

  function MenuController(storageService, $scope, $state){
    var menuCtrl = this,
        temp;

    function getState(){  
      temp = storageService.getActiveState();
      if(temp === null){
        setActiveState($scope.items[0].url);
      } else {
        $state.go(temp);
      }     
    }
    getState();

    menuCtrl.setActiveState = setActiveState;
    function setActiveState(stateName){
      menuCtrl.activeMenu = stateName;
      storageService.setActiveState(menuCtrl.activeMenu);
    }
  }
})();
