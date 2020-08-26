import { r as registerInstance, h } from './core-8a28aff9.js';

const Row = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "row" }, h("slot", null)));
    }
    static get style() { return ".row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"; }
};

export { Row as pax_row };
