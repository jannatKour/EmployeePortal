(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('AdministratorController', AdministratorController);

  AdministratorController.$inject = ['$state'];

  function AdministratorController($state){
    var adminCtrl = this;

    adminCtrl.options = [
      { name: 'Users',
        url: 'administrator.settings.users'
      },
      {
        name: 'Departments',
        url: 'administrator.settings.department'                     
      },
      {
        name: 'Projects',
        url: 'administrator.settings.projects'
      },
      {
        name: 'Clients',
        url: 'administrator.settings.clients'
      }];

    adminCtrl.tabs = [
      { name: 'Home',
       url : 'administrator.home'
      },
      {
        name : 'Announcements',
        url : 'administrator.announcements'
      },
      {
        name : 'Settings',
        url : 'administrator.settings'
      }];

  }
})();