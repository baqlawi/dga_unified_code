import { h } from "@stencil/core";
export class DgaProgressIndicatorUsage {
    constructor() {
        this.activeStep = 1;
        this.activeStep2 = 1;
    }
    render() {
        console.log(this.activeStep);
        return (h("div", { key: 'e40057b4aa6094055d831b65f69513ad57ee771b' }, h("h1", { key: '6667fd0577a21ff69f5eaae94d4da57d06a7f742' }, "Progress Indicator Example"), h("div", { key: '72c006da05814407e8b94b86f97d81895b9c475c', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'e4b668436703a2642ee49f360582c1b9ebf1c0f4', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("button", { key: '72f4088c852e2fce03b2288b99d99a867030fc53', onClick: () => (this.activeStep = this.activeStep - 1) }, "prev"), h("button", { key: 'cb40e66ef1b117c810ce9db0276a6e6802e87dad', onClick: () => (this.activeStep = this.activeStep + 1) }, "next"), h("button", { key: '892f618922a1c302c3e072699646e449fd50b7ff', onClick: () => (this.activeStep2 = this.activeStep2 - 1) }, "prev 2"), h("button", { key: '7d67e223169c86e4f4f1c8d4419932ce0d82c1fa', onClick: () => (this.activeStep2 = this.activeStep2 + 1) }, "next 2"), "activeStep: ", this.activeStep, h("dga-progress-indicator", { key: 'bdd09c4d8b1fe495737bc8e4a08ae41ef1b08952', activeStep: this.activeStep, alignment: 'vertical' }, h("dga-progress-indicator-step", { key: '1fa40a7ffa4fc01abfa36dcbaeafa6a7d9b170e7', title: "Step One", description: "this is step description", currentStep: 1 }), h("dga-progress-indicator-step", { key: '000303b7f14d7b985d7d241272636826c3bdc78a', title: "Step Two", description: "this is step description", currentStep: 2 }), h("dga-progress-indicator-step", { key: 'f36c9ce2e5285e111602911e18585d9e36180617', title: "Step Three", description: "this is step description", nextStep: false, currentStep: 3 })), h("dga-progress-indicator", { key: '901163a5ccbc9cb48d380a7e221a6c43230b3fc3', activeStep: this.activeStep2, alignment: 'vertical' }, h("dga-progress-indicator-step", { key: '2f47f53f4640437a45b04727e7c41dab81634d68', title: "Step One", description: "this is step description", currentStep: 1 }), h("dga-progress-indicator-step", { key: '6195f65005e1d92e7e8740557a61c181be0c82f2', title: "Step Two", description: "this is step description", currentStep: 2 }), h("dga-progress-indicator-step", { key: '8d8ba1e37c6d88cf782b5c59d1aea63120e1064c', title: "Step Three", description: "this is step description", nextStep: false, currentStep: 3 }))), h("div", { key: '9766c0ae839dfe331f247efa1072b848df64427e', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-progress-indicator-usage"; }
    static get states() {
        return {
            "activeStep": {},
            "activeStep2": {}
        };
    }
}
