import { h } from "@stencil/core";
export class DgaCardContent {
    render() {
        return (h("div", { key: '6954c1c5983c948327f71cb46e01787af52b2bf6', class: `card__content` }, h("slot", { key: '874321faa6047fc96953099ee0323f6a12ab152d' })));
    }
    static get is() { return "dga-card-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-card-content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-card-content.css"]
        };
    }
}
