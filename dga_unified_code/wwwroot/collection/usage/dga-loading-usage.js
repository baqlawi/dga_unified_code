import { h } from "@stencil/core";
export class DgaLoadingUsage {
    constructor() {
        this.activeStep = 1;
    }
    render() {
        return (h("div", { key: 'e34fb787935e90f06a5bb7c504fc0a82e26ecc05' }, h("h1", { key: 'cf39cff7845f9887266780d8f96fcb2dace65691' }, "Loading Example"), h("div", { key: '43a2641143a92fb3d671deb864ce083a6f01eafa', style: { padding: "50px", display: "flex", gap: "20px" } }, h("div", { key: 'd044dfc6a7166354ec71e5c516acde41c57015d9', style: { display: "flex", flexDirection: "column", gap: "20px" } }, h("dga-loading", { key: 'fd32b1c4c896ecf67e0937f435912cdb0f3ccae1' })), h("div", { key: '46cbbe41dff0c4dcb6253ac9f1906fd5c4a8b81b', style: { display: "flex", flexDirection: "column", gap: "20px" } }))));
    }
    static get is() { return "dga-loading-usage"; }
    static get states() {
        return {
            "activeStep": {}
        };
    }
}
