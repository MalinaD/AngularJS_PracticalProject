'use strict';

app.controller('LoginController',
    function ($scope,$rootScope, $location, authServices, notifyService) {
        $scope.login = function (userData) {
            authServices.login(userData,
                function success() {
                    notifyService.showInfo("Login successful");
                    $location.path("/");
                },
                function error(err) {
                    //TODO
                });
        };
    }
);