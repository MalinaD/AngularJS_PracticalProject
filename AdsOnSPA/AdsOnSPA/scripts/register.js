 Parse.initialize(
        "lyyZxoKZqWBwUGJ8fLb9DV5nbQSMjRnVTARr56xQ",
        "k5SeG81JvG9cr1I7Ooc4D3Vm6DhfrJhn7XaSU540");

 angular.module('AuthApp', [])
 .run(['$rootScope', function ($scope) {
     $scope.scenario = 'Sign up';
     $scope.currentUser = Parse.User.current();

     $scope.signUp = function (form) {
         var user = new Parse.User();
         user.set("email", form.email);
         user.set("username", form.username);
         user.set("password", form.password);

         user.signUp(null, {
             success: function (user) {
                 $scope.currentUser = user;
                 $scope.$apply();
             },
             error: function (user, error) {
                 alert("Unable to sign up:  " + error.code + " " + error.message);
             }
         });
     };

     $scope.logIn = function (form) {
         Parse.User.logIn(form.username, form.password, {
             success: function (user) {
                 $scope.currentUser = user;
                 $scope.$apply();
             },
             error: function (user, error) {
                 alert("Unable to log in: " + error.code + " " + error.message);
             }
         });
     };

     $scope.logOut = function (form) {
         Parse.User.logOut();
         $scope.currentUser = null;
     };


     //$scope.constant('USER_ROLES', {
     //    all: '*',
     //    admin: 'admin',
     //    editor: 'editor',
     //    guest: 'guest'
     //});

     //$scope.constant('AUTH_EVENTS', {
     //    loginSuccess: 'auth-login-success',
     //    loginFailed: 'auth-login-failed',
     //    logoutSuccess: 'auth-logout-success',
     //    sessionTimeout: 'auth-session-timeout',
     //    notAuthenticated: 'auth-not-authenticated',
     //    notAuthorized: 'auth-not-authorized'
     //});


 }]);

