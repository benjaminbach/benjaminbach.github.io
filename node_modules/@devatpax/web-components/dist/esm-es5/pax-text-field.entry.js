import { r as registerInstance, h } from './core-8a28aff9.js';
var TextField = /** @class */ (function () {
    function TextField(hostRef) {
        registerInstance(this, hostRef);
        this.isFocused = false;
    }
    TextField.prototype.inputFocusedHandler = function (event) {
        this.isFocused = true;
        console.log(event);
    };
    TextField.prototype.inputBlurHandler = function (event) {
        this.isFocused = false;
        console.log(event);
    };
    TextField.prototype.getItemClasses = function () {
        return this.isFocused ? 'text-field is-focused' : 'text-field ';
    };
    TextField.prototype.render = function () {
        return (h("div", { class: this.getItemClasses() }, h("slot", null)));
    };
    Object.defineProperty(TextField, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return TextField;
}());
export { TextField as pax_text_field };
