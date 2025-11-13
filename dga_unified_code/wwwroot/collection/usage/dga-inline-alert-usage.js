import { h } from "@stencil/core";
export class DgaInlineAlertUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: 'd730d08a268f65de95252416ea9cb55658f0ebd2', dir: 'rlt' }, h("h1", { key: '00611aa2358e6803ecffcb7ccc82b813f80dc708' }, "Inline ALert Example"), h("div", { key: '0c5eb05a0e0d9d0fd9fef987290e39514b1feee1', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '659a0077f7f352d4ae68e30bbcddf21665578f38', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-inline-alert", { key: '08a0598d15d6c7b6fafdff4a35f31bd007c072c2', type: "neutral", leadText: "Notification/Alert message title ", helperText: "When a nation, it goes here.", colored: true }), h("dga-inline-alert", { key: 'd272cbaf9334fb43819809dde6506a310cb8f82f', type: "error", leadText: "Notification/Alert message title ", helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", colored: true }), h("dga-inline-alert", { key: 'c35de2277027cfaf8b46eef5a3ee9b6d80009c77', type: "info", leadText: "Notification/Alert message title ", helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", colored: true }), h("dga-inline-alert", { key: 'e0329860d6801f71d31275c95ecfce476d8b5f35', type: "success", leadText: "Notification/Alert message title ", helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", colored: true }), h("dga-inline-alert", { key: '37559bd6c720e8342346b6c8245d408cc51f0d9a', type: "warning", leadText: "Notification/Alert message title ", helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", colored: true })), h("div", { key: '9bc5b9ac210d78a64a918d17d7eb4c7c59364e38', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-inline-alert-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
