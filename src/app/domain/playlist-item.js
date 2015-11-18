(function () {

    "use strict";

    function playlistItem($injector, $q, playlistItemActions) {

        var self = this;

        self.onAdd = function (options) {
            playlistItemActions.addToPlaylist({

            });
        }

        self.onRemove = function (options) {
            playlistItemActions.removeFromPlaylist({

            });
        }

        self.onStoreUpdate = function (options) {

        }

        return self;

    }

    angular.module("app").service("playlistItem", ["$injector", "$q", "playlistItemActions", playlistItem]);

})();