import { h } from "@stencil/core";
export class DgaButtonLeadingIcon {
    constructor() {
        this.variant = 'bulk';
        this.type = 'rounded';
    }
    render() {
        // Check if there are any child elements
        return (h("span", { key: '51c5201ff4b203cf8a7477e3df2a421c97de4195', class: "dga-btn-icon dga-btn-icon--leading", "aria-hidden": "true", slot: "leading-icon" }, h("dga-icon-v2", { key: '1f6b6a98754545de0d6b210d84a88633a0780f47', name: this.name, size: this.size, color: this.color, variant: this.variant, type: this.type })));
    }
    static get is() { return "dga-button-leading-icon"; }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": true,
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
                "reflect": true
            },
            "size": {
                "type": "number",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
            },
            "color": {
                "type": "string",
                "attribute": "color",
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
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'stroke' | 'solid' | 'duotone' | 'twotone' | 'bulk'",
                    "resolved": "\"bulk\" | \"duotone\" | \"solid\" | \"stroke\" | \"twotone\"",
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
                "defaultValue": "'bulk'"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'rounded' | 'sharp' | 'standard'",
                    "resolved": "\"rounded\" | \"sharp\" | \"standard\"",
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
                "defaultValue": "'rounded'"
            }
        };
    }
    static get elementRef() { return "el"; }
}
