import { h } from "@stencil/core";
import { guid } from "../../utils";
export class DgaCheckbox {
    constructor() {
        this.color = 'brand';
        this.size = 'md';
        this.disabled = false;
        this.name = guid();
        this.value = '';
        this.showBorderOnFocusAndFocusOute = true;
        this.checked = false;
        this.isChecked = this.checked;
        this.Indeterminate = false;
        // private handleActive = () => {
        //   this.labelRef?.classList.add('active');
        // };
        // private handleRemoveActive = () => {
        //   this.labelRef?.classList.remove('active');
        // };
        this.handleFocus = () => {
            var _a;
            if (!this.showBorderOnFocusAndFocusOute)
                return;
            (_a = this.labelRef) === null || _a === void 0 ? void 0 : _a.classList.add('focus');
        };
        this.handleFocusOut = () => {
            var _a;
            if (!this.showBorderOnFocusAndFocusOute)
                return;
            (_a = this.labelRef) === null || _a === void 0 ? void 0 : _a.classList.remove('focus');
        };
        this.handleEscape = (event) => {
            var _a, _b;
            if (event.key === 'Escape') {
                this.handleFocusOut();
                (_b = (_a = this.labelRef) === null || _a === void 0 ? void 0 : _a.querySelector('input')) === null || _b === void 0 ? void 0 : _b.blur();
            }
        };
    }
    componentWillLoad() {
        this.isChecked = this.checked;
    }
    componentDidLoad() {
        window.addEventListener('keydown', this.handleEscape);
    }
    watchMaxValue(newValue) {
        this.isChecked = newValue;
    }
    render() {
        return (h("label", { key: 'abe6759e55467031404b9d640a0b7e968d0b8be6', ref: el => (this.labelRef = el), class: `checkbox ${this.color ? `checkbox--${this.color}` : ''} checkbox--${this.size}` }, h("div", { key: '510aef1b9d8601a47de9a37e80acab1a552f3927', class: "checkbox-main" }, h("div", { key: '7788cc0ea76d6722bad9f927ffc142e3a4550b7c', class: "checkbox-main__content" }, h("input", { key: 'c578c6a9212df187d9c6b82258daa7d1711f2270', type: "checkbox", name: this.name, value: this.value,
            // id={id}
            // {...(customAttribute.key && {
            //   [customAttribute.key]: customAttribute.value
            //     ? customAttribute.value
            //     : "",
            // })}
            disabled: this.disabled, onFocus: this.handleFocus, onBlur: this.handleFocusOut, onChange: e => {
                var _a;
                (_a = this.onChange) === null || _a === void 0 ? void 0 : _a.call(this, e);
                const target = e.target;
                this.isChecked = target.checked;
            }, onInput: this.onInput, checked: this.isChecked }), h("div", { key: '38af8275e1c9ad37f2bbab5f935032b8abdb3e8c', class: "checkbox-container" }, h("span", { key: '436353967d59a6f0e1b2e8f3f7789cf1d3094d9f', class: "checkbox-icon checkbox__checked-icon", style: { display: this.isChecked ? 'inline-block' : 'none' } }, this.Indeterminate ? h("dga-icon", { icon: "minus-sign", variant: 'solid' }) : h("dga-icon", { icon: "tick-03", variant: 'solid' })), h("span", { key: '2b1f2b79dd60b109c0043773aca10cf353cd30b6', class: "checkbox-icon checkbox__indeterminate-icon", style: { display: this.isChecked ? 'none' : 'inline-block' } }, h("dga-icon-v2", { key: 'a9220322fbe441f31e2afc535538bbd6737738ae', name: 'remove-01', variant: 'solid' }))), !this.helperText ? (this.label && h("span", { class: "checkbox__label" }, this.label)) : (h("div", { class: "dga-flex-column" }, h("span", { class: "checkbox__label" }, this.label), h("span", { class: "checkbox__helper-text" }, this.helperText)))), this.alertMessage && (h("div", { key: '23b03abd7ffb247a4cbd40c456c0306863c76a6f', class: "checkbox__warning" }, h("span", { key: 'c5c9392a90428a714387cc3782b8a9a2156805f0', class: "checkbox__warning-icon" }, h("dga-icon-v2", { key: 'bc228dbbf56e42a1ef12a4252bc800736df6b41d', name: 'alert-circle', variant: 'stroke', type: 'rounded', size: 16 })), h("span", { key: '4ee49ea2fd241d9d0b5256623546429d4953ed59', class: "checkbox__warning-text" }, this.alertText))))));
    }
    static get is() { return "dga-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-checkbox.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'brand' | 'neutral'",
                    "resolved": "\"brand\" | \"neutral\"",
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
                "defaultValue": "'brand'"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "guid()"
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
            "showBorderOnFocusAndFocusOute": {
                "type": "boolean",
                "attribute": "show-border-on-focus-and-focus-oute",
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
            "Indeterminate": {
                "type": "boolean",
                "attribute": "indeterminate",
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
            "isChecked": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "checked",
                "methodName": "watchMaxValue"
            }];
    }
}
