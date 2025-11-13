import { h } from "@stencil/core";
export class DgaTextInputUsage {
    constructor() {
        this.value = 'Text Input Example';
    }
    render() {
        return (h("div", { key: '510aed06b703ade0d10a76afd9b99edbe9f37245' }, h("h1", { key: '7ec2ab30a0abb937519434d172972c9c75139c2f' }, "Text Input Example"), h("div", { key: '86d82d7705cb93ad2dbad6cd2207447c1b20dae8', style: { padding: '50px' } }, h("div", { key: '5b5dc357fcc2efaae6776844c7d41b34cfcd073d', style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, h("input", { key: '7245da45f5a24dd270d4452c95687e7cc4b60c8b', type: "text", value: this.value, onChange: (e) => (this.value = e.target.value) }), h("p", { key: '270a5a3bcc8198789cdff8ff48629457c04d3307' }, this.value), h("dga-text-input", { key: 'f42ad47f33ae4b8a8063492beacc951e1e238dfc', readonly: false, variant: "darker", label: "Label", value: this.value, required: true, feedbackIcon: true, icon: { name: 'search-01', variant: 'stroke', type: 'standard' }, helperTextIcon: { name: 'alert-circle', variant: 'stroke', type: 'standard' }, helperText: "test", error: true, onInput: (e) => (this.value = e.target.value) }), h("dga-text-input", { key: 'af747a2ea8aa917620da5fe1d38739131c9b3dbd', readonly: false, variant: "darker", label: "Label", value: "Entered text", required: true, feedbackIcon: true, icon: { name: 'search-01', variant: 'stroke', type: 'standard' }, helperText: "test", error: true }), h("dga-text-input", { key: '06414380052c6011d121d62abc9937ed87557e0d', readonly: false, variant: "darker", label: "Label", value: "Entered text", required: true, feedbackIcon: true, icon: { name: 'search-01', variant: 'stroke', type: 'standard' }, helperTextIcon: { name: 'alert-circle', variant: 'stroke', type: 'standard' }, helperText: "test", error: true }, h("dga-prefix", { key: '10ba92ebbf6fe38e4ee9c7db991633274426e212', type: "button", variant: "solid",
            // label="Button Label"
            icon: { name: 'search-01' } })), h("dga-label", { key: '8e574c3562f8157a50d3e40e058a1b1b5cb32235', label: "Mandatory Text Input" }), h("dga-label", { key: 'cefc0acf5bb774f70dd727210e31df3f733fdc5a', label: "Mandatory Text Input", required: true })))));
    }
    static get is() { return "dga-text-input-usage"; }
    static get states() {
        return {
            "value": {}
        };
    }
}
