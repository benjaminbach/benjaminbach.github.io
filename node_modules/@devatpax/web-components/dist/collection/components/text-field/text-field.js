import { h } from "@stencil/core";
export class TextField {
    constructor() {
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
        return (h("div", { class: this.getItemClasses() },
            h("slot", null)));
    }
    static get is() { return "pax-text-field"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["text-field.css"]
    }; }
    static get styleUrls() { return {
        "$": ["text-field.css"]
    }; }
    static get states() { return {
        "isFocused": {}
    }; }
    static get listeners() { return [{
            "name": "inputFocused",
            "method": "inputFocusedHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "inputBlur",
            "method": "inputBlurHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
