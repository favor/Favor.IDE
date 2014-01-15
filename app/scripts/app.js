'use strict';

var app = angular.module('favorIde', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.ace',
  'angularBootstrapNavTree',
  'ui.sortable',
  'favor-keypress',
  'favor-focus',
  'favor.resizable'
]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
