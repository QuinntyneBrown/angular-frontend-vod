(function () {

    "use strict";


    function conferenceActions(apiEndpoint, fetch) {

        var self = this;

        self.getAll = function (options) {
            fetch.fromService({
                method: "GET", url: self.baseUri + "/getAll"
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("conference");

        return self;
    }

    angular.module("app").service("conferenceActions", ["apiEndpoint", "fetch", conferenceActions]);

})();