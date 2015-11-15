(function () {

    "use strict";


    function accountManager(localStorageManager) {
    
        var self = this;

        Object.defineProperty(self, "currentAccount",
            { set: function (value) { localStorageManager.put({ name: "currenAccount",value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentAccount"}); } }
            );

        Object.defineProperty(self, "currentProfile",
            { set: function (value) { localStorageManager.put({ name: "currentProfile", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentProfile" }); } }
            );


        Object.defineProperty(self, "currentProfiles",
            { set: function (value) { localStorageManager.put({ name: "currentProfiles", value: value }); } },
            { get: function () { return localStorageManager.get({ name: "currentProfiles" }); } }
            );

        return self;
    }

    angular.module("app").service("accountManager",["localStorageManager", accountManager]);

})();