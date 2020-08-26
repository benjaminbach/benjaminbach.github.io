import { r as registerInstance, h } from './core-8a28aff9.js';

const TextField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isFocused = false;
    }
    inputFocusedHandler(event) {
        this.isFocused = true;
        console.log(event);
    }
    inputBlurHandler(event) {
        this.isFocused = false;
        console.log(event);
    }
    getItemClasses() {
        return this.isFocused ? 'text-field is-focused' : 'text-field ';
    }
    render() {
        return (h("div", { class: this.getItemClasses() }, h("slot", null)));
    }
    static get style() { return ""; }
};

export { TextField as pax_text_field };
