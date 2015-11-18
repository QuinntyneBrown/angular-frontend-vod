(function () {

    "use strict";

    function playlistComponent() {

        var self = this;

        self.onInit = function () {
            return ["$q", function ($q) {

            }];
        }


        return self;
      
    }

    playlistComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: playlistComponent,
        template: ["<div class='playlist'>", "</div>"].join(" ")
    });

})();