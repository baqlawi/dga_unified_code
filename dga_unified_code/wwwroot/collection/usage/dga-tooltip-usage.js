import { h } from "@stencil/core";
export class DgaTooltipUsage {
    constructor() {
        this.activeStep = 1;
    }
    render() {
        return (h("div", { key: 'e5cbbab7b49db1ee99c95eed77d785ecb8e62461' }, h("h1", { key: 'c5c4b575154a86fcd81660bd2b2f8fa0f66af4c4' }, "Tooltip Example"), h("div", { key: '7943a66330e3faeaf2254f603c6ebeace454d898', style: { padding: "50px", display: "flex", gap: "20px" } }, h("div", { key: 'cc23a9a5ce4bccdd257246e09f7e26c67e000a98', style: { display: "flex", flexDirection: "column", gap: "20px" } }, h("dga-tooltip", { key: '83b927809a6a5168fa1ea8f8b31fcb32912466ff', title: "Tooltip title", helperText: "Max width of tooltips is 240px - text will wrap automatically", direction: 'right', theme: 'dark', icon: true, beakAlignment: 'end', beakPlacement: 'left', feedbackIcon: {
                type: "error-!",
                style: "container",
                size: 24
            } }, "Hello")), h("div", { key: '2064cf93b363381b287af23a79c9126d019da2de', style: { display: "flex", flexDirection: "column", gap: "20px" } }))));
    }
    static get is() { return "dga-tooltip-usage"; }
    static get states() {
        return {
            "activeStep": {}
        };
    }
}
