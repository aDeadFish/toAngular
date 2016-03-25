app.provider('myProvider',function(){
    this.thingFromConfig='aaa';
    this.$get=function(){
        return{
            thingOnConfig : this.thingFromConfig
        }
    }
});
//app.config(function(myProviderProvider){
//    myProviderProvider.thingOnConfig="asdasd";
//});
app.config(["myProviderProvider",function(myProviderProvider){
    myProviderProvider.thingFromConfig="aaaa";
}]);
app.controller('myCtrl',function($scope,myProvider){
    $scope.firstName="John";
    $scope.lastName=myProvider.thingOnConfig;
    $scope.reset=function(){
        $scope.firstName="John";
        $scope.lastName="Doe";
        $scope.email = 'john.doe@gmail.com';
    };
    console.log(myProvider.thingOnConfig);
});