import { r as registerInstance, h, H as Host } from './core-8a28aff9.js';
var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        registerInstance(this, hostRef);
    }
    Icon.prototype.render = function () {
        return (h(Host, { role: "img" }, h("svg", { width: "18", height: "22", viewBox: "0 0 18 22.5" }, h("g", { transform: "translate(0.75 0.75)" }, h("g", { transform: "translate(-0.75 -0.75)" }, h("path", { d: "M.75,21.75V.75H12.337L17.25,6.223V21.75Z", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }), h("path", { d: "M12.337.75V6.383H17.25", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }), h("line", { x2: "10.313", transform: "translate(3.92 10.829)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }), h("line", { x2: "10.313", transform: "translate(3.92 14.329)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }), h("line", { x2: "10.313", transform: "translate(3.92 17.829)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }))))));
    };
    Object.defineProperty(Icon, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return Icon;
}());
export { Icon as pax_icon };
