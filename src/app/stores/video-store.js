(function () {

    "use strict";


    function videoStore($rootScope,localStorageManager) {

        var self = this;

        Object.defineProperty(self, "currentvideo",
            { set: function (value) { localStorageManager.put({ name: "currentvideo", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentvideo" }); } }
            );

        self.featuredVideos = null;

        self.onUpdateVideoStoreFeaturedVideos = function (event, object) {
            self.featuredVideos = object.data;
            $rootScope.$broadcast("STORE_UPDATE", { guid: object.guid, storeName: "VIDEO_STORE" });
        }

        $rootScope.$on("UPDATE_VIDEO_STORE_FEATURED_VIDEOS", self.onUpdateVideoStoreFeaturedVideos);

        return self;
    }

    angular.module("app")
        .service("videoStore", ["$rootScope", "localStorageManager", videoStore])
        .run(["videoStore", function (videoStore) {

        }]);
    
})();