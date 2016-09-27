/**
 * Created by vmuser016 on 2016/9/27.
 */
define([
    'controllers/controllers'
], function (controllers) {
    controllers.controller("aboutController" ,['$scope' ,function ($scope) {
        $scope.msg = "Something about this project !";
    }]);
});