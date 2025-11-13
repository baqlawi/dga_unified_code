import { h, Host } from "@stencil/core";
export class DgaCardExpandableContent {
    render() {
        return (h(Host, { key: '3ef125b82ea273ec7ddc8311bb7d4569a6e22160' }, h("slot", { key: 'd4c254d27b712c28f32dee8e19f9ecba076c6d5e' })));
    }
    static get is() { return "dga-card-expandable-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-card-expandable-content.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-card-expandable-content.css"]
        };
    }
}
