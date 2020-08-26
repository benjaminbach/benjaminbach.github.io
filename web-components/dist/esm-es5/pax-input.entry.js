import { r as registerInstance, h, H as Host } from './core-8a28aff9.js';
var Input = /** @class */ (function () {
    function Input(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.readonly = false;
        this.type = 'text';
        this.value = '';
    }
    Input.prototype.render = function () {
        return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: {
                'has-value': !!this.value
            } }, h("input", { disabled: this.disabled, readOnly: this.readonly, type: this.type, value: this.value })));
    };
    Object.defineProperty(Input, "style", {
        get: function () { return "input.sc-pax-input{width:240px;max-width:100%;padding:9px 0 8px 0;border:none;border-bottom:1px solid var(--color-gris77);font-size:16px;font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);line-height:1.375em;color:var(--color-noir);outline:none;text-overflow:ellipsis}input.sc-pax-input:not([readonly]):not([disabled]):focus{padding-bottom:7px;border-bottom-color:var(--color-vert);border-bottom-width:2px;color:var(--color-gris77)}input[disabled].sc-pax-input{color:var(--color-gris45)}input[readonly].sc-pax-input{color:var(--color-prune)}.has-value.sc-pax-input-h input.sc-pax-input{border-bottom-color:var(--color-noir)}"; },
        enumerable: true,
        configurable: true
    });
    return Input;
}());
export { Input as pax_input };
