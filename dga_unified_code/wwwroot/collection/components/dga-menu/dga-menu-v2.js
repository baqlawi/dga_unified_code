import { Fragment, h } from "@stencil/core";
export class DgaMenuV2 {
    constructor() {
        this.anchorEl = null;
        this.open = false;
        this.onClose = () => { };
        this.anchorOrigin = {
            vertical: 'bottom',
            horizontal: 'left',
        };
        this.transformOrigin = { vertical: 0, horizontal: 0 };
        this.menuStyle = {};
        this.handleClickOutside = (event) => {
            if (this.anchorEl &&
                !this.anchorEl.contains(event.target) &&
                !event.composedPath().includes(this.anchorEl)) {
                this.onClose();
            }
        };
    }
    handleOpenChange(newValue) {
        if (newValue) {
            this.calculateMenuStyle();
            document.addEventListener('click', this.handleClickOutside);
        }
        else {
            document.removeEventListener('click', this.handleClickOutside);
        }
    }
    calculateMenuStyle() {
        if (!this.anchorEl)
            return;
        const rect = this.anchorEl.getBoundingClientRect();
        // Calculate position using anchorOrigin and transformOrigin
        const top = this.anchorOrigin.vertical === 'bottom' ? rect.bottom : rect.top;
        const left = this.anchorOrigin.horizontal === 'right' ? rect.right : rect.left;
        this.menuStyle = {
            // position: 'absolute',
            position: 'fixed',
            top: `${top + this.transformOrigin.vertical + window.scrollY}px`,
            left: `${left + this.transformOrigin.horizontal + window.scrollX}px`,
            zIndex: '1000',
        };
    }
    render() {
        return (h(Fragment, { key: '24875186aa45511e385e77473d8647388f9ac3f8' }, this.open && (h("ul", { key: '58005bfe634ece0f5f31637aca4b62af2dac62f7', class: "menu", style: this.menuStyle, role: "menu", "aria-hidden": !this.open }, h("slot", { key: '87651aba7b68328649850f44c47cacef915dab18' })))));
    }
    static get is() { return "dga-menu-v2"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-menu.css"]
        };
    }
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
            },
            "anchorOrigin": {
                "type": "unknown",
                "attribute": "anchor-origin",
                "mutable": false,
                "complexType": {
                    "original": "{ vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' }",
                    "resolved": "{ vertical: \"top\" | \"bottom\"; horizontal: \"left\" | \"right\"; }",
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
                "defaultValue": "{\n    vertical: 'bottom',\n    horizontal: 'left',\n  }"
            },
            "transformOrigin": {
                "type": "unknown",
                "attribute": "transform-origin",
                "mutable": false,
                "complexType": {
                    "original": "{ vertical: number; horizontal: number }",
                    "resolved": "{ vertical: number; horizontal: number; }",
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
                "defaultValue": "{ vertical: 0, horizontal: 0 }"
            }
        };
    }
    static get states() {
        return {
            "menuStyle": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
