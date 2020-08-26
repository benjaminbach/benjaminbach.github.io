import { r as registerInstance, h } from './core-8a28aff9.js';

const Grid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "grid" }, h("slot", null)));
    }
    static get style() { return ".grid{margin-left:auto;margin-right:auto;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}"; }
};

export { Grid as pax_grid };
