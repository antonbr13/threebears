angular.module('threebears', ['ui.router', 'ui.bootstrap'])







.config( function($stateProvider, $urlRouterProvider) {

   $stateProvider

      .state('home', {
         url           : '/',
         templateUrl   : 'js/home/homeView.html',
         controller    : 'homeCtrl',
         controllerAs  : 'home'
      })

      .state('bungalow', {
         url           : '/bungalow',
         templateUrl   : 'js/bungalow/bungalowView.html',
         controller    : 'bungalowCtrl'
      })

      .state('cottage', {
         url           : '/cottage',
         templateUrl   : 'js/cottage/cottageView.html',
         controller    : 'cottageCtrl'
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
