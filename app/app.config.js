'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.

  when('/image-grid-display', {
    template: '<image-grid-display></image-grid-display>'
  }).

  otherwise({redirectTo: '/image-grid-display'});
}]);
