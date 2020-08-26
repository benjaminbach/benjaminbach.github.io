import { r as registerInstance, h } from './core-8a28aff9.js';
var Grid = /** @class */ (function () {
    function Grid(hostRef) {
        registerInstance(this, hostRef);
    }
    Grid.prototype.render = function () {
        return (h("div", { class: "grid" }, h("slot", null)));
    };
    Object.defineProperty(Grid, "style", {
        get: function () { return ".grid{margin-left:auto;margin-right:auto;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}"; },
        enumerable: true,
        configurable: true
    });
    return Grid;
}());
export { Grid as pax_grid };
