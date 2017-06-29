(function(){
  'use strict';

  angular
    .module('myApp.employee')
    .controller('EmployeeController', EmployeeController);

  EmployeeController.$inject = ['storageService', '$state'];

  function EmployeeController(storageService, $state){
    var empCtrl  = this,
        menuItems = null;

    empCtrl.options = [
      { name: 'UI Team',
       
       url: 'ui'
      },
      {
        name: 'Server Side Team',
        url: 'serversideteam'                     
      },
      {
        name: 'DB Team',
        url: 'dbteam'
      },
      {
        name: 'QA Team',
        url: 'qateam'
      }];

    empCtrl.tabs = [
      {
        name : 'Home',
        url : 'employeeHome'
      },
      {
        name : 'Delivery',
        url : 'ui'
      },
      {
        name : 'Business Development',
        url : 'bd'
      },
      {
        name : 'IT Support',
        url : 'it'
      }
    ];

    menuItems = (empCtrl.tabs).length > 0 ? empCtrl.tabs : undefined;

    var state;
    
    function getState(){  
      state = storageService.getActiveState();
      if(state === null && menuItems.length > 0){
        setActiveState(menuItems[0].url);
      } else {
        setActiveState(state);
      }     
    }
    getState();

    empCtrl.setActiveState = setActiveState;
    function setActiveState(stateName){
      var i;
      empCtrl.activeMenu = stateName;
      storageService.setActiveState(empCtrl.activeMenu);
      if(menuItems !== undefined){
        for(i=0; i<menuItems.length; i++){
          if(stateName === menuItems[i].url){
            $state.go(stateName);
          }
        }
      }
    }
    
  }
})();