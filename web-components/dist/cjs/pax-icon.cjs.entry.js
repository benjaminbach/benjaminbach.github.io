'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');

const Icon = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { role: "img" }, core.h("svg", { width: "18", height: "22", viewBox: "0 0 18 22.5" }, core.h("g", { transform: "translate(0.75 0.75)" }, core.h("g", { transform: "translate(-0.75 -0.75)" }, core.h("path", { d: "M.75,21.75V.75H12.337L17.25,6.223V21.75Z", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }), core.h("path", { d: "M12.337.75V6.383H17.25", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }), core.h("line", { x2: "10.313", transform: "translate(3.92 10.829)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }), core.h("line", { x2: "10.313", transform: "translate(3.92 14.329)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }), core.h("line", { x2: "10.313", transform: "translate(3.92 17.829)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }))))));
    }
    static get style() { return ""; }
};

exports.pax_icon = Icon;
