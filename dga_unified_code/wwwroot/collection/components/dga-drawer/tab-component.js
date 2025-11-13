import { h, Fragment } from "@stencil/core";
export class TabComponent {
    constructor() {
        this.isExpanded = false;
    }
    handleExpanded(expanded) {
        this.isExpanded = expanded;
        if (expanded) {
            this.submenuElement.style.maxHeight = 'fit-content';
        }
        else {
            this.submenuElement.style.maxHeight = '';
        }
    }
    render() {
        return (h(Fragment, { key: 'a61200058c5c8a22f322dde4edfcc807cb8f647e' }, h("tab-link", { key: '07f4c84a4c5b88d61366f74dc9da8b5dd72f35f2', text: this.route.name, type: this.route.children && this.route.children.length > 0 ? 'parent' : 'child', icon: this.route.icon, link: this.route.path, onExpand: this.handleExpanded.bind(this), disabled: this.route.disabled }), this.route.children && this.route.children.length > 0 && (h("ul", { key: '44bb0dc3f734ebf42269a8c153864ed719fd6b41', class: "sidepanel__submenu-list", ref: el => (this.submenuElement = el) }, this.route.children.map((childRoute, index) => (h("submenu-component", { key: index, route: this.route, childRoute: childRoute, onChildExpanded: expanded => {
                if (expanded) {
                    this.submenuElement.style.maxHeight = 'fit-content';
                }
            } })))))));
    }
    static get is() { return "tab-component"; }
    static get properties() {
        return {
            "route": {
                "type": "unknown",
                "attribute": "route",
                "mutable": false,
                "complexType": {
                    "original": "IRoute",
                    "resolved": "IRoute",
                    "references": {
                        "IRoute": {
                            "location": "import",
                            "path": "./dga-drawer",
                            "id": "src/components/dga-drawer/dga-drawer.tsx::IRoute"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "isExpanded": {}
        };
    }
}
