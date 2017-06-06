(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('AdministratorController', AdministratorController);

  AdministratorController.$inject = [];

  function AdministratorController(){
    var adminCtrl = this;

    adminCtrl.options = [
      { name: 'Users',
        url: 'users'
      },
      {
        name: 'Departments',
        url: 'department'                     
      },
      {
        name: 'Projects',
        url: 'projects'
      },
      {
        name: 'Clients',
        url: 'clients'
      }];

    adminCtrl.tabs = [
      { name: 'Home',
       url : 'home'
      },
      {
        name : 'Announcements',
        url : 'announcements'
      },
      {
        name : 'Settings',
        url : 'settings'
      }];

  }
})();