/**
 * Created by vmuser016 on 2016/9/21.
 */

//用于加载需要的模块
//本模块供所有其他controller模块引用
define([
    'angular'
] ,function () {
    console.log("Start loading controllers/controllers ...");
    return angular.module("app.controllers" ,[]);
});