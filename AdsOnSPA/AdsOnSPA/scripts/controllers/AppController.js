'use strict';

app.controller('AppController',
    function ($scope, authService) {
        $scope.authService = authService;

        $scope.logout = function () {
            authService.logout()
            //TODO logout notification and redirection to the app home page
        }
    })