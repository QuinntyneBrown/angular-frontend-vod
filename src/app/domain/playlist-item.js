(function () {

    "use strict";

    function playlistItem($q, playlistItemActions) {

        var self = this;

        return this;

    }

    angular.module("app").service("playlistItem", ["$injector", "$q", "playlistItemActions", playlistItem]);

})();