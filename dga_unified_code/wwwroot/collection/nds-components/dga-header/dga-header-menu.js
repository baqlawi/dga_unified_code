import { h } from "@stencil/core";
export class DgaHeaderMenu {
    render() {
        return (h("ul", { key: '4f97f8c2cec2087f1e8c1793b80d0fed1c1c083b', class: "header-nav__menu" }, h("slot", { key: '1d2e946e6d5469964d6f5cece23f5f7b7121a01f' })));
    }
    static get is() { return "dga-header-menu-vv2"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-menu.css"]
        };
    }
}
