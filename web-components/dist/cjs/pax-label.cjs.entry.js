'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');
const helpers = require('./helpers-dab3779f.js');

const Label = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.suffix = 'optional';
    }
    /**
     * When the label is clicked it tries to focus the element with the id that
     * matches the value of the for property.
     *
     * This behavior is prevented when the label is disabled.
     */
    onClick() {
        if (this.for && !this.disabled) {
            const elementToFocus = document.getElementById(this.for);
            if (elementToFocus) {
                elementToFocus.focus();
            }
        }
    }
    render() {
        return (core.h(core.Host, { onClick: () => this.onClick(), "data-suffix": this.required ? undefined : `(${this.suffix})`, class: {
                'in-form': helpers.hostContext('form', this.el),
                ['disabled']: this.disabled,
                ['text-wrap']: this.wrap
            } }, core.h("slot", null)));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host{display:block;font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);font-size:16px;color:var(--color-gris77);line-height:1.375em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([data-suffix]):after{content:attr(data-suffix);margin-left:5px}:host-context(pax-item:hover){color:var(--color-noir)}:host(.in-form){margin:20px 0 10px 0}:host(.disabled){color:var(--color-gris45);cursor:default}:host(.text-wrap){white-space:normal}"; }
};

exports.pax_label = Label;
