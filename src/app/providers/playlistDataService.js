(function () {

    "use strict";


    function playlistDataService($q, apiEndpoint, dataService) {

        var self = this;

        self.getPlaylist = function (options) {
            return dataService.fromService({ method: "GET", url: self.baseUri + "/getPlaylist", params: { profileId: options.profileId } });            
        };

        self.addToPlaylist = function (options) {
            return dataService.fromService({
                method: "POST", url: self.baseUri + "/addToPlaylist",
                data: { playlistId: options.profileId, videoId: options.videoId }
            });
        };

        self.removeFromPlaylist = function (options) {
            return dataService.fromService({
                method: "POST", url: self.baseUri + "/removeFromPlaylist",
                data: { playlistId: options.profileId, videoId: options.videoId }
            });
        };

        self.baseUri = apiEndpoint.getBaseUrl("playlist");

        return self;
    }

    angular.module("app").service("playlistDataService", ["$q", "apiEndpoint", "dataService", playlistDataService]);

})();