
app.controller('AddDetailsController',
function ($scope, $routeParams, adsData) {
    $scope.ad = adsData.getById($routeParams.adId);
});