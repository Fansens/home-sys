/**
 * Created by vmuser016 on 2016/9/21.
 */

define([
    'angular',
    'underscore',
    'jquery',
    'angularAnimate',
    'angularRoute',
    'angularResource',
    'services/index',
    'controllers/index'
] ,function (angular) {
    return angular.module('app', ['ngAnimate' ,'ngRoute' ,'ngResource' ,'services' ,'controllers']);
});