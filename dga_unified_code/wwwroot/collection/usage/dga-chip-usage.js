import { h } from "@stencil/core";
export class DgaChipUsage {
    constructor() {
        this.isSelected = false;
    }
    render() {
        return (h("div", { key: '66eda235a7ec6446b51d9cadfdd3b08559e5daf8' }, h("h1", { key: 'b458c2f4fc61414f443a598ff8d60e7f0758ae83' }, "Chip Example"), h("div", { key: '6a60a71eb7c0ced5bafd2ae38bc57639be3b70c1', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'f704d56e4f8bf784740e53fba5084af0632ddd66', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-chip", { key: 'a964890d9e48a0b3b16d6c15056e4ed3c1e0daeb', label: "Label", variant: "neutral",
            //   outlined={false}
            rounded: false, size: "lg" }), h("dga-chip", { key: 'c135fca8c1eab755708382570bfee54a9d28926f', label: "Label", variant: "success", rounded: false, size: "lg", onChange: (isSelected) => {
                console.log(isSelected, "hi");
                this.isSelected = isSelected;
            }, isSelected: this.isSelected }), h("dga-chip", { key: '1258767d03a873b5541a066f531e83effa475fb1', label: "Label", variant: "success", rounded: false, size: "lg", onChange: (isSelected) => {
                console.log(isSelected, "hi");
            }, isSelected: false }), h("dga-chip", { key: '92002798917bb8a4a231abe0441bd25dcc377ff0', label: "Label", variant: "success", rounded: false, size: "lg", disabled: true }), h("div", { key: 'deb8e27d0ef297790ceea9da959d5112815ff012', style: { display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#074D31' } }, h("dga-chip", { key: '53bfbbe7b7cbcbeea18e161ded679c8ef85e4189', label: "Label", variant: "on-color", rounded: true, size: "lg", disabled: true }))))));
    }
    static get is() { return "dga-chip-usage"; }
    static get states() {
        return {
            "isSelected": {}
        };
    }
}
