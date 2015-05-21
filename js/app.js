var portal = angular.module('hf-portal', ['ngRoute', 'portalControllers']);

portal.config(function($routeProvider){
  $routeProvider
    .when('/fellows', {
      templateUrl: 'views/fellow.html',
      controller: 'FellowController'
    })
    .otherwise({
      redirectTo: '/'
    });
});


portal.controller('MainController', function($scope){


});