import { h } from "@stencil/core";
export class DgaFeedbackIconUsage {
    constructor() {
        this.value = 'test';
    }
    render() {
        return (h("div", { key: '1942d24b5f46f81711454bb01ba23d380924449d' }, h("h1", { key: 'c6cd31cb1b2900ea66aa5b4922fe7a347200c46e' }, "Search Box Example"), h("div", { key: '741342acc1eba503b494e46185ef85d87c9c4dee', style: { padding: '50px' } }, h("div", { key: '3361d9006b974d49e0fe19d3e8214fd11e3b70d9', style: { display: "flex", flexDirection: "column", gap: "16px" } }))));
    }
    static get is() { return "dga-feedback-icon-usage"; }
    static get states() {
        return {
            "value": {}
        };
    }
}
