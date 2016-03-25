var app=angular.module('jsonApp',[]);
app.controller('jsonCtrl',function($scope,$http,shuchu){
    $scope.message="aaa";
    //方式1:通过get then方式，这样回调函数里的数据存在respones.data
    //$http.get("json.json").then(function(response){
    //    alert(JSON.stringify(response));
    //    $scope.message=response.data.records;
    //});
    shuchu.mmyfunc();
    //方式2：通过get success，这样回调函数里的数据存在respones
    $http.get("json.json").success(function(response){
        alert(JSON.stringify(response));
        $scope.message=response.records;
    }).error(function(err){
        console.log(err);
    });
});
//自定义服务，纯属实验
app.service('shuchu',function(){
    this.mmyfunc=function(){
        console.log("aa")
    };
});