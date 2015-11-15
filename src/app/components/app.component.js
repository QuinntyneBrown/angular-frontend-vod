(function () {

    "use strict";

    function AppComponent() {

    }

    ngX.Component({
        selector: "app",
        component: AppComponent,
        template: [
            "<div>",
            "<div data-ng-view=''></div>",
            "</div>"
        ].join(" ")
    });

})();

