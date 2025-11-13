import { h } from "@stencil/core";
export class DgaTextareaUsage {
    render() {
        return (h("div", { key: 'c761c07b382a4db763c8c12fb75bae70cf9530e5' }, h("h1", { key: 'c74bf5954bbb87e7611c79b6f67bdc70889f7e3d' }, "Textarea Example"), h("div", { key: '0e5fa64c1850f22c85426b3c31a77ba3d1f484ff', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '37b509f36a54893dbd977b1c5d822555643cc08e', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-textarea", { key: '6a599c45c6ee9738c7d1fb64909c0a00adf390d8', label: "Label", placeholder: "Placeholder...", scrollbar: true, readonly: true }), h("dga-textarea", { key: '77be82bcb798d72f4405703b9e92d42b62eb88a9', placeholder: "Placeholder...", scrollbar: true })), h("div", { key: '19f51008762a19f7fbef4c7fa9009baf5b79ed0a', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-textarea-usage"; }
}
