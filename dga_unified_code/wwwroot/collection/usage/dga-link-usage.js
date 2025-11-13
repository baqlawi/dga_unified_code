import { h } from "@stencil/core";
export class DgaLinkUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: '60577cce03194697b763ffc6222a5cfd1190c1e0' }, h("h1", { key: '1d89d88ee6125cd590a582ff8c2f98b8a461302c' }, "Link Example"), h("div", { key: 'b8ea690974c9d6e44625bed7e0a0e3c915872b3e', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '1466892692929dba04f5fcd0bd6c7c76ce50d3c3', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-link", { key: 'bf98a460c36c7b1029d442552594ed22d56a843a', label: "Link", variant: "neutral" }), h("dga-link", { key: '5c36cbfbd746a9ea53e5557ae50fedb0856620e5', label: "Link", variant: "on-color" }), h("dga-link", { key: '78288ab64c31d33daed6c3dd746b4b059d612bfd', label: "Link", variant: "primary" })), h("div", { key: 'c59d1893522d5b25592a081f5c1a04799e80b3ac', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-link-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
