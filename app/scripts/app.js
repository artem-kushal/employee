'use strict';

angular
  .module('employeesApp', [
    'ngResource',
    'ngRoute',
    'employeesAppControllers',
    'employeesAppServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
