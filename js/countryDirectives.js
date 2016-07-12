/*global angular*/
(function () {
    "use strict";
    
    var countryDirectives = angular.module('countryDirectives', []);
    
    countryDirectives.directive('country', function () {
        return {
            restrict: 'A',
            scope: {
                country: '='
            },
            templateUrl: 'countryLink.html'
        };
    });
}());