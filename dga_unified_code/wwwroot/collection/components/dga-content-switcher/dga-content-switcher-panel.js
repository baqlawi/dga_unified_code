import { h } from "@stencil/core";
export class DgaContentSwitcherPanel {
    render() {
        return (h("div", { key: 'dc4acdb1cb410fa9b98033c237a3512f36feaebf', class: "content-switcher-panel", hidden: this.value !== this.index }, h("slot", { key: 'da6642b7fb04e23668b84593d70f1d6881f63d8b' })));
    }
    static get is() { return "dga-content-switcher-panel"; }
    static get properties() {
        return {
            "value": {
                "type": "number",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "reflect": false
            },
            "index": {
                "type": "number",
                "attribute": "index",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "reflect": false
            }
        };
    }
}
