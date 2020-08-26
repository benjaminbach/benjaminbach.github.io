import { r as registerInstance, h, H as Host } from './core-8a28aff9.js';
import { c as createColorClass } from './theme-363b46df.js';

const MessageStrip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        let svg;
        if (this.icon === 'success') {
            svg = (h("svg", { viewBox: "0 0 30 30" }, h("circle", { class: "bg", cx: "15", cy: "15", r: "15" }), h("path", { class: "icon", d: "M23.361,10,14.132,20.38a1.155,1.155,0,0,1-1.586.135L6.777,15.9a1.154,1.154,0,0,1,1.442-1.8l4.913,3.929,8.5-9.566A1.154,1.154,0,0,1,23.361,10Z" })));
        }
        else if (this.icon === 'warning') {
            svg = (h("svg", { viewBox: "0 0 30 30" }, h("circle", { class: "bg", cx: "15", cy: "15", r: "15" }), h("path", { class: "icon", d: "M15.026,23.494q-2.373,0-4.746,0c-.384,0-.392-.009-.393-.395,0-.644.009-1.289,0-1.933-.005-.252.075-.342.335-.339.908.013,1.816.005,2.724,0,.394,0,.4-.007.4-.387q0-2.8,0-5.6c0-.385-.011-.394-.4-.395-.908,0-1.816-.007-2.724,0-.251,0-.347-.073-.341-.333.015-.634.017-1.27,0-1.9-.009-.294.108-.357.378-.356q3.764.012,7.528,0c.285,0,.368.094.366.37-.009,1.865,0,3.73,0,5.6,0,.889.007,1.777,0,2.666,0,.25.074.35.335.339.429-.017.86.01,1.288-.009.278-.013.353.1.348.358-.012.654-.014,1.309,0,1.962.006.265-.076.355-.347.353C18.19,23.489,16.608,23.495,15.026,23.494Zm2.487-12.952a2.115,2.115,0,0,0-.027-3.522,3.164,3.164,0,0,0-3.422-.035,2.076,2.076,0,0,0-.373,3.277,2.642,2.642,0,0,0,1.848.779A3.175,3.175,0,0,0,17.513,10.542Z" })));
        }
        else if (this.icon === 'danger') {
            svg = (h("svg", { viewBox: "0 0 30 30" }, h("circle", { class: "bg", cx: "15", cy: "15", r: "15" }), h("path", { class: "icon", d: "M16.592,15,21.92,9.672a1.128,1.128,0,0,0,0-1.592,1.149,1.149,0,0,0-1.59,0L15,13.409,9.672,8.08A1.126,1.126,0,1,0,8.08,9.672L13.41,15,8.079,20.329a1.131,1.131,0,0,0,0,1.594,1.152,1.152,0,0,0,1.592,0L15,16.592l5.331,5.33a1.125,1.125,0,0,0,1.589-1.594Z" })));
        }
        return (h(Host, { class: Object.assign(Object.assign({}, createColorClass(this.color)), { 'message-strip-icon--success': this.icon === 'success', 'message-strip-icon--warning': this.icon === 'warning', 'message-strip-icon--danger': this.icon === 'danger' }) }, this.icon
            ? h("div", { class: "message-strip-icon" }, svg)
            : null, h("div", { class: "message-strip-body" }, h("slot", null))));
    }
    static get style() { return ":host{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:20px;background-color:var(--color-claire)}:host(:empty){display:none}:host(.pax-color--success){background-color:var(--color-vert10)}:host(.pax-color--warning){background-color:var(--color-orange10)}:host(.pax-color--danger){background-color:var(--color-rouge10)}.message-strip-body{padding:5px 0;font-size:16px;line-height:1.375em;color:var(--color-noir)}.message-strip-icon{display:block;-ms-flex-negative:0;flex-shrink:0;width:50px}.message-strip-icon,.message-strip-icon svg{-webkit-box-sizing:border-box;box-sizing:border-box;height:30px}.message-strip-icon svg{width:30px;position:relative;margin-right:auto}.message-strip-icon path.circle{fill:var(--color-prune)}:host(.message-strip-icon--success) .message-strip-icon circle.bg{fill:var(--color-vert)}:host(.message-strip-icon--warning) .message-strip-icon circle.bg{fill:var(--color-orange)}:host(.message-strip-icon--danger) .message-strip-icon circle.bg{fill:var(--color-red-2)}:host(.message-strip-icon--danger) .message-strip-icon path.icon,:host(.message-strip-icon--success) .message-strip-icon path.icon,:host(.message-strip-icon--warning) .message-strip-icon path.icon{fill:var(--color-white)}"; }
};

export { MessageStrip as pax_message_strip };
