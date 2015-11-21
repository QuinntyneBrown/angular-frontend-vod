(function () {

    "use strict";

    function videoActions($rootScope, apiEndpoint, fetch, guid) {

        var self = this;
        self.$rootScope = $rootScope;

        self.getFeatured = function (options) {
            var newGuid = guid();
            var url = self.baseUri + "/getFeatured";
            fetch.fromService({ method: "GET", url: url, guid: newGuid });
            document.addEventListener("FETCH_SUCCESS", onSuccess);
            function onSuccess(results) {
                document.removeEventListener("FETCH_SUCCESS", onSuccess);
                if (results.options.guid === newGuid) {
                    self.$rootScope.$emit("UPDATE_VIDEO_STORE_FEATURED_VIDEOS", { data: results.results.data, guid: newGuid });
                }
            }
            return newGuid;
        };

        self.baseUri = apiEndpoint.getBaseUrl("video") + "/video";

        return self;
    }

    angular.module("app").service("videoActions", ["$rootScope", "apiEndpoint", "fetch", "guid", videoActions]);

})();