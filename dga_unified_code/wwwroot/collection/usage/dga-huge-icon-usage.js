import { h } from "@stencil/core";
export class DgaHugeIconUsage {
    render() {
        return (h("div", { key: '75027e8981a08cdffbff0ee10c66e3d8a59be60a' }, h("h1", { key: 'b5f0d4790c45efa29188b8f4214975bbe7744ac0' }, "Huge Icon Example"), h("div", { key: '8f21a79842a77be13252f14d7e817e6a09db2ea7', style: { padding: "50px", display: "flex", gap: "20px" } }, h("dga-icon-v2", { key: '7b488eb4a5277d2bb651a0920a677dcf87f34b69', name: "tiktok", color: 'red', variant: 'solid', type: 'sharp', size: 20 }), h("dga-icon", { key: 'dbdf11e4fcf5593e169b5c89f3ac1cfd232cad88', icon: "tiktok", color: 'red', variant: 'solid', type: 'sharp', size: 20 }))));
    }
    static get is() { return "dga-huge-icon-usage"; }
}
