(function () {

    "use strict";

    function cardComponent($scope, securityManager) {

        var self = this;

        self.isLoggedIn = function () {
            return (securityManager.token != null);
        }

        self.addToPlaylist = function(options) {
            $scope.$emit({ action: "ADD_TO_PLAYLIST", data: {                
                model: self.model,
                currentUser: securityManager.currentUser
            }});
        }


        return self;
    }

    ngX.Component({
        selector: "card",
        component: cardComponent,
        providers: ["$scope","securityManager"],
        inputs:["model"],
        styles: [

        ].join(" \n "),
        template: [

        ].join(" ")
    });

})();

