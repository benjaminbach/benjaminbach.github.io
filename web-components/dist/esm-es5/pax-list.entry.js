import { r as registerInstance, h, H as Host } from './core-8a28aff9.js';
var List = /** @class */ (function () {
    function List(hostRef) {
        registerInstance(this, hostRef);
        this.inset = false;
        this.lines = false;
    }
    List.prototype.render = function () {
        var _a;
        return (h(Host, { class: (_a = {},
                _a['list-inset'] = this.inset,
                _a['list-lines'] = this.lines,
                _a) }));
    };
    Object.defineProperty(List, "style", {
        get: function () { return "pax-list{display:block;contain:content;list-style-type:none;border-top:1px solid transparent}pax-list>pax-item{padding:7px 10px 7px 10px;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid transparent;font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);color:var(--color-gris77)}pax-list>pax-item:hover{background-color:var(--color-claire)}pax-list.list-inset{padding:8px 10px}pax-list.list-lines{border-top-color:var(--color-gris30)}pax-list.list-lines>pax-item{border-bottom-color:var(--color-gris30)}pax-list>pax-item.pax-color{padding-right:15px}pax-list>pax-item.pax-color:after{content:\"\";display:block;width:5px;background-color:var(--color-claire);position:absolute;top:5px;right:0;bottom:5px}pax-list>pax-item.pax-color--success:after{background-color:var(--color-vert)}pax-list>pax-item.pax-color--warning:after{background-color:var(--color-orange)}pax-list>pax-item.pax-color--danger:after{background-color:var(--color-rouge)}pax-list>pax-item.pax-color--dark:after{background-color:var(--color-prune)}"; },
        enumerable: true,
        configurable: true
    });
    return List;
}());
export { List as pax_list };
