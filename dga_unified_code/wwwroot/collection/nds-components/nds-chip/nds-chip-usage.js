import { h } from "@stencil/core";
export class NdsChipUsage {
    constructor() {
        this.isSelected = false;
    }
    render() {
        return (h("div", { key: '2cf5d5ab346bcb016cc4f6d055922d9d42de5a4e' }, h("h1", { key: '169b555c400c680e15bfadf321fb90bf9cd5e71f' }, "Chip Example"), h("div", { key: 'e1aaa1e056f16749948e3095f328e9429506f431', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '509f336f21f2444974d4049b57c5189b676ad8dd', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("nds-chip", { key: '14d261405530f060e3aabc1a343ca695b78ca95d', label: "Label", variant: "neutral",
            //   outlined={false}
            rounded: false, size: "lg" }), h("nds-chip", { key: '1f67033fdce409f29b726e3902b94ff486c26cbf', label: "Label", variant: "success", rounded: false, size: "lg", onChange: isSelected => {
                console.log(isSelected, 'hi');
                this.isSelected = isSelected;
            }, selected: this.isSelected }), h("nds-chip", { key: '1c1b9e611f91246062422e7554c1be2c59066cf4', label: "Label", variant: "success", rounded: false, size: "lg", onChange: isSelected => {
                console.log(isSelected, 'hi');
            }, selected: false }), h("nds-chip", { key: '6e51c45bfefc6c746b5348de47b56de5a224b2ba', label: "Label", variant: "success", rounded: false, size: "lg", disabled: true }), h("div", { key: '7b578860c887ff5225cad3e96f1f4d2f37018d1b', style: { display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#074D31' } }, h("nds-chip", { key: 'b79385f13febb296e07c8f02a50966e10990d88e', label: "Label", variant: "on-color", rounded: true, size: "lg", disabled: true }))))));
    }
    static get is() { return "nds-chip-usage"; }
    static get states() {
        return {
            "isSelected": {}
        };
    }
}
