angular.module('myApp.factory', [])

.factory('Stories', function ($http) {
  // Your code here
  var getStories = function (Story) {
    return $http({
      method: 'GET',
      url: 'http://hn.algolia.com/api/v1/search?tags=front_page',
      data: Story
    })
    .then(function (resp) {
      return resp.data;
    });
  };


  return {
    getStories: getStories,
  };
  
});
