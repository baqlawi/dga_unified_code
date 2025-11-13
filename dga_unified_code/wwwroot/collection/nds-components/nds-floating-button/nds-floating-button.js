import { h } from "@stencil/core";
export class NdsFloatingButton {
    constructor() {
        this.label = 'Button';
        this.RTL = false;
        this.variant = 'primary-brand';
        this.size = 'sm';
        this.inverted = false;
        this.disabled = false;
        this.iconOnly = false;
    }
    handleClick(event) {
        if (!this.disabled) {
            this.buttonClick.emit(event);
        }
    }
    render() {
        return (h("button", { key: 'a77e04d557ea0fb2e5978f03ffbd0c8ff856c3f3', dir: this.RTL ? 'rtl' : 'ltr', disabled: this.disabled, class: `
            NdsFloatingButton-root
            ${this.inverted ? `NdsFloatingButton-${this.variant}--inverted` : `NdsFloatingButton-${this.variant}`}
            NdsFloatingButton-${this.size} `, onClick: event => this.handleClick(event) }, h("slot", { key: '7407ed895efc267888625b5cfd2865d38cfac6ea', name: "icon" }, this.icon && h("dga-icon-v2", Object.assign({ key: '8da7c8766ece098127fce0f7be9232672e705efe', name: this.icon }, this.iconProps))), !this.iconOnly && this.label && h("span", { key: '3712ede073ffcf4eea2994eb94cefab44a79d70f', class: "NdsFloatingButton-label" }, this.label)));
    }
    static get is() { return "nds-floating-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["nds-floating-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["nds-floating-button.css"]
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Button'"
            },
            "RTL": {
                "type": "boolean",
                "attribute": "r-t-l",
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
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary-brand' | 'primary-neutral' | 'secondary-solid'",
                    "resolved": "\"primary-brand\" | \"primary-neutral\" | \"secondary-solid\"",
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
                "defaultValue": "'primary-brand'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'lg'",
                    "resolved": "\"lg\" | \"sm\"",
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
                "defaultValue": "'sm'"
            },
            "inverted": {
                "type": "boolean",
                "attribute": "inverted",
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
            "iconOnly": {
                "type": "boolean",
                "attribute": "icon-only",
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
                "optional": false,
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
                    "original": "Omit<Icon, 'name'>",
                    "resolved": "{ color?: string; type?: \"rounded\" | \"sharp\" | \"standard\"; size?: number; variant?: \"stroke\" | \"solid\" | \"duotone\" | \"twotone\" | \"bulk\"; }",
                    "references": {
                        "Omit": {
                            "location": "global",
                            "id": "global::Omit"
                        },
                        "Icon": {
                            "location": "import",
                            "path": "../../components",
                            "id": "src/components.d.ts::Icon"
                        }
                    }
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
    static get events() {
        return [{
                "method": "buttonClick",
                "name": "buttonClick",
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
