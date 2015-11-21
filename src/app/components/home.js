(function () {

    "use strict";

    function HomeComponent(videoStore) {
        var self = this;

        self.featuredVideos = videoStore.featuredVideos;

        return self;
    }

    HomeComponent.canActivate = function () {
        return ["$q", "videoActions", "securityStore", function ($q, videoActions, securityStore) {
            var deferred = $q.defer();            
            var guid = videoActions.getFeatured();            
            document.addEventListener("STORE_UPDATE", resolve);
            function resolve() {
                document.removeEventListener("STORE_UPDATE", resolve);
                if (event.guid === guid)
                    deferred.resolve(true);                    
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


