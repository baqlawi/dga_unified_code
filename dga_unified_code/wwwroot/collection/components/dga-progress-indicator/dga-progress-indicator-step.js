import { h } from "@stencil/core";
export class DgaProgressIndicatorStep {
    constructor() {
        this.currentStep = 1;
        this.title = '';
        this.description = '';
        this.nextStep = true;
        this.showStepName = true;
        this.showStepDescription = true;
        this.labelStyle = 'circle';
        this.internalActiveStep = 1;
        this.isActive = false;
        this.labelState = 'upcoming';
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
        // Get the progress key from the parent
        this.progressKey = this.el.getAttribute('data-progress-key');
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleEscape);
    }
    stepChangeHandler(event) {
        // Only update if the event is from our parent progress indicator
        if (event.detail.progressKey === this.progressKey) {
            this.internalActiveStep = event.detail.step;
            this.updateState();
        }
    }
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
        return (h("div", { key: '8c7cf1023072a547caa1fe4141923308577f776f', class: "progress-indicator__step", onMouseDown: this.handleFocus, onMouseUp: this.handleFocusOut }, h("div", { key: 'b070ea33b5c8190f2034ff0fbba68d019cca4072', class: "progress-indicator__step-content dga-flex-column", ref: el => (this.stepContentRef = el) }, h("div", { key: 'dc623d3db99ad8ccf77b939cd917ad84cb15f259', class: "step-label", "data-state": this.labelState }, h("span", { key: '15e5f19d88914db4edf27615bb17e09262409dd1', class: `step-label--${this.labelStyle}` }, this.labelStyle === 'circle' && this.labelChildren(this.currentStep))), h("div", { key: '6c91a3334887f9b645d9aed12f60606c271ba2eb', class: "step-text dga-flex-column" }, this.showStepName && h("span", { key: '9e7059ff6ebabf1d1071d6e36ea07c4efa4f83aa', class: this.isActive ? 'text-md-medium' : 'text-md-regular' }, this.title), this.showStepDescription && h("p", { key: 'e9bbcdb2962f6f507923b7abc920405ec1dcb05e', class: "text-sm-regular" }, this.description))), this.nextStep && h("span", { key: 'e8569448d21c97c1db9067b50833f742ab6e34ea', class: `progress-indicator__step-connector ${this.isActive ? 'progress-indicator__step-connector--active' : ''}` })));
    }
    static get is() { return "dga-progress-indicator-step"; }
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
