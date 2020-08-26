import { h, Host } from "@stencil/core";
import { findItemLabel, hostContext } from '../../utils/helpers';
let radioIds = 0;
export class Radio {
    constructor() {
        this.inputId = `pax-rb-${radioIds++}`;
        /**
         * If `true`, the radio is selected.
         * @type {boolean}
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the radio component.
         * @type {boolean}
         */
        this.disabled = false;
        /**
         * The name of the hidden input, which is submitted with the form data.
         * @type {string}
         */
        this.name = this.inputId;
        /**
         * Handles clicks on the radio component.
         */
        this.handleClick = () => {
            this.setFocus();
            this.checked = !this.checked;
        };
        /**
         * Kicks in when the radio components gains focus.
         */
        this.handleFocus = () => {
            this.onFocus.emit();
        };
        /**
         * Kicks in when the radio component loses focus.
         */
        this.handleBlur = () => {
            this.onBlur.emit();
        };
    }
    checkedChanged(isChecked) {
        this.onChange.emit({
            checked: isChecked,
            value: this.value
        });
    }
    /**
     * Focuses the radio component.
     */
    setFocus() {
        if (this.buttonElement) {
            this.buttonElement.focus();
        }
    }
    render() {
        const labelId = this.inputId + 'lbl';
        const label = findItemLabel(this.el);
        if (label) {
            label.id = labelId;
        }
        // renderHiddenInput(true, this.el, this.name, (this.checked ? this.value : ''), this.disabled);
        return (h(Host, { onClick: this.handleClick, role: "radio", "aria-checked": `${this.checked}`, "aria-disabled": this.disabled ? 'true' : null, "aria-labelledby": labelId, class: {
                'in-item': hostContext('pax-item', this.el),
                'radio-checked': this.checked,
                'radio-disabled': this.disabled
            } },
            h("svg", { class: "radio-icon", viewBox: "0 0 12.742 12.742" },
                h("path", { d: "M0,0V16.02", transform: "translate(12.035 12.035) rotate(135)" }),
                h("path", { d: "M0,0V16.02", transform: "translate(12.035 0.707) rotate(45)" })),
            h("input", { type: "radio", name: "test", value: "foo", checked: true }),
            h("button", { type: "button", onFocus: this.handleFocus, onBlur: this.handleBlur, disabled: this.disabled, ref: element => this.buttonElement = element })));
    }
    static get is() { return "pax-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["radio.css"]
    }; }
    static get styleUrls() { return {
        "$": ["radio.css"]
    }; }
    static get properties() { return {
        "checked": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }],
                "text": "If `true`, the radio is selected."
            },
            "attribute": "checked",
            "reflect": false,
            "defaultValue": "false"
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
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }],
                "text": "If `true`, the user cannot interact with the radio component."
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "name": {
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
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }],
                "text": "The name of the hidden input, which is submitted with the form data."
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "this.inputId"
        },
        "value": {
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
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }],
                "text": "The value of the radio, which is submitted with the form data."
            },
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "onChange",
            "name": "onChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the checked property has changed."
            },
            "complexType": {
                "original": "RadioChangeEventInterface",
                "resolved": "RadioChangeEventInterface",
                "references": {
                    "RadioChangeEventInterface": {
                        "location": "import",
                        "path": "./radio.interface"
                    }
                }
            }
        }, {
            "method": "onFocus",
            "name": "onFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the radio component has focus."
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "onBlur",
            "name": "onBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the radio lost focus."
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "checked",
            "methodName": "checkedChanged"
        }]; }
}
