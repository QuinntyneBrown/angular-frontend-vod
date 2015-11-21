(function () {

    "use strict";

    function HomeComponent(videoStore) {
        var self = this;
        self.featuredVideos = videoStore.featuredVideos;
        return self;
    }

    HomeComponent.canActivate = function () {
        return ["$q", "$rootScope", "videoActions", "securityStore", function ($q, $rootScope, videoActions, securityStore) {
            var deferred = $q.defer();
            
            if (!securityStore.token) {
                deferred.reject();
            } else {

                var guid = videoActions.getFeatured();
            
                $rootScope.$on("STORE_UPDATE", function (event, object) {
                    if(object.guid === guid)
                        deferred.resolve(true);
                });
            }
            
            return deferred.promise;
        }];
    }

    ngX.Component({
        component: HomeComponent,
        route: "/",
        providers:["videoStore"],
        template: [
            "<div class='home'>",
            "<p>{{ vm.featuredVideos }}</p>",
            "</div>"
        ].join(" ")
    });

})();


