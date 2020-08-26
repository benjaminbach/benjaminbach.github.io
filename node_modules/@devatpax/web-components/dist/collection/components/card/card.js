import { h, Host } from "@stencil/core";
import { createColorClass } from '../../utils/theme';
export class Card {
    render() {
        return (h(Host, { class: Object.assign(Object.assign({}, createColorClass(this.border)), { 'has-header': this.header && this.header.length > 0 }) },
            this.header
                ? h("div", { class: "header" }, this.header)
                : null,
            h("slot", null)));
    }
    static get is() { return "pax-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["card.css"]
    }; }
    static get properties() { return {
        "border": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Color",
                "resolved": "string",
                "references": {
                    "Color": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "border",
            "reflect": false
        },
        "header": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "header",
            "reflect": false
        }
    }; }
}
