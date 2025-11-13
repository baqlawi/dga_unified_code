import { h } from "@stencil/core";
export class DgaPaginationUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: 'cb9aa8d97dc4e4babbccc42e1f35b27fbbc10252' }, h("h1", { key: 'ac96099d8e5cf7d530ce0c7d1857009fe586c365' }, "Pagination Example"), h("div", { key: 'd5a4a55e96102454630d2ca031fbb16be44e2f88', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'e704950aef38e4f1dd20062b7414b6399bf7143c', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-pagination", { key: '0d9576afd9302a8ef29dba8ddd286495ffe29773', totalPageCount: 10, size: 'large', onChange: (page) => console.log(page, "page changed") }), h("dga-pagination", { key: '099d061efadb8f9b454bf0449ac3be367b9fe3e8', totalPageCount: 10, size: 'medium' }), h("dga-pagination", { key: 'b38ba26dead1dc9cf2c8fed966d54df31a013859', totalPageCount: 10, size: 'small' })), h("div", { key: '9460d012c019245ddda33cfb84e65e4ff37b67c4', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-pagination-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
