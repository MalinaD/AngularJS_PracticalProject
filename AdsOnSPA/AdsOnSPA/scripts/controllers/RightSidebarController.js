'use strict';

app.controller('RightSidebarController',
    function ($scope, $rootScope, categoriesSerivces, townsServices) {
        $scope.categories = categoriesSerivces.getCategories();
        $scope.towns = townsServices.getTowns();

        $scope.categoryClicked = function (clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };

        $scope.townClicked = function (clickedTownId) {
            $scope.selectedTownId = clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };
    }
);