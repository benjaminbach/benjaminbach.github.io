import { h, Host } from "@stencil/core";
import { createColorClass } from '../../utils/theme';
export class Item {
    render() {
        return (h(Host, { class: Object.assign({ ['pax-color']: this.color !== undefined }, createColorClass(this.color)) },
            h("div", { class: "item__native" },
                h("slot", { name: "start" }),
                h("div", { class: "item__inner" },
                    h("div", { class: "input__wrapper" },
                        h("slot", null)),
                    h("slot", { name: "end" })))));
    }
    static get is() { return "pax-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["item.css"]
    }; }
    static get styleUrls() { return {
        "$": ["item.css"]
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
                "text": "The color to use from the pax color palette.\nOptions are: `\"success\"`, `\"warning\"`, `\"danger\"`, `\"dark\"`"
            },
            "attribute": "color",
            "reflect": false
        }
    }; }
}
