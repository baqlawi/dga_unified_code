import { h, Host } from "@stencil/core";
export class CarouselItem {
    render() {
        return (h(Host, { key: '5de58bac361baad96bcf735c15a133801854c0ca' }, h("slot", { key: 'dbddb8ae8602b5f95991d784ce7816e56b936bde' })));
    }
    static get is() { return "dga-carousel-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-carousel-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-carousel-item.css"]
        };
    }
}
