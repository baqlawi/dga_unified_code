import { h } from "@stencil/core";
export class DgaContentSwitcherItem {
    render() {
        return h("slot", { key: '98721cdda8e2c8e9386f1d1bf5f67c5745f580b1' });
    }
    static get is() { return "dga-content-switcher-item"; }
    static get properties() {
        return {
            "label": {
                "type": "any",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
            "content": {
                "type": "any",
                "attribute": "content",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
