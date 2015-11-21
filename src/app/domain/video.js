(function () {

    "use strict";

    function video($injector, $location, $q) {

        var self = this;


        self.createInstanceAsync = function(options) {
            var instance = new video($injector, $q);

            instance.playlistActions = $injector("playlistActions");
            instance.playlistStore = $injector("playlistStore");
            instance.securityStore = $injector("securityStore");
            instance.videoActions = $injector("videoActions");
            instance.watchHistoryActions = $injector("watchHistoryActions");
            instance.watchHistoryStore = $injector("watchHistoryStore");

            if (options.data) {
                instance.id = options.data.id;
            }

            return $q.when(instance);
        };

        self.onStoreUpdate = function(options) {

        };

        self.onAdd = function (options) {
            this.playlistactions.addToPlaylist({
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
        "$location",
        "$q",
        video]);

})();