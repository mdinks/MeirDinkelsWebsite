/*global angular*/
(function () {
    "use strict";
    
    var countryControllers = angular.module('countryControllers', []);

    countryControllers.controller('countryController', function ($scope, $http, countryFactory) {
        $scope.reverse = false;
        countryFactory.getCountries("countriesNames", function (data) {
            $scope.countriesNames = data;
        });
    });

    countryControllers.controller('detailsController', function ($scope, $routeParams, $http, countryFactory) {
        countryFactory.findCountry($routeParams.countryName, function (country) {
            $scope.country = country;
        });
    });
}());