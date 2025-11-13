import { h } from "@stencil/core";
export class DgaRadioButtonUsage {
    constructor() {
        this.activeStep = 1;
        this.activeRadio = "radion-1";
    }
    render() {
        return (h("div", { key: '59ba56e78ae9fd6fccffcd9dbbce8c5cfc105902' }, h("h1", { key: 'e5322c7f911cc26c10cc59b329c79b876681dcaf' }, "RadioButton Example"), h("div", { key: '3e150f3ed7a26c9d89c5b807a7d63f65581117be', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '8982c08881a26f9f7b110ac0f0f444265e3d5977', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-radio-button", { key: 'fb41a0bc910961fc1dd5aeb960cb057ffcdcdd63',
            // id="radio1"
            label: "Radio Label 1", hasHelperText: true, helperText: "When a selection needs a further detailed explanation, it goes here.", alertMessage: true, alertText: "Error/Warning message", name: "radio", value: 'radion-1', checked: this.activeRadio === 'radion-1', onChange: (e) => this.activeRadio = e.target.value }), h("dga-radio-button", { key: 'd6c48b2d5c44be2306e44539dd6deb05d9c3c506',
            // id="radio2"
            label: "Radio Label 2", hasHelperText: true, helperText: "When a selection needs a further detailed explanation, it goes here.", alertMessage: true, alertText: "Error/Warning message", name: "radio", value: 'radion-2', checked: this.activeRadio === 'radion-2', onChange: (e) => this.activeRadio = e.target.value })), h("div", { key: '281cc70182db804879f28e352eeb8377814e00da', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-radio-button-usage"; }
    static get states() {
        return {
            "activeStep": {},
            "activeRadio": {}
        };
    }
}
