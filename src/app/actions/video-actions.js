(function () {

    "use strict";

    function videoActions(apiEndpoint, fetch) {

        var self = this;

        self.getAll = function (options) {
            fetch.fromService({ method: "GET", url: self.baseUri + "/getAll"});
        };

        self.baseUri = apiEndpoint.getBaseUrl("video") + "/video";

        return self;
    }

    angular.module("app").service("videoActions", ["$q", "apiEndpoint", "fetch", videoActions]);

})();