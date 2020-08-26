'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');
const theme = require('./theme-1679eecf.js');

const Item = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: Object.assign({ ['pax-color']: this.color !== undefined }, theme.createColorClass(this.color)) }, core.h("div", { class: "item__native" }, core.h("slot", { name: "start" }), core.h("div", { class: "item__inner" }, core.h("div", { class: "input__wrapper" }, core.h("slot", null)), core.h("slot", { name: "end" })))));
    }
    static get style() { return ":host{display:block;overflow:hidden;text-align:initial}.item__native,:host{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;position:relative}.item__native{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;overflow:inherit;width:100%}.item__native::-moz-focus-inner{border:0}.item__inner{-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;overflow:inherit}.input__wrapper{display:block;overflow:hidden}::slotted([slot=start]){margin-right:1rem}::slotted([slot=end]){margin-left:1rem}::slotted(pax-checkbox),::slotted(pax-radio){-ms-flex-item-align:baseline;align-self:baseline;margin:8px 9px 5px 0}::slotted(pax-label){-ms-flex:1 1 0px;flex:1 1 0;margin:5px 0}"; }
};

exports.pax_item = Item;
