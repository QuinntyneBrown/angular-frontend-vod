(function () {

    "use strict";

    function playlist($q, playlistDataService) {

        var self = this;

        return this;

    }

    angular.module("app").service("playlist", ["$injector", "$q", "playlistDataService", playlist]);

})();