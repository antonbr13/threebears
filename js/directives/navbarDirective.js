angular.module('threebears')

.directive('navbarDirective', function() {

      return {
         restrict: "E",
         templateUrl: 'js/directives/navbarDirectiveView.html',
         controller: 'navbarDirectiveCtrl'


      };

});
