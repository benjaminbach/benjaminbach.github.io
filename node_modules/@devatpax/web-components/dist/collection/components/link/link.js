import { h } from "@stencil/core";
export class Link {
    render() {
        const TagType = this.href === undefined || this.disabled ? 'span' : 'a';
        let svg;
        if (!this.disabled) {
            svg = (h("svg", { class: "icon-chevron", viewBox: "0 0 5.88 9" },
                h("path", { d: "M5.88,4.51,2.37,9H0L3.48,4.51,0,0H2.37Z" })));
        }
        return (h(TagType, { class: {
                'disabled': this.disabled,
                'emphasized': this.emphasized,
                'muted': this.muted
            }, href: this.href && !this.disabled },
            svg,
            h("span", { class: "label" }, "Link")));
    }
    static get is() { return "pax-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./link.css"]
    }; }
    static get styleUrls() { return {
        "$": ["link.css"]
    }; }
    static get properties() { return {
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false
        },
        "emphasized": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "emphasized",
            "reflect": false
        },
        "muted": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "muted",
            "reflect": false
        },
        "href": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "href",
            "reflect": false
        }
    }; }
}
