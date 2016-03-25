//var app=angular.module('myApp',[]);
//app.controller('myCtrl',function($scope,$rootScope){
//    $scope.firstName="tu";
//    $scope.lastName="yao";
//    $rootScope.namename="tuyaotuyao"
//    $scope.fullName=function(){
//        return $scope.firstName + " " +$scope.lastName;
//    };
//});
//app.controller('testCtrl',function($scope,$rootScope){
//    $scope.testName="test";
//    $scope.names=["joe","hiw","guq"];
//    $scope.names1=[{name:'Jani',country:'Norway'},
//        {name:'Hege',country:'Sweden'},
//        {name:'Kai',country:'Denmark'}];
//    $rootScope.firstName="tutu";
//    $rootScope.namename="tuyao";
//    $rootScope.testName="testtest";
//
//});
//app.directive('testDirective',function(){
//    return{
//        template : "<h1>自定义指令！</h1>"
//    };
//});

angular.module('myApp',[]).controller('myCtrl',function($scope,$rootScope){
    $scope.firstName="c";
    $scope.lastName="y";
    $rootScope.namename="cycy";
    $scope.fullName=function(){
        return $scope.firstName + " " +$scope.lastName;
    };
}).controller('testCtrl',function($scope,$rootScope,$timeout,$interval,aabbcc){
    $scope.testName=aabbcc.myFunc(255);
    $scope.names=["joe","hiw","guq"];
    $scope.names1=[{name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}];
    $rootScope.firstName="cc";
    $rootScope.namename="cy";
    $rootScope.testName=aabbcc.myFunc(255);
    $timeout(function(){
        $scope.testName="testtesttesttest";
    },2000);
    $scope.theTime= new Date().toLocaleTimeString();
    $interval(function(){
        $scope.theTime= new Date().toLocaleTimeString();
    },1000);

}).directive('testDirective',function(){
    return{
        template : "<h1>自定义指令！</h1>"
    };
}).controller('urltest',function($scope,$location,$http){
    $scope.myUrl=$location.absUrl();
    $http.get('#').then(function(response){
        $scope.myWelcome = response.data;
    });
}).service('aabbcc',function(){
    this.myFunc=function(x){
        return x.toString(16);
    };
}).filter('myFormat',['aabbcc',function(aabbcc){
    return function(x){
        return aabbcc.myFunc(x);
    };
}]);