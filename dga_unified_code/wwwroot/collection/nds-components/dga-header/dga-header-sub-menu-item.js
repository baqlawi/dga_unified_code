import { h } from "@stencil/core";
export class DgaHeaderSubMenuItem {
    constructor() {
        this.linkStyle = 2;
        this.iconProps = {
            size: 24,
            type: 'rounded',
            variant: 'stroke',
        };
    }
    render() {
        const backgroundClass = this.background === 'Brand' ? 'sub-menu__link--on-color' : '';
        const linkStyleClass = this.linkStyle && this.linkStyle > 0 ? (this.linkStyle === 2 ? 'sub-menu__link-icon--bg' : 'sub-menu__link-icon') : '';
        return (h("a", { key: '2dbbc4407f89b6faf7cb4b9316dcfeab6680f78e', href: this.link, class: `sub-menu__link ${backgroundClass}` }, this.linkStyle && this.linkStyle > 0 ? h("div", { class: linkStyleClass }, this.icon && h("dga-icon-v2", Object.assign({ name: this.icon }, this.iconProps))) : null, h("dga-flex", { key: 'e81b981b70ae9a96f3a966bf7f52e9d1a7937f15', direction: 'column', spacing: 4 }, h("dga-flex", { key: '6a8a1f55c1919f4f67d65d86392b7e8eedf3c438', direction: 'row', align: 'center', spacing: 8 }, h("span", { key: 'd95e3c2451fce4b9589b905435aa790c43e37618', class: "sub-menu__link-label" }, this.label), h("slot", { key: '7f505721685ad7990b3f3c1b621acce75d4c2641', name: "tag" })), this.helperText && h("span", { key: 'c9e0b55cc0ade18af23dc7245d1321790fb6a00d', class: "sub-menu__link-helper" }, this.helperText))));
    }
    static get is() { return "dga-header-sub-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-sub-menu-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-sub-menu-item.css"]
        };
    }
    static get properties() {
        return {
            "background": {
                "type": "string",
                "attribute": "background",
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
            "link": {
                "type": "string",
                "attribute": "link",
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
            "linkStyle": {
                "type": "number",
                "attribute": "link-style",
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
                "reflect": false,
                "defaultValue": "2"
            },
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
                "reflect": false
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
                "reflect": false
            },
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "iconProps": {
                "type": "unknown",
                "attribute": "icon-props",
                "mutable": false,
                "complexType": {
                    "original": "{\n      size?: number;\n      color?: string;\n      variant?: 'stroke' | 'solid' | 'duotone' | 'twotone' | 'bulk';\n      type?: 'rounded' | 'sharp' | 'standard';\n    }",
                    "resolved": "{ size?: number; color?: string; variant?: \"stroke\" | \"solid\" | \"duotone\" | \"twotone\" | \"bulk\"; type?: \"rounded\" | \"sharp\" | \"standard\"; }",
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
                "defaultValue": "{\n    size: 24,\n      type: 'rounded',\n      variant: 'stroke',\n    }"
            }
        };
    }
}
