(function () {

    "use strict";

    function securityActions(apiEndpoint, fetch, formEncode) {

        var self = this;

        self.tryToLogin = function (options) {

            var formEncodedData = formEncode(options.data);

            var headers = [];

            fetch.fromService({ method: "POST", url: self.baseUri + "/token", data: formEncodedData, headers: headers });
        };

        self.baseUri = apiEndpoint.getBaseUrl("security") + "/security";

        return self;
    }

    angular.module("app").service("securityActions", ["$q", "apiEndpoint", "fetch", "formEncode", securityActions]);

})();