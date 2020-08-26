import { r as registerInstance, h } from './core-8a28aff9.js';
var Col = /** @class */ (function () {
    function Col(hostRef) {
        registerInstance(this, hostRef);
    }
    Col.prototype.render = function () {
        return h("div", null, h("slot", null));
    };
    Object.defineProperty(Col, "style", {
        get: function () { return ":host{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;margin:0;max-width:100%;min-height:1px;padding:5px;position:relative;width:100%}:host([col-sm-12]){-ms-flex-preferred-size:100%;flex-basis:100%}:host([col-sm-6]){-ms-flex-preferred-size:50%;flex-basis:50%}\@media only screen and (min-width:800px){:host([col-md-3]){-ms-flex-preferred-size:25%;flex-basis:25%}:host([col-md-6]){-ms-flex-preferred-size:50%;flex-basis:50%}}\@media only screen and (min-width:1200px){:host([col-lg-3]){-ms-flex-preferred-size:25%;flex-basis:25%}}"; },
        enumerable: true,
        configurable: true
    });
    return Col;
}());
export { Col as pax_col };
