(function () {

    "use strict";

    function video($injector, $q, playlistActions, playlistStore, securityStore, videoActions, watchHistoryActions, watchHistoryStore) {

        var self = this;

        self.createInstanceAsync = function(options) {
            var instance = new video($injector, $q, playlistActions, playlistStore, securityStore, videoActions, watchHistoryActions, watchHistoryStore);

            if (options.data) {
                instance.id = options.data.id;
            }

            return $q.when(instance);
        };

        self.onStoreUpdate = function(options) {

        };

        self.onAdd = function (options) {
            playlistactions.addToPlaylist({
                data: {
                    username: self.username,
                    password: self.password
                }
            });
        };

        self.onClick = function (options) {
            $location.path("/video/play/" + self.id);
        };

        self.onPlaylist = false;
        self.id = 0;

        return self;

    }

    angular.module("app").service("video", [
        "$injector",
        "$q",
        "playlistActions",
        "playlistStore",
        "securityStore",
        "videoActions",
        "watchHistoryActions",
        "watchHistoryStore",
        video]);

})();