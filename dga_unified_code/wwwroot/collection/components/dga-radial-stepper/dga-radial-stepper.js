import { Host, h } from "@stencil/core";
export class DgaRadialStepper {
    constructor() {
        this.RTL = false;
        this.size = '64px';
        this.showText = true;
        this.steps = [];
        this.activeStep = 1;
        this.variant = 'primary';
        this.showStepName = true;
        this.showStepDescription = true;
        this.sizes = {
            '120px': 120,
            '80px': 80,
            '64px': 64,
            '48px': 48,
            '40px': 40,
        };
    }
    updateInternalPercentage() {
        if ((this.activeStep >= this.steps.length + 1) || (this.activeStep < 1)) {
            return;
        }
        this.internalPercentage = (this.activeStep / this.steps.length) * 100;
        this.internalActiveStep = this.activeStep;
    }
    componentDidLoad() {
        this.updateInternalPercentage();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const strokeWidth = this.sizes[this.size] / 10;
        const radius = (this.sizes[this.size] - strokeWidth) / 2;
        const dashArray = 2 * Math.PI * radius;
        const dashOffset = (this.RTL ? 1 : -1) * dashArray * (1 - this.internalPercentage / 100);
        return (h(Host, { key: 'd601d1e0bdf9efa319caba637e5ba05d543ca454' }, h("dga-flex", { key: '149bc159858c693c3b5886799ba0d0d3daa54944', spacing: 8, align: 'center', dir: this.RTL ? "rtl" : "ltr", class: `dga-radial-stepper--${this.size} dga-radial-stepper--${this.variant}`, "aria-size": this.size }, h("div", { key: '469440ef80a6632a8c74879a994aee0dfa0309f8', class: "dga-circular-stepper", "aria-size": this.size }, h("div", { key: '886ee4d15355c0d9468bbc36b75f7c0e11311cf0', class: "dga-circular-stepper__label" }, this.showText && this.steps.length > 0 && h("h4", { key: '9f2bc43ecc6e77ebfc62eb6ccdb41bace54ee98b', class: `dga-circular-stepper__label--text ${this.variant}` }, this.RTL ? `${this.internalActiveStep} من ${this.steps.length}` : `${this.internalActiveStep} of ${this.steps.length}`)), h("svg", { key: 'bf587649a96a8f76a89872f2581efb0694cb06a7', width: this.sizes[this.size], height: this.sizes[this.size], viewBox: `0 0 ${this.sizes[this.size]} ${this.sizes[this.size]}` }, h("circle", { key: 'c6a1a856efca52269099423d5d1e4fd13467b24a', class: `track track--${this.variant}`, fill: "none", stroke: "#e6e6e6",
            // stroke="currentColor"
            r: radius, cx: this.sizes[this.size] / 2, cy: this.sizes[this.size] / 2, "stroke-width": strokeWidth }), h("circle", { key: '8350b172d9e63e8b5d0f138313ab71a3f8f4e4ce', class: `tail tail--${this.variant}`, fill: "none", stroke: "currentColor", r: radius, cx: this.sizes[this.size] / 2, cy: this.sizes[this.size] / 2, "stroke-width": strokeWidth, "stroke-linecap": 'round', "stroke-dasharray": dashArray, "stroke-dashoffset": dashOffset, transform: `rotate(-90 ${this.sizes[this.size] / 2} ${this.sizes[this.size] / 2})`, style: {
                transition: 'stroke-dashoffset 0.5s ease',
            } }))), h("dga-flex", { key: '638af7003ed048eefc26d847f88b52e16b859e14', direction: 'column', spacing: 4 }, ((_a = this.steps[this.internalActiveStep - 1]) === null || _a === void 0 ? void 0 : _a.showPreStep) && h("span", { key: '4380d0d2e6b7c03329f99d449a29fa22b178d50c', class: "dga-radial-stepper__pre-name" }, "Previous: ", (_b = this.steps[this.internalActiveStep - 1]) === null || _b === void 0 ? void 0 :
            _b.stepName), this.showStepName && ((_c = this.steps[this.internalActiveStep - 1]) === null || _c === void 0 ? void 0 : _c.stepName) && h("h3", { key: '7dfd5d944bdba170239a6d356535d8c7a477725d', class: "dga-radial-stepper__name" }, (_d = this.steps[this.internalActiveStep - 1]) === null || _d === void 0 ? void 0 : _d.stepName), this.showStepDescription && ((_e = this.steps[this.internalActiveStep - 1]) === null || _e === void 0 ? void 0 : _e.stepDescription) && h("h5", { key: 'd400a5e2df898aba8ca1762fc3d61167dd4b051e', class: "dga-radial-stepper__desc" }, (_f = this.steps[this.internalActiveStep - 1]) === null || _f === void 0 ? void 0 : _f.stepDescription), ((_g = this.steps[this.internalActiveStep - 1]) === null || _g === void 0 ? void 0 : _g.showNextStep) && h("span", { key: '4bb5db7d6032db7b328094419728e14867f80282', class: "dga-radial-stepper__next-name" }, "Next: ", (_h = this.steps[this.internalActiveStep]) === null || _h === void 0 ? void 0 :
            _h.stepName)))));
    }
    static get is() { return "dga-radial-stepper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-radial-stepper.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-radial-stepper.css"]
        };
    }
    static get properties() {
        return {
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
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'120px' | '80px' | '64px' | '48px' | '40px'",
                    "resolved": "\"120px\" | \"40px\" | \"48px\" | \"64px\" | \"80px\"",
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
                "defaultValue": "'64px'"
            },
            "showText": {
                "type": "boolean",
                "attribute": "show-text",
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
            "steps": {
                "type": "unknown",
                "attribute": "steps",
                "mutable": false,
                "complexType": {
                    "original": "Step[]",
                    "resolved": "Step[]",
                    "references": {
                        "Step": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-radial-stepper/dga-radial-stepper.tsx",
                            "id": "src/components/dga-radial-stepper/dga-radial-stepper.tsx::Step"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
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
                "defaultValue": "1"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'neutral' | 'on-color'",
                    "resolved": "\"neutral\" | \"on-color\" | \"primary\"",
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
                "defaultValue": "'primary'"
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
            }
        };
    }
    static get states() {
        return {
            "internalPercentage": {},
            "internalActiveStep": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "steps",
                "methodName": "updateInternalPercentage"
            }, {
                "propName": "activeStep",
                "methodName": "updateInternalPercentage"
            }];
    }
}
