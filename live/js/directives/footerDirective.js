angular.module('threebears')

.directive('footerDirective', function() {

      return {
         restrict: "E",
         templateUrl: 'js/directives/footerDirective.html',
         controller: 'footerDirectiveCtrl'


      };

});
