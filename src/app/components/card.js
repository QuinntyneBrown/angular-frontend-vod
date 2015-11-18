(function () {

    "use strict";

    function cardComponent() {

        var self = this;

        self.onAdd = function(options) {
            if (self.model && self.model.onAdd)
                self.model.onAdd();
        }

        self.onRemove = function (options) {
            if (self.model && self.model.onRemove)
                self.model.onRemove(options);
        }

        self.onStoreUpdate = function (options) {
            if (self.model && self.model.onStoreUpdate)
                self.model.onAdd(options);
        }

        return self;
    }

    ngX.Component({
        selector: "card",
        component: cardComponent,
        inputs:["model"],
        styles: [
            " .cardComponent { }"
        ].join(" \n "),
        template: [

        ].join(" ")
    });

})();

