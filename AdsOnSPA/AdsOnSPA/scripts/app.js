'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 5);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "../templates/home.html",
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: "../templates/login.html",
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: "../templates/register.html",
        controller: 'RegisterController'
    });

    //$routeProvider.when('/ads/GET-api-Ads?StartPage={1}&PageSize={10}', {
    //    templateUrl: "../templates/home.html",
    //    controller: 'AddDetailsController'
    //});

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

})