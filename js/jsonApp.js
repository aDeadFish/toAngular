var app=angular.module('jsonApp',[]);
app.controller('jsonCtrl',function($scope,$http,shuchu){
    $scope.message="aaa";
    //��ʽ1:ͨ��get then��ʽ�������ص�����������ݴ���respones.data
    //$http.get("json.json").then(function(response){
    //    alert(JSON.stringify(response));
    //    $scope.message=response.data.records;
    //});
    shuchu.mmyfunc();
    //��ʽ2��ͨ��get success�������ص�����������ݴ���respones
    $http.get("json.json").success(function(response){
        alert(JSON.stringify(response));
        $scope.message=response.records;
    }).error(function(err){
        console.log(err);
    });
});
//�Զ�����񣬴���ʵ��
app.service('shuchu',function(){
    this.mmyfunc=function(){
        console.log("aa")
    };
});