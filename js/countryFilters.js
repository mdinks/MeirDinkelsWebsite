/*global angular*/
(function () {
    "use strict";
    
    var countryFilters = angular.module('countryFilters', []);
    countryFilters.filter('encodeURI', function () {
        return encodeURI;
    });
}());