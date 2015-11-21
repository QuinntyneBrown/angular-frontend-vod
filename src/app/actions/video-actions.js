(function () {

    "use strict";

    function videoActions(apiEndpoint, fetch, fire, guid, VIDEO_ACTIONS) {
        var self = this;
        self.getFeatured = function (options) {
            var newGuid = guid();
            var url = self.baseUri + "/getFeatured";
            fetch.fromService({ method: "GET", url: url, guid: newGuid });
            document.addEventListener("FETCH_SUCCESS", onSuccess);
            function onSuccess(results) {
                document.removeEventListener("FETCH_SUCCESS", onSuccess);
                if (results.options.guid === newGuid) {
                    fire(document, VIDEO_ACTIONS.UPDATE_VIDEO_STORE_FEATURED_VIDEOS, { data: results.results.data, guid: newGuid });
                }
            }
            return newGuid;
        };
        self.baseUri = apiEndpoint.getBaseUrl("video") + "/video";
        return self;
    }

    angular.module("app").service("videoActions", ["apiEndpoint", "fetch", "fire","guid", "VIDEO_ACTIONS", videoActions]);

})();