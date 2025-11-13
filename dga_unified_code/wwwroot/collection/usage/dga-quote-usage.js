import { h } from "@stencil/core";
export class DgaQuoteUsage {
    constructor() {
        this.activeStep = 1;
    }
    render() {
        return (h("div", { key: '8f4988acd8543e868f6d0608ea52afc320b4288c' }, h("h1", { key: '64c1df5abb62ff297725ce334004c159e5f6d115' }, "Quote Example"), h("div", { key: 'd1fca9e5f7c0d9df5c58b8bc3d4131fb74fff68a', style: { padding: "50px", display: "flex", gap: "20px" } }, h("div", { key: '77ac8bac8ed07a0c9547e2a606aacffed892cbb2', style: { display: "flex", flexDirection: "column", gap: "20px" } }, h("dga-quote", { key: 'e34c50a28d5423906abe922e8dbc94c6708428bd', quoteTitle: 'Title of quote', quoteDescription: 'The quote is placed here to highlight a specific saying or to present a brief quote that expresses an important idea or concept.', authorName: "Author's name", authorDescription: 'brief or description.' }), h("dga-quote", { key: 'aa0b232a95fdc39c09212a9458a122813ad605c5', quoteTitle: 'Title of quote', quoteDescription: 'The quote is placed here to highlight a specific saying or to present a brief quote that expresses an important idea or concept.', authorName: "Author's name", authorDescription: 'brief or description.', whiteBackground: true })), h("div", { key: '38fce22e8e8a32cb6123c882e5b1ca03b6f18ed0', style: { display: "flex", flexDirection: "column", gap: "20px" } }))));
    }
    static get is() { return "dga-quote-usage"; }
    static get states() {
        return {
            "activeStep": {}
        };
    }
}
