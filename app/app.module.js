(function(){
  'use strict';

  angular
    .module('myApp', [
    'ui.router',
    'myApp.employee',
    'myApp.hr',
    'myApp.administrator'
  ]);
})();