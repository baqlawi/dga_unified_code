import { Host } from "@stencil/core";
import { h } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
export class NdsChip {
    constructor() {
        this.variant = 'success';
        this.size = 'md';
        this.selected = false;
        this.onChange = () => { };
        // State to manage internal pressed state and selection
        this.pressed = false;
        this.isSelectedState = this.selected;
        // Generate a unique ID if not provided
        this.componentId = `dga-button-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    handleSxChange() {
        this.processStyling();
    }
    componentWillLoad() {
        // Initialize style manager with element reference
        this.sxStyleManager = new SxStyleManager(this.componentId, this.el);
    }
    componentDidLoad() {
        // Process styling after the component is fully loaded and shadow DOM is ready
        this.processStyling();
    }
    componentDidUpdate() {
        // Re-process styling after updates
        this.processStyling();
    }
    processStyling() {
        if (!this.sx)
            return;
        // Handle both string and object formats
        const sxValue = typeof this.sx === 'string' ? JSON.parse(this.sx) : this.sx;
        this.rootStyles = this.sxStyleManager.processSxProp(sxValue);
    }
    disconnectedCallback() {
        var _a;
        // Clean up styles when component is removed
        (_a = this.sxStyleManager) === null || _a === void 0 ? void 0 : _a.cleanup();
    }
    render() {
        return (h(Host, { key: '4349d0355e1fb17102930643ea207e1a7d276370', id: this.componentId, style: this.rootStyles }, h("span", { key: 'aa89256b05d61312b7c7def658a9ef011988993b', tabindex: "0", class: `chip chip--${this.variant} chip--${this.size} ${this.rounded ? 'chip--rounded' : ''} ${this.disabled ? 'disabled' : ''} ${this.pressed ? 'pressed' : ''} ${this.selected ? 'selected' : ''}`, onMouseDown: () => (this.pressed = true), onMouseUp: () => (this.pressed = false), "aria-disabled": this.disabled, onClick: () => {
                if (this.selected) {
                    this.isSelectedState = false;
                }
                else {
                    this.isSelectedState = true;
                }
                this.onChange(this.isSelectedState);
            } }, h("slot", { key: '069c80f47b901ef14063b1af71e9c4d91d271850', name: "trailing-icon" }, this.leadingIcon && (h("span", { key: 'e1cd66a532724bd26ae74e6f63377f88f3a288bb', class: "chip-icon" }, h("dga-icon-v2", Object.assign({ key: 'ca90e9d5279d6d15c64d48d39d35bf10d19bc3f2', name: this.leadingIcon }, this.leadingIconProps))))), this.label, h("slot", { key: '2c5921d9358595db6839e616785d186d62d8f82b', name: "trailing-icon" }, this.trailingIcon && (h("span", { key: '56dae547c396261aa7960c3289d5cd29645890ec', class: "chip-icon" }, h("dga-icon-v2", Object.assign({ key: 'f300fbae5585dbf332c781d916f60a14200dfa73', name: this.trailingIcon }, this.trailingIconProps))))))));
    }
    static get is() { return "nds-chip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["nds-chip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["nds-chip.css"]
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
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'success' | 'neutral' | 'on-color'",
                    "resolved": "\"neutral\" | \"on-color\" | \"success\"",
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
                "defaultValue": "'success'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'lg' | 'md' | 'sm'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
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
                "defaultValue": "'md'"
            },
            "leadingIcon": {
                "type": "string",
                "attribute": "leading-icon",
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
            "leadingIconProps": {
                "type": "unknown",
                "attribute": "leading-icon-props",
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
            },
            "trailingIcon": {
                "type": "string",
                "attribute": "trailing-icon",
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
            "trailingIconProps": {
                "type": "unknown",
                "attribute": "trailing-icon-props",
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
            },
            "rounded": {
                "type": "boolean",
                "attribute": "rounded",
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
                "reflect": false
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(selected: boolean) => void",
                    "resolved": "(selected: boolean) => void",
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
                "defaultValue": "() => {}"
            },
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "CSSProperties & NestedSelector | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-system",
                            "id": "src/utils/sx-system.ts::SxProps"
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
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "pressed": {},
            "isSelectedState": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "handleSxChange"
            }];
    }
}
