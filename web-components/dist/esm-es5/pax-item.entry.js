import { r as registerInstance, h, H as Host } from './core-8a28aff9.js';
import { c as createColorClass } from './theme-363b46df.js';
var Item = /** @class */ (function () {
    function Item(hostRef) {
        registerInstance(this, hostRef);
    }
    Item.prototype.render = function () {
        var _a;
        return (h(Host, { class: Object.assign((_a = {}, _a['pax-color'] = this.color !== undefined, _a), createColorClass(this.color)) }, h("div", { class: "item__native" }, h("slot", { name: "start" }), h("div", { class: "item__inner" }, h("div", { class: "input__wrapper" }, h("slot", null)), h("slot", { name: "end" })))));
    };
    Object.defineProperty(Item, "style", {
        get: function () { return ":host{display:block;overflow:hidden;text-align:initial}.item__native,:host{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;position:relative}.item__native{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;overflow:inherit;width:100%}.item__native::-moz-focus-inner{border:0}.item__inner{-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;overflow:inherit}.input__wrapper{display:block;overflow:hidden}::slotted([slot=start]){margin-right:1rem}::slotted([slot=end]){margin-left:1rem}::slotted(pax-checkbox),::slotted(pax-radio){-ms-flex-item-align:baseline;align-self:baseline;margin:8px 9px 5px 0}::slotted(pax-label){-ms-flex:1 1 0px;flex:1 1 0;margin:5px 0}"; },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
export { Item as pax_item };
