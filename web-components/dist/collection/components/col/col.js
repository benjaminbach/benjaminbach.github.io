import { h } from "@stencil/core";
export class Col {
    render() {
        return h("div", null,
            h("slot", null));
    }
    static get is() { return "pax-col"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["col.css"]
    }; }
    static get styleUrls() { return {
        "$": ["col.css"]
    }; }
}
