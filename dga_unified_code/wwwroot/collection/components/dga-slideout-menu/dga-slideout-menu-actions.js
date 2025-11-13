import { h } from "@stencil/core";
export class DgaSlideoutMenuActions {
    render() {
        return (h("div", { key: '946394f415d919f511b1eb2fe0a8a6320c801b02', class: "dga-slideout-menu__actions" }, h("slot", { key: '7a703a0141dedd5f94a8d8e930a9c798dde24a38' })));
    }
    static get is() { return "dga-slideout-menu-actions"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-slideout-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-slideout-menu.css"]
        };
    }
}
