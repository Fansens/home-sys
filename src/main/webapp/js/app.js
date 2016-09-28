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
    'controllers/index',
    'directives/index'
] ,function () {
    console.log("start loading app.js ...");
    return angular.module('app', ['ngAnimate', 'ngRoute', 'ngResource', 'app.services', 'app.controllers' ,'app.directives']);
});