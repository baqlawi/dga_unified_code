import { h } from "@stencil/core";
export class DgaModal {
    render() {
        return (h("div", { key: '72def0d381c2469caf323344759c16796fdb6c73', class: "dga-modal__body" }, h("slot", { key: '579e4331091820903cf1c3ba1bc31e390bbde99d' })));
    }
    static get is() { return "dga-modal-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-modal-body.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-modal-body.css"]
        };
    }
}
