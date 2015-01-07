Parse.initialize(
       "lyyZxoKZqWBwUGJ8fLb9DV5nbQSMjRnVTARr56xQ",
       "k5SeG81JvG9cr1I7Ooc4D3Vm6DhfrJhn7XaSU540");

    app.controller('adsPage', function ($scope, $http) {
         $scope.items = [];
         
         var categoryArray = [];
      

         $scope.getItems = function () {
             var data = [];
             $http({
                 method: 'GET',
                 url: 'https://api.parse.com/1/classes/Ads',
                 headers: {
                     'X-Parse-Application-Id': 'lyyZxoKZqWBwUGJ8fLb9DV5nbQSMjRnVTARr56xQ',
                     'X-Parse-REST-API-Key': '4kJ2BO9ErmT2ISLuLjHbQ78D0Dit60NiFGvZSLJS'
                 }

             })

             .success(function (data, status) {
                 
                 var obj = {
                     title: "",
                     text: "",
                     imageDataUrl: "",
                     categoryId: " ",
                     townId: ""
                 }

                 data.push(obj);
                 $scope.items = data;
             })
             .error(function (data, status) {
                 alert("Error");
             })
         }

         //makeCategoryList();

         //function makeCategoryList() {
         //    data.forEach(function (element) {
         //        if (categoryArray.indexOf(element.category) === -1) {
         //            categoryArray.push(element.category);
         //        };
         //    });
         //}
     });
