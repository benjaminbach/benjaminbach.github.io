'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');

const TextField = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return (core.h("div", { class: this.getItemClasses() }, core.h("slot", null)));
    }
    static get style() { return ""; }
};

exports.pax_text_field = TextField;
