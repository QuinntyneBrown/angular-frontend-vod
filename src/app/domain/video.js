(function () {

    "use strict";

    function video($injector, $q, conference, playlistStore, videoDataService, watchHistoryStore) {

        var self = this;

        self.createInstanceAsync = function(options) {
            var instance = new video($injector, $q, conference, playlistStore, videoDataService, watchHistoryStore);


            playlistStore.subscribe("PLAYLIST_UPDATE", instance.onStoreUpdate);

            return $q.when(instance);
        };

        self.onStoreUpdate = function(options) {

        };

        self.onPlaylist = false;

        return self;

    }

    angular.module("app").service("video", ["$injector", "$q", "playlistStore", "videoDataService", "watchHistoryStore", video]);

})();