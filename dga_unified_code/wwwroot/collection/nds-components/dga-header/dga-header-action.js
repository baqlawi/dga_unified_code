import { Host } from "@stencil/core";
import { h } from "@stencil/core";
export class DgaHeaderAction {
    constructor() {
        this.iconPosition = 'inline';
        this.iconProps = {
            type: 'rounded',
            variant: 'stroke',
        };
        this.active = false;
        this.extraClasses = '';
        this.openSubMenu = false;
    }
    handleClick(event) {
        event.preventDefault();
        if (this.onClick) {
            this.onClick();
        }
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
        return (h(Host, { key: '2a993ea45446472114c7e1a27deb377204fb2943' }, h("li", { key: '15e5be105e6e8c903c0b879da70ff7e38b5d0502', onMouseEnter: () => {
                this.openSubMenu = true;
                //   this.active = true;
            }, onMouseLeave: () => {
                this.openSubMenu = false;
                //   this.active = false;
            } }, h("a", { key: '723f498e3d9ba1e468a70a7ef1b781ff350c541a', href: "#", class: `header-menu__item ${this.active ? 'header-menu__item--active' : ''} 
            
            ${this.iconPosition === 'inline' ? 'header-menu__item--inline' : 'header-menu__item--top'}
            
            ${this.extraClasses}`, onClick: this.handleClick.bind(this) }, h("span", { key: '49b447f396ac2e1b845c67ee156fe5058f67eea4', class: "header-menu__item-arrow" }, h("dga-icon-v2", Object.assign({ key: '0ba859bd7efe385a974a70a831dd10c11e006819', name: this.icon }, this.iconProps))), h("span", { key: '1df3e742d1a5a54991fda3fcab8eca5ec4e340db', class: "header-menu__item-label" }, this.label)), this.openSubMenu && h("slot", { key: 'a361fd10c97dda04bba6e21a4fa85aa42f7aeb85', name: "dga-header-sub-menu" }))));
    }
    static get is() { return "dga-header-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-action.css"]
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
                "reflect": false
            },
            "iconPosition": {
                "type": "string",
                "attribute": "icon-position",
                "mutable": false,
                "complexType": {
                    "original": "'inline' | 'top'",
                    "resolved": "\"inline\" | \"top\"",
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
                "defaultValue": "'inline'"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "onClick": {
                "type": "unknown",
                "attribute": "on-click",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "extraClasses": {
                "type": "string",
                "attribute": "extra-classes",
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
    static get states() {
        return {
            "openSubMenu": {}
        };
    }
    static get elementRef() { return "el"; }
}
