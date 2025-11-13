import { h } from "@stencil/core";
export class DgaProgressIndicatorUsage {
    constructor() {
        this.activeStep = 1;
        this.activeStep2 = 1;
    }
    render() {
        console.log(this.activeStep);
        return (h("div", { key: 'a337250bbd65a4b8e960e41e288c688a63b1e1c3' }, h("h1", { key: 'cef22a77c58e3f82497f63306072ffa572100a66' }, "Progress Indicator Example"), h("div", { key: '008ad571880f5db73f4087ebd34fe776ef335939', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'f4bd2ad2c0f3dc8c5958925ba3c8f770374889b4', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("button", { key: '8a1431d81db57ca7b7cd2c0c297033f4b3b41df3', onClick: () => (this.activeStep = this.activeStep - 1) }, "prev"), h("button", { key: 'fe7569b9b41836d1e3e43053a8a4be2a9a0ee158', onClick: () => (this.activeStep = this.activeStep + 1) }, "next"), h("button", { key: 'be43881855560693ba888fe958028d23ad91d906', onClick: () => (this.activeStep2 = this.activeStep2 - 1) }, "prev 2"), h("button", { key: 'edcb7c2e0d6f01a903b28597afd59790335a3b6a', onClick: () => (this.activeStep2 = this.activeStep2 + 1) }, "next 2"), "activeStep: ", this.activeStep, h("dga-progress-indicator", { key: 'b526773a9e89ac16817a56282c8c82ea91fa4419', activeStep: this.activeStep, alignment: 'vertical' }, h("dga-progress-indicator-step", { key: 'c1f3d6b6efdc0b5ed87688f50c2a94aeef7976ac', title: "Step One", description: "this is step description", currentStep: 1 }), h("dga-progress-indicator-step", { key: '3c88d3390d35500a19abddc579267e909a6a39b2', title: "Step Two", description: "this is step description", currentStep: 2 }), h("dga-progress-indicator-step", { key: 'e6b1985a8188d01d91deb94447f9fbd45aabfe22', title: "Step Three", description: "this is step description", nextStep: false, currentStep: 3 })), h("dga-progress-indicator", { key: '2d01e140a5d7dd2a4958f78cf81125b977df7eb4', activeStep: this.activeStep2, alignment: 'vertical' }, h("dga-progress-indicator-step", { key: 'b092938f317c3636f24fb90a05be4a4c69431bc0', title: "Step One", description: "this is step description", currentStep: 1 }), h("dga-progress-indicator-step", { key: '7a822aa16320248a4e10ff46d1d93ca21ca3f608', title: "Step Two", description: "this is step description", currentStep: 2 }), h("dga-progress-indicator-step", { key: 'dd7f2b999d76e8d0a5943d4931c51f40aed21257', title: "Step Three", description: "this is step description", nextStep: false, currentStep: 3 }))), h("div", { key: 'ae324cad10ea6807cc40cdc3f2507fb6a078e620', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-progress-indicator-v3-usage"; }
    static get states() {
        return {
            "activeStep": {},
            "activeStep2": {}
        };
    }
}
