import { h } from "@stencil/core";
export class DgaProgressIndicator {
    constructor() {
        this.activeStep = 1;
        this.alignment = 'horizontal';
    }
    componentWillLoad() {
        // Generate a unique key if none provided
        this.componentKey = this.progressKey || `progress-${Math.random().toString(36).substr(2, 9)}`;
        this.el.childNodes.forEach(item => {
            const el = item;
            if (el.tagName === 'DGA-PROGRESS-INDICATOR-STEP' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'progress-indicator-step');
                el.setAttribute('data-progress-key', this.componentKey);
            }
        });
    }
    updateInternalActiveStep() {
        this.internalActiveStep = this.activeStep;
        this.stepChange.emit({ step: this.activeStep, progressKey: this.componentKey });
    }
    componentDidLoad() {
        this.updateInternalActiveStep();
    }
    render() {
        return (h("div", { key: '4d620f48659d8142b0ea5f819d6a31ceb1b4d2a0', class: "progress-indicator dga-flex", "data-alignment": this.alignment, "data-progress-key": this.componentKey }, h("slot", { key: '77ad12a823fb5063a56be0ce891b081f7ac75da0', name: 'progress-indicator-step' })));
    }
    static get is() { return "dga-progress-indicator"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-progress-indicator.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-progress-indicator.css"]
        };
    }
    static get properties() {
        return {
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
            },
            "alignment": {
                "type": "string",
                "attribute": "alignment",
                "mutable": false,
                "complexType": {
                    "original": "'horizontal' | 'vertical'",
                    "resolved": "\"horizontal\" | \"vertical\"",
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
                "defaultValue": "'horizontal'"
            },
            "progressKey": {
                "type": "string",
                "attribute": "progress-key",
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
            }
        };
    }
    static get states() {
        return {
            "internalActiveStep": {}
        };
    }
    static get events() {
        return [{
                "method": "stepChange",
                "name": "stepChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{step: number, progressKey: string}",
                    "resolved": "{ step: number; progressKey: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "activeStep",
                "methodName": "updateInternalActiveStep"
            }];
    }
}
