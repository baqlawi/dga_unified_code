import { h } from "@stencil/core";
export class DgaIcon {
    constructor() {
        this.variant = 'bulk';
        this.type = 'rounded';
    }
    // Initialize class name on component load
    componentDidLoad() {
        this.updateIcon();
    }
    // Update class name when properties change
    updateIcon() {
        if (this.container) {
            // Convert the name to lowercase, replace "Icon" suffix, and separate words with hyphens
            const className = this.icon
                .replace(/([a-z])([A-Z])/g, '$1-$2')
                .replace(/([A-Z])([0-9])/g, '$1-$2')
                .replace(/([a-z])([0-9])/g, '$1-$2')
                .toLowerCase()
                .replace('-icon', '')
                .replace('icon', '')
                .trim();
            // Build the final class string
            const iconClass = `hgi hgi-${this.variant || ''} ${this.type ? `hgi-${this.type}` : ''} hgi-${className}`;
            // Apply the class to the icon element
            this.container.className = iconClass;
        }
    }
    render() {
        return (h("div", { key: '8769cc874948ce351f7d436b707f15f83e5753e0', style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'inherit',
            } }, h("i", { key: '8c9d11b29f5a46d72a6eeb78ed55e53c8aa7e9d6', style: {
                fontSize: `${this.size ? `${this.size}px` : 'inherit'}`,
                color: this.color,
            }, ref: el => (this.container = el) })));
    }
    static get is() { return "dga-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-icon.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
                "type": "string",
                "attribute": "icon",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "optional": false,
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
    static get watchers() {
        return [{
                "propName": "icon",
                "methodName": "updateIcon"
            }, {
                "propName": "variant",
                "methodName": "updateIcon"
            }, {
                "propName": "type",
                "methodName": "updateIcon"
            }];
    }
}
