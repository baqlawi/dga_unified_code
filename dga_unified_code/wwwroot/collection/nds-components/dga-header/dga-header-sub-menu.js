import { h } from "@stencil/core";
export class DgaHeaderSubMenu {
    constructor() {
        this.active = false;
        this.subMenuFullWidth = false;
        this.background = 'white';
    }
    onActiveChange() {
        if (this.active && this.submenu) {
            this.submenu.style.display = 'block';
            // this.submenu.style.maxHeight = `${this.submenu.scrollHeight}px`;
        }
        else if (this.submenu) {
            this.submenu.style.maxHeight = '';
        }
    }
    componentDidLoad() {
        this.submenu = this.el.shadowRoot.querySelector('.header__sub-menu');
        this.onActiveChange(); // Ensure styles are set on initial load
    }
    render() {
        const fullWidthClass = this.subMenuFullWidth ? 'header__sub-menu--full' : '';
        return (h("div", { key: 'a7b082ed342d748a1f939d36c8f458469883ba06', class: `header__sub-menu header__sub-menu--bg-${this.background} ${fullWidthClass}`, ref: el => (this.submenu = el) }, h("div", { key: '80fbec50d29a67619cc1d421972163914896425f', class: "sub-menu__container" }, h("slot", { key: '284a5737648643a3be7ea2a6b31367576516f239' }))));
    }
    static get is() { return "dga-header-sub-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-sub-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-sub-menu.css"]
        };
    }
    static get properties() {
        return {
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
            "background": {
                "type": "string",
                "attribute": "background",
                "mutable": false,
                "complexType": {
                    "original": "'brand' | 'white'",
                    "resolved": "\"brand\" | \"white\"",
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
                "defaultValue": "'white'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "active",
                "methodName": "onActiveChange"
            }];
    }
}
