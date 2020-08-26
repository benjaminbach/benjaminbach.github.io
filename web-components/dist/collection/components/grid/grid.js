import { h } from "@stencil/core";
export class Grid {
    render() {
        return (h("div", { class: "grid" },
            h("slot", null)));
    }
    static get is() { return "pax-grid"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["grid.css"]
    }; }
    static get styleUrls() { return {
        "$": ["grid.css"]
    }; }
}
