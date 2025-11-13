import { h } from "@stencil/core";
export class DgaLinearProgressBarUsage {
    constructor() {
        this.percentage = 0;
    }
    handleInputChange(event) {
        const target = event.target;
        this.percentage = Number(target.value); // Convert the string value to a number
    }
    render() {
        return (h("div", { key: '96900e3534960feace98a4bf1f80036b859811e4' }, h("h1", { key: '99744dec97668be2c965f6126cc1ea05816cd8ba' }, "Linear Progress Bar Example"), h("div", { key: '7b6389775a5dfd93f96624c798002b55e371607f', style: { padding: '50px', gap: '20px' } }, h("div", { key: 'd1f22eefa4c9ee5c6ac1bd06377f9dd528bea7ec', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-linear-progress-bar", { key: '6c71606ec581c10981ca258d4282a89581221820', percentage: this.percentage, size: 'large', success: true }), h("dga-linear-progress-bar", { key: '7a49ae2bc2bf6b52dee01e9a9339e7d0b64df201', size: 'large', error: true, percentage: this.percentage }), h("dga-linear-progress-bar", { key: 'f478db616001e29576b32f9955415c69dc0e9921', size: 'large', progressStyle: "primary", percentage: this.percentage }), h("hr", { key: 'e9929e1cd37b93645e9d67c4cf5dd34ade0f17e0' }), h("dga-linear-progress-bar", { key: 'd1e6f1a2affb116873fc3c71f5cf8eca00e8128e', percentage: this.percentage, size: 'small', success: true }), h("dga-linear-progress-bar", { key: 'd2d072033be6758f022ebe9e2aaf363026cd2ef1', size: 'small', error: true, percentage: this.percentage }), h("dga-linear-progress-bar", { key: '7ac26cc8ad26197504cdb2eb6bf02615af357027', size: 'small', progressStyle: "primary", percentage: this.percentage }), h("hr", { key: 'edf05db50fc20d2634fc30e4d1ed636c0557ac41' }), h("dga-linear-progress-bar", { key: '0e340f28fcb376166bcf425159bc8c22554e091a', percentage: this.percentage, size: 'medium', success: true }), h("dga-linear-progress-bar", { key: 'a7f5cb18dd135d639a4e0cf87c8a724313b67334', size: 'medium', error: true, percentage: this.percentage }), h("dga-linear-progress-bar", { key: 'a84bfbe309308cc5d8ee80c755fdecefdd6cef02', size: 'medium', progressStyle: "primary", percentage: this.percentage }), h("input", { key: '31e5746f347910bbe464ecebe511ff77ece58355', type: 'range', min: '0', max: '100', value: this.percentage, onInput: (e) => this.handleInputChange(e) })), h("div", { key: '70f9c5938120a074128f504df87046402ac7be40', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-linear-progress-bar-usage"; }
    static get states() {
        return {
            "percentage": {}
        };
    }
}
