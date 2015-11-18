(function () {

    "use strict";

    function collectionsComponent() {

    }

    collectionsComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: collectionsComponent,
        template: ["<div class='collections'>", "</div>"].join(" ")
    });

})();