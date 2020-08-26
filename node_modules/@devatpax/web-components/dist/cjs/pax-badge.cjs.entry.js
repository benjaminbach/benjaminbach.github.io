'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');
const theme = require('./theme-1679eecf.js');

const Badge = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: Object.assign({}, theme.createColorClass(this.color)) }, core.h("slot", null)));
    }
    static get style() { return ":host{display:inline-block;font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-semibold);padding:8px;font-size:11px;line-height:15px;white-space:nowrap;text-transform:uppercase;color:var(--color-prune);background-color:var(--color-claire)}:host(:empty){display:none}:host(.pax-color--success){color:var(--color-white);background-color:var(--color-vert)}:host(.pax-color--warning){color:var(--color-white);background-color:var(--color-orange)}:host(.pax-color--danger){color:var(--color-white);background-color:var(--color-rouge)}:host(.pax-color--dark){color:var(--color-white);background-color:var(--color-prune)}:host(.pax-color--ghost),:host(.pax-color--light){color:var(--color-gris77);background-color:var(--color-white)}:host(.pax-color--ghost){border:1px solid var(--color-gris30);padding:7px}"; }
};

exports.pax_badge = Badge;
