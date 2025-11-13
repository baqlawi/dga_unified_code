import { Fragment, h } from "@stencil/core";
export class DgaMenu {
    constructor() {
        this.anchorEl = null;
        this.open = false;
        this.onClose = () => { };
        // Method to detect outside click
        this.handleClickOutside = (event) => {
            if (this.anchorEl && !this.anchorEl.contains(event.target)) {
                this.onClose();
            }
        };
    }
    componentDidLoad() {
        // Add event listener to handle clicks outside the menu
        document.addEventListener('click', this.handleClickOutside);
    }
    disconnectedCallback() {
        // Cleanup event listener when the component is destroyed
        document.removeEventListener('click', this.handleClickOutside);
    }
    getMenuStyle() {
        var _a;
        const rect = (_a = this.anchorEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        return {
            position: 'absolute',
            top: `${(rect === null || rect === void 0 ? void 0 : rect.bottom) + window.scrollY}px`,
            left: `${(rect === null || rect === void 0 ? void 0 : rect.left) + window.scrollX}px`,
            zIndex: '1000',
        };
    }
    render() {
        return (h(Fragment, { key: '74fce788d8c99acf04372627cb9ad9b239f7d569' }, this.open && this.anchorEl && (h("ul", { key: 'a61d897a4ff06d2880d97e54e0e5a70ec4ef1e73', class: "menu", style: this.getMenuStyle() }, h("slot", { key: '80ae991684492fc900b9ebce7b33c58cc4a76c12' })))));
    }
    static get is() { return "dga-menu"; }
    static get properties() {
        return {
            "anchorEl": {
                "type": "unknown",
                "attribute": "anchor-el",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement | null",
                    "resolved": "HTMLElement",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
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
                "setter": false,
                "defaultValue": "null"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "() => {}"
            }
        };
    }
}
