import { h, Host } from "@stencil/core";
export class Icon {
    render() {
        return (h(Host, { role: "img" },
            h("svg", { width: "18", height: "22", viewBox: "0 0 18 22.5" },
                h("g", { transform: "translate(0.75 0.75)" },
                    h("g", { transform: "translate(-0.75 -0.75)" },
                        h("path", { d: "M.75,21.75V.75H12.337L17.25,6.223V21.75Z", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }),
                        h("path", { d: "M12.337.75V6.383H17.25", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }),
                        h("line", { x2: "10.313", transform: "translate(3.92 10.829)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }),
                        h("line", { x2: "10.313", transform: "translate(3.92 14.329)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }),
                        h("line", { x2: "10.313", transform: "translate(3.92 17.829)", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" }))))));
    }
    static get is() { return "pax-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["icon.css"]
    }; }
    static get styleUrls() { return {
        "$": ["icon.css"]
    }; }
}
