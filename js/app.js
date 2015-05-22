var portal = angular.module('hf-portal', ['ngRoute', 'portalControllers', 'ui.bootstrap']);

portal.config(function($routeProvider){
  $routeProvider
    .when('/fellows', {
      templateUrl: 'partials/fellow.html',
      controller: 'FellowController'
    })
    .otherwise({
      redirectTo: '/'
    });
});


portal.controller('MainController', function($scope){


});