import { h } from "@stencil/core";
export class DgaHeaderSubMenuColumn {
    constructor() {
        this.label = '';
    }
    render() {
        return (h("div", { key: 'a6e781f92a319456f98cc97d39d84618d8a4db0a', class: "sub-menu__column" }, this.label && h("h2", { key: 'c0399388a93737386d76873ec2ef53449740efe1', class: "sub-menu__column__label" }, this.label), h("slot", { key: 'ce9fe4cb5d5428224061e5f814063a28c3822d17' })));
    }
    static get is() { return "dga-header-sub-menu-column"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-sub-menu-column.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-sub-menu-column.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
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
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
}
