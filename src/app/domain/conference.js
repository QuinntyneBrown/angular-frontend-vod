(function () {

    "use strict";

    function conference($injector, $q, fire, conferenceDataService) {

        var self = this;

        self.createInstanceAsync = function (options) {
            var deferred = $q.defer();
            var instance = new account($q, conferenceDataService);

            if (options.data) {
                var promises = [];
                instance.name = options.data.name;

                if (options.data.videos && options.data.videos.length > 0) {

                    var video = $injector.get("video");
                    var promises = [];
                    for (var i = 0; i < options.data.videos.length; i++) {
                        promises.push(video.createInstanceAsync({ data: options.data.videos[i] }));
                    }

                    $q.all(promises).then(function (videos) {
                        instance.videos = videos;
                        deferred.resolve(instance);
                    });
                }
                else {
                    deferred.resolve(instance);
                }
                
            } else {
                deferred.resolve(instance);
            }
            return deferred.promise;
        };

        self.name = "";

        return self;

    }

    angular.module("app").service("conference", ["$injector", "$q", "fire", "conferenceDataService", conference]);

})();