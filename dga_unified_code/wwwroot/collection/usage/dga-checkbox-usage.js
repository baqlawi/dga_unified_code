import { h } from "@stencil/core";
export class DgaCheckboxUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: '7aadd8375e21ed45dee60e0a74f711e94e2223b4' }, h("h1", { key: 'dc5ca4c847ba26136f50da12f11c84c03df3efe1' }, "Checkbox Example"), h("div", { key: '3ec13a3f85affd4004b424e7522752186bd08f34', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'bdb61a2d56d41b71efe8d4214771f0ab8de264f7', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("h1", { key: 'fe201422cbf898e96711c900e327c0a6fcadd7d0' }, "test"), h("dga-checkbox", { key: '31a6bba527c6d168446e2b1674baad3dc9c4fbfe', label: 'Checkbox Label Checkbox Label Checkbox Label Checkbox Label', Indeterminate: false, alertMessage: true, alertText: "Error/Warning message" }), h("dga-checkbox", { key: '058e4bcd4f9eb79fde15d738834326668d9969e1', size: 'lg' }), h("dga-checkbox", { key: 'c36fc43a9c5beb510c618971ec4ef35269bc4937', size: 'md' }), h("dga-checkbox", { key: '85e914e175e2e75e42b681dc911deb683571dafa', size: 'sm' })), h("div", { key: '5a9f7c9759d8b6a91497527358bc007e4734770c', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-checkbox-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
