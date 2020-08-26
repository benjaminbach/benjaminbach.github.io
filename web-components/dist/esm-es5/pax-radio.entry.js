import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-8a28aff9.js';
import { f as findItemLabel, h as hostContext } from './helpers-64dd60a9.js';
var radioIds = 0;
var Radio = /** @class */ (function () {
    function Radio(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.inputId = "pax-rb-" + radioIds++;
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
        this.handleClick = function () {
            _this.setFocus();
            _this.checked = !_this.checked;
        };
        /**
         * Kicks in when the radio components gains focus.
         */
        this.handleFocus = function () {
            _this.onFocus.emit();
        };
        /**
         * Kicks in when the radio component loses focus.
         */
        this.handleBlur = function () {
            _this.onBlur.emit();
        };
        this.onChange = createEvent(this, "onChange", 7);
        this.onFocus = createEvent(this, "onFocus", 7);
        this.onBlur = createEvent(this, "onBlur", 7);
    }
    Radio.prototype.checkedChanged = function (isChecked) {
        this.onChange.emit({
            checked: isChecked,
            value: this.value
        });
    };
    /**
     * Focuses the radio component.
     */
    Radio.prototype.setFocus = function () {
        if (this.buttonElement) {
            this.buttonElement.focus();
        }
    };
    Radio.prototype.render = function () {
        var _this = this;
        var labelId = this.inputId + 'lbl';
        var label = findItemLabel(this.el);
        if (label) {
            label.id = labelId;
        }
        // renderHiddenInput(true, this.el, this.name, (this.checked ? this.value : ''), this.disabled);
        return (h(Host, { onClick: this.handleClick, role: "radio", "aria-checked": "" + this.checked, "aria-disabled": this.disabled ? 'true' : null, "aria-labelledby": labelId, class: {
                'in-item': hostContext('pax-item', this.el),
                'radio-checked': this.checked,
                'radio-disabled': this.disabled
            } }, h("svg", { class: "radio-icon", viewBox: "0 0 12.742 12.742" }, h("path", { d: "M0,0V16.02", transform: "translate(12.035 12.035) rotate(135)" }), h("path", { d: "M0,0V16.02", transform: "translate(12.035 0.707) rotate(45)" })), h("input", { type: "radio", name: "test", value: "foo", checked: true }), h("button", { type: "button", onFocus: this.handleFocus, onBlur: this.handleBlur, disabled: this.disabled, ref: function (element) { return _this.buttonElement = element; } })));
    };
    Object.defineProperty(Radio.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "watchers", {
        get: function () {
            return {
                "checked": ["checkedChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "style", {
        get: function () { return ":host{display:inline-block;width:17px;height:17px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:var(--z-index-item-input)}:host(.in-item){display:block;position:static;margin-right:9px}button{width:100%;height:100%;position:absolute;left:0;top:0;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}button::-moz-focus-inner{border:0}.radio-icon{display:block;position:relative;width:100%;height:100%;padding:1px;border-width:1px;border-style:solid;border-color:var(--color-gris30);border-radius:17px;-webkit-box-sizing:border-box;box-sizing:border-box}.radio-icon path{fill:none;stroke:var(--color-white);stroke-width:2px;opacity:0}:host(.radio-checked) .radio-icon{border-color:var(--color-noir);background-color:var(--color-noir)}:host(.radio-checked) .radio-icon path{opacity:1}:host(.radio-disabled) button{cursor:default}"; },
        enumerable: true,
        configurable: true
    });
    return Radio;
}());
export { Radio as pax_radio };
