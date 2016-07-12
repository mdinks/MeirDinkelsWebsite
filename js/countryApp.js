/*global angular*/
(function () {
    "use strict";
    
    var app = angular.module('countriesApp', ['ngRoute', 'countryControllers', 'countryDirectives', 'countryFilters', 'countryServices']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'countryList.html',
                controller: 'countryController'
            })
            .when('/:countryName', {
                templateUrl: 'detailsPage.html',
                controller: 'detailsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}());



