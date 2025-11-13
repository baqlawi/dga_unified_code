import { h } from "@stencil/core";
export class DgaRadialStepperUsage {
    constructor() {
        this.percentage = 0;
        this.activeStep = 0;
    }
    handleInputChange(event) {
        const target = event.target;
        this.percentage = Number(target.value); // Convert the string value to a number
    }
    handleStepChange(event) {
        const target = event.target;
        this.activeStep = Number(target.value); // Convert the string value to a number
    }
    render() {
        return (h("div", { key: '8d29de9d51421028cf2c92552cb4b8591f4f4ba2' }, h("h1", { key: '133afab67aea31647a8337a9139eee9cd6dfc31d' }, "Radial Stepper Example"), h("div", { key: '2a78e5b1fc0a0ccaa60ffffb612a79be146fbb2d', style: { padding: '50px', gap: '20px' } }, h("div", { key: 'f1142e70941c62f3a9e618833c2d1eb0c6a09a23', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-radial-stepper", { key: '3915ac7506281602438630e1f18140fbd0d63bc1', size: "120px", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ] }), h("dga-radial-stepper", { key: 'b6c8e6826adccd6cd08b9715029ae76fe3946014', size: "80px", color: "success", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ] }), h("dga-radial-stepper", { key: 'ba5dd9c331fbbdb87a66f357477203c24cf28889', variant: 'neutral', size: "64px", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ] }), h("dga-radial-stepper", { key: '4fa58965edbcda8b0dab5937206bfd5db1b7ff4a', size: "48px", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ] }), h("dga-radial-stepper", { key: '7abbfa7137f82a755ce757fe013a7b8c0ad2ba35', size: "40px", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ] }), h("div", { key: '258cabc94a6606fdc5671938ef62704281b838fc', style: {
                backgroundColor: "#1B8354",
                padding: "40px"
            } }, h("dga-radial-stepper", { key: 'b5f95ea6e627101add5f1b4c86f405048c9959eb', variant: "on-color", size: "120px", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Five",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Six",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ], RTL: true })), h("button", { key: '577f669c962dc0e3b018089e793cb330b5a298f8', onClick: () => (this.activeStep += 1) }, "Next"), h("button", { key: '50ae132ed64dffe58980f09d473261871a65e55e', onClick: () => (this.activeStep -= 1) }, "Prev"), h("input", { key: 'b80aa02b6d9828e491073e8dde762224de6b3e04', type: "range", min: "0", max: "100", value: this.percentage, onInput: e => this.handleInputChange(e) })))));
    }
    static get is() { return "dga-radial-stepper-usage"; }
    static get states() {
        return {
            "percentage": {},
            "activeStep": {}
        };
    }
}
