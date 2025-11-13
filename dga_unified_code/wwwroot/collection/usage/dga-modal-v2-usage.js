import { h } from "@stencil/core";
export class DgaModalUsage {
    constructor() {
        this.show = false;
    }
    render() {
        return (h("div", { key: 'cf2dafa213fc086af5401934fd3179a98bae15ed', style: { position: 'relative' } }, h("h1", { key: '923f4894e36ac0bac084012daa7c300024e15b3b' }, "Modal Example"), h("button", { key: 'c71ff101f73731ce1b429ee9cb5c13e9e399f7cf', onClick: () => (this.show = true) }, "Open Modal"), h("dga-modal-v2", { key: '8166e576d9e58e924e9ad36428c3604a55320fb3', open: this.show, showCloseButton: true, onClose: () => (this.show = false) }, h("dga-modal-header", { key: 'fcecd6870c0f8126e8579f558e3489718aca4500' }, h("dga-featured-icon", { key: 'ba9ea0fdd7ffac9aae1722cc16cba6944559b8d1', color: "brand", variant: "light", size: "md", icon: {
                name: 'InformationCircle',
                variant: 'stroke',
                type: 'sharp',
                size: 20,
            } }), h("dga-modal-title", { key: 'ddbb57ae30f220a2269be1f9f0bc9f65e15ce117' }, "Title goes here")), h("dga-modal-body", { key: 'd36cde9b1eaaf0993c63aac46047a8035a3000ca' }, h("dga-flex", { key: 'c0fadfe00152066a04a1578b0e4ff6a5879e867a', direction: "column", spacing: 8 }, h("p", { key: 'dcc885f22dc975c2b27c63a1878dd2e27df85884', class: "text-sm-regular" }, "When a Modal needs a further detailed explanation, it goes here."), h("dga-rating", { key: 'fd16653190da4562e2fd49316c45bb18e7455c8b' }))), h("dga-modal-actions", { key: '2c27ecc7ba847a18c68c1f4a0e53b6617fac4bea' }, h("dga-button-v2", { key: '98bb81e67c8611d9d71a86115289dee3cdf7163c', label: "Primary", size: "lg", variant: "primary", onClick: () => console.log('Primary Action') }), h("dga-button-v2", { key: '630e36d326dad69d8fd612e1de23a6bb5a3a7866', label: "Secondary", size: "lg", variant: "secondary-outline", onClick: () => console.log('Secondary Action') })))));
    }
    static get is() { return "dga-modal-v2-usage"; }
    static get states() {
        return {
            "show": {}
        };
    }
}
