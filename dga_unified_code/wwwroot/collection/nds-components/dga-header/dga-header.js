import { h } from "@stencil/core";
export class DgaHeader {
    constructor() {
        this.fullWidth = true;
        this.divider = true;
        this.sticky = false;
    }
    render() {
        return (h("header", { key: '08903cd169071cb664b7a6c3846348c1c6940594', class: `header ${this.divider ? 'header--divider' : ''} ${this.sticky ? 'header--sticky' : ''}` }, h("nav", { key: 'eb018797c8644e934618bdc1cbd5f56cb1498bcb', class: `header-nav--${this.fullWidth ? 'full' : 'fixed'}` }, h("slot", { key: '6388b84796ec5d37674fa1bc211b8fce0e998bb7' }))));
    }
    static get is() { return "dga-header-vv2"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header.css"]
        };
    }
    static get properties() {
        return {
            "fullWidth": {
                "type": "boolean",
                "attribute": "full-width",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "divider": {
                "type": "boolean",
                "attribute": "divider",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "sticky": {
                "type": "boolean",
                "attribute": "sticky",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
