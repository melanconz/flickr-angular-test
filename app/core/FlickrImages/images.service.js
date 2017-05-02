angular.module('core.images',['ngResource'])
.factory('Images', function($http, $q){
        var self = this;
        self.perPage =  150;
        self.api_key = "2b5a932db750509d67bb3cca2c1211ac";
        self.base_url= "https://api.flickr.com/services/feeds/photos_public.gne";

        self.search = function(search){
            var deferred = $q.defer();
            var url = self.base_url;
            url += '?format=json&&jsoncallback=JSON_CALLBACK&lang=en-us&tag_mode=any';

            if ((search != null && search.length > 0)) {
              console.log(search);
                url += '&tags=' + search;
            }

            $http.jsonp(url).
                then(function(data) {
                  deferred.resolve(data.data);
                });

            return deferred.promise;

        }
        return this;
    });
