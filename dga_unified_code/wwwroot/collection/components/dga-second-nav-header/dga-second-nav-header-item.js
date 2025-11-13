import { Host, h } from "@stencil/core";
export class DgaSecondNavHeaderItem {
    connectedCallback() {
        this.el.childNodes.forEach((item) => {
            const el = item;
            if (el.tagName === 'DGA-ICON'.toLocaleUpperCase() && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'icon');
            }
        });
    }
    render() {
        return (h(Host, { key: '0a64c4f13c7fb79f1385cf1b561f11a2a59b3dc1' }, h("slot", { key: 'db012d987bfdebfc7d3f5fc233a341d58b5c1f65', name: 'icon' }), h("slot", { key: '9d18466b2e2018c8bbe57a9c5323383e2b47fa79', name: 'label' }, this.label)));
    }
    static get is() { return "dga-second-nav-header-item"; }
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
                "required": true,
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
