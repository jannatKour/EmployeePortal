(function(){
  'use strict';

  angular
    .module('myApp')
    .controller('HrController', HrController);

  HrController.$inject = ['$state'];

  function HrController($state){
    var hrCtrl = this;

    hrCtrl.tabs = [
      {
        name : 'Home',
        url : 'hr.home'
      },
      {
        name : 'Recruitment',
        url : 'hr.recruitment'
      },
      {
        name : 'Finance',
        url : 'hr.finance'
      },
      {
        name : 'Admin',
        url : 'hr.admin'
      }];
  }
})();