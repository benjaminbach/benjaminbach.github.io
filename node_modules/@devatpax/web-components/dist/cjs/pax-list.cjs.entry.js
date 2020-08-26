'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-748f2439.js');

const List = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.inset = false;
        this.lines = false;
    }
    render() {
        return (core.h(core.Host, { class: {
                ['list-inset']: this.inset,
                ['list-lines']: this.lines
            } }));
    }
    static get style() { return "pax-list{display:block;contain:content;list-style-type:none;border-top:1px solid transparent}pax-list>pax-item{padding:7px 10px 7px 10px;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid transparent;font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);color:var(--color-gris77)}pax-list>pax-item:hover{background-color:var(--color-claire)}pax-list.list-inset{padding:8px 10px}pax-list.list-lines{border-top-color:var(--color-gris30)}pax-list.list-lines>pax-item{border-bottom-color:var(--color-gris30)}pax-list>pax-item.pax-color{padding-right:15px}pax-list>pax-item.pax-color:after{content:\"\";display:block;width:5px;background-color:var(--color-claire);position:absolute;top:5px;right:0;bottom:5px}pax-list>pax-item.pax-color--success:after{background-color:var(--color-vert)}pax-list>pax-item.pax-color--warning:after{background-color:var(--color-orange)}pax-list>pax-item.pax-color--danger:after{background-color:var(--color-rouge)}pax-list>pax-item.pax-color--dark:after{background-color:var(--color-prune)}"; }
};

exports.pax_list = List;
