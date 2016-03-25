app.controller('myCtrl',function($scope){
    $scope.firstName="John";
    $scope.lastName="Doe";
    $scope.reset=function(){
        $scope.firstName="John";
        $scope.lastName="Doe";
        $scope.email = 'john.doe@gmail.com';
    }
});
app.provider('myProvider',function(){
   var baseUrl = 'https://www.baidu.com' ;
    var _artist = '';
    var _finalUrl='';
    var thingFromConfig='';
    var makeUrl=function(){
        _artist = _artist.split(' ').join('+');
        _finalUrl =baseUrl+_artist+'&ss=ss';
        return _finalUrl;
    };
    this.$get=function($http,$q){
        return{
            callItune:function(){
                makeUrl();
                var deferred = $q.defer();
                $http({
                    method:'JSONP',
                    url:_finalUrl
                }).success(function(data){
                    deferred.resolve(data);
                }).error(function(){
                    deferred.reject('three was an error');
                });
                return deferred.promise;
            },
            setArtist :function(artist){
                _artist=artist;
            },
            getArtist:function(){
                return _artist;
            },
            thingOnConfig : thingFromConfig
        }
    }
});

app.service('myService',function($http,$q){
    var baseUrl = 'https://www.baidu.com' ;
    var _artist = '';
    var _finalUrl='';
    var makeUrl=function(){
        _artist = _artist.split(' ').join('+');
        _finalUrl =baseUrl+_artist+'&ss=ss';
        return _finalUrl;
    };
    this.setArtist =function(artist){
        _artist=artist;
    };
    this.getArtist=function(){
        return _artist;
    };
    this.callItune=function(){
        makeUrl();
        var deferred = $q.defer();
        $http({
            method:'JSONP',
            url:_finalUrl
        }).success(function(data){
            deferred.resolve(data);
        }).error(function(){
            deferred.reject('three was an error');
        });
        return deferred.promise;
    }
});

app.factory('myFactory',function($http,$q){
    var service={};
    var baseUrl = 'https://www.baidu.com' ;
    var _artist = '';
    var _finalUrl='';
    var makeUrl=function(){
        _artist = _artist.split(' ').join('+');
        _finalUrl =baseUrl+_artist+'&ss=ss';
        return _finalUrl;
    };
    service.setArtist =function(artist){
        _artist=artist;
    };
    service.getArtist=function(){
        return _artist;
    };
    service.callItune=function(){
        makeUrl();
        var deferred = $q.defer();
        $http({
            method:'JSONP',
            url:_finalUrl
        }).success(function(data){
            deferred.resolve(data);
        }).error(function(){
            deferred.reject('three was an error');
        });
        return deferred.promise;
    };
    return service;
});