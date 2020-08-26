import { r as registerInstance, h, H as Host } from './core-8a28aff9.js';
import { c as createColorClass } from './theme-363b46df.js';
var Badge = /** @class */ (function () {
    function Badge(hostRef) {
        registerInstance(this, hostRef);
    }
    Badge.prototype.render = function () {
        return (h(Host, { class: Object.assign({}, createColorClass(this.color)) }, h("slot", null)));
    };
    Object.defineProperty(Badge, "style", {
        get: function () { return ":host{display:inline-block;font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-semibold);padding:8px;font-size:11px;line-height:15px;white-space:nowrap;text-transform:uppercase;color:var(--color-prune);background-color:var(--color-claire)}:host(:empty){display:none}:host(.pax-color--success){color:var(--color-white);background-color:var(--color-vert)}:host(.pax-color--warning){color:var(--color-white);background-color:var(--color-orange)}:host(.pax-color--danger){color:var(--color-white);background-color:var(--color-rouge)}:host(.pax-color--dark){color:var(--color-white);background-color:var(--color-prune)}:host(.pax-color--ghost),:host(.pax-color--light){color:var(--color-gris77);background-color:var(--color-white)}:host(.pax-color--ghost){border:1px solid var(--color-gris30);padding:7px}"; },
        enumerable: true,
        configurable: true
    });
    return Badge;
}());
export { Badge as pax_badge };
