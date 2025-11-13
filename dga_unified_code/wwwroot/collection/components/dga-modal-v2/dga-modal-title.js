import { h } from "@stencil/core";
export class DgaModalTitle {
    render() {
        return (h("h4", { key: '23665600b5e9cc79a214e7e6a0fdce50da22b47c', class: "dga-modal__title" }, h("slot", { key: 'e9fbfcef60fce0d6d82f4c4c43b9020cd4e30af0' })));
    }
    static get is() { return "dga-modal-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-modal-title.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-modal-title.css"]
        };
    }
}
