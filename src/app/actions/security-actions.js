(function () {

    function securityActions(apiEndpoint, fetch, formEncode) {

        var self = this;

        self.tryToLogin = function (options) {

            var formEncodedData = formEncode(options.data);

            var headers = { "Content-Type": "application/x-www-form-urlencoded" };

            fetch.fromService({ method: "POST", url:  self.baseUri + "/token", data: formEncodedData, headers: headers });
        };

        self.baseUri = apiEndpoint.getBaseUrl("security") + "/security";

        return self;
    }

    angular.module("app").service("securityActions", ["apiEndpoint", "fetch", "formEncode", securityActions]);

})();