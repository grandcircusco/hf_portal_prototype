var portalControllers = angular.module('portalControllers', []);

portalControllers.controller('FellowController', function($scope){
  console.log('hi mom');
  $scope.fellows = ['look', 'at', 'all', 'these', 'things'];

});