import { r as registerInstance, h } from './core-8a28aff9.js';
var Row = /** @class */ (function () {
    function Row(hostRef) {
        registerInstance(this, hostRef);
    }
    Row.prototype.render = function () {
        return (h("div", { class: "row" }, h("slot", null)));
    };
    Object.defineProperty(Row, "style", {
        get: function () { return ".row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"; },
        enumerable: true,
        configurable: true
    });
    return Row;
}());
export { Row as pax_row };
