import { h } from "@stencil/core";
export class DgaRatingUsage {
    constructor() {
        this.variant = 'neutral';
        this.rating = 2.5;
    }
    render() {
        return (h("div", { key: 'f7184b61a4d253ba152378f5351a202594425923', dir: "rtl" }, h("h1", { key: 'acbac8ddd578ccac931983a2aeecf2f2010fe922' }, "Rating Example"), h("div", { key: '70e196e85539a5c20eaa2022990f8ba52a5804a1', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'd09cc40054e86ce6118c8f95e854924ce61ddf88', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("button", { key: 'f9b9fd64d25a115c1bff68828b1a35c6d38ddeea', onClick: () => (this.rating += 1) }, "Increase ", this.rating), h("dga-rating", { key: 'dd7731a72899cbc74608b3e3112c57beca756934', onChange: val => {
                this.rating = val;
            }, value: this.rating, size: "lg" }), h("dga-rating", { key: 'ed2b827650cc9b1a4cbd9e82875242975d32d010', onChange: val => (this.rating = val), value: 2.5, size: "md" }), h("dga-rating", { key: '3ff22e835659ff9731ca114b5654ec4ee407c82e', onChange: val => (this.rating = val), value: this.rating, size: "sm" })), h("div", { key: 'dba2ca8ca0b0299adc0fd4c109a2cb72c3100077', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-rating-usage"; }
    static get states() {
        return {
            "variant": {},
            "rating": {}
        };
    }
}
