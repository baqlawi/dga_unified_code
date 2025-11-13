import { Host, h } from "@stencil/core";
export class DgaSecondNavHeader {
    constructor() {
        this.variant = 'primary';
    }
    componentWillLoad() {
        this.el.childNodes.forEach((item) => {
            const el = item;
            if (el.tagName === 'DGA-SECOND-NAV-HEADER-CONTENT' && this.hideContent === true) {
                el.style.display = 'none';
            }
            if (el.tagName === 'DGA-SECOND-NAV-HEADER-ACTIONS' && this.hideActions === true) {
                el.style.display = 'none';
            }
            if (el.tagName === 'DGA-SECOND-NAV-HEADER-CONTENT' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'content');
            }
            if (el.tagName === 'DGA-SECOND-NAV-HEADER-ACTIONS' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'actions');
            }
        });
    }
    render() {
        return (h(Host, { key: 'c8c4a2562f3e31be50c95aeb23019cd077ded13c' }, h("div", { key: 'f555756fd57ded513442f87d4db64dde78d4acc6', class: `wrapper ${this.variant} `, "aria-label": 'a secondary navigation navbar' }, h("div", { key: 'e80e51a8fb01393d1c2f4ca3200bedb86ea32cbb', class: `container ${this.hideDivider ? '' : 'border'}` }, h("div", { key: 'a39f675edb98a3525d508a1133cbb8e13bf811a0', class: `content` }, h("slot", { key: '97707bcb0f1565d21f766d96491975cd54f04fb2', name: "content" })), h("div", { key: '0f288bfe53936b74514dd46709e2d70580bf502a', class: `actions` }, h("slot", { key: '2c7bd291ec85e0762acf63865729c31bc8515bec', name: "actions" }))))));
    }
    static get is() { return "dga-second-nav-header"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'gray'",
                    "resolved": "\"gray\" | \"primary\"",
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
                "defaultValue": "'primary'"
            },
            "hideDivider": {
                "type": "boolean",
                "attribute": "hide-divider",
                "mutable": true,
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
                "reflect": false
            },
            "hideActions": {
                "type": "boolean",
                "attribute": "hide-actions",
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
                "reflect": false
            },
            "hideContent": {
                "type": "boolean",
                "attribute": "hide-content",
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
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
