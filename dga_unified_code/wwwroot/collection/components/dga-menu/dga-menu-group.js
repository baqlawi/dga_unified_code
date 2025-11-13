import { h } from "@stencil/core";
export class DgaMenuGroup {
    render() {
        return (h("div", { key: 'fffacf516a218a0a0b3cbca0a80fb08d4155239f', class: "menu-group" }, this.groupLabel && h("span", { key: '33d8cfc36872ca7e1d5bd05e0065191711416951', class: "menu-group__label" }, this.groupLabel), h("ul", { key: '8e6689dd57c67c37bf8d5088ff6cf6e3642bf3b5', class: "menu-group__items" }, h("slot", { key: '7e5d4828010d7c1edde602611e8057a9a68e9a5f' }))));
    }
    static get is() { return "dga-menu-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-menu-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-menu-group.css"]
        };
    }
    static get properties() {
        return {
            "groupLabel": {
                "type": "string",
                "attribute": "group-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
