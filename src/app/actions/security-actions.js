(function () {

    function securityActions(apiEndpoint, fetch, formEncode, guid) {

        var self = this;

        self.tryToLogin = function (options) {

            angular.extend(options.data, { grant_type: "password" });

            var formEncodedData = formEncode(options.data);

            var headers = { "Content-Type": "application/x-www-form-urlencoded" };

            fetch.fromService({ method: "POST", url:  self.baseUri + "/token", data: formEncodedData, headers: headers });
        };

        
        self.baseUri = apiEndpoint.getBaseUrl("security") + "/security";

        return self;
    }

    angular.module("app")
        .service("securityActions", ["apiEndpoint", "fetch", "formEncode", "guid", securityActions]);

})();