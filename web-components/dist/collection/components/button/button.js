import { h, Host } from "@stencil/core";
export class Button {
    constructor() {
        this.handleFocus = () => {
            this.onFocus.emit();
        };
        this.handleBlur = () => {
            this.onBlur.emit();
        };
    }
    get hasIconOnly() {
        return !!this.hostElement.querySelector('pax-icon[slot="icon-only"]');
    }
    render() {
        return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: {
                ['button-disabled']: this.disabled,
                [`button-${this.fill}`]: this.fill ? true : null,
                ['button-icon']: this.hasIconOnly,
                [`button-${this.mode}-mode`]: this.mode ? true : null
            } },
            h("button", { class: "button-native", type: this.type !== undefined ? this.type : null, onFocus: this.handleFocus, onBlur: this.handleBlur, disabled: this.disabled ? true : null },
                h("slot", { name: "icon-only" }),
                h("slot", { name: "start" }),
                h("slot", null))));
    }
    static get is() { return "pax-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "disabled": {
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
            "attribute": "disabled",
            "reflect": false
        },
        "fill": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Fill",
                "resolved": "string",
                "references": {
                    "Fill": {
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
            "attribute": "fill",
            "reflect": false
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": false
        },
        "mode": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Mode",
                "resolved": "string",
                "references": {
                    "Mode": {
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
            "attribute": "mode",
            "reflect": false
        },
        "type": {
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
            "attribute": "type",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "onBlur",
            "name": "onBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "onFocus",
            "name": "onFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
    static get elementRef() { return "hostElement"; }
}
