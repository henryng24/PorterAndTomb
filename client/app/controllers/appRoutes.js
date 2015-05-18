angular.module('appRoutes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('allnews', {
      url: "/allnews",
      templateUrl: "/app/views/allnews.html"
    })

    .state('personal', {
      url: "/personal",
      templateUrl: "/app/views/personal.html"
    });

    $urlRouterProvider.otherwise("/");
    
});