import { h } from "@stencil/core";
export class DgaSearchBoxUsage {
    constructor() {
        this.value = 'test';
    }
    render() {
        return (h("div", { key: 'a0fd32ce19eb357c35b9b68e806c1aaf73dd0257' }, h("h1", { key: 'f0de4d9d187977fd091b441c664657e803071b16' }, "Search Box Example"), h("div", { key: '64c4011f6f7b1d2bbfa83896072cdf5398563f95', style: { padding: '50px' } }, h("div", { key: 'b97ce8ed9f808c2991c06fd07488884d2a8ba7c6', style: { display: "flex", flexDirection: "column", gap: "16px" } }, h("dga-search-box", { key: '2753f93da36381860997c5f98d3d9cef58163555', variant: 'default', value: this.value, placeholder: 'test placeholder', onChange: (e) => {
                const target = e.target;
                console.log("search changed");
                this.value = target.value;
            }, onInput: (e) => {
                console.log("search changed", e.target.value);
                this.value = e.target.value;
            } })))));
    }
    static get is() { return "dga-search-box-usage"; }
    static get states() {
        return {
            "value": {}
        };
    }
}
