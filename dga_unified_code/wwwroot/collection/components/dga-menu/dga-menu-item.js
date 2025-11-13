import { h } from "@stencil/core";
export class DgaMenuItem {
    constructor() {
        this.disabled = false;
        this.hasTrailElement = false;
        this.hasLeadIcon = false;
        this.pressed = false;
    }
    handleClick(event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
    }
    render() {
        return (h("li", { key: 'b8728de347434490ee11441307891c7906fa81ae', class: `menu-item ${this.disabled ? 'disabled' : ''} ${this.pressed ? "pressed" : ""}`, onMouseDown: () => this.pressed = true, onMouseUp: () => this.pressed = false, tabindex: "0", onClick: this.handleClick }, this.hasLeadIcon && h("span", { key: '8c86c04a13cf4658ee6787a0199d0ae53339c8b6', class: "menu-item__icon" }, h("slot", { key: '08726799947e10a9e1ee56181ab42bf92947d50b', name: "lead-icon" })), h("span", { key: '5258bb795bb87cd32dca11f630019d06f2800d47', class: "menu-item__label" }, this.label), this.hasTrailElement && h("div", { key: '2062bc503bf3b70d9567f50a49fe541136d99ad5', class: "menu-item__trail-element" }, h("slot", { key: '4dde89eeeff87f8b417914e46bac5e543d28e462', name: "trail-element" }))));
    }
    static get is() { return "dga-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-menu-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-menu-item.css"]
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
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
            "hasTrailElement": {
                "type": "boolean",
                "attribute": "has-trail-element",
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
            "hasLeadIcon": {
                "type": "boolean",
                "attribute": "has-lead-icon",
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
            }
        };
    }
    static get states() {
        return {
            "pressed": {}
        };
    }
    static get events() {
        return [{
                "method": "onClick",
                "name": "onClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
}
