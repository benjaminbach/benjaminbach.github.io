'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');
const helpers = require('./helpers-dab3779f.js');

let radioIds = 0;
const Radio = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        this.onChange = core.createEvent(this, "onChange", 7);
        this.onFocus = core.createEvent(this, "onFocus", 7);
        this.onBlur = core.createEvent(this, "onBlur", 7);
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
        const label = helpers.findItemLabel(this.el);
        if (label) {
            label.id = labelId;
        }
        // renderHiddenInput(true, this.el, this.name, (this.checked ? this.value : ''), this.disabled);
        return (core.h(core.Host, { onClick: this.handleClick, role: "radio", "aria-checked": `${this.checked}`, "aria-disabled": this.disabled ? 'true' : null, "aria-labelledby": labelId, class: {
                'in-item': helpers.hostContext('pax-item', this.el),
                'radio-checked': this.checked,
                'radio-disabled': this.disabled
            } }, core.h("svg", { class: "radio-icon", viewBox: "0 0 12.742 12.742" }, core.h("path", { d: "M0,0V16.02", transform: "translate(12.035 12.035) rotate(135)" }), core.h("path", { d: "M0,0V16.02", transform: "translate(12.035 0.707) rotate(45)" })), core.h("input", { type: "radio", name: "test", value: "foo", checked: true }), core.h("button", { type: "button", onFocus: this.handleFocus, onBlur: this.handleBlur, disabled: this.disabled, ref: element => this.buttonElement = element })));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "checked": ["checkedChanged"]
    }; }
    static get style() { return ":host{display:inline-block;width:17px;height:17px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:var(--z-index-item-input)}:host(.in-item){display:block;position:static;margin-right:9px}button{width:100%;height:100%;position:absolute;left:0;top:0;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}button::-moz-focus-inner{border:0}.radio-icon{display:block;position:relative;width:100%;height:100%;padding:1px;border-width:1px;border-style:solid;border-color:var(--color-gris30);border-radius:17px;-webkit-box-sizing:border-box;box-sizing:border-box}.radio-icon path{fill:none;stroke:var(--color-white);stroke-width:2px;opacity:0}:host(.radio-checked) .radio-icon{border-color:var(--color-noir);background-color:var(--color-noir)}:host(.radio-checked) .radio-icon path{opacity:1}:host(.radio-disabled) button{cursor:default}"; }
};

exports.pax_radio = Radio;
