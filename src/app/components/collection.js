(function () {

    "use strict";

    function collectionComponent() {

    }

    collectionComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: collectionComponent,
        template: ["<div class='collection'>", "</div>"].join(" ")
    });

})();