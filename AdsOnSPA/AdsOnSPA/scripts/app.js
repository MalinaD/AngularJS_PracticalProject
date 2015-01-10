'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource','ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 2);

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

    $routeProvider.when('/add', {
        templateUrl: "../templates/adDetails.html",
        controller: 'AddDetailsController'
    });

    $routeProvider.when('/user/publish-new-add', {
        templateUrl: "../templates/publishNewAd.html",
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
    });
});