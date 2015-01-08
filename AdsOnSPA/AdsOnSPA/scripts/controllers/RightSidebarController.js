'use strict';

app.controller('RightSidebarController',
    function ($scope, $rootScope, categoriesSerivces) {
        $scope.categories = categoriesSerivces.getCategories();

        $scope.categoryClicked = function (clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };
    }
);