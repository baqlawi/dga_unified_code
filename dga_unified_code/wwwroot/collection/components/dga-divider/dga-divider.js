import { h } from "@stencil/core";
export class DgaDivider {
    constructor() {
        this.color = 'neutral';
        this.orientation = 'horizontal';
    }
    render() {
        return h("span", { key: '70692a729236ae9b0fd4a0626a1c10be9be2e57c', class: `dga-divider dga-divider--${this.color} dga-divider--${this.orientation}` });
    }
    static get is() { return "dga-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-divider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-divider.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'neutral' | 'alpha-white' | 'white' | 'primary'",
                    "resolved": "\"alpha-white\" | \"neutral\" | \"primary\" | \"white\"",
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
                "defaultValue": "'neutral'"
            },
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "\"horizontal\" | \"vertical\"",
                    "resolved": "\"horizontal\" | \"vertical\"",
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
                "defaultValue": "'horizontal'"
            }
        };
    }
}
