import { h } from "@stencil/core";
export class DgaNumberInputUsage {
    constructor() {
        this.value = '';
    }
    render() {
        return (h("div", { key: '3984910797d8fa0d70fd9d8d6707e61fbd5f0d7b' }, h("h1", { key: '61f0b2c3cd6e789528d7c8f4b75751d83e67fd70' }, "Number Input Example"), h("div", { key: 'b23d80a0c44b3fde7a8a6a5bc60a396f9e5314f7', style: { padding: '50px' } }, h("div", { key: '4aeebdfc54599c5767f597fecf6deb05a1e538df', style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, h("dga-number-input", { key: '90cc423d6b4c6c09cf310f6cf6ac185df77f7853', size: "lg", variant: "default", label: "Label", value: 0, required: true, helperText: "test" }), h("dga-number-input", { key: '11fd46fb231f7dceb556889a8ffa85fe301e0bdc', size: "lg", variant: "darker", label: "Label", value: 0, required: true,
            // feedbackIcon
            helperText: "test" }), h("dga-number-input", { key: '5eb69b19e277a0b18db1b2427bafd23491586b35', size: "lg", variant: "lighter", label: "Label", value: 0, required: true,
            // feedbackIcon
            helperText: "test" }), h("dga-number-input", { key: '275bb1ddc83dccfdcde60a31bf6197cba6d920b0', size: "lg", variant: "darker", label: "Label", value: 0, required: true,
            // feedbackIcon
            helperText: "test" }), h("dga-label", { key: 'f1ba3f2d9c718cec3b73e659d0b6af6139872fe3', label: "Mandatory Text Input" }), h("dga-label", { key: '1235e27d2f470c498596ba85761981eae8d5cbbd', label: "Mandatory Text Input", required: true })))));
    }
    static get is() { return "dga-number-input-usage"; }
    static get states() {
        return {
            "value": {}
        };
    }
}
