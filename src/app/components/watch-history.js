(function () {

    "use strict";

    function watchHistoryComponent() {

    }

    watchHistoryComponent.canActivate = function () {
        return ["$q", function ($q) {

        }];
    }

    ngX.Component({
        component: watchHistoryComponent,
        template: ["<div class='watch-history'>", "</div>"].join(" ")
    });

})();


