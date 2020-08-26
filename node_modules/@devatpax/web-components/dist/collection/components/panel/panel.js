import { h, Host } from "@stencil/core";
export class Panel {
    constructor() {
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
    onHeaderClick() {
        return this.open = !this.open;
    }
    render() {
        return (h(Host, { class: {
                'panel-opened': this.open
            } },
            h("div", { class: "panel-header", onClick: () => this.onHeaderClick() },
                h("div", { class: "panel-icon" },
                    h("svg", { viewBox: "0 0 7.33 13" },
                        h("path", { d: "M7.132,5.957a.477.477,0,0,0-.04-.048L1.4.22A.827.827,0,0,0,.233.266.834.834,0,0,0,.242,1.4L5.334,6.494.241,11.586a.827.827,0,1,0,1.169,1.17L7.086,7.079a.824.824,0,0,0,.045-1.122Z" }))),
                h("slot", { name: "header" })),
            h("div", { class: "panel-body" },
                h("slot", null))));
    }
    static get is() { return "pax-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["panel.css"]
    }; }
    static get styleUrls() { return {
        "$": ["panel.css"]
    }; }
    static get properties() { return {
        "open": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }],
                "text": "If `true`, the panel is expanded."
            },
            "attribute": "open",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
