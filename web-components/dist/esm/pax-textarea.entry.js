import { r as registerInstance, h, H as Host } from './core-8a28aff9.js';

const Textarea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.readonly = false;
        this.rows = 3;
        this.value = '';
    }
    render() {
        return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: {
                'has-value': !!this.value
            } }, h("textarea", { rows: this.rows, disabled: this.disabled, placeholder: this.placeholder, readOnly: this.readonly, value: this.value })));
    }
    static get style() { return "textarea.sc-pax-textarea{width:100%;padding:9px 0 8px 0;border:none;border-bottom:1px solid var(--color-gris77);font-size:16px;font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);line-height:1.375em;color:var(--color-noir);outline:none;text-overflow:ellipsis}textarea.sc-pax-textarea::-webkit-input-placeholder{color:var(--color-gris60)}textarea.sc-pax-textarea::-moz-placeholder{color:var(--color-gris60)}textarea.sc-pax-textarea:-ms-input-placeholder{color:var(--color-gris60)}textarea.sc-pax-textarea::-ms-input-placeholder{color:var(--color-gris60)}textarea.sc-pax-textarea::placeholder{color:var(--color-gris60)}textarea.sc-pax-textarea:not([readonly]):not([disabled]):focus{padding-bottom:7px;border-bottom-color:var(--color-vert);border-bottom-width:2px;color:var(--color-gris77)}textarea[disabled].sc-pax-textarea{color:var(--color-gris45)}textarea[readonly].sc-pax-textarea{color:var(--color-prune)}.has-value.sc-pax-textarea-h textarea.sc-pax-textarea{border-bottom-color:var(--color-noir)}"; }
};

export { Textarea as pax_textarea };
