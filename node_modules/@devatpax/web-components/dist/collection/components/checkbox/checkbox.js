import { h, Host } from "@stencil/core";
import { findItemLabel, hostContext, renderHiddenInput } from '../../utils/helpers';
let checkboxIds = 0;
export class Checkbox {
    constructor() {
        this.inputId = `pax-cb-${checkboxIds++}`;
        /**
         * If `true`, the checkbox is selected.
         * @type {boolean}
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the checkbox component.
         * @type {boolean}
         */
        this.disabled = false;
        /**
         * The name of the hidden input, which is submitted with the form data.
         * @type {string}
         */
        this.name = this.inputId;
        /**
         * The value of the checkbox, which is submitted with the form data.
         * @type {string}
         */
        this.value = 'on';
        /**
         * Handles clicks on the checkbox component.
         */
        this.handleClick = () => {
            this.setFocus();
            this.checked = !this.checked;
        };
        /**
         * Kicks in when the checkbox components gains focus.
         */
        this.handleFocus = () => {
            this.onFocus.emit();
        };
        /**
         * Kicks in when the checkbox component loses focus.
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
     * Focuses the checkbox component.
     */
    setFocus() {
        if (this.buttonElement) {
            this.buttonElement.focus();
        }
    }
    /**
     * Returns the markup for the checkbox component.
     *
     * Note that the checkbox is not a real checkbox input (`<input type="checkbox"/>`),
     * but rather a combination of a button (the visual part of the checkbox) and
     * an hidden input element (is submitted with the form data).
     *
     * @return {any}
     */
    render() {
        const labelId = this.inputId + '-lbl';
        const label = findItemLabel(this.el);
        if (label) {
            label.id = labelId;
        }
        renderHiddenInput(true, this.el, this.name, (this.checked ? this.value : ''), this.disabled);
        return (h(Host, { onClick: this.handleClick, role: "checkbox", "aria-checked": `${this.checked}`, "aria-disabled": this.disabled ? 'true' : null, "aria-labelledby": labelId, class: {
                'in-item': hostContext('pax-item', this.el),
                'checkbox-checked': this.checked,
                'checkbox-disabled': this.disabled
            } },
            h("svg", { class: "checkbox-icon", viewBox: "0 0 12.742 12.742" },
                h("path", { d: "M0,0V16.02", transform: "translate(12.035 12.035) rotate(135)" }),
                h("path", { d: "M0,0V16.02", transform: "translate(12.035 0.707) rotate(45)" })),
            h("button", { type: "button", onFocus: this.handleFocus, onBlur: this.handleBlur, disabled: this.disabled, ref: element => this.buttonElement = element })));
    }
    static get is() { return "pax-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["checkbox.css"]
    }; }
    static get styleUrls() { return {
        "$": ["checkbox.css"]
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
                "text": "If `true`, the checkbox is selected."
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
                "text": "If `true`, the user cannot interact with the checkbox component."
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
                "text": "The value of the checkbox, which is submitted with the form data."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "'on'"
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
                "original": "CheckboxChangeEventInterface",
                "resolved": "CheckboxChangeEventInterface",
                "references": {
                    "CheckboxChangeEventInterface": {
                        "location": "import",
                        "path": "./checkbox.interface"
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
                "text": "Emitted when the checkbox component has focus."
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
                "text": "Emitted when the checkbox lost focus."
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
