(function () {

    "use strict";


    function playlistStore(localStorageManager) {

        var self = this;

        Object.defineProperty(self, "currentPlaylist",
            { set: function (value) { localStorageManager.put({ name: "currentPlaylist", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentPlaylist" }); } }
            );

        return self;
    }

    angular.module("app").service("playlistStore", ["localStorageManager", playlistStore]);

})();