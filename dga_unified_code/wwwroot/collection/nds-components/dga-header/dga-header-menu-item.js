import { h } from "@stencil/core";
export class DgaNavHeaderLink {
    constructor() {
        this.icon = "arrow-down-01"; // Icon name
        this.iconProps = {
            type: 'rounded',
            variant: 'stroke',
        };
        this.active = false;
        this.subMenuBackground = 'white';
        this.subMenuFullWidth = true;
        this.openSubMenu = false;
        this.handleClick = (event) => {
            event.preventDefault();
            this.linkClicked.emit();
        };
    }
    componentWillLoad() {
        this.el.childNodes.forEach(item => {
            const el = item;
            if (el.tagName === 'DGA-HEADER-SUB-MENU' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'dga-header-sub-menu');
            }
        });
    }
    render() {
        return (h("li", { key: 'fa8b7d5ba8156e7930ec06d6390d0fe267558fc0', onMouseEnter: () => {
                this.openSubMenu = true;
            }, onMouseLeave: () => {
                this.openSubMenu = false;
            }, style: {
                display: 'inline-block',
            } }, h("a", { key: '66ba74876a69829803d3146c28fe5bd5738380cb', href: "#", class: `dga-header-menu__item ${this.active ? 'dga-header-menu__item--active' : ''}`, onClick: this.handleClick }, h("span", { key: 'f544f95027778024bbe37179dfdabceb92087761', class: "dga-header-menu__item-label" }, this.label), h("span", { key: 'fefcb5aaba117c4e27e528d020b69038a5e150c3', class: "dga-header-menu__item-arrow" }, h("dga-icon-v2", Object.assign({ key: '07f0afa102c2103964e9e69bf69893264c391065', name: this.icon }, this.iconProps)))), this.openSubMenu && h("slot", { key: 'b98dd69230ad484bee827c392adfd09c470fa3f2', name: "dga-header-sub-menu" })));
    }
    static get is() { return "dga-header-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-menu-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-menu-item.css"]
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
                "optional": false,
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
                "reflect": false,
                "defaultValue": "\"arrow-down-01\""
            },
            "iconProps": {
                "type": "unknown",
                "attribute": "icon-props",
                "mutable": false,
                "complexType": {
                    "original": "{\n    size?: number;\n    color?: string;\n    variant?: 'stroke' | 'solid' | 'duotone' | 'twotone' | 'bulk';\n    type?: 'rounded' | 'sharp' | 'standard';\n  }",
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
                "defaultValue": "{\n    type: 'rounded',\n    variant: 'stroke',\n  }"
            },
            "active": {
                "type": "boolean",
                "attribute": "active",
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
            },
            "subMenuBackground": {
                "type": "string",
                "attribute": "sub-menu-background",
                "mutable": false,
                "complexType": {
                    "original": "'brand' | 'white'",
                    "resolved": "\"brand\" | \"white\"",
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
                "defaultValue": "'white'"
            },
            "subMenuFullWidth": {
                "type": "boolean",
                "attribute": "sub-menu-full-width",
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
            }
        };
    }
    static get states() {
        return {
            "openSubMenu": {}
        };
    }
    static get events() {
        return [{
                "method": "linkClicked",
                "name": "linkClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
