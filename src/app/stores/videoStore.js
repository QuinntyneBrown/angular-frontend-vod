﻿(function () {

    "use strict";


    function videoStore(localStorageManager) {

        var self = this;

        Object.defineProperty(self, "currentvideo",
            { set: function (value) { localStorageManager.put({ name: "currentvideo", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentvideo" }); } }
            );

        return self;
    }

    angular.module("app").service("videoStore", ["localStorageManager", videoStore]);

})();