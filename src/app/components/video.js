(function () {

    "use strict";

    function videoComponent() {

    }

    videoComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: videoComponent,
        template: ["<div class='video'>", "</div>"].join(" ")
    });

})();


