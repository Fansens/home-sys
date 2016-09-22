/**
 * Created by vmuser016 on 2016/9/21.
 */
define([
    'controllers/controllers'
] ,function (controllers) {
    controllers.factory('homeController', ['$scope' ,function ($resource) {
        $scope.msg = "World !";
    }]);
});