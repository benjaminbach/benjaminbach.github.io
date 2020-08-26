import { h, Host } from "@stencil/core";
export class List {
    constructor() {
        this.inset = false;
        this.lines = false;
    }
    render() {
        return (h(Host, { class: {
                ['list-inset']: this.inset,
                ['list-lines']: this.lines
            } }));
    }
    static get is() { return "pax-list"; }
    static get originalStyleUrls() { return {
        "$": ["list.css"]
    }; }
    static get styleUrls() { return {
        "$": ["list.css"]
    }; }
    static get properties() { return {
        "inset": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "inset",
            "reflect": false,
            "defaultValue": "false"
        },
        "lines": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "lines",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
