(function () {

    "use strict";


    function playlistManager(localStorageManager) {

        var self = this;

        Object.defineProperty(self, "currentPlaylist",
            { set: function (value) { localStorageManager.put({ name: "currentPlaylist", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentPlaylist" }); } }
            );

        return self;
    }

    angular.module("app").service("playlistManager", ["localStorageManager", playlistManager]);

})();