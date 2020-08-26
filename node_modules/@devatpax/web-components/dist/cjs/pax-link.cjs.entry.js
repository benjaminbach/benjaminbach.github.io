'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');

const Link = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        const TagType = this.href === undefined || this.disabled ? 'span' : 'a';
        let svg;
        if (!this.disabled) {
            svg = (core.h("svg", { class: "icon-chevron", viewBox: "0 0 5.88 9" }, core.h("path", { d: "M5.88,4.51,2.37,9H0L3.48,4.51,0,0H2.37Z" })));
        }
        return (core.h(TagType, { class: {
                'disabled': this.disabled,
                'emphasized': this.emphasized,
                'muted': this.muted
            }, href: this.href && !this.disabled }, svg, core.h("span", { class: "label" }, "Link")));
    }
    static get style() { return "a{color:var(--color-prune);text-decoration:none}a,span.disabled{font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);font-size:1rem;line-height:1.375em}span.disabled{color:var(--color-gris45)}a:not(.disabled):focus,a:not(.disabled):hover{color:var(--color-vert)}a.muted{color:var(--color-gris77)}a.emphasized{color:var(--color-vert);text-decoration:underline}a.emphasized:focus,a.emphasized:hover{color:var(--color-grey)}.icon-chevron{width:.375em;height:.5625em;margin-right:.3125em;fill:currentColor;vertical-align:baseline}"; }
};

exports.pax_link = Link;
