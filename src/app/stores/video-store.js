﻿(function () {

    "use strict";


    function videoStore($rootScope, fire, localStorageManager, video, VIDEO_ACTIONS) {

        var self = this;

        Object.defineProperty(self, "currentvideo",
            { set: function (value) { localStorageManager.put({ name: "currentvideo", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentvideo" }); } }
            );

        self.featuredVideos = null;

        self.onUpdateVideoStoreFeaturedVideos = function (event) {
            self.featuredVideos = event.data;
            fire(document,"STORE_UPDATE",{ guid: event.guid, storeName: "VIDEO_STORE" })
        }


        document.addEventListener(VIDEO_ACTIONS.UPDATE_VIDEO_STORE_FEATURED_VIDEOS, self.onUpdateVideoStoreFeaturedVideos);
 
        return self;
    }

    angular.module("app")
        .service("videoStore", ["$rootScope", "fire","localStorageManager","video","VIDEO_ACTIONS", videoStore])
        .run(["videoStore", function (videoStore) {

        }]);
    
})();