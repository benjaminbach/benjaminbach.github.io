import { r as registerInstance, h, H as Host } from './core-8a28aff9.js';
import { c as createColorClass } from './theme-363b46df.js';
var Card = /** @class */ (function () {
    function Card(hostRef) {
        registerInstance(this, hostRef);
    }
    Card.prototype.render = function () {
        return (h(Host, { class: Object.assign(Object.assign({}, createColorClass(this.border)), { 'has-header': this.header && this.header.length > 0 }) }, this.header
            ? h("div", { class: "header" }, this.header)
            : null, h("slot", null)));
    };
    Object.defineProperty(Card, "style", {
        get: function () { return ":host{display:block;background-color:var(--color-white);border:1px solid var(--color-white);padding:1.875rem}:host(.pax-color--success){border-color:var(--color-vert)}:host(.pax-color--warning){border-color:var(--color-orange)}:host(.pax-color--danger){border-color:var(--color-rouge85)}:host(.pax-color--dark){border-color:var(--color-prune)}:host(.pax-color--light){border-color:var(--color-gris20)}:host(.has-header){padding-top:1.4375rem}.header{font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-light);font-size:28px;line-height:1.5em;text-transform:uppercase;margin-bottom:2.5rem}::slotted(:last-child){margin-bottom:0}"; },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
export { Card as pax_card };
