import { h } from "@stencil/core";
export class Row {
    render() {
        return (h("div", { class: "row" },
            h("slot", null)));
    }
    static get is() { return "pax-row"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["row.css"]
    }; }
    static get styleUrls() { return {
        "$": ["row.css"]
    }; }
}
