(function () {

    "use strict";

    function slideComponent() {

        var self = this;

        self.onAdd = function (options) {
            if (self.model && self.model.onAdd)
                self.model.onAdd();
        }

        self.onRemove = function (options) {
            if (self.model && self.model.onRemove)
                self.model.onRemove();
        }

        self.onStoreUpdate = function (options) {
            if (self.model && self.model.onStoreUpdate)
                self.model.onAdd();
        }

        return self;
    }

    ngX.Component({
        selector: "slide",
        component: slideComponent,
        inputs: ["model"],
        styles: [
            " .slideComponent { }"
        ].join(" \n "),
        template: [

        ].join(" ")
    });

})();

