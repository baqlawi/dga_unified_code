import { h } from "@stencil/core";
export class DgaSwitchUsage {
    render() {
        return (h("div", { key: '9b4cc83a33e27bb15cd62c19550ab45e128f3d6f', style: { padding: '50px', display: 'flex', gap: '50px' } }, h("div", { key: 'd2c0f55e79a596f42bd2d63b058e99f0ee5e1528' }, h("h1", { key: '9ef4540f6056e9ec1600c4ae94c65583a9e35002' }, "Switch Example"), h("dga-switch", { key: '1cd46fffeae688649119327b43efdf803ebfd4fa', label: "Switch Label", checked: true, hasHelperText: true, helperText: "When a Switch needs a further detailed explanation, it goes here.", alertMessage: true, alertText: "Error/Warning message" }))));
    }
    static get is() { return "dga-switch-usage"; }
}
