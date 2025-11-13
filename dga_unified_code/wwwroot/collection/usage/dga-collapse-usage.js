import { h } from "@stencil/core";
export class DgaCollapseUsage {
    constructor() {
        this.variant = 'neutral';
        this.open = false;
    }
    render() {
        return (h("div", { key: '75a8c811d8165102d94c6c6d7dc7051eafa4ec8f' }, h("h1", { key: '36f3d120509afcfdbc137a512cbce17d857b4dfc' }, "Collapse Example"), h("div", { key: '8bf5690e3586d469542cb1bf8c8db674f22bfc5c', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'c4a822a44ce931a4626b3cd40abc6cede46f8cae', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("div", { key: 'f6e6066edc55b7ddea6e4d74466799b99f8265f2', style: { display: "flex", justifyContent: "center" } }, h("button", { key: '5519116c21392caeeb1d59818e7fac04973e8483', onClick: () => this.open = true }, "open"), h("button", { key: 'dbf4426f54186a60c7d6e4136db839c41b032cd1', onClick: () => this.open = false }, "close"))), h("dga-collapse", { key: 'c465bda11c855d670726c7f563ed7ff95dcdd10a', open: this.open, "transition-duration": "0.1s" }, h("div", { key: '738f38aceb7247336a1a7ad675bbf2edff107ee0' }, "Your content here")), h("div", { key: '4267fa284573263f984a45a95c04fe5fed11e775', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-collapse-usage"; }
    static get states() {
        return {
            "variant": {},
            "open": {}
        };
    }
}
