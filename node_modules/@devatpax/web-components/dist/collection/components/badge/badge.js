import { h, Host } from "@stencil/core";
import { createColorClass } from '../../utils/theme';
export class Badge {
    render() {
        return (h(Host, { class: Object.assign({}, createColorClass(this.color)) },
            h("slot", null)));
    }
    static get is() { return "pax-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["badge.css"]
    }; }
    static get styleUrls() { return {
        "$": ["badge.css"]
    }; }
    static get properties() { return {
        "color": {
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The color to use from the pax color palette.\nOptions are: `\"success\"`, `\"warning\"`, `\"danger\"`, `\"dark\"`, `\"light\"`, `\"ghost\"`"
            },
            "attribute": "color",
            "reflect": false
        }
    }; }
}
