import { r as registerInstance, h, H as Host } from './core-8a28aff9.js';
var Panel = /** @class */ (function () {
    function Panel(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the panel is expanded.
         * @type {boolean}
         */
        this.open = false;
    }
    /**
     * Handles clicks on the panel header.
     * @return {boolean}
     */
    Panel.prototype.onHeaderClick = function () {
        return this.open = !this.open;
    };
    Panel.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: {
                'panel-opened': this.open
            } }, h("div", { class: "panel-header", onClick: function () { return _this.onHeaderClick(); } }, h("div", { class: "panel-icon" }, h("svg", { viewBox: "0 0 7.33 13" }, h("path", { d: "M7.132,5.957a.477.477,0,0,0-.04-.048L1.4.22A.827.827,0,0,0,.233.266.834.834,0,0,0,.242,1.4L5.334,6.494.241,11.586a.827.827,0,1,0,1.169,1.17L7.086,7.079a.824.824,0,0,0,.045-1.122Z" }))), h("slot", { name: "header" })), h("div", { class: "panel-body" }, h("slot", null))));
    };
    Object.defineProperty(Panel, "style", {
        get: function () { return ":host{--icon-width:2.875rem;border-bottom:1px solid var(--color-gris30);border-top:1px solid var(--color-gris30);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:-1px;width:100%}:host(.panel-opened){border-top-color:var(--color-prune)}.panel-header{-ms-flex-line-pack:center;align-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;padding:1.1875rem 0;position:relative;width:100%}.panel-header:focus,.panel-header:hover{color:var(--color-prune)}::slotted([slot=header]){color:var(--color-gris77);font-size:16px;font-weight:var(--font-weight-regular);line-height:1.375em}.panel-header:focus ::slotted([slot=header]),.panel-header:hover ::slotted([slot=header]),:host(.panel-opened) ::slotted([slot=header]){color:var(--color-prune)}.panel-icon{-ms-flex-line-pack:center;align-content:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-webkit-transition:-webkit-transform var(--transition-duration) var(--transition-timing-function);transition:-webkit-transform var(--transition-duration) var(--transition-timing-function);transition:transform var(--transition-duration) var(--transition-timing-function);transition:transform var(--transition-duration) var(--transition-timing-function),-webkit-transform var(--transition-duration) var(--transition-timing-function);width:var(--icon-width)}:host(.panel-opened) .panel-icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.panel-icon svg{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;height:auto;width:8px}.panel-icon path{fill:var(--color-vert)}.panel-header:focus .panel-icon path,.panel-header:hover .panel-icon path,:host(.panel-opened) .panel-header .panel-icon path{fill:var(--color-prune)}.panel-body{-webkit-box-sizing:border-box;box-sizing:border-box;display:none;padding:0 0 1.1875rem 0;-webkit-transition:opacity 5s var(--transition-timing-function);transition:opacity 5s var(--transition-timing-function);width:100%}:host(.panel-opened) .panel-body{display:block}\@media screen and (min-width:600px){.panel-body{padding-left:var(--icon-width)}}"; },
        enumerable: true,
        configurable: true
    });
    return Panel;
}());
export { Panel as pax_panel };
