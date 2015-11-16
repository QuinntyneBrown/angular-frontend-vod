(function () {

    "use strict";

    function playlist($q, playlistActions) {

        var self = this;

        return this;

    }

    angular.module("app").service("playlist", ["$injector", "$q", "playlistActions", playlist]);

})();