import { h, Host } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
export class DgaSwitch {
    constructor() {
        this.color = 'brand';
        this.checked = false;
        this.disabled = false;
        this.id = this.generateGuid();
        this.name = this.generateGuid();
        this.value = true;
        this.isChecked = this.checked;
        // Handle active class on mouse down
        this.handleActive = () => {
            if (!this.disabled) {
                this.labelRef.classList.add('active');
            }
        };
        // Toggle switch on change event
        this.handleRemoveActive = () => {
            this.labelRef.classList.remove('active');
            this.isChecked = !this.isChecked;
        };
        // Handle focus
        this.handleFocus = () => {
            this.labelRef.classList.add('focus');
        };
        // Handle focus out
        this.handleFocusOut = () => {
            this.labelRef.classList.remove('focus');
        };
        // Handle Escape key event to remove focus
        this.handleEscape = (event) => {
            if (event.key === 'Escape') {
                this.handleFocusOut();
                const inputElement = this.el.querySelector('input');
                inputElement === null || inputElement === void 0 ? void 0 : inputElement.blur();
            }
        };
    }
    // Helper to generate a unique ID similar to React's `guid()`
    generateGuid() {
        return Math.random().toString(36).substr(2, 9);
    }
    componentDidLoad() {
        window.addEventListener('keydown', this.handleEscape);
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleEscape);
        this.sxHandler.cleanup();
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    componentWillLoad() {
        this.sxHandler = new SxHandler(this.el, 'dga-switch');
    }
    render() {
        return (h(Host, { key: 'e2b7394c9167e052150e818ded9eae793646af01', id: this.sxHandler.getId(), style: this.sxHandler.getStyles() }, h("label", { key: '756f4dd89aa56906a02f06c8df98fa5d5ab4f44f', ref: el => (this.labelRef = el), class: `switch ${this.color ? `switch--${this.color}` : ''}`, onMouseDown: this.handleActive, onChange: this.handleRemoveActive }, h("div", { key: '335a255e57a39d2a6fcb48987efd4788d0100f8f', class: "switch-main" }, h("div", { key: '8cf0b532877b56faf3acd3c0e12628114224b6af', class: `switch-main__content ${this.disabled ? 'disabled' : ''}` }, h("div", { key: '5684fb76b0975b13a81e39b75bf1f35fe8c745b2', class: "switch-wrapper" }, h("input", { key: 'e663ac56e324490420e53bc38df17e801ed6ec32', type: "checkbox", name: this.name, value: this.value, id: this.id, disabled: this.disabled, onFocus: this.handleFocus, onBlur: this.handleFocusOut, onChange: this.onChange, onInput: this.onInput, checked: this.isChecked }), h("span", { key: 'eb8107f865090f43e1697698efab042ac5e1efdf', class: `slider round ${this.isChecked ? 'slider--active' : 'slider--inactive'}` })), !this.hasHelperText && !this.helperText ? (this.label && h("span", { class: "switch__label" }, this.label)) : (h("div", { class: "dga-flex-column" }, h("span", { class: "switch__label" }, this.label), h("span", { class: "switch__helper-text" }, this.helperText)))), this.alertMessage && (h("div", { key: '103c11902432cc0f03c3fca566d86e854c2c9d7f', class: "switch__warning" }, h("span", { key: '76c161a9aa81b2d6128caf13d15dd968848e1fff', class: "switch__warning-icon" }, h("svg", { key: '724e3d230bae9fce7277632ac851561c117b50ee', width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, h("path", { key: 'f593f2e1d5e602afc823ff82e260c0339e75663f', d: "M8 1.33333C4.324 1.33333 1.33333 4.324 1.33333 8C1.33333 11.676 4.324 14.6667 8 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8C14.6667 4.324 11.676 1.33333 8 1.33333ZM8 13.3333C5.05467 13.3333 2.66667 10.9453 2.66667 8C2.66667 5.05467 5.05467 2.66667 8 2.66667C10.9453 2.66667 13.3333 5.05467 13.3333 8C13.3333 10.9453 10.9453 13.3333 8 13.3333ZM7.33333 4H8.66667V8H7.33333V4ZM7.33333 9.33333H8.66667V10.6667H7.33333V9.33333Z", fill: "currentColor" }))), h("span", { key: '199ed2eed8dc9122a2b372e2a7b9613940f23968', class: "switch__warning-text" }, this.alertText)))))));
    }
    static get is() { return "dga-switch"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-switch.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-switch.css"]
        };
    }
    static get properties() {
        return {
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string | undefined",
                    "resolved": "SxProps | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-handler",
                            "id": "src/utils/sx-handler.ts::SxProps"
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
            },
            "color": {
                "type": "string",
                "attribute": "color",
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
                "defaultValue": "'brand'"
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
                "reflect": false
            },
            "checked": {
                "type": "boolean",
                "attribute": "checked",
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
                "reflect": false,
                "defaultValue": "false"
            },
            "hasHelperText": {
                "type": "boolean",
                "attribute": "has-helper-text",
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
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
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
            "alertMessage": {
                "type": "boolean",
                "attribute": "alert-message",
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
            "alertText": {
                "type": "string",
                "attribute": "alert-text",
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
            "id": {
                "type": "string",
                "attribute": "id",
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
                "defaultValue": "this.generateGuid()"
            },
            "name": {
                "type": "string",
                "attribute": "name",
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
                "defaultValue": "this.generateGuid()"
            },
            "value": {
                "type": "any",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "boolean | any",
                    "resolved": "any",
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
                "defaultValue": "true"
            },
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(event?: any) => void",
                    "resolved": "(event?: any) => void",
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
            },
            "onInput": {
                "type": "unknown",
                "attribute": "on-input",
                "mutable": false,
                "complexType": {
                    "original": "(event?: any) => void",
                    "resolved": "(event?: any) => void",
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
    static get states() {
        return {
            "isChecked": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "sxChanged"
            }];
    }
}
