var portalControllers = angular.module('portalControllers', []);

portalControllers.controller('FellowModalController', function($scope, $modalInstance, index){
  $scope.person = $scope.fellows[index];
  console.log($scope.person);


  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

portalControllers.controller('FellowController', function($scope, $modal, $http){
  $http.get('http://localhost:3000/fellows').
    success(function(data, status) {
      $scope.fellows = data;
    }).
    error(function(data, status) {

    });

  $scope.open = function(index) {
    // console.log(fellow);

    var fellowModal = $modal.open({
      templateUrl: 'partials/fellow-detail.html',
      controller: 'FellowModalController',
      size: 'lg',
      scope: $scope,
      resolve: {
        index: function() {
          return index;
        }
      }
    });

    fellowModal.result.then(function(things){
      console.log('modal closed, here\'s some data ' + things);
    }, function(){
      console.log('Modal dismissed at ' + new Date());
    });
  };

  $scope.listLanguages = function(languages) {
      var languagesKnown = "";
      languages.forEach(function(language, index) {
        if (index < (languages.length - 1)) {
          languagesKnown += language + ', ';
        } else {
          languagesKnown += language;
        }
      });
      return languagesKnown;
  };


});