import { h } from "@stencil/core";
export class DgaModalUsage {
    constructor() {
        this.show = false;
    }
    render() {
        return (h("div", { key: '7d2d6aa63024d9b0371c931769fa96f9e1de7046', style: { position: "relative" } }, h("h1", { key: 'd87f7b1c6c4aa6b128be8d75b394989789df4572' }, "Modal Example"), h("button", { key: '13d5029867907a942f53d208df4825a790bfae05', onClick: () => this.show = true }, "Open Modal"), h("dga-modal", { key: '59c2f42ed127a5a9fda2097716af5faa1af02d8a', buttonsList: [
                {
                    extraClass: '',
                    label: 'Close',
                    onClick: () => { },
                    title: 'Close Modal'
                }
            ], closeButton: true, modalTitle: "Basic Modal", name: "basicModal", onClose: () => { }, open: this.show }, "This is a simple modal with default configuration."), this.show ? "shown" : "hidden"));
    }
    static get is() { return "dga-modal-usage"; }
    static get states() {
        return {
            "show": {}
        };
    }
}
