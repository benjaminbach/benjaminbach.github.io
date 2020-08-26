import { h, Host } from "@stencil/core";
import { hostContext } from '../../utils/helpers';
export class Label {
    constructor() {
        this.suffix = 'optional';
    }
    /**
     * When the label is clicked it tries to focus the element with the id that
     * matches the value of the for property.
     *
     * This behavior is prevented when the label is disabled.
     */
    onClick() {
        if (this.for && !this.disabled) {
            const elementToFocus = document.getElementById(this.for);
            if (elementToFocus) {
                elementToFocus.focus();
            }
        }
    }
    render() {
        return (h(Host, { onClick: () => this.onClick(), "data-suffix": this.required ? undefined : `(${this.suffix})`, class: {
                'in-form': hostContext('form', this.el),
                ['disabled']: this.disabled,
                ['text-wrap']: this.wrap
            } },
            h("slot", null)));
    }
    static get is() { return "pax-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["label.css"]
    }; }
    static get styleUrls() { return {
        "$": ["label.css"]
    }; }
    static get properties() { return {
        "for": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "for",
            "reflect": false
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false
        },
        "wrap": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "wrap",
            "reflect": false
        },
        "required": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "required",
            "reflect": false
        },
        "suffix": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "suffix",
            "reflect": false,
            "defaultValue": "'optional'"
        }
    }; }
    static get elementRef() { return "el"; }
}
