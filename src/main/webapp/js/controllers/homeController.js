/**
 * Created by vmuser016 on 2016/9/21.
 */
define([
    'controllers/controllers'
] ,function (controllers) {
    console.log("Start loading controllers/homeController.js ...");
    controllers.controller('homeController', ['$scope' ,function ($scope) {
        console.log("Loading controllers/homeController.js ...");
        $scope.msg = "World !";
    }]);
});