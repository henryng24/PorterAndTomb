angular.module('myApp')
  .controller('allStoriesController', ['$scope', "Stories", function($scope, Stories) {
    $scope.data = {};

    $scope.blah = function() {
      Stories.getStories().then(function(stories) {
        $scope.data.stories = stories.hits;
      })
    }

    $scope.blah();

  }]);