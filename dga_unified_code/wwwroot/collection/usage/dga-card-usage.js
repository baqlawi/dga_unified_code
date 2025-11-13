import { h } from "@stencil/core";
export class DgaCardUsage {
    constructor() {
        this.variant = 'neutral';
        this.selected = false;
    }
    render() {
        return (h("div", { key: '3303f9ca0d1ca5f366db9122156d6289a97845e8' }, h("h1", { key: '20e73672e0dc8549382adbed4ee87a58d3ed1fb8' }, "Card Example"), h("div", { key: 'bb546b3ba10afa1d4a1b82f5359d1b265bc6cc00', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'e14b5bfd629fde7904a0295f28b4c0a8eb39f575', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-card", { key: '844e264b21f36a6286538b54aba0d1cbcc699271', type: "expanded", cardTitle: "Card Title", description: "Card content placeholder text goes here", showFeaturedIcon: true }, h("div", { key: '8475d7743e84b7f4e2e1a1e4f59490b494f20c6c', slot: "collapse-content" }, "dgdsgdfgdfg")), h("dga-card", { key: '865b144e2ab7b8d982e86267b59d59f74caf020e', type: "selectable", cardTitle: "Card Title", description: "Card content placeholder text goes here", isSelected: this.selected, onCheckboxChange: () => (this.selected = !this.selected) }), h("dga-card", { key: '1d6d9c1e686839f03c7273684423f6054fbf2d16', cardTitle: "Card Title", sx: {
                '& > .card': {
                    backgroundColor: 'red',
                    height: '400px',
                },
            } }), h("dga-card", { key: '60f9eae5db1f4ab01d39cfe887a482979630286b', cardTitle: "No Shadow", effect: "no-shadow" }), h("dga-card", { key: '343c535400adc65be3f65353380927fbb6a80a7e', cardTitle: "Stroke", effect: "stroke" }), h("dga-card", { key: 'a0f28915413038c9e10dd4b9f95aaf474437c978', cardTitle: "With Shadow", effect: "with-shadow" })), h("div", { key: '350c29fedd677fd189fba46178d37bd84da52e12', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-card-usage"; }
    static get states() {
        return {
            "variant": {},
            "selected": {}
        };
    }
}
