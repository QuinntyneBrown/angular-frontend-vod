(function () {

    "use strict";

    function playlist($q, playlistDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("playlist",["$q", "playlistDataService", playlist]);

})();