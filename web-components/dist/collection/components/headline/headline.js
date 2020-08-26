import { h } from "@stencil/core";
export class Headline {
    constructor() {
        this.level = 2; // Render headlines as level 2 as default
    }
    render() {
        if (this.level === 1) {
            return (h("h1", null,
                h("slot", null)));
        }
        else if (this.level === 2) {
            return (h("h2", null,
                h("slot", null)));
        }
        else if (this.level === 3) {
            return (h("h3", null,
                h("slot", null)));
        }
        else if (this.level === 4) {
            return (h("h4", null,
                h("slot", null)));
        }
        else if (this.level === 5) {
            return (h("h5", null,
                h("slot", null)));
        }
        else if (this.level === 6) {
            return (h("h6", null,
                h("slot", null)));
        }
    }
    static get is() { return "pax-headline"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["headline.css"]
    }; }
    static get styleUrls() { return {
        "$": ["headline.css"]
    }; }
    static get properties() { return {
        "level": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "level",
            "reflect": false,
            "defaultValue": "2"
        }
    }; }
}
