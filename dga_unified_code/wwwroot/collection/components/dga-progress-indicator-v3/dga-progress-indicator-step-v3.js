import { h } from "@stencil/core";
export class DgaProgressIndicatorStep {
    constructor() {
        this.currentStep = 1;
        this.title = '';
        this.description = '';
        this.activeStep = 0;
        this.nextStep = true;
        this.showStepName = true;
        this.showStepDescription = true;
        this.internalActiveStep = 1;
        this.isActive = false;
        this.labelState = 'upcoming';
        this.labelStyle = 'circle';
        this.handleFocus = () => {
            this.stepContentRef.classList.add('focus');
        };
        this.handleFocusOut = () => {
            this.stepContentRef.classList.remove('focus');
        };
        this.handleEscape = (event) => {
            if (event.key === 'Escape') {
                this.handleFocusOut();
                const inputElement = this.el.querySelector('input');
                if (inputElement) {
                    inputElement.blur();
                }
            }
        };
    }
    componentWillLoad() {
        this.updateState();
        window.addEventListener('keydown', this.handleEscape);
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleEscape);
    }
    stepChangeHandler(event) {
        this.internalActiveStep = event.detail;
        console.log('stepChangeHandler', event.detail);
        this.isActive = event.detail > this.currentStep;
        if (event.detail > this.currentStep) {
            this.labelState = 'completed';
        }
        else if (event.detail < this.currentStep) {
            this.labelState = 'upcoming';
        }
        else {
            this.labelState = 'current';
        }
    }
    // @Watch('internalActiveStep')
    updateState() {
        this.isActive = this.internalActiveStep > this.currentStep;
        if (this.internalActiveStep > this.currentStep) {
            this.labelState = 'completed';
        }
        else if (this.internalActiveStep < this.currentStep) {
            this.labelState = 'upcoming';
        }
        else {
            this.labelState = 'current';
        }
    }
    labelChildren(currentStep) {
        if (this.labelState === 'completed') {
            return h("i", { class: "hgi-stroke hgi-tick-02", style: { fontSize: "16px" } });
        }
        return currentStep.toString();
    }
    render() {
        return (h("div", { key: '57b7bb3e3d81aeb14c50ef43451be15923bffc47', class: "progress-indicator__step", onMouseDown: this.handleFocus, onMouseUp: this.handleFocusOut }, h("div", { key: '482f9736271cc8e01eaa696257643ebb1c37e650', class: "progress-indicator__step-content dga-flex-column", ref: el => (this.stepContentRef = el) }, h("div", { key: '4308fafeba56d200c0e8637197fbcb287ec7022f', class: "step-label", "data-state": this.labelState }, h("span", { key: 'ff9d82aa709beafacf083dc101d8444eedf5acda', class: `step-label--${this.labelStyle}` }, this.labelStyle === 'circle' && this.labelChildren(this.currentStep))), h("div", { key: '73328a45feecc8c83fe07d77d4b8e467196c4c1f', class: "step-text dga-flex-column" }, this.showStepName && h("span", { key: '03f012f9d1335edc20b12154cfa0ef22d844643b', class: this.isActive ? 'text-md-medium' : 'text-md-regular' }, this.title), this.showStepDescription && h("p", { key: '6a5c96fbb8eacf9b98bafb5dc75dce301f1006a1', class: "text-sm-regular" }, this.description))), this.nextStep && h("span", { key: '2be50ec43d6b6ea5837b1393b0295f779625c67d', class: `progress-indicator__step-connector ${this.isActive ? 'progress-indicator__step-connector--active' : ''}` })));
    }
    static get is() { return "dga-progress-indicator-step-v3"; }
    static get properties() {
        return {
            "currentStep": {
                "type": "number",
                "attribute": "current-step",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "reflect": true,
                "defaultValue": "1"
            },
            "title": {
                "type": "string",
                "attribute": "title",
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
            "description": {
                "type": "string",
                "attribute": "description",
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
            "activeStep": {
                "type": "number",
                "attribute": "active-step",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "0"
            },
            "nextStep": {
                "type": "boolean",
                "attribute": "next-step",
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
                "defaultValue": "true"
            },
            "showStepName": {
                "type": "boolean",
                "attribute": "show-step-name",
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
                "defaultValue": "true"
            },
            "showStepDescription": {
                "type": "boolean",
                "attribute": "show-step-description",
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
                "defaultValue": "true"
            },
            "labelStyle": {
                "type": "string",
                "attribute": "label-style",
                "mutable": false,
                "complexType": {
                    "original": "'dot' | 'circle'",
                    "resolved": "\"circle\" | \"dot\"",
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
                "defaultValue": "'circle'"
            }
        };
    }
    static get states() {
        return {
            "internalActiveStep": {},
            "isActive": {},
            "labelState": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "stepChange",
                "method": "stepChangeHandler",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
