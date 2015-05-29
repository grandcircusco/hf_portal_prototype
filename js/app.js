var portal = angular.module('hf-portal', ['ngRoute', 'portalControllers', 'ui.bootstrap']);

portal.config(function($routeProvider){
  $routeProvider
    .when('/fellows', {
      templateUrl: 'partials/fellow.html',
      controller: 'FellowController'
    })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'RegisterController'
    })
    .otherwise({
      redirectTo: '/'
    });
});


portal.controller('MainController', function($scope){


});