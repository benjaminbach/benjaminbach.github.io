import { r as registerInstance, h, H as Host } from './core-8a28aff9.js';
import { c as createColorClass } from './theme-363b46df.js';

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: Object.assign(Object.assign({}, createColorClass(this.border)), { 'has-header': this.header && this.header.length > 0 }) }, this.header
            ? h("div", { class: "header" }, this.header)
            : null, h("slot", null)));
    }
    static get style() { return ":host{display:block;background-color:var(--color-white);border:1px solid var(--color-white);padding:1.875rem}:host(.pax-color--success){border-color:var(--color-vert)}:host(.pax-color--warning){border-color:var(--color-orange)}:host(.pax-color--danger){border-color:var(--color-rouge85)}:host(.pax-color--dark){border-color:var(--color-prune)}:host(.pax-color--light){border-color:var(--color-gris20)}:host(.has-header){padding-top:1.4375rem}.header{font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-light);font-size:28px;line-height:1.5em;text-transform:uppercase;margin-bottom:2.5rem}::slotted(:last-child){margin-bottom:0}"; }
};

export { Card as pax_card };
