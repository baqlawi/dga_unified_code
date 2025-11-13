import { h } from "@stencil/core";
export class DgaDateFieldUsage {
    constructor() {
        this.value = '';
    }
    render() {
        return (h("div", { key: '20bc43ac43eace86456e2b814688eeb2bc98cb84' }, h("h1", { key: '931f172aa52f7efb81637090c9448d34f68bc8de' }, "Date Field Example"), h("div", { key: '9c82ab0d16cb16f885d8f80a2ff14c19920e9e92', style: { padding: '50px' } }, h("div", { key: '0b5406a22a7a64e78ab9ec9cd5c1a7199a5515eb', style: { display: "flex", flexDirection: "column", gap: "16px" } }, h("input", { key: '6a94d756cb6b2b8623571b89f586ec3d871be84d', type: "date", value: this.value, onChange: (e) => this.value = e.target.value }), h("dga-date-field", { key: '36c5db525e3261b1e3e1148f28d7ab756b65bde8', value: this.value, onChange: (e) => this.value = e.target.value })))));
    }
    static get is() { return "dga-date-field-usage"; }
    static get states() {
        return {
            "value": {}
        };
    }
}
