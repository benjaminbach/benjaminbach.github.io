import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-8a28aff9.js';
import { f as findItemLabel, r as renderHiddenInput, h as hostContext } from './helpers-64dd60a9.js';

let checkboxIds = 0;
const Checkbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.onChange = createEvent(this, "onChange", 7);
        this.onFocus = createEvent(this, "onFocus", 7);
        this.onBlur = createEvent(this, "onBlur", 7);
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
            } }, h("svg", { class: "checkbox-icon", viewBox: "0 0 12.742 12.742" }, h("path", { d: "M0,0V16.02", transform: "translate(12.035 12.035) rotate(135)" }), h("path", { d: "M0,0V16.02", transform: "translate(12.035 0.707) rotate(45)" })), h("button", { type: "button", onFocus: this.handleFocus, onBlur: this.handleBlur, disabled: this.disabled, ref: element => this.buttonElement = element })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["checkedChanged"]
    }; }
    static get style() { return ":host{display:inline-block;width:17px;height:17px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:var(--z-index-item-input)}:host(.in-item){display:block;position:static;margin-right:9px}button{width:100%;height:100%;position:absolute;left:0;top:0;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}button::-moz-focus-inner{border:0}.checkbox-icon{display:block;position:relative;width:100%;height:100%;padding:1px;border-width:1px;border-style:solid;border-color:var(--color-gris30);border-radius:var(--border-radius);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--color-white);stroke-width:2px;opacity:0}:host(.checkbox-checked) .checkbox-icon{border-color:var(--color-noir);background-color:var(--color-noir)}:host(.checkbox-checked) .checkbox-icon path{opacity:1}:host(.checkbox-disabled) button{cursor:default}"; }
};

export { Checkbox as pax_checkbox };
