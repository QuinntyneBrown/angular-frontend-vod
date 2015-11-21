(function () {

    "use strict";


    function playlistStore(fire, localStorageManager, PLAYLIST_ACTIONS) {

        var self = this;

        self.currentPlaylist = null;

        return self;
    }

    angular.module("app").service("playlistStore", ["fire","localStorageManager", "PLAYLIST_ACTIONS", playlistStore]);

})();