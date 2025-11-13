import { h, Fragment, Host } from "@stencil/core";
export class NdsButton {
    constructor() {
        this.variant = 'primary-brand';
        this.size = 'md';
        this.label = '';
        this.type = 'button';
        this.inverted = false;
        this.destructive = false;
        this.selected = false;
    }
    handleClick(event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
    }
    // componentWillLoad() {
    //   this.el.childNodes.forEach(item => {
    //     const el = item as HTMLElement;
    //     if (el.tagName === 'DGA-BUTTON-LEADING-ICON' && el.attributes.getNamedItem('slot') === null) {
    //       el.setAttribute('slot', 'button-leading-icon');
    //     }
    //   });
    // }
    render() {
        const classList = [
            'dga-btn',
            `dga-btn--${this.size}`,
            `dga-btn--${this.destructive ? 'des-' : ''}${this.variant}`,
            this.destructive ? `$dga-btn--${this.destructive}` : '',
            this.inverted ? `dga-btn--${this.variant}--on-color` : '',
            this.iconOnly ? 'dga-btn--icon' : '',
            this.selected ? `dga-btn--${this.variant}--selected` : '',
        ]
            .filter(Boolean)
            .join(' ');
        return (h(Host, { key: 'bf012acb6c6fd700122192bce453169abd2d6ee5' }, h("button", { key: 'aa5ce4bc67800db0e7fa7bea02daf671e2b9b4a6', type: this.type, class: classList, disabled: this.disabled, "aria-label": this.iconOnly && !this.label ? 'Button with icon' : this.label, role: "button", onClick: (event) => this.handleClick(event) }, h("slot", { key: 'cbf4ab0efd45ad1c053861471306fea84b6519d0', name: "leading-icon" }, this.leadingIcon && (h("span", { key: 'cc2631c8d741a97e3123d6db0fefd61cb46610d1', class: "dga-btn-icon", "aria-hidden": "true" }, h("dga-icon-v2", Object.assign({ key: 'f8c574b15428984c15996a2b75808caf13f7f525', name: this.leadingIcon }, this.leadingIconProps))))), !this.iconOnly && this.label && h(Fragment, { key: '2b44335b825bb0540a6ff14f287564d645ff9037' }, this.label), !this.iconOnly && (h("slot", { key: 'a4da46b6c6e7c2bfade5d603c9e67297ecbf4513', name: 'trailing-icon' }, this.trailingIcon && (h("span", { key: '875c8ea1022e83437ef2d1bb36a1e7104bbc951a', class: "dga-btn-icon", "aria-hidden": "true" }, h("dga-icon-v2", Object.assign({ key: '29ecb4ac491cce77c3d365f66ab6b2e47dd96a5e', name: this.trailingIcon }, this.trailingIconProps)))))))));
    }
    static get is() { return "nds-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["nds-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["nds-button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "ButtonStyle",
                    "resolved": "\"primary-brand\" | \"primary-neutral\" | \"secondary-outline\" | \"secondary-solid\" | \"subtle\" | \"transparent\"",
                    "references": {
                        "ButtonStyle": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/nds-components/nds-button/nds-button.tsx",
                            "id": "src/nds-components/nds-button/nds-button.tsx::ButtonStyle"
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
                "reflect": false,
                "defaultValue": "'primary-brand'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ButtonSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "ButtonSize": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/nds-components/nds-button/nds-button.tsx",
                            "id": "src/nds-components/nds-button/nds-button.tsx::ButtonSize"
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
                "reflect": false,
                "defaultValue": "'md'"
            },
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
                "reflect": false,
                "defaultValue": "''"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "original": "Omit<Icon , 'name'>",
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
                    "original": "Omit<Icon , 'name'>",
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
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'button' | 'submit' | 'reset'",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
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
                "defaultValue": "'button'"
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
            "destructive": {
                "type": "boolean",
                "attribute": "destructive",
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
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
    static get elementRef() { return "el"; }
}
