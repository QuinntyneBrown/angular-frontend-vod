(function () {

    "use strict";

    function cardComponent($scope, securityStore) {

        var self = this;

        self.isLoggedIn = function () {
            return (securityStore.token != null);
        }

        self.addToPlaylist = function(options) {
            $scope.$emit({ action: "ADD_TO_PLAYLIST", data: {                
                model: self.model,
                currentUser: securityStore.currentUser
            }});
        }


        return self;
    }

    ngX.Component({
        selector: "card",
        component: cardComponent,
        providers: ["$scope","securityStore"],
        inputs:["model"],
        styles: [

        ].join(" \n "),
        template: [

        ].join(" ")
    });

})();

