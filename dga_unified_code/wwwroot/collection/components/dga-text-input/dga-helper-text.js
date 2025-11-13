import { h } from "@stencil/core";
export class DgaHelperText {
    constructor() {
        this.helperText = '';
        this.error = false;
    }
    render() {
        var _a;
        return (h("div", { key: 'bbdf98959852b38409a147f450bee473469d1bd4', class: `dga-helper-text ${this.error ? "dga-helper-text--error" : ""}` }, h("span", { key: '7cfca19d1470868413f20e4d2b048504694f3913', class: "dga-helper-text__icon" }, this.helperTextIcon && ((_a = this.helperTextIcon) === null || _a === void 0 ? void 0 : _a.name) && h("dga-icon", { key: 'd98bce82ac6e9655a7ddd234e6f5902bd75dc1d8', icon: this.helperTextIcon.name, variant: this.helperTextIcon.variant, type: this.helperTextIcon.type, size: 16 })), h("span", { key: '93a11a5ce8d94e1e9cd52721dfdac8dfe8405d45', class: "dga-helper-text__desc" }, this.helperText)));
    }
    static get is() { return "dga-helper-text"; }
    static get properties() {
        return {
            "helperTextIcon": {
                "type": "unknown",
                "attribute": "helper-text-icon",
                "mutable": false,
                "complexType": {
                    "original": "Icon",
                    "resolved": "Icon",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-featured-icon/dga-featured-icon",
                            "id": "src/components/dga-featured-icon/dga-featured-icon.tsx::Icon"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
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
            },
            "error": {
                "type": "boolean",
                "attribute": "error",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "false"
            }
        };
    }
}
