(function(){
  'use strict';

  angular
    .module('myApp.hr')
    .controller('HrController', HrController);

  HrController.$inject = [];

  function HrController(){
    var hrCtrl = this;

    hrCtrl.tabs = [
      {
        name : 'Home',
        url : 'hrHome',
      },
      {
        name : 'Recruitment',
        url : 'recruitment'
      },
      {
        name : 'Finance',
        url : 'finance'
      },
      {
        name : 'Admin',
        url : 'admin'
      }];
  }
})();