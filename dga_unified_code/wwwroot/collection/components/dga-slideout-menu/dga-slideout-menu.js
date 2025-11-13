import { h } from "@stencil/core";
export class DgaSlideoutMenu {
    constructor() {
        this.backgroundColor = 'gray';
        this.anchor = 'right';
        this.open = false;
        this.scrollbar = true;
    }
    // componentDidRender() {
    //     if (this.el.children.length > 0) {
    //         this.el.children
    //         .namedItem('DgaSlideoutMenuHeader')
    //         .setAttribute('slot', 'sideout-menu-header');
    //       this.el.children
    //         .namedItem('DgaSideoutMenuItems')
    //         .setAttribute('slot', 'sideout-menu-items');
    //       this.el.children
    //         .namedItem('DgaSideoutMenuActions')
    //         .setAttribute('slot', 'sideout-menu-actions');
    //     }
    //   }
    componentWillLoad() {
        this.el.childNodes.forEach(item => {
            const el = item;
            //   if(el.tagName === 'DGA-SECOND-NAV-HEADER-CONTENT' && this.hideContent === true) {
            //     el.style.display = 'none';
            //   }
            //   if(el.tagName === 'DGA-SECOND-NAV-HEADER-ACTIONS' && this.hideActions === true) {
            //     el.style.display = 'none';
            //   }
            if (el.tagName === 'DGA-SLIDEOUT-MENU-HEADER' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'slideout-menu-header');
                // Pass onClose to header component
                el.setAttribute('on-close', 'true');
                el.addEventListener('closeClick', () => {
                    if (this.onClose) {
                        this.onClose();
                    }
                });
            }
            if (el.tagName === 'DGA-SLIDEOUT-MENU-ITEMS' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'slideout-menu-items');
            }
            if (el.tagName === 'DGA-SLIDEOUT-MENU-ACTIONS' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'slideout-menu-actions');
            }
        });
    }
    disconnectedCallback() {
        // Clean up listeners
        this.el.childNodes.forEach(item => {
            const el = item;
            if (el.tagName === 'DGA-SLIDEOUT-MENU-HEADER') {
                el.removeEventListener('closeClick', this.onClose);
            }
        });
    }
    render() {
        return (h("div", { key: 'dd39fff5c0e09c38e9ae4b34ba35709b05731f5b', class: `dga-slideout-menu dga-slideout-menu--${this.anchor} dga-slideout-menu--${this.backgroundColor} ${this.open ? "active" : ""}` }, h("slot", { key: 'fb1a1856adab623fe2ef024b45db426035a5c3a7', name: "slideout-menu-header" }), h("div", { key: '4148884c7ed4e611125ad46c7de1ce32311b61ec', class: "dga-slideout-menu__body" }, h("div", { key: '215d236faa5f56032ed257a3c69782d4ea65a3f4', class: {
                'dga-slideout-menu__items': true,
                'dga-slideout-menu__items--hide-scrollbar': !this.scrollbar,
            } }, h("slot", { key: '7f5170f556b83d53439ecac91224cd24a29a4a19', name: "slideout-menu-items" })), h("dga-divider", { key: 'add60ff5a31c3512a491b064ef92146bd9a87907' }), h("slot", { key: '7e2d3ae835519401c1a180e511d72f70832e02df', name: "slideout-menu-actions" }))));
    }
    static get is() { return "dga-slideout-menu"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-slideout-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-slideout-menu.css"]
        };
    }
    static get properties() {
        return {
            "backgroundColor": {
                "type": "string",
                "attribute": "background-color",
                "mutable": false,
                "complexType": {
                    "original": "'gray' | 'white'",
                    "resolved": "\"gray\" | \"white\"",
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
                "defaultValue": "'gray'"
            },
            "anchor": {
                "type": "string",
                "attribute": "anchor",
                "mutable": false,
                "complexType": {
                    "original": "'left'|'right'",
                    "resolved": "\"left\" | \"right\"",
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
                "defaultValue": "'right'"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
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
                "reflect": true,
                "defaultValue": "false"
            },
            "scrollbar": {
                "type": "boolean",
                "attribute": "scrollbar",
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
                "defaultValue": "true"
            },
            "onClose": {
                "type": "unknown",
                "attribute": "on-close",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
