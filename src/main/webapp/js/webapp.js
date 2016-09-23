/**
 * Created by vmuser016 on 2016/9/21.
 */

//require配置
require.config({
    paths : {
        "angular" : "angular/angular",
        "angularAnimate" : "angular/angular-animate",
        "angularRoute" : "angular/angular-route",
        "angularResource" : "angular/angular-resource",
        "bootstrap" : "bootstrap/bootstrap.min",
        "jquery" : "jquery-3.1.0",
        "require" : "require",
        "domReady" : "domReady",
        "underscore" : "underscore",
        "app" : "app"
    },
    shim :{
        angular : {
            exports : "angular"
        },
        jquery : {
            exports : "jquery"
        },
        angularAnimate : {
          deps : ["angular"]
        },
        angularRoute : {
            deps : ["angular"]
        },
        angularResource : {
            deps : ["angular"]
        },
        bootstrap : {
            deps : ["jquery"]
        }
    },
    urlArgs : "bust" + (new Date()).getTime()
});

//加载路由信息
define([
    'require',
    'angular' ,
    'app',
    'route'
], function (require,ng) {
    //使用bootstrap方法启动Angular应用
    console.log("start loading webapp.js ...");
    require(['domReady!'] ,function (document) {
        ng.bootstrap(document, ['app']);
    });
    //angular.bootstrap(document, ['app']);
    console.log("loading webapp.js success ...");
});

/*
require([
    'angular',
    'jquery',
    'underscore',
    'bootstrap',
    'requireJs',
    'angularAnimate',
    'angularRoute',
    'angularResource',
    'app',
    'route'

] ,function (angular, $, _) {
    console.log("Start loading webapp.js ...");
    angular.bootstrap(document, ['app']);
    console.log("loading webapp.js success ...");
});*/
