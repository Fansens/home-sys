/**
 * Created by vmuser016 on 2016/9/27.
 */
define([
    'app',
    'jquery'
] ,function (app ,$) {
    app.directive('xlAccordion' ,function ($scope, $) {
        var items_fc = ['item1' ,'item2' ,'item3'];
        return {
            restrict : 'EA', //元素（E） 、属性（A） 、类（C）或注释（M）
            //replace : true,   //将指令替换为template模板
            template : function (tElement ,tAttrs) {
                var info = '';
                for (item in items_fc){
                    info + item.toString();
                }
                return '<b>info:' + info + '</b>';
            }

        };
    });
});