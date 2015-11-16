(function () {

    "use strict";


    function watchHistoryActions(apiEndpoint, fetch) {

        var self = this;

        self.get = function (options) {
            fetch.fromService({ method: "GET", url: self.baseUri + "/get" });
        };

        self.baseUri = apiEndpoint.getBaseUrl("watchHistory");

        return self;
    }

    angular.module("app").service("watchHistoryActions", ["apiEndpoint", "fetch", watchHistoryActions]);

})();