angular.module('threebears', ['ui.router'])







.config( function($stateProvider, $urlRouterProvider) {

   $stateProvider

      .state('home', {
         url           : '/',
         templateUrl   : 'js/home/homeView.html',
         controller    : 'homeCtrl'
      })

      .state('amenities', {
         url           : '/amenities',
         templateUrl   : 'js/amenities/amenitiesView.html',
         controller    : 'amenitiesCtrl'
      })

      .state('resort', {
         url           : '/resort',
         templateUrl   : 'js/resort/resortView.html',
         controller    : 'resortCtrl'
      })

      .state('sandpoint', {
         url           : '/sandpoint',
         templateUrl   : 'js/sandpoint/sandpointView.html',
         controller    : 'sandpointCtrl'
      });



   $urlRouterProvider
      .otherwise('/');

});
