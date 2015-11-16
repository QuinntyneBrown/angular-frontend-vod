(function () {

    "use strict";

    function AppComponent() {

    }

    ngX.Component({
        selector: "app",
        component: AppComponent,
        template: [
            "<div>",
            "<app-header></app-header>",
            "<div data-ng-view=''></div>",
            "</div>"
        ].join(" ")
    });

})();

