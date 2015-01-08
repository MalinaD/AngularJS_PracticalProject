app.directive('leftPublicSidebar', function () {
    return {
        controller: 'HomeController',
        restrict: 'E', //E = element
        templateUrl: '../templates/home.html',
        replace: true
    };
});