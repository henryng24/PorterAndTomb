angular.module('myApp', ['ui.router', 'appRoutes', 'myApp.factory'])
 .directive('ngHenry', function() {
  return {
    template: ['<div ng-repeat ="story in data.stories">',
    '<div> {{story.title}} </div>',
    '<div> this is our second line after ng repeat </div>',
    '</div>',
    ].join('')
  }
});