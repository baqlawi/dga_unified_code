import { h } from "@stencil/core";
export class DgaNavHeaderSubMenu {
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
        return (h("div", { key: 'cd7f3e96b3fa54109a924451b83436c6b4821a07', class: `header__sub-menu header__sub-menu--bg-${this.background} ${fullWidthClass}`, ref: el => (this.submenu = el) }, h("div", { key: '6c6ab6439c76daf6fc0bbede98982571460857eb', class: "sub-menu__container" }, h("slot", { key: 'e97d54c4ad83345027d3522625a18d77219ece12' }))));
    }
    static get is() { return "dga-nav-header-sub-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-nav-header-sub-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-nav-header-sub-menu.css"]
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
