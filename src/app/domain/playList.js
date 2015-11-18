(function () {

    "use strict";

    function playlist($injector, $q, playlistActions) {

        var self = this;

        self.onStoreUpdate = function (options) {

        }

        return self;

    }

    angular.module("app").service("playlist", ["$injector", "$q", "playlistActions", playlist]);

})();