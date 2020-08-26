'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');
const theme = require('./theme-1679eecf.js');

const Card = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: Object.assign(Object.assign({}, theme.createColorClass(this.border)), { 'has-header': this.header && this.header.length > 0 }) }, this.header
            ? core.h("div", { class: "header" }, this.header)
            : null, core.h("slot", null)));
    }
    static get style() { return ":host{display:block;background-color:var(--color-white);border:1px solid var(--color-white);padding:1.875rem}:host(.pax-color--success){border-color:var(--color-vert)}:host(.pax-color--warning){border-color:var(--color-orange)}:host(.pax-color--danger){border-color:var(--color-rouge85)}:host(.pax-color--dark){border-color:var(--color-prune)}:host(.pax-color--light){border-color:var(--color-gris20)}:host(.has-header){padding-top:1.4375rem}.header{font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-light);font-size:28px;line-height:1.5em;text-transform:uppercase;margin-bottom:2.5rem}::slotted(:last-child){margin-bottom:0}"; }
};

exports.pax_card = Card;
