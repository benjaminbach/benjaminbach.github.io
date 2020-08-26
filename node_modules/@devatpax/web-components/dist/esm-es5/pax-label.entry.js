import { r as registerInstance, h, H as Host, g as getElement } from './core-8a28aff9.js';
import { h as hostContext } from './helpers-64dd60a9.js';
var Label = /** @class */ (function () {
    function Label(hostRef) {
        registerInstance(this, hostRef);
        this.suffix = 'optional';
    }
    /**
     * When the label is clicked it tries to focus the element with the id that
     * matches the value of the for property.
     *
     * This behavior is prevented when the label is disabled.
     */
    Label.prototype.onClick = function () {
        if (this.for && !this.disabled) {
            var elementToFocus = document.getElementById(this.for);
            if (elementToFocus) {
                elementToFocus.focus();
            }
        }
    };
    Label.prototype.render = function () {
        var _a;
        var _this = this;
        return (h(Host, { onClick: function () { return _this.onClick(); }, "data-suffix": this.required ? undefined : "(" + this.suffix + ")", class: (_a = {
                    'in-form': hostContext('form', this.el)
                },
                _a['disabled'] = this.disabled,
                _a['text-wrap'] = this.wrap,
                _a) }, h("slot", null)));
    };
    Object.defineProperty(Label.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label, "style", {
        get: function () { return ":host{display:block;font-family:var(--font-family-myriad-pro);font-weight:var(--font-weight-regular);font-size:16px;color:var(--color-gris77);line-height:1.375em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([data-suffix]):after{content:attr(data-suffix);margin-left:5px}:host-context(pax-item:hover){color:var(--color-noir)}:host(.in-form){margin:20px 0 10px 0}:host(.disabled){color:var(--color-gris45);cursor:default}:host(.text-wrap){white-space:normal}"; },
        enumerable: true,
        configurable: true
    });
    return Label;
}());
export { Label as pax_label };
