// import { Component, h, Prop, Element } from '@stencil/core';
// import { guid } from '../../utils';
// @Component({
//   tag: 'dga-radio-button',
//   styleUrl: 'dga-radio-button.scss',
//   // shadow: true
// })
// export class RadioButton {
//   @Prop() color: 'neutral' | 'brand' = 'brand';
//   @Prop() label?: string;
//   @Prop() hasHelperText?: boolean = false;
//   @Prop() helperText?: string;
//   @Prop() alertMessage?: boolean;
//   @Prop() alertText?: string;
//   @Prop() disabled: boolean = false;
//   @Prop() id: string = guid();
//   @Prop({ reflect: true }) name: string;
//   @Prop() value: string = '';
//   @Prop() checked?: boolean = false;
//   @Prop() onChange?: (event: any) => void;
//   @Prop() onInput?: (event: any) => void;
//   @Element() el: HTMLElement;
//   radioLabelRef: HTMLLabelElement;
//   handleActive = () => {
//     this.radioLabelRef?.classList.add('active');
//   };
//   handleRemoveActive = () => {
//     this.radioLabelRef?.classList.remove('active');
//   };
//   handleFocus = () => {
//     this.radioLabelRef?.classList.add('focus');
//   };
//   handleFocusOut = () => {
//     this.radioLabelRef?.classList.remove('focus');
//   };
//   handleEscape = (event: KeyboardEvent) => {
//     if (event.key === 'Escape') {
//       this.radioLabelRef?.querySelector('input')?.blur();
//       this.handleFocusOut();
//     }
//   };
//   componentDidLoad() {
//     window.addEventListener('keydown', this.handleEscape);
//   }
//   disconnectedCallback() {
//     window.removeEventListener('keydown', this.handleEscape);
//   }
//   render() {
//     return (
//       <label
//         ref={el => (this.radioLabelRef = el)}
//         class={`radio ${this.color ? 'radio--' + this.color : ''}`}
//         onMouseDown={this.handleActive}
//         onMouseUp={this.handleRemoveActive}
//         onMouseOut={this.handleRemoveActive}
//         onChange={this.handleRemoveActive}
//       >
//         <div class="radio-main">
//           <div class="radio-main__content">
//             <input
//               type="radio"
//               name={this.name}
//               value={this.value}
//               // id={this.id}
//               onChange={this.onChange}
//               onInput={this.onInput}
//               disabled={this.disabled}
//               // onFocus={this.handleFocus}
//               // onBlur={this.handleFocusOut}
//               checked={this.checked}
//             />
//             <div class="radio-container"></div>
//             {(this.label || this.hasHelperText) && <div class="dga-flex-column">
//               {this.label && <span class="radio__label">{this.label}</span>}
//               {this.hasHelperText && this.helperText && <span class="radio__helper-text">{this.helperText}</span>}
//             </div>}
//           </div>
//           {this.alertMessage && this.alertText && (
//             <div class="radio__warning">
//               <span class="radio__warning-icon">
//                 <i class={'hgi-stroke hgi-alert-circle'} style={{ fontSize: "16px" }} />
//               </span>
//               <span class="radio__warning-text">{this.alertText}</span>
//             </div>
//           )}
//         </div>
//       </label>
//     );
//   }
// }
import { h } from "@stencil/core";
import { guid } from "../../utils";
export class RadioButton {
    constructor() {
        this.color = 'brand';
        this.hasHelperText = false;
        this.disabled = false;
        this.id = guid();
        this.value = '';
        this.checked = false;
        // New SX prop for custom styling
        this.sx = {};
        // Store computed styles
        this.customStyleSheet = null;
        this.styleId = '';
        this.handleActive = () => {
            var _a;
            (_a = this.radioLabelRef) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        };
        this.handleRemoveActive = () => {
            var _a;
            (_a = this.radioLabelRef) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        };
        this.handleFocus = () => {
            var _a;
            (_a = this.radioLabelRef) === null || _a === void 0 ? void 0 : _a.classList.add('focus');
        };
        this.handleFocusOut = () => {
            var _a;
            (_a = this.radioLabelRef) === null || _a === void 0 ? void 0 : _a.classList.remove('focus');
        };
        this.handleEscape = (event) => {
            var _a, _b;
            if (event.key === 'Escape') {
                (_b = (_a = this.radioLabelRef) === null || _a === void 0 ? void 0 : _a.querySelector('input')) === null || _b === void 0 ? void 0 : _b.blur();
                this.handleFocusOut();
            }
        };
    }
    handleSxChange() {
        this.processStyles();
    }
    componentWillLoad() {
        // Generate a unique ID for this component instance
        this.styleId = `dga-radio-${this.id}-styles`;
        this.processStyles();
    }
    componentDidLoad() {
        window.addEventListener('keydown', this.handleEscape);
        // Apply styles after the component is loaded
        this.applyCustomStyles();
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleEscape);
        // Remove the style element when component is destroyed
        if (this.customStyleSheet && this.customStyleSheet.parentNode) {
            this.customStyleSheet.parentNode.removeChild(this.customStyleSheet);
        }
    }
    applyCustomStyles() {
        // Remove existing style element if it exists
        if (this.customStyleSheet && this.customStyleSheet.parentNode) {
            this.customStyleSheet.parentNode.removeChild(this.customStyleSheet);
        }
        // Create a new style element
        this.customStyleSheet = document.createElement('style');
        this.customStyleSheet.id = this.styleId;
        document.head.appendChild(this.customStyleSheet);
    }
    processStyles() {
        if (!this.sx || Object.keys(this.sx).length === 0) {
            return;
        }
        // Convert the sx prop to CSS
        let cssText = '';
        // Track if we need to add a style element
        let hasCustomSelectors = false;
        // Process each property in sx
        for (const [key, value] of Object.entries(this.sx)) {
            // Handle CSS-like selectors (e.g., "& .radio__label")
            if (key.includes('&')) {
                hasCustomSelectors = true;
                const selector = key.replace('&', `#${this.id}`);
                cssText += `${selector} { `;
                // Handle objects with multiple CSS properties
                if (typeof value === 'object') {
                    for (const [propName, propValue] of Object.entries(value)) {
                        cssText += `${this.camelToDash(propName)}: ${propValue}; `;
                    }
                }
                else {
                    // Handle single property value
                    cssText += `${value}; `;
                }
                cssText += `}\n`;
            }
        }
        // If we have custom selectors, apply them as a stylesheet
        if (hasCustomSelectors) {
            // Wait for component to be in the DOM
            setTimeout(() => {
                if (this.customStyleSheet) {
                    this.customStyleSheet.textContent = cssText;
                }
            }, 0);
        }
    }
    // Helper to convert camelCase to dash-case for CSS properties
    camelToDash(str) {
        return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
    }
    render() {
        // Extract direct style properties (non-selector styles)
        const inlineStyles = {};
        for (const [key, value] of Object.entries(this.sx || {})) {
            if (!key.includes('&')) {
                inlineStyles[key] = value;
            }
        }
        return (h("label", { key: 'b407f60557bd12a3d6f2dd836147fe24cfe59ea3', ref: el => (this.radioLabelRef = el), id: this.id, class: `radio ${this.color ? 'radio--' + this.color : ''}`, style: inlineStyles, onMouseDown: this.handleActive, onMouseUp: this.handleRemoveActive, onMouseOut: this.handleRemoveActive, onChange: this.handleRemoveActive }, h("div", { key: 'ce81bc4d86e9f982337facbf3ffadfdc38e9eb4d', class: "radio-main" }, h("div", { key: 'c4395d2a5106f961bc361357a737576fcb5e9462', class: "radio-main__content" }, h("input", { key: '2104a7eadca2a1c07be42757ab6c6d79e8b55249', type: "radio", name: this.name, value: this.value,
            // id={this.id}
            onChange: this.onChange, onInput: this.onInput, disabled: this.disabled,
            // onFocus={this.handleFocus}
            // onBlur={this.handleFocusOut}
            checked: this.checked }), h("div", { key: '1ba13ed41a40979e17cb2c8c52c6b7e06f5a2817', class: "radio-container" }), (this.label || this.hasHelperText) && h("div", { key: 'de04c1801b3a6edb48cbb61dd366129ab553740d', class: "dga-flex-column" }, this.label && h("span", { key: '46fc8bcf04202d4d0db7a029e6e9e3a69fd2308a', class: "radio__label" }, this.label), this.hasHelperText && this.helperText && h("span", { key: 'd3c706ac82f303d31a3355aa66ea2c6675dd53a7', class: "radio__helper-text" }, this.helperText))), this.alertMessage && this.alertText && (h("div", { key: 'af169c48a60b57a56e065bdab7a64cd22cce8e28', class: "radio__warning" }, h("span", { key: '9a4840d38e2165cc6208c58e3281cae6e6b64bc6', class: "radio__warning-icon" }, h("i", { key: '5f247c2af62865bf2f5fadf1f90179422f61e530', class: 'hgi-stroke hgi-alert-circle', style: { fontSize: "16px" } })), h("span", { key: 'e76bcecbf0a7bdc739a6251879990a66459afcb5', class: "radio__warning-text" }, this.alertText))))));
    }
    static get is() { return "dga-radio-button"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-radio-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-radio-button.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'neutral' | 'brand'",
                    "resolved": "\"brand\" | \"neutral\"",
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
                "reflect": false,
                "defaultValue": "false"
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
                "defaultValue": "guid()"
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
                "reflect": true
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                "defaultValue": "''"
            },
            "checked": {
                "type": "boolean",
                "attribute": "checked",
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
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(event: any) => void",
                    "resolved": "(event: any) => void",
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
                    "original": "(event: any) => void",
                    "resolved": "(event: any) => void",
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
            "sx": {
                "type": "unknown",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps",
                    "resolved": "SxProps",
                    "references": {
                        "SxProps": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-radio-button/dga-radio-button.tsx",
                            "id": "src/components/dga-radio-button/dga-radio-button.tsx::SxProps"
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
                "defaultValue": "{}"
            }
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
