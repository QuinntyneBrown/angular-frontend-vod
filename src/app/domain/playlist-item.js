(function () {

    "use strict";

    function playlistItem($q, playlistItemDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("playlistItem", ["$injector", "$q", "playlistItemDataService", playlistItem]);

})();