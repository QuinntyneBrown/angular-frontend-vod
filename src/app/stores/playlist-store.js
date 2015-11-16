(function () {

    "use strict";


    function playlistStore(fire, localStorageManager) {

        document.addEventListener("FETCH_SUCCESS", (event) => {
            if (event.options.url === "/addToPlaylist") {
                // check of it was a success post to the add playlist endpoint and update the store
                // fire notitification
                fire(self.bodyNativeElement, "storeUpdate", { currentPlaylist: self.currentPlaylist });
            }
        });

        var self = this;

        Object.defineProperty(self, "currentPlaylist",
            { set: function (value) { localStorageManager.put({ name: "currentPlaylist", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentPlaylist" }); } }
            );

        Object.defineProperty(self, "bodyNativeElement",
            { get: function () { return document.getElementsByTagName("body")[0]; } }
            );

        return self;
    }

    angular.module("app").service("playlistStore", ["fire","localStorageManager", playlistStore]);

})();