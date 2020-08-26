'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');

const Grid = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", { class: "grid" }, core.h("slot", null)));
    }
    static get style() { return ".grid{margin-left:auto;margin-right:auto;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}"; }
};

exports.pax_grid = Grid;
