/**
 * Created by vmuser016 on 2016/9/21.
 */
define([
    'controllers/controllers'
] ,function ( controllers) {
    console.log("Start loading controllers/loginController.js ...");
    controllers.controller('loginController' ,['$scope' ,function ($scope) {
        $scope.msg = "hello ,world !";
        console.log("Loading controllers/loginController.js ...");
    }]);
});