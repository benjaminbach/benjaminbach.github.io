'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');

const Headline = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.level = 2; // Render headlines as level 2 as default
    }
    render() {
        if (this.level === 1) {
            return (core.h("h1", null, core.h("slot", null)));
        }
        else if (this.level === 2) {
            return (core.h("h2", null, core.h("slot", null)));
        }
        else if (this.level === 3) {
            return (core.h("h3", null, core.h("slot", null)));
        }
        else if (this.level === 4) {
            return (core.h("h4", null, core.h("slot", null)));
        }
        else if (this.level === 5) {
            return (core.h("h5", null, core.h("slot", null)));
        }
        else if (this.level === 6) {
            return (core.h("h6", null, core.h("slot", null)));
        }
    }
    static get style() { return "h1{font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-light);font-size:42px;line-height:54px;color:var(--color-prune)}h2{font-size:30px}h2,h3{font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-semibold);line-height:1.25em;color:var(--color-prune)}h3{font-size:24px}h4{font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);font-size:21px;line-height:1.33em;color:var(--color-prune)}h5{color:var(--color-prune)}h5,h6{font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);font-size:16px;line-height:1.375em}h6{color:var(--color-gris77)}"; }
};

exports.pax_headline = Headline;
