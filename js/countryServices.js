/*global angular*/
(function () {
    "use strict";
    
    var countryServices = angular.module('countryServices', []);
    countryServices.service('countryFactory', function ($http) {
        var theCountries,
            countryNames;
        
        function getData(type, callback) {
            /*if (!theCountries) {
                $http.get('https://restcountries.eu/rest/v1/all')
                    .success(function (data) {
                        theCountries = data;
                        //countryNames = data.map(function () {return this.name; });
                        callback(theCountries);
                    });
            } else {
                callback(theCountries);
            }*/
            $http({
                method: 'get',
                //url: 'https://restcountries.eu/rest/v1/all',
                url: 'js/countries.json',
                cache: true
            }).success(function (data) {
                var returnValue;
                
                theCountries = data;
                countryNames = data.map(function (currentValue) {
                    return currentValue.name;
                });
                switch (type) {
                case "countries":
                    returnValue = theCountries;
                    break;
                case "countriesNames":
                    returnValue = countryNames;
                    break;
                }
                callback(returnValue);
            });
        }

        this.getCountries = getData;
        this.findCountry = function (countryName, callback) {
            getData("countries", function (data) {
                var theCountry = data.find(function (country) {
                    return country.name === countryName;
                });

                callback(theCountry);
            });
        };
    });
}());


